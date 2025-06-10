
import { Container } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Container className="h-8 w-8" />
              <span className="text-2xl font-bold">ContainerExpress</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Nền tảng đặt xe container trực tuyến hàng đầu, mang đến giải pháp vận chuyển 
              thông minh và tiết kiệm cho doanh nghiệp.
            </p>
            <div className="space-y-2 text-primary-foreground/80">
              <p><strong>Hotline:</strong> 1900 1234</p>
              <p><strong>Email:</strong> contact@containerexpress.vn</p>
              <p><strong>Địa chỉ:</strong> 123 Đường ABC, Quận 1, TP.HCM</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Dịch Vụ</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Đặt xe container</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Vận chuyển hàng lẻ</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Theo dõi đơn hàng</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Báo giá</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hỗ Trợ</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Hướng dẫn sử dụng</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Câu hỏi thường gặp</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Chính sách</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Liên hệ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 ContainerExpress. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
