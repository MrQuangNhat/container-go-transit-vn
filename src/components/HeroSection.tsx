
import { Container } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <Container className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Dịch Vụ Đặt Xe Container
          <span className="text-primary block">Trực Tuyến</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Giải pháp vận chuyển container thông minh, tiết kiệm và đáng tin cậy. 
          Chúng tôi cung cấp dịch vụ vận chuyển linh hoạt phù hợp với mọi nhu cầu của bạn.
        </p>
        <Button size="lg" className="text-lg px-8 py-3">
          Bắt đầu ngay
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
