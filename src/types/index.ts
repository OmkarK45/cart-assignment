export interface Product {
  id: number;
  title: string;
  price: number;
  ideal_for: 'men' | 'women';
  size: string[];
  brand: string;
  imageUrl: string;
}

export type SortTypes = 'price_low_to_high' | 'price_high_to_low';
