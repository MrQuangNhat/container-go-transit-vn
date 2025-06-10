
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { BookingFormData } from "@/pages/FCLBooking";

interface FCLBookingFormProps {
  onFormSubmit: (data: BookingFormData) => void;
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

const containerSizes = [
  "20ft",
  "40ft",
  "40ft HC",
  "45ft"
];

const containerTypes = [
  "Dry Container",
  "Reefer Container", 
  "Open Top Container",
  "Flat Rack Container",
  "Tank Container"
];

const FCLBookingForm = ({ onFormSubmit }: FCLBookingFormProps) => {
  const form = useForm<BookingFormData>({
    defaultValues: {
      from: "",
      to: "",
      containerSize: "",
      containerType: ""
    }
  });

  const onSubmit = (data: BookingFormData) => {
    console.log("Form submitted:", data);
    onFormSubmit(data);
  };

  const watchedValues = form.watch();
  const isFormComplete = Object.values(watchedValues).every(value => value !== "");

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Thông Tin Đặt Xe</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

            <FormField
              control={form.control}
              name="containerSize"
              rules={{ required: "Vui lòng chọn kích thước container" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kích thước Container</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn kích thước" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {containerSizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
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
              name="containerType"
              rules={{ required: "Vui lòng chọn loại container" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Loại Container</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn loại container" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {containerTypes.map((type) => (
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

            {isFormComplete && (
              <Button type="submit" className="w-full" size="lg">
                Tìm Nhà Vận Tải
              </Button>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default FCLBookingForm;
