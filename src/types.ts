export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  category: string;
  image: string;
  badge?: string;
  popular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatarColor: string;
}
