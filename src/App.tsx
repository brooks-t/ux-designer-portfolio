
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FreeFile from "./pages/case-studies/FreeFile";
import EcommerceWebsite from "./pages/case-studies/EcommerceWebsite";
import SmokingCessation from "./pages/case-studies/SmokingCessation";
import { ThemeProvider } from "./components/ThemeProvider";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/case-study/free-file" element={<FreeFile />} />
            <Route path="/case-study/ecommerce-website" element={<EcommerceWebsite />} />
            <Route path="/case-study/smoking-cessation" element={<SmokingCessation />} />
            {/* Redirect from old URLs to maintain backward compatibility */}
            <Route path="/case-study/financial-app-redesign" element={<Navigate to="/case-study/free-file" replace />} />
            <Route path="/case-study/healthcare-patient-portal" element={<Navigate to="/case-study/smoking-cessation" replace />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
