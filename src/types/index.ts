export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  link: string;
  featured: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  content: string;
  avatar: string;
  position: string;
  rating: number;
  project: string;
}
