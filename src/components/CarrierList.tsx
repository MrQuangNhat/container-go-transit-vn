
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Star, Clock } from "lucide-react";
import type { BookingFormData } from "@/pages/FCLBooking";

interface CarrierListProps {
  formData: BookingFormData;
  onCarrierSelect: (carrierId: string) => void;
  selectedCarrier: string | null;
}

// Mock data cho nhà vận tải
const mockCarriers = [
  {
    id: "1",
    name: "Vietrans Logistics",
    price: "12,500,000",
    rating: 4.8,
    transitTime: "2-3 ngày",
    image: "/placeholder.svg",
    features: ["Bảo hiểm toàn diện", "Theo dõi GPS", "Hỗ trợ 24/7"]
  },
  {
    id: "2", 
    name: "Saigon Express",
    price: "11,800,000",
    rating: 4.6,
    transitTime: "3-4 ngày",
    image: "/placeholder.svg",
    features: ["Giá tốt nhất", "Đóng gói miễn phí", "Thanh toán linh hoạt"]
  },
  {
    id: "3",
    name: "Vietnam Container Line",
    price: "13,200,000", 
    rating: 4.9,
    transitTime: "1-2 ngày",
    image: "/placeholder.svg",
    features: ["Nhanh nhất", "Ưu tiên cao", "Dịch vụ cao cấp"]
  }
];

const CarrierList = ({ formData, onCarrierSelect, selectedCarrier }: CarrierListProps) => {
  const navigate = useNavigate();

  const handleConfirmBooking = () => {
    if (selectedCarrier) {
      navigate("/booking-success");
    }
  };

  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Nhà Vận Tải Khả Dụng
        </h3>
        <p className="text-sm text-muted-foreground">
          {formData.from} → {formData.to} | {formData.containerSize} {formData.containerType}
        </p>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {mockCarriers.map((carrier) => (
          <Card 
            key={carrier.id} 
            className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
              selectedCarrier === carrier.id ? 'ring-2 ring-primary border-primary' : 'hover:border-primary/50'
            }`}
            onClick={() => onCarrierSelect(carrier.id)}
          >
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <img 
                  src={carrier.image} 
                  alt={carrier.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{carrier.name}</h4>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">{carrier.price} VNĐ</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{carrier.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{carrier.transitTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Truck className="w-4 h-4" />
                      <span>FCL</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {carrier.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedCarrier && (
        <div className="pt-4 border-t">
          <Button 
            onClick={handleConfirmBooking}
            className="w-full" 
            size="lg"
          >
            Xác Nhận Tạo Đơn
          </Button>
        </div>
      )}
    </div>
  );
};

export default CarrierList;
