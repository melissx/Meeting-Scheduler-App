import { Clock, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';

function MeetingPreview({formValue}) {
  const [date, setDate] = useState(new Date());

  return (
    <div className='p-5 my-10 shadow-md border-t-6'>
      <Image src={'/logo.svg'} width={32} height={32}/>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
        <div className="p-5 border-r-2">
          <h2>Business Name</h2>
          <h2 className='font-bold'>{formValue?.eventName?formValue?.eventName:'Meeting Name'}</h2>
          <div className="mt-5 flex flex-col gap-4">
            <h2 className='flex gap-2'><Clock/> {formValue?.duration} Min</h2>
            <h2 className='flex gap-2'><MapPin/> {formValue?.locationType} Meeting</h2>
           <Link href={formValue?.locationUrl?formValue?.locationUrl:'#'} className='text-purple'>{formValue?.locationUrl}</Link>
          </div>
        </div>
        <div className="md:col-span-2 flex p-4">
          <div className="flex flex-col">
            <h2 className='font-bold'>Select Date & Time</h2>
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeetingPreview