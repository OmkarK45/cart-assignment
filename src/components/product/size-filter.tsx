import React from 'react';

export const sizeFilters = [
  {
    value: 'S',
    label: 'S',
  },
  {
    value: 'M',
    label: 'M',
  },
  {
    value: 'L',
    label: 'L',
  },
  {
    value: 'XL',
    label: 'XL',
  },
];

export function SizeFilter({
  sizeFilter,
  setSizeFilter,
}: {
  sizeFilter: string[];
  setSizeFilter: (brandFilter: string[]) => void;
}) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSizeFilter([...sizeFilter, value]);
    } else {
      setSizeFilter(sizeFilter.filter((b) => b !== value));
    }
  }

  return (
    <fieldset className='space-y-5'>
      <div>
        <label className='text-base font-medium uppercase text-gray-500'>
          Size
        </label>
      </div>
      {sizeFilters.map(({ value, label }) => (
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
