
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FCLBookingForm from "@/components/FCLBookingForm";
import CarrierList from "@/components/CarrierList";

export interface BookingFormData {
  from: string;
  to: string;
  containerSize: string;
  containerType: string;
}

const FCLBooking = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    from: "",
    to: "",
    containerSize: "",
    containerType: ""
  });
  
  const [showCarriers, setShowCarriers] = useState(false);
  const [selectedCarrier, setSelectedCarrier] = useState<string | null>(null);

  const handleFormSubmit = (data: BookingFormData) => {
    setFormData(data);
    setShowCarriers(true);
  };

  const handleCarrierSelect = (carrierId: string) => {
    setSelectedCarrier(carrierId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Đặt Xe Nguyên Container (FCL)
          </h1>
          <p className="text-muted-foreground">
            Điền thông tin để tìm và đặt xe phù hợp với nhu cầu của bạn
          </p>
        </div>
        
        <div className="flex gap-8">
          <div className={`transition-all duration-500 ${showCarriers ? 'w-1/2' : 'w-full'}`}>
            <FCLBookingForm onFormSubmit={handleFormSubmit} />
          </div>
          
          {showCarriers && (
            <div className="w-1/2 animate-in slide-in-from-right duration-500">
              <CarrierList 
                formData={formData}
                onCarrierSelect={handleCarrierSelect}
                selectedCarrier={selectedCarrier}
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FCLBooking;
