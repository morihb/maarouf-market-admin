// Mock Data for Maarouf Market Admin Dashboard

export interface Product {
  id: number;
  name: string;
  category: string;
  categoryId: number;
  price: number;
  stock: number;
  barcode: string;
  description: string;
  image: string;
  createdAt: string;
}

export interface Category {
  id: number;
  name: string;
  productCount: number;
  image: string;
  createdAt: string;
}

export interface OrderItem {
  id: number;
  productName: string;
  productImage: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  items: OrderItem[];
  totalPrice: number;
  status: 'placed' | 'picking' | 'picked' | 'indelivery' | 'completed';
  createdAt: string;
  updatedAt: string;
}

export interface Slider {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  active: boolean;
  createdAt: string;
}

export const categories: Category[] = [
  { id: 1, name: 'Fresh Produce', productCount: 45, image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=200', createdAt: '2024-01-15' },
  { id: 2, name: 'Dairy & Eggs', productCount: 32, image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=200', createdAt: '2024-01-15' },
  { id: 3, name: 'Bakery', productCount: 28, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200', createdAt: '2024-01-16' },
  { id: 4, name: 'Meat & Seafood', productCount: 24, image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=200', createdAt: '2024-01-16' },
  { id: 5, name: 'Beverages', productCount: 56, image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=200', createdAt: '2024-01-17' },
  { id: 6, name: 'Snacks', productCount: 67, image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=200', createdAt: '2024-01-17' },
  { id: 7, name: 'Frozen Foods', productCount: 38, image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=200', createdAt: '2024-01-18' },
  { id: 8, name: 'Household', productCount: 42, image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=200', createdAt: '2024-01-18' },
];

export const products: Product[] = [
  { id: 1, name: 'Organic Bananas', category: 'Fresh Produce', categoryId: 1, price: 2.99, stock: 150, barcode: '1234567890123', description: 'Fresh organic bananas from Ecuador', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200', createdAt: '2024-01-20' },
  { id: 2, name: 'Whole Milk 1L', category: 'Dairy & Eggs', categoryId: 2, price: 3.49, stock: 85, barcode: '1234567890124', description: 'Fresh whole milk from local farms', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200', createdAt: '2024-01-20' },
  { id: 3, name: 'Sourdough Bread', category: 'Bakery', categoryId: 3, price: 4.99, stock: 25, barcode: '1234567890125', description: 'Artisan sourdough bread baked fresh daily', image: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=200', createdAt: '2024-01-21' },
  { id: 4, name: 'Atlantic Salmon', category: 'Meat & Seafood', categoryId: 4, price: 12.99, stock: 8, barcode: '1234567890126', description: 'Fresh Atlantic salmon fillet', image: 'https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=200', createdAt: '2024-01-21' },
  { id: 5, name: 'Orange Juice 1L', category: 'Beverages', categoryId: 5, price: 4.29, stock: 120, barcode: '1234567890127', description: '100% pure squeezed orange juice', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=200', createdAt: '2024-01-22' },
  { id: 6, name: 'Potato Chips', category: 'Snacks', categoryId: 6, price: 3.99, stock: 200, barcode: '1234567890128', description: 'Crispy salted potato chips', image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=200', createdAt: '2024-01-22' },
  { id: 7, name: 'Frozen Pizza', category: 'Frozen Foods', categoryId: 7, price: 8.99, stock: 45, barcode: '1234567890129', description: 'Pepperoni pizza ready to bake', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200', createdAt: '2024-01-23' },
  { id: 8, name: 'Dish Soap', category: 'Household', categoryId: 8, price: 2.49, stock: 75, barcode: '1234567890130', description: 'Lemon scented dish soap 500ml', image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=200', createdAt: '2024-01-23' },
  { id: 9, name: 'Organic Apples', category: 'Fresh Produce', categoryId: 1, price: 4.49, stock: 3, barcode: '1234567890131', description: 'Fresh Fuji apples', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200', createdAt: '2024-01-24' },
  { id: 10, name: 'Greek Yogurt', category: 'Dairy & Eggs', categoryId: 2, price: 5.99, stock: 12, barcode: '1234567890132', description: 'Creamy Greek yogurt plain', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200', createdAt: '2024-01-24' },
  { id: 11, name: 'Croissants Pack', category: 'Bakery', categoryId: 3, price: 6.49, stock: 5, barcode: '1234567890133', description: 'Butter croissants 4 pack', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=200', createdAt: '2024-01-25' },
  { id: 12, name: 'Chicken Breast', category: 'Meat & Seafood', categoryId: 4, price: 9.99, stock: 18, barcode: '1234567890134', description: 'Fresh boneless chicken breast', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=200', createdAt: '2024-01-25' },
];

export const orders: Order[] = [
  {
    id: 'ORD-001',
    customerName: 'Ahmed Hassan',
    customerEmail: 'ahmed@email.com',
    customerPhone: '+961 71 123 456',
    customerAddress: '123 Main St, Beirut',
    items: [
      { id: 1, productName: 'Organic Bananas', productImage: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=100', quantity: 3, price: 2.99 },
      { id: 2, productName: 'Whole Milk 1L', productImage: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=100', quantity: 2, price: 3.49 },
    ],
    totalPrice: 15.95,
    status: 'completed',
    createdAt: '2024-01-28 14:30',
    updatedAt: '2024-01-28 16:45',
  },
  {
    id: 'ORD-002',
    customerName: 'Sara Khalil',
    customerEmail: 'sara@email.com',
    customerPhone: '+961 70 987 654',
    customerAddress: '456 Oak Ave, Tripoli',
    items: [
      { id: 3, productName: 'Sourdough Bread', productImage: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=100', quantity: 1, price: 4.99 },
      { id: 4, productName: 'Atlantic Salmon', productImage: 'https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=100', quantity: 2, price: 12.99 },
      { id: 5, productName: 'Orange Juice 1L', productImage: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=100', quantity: 1, price: 4.29 },
    ],
    totalPrice: 35.26,
    status: 'indelivery',
    createdAt: '2024-01-28 15:45',
    updatedAt: '2024-01-28 17:30',
  },
  {
    id: 'ORD-003',
    customerName: 'Omar Fayed',
    customerEmail: 'omar@email.com',
    customerPhone: '+961 76 555 333',
    customerAddress: '789 Cedar Blvd, Sidon',
    items: [
      { id: 6, productName: 'Potato Chips', productImage: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=100', quantity: 5, price: 3.99 },
      { id: 7, productName: 'Frozen Pizza', productImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100', quantity: 2, price: 8.99 },
    ],
    totalPrice: 37.93,
    status: 'picked',
    createdAt: '2024-01-28 16:20',
    updatedAt: '2024-01-28 17:00',
  },
  {
    id: 'ORD-004',
    customerName: 'Layla Mansour',
    customerEmail: 'layla@email.com',
    customerPhone: '+961 78 222 111',
    customerAddress: '321 Pine St, Zahle',
    items: [
      { id: 8, productName: 'Greek Yogurt', productImage: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=100', quantity: 3, price: 5.99 },
      { id: 9, productName: 'Croissants Pack', productImage: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=100', quantity: 2, price: 6.49 },
    ],
    totalPrice: 30.95,
    status: 'picking',
    createdAt: '2024-01-28 17:10',
    updatedAt: '2024-01-28 17:15',
  },
  {
    id: 'ORD-005',
    customerName: 'Karim Nassar',
    customerEmail: 'karim@email.com',
    customerPhone: '+961 71 444 888',
    customerAddress: '654 Elm St, Jounieh',
    items: [
      { id: 10, productName: 'Organic Apples', productImage: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=100', quantity: 2, price: 4.49 },
      { id: 11, productName: 'Chicken Breast', productImage: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=100', quantity: 1, price: 9.99 },
    ],
    totalPrice: 18.97,
    status: 'placed',
    createdAt: '2024-01-28 18:00',
    updatedAt: '2024-01-28 18:00',
  },
];

export const sliders: Slider[] = [
  {
    id: 1,
    title: 'Fresh Fruits Sale',
    description: 'Get 30% off on all fresh fruits this week!',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800',
    link: '/products?category=fresh-produce',
    active: true,
    createdAt: '2024-01-25',
  },
  {
    id: 2,
    title: 'Dairy Week Special',
    description: 'Buy 2 get 1 free on all dairy products',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800',
    link: '/products?category=dairy',
    active: true,
    createdAt: '2024-01-26',
  },
  {
    id: 3,
    title: 'Free Delivery',
    description: 'Free delivery on orders above $50',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    link: '/delivery',
    active: false,
    createdAt: '2024-01-27',
  },
];

// Dashboard Stats
export const dashboardStats = {
  totalProducts: products.length,
  totalCategories: categories.length,
  totalOrders: orders.length,
  todayOrders: 12,
  todayRevenue: 458.75,
  monthRevenue: 12847.50,
  recentOrders: orders.slice(0, 5),
  lowStockProducts: products.filter(p => p.stock <= 10),
};
