
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle, AlertCircle, Phone, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CarrierPending = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="mx-auto w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-10 w-10 text-yellow-600" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Yêu Cầu Đang Chờ Phê Duyệt
            </h1>
            <p className="text-muted-foreground">
              Cảm ơn bạn đã đăng ký trở thành đối tác vận tải của ContainerExpress
            </p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-yellow-600" />
                Trạng Thái Xét Duyệt
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <Clock className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-yellow-800">Đang chờ admin phê duyệt</p>
                  <p className="text-sm text-yellow-700">
                    Yêu cầu của bạn đang được xem xét. Chúng tôi sẽ phản hồi trong vòng 2-3 ngày làm việc.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Thông tin đã được gửi thành công</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-yellow-600" />
                  <span className="text-sm">Đang chờ admin xem xét hồ sơ</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full border-2 border-gray-300"></div>
                  <span className="text-sm text-muted-foreground">Thông báo kết quả phê duyệt</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Thông Tin Liên Hệ</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Nếu bạn có thắc mắc về quá trình xét duyệt, vui lòng liên hệ với chúng tôi:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Hotline: 1900 1234</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>Email: partner@containerexpress.vn</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button 
              onClick={() => navigate("/")}
              variant="outline"
              className="w-full"
            >
              Quay Về Trang Chủ
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarrierPending;
