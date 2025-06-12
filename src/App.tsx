
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FCLBooking from "./pages/FCLBooking";
import LCLBooking from "./pages/LCLBooking";
import BookingSuccess from "./pages/BookingSuccess";
import Orders from "./pages/Orders";
import CarrierRegistration from "./pages/CarrierRegistration";
import CarrierPending from "./pages/CarrierPending";
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
          <Route path="/fcl-booking" element={<FCLBooking />} />
          <Route path="/lcl-booking" element={<LCLBooking />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/carrier-registration" element={<CarrierRegistration />} />
          <Route path="/carrier-pending" element={<CarrierPending />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
