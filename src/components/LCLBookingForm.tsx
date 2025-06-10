
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import type { LCLBookingFormData } from "@/pages/LCLBooking";

interface LCLBookingFormProps {
  onFormSubmit: (data: LCLBookingFormData) => void;
}

const cities = [
  "Hà Nội",
  "Hồ Chí Minh",
  "Đà Nẵng",
  "Hải Phòng",
  "Cần Thơ",
  "Nha Trang",
  "Huế",
  "Vũng Tàu",
  "Quy Nhon",
  "Đồng Nai"
];

const cargoTypes = [
  "Hàng khô",
  "Hàng ướt",
  "Hàng lạnh",
  "Hàng dễ vỡ",
  "Hàng nguy hiểm",
  "Hàng thực phẩm",
  "Hàng điện tử",
  "Hàng may mặc"
];

const LCLBookingForm = ({ onFormSubmit }: LCLBookingFormProps) => {
  const form = useForm<LCLBookingFormData>({
    defaultValues: {
      from: "",
      to: "",
      cargoType: "",
      length: "",
      width: "",
      height: "",
      weight: ""
    }
  });

  const onSubmit = (data: LCLBookingFormData) => {
    console.log("LCL form submitted:", data);
    onFormSubmit(data);
  };

  const watchedValues = form.watch();
  const isFormComplete = Object.values(watchedValues).every(value => value !== "");

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Thông Tin Hàng Hóa</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="from"
                rules={{ required: "Vui lòng chọn điểm đi" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Điểm đi</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn thành phố đi" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="to"
                rules={{ required: "Vui lòng chọn điểm đến" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Điểm đến</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn thành phố đến" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="cargoType"
              rules={{ required: "Vui lòng chọn loại hàng" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Loại hàng hóa</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn loại hàng hóa" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {cargoTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Kích thước hàng hóa</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <FormField
                  control={form.control}
                  name="length"
                  rules={{ required: "Vui lòng nhập chiều dài" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dài (cm)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="0" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="width"
                  rules={{ required: "Vui lòng nhập chiều rộng" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rộng (cm)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="0" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="height"
                  rules={{ required: "Vui lòng nhập chiều cao" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cao (cm)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="0" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="weight"
                  rules={{ required: "Vui lòng nhập trọng lượng" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Trọng lượng (kg)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="0" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {isFormComplete && (
              <Button type="submit" className="w-full" size="lg">
                Tạo Đơn Hàng Lẻ
              </Button>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LCLBookingForm;
