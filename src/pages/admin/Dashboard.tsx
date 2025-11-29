import { Package, FolderTree, ShoppingCart, CalendarDays, DollarSign, TrendingUp, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatCard from '@/components/admin/StatCard';
import StatusBadge, { getStockLevel } from '@/components/admin/StatusBadge';
import { dashboardStats, orders, products } from '@/data/mockData';

const Dashboard = () => {
  const lowStockProducts = products.filter(p => p.stock <= 10);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening at Maarouf Market.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Products"
          value={dashboardStats.totalProducts}
          icon={Package}
          trend={{ value: 12, label: 'vs last month' }}
        />
        <StatCard
          title="Categories"
          value={dashboardStats.totalCategories}
          icon={FolderTree}
          variant="primary"
        />
        <StatCard
          title="Total Orders"
          value={dashboardStats.totalOrders}
          icon={ShoppingCart}
          trend={{ value: 8, label: 'vs last week' }}
        />
        <StatCard
          title="Today's Orders"
          value={dashboardStats.todayOrders}
          icon={CalendarDays}
          variant="success"
        />
      </div>

      {/* Revenue Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="admin-card bg-gradient-to-br from-primary to-primary-hover text-primary-foreground">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-primary-foreground/80">Today's Revenue</p>
              <p className="text-4xl font-bold mt-2">${dashboardStats.todayRevenue.toFixed(2)}</p>
              <p className="text-sm text-primary-foreground/70 mt-2 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +15.3% from yesterday
              </p>
            </div>
            <div className="p-4 bg-primary-foreground/20 rounded-2xl">
              <DollarSign className="w-10 h-10" />
            </div>
          </div>
        </div>

        <div className="admin-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Monthly Revenue</p>
              <p className="text-4xl font-bold text-foreground mt-2">${dashboardStats.monthRevenue.toLocaleString()}</p>
              <p className="text-sm text-success mt-2 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +23.5% from last month
              </p>
            </div>
            <div className="p-4 bg-accent rounded-2xl">
              <DollarSign className="w-10 h-10 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="admin-card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-foreground">Recent Orders</h2>
            <Link to="/admin/orders" className="text-sm font-medium text-primary hover:text-primary-hover transition-colors">
              View all →
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Order</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Customer</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Total</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.slice(0, 5).map((order) => (
                  <tr key={order.id} className="table-row">
                    <td className="py-3 px-4">
                      <span className="font-medium text-foreground">{order.id}</span>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">{order.customerName}</td>
                    <td className="py-3 px-4 font-semibold text-foreground">${order.totalPrice.toFixed(2)}</td>
                    <td className="py-3 px-4">
                      <StatusBadge status={order.status} type="order" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Low Stock Alert */}
        <div className="admin-card">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-warning" />
              <h2 className="text-lg font-semibold text-foreground">Low Stock Alert</h2>
            </div>
            <Link to="/admin/products" className="text-sm font-medium text-primary hover:text-primary-hover transition-colors">
              View all →
            </Link>
          </div>
          <div className="space-y-4">
            {lowStockProducts.map((product) => (
              <div key={product.id} className="flex items-center gap-4 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground truncate">{product.name}</p>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-foreground">{product.stock}</p>
                  <StatusBadge status={getStockLevel(product.stock)} type="stock" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
