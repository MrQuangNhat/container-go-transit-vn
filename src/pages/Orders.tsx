
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Package, Truck, MapPin, Calendar, Eye, Trash2 } from "lucide-react";
import OrderDetailModal from "@/components/OrderDetailModal";

// Mock data for orders with new statuses
const mockOrdersData = [
  {
    id: "FCL2024001",
    from: "TP. Hồ Chí Minh",
    to: "Hà Nội",
    containerSize: "40ft",
    containerType: "Dry Container",
    carrier: "Vietrans Express",
    price: "15,500,000 VND",
    status: "completed",
    createdDate: "2024-01-15",
    deliveryDate: "2024-01-18",
    rating: 0
  },
  {
    id: "FCL2024002", 
    from: "Đà Nẵng",
    to: "Cần Thơ",
    containerSize: "20ft",
    containerType: "Refrigerated",
    carrier: "LogiCorp Vietnam",
    price: "12,800,000 VND", 
    status: "in-transit",
    createdDate: "2024-01-20",
    deliveryDate: "2024-01-22"
  },
  {
    id: "FCL2024003",
    from: "Hải Phòng", 
    to: "TP. Hồ Chí Minh",
    containerSize: "40ft",
    containerType: "Dry Container",
    carrier: "FastShip Solutions",
    price: "14,200,000 VND",
    status: "pending-payment",
    createdDate: "2024-01-21",
    deliveryDate: "2024-01-24"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800";
    case "in-transit":
      return "bg-blue-100 text-blue-800";
    case "pending-payment":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "completed":
      return "Đã hoàn thành";
    case "in-transit":
      return "Đang vận chuyển";
    case "pending-payment":
      return "Chờ thanh toán";
    default:
      return status;
  }
};

const Orders = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orders, setOrders] = useState(mockOrdersData);

  const filteredOrders = orders.filter(order => {
    if (activeTab === "all") return true;
    if (activeTab === "completed") return order.status === "completed";
    if (activeTab === "ongoing") return order.status === "in-transit";
    if (activeTab === "pending-payment") return order.status === "pending-payment";
    return true;
  });

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCancelOrder = (orderId: string) => {
    setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Quản Lý Đơn Vận
          </h1>
          <p className="text-muted-foreground">
            Theo dõi và quản lý tất cả các đơn vận chuyển của bạn
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">Tất cả đơn hàng</TabsTrigger>
            <TabsTrigger value="pending-payment">Chờ thanh toán</TabsTrigger>
            <TabsTrigger value="ongoing">Đang vận chuyển</TabsTrigger>
            <TabsTrigger value="completed">Đã hoàn thành</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="space-y-6">
            <div className="grid gap-6">
              {/* Summary Cards */}
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2">
                      <Package className="h-8 w-8 text-primary" />
                      <div>
                        <p className="text-2xl font-bold">{orders.length}</p>
                        <p className="text-sm text-muted-foreground">Tổng đơn hàng</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2">
                      <Package className="h-8 w-8 text-yellow-600" />
                      <div>
                        <p className="text-2xl font-bold">
                          {orders.filter(o => o.status === "pending-payment").length}
                        </p>
                        <p className="text-sm text-muted-foreground">Chờ thanh toán</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2">
                      <Truck className="h-8 w-8 text-blue-600" />
                      <div>
                        <p className="text-2xl font-bold">
                          {orders.filter(o => o.status === "in-transit").length}
                        </p>
                        <p className="text-sm text-muted-foreground">Đang vận chuyển</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2">
                      <Package className="h-8 w-8 text-green-600" />
                      <div>
                        <p className="text-2xl font-bold">
                          {orders.filter(o => o.status === "completed").length}
                        </p>
                        <p className="text-sm text-muted-foreground">Đã hoàn thành</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Orders Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Danh sách đơn vận</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Mã đơn hàng</TableHead>
                        <TableHead>Tuyến đường</TableHead>
                        <TableHead>Container</TableHead>
                        <TableHead>Nhà vận tải</TableHead>
                        <TableHead>Giá cước</TableHead>
                        <TableHead>Trạng thái</TableHead>
                        <TableHead>Ngày tạo</TableHead>
                        <TableHead>Thao tác</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredOrders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-medium">{order.id}</TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{order.from} → {order.to}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div>{order.containerSize}</div>
                              <div className="text-muted-foreground">{order.containerType}</div>
                            </div>
                          </TableCell>
                          <TableCell>{order.carrier}</TableCell>
                          <TableCell className="font-medium">{order.price}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(order.status)}>
                              {getStatusText(order.status)}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{order.createdDate}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleOrderClick(order)}
                              >
                                <Eye className="h-4 w-4 mr-1" />
                                Chi tiết
                              </Button>
                              {order.status === "pending-payment" && (
                                <Button 
                                  variant="destructive" 
                                  size="sm"
                                  onClick={() => handleCancelOrder(order.id)}
                                >
                                  <Trash2 className="h-4 w-4 mr-1" />
                                  Hủy đơn
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
      
      <OrderDetailModal 
        order={selectedOrder}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Orders;
