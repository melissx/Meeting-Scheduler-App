"use client"
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { ChevronDown } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import React from 'react';
import Image from 'next/image';

function DashboardHeader() {
  const {user}  = useKindeBrowserClient();

  return user &&  (
    <div className="p-4 px-20">
      <div className="flex items-center float-right">
        <Image src={user?.picture} alt='logo' width={32} height={32} className='rounded-full'/>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <ChevronDown/>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator/>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>
            <LogoutLink>Log Out</LogoutLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    </div>
  );
};

export default DashboardHeader;