import * as React from 'react';

import { NavBar } from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div>
      <NavBar />
      <div className='mx-auto max-w-7xl'>{children}</div>
    </div>
  );
}
