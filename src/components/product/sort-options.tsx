import { SortTypes } from '@/types';

export const sortOptions = [
  { name: 'Price: Low to High', value: 'price_low_to_high', current: false },
  { name: 'Price: High to Low', value: 'price_high_to_low', current: false },
] as { name: string; value: SortTypes; current: boolean }[];

export function SortOptions({
  sortValue,
  setSortValue,
}: {
  sortValue: SortTypes | null;
  setSortValue: (value: SortTypes) => void;
}) {
  return (
    <div>
      <label className='text-base font-medium uppercase text-gray-500 text-gray-900'>
        Sort by
      </label>
      <fieldset className='mt-4'>
        <div className='space-y-4'>
          {sortOptions.map((sortOption) => (
            <div key={sortOption.name} className='flex items-center'>
              <input
                id={sortOption.value}
                name='notification-method'
                type='radio'
                defaultChecked={sortValue === sortOption.value}
                onClick={() => setSortValue(sortOption.value)}
                className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
              />
              <label
                htmlFor={sortOption.value}
                className='ml-3 block text-sm font-medium text-gray-700'
              >
                {sortOption.name}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
