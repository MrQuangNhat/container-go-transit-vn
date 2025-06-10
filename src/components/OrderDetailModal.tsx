
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Calendar, Package, Truck, Star, QrCode, CreditCard } from "lucide-react";

interface OrderDetailModalProps {
  order: any;
  isOpen: boolean;
  onClose: () => void;
}

const OrderDetailModal = ({ order, isOpen, onClose }: OrderDetailModalProps) => {
  const [rating, setRating] = useState(order?.rating || 0);

  if (!order) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-transit":
        return "bg-blue-100 text-blue-800";
      case "pending-payment":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Đã hoàn thành";
      case "in-transit":
        return "Đang vận chuyển";
      case "pending-payment":
        return "Chờ thanh toán";
      default:
        return status;
    }
  };

  const handleRatingClick = (star: number) => {
    setRating(star);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Chi tiết đơn hàng</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Order Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Thông tin đơn hàng</span>
                <Badge className={getStatusColor(order.status)}>
                  {getStatusText(order.status)}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-muted-foreground">Mã đơn hàng:</span>
                  <p className="font-medium">{order.id}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Ngày tạo:</span>
                  <p className="font-medium">{order.createdDate}</p>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="text-lg">{order.from} → {order.to}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-muted-foreground">Container:</span>
                  <p className="font-medium">{order.containerSize} - {order.containerType}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Nhà vận tải:</span>
                  <p className="font-medium">{order.carrier}</p>
                </div>
              </div>
              
              <div className="text-right">
                <span className="text-muted-foreground">Giá cước:</span>
                <p className="text-2xl font-bold text-primary">{order.price}</p>
              </div>
            </CardContent>
          </Card>

          {/* Payment Info for pending payment orders */}
          {order.status === "pending-payment" && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Thông tin thanh toán</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-white p-4 rounded-lg border-2 border-dashed border-muted">
                    <QrCode className="h-32 w-32 text-muted-foreground" />
                  </div>
                  <div className="text-center">
                    <p className="font-medium">Quét mã QR để thanh toán</p>
                    <p className="text-sm text-muted-foreground">
                      Số tiền: <span className="font-medium">{order.price}</span>
                    </p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">STK:</span> 0123456789</p>
                    <p><span className="font-medium">Ngân hàng:</span> Vietcombank</p>
                    <p><span className="font-medium">Chủ TK:</span> ContainerExpress</p>
                    <p><span className="font-medium">Nội dung:</span> {order.id}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Shipping Progress for in-transit orders */}
          {order.status === "in-transit" && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Truck className="h-5 w-5" />
                  <span>Tiến độ vận chuyển</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Đã nhận hàng tại {order.from}</span>
                    <span className="text-sm text-muted-foreground ml-auto">15/01/2024</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>Đang vận chuyển</span>
                    <span className="text-sm text-muted-foreground ml-auto">16/01/2024</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <span className="text-muted-foreground">Dự kiến giao hàng tại {order.to}</span>
                    <span className="text-sm text-muted-foreground ml-auto">{order.deliveryDate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Rating for completed orders */}
          {order.status === "completed" && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5" />
                  <span>Đánh giá dịch vụ</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span>Đánh giá:</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-6 w-6 cursor-pointer ${
                          star <= rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                        onClick={() => handleRatingClick(star)}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Đã giao hàng thành công vào {order.deliveryDate}</p>
                </div>
                {rating > 0 && (
                  <Button className="w-full">
                    Gửi đánh giá
                  </Button>
                )}
              </CardContent>
            </Card>
          )}

          <div className="flex justify-end">
            <Button variant="outline" onClick={onClose}>
              Đóng
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailModal;
