import { Product, SortTypes } from '@/types';

export function getSortedProducts(products: Array<Product>, sortBy: SortTypes) {
  const productsCopy = JSON.parse(JSON.stringify(products)) as Array<Product>;

  switch (sortBy) {
    case 'price_low_to_high':
      return productsCopy.sort((a, b) => a.price - b.price);
    case 'price_high_to_low':
      return productsCopy.sort((a, b) => b.price - a.price);
    default:
      return productsCopy;
  }
}

export function getFilteredProducts(
  products: Array<Product>,
  filters: {
    ideal_for: string[];
    size: string[];
    brand: string[];
  }
) {
  const productsCopy = JSON.parse(JSON.stringify(products)) as Array<Product>;

  return productsCopy.filter((product) => {
    const sizeMatch = filters.size.every((size) => product.size.includes(size));

    if (filters.ideal_for.length > 0) {
      if (!filters.ideal_for.includes(product.ideal_for)) {
        return false;
      }
    }

    if (filters.size.length > 0 && !sizeMatch) {
      return false;
    }

    if (filters.brand.length > 0) {
      if (!filters.brand.includes(product.brand)) {
        return false;
      }
    }

    return true;
  });
}
