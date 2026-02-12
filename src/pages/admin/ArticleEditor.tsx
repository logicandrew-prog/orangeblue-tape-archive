
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save, Loader2 } from "lucide-react";

const ArticleEditor = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { toast } = useToast();
    const queryClient = useQueryClient();
    const isEditing = !!id;

    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        description: "",
        content: "",
        image_url: "",
        is_published: false,
    });

    const { data: article, isLoading: isLoadingArticle } = useQuery({
        queryKey: ["article", id],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("articles")
                .select("*")
                .eq("id", id)
                .single();

            if (error) throw error;
            return data;
        },
        enabled: isEditing,
    });

    useEffect(() => {
        if (article) {
            setFormData({
                title: article.title,
                slug: article.slug,
                description: article.description || "",
                content: article.content || "",
                image_url: article.image_url || "",
                is_published: article.is_published || false,
            });
        }
    }, [article]);

    const mutation = useMutation({
        mutationFn: async (data: typeof formData) => {
            if (isEditing) {
                const { error } = await supabase
                    .from("articles")
                    .update(data)
                    .eq("id", id);
                if (error) throw error;
            } else {
                const { error } = await supabase.from("articles").insert([data]);
                if (error) throw error;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["articles"] });
            queryClient.invalidateQueries({ queryKey: ["article", id] });
            toast({
                title: "Успешно!",
                description: isEditing ? "Статья обновлена." : "Статья создана.",
            });
            navigate("/admin/articles");
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

        // Auto-generate slug from title
        if (name === "title" && !isEditing) {
            const slug = value
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)+/g, "");
            setFormData((prev) => ({ ...prev, slug }));
        }
    };

    const handleSwitchChange = (checked: boolean) => {
        setFormData((prev) => ({ ...prev, is_published: checked }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate(formData);
    };

    if (isEditing && isLoadingArticle) {
        return <div className="flex justify-center p-8">Загрузка...</div>;
    }

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" onClick={() => navigate("/admin/articles")}>
                    <ArrowLeft className="h-4 w-4" />
                </Button>
                <h1 className="text-3xl font-display font-bold">
                    {isEditing ? "Редактировать статью" : "Новая статья"}
                </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 bg-card p-6 rounded-lg border">
                <div className="grid gap-6">
                    <div className="grid gap-3">
                        <Label htmlFor="title">Заголовок</Label>
                        <Input
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="История аудиокассеты"
                            required
                        />
                    </div>

                    <div className="grid gap-3">
                        <Label htmlFor="slug">Slug (URL)</Label>
                        <Input
                            id="slug"
                            name="slug"
                            value={formData.slug}
                            onChange={handleChange}
                            placeholder="history-of-audiocassette"
                            required
                        />
                    </div>

                    <div className="grid gap-3">
                        <Label htmlFor="description">Краткое описание (SEO)</Label>
                        <Textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Краткое описание для поисковиков..."
                            rows={3}
                        />
                    </div>

                    <div className="grid gap-3">
                        <Label htmlFor="image_url">URL Изображения</Label>
                        <Input
                            id="image_url"
                            name="image_url"
                            value={formData.image_url}
                            onChange={handleChange}
                            placeholder="/images/cassette.jpg"
                        />
                        {formData.image_url && (
                            <div className="mt-2 w-full max-w-sm rounded overflow-hidden border">
                                <img src={formData.image_url} alt="Preview" className="w-full h-auto object-cover" />
                            </div>
                        )}
                    </div>

                    <div className="grid gap-3">
                        <Label htmlFor="content">Контент (HTML поддерживается)</Label>
                        <Textarea
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            placeholder="<p>Текст статьи...</p>"
                            className="font-mono min-h-[300px]"
                        />
                    </div>

                    <div className="flex items-center space-x-2">
                        <Switch
                            id="is_published"
                            checked={formData.is_published}
                            onCheckedChange={handleSwitchChange}
                        />
                        <Label htmlFor="is_published">Опубликовано</Label>
                    </div>
                </div>

                <div className="flex justify-end gap-4">
                    <Button type="button" variant="outline" onClick={() => navigate("/admin/articles")}>
                        Отмена
                    </Button>
                    <Button type="submit" disabled={mutation.isPending}>
                        {mutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        <Save className="mr-2 h-4 w-4" />
                        Сохранить
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ArticleEditor;
