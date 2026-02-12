
import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Save, Loader2 } from "lucide-react";

const ContactEditor = () => {
    const { toast } = useToast();
    const queryClient = useQueryClient();

    const [formData, setFormData] = useState({
        contact_email: "",
        contact_intro: "",
    });

    const { data: settings, isLoading } = useQuery({
        queryKey: ["site_settings"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("site_settings")
                .select("*")
                .eq("id", 1)
                .single();

            if (error) {
                // If not found, returning defaults or null is handled by the UI or we can insert default
                if (error.code === 'PGRST116') return null; // Not found
                throw error;
            }
            return data;
        },
    });

    useEffect(() => {
        if (settings) {
            setFormData({
                contact_email: settings.contact_email || "",
                contact_intro: settings.contact_intro || "",
            });
        }
    }, [settings]);

    const mutation = useMutation({
        mutationFn: async (data: typeof formData) => {
            const { error } = await supabase
                .from("site_settings")
                .upsert({ id: 1, ...data });
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["site_settings"] });
            toast({
                title: "Настройки сохранены",
                description: "Контактная информация обновлена.",
            });
        },
        onError: (error) => {
            toast({
                variant: "destructive",
                title: "Ошибка",
                description: error.message,
            });
        },
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate(formData);
    };

    if (isLoading) {
        return <div className="flex justify-center p-8">Загрузка...</div>;
    }

    return (
        <div className="space-y-6 max-w-2xl mx-auto">
            <h1 className="text-3xl font-display font-bold">Настройки Контактов</h1>

            <form onSubmit={handleSubmit} className="space-y-8 bg-card p-6 rounded-lg border">
                <div className="grid gap-6">
                    <div className="grid gap-3">
                        <Label htmlFor="contact_email">Email для связи</Label>
                        <Input
                            id="contact_email"
                            name="contact_email"
                            value={formData.contact_email}
                            onChange={handleChange}
                            placeholder="tape@offmail.ru"
                            required
                        />
                        <p className="text-sm text-muted-foreground">
                            Этот email будет отображаться на странице контактов.
                        </p>
                    </div>

                    <div className="grid gap-3">
                        <Label htmlFor="contact_intro">Вступительный текст</Label>
                        <Textarea
                            id="contact_intro"
                            name="contact_intro"
                            value={formData.contact_intro}
                            onChange={handleChange}
                            placeholder="Есть вопросы о коллекционировании?..."
                            rows={4}
                        />
                        <p className="text-sm text-muted-foreground">
                            Текст, который отображается под заголовком "Обратная связь".
                        </p>
                    </div>
                </div>

                <div className="flex justify-end">
                    <Button type="submit" disabled={mutation.isPending}>
                        {mutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        <Save className="mr-2 h-4 w-4" />
                        Сохранить настройки
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ContactEditor;
