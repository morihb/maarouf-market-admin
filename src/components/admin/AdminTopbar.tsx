import { Menu, Bell, Search, User, LogOut, Settings } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface AdminTopbarProps {
  onMenuClick: () => void;
}

const AdminTopbar = ({ onMenuClick }: AdminTopbarProps) => {
  return (
    <header className="sticky top-0 z-30 bg-primary shadow-soft">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-xl hover:bg-primary-hover text-primary-foreground transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-primary-hover/50 rounded-xl px-4 py-2 min-w-[280px]">
            <Search className="w-4 h-4 text-primary-foreground/70" />
            <input
              type="text"
              placeholder="Search products, orders..."
              className="bg-transparent border-none outline-none text-sm text-primary-foreground placeholder:text-primary-foreground/50 w-full"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <button className="relative p-2 rounded-xl hover:bg-primary-hover text-primary-foreground transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-warning rounded-full" />
          </button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-3 p-1.5 pr-4 rounded-xl hover:bg-primary-hover transition-colors">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                  <User className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-sm font-medium text-primary-foreground">Admin User</p>
                  <p className="text-xs text-primary-foreground/70">admin@maarouf.com</p>
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 mt-2 rounded-xl shadow-card">
              <DropdownMenuItem className="gap-2 rounded-lg cursor-pointer">
                <User className="w-4 h-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 rounded-lg cursor-pointer">
                <Settings className="w-4 h-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2 rounded-lg cursor-pointer text-destructive">
                <LogOut className="w-4 h-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default AdminTopbar;
