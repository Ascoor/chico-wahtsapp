import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import LoadingOverlay from "@/components/LoadingOverlay";
import RouteChangeListener from "@/components/RouteChangeListener";
import AppRoutes from "@/routes/AppRoutes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LoadingOverlay />
      <AuthProvider>
<BrowserRouter basename={import.meta.env.BASE_URL}>
          <RouteChangeListener />
            <AppRoutes />
          </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
