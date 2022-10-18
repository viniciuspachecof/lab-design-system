import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';

export interface IButton {
  children: ReactNode;
  asChild?: boolean;
}

export const Button = ({ children, asChild }: IButton) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp className='py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white'>{ children }</Comp>
  )
}