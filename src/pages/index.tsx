import React, { useState } from 'react';

import { productsDb } from '@/data/products';

import Layout from '@/components/layout/Layout';
import { BrandFilter } from '@/components/product/brand-filter';
import { CategoryFilter } from '@/components/product/category-filter';
import { SizeFilter } from '@/components/product/size-filter';
import { SortOptions } from '@/components/product/sort-options';
import Seo from '@/components/Seo';

import { Product, SortTypes } from '@/types';

export default function HomePage({ products }: { products: Array<Product> }) {
  const [sortValue, setSortValue] = useState<SortTypes | null>(null);
  const [brandFilter, setBrandFilter] = useState<string[]>([]);
  const [sizeFilter, setSizeFilter] = useState<string[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);

  return (
    <Layout>
      <Seo />
      <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
        <div className='top-30 sticky block space-y-5'>
          <SortOptions sortValue={sortValue} setSortValue={setSortValue} />
          <BrandFilter
            brandFilter={brandFilter}
            setBrandFilter={setBrandFilter}
          />
          <SizeFilter setSizeFilter={setSizeFilter} sizeFilter={sizeFilter} />
          <CategoryFilter
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
          />
        </div>
        <div className='mt-4 md:mt-0 lg:col-span-3'>
          <div className='grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8'>
            <div>{sortValue}</div>
            <pre>
              <code>{JSON.stringify(products, null, 2)}</code>
            </pre>
            <div>
              {brandFilter.map((ok) => (
                <li key={ok}>{ok}</li>
              ))}
              {sizeFilter.map((ok) => (
                <li key={ok}>{ok}</li>
              ))}
              {categoryFilter.map((ok) => (
                <li key={ok}>{ok}</li>
              ))}
            </div>
            <div>ok</div>
            <div>ok</div>
            <div>ok</div>
            <div>ok</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      products: productsDb,
    },
  };
}
