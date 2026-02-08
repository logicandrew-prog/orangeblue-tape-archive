import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import ManufacturerPage from "./pages/ManufacturerPage";
import VideoCatalog from "./pages/VideoCatalog";
import VideoManufacturerPage from "./pages/VideoManufacturerPage";
import AboutVideo from "./pages/AboutVideo";
import About from "./pages/About";
import PrintedCatalogs from "./pages/PrintedCatalogs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<ManufacturerPage />} />
          <Route path="/video-catalog" element={<VideoCatalog />} />
          <Route path="/video-catalog/:id" element={<VideoManufacturerPage />} />
          <Route path="/about-video" element={<AboutVideo />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalogs" element={<PrintedCatalogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
