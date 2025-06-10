
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Về ContainerExpress
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="text-4xl font-bold text-primary">10+</div>
              <h3 className="text-xl font-semibold text-foreground">Năm Kinh Nghiệm</h3>
              <p className="text-muted-foreground">
                Phục vụ trong lĩnh vực vận chuyển container
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-primary">5000+</div>
              <h3 className="text-xl font-semibold text-foreground">Khách Hàng</h3>
              <p className="text-muted-foreground">
                Tin tướng và sử dụng dịch vụ của chúng tôi
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-primary">24/7</div>
              <h3 className="text-xl font-semibold text-foreground">Hỗ Trợ</h3>
              <p className="text-muted-foreground">
                Đội ngũ chăm sóc khách hàng luôn sẵn sàng
              </p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            ContainerExpress là nền tảng đặt xe container trực tuyến hàng đầu Việt Nam. 
            Chúng tôi cam kết mang đến dịch vụ vận chuyển chất lượng cao, an toàn và tiết kiệm chi phí. 
            Với công nghệ hiện đại và đội ngũ chuyên nghiệp, chúng tôi luôn đảm bảo hàng hóa của bạn 
            được vận chuyển an toàn và đúng hạn.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
