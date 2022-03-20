/* eslint-disable @next/next/no-img-element */
import { Product } from '@/types';

export function ProductCard(product: Product) {
  return (
    <div className='flex h-full flex-col'>
      <div className='flex-2 h-[300px] w-full overflow-hidden rounded-lg '>
        <img
          className='h-full w-full object-cover'
          src={product.imageUrl}
          alt={`Product ${product.title} photo`}
        />
      </div>
      <div className='flex-1'>
        <h4 className='mt-4 text-sm uppercase tracking-wide text-gray-500'>
          {product.brand}
        </h4>
        <h3 className='mt-1 text-sm font-normal text-gray-700'>
          {product.title}
        </h3>
        <p className='mt-1 text-lg font-medium text-gray-900'>
          ${product.price}
        </p>
      </div>
    </div>
  );
}
