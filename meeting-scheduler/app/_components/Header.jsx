"use client"
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs';

function Header() {
  return (
    <div>
      <div className='flex items-center justify-evenly p-4 shadow-md'>
        <Image src={'/logo.svg'} width={32} height={32} alt='logo' />
        <ul className='hidden md:flex gap-20'>
          <li className='hover:text-slate-400'>Product</li>
          <li className='hover:text-slate-400'>Pricing</li>
        </ul>
        <div className="flex gap-4">
         <LoginLink><Button>Login</Button></LoginLink>
         <RegisterLink><Button>Register</Button></RegisterLink>
        </div>
      </div>
    </div>
  )
}

export default Header