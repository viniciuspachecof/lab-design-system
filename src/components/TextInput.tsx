import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface ITextInputRoot {
  children: ReactNode;
}

const TextInputRoot = (props: ITextInputRoot) => {
  return (
    <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
      {props.children}
    </div>
  )
}

TextInputRoot.displayNome = 'TextInput.Root';

export interface ITextInputIcon {
  children: ReactNode;
}

const TextInputIcon = (props: ITextInputIcon) => {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {props.children}
    </Slot>
  )
}

TextInputIcon.displayNome = 'TextInput.Icon';

export interface ITextInputInput extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputInput = (props: ITextInputInput) => {
  return (    
      <input className='bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400' {...props}/>
  )
}

TextInputInput.displayNome = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}