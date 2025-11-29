import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, User, MapPin, Phone, Mail, Package, CheckCircle, Truck, Clock } from 'lucide-react';
import StatusBadge from '@/components/admin/StatusBadge';
import { orders, Order } from '@/data/mockData';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

type OrderStatus = 'placed' | 'picking' | 'picked' | 'indelivery' | 'completed';

const statusSteps: { status: OrderStatus; label: string; icon: React.ElementType }[] = [
  { status: 'placed', label: 'Order Placed', icon: Clock },
  { status: 'picking', label: 'Picking', icon: Package },
  { status: 'picked', label: 'Picked', icon: CheckCircle },
  { status: 'indelivery', label: 'In Delivery', icon: Truck },
  { status: 'completed', label: 'Completed', icon: CheckCircle },
];

const OrderDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [order, setOrder] = useState<Order | null>(null);
  const [status, setStatus] = useState<OrderStatus>('placed');

  useEffect(() => {
    const foundOrder = orders.find(o => o.id === id);
    if (foundOrder) {
      setOrder(foundOrder);
      setStatus(foundOrder.status);
    }
  }, [id]);

  const handleStatusUpdate = (newStatus: OrderStatus) => {
    setStatus(newStatus);
    toast({
      title: "Status updated",
      description: `Order status changed to ${newStatus}`,
    });
  };

  const getStepIndex = (stepStatus: OrderStatus) => {
    return statusSteps.findIndex(s => s.status === stepStatus);
  };

  const currentStepIndex = getStepIndex(status);

  if (!order) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-muted-foreground">Order not found</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/admin/orders')}
            className="p-2 rounded-xl hover:bg-muted text-muted-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Order {order.id}</h1>
            <p className="text-muted-foreground mt-1">Created on {order.createdAt}</p>
          </div>
        </div>
        <StatusBadge status={status} type="order" />
      </div>

      {/* Status Timeline */}
      <div className="admin-card">
        <h2 className="text-lg font-semibold text-foreground mb-6">Order Progress</h2>
        <div className="flex items-center justify-between relative">
          {/* Progress Line */}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-border">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${(currentStepIndex / (statusSteps.length - 1)) * 100}%` }}
            />
          </div>

          {statusSteps.map((step, index) => {
            const StepIcon = step.icon;
            const isCompleted = index <= currentStepIndex;
            const isCurrent = index === currentStepIndex;

            return (
              <div key={step.status} className="relative flex flex-col items-center z-10">
                <button
                  onClick={() => handleStatusUpdate(step.status)}
                  className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300',
                    isCompleted
                      ? 'bg-primary text-primary-foreground shadow-soft'
                      : 'bg-muted text-muted-foreground',
                    isCurrent && 'ring-4 ring-primary/20'
                  )}
                >
                  <StepIcon className="w-5 h-5" />
                </button>
                <span className={cn(
                  'mt-3 text-xs font-medium text-center',
                  isCompleted ? 'text-foreground' : 'text-muted-foreground'
                )}>
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Order Items */}
        <div className="lg:col-span-2 admin-card">
          <h2 className="text-lg font-semibold text-foreground mb-6">Order Items</h2>
          <div className="space-y-4">
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                <img
                  src={item.productImage}
                  alt={item.productName}
                  className="w-16 h-16 rounded-xl object-cover border border-border"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground">{item.productName}</p>
                  <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                </div>
                <p className="font-semibold text-foreground">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>

          {/* Order Total */}
          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-foreground">Total</span>
              <span className="text-2xl font-bold text-primary">${order.totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Customer Info */}
        <div className="admin-card h-fit">
          <h2 className="text-lg font-semibold text-foreground mb-6">Customer Details</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent">
                <User className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-medium text-foreground">{order.customerName}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium text-foreground">{order.customerEmail}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium text-foreground">{order.customerPhone}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-accent">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Address</p>
                <p className="font-medium text-foreground">{order.customerAddress}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
