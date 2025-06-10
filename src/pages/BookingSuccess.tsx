
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Home, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BookingSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <CardHeader className="pb-4">
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 p-6 rounded-full">
                  <CheckCircle className="h-16 w-16 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-3xl text-foreground mb-2">
                Tạo Đơn Thành Công!
              </CardTitle>
              <p className="text-lg text-muted-foreground">
                Đơn hàng của bạn đã được tạo và đang chờ thanh toán
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Thông tin đơn hàng</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mã đơn hàng:</span>
                    <span className="font-medium">#FCL2024001</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Thời gian tạo:</span>
                    <span className="font-medium">{new Date().toLocaleString('vi-VN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Trạng thái:</span>
                    <span className="font-medium text-yellow-600">Chờ thanh toán</span>
                  </div>
                </div>
              </div>

              <div className="text-left space-y-4">
                <h4 className="font-semibold text-foreground">Bước tiếp theo:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="font-bold text-primary">1.</span>
                    <span>Hoàn tất thanh toán để xác nhận đơn hàng</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="font-bold text-primary">2.</span>
                    <span>Nhà vận tải sẽ liên hệ sau khi thanh toán thành công</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="font-bold text-primary">3.</span>
                    <span>Theo dõi tiến độ vận chuyển qua email và SMS</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  onClick={() => navigate("/")}
                  variant="outline" 
                  className="flex items-center space-x-2"
                >
                  <Home className="w-4 h-4" />
                  <span>Về Trang Chủ</span>
                </Button>
                <Button 
                  onClick={() => navigate("/orders")}
                  className="flex items-center space-x-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Xem Đơn Hàng</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingSuccess;
