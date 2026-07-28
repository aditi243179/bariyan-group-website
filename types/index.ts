export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  grade?: string;
  apiRating?: string;
  description: string;
  applications: string[];
  features: string[];
  benefits: string[];
  standards: string[];
  specifications?: { label: string; value: string }[];
  packaging: string[];
  itemCode?: string;
  minimumOrder?: string;
  image: string;
  relatedProducts: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
}
