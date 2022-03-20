import React from 'react';

export const brandFilters = [
  {
    value: 'nike',
    label: 'NIKE',
  },
  {
    value: 'gucci',
    label: 'GUCCI',
  },
  {
    value: 'h&m',
    label: 'H&M',
  },
  {
    value: 'louis vuitton',
    label: 'LOUIS VUITTON',
  },
];

export function BrandFilter({
  brandFilter,
  setBrandFilter,
}: {
  brandFilter: string[];
  setBrandFilter: (brandFilter: string[]) => void;
}) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    const isChecked = e.target.checked;

    if (isChecked) {
      setBrandFilter([...brandFilter, value]);
    } else {
      setBrandFilter(brandFilter.filter((b) => b !== value));
    }
  }

  return (
    <fieldset className='space-y-5'>
      <div>
        <label className='text-base font-medium uppercase text-gray-500'>
          Brand
        </label>
      </div>
      {brandFilters.map(({ value, label }) => (
        <div key={value} className='relative flex items-start'>
          <div className='flex h-5 items-center'>
            <input
              id='comments'
              aria-describedby='comments-description'
              name='comments'
              type='checkbox'
              className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
              value={value}
              onChange={handleChange}
            />
          </div>
          <div className='ml-3 text-sm'>
            <label htmlFor='comments' className='font-medium text-gray-700'>
              {label}
            </label>
          </div>
        </div>
      ))}
    </fieldset>
  );
}
