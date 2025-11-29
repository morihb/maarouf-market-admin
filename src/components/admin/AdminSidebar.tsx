import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  FolderTree,
  ShoppingCart,
  Image,
  ChevronLeft,
  ChevronRight,
  Store,
  Menu,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
}

const SidebarLink = ({ to, icon, label, collapsed }: SidebarLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to || location.pathname.startsWith(to + '/');

  return (
    <NavLink
      to={to}
      className={cn(
        'sidebar-link group',
        isActive && 'active'
      )}
    >
      <span className="flex-shrink-0">{icon}</span>
      {!collapsed && (
        <span className="truncate transition-opacity duration-200">{label}</span>
      )}
    </NavLink>
  );
};

interface AdminSidebarProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

const AdminSidebar = ({ mobileOpen, setMobileOpen }: AdminSidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarContent = (
    <>
      {/* Logo */}
      <div className={cn(
        'flex items-center gap-3 px-4 py-6 border-b border-border',
        collapsed && 'justify-center px-2'
      )}>
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
          <Store className="w-6 h-6 text-primary-foreground" />
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <h1 className="font-bold text-foreground text-lg leading-tight truncate">Maarouf</h1>
            <p className="text-xs text-muted-foreground">Market Admin</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {/* Overview */}
        {!collapsed && (
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 mb-3">
            Overview
          </p>
        )}
        <SidebarLink
          to="/admin"
          icon={<LayoutDashboard className="w-5 h-5" />}
          label="Dashboard"
          collapsed={collapsed}
        />

        {/* Catalog */}
        {!collapsed && (
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 mt-6 mb-3">
            Catalog
          </p>
        )}
        <SidebarLink
          to="/admin/products"
          icon={<Package className="w-5 h-5" />}
          label="Products"
          collapsed={collapsed}
        />
        <SidebarLink
          to="/admin/categories"
          icon={<FolderTree className="w-5 h-5" />}
          label="Categories"
          collapsed={collapsed}
        />

        {/* Sales */}
        {!collapsed && (
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 mt-6 mb-3">
            Sales
          </p>
        )}
        <SidebarLink
          to="/admin/orders"
          icon={<ShoppingCart className="w-5 h-5" />}
          label="Orders"
          collapsed={collapsed}
        />

        {/* Marketing */}
        {!collapsed && (
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 mt-6 mb-3">
            Marketing
          </p>
        )}
        <SidebarLink
          to="/admin/sliders"
          icon={<Image className="w-5 h-5" />}
          label="Sliders"
          collapsed={collapsed}
        />
      </nav>

      {/* Collapse Button - Desktop Only */}
      <div className="hidden lg:block p-3 border-t border-border">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground transition-colors duration-200"
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <>
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Collapse</span>
            </>
          )}
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden animate-fadeIn"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-72 bg-sidebar border-r border-sidebar-border flex flex-col lg:hidden transition-transform duration-300 ease-out',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-xl hover:bg-muted text-muted-foreground"
        >
          <X className="w-5 h-5" />
        </button>
        {sidebarContent}
      </aside>

      {/* Desktop Sidebar */}
      <aside
        className={cn(
          'hidden lg:flex flex-col h-screen bg-sidebar border-r border-sidebar-border sticky top-0 transition-all duration-300 ease-out',
          collapsed ? 'w-20' : 'w-72'
        )}
      >
        {sidebarContent}
      </aside>
    </>
  );
};

export default AdminSidebar;
