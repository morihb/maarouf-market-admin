import { cn } from '@/lib/utils';

type OrderStatus = 'placed' | 'picking' | 'picked' | 'indelivery' | 'completed';
type StockLevel = 'high' | 'medium' | 'low';

interface StatusBadgeProps {
  status: OrderStatus | StockLevel | string;
  type?: 'order' | 'stock';
}

const StatusBadge = ({ status, type = 'order' }: StatusBadgeProps) => {
  const getOrderStatusStyles = (status: OrderStatus) => {
    const styles = {
      placed: 'badge-info',
      picking: 'badge-warning',
      picked: 'badge-neutral',
      indelivery: 'badge-info',
      completed: 'badge-success',
    };
    return styles[status] || 'badge-neutral';
  };

  const getOrderStatusLabel = (status: OrderStatus) => {
    const labels = {
      placed: 'Placed',
      picking: 'Picking',
      picked: 'Picked',
      indelivery: 'In Delivery',
      completed: 'Completed',
    };
    return labels[status] || status;
  };

  const getStockStyles = (level: StockLevel) => {
    const styles = {
      high: 'badge-success',
      medium: 'badge-warning',
      low: 'badge-danger',
    };
    return styles[level] || 'badge-neutral';
  };

  const getStockLabel = (level: StockLevel) => {
    const labels = {
      high: 'In Stock',
      medium: 'Low Stock',
      low: 'Critical',
    };
    return labels[level] || level;
  };

  if (type === 'order') {
    return (
      <span className={cn(getOrderStatusStyles(status as OrderStatus))}>
        {getOrderStatusLabel(status as OrderStatus)}
      </span>
    );
  }

  return (
    <span className={cn(getStockStyles(status as StockLevel))}>
      {getStockLabel(status as StockLevel)}
    </span>
  );
};

export const getStockLevel = (stock: number): StockLevel => {
  if (stock > 20) return 'high';
  if (stock > 10) return 'medium';
  return 'low';
};

export default StatusBadge;
