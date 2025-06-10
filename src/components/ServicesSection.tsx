
import { Container } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Phương Thức Vận Chuyển
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chọn phương thức vận chuyển phù hợp với nhu cầu và khối lượng hàng hóa của bạn
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Full Container Booking */}
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Container className="h-12 w-12 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl text-foreground">
                Đặt Xe Nguyên Container
              </CardTitle>
              <CardDescription className="text-lg">
                Phù hợp khi bạn đã có đủ hàng để đi nguyên container
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Vận chuyển trực tiếp, nhanh chóng</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Giá cước cố định, minh bạch</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Bảo mật cao cho hàng hóa</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Thời gian vận chuyển ngắn nhất</span>
                </div>
              </div>
              <div className="pt-4">
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => navigate("/fcl-booking")}
                >
                  Đặt Xe Ngay
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* LCL Shipping */}
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="bg-secondary/50 p-4 rounded-full">
                  <Container className="h-12 w-12 text-secondary-foreground" />
                </div>
              </div>
              <CardTitle className="text-2xl text-foreground">
                Vận Chuyển Hàng Lẻ (LCL)
              </CardTitle>
              <CardDescription className="text-lg">
                Dành cho hàng hóa chưa đủ để đi nguyên container
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-muted-foreground">Tiết kiệm chi phí cho hàng lẻ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-muted-foreground">Linh hoạt về khối lượng</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-muted-foreground">Tích hợp với khách hàng khác</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-muted-foreground">Phù hợp doanh nghiệp nhỏ</span>
                </div>
              </div>
              <div className="pt-4">
                <Button variant="secondary" className="w-full" size="lg">
                  Tạo Đơn Hàng Lẻ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
