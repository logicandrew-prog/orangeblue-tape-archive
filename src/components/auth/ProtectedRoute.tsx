
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/components/auth/AuthProvider";

export const ProtectedRoute = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Загрузка...</div>;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};
