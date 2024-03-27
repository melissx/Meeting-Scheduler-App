"use client"
import { Button } from '@/components/ui/button';
import { Briefcase, Calendar, Clock, Settings } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function SideNav() {
  const menu = [
    {
      id:1,
      name:'Meeting Type',
      path:'/dashboard/meeting-type',
      icon:Briefcase
    },
    {
      id:2,
      name:'Scheduled Meeting',
      path:'/dashboard/scheduled-meeting',
      icon:Calendar
    },
    {
      id:3,
      name:'Availability',
      path:'/dashboard/availability',
      icon:Clock
    },
    {
      id:4,
      name:'Settings',
      path:'/dashboard/settings',
      icon:Settings
    },
  ]

  const path = usePathname();

  const[activePath, setActivePath] = useState(path);

  useEffect(() => {
    path && setActivePath(path)
  }, [])
  
  return (
    <div className='p-5 py-14'>
      <div className="flex justify-center">
      <Image src='/logo.svg' width={32} height={32}/>
      </div>
      <Link href={'/create-meeting'}>
        <Button className='w-full rounded mt-8'>Create</Button>
      </Link>
        <div className="mt-5 flex flex-col gap-2">
          {menu.map((item, index) => (
            <Link href={item.path}>
            <Button variant='ghost' className={`w-full flex gap-2 justify-start hover:bg-slate-200 ${activePath == item.path && 'bg-purple-200 text-purple-700'}`} key={index}><item.icon/>{item.name}</Button>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default SideNav