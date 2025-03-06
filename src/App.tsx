
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FinancialAppRedesign from "./pages/case-studies/FinancialAppRedesign";
import EcommerceWebsite from "./pages/case-studies/EcommerceWebsite";
import HealthcarePatientPortal from "./pages/case-studies/HealthcarePatientPortal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-study/financial-app-redesign" element={<FinancialAppRedesign />} />
          <Route path="/case-study/ecommerce-website" element={<EcommerceWebsite />} />
          <Route path="/case-study/healthcare-patient-portal" element={<HealthcarePatientPortal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
