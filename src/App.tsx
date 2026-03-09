import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import ManufacturerPage from "./pages/ManufacturerPage";
import VideoCatalog from "./pages/VideoCatalog";
import VideoManufacturerPage from "./pages/VideoManufacturerPage";
import PrintedCatalogs from "./pages/PrintedCatalogs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => (
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
        <Route path="/catalogs" element={<PrintedCatalogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
