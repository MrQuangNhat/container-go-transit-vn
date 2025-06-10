
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import LCLBookingForm from "@/components/LCLBookingForm";

export interface LCLBookingFormData {
  from: string;
  to: string;
  cargoType: string;
  length: string;
  width: string;
  height: string;
  weight: string;
}

const LCLBooking = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (data: LCLBookingFormData) => {
    console.log("LCL booking data:", data);
    // Simulate booking creation
    navigate("/booking-success");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Tạo Đơn Hàng Lẻ (LCL)
            </h1>
            <p className="text-muted-foreground">
              Điền thông tin hàng hóa để tạo đơn vận chuyển hàng lẻ
            </p>
          </div>
          <LCLBookingForm onFormSubmit={handleFormSubmit} />
        </div>
      </div>
    </div>
  );
};

export default LCLBooking;
