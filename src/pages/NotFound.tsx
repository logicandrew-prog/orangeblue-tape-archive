import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="font-display text-8xl text-primary mb-4">404</h1>
        <h2 className="font-display text-3xl text-foreground mb-4">
          Страница не найдена
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          К сожалению, запрашиваемая страница не существует. 
          Возможно, кассета размагнитилась...
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          <Home className="w-4 h-4" />
          Вернуться на главную
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
