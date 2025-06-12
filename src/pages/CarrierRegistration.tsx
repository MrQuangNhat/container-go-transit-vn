
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Truck, Building, Phone, Mail, MapPin, FileText } from "lucide-react";

const CarrierRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    businessLicense: "",
    contactPerson: "",
    phone: "",
    email: "",
    address: "",
    vehicleTypes: "",
    serviceAreas: "",
    experience: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally submit to backend
    console.log("Carrier registration data:", formData);
    navigate("/carrier-pending");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
              <Truck className="h-8 w-8 text-primary" />
              Đăng Ký Đơn Vị Vận Tải
            </h1>
            <p className="text-muted-foreground">
              Trở thành đối tác vận tải của ContainerExpress
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Thông Tin Đơn Vị Vận Tải</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      Tên công ty <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      placeholder="Nhập tên công ty"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessLicense" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Số giấy phép kinh doanh <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="businessLicense"
                      value={formData.businessLicense}
                      onChange={(e) => handleInputChange("businessLicense", e.target.value)}
                      placeholder="Nhập số giấy phép"
                      required
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">
                      Người liên hệ <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="contactPerson"
                      value={formData.contactPerson}
                      onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                      placeholder="Nhập tên người liên hệ"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Số điện thoại <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Nhập số điện thoại"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Nhập email"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">
                      Số năm kinh nghiệm <span className="text-red-500">*</span>
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("experience", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn số năm kinh nghiệm" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2">1-2 năm</SelectItem>
                        <SelectItem value="3-5">3-5 năm</SelectItem>
                        <SelectItem value="6-10">6-10 năm</SelectItem>
                        <SelectItem value="10+">Trên 10 năm</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Địa chỉ trụ sở <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Nhập địa chỉ trụ sở"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vehicleTypes">
                    Loại phương tiện vận tải <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="vehicleTypes"
                    value={formData.vehicleTypes}
                    onChange={(e) => handleInputChange("vehicleTypes", e.target.value)}
                    placeholder="VD: Container 20ft, 40ft, xe tải thường..."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceAreas">
                    Khu vực phục vụ <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="serviceAreas"
                    value={formData.serviceAreas}
                    onChange={(e) => handleInputChange("serviceAreas", e.target.value)}
                    placeholder="VD: TP.HCM, Hà Nội, Đà Nẵng..."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">
                    Mô tả dịch vụ
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Mô tả ngắn gọn về dịch vụ vận tải của bạn..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="flex gap-4 pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/")}
                    className="flex-1"
                  >
                    Hủy
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1"
                  >
                    Yêu Cầu Chuyển Thành Đơn Vị Vận Tải
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarrierRegistration;
