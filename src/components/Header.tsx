
import { Container } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-background border-b shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
          <Container className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-foreground">ContainerExpress</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
            Dịch vụ
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            Giới thiệu
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Liên hệ
          </a>
          <Button 
            variant="outline" 
            onClick={() => navigate("/orders")}
            className="mr-2"
          >
            Đơn vận
          </Button>
          <Button variant="outline">Đăng nhập</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
