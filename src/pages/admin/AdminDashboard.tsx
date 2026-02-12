
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { FileText, Eye, MessageSquare } from "lucide-react";

const AdminDashboard = () => {
    const { data: stats } = useQuery({
        queryKey: ["admin-stats"],
        queryFn: async () => {
            const { count: articlesCount } = await supabase
                .from("articles")
                .select("*", { count: "exact", head: true });

            const { count: publishedCount } = await supabase
                .from("articles")
                .select("*", { count: "exact", head: true })
                .eq("is_published", true);

            return {
                articles: articlesCount || 0,
                published: publishedCount || 0,
            };
        },
    });

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-display font-bold">Дашборд</h1>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Всего статей</CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats?.articles || 0}</div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Опубликовано</CardTitle>
                        <Eye className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats?.published || 0}</div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AdminDashboard;
