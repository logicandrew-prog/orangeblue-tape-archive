
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Plus, Pencil, Trash2, Globe, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

const ArticleList = () => {
    const { toast } = useToast();
    const queryClient = useQueryClient();
    const [deleteId, setDeleteId] = useState<string | null>(null);

    const { data: articles, isLoading } = useQuery({
        queryKey: ["articles"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("articles")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) throw error;
            return data;
        },
    });

    const deleteMutation = useMutation({
        mutationFn: async (id: string) => {
            const { error } = await supabase.from("articles").delete().eq("id", id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["articles"] });
            toast({
                title: "Статья удалена",
                description: "Статья была успешно удалена.",
            });
            setDeleteId(null);
        },
        onError: (error) => {
            toast({
                variant: "destructive",
                title: "Ошибка",
                description: error.message,
            });
        },
    });

    if (isLoading) {
        return <div className="flex justify-center p-8">Загрузка...</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-display font-bold">Статьи</h1>
                <Button asChild>
                    <Link to="/admin/articles/new">
                        <Plus className="mr-2 h-4 w-4" />
                        Добавить статью
                    </Link>
                </Button>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Заголовок</TableHead>
                            <TableHead>Slug</TableHead>
                            <TableHead>Статус</TableHead>
                            <TableHead>Дата создания</TableHead>
                            <TableHead className="text-right">Действия</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {articles?.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center h-24 text-muted-foreground">
                                    Нет статей. Создайте первую!
                                </TableCell>
                            </TableRow>
                        ) : (
                            articles?.map((article) => (
                                <TableRow key={article.id}>
                                    <TableCell className="font-medium">{article.title}</TableCell>
                                    <TableCell className="text-muted-foreground">{article.slug}</TableCell>
                                    <TableCell>
                                        {article.is_published ? (
                                            <div className="flex items-center text-green-600 gap-2 text-sm">
                                                <Globe className="h-4 w-4" />
                                                Опубликовано
                                            </div>
                                        ) : (
                                            <div className="flex items-center text-yellow-600 gap-2 text-sm">
                                                <EyeOff className="h-4 w-4" />
                                                Черновик
                                            </div>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {format(new Date(article.created_at), "dd.MM.yyyy")}
                                    </TableCell>
                                    <TableCell className="text-right space-x-2">
                                        <Button variant="ghost" size="icon" asChild>
                                            <Link to={`/admin/articles/${article.id}`}>
                                                <Pencil className="h-4 w-4" />
                                            </Link>
                                        </Button>

                                        <AlertDialog open={deleteId === article.id} onOpenChange={(open) => !open && setDeleteId(null)}>
                                            <AlertDialogTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="text-destructive hover:text-destructive hover:bg-destructive/10"
                                                    onClick={() => setDeleteId(article.id)}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>Удалить статью?</AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        Это действие необратимо. Статья "{article.title}" будет удалена навсегда.
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>Отмена</AlertDialogCancel>
                                                    <AlertDialogAction
                                                        onClick={() => deleteMutation.mutate(article.id)}
                                                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                                    >
                                                        Удалить
                                                    </AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default ArticleList;
