import Button from '../buttons/Button';

export function NavBar() {
  return (
    <div className='mx-auto mb-10 bg-indigo-500 py-4 shadow-md '>
      <div className='mx-auto flex max-w-7xl items-center justify-between'>
        <div className='flex-1'>
          <h1 className='text-2xl font-semibold tracking-tighter'>
            SimpleCommerce
          </h1>
        </div>
        <div className='flex-2 '>
          <input
            type='text'
            name='name'
            id='name'
            className='block w-80 rounded-full border-gray-300 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
            placeholder='Search...'
          />
        </div>
        <div className='flex flex-1 items-center justify-end'>
          <Button variant='primary'>Login</Button>
        </div>
      </div>
    </div>
  );
}
