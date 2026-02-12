import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import ManufacturerPage from "./pages/ManufacturerPage";
import VideoCatalog from "./pages/VideoCatalog";
import VideoManufacturerPage from "./pages/VideoManufacturerPage";
import PrintedCatalogs from "./pages/PrintedCatalogs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

// Admin components
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ArticleList from "./pages/admin/ArticleList";
import ArticleEditor from "./pages/admin/ArticleEditor";
import ContactEditor from "./pages/admin/ContactEditor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<ManufacturerPage />} />
            <Route path="/video-catalog" element={<VideoCatalog />} />
            <Route path="/video-catalog/:id" element={<VideoManufacturerPage />} />
            <Route path="/catalogs" element={<PrintedCatalogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />

            {/* Admin Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="articles" element={<ArticleList />} />
                <Route path="articles/new" element={<ArticleEditor />} />
                <Route path="articles/:id" element={<ArticleEditor />} />
                <Route path="contacts" element={<ContactEditor />} />
              </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
