"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronLeft } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import LocationOption from '@/app/utils/LocationOption';
import Link from 'next/link'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { doc, setDoc } from 'firebase/firestore'

function MeetingForm({setFormValue}) {

  const [location, setLocation] = useState();
  const [eventName, setEventName] = useState();
  const [duration, setDuration] = useState(30);
  const [locationType, setLocationType] = useState();
  const [locationUrl, setLocationUrl] = useState();

  const {user} = useKindeBrowserClient();

  useEffect(() => {
    setFormValue({
      eventName:eventName,
      duration:duration,
      locationType:locationType,
      locationUrl:locationUrl,
    })
  }, [eventName, duration, locationType,locationUrl])

  const onCreateClick = async () => {
    const id = Date.now().toString();
    await setDoc(doc(db, "MeetingEvent", id), {
      id:id,
      eventName:eventName,
      duration:duration,
      locationType:locationType,
      locationUrl:locationUrl,
      businessId:'Business/' + user?.email
    }).then(resp => {
      toast('New Meeting Event Created!')
    })
  }

  return (
    <div className='p-4'>
     <Link href={'/dashboard'}>
      <h2 className='flex gap-2'><ChevronLeft/>Cancel</h2>
     </Link>
      <div className="mt-5">
        <h2 className='font-bold text-2xl my-4'>Create New Event</h2>
        <hr></hr>
      </div>
      <div className="flex flex-col gap-3 my-4">
        <h2 className='font-bold'>Event Name</h2>
        <Input onChange={(e) => setEventName(e.target.value)}/>
        <h2>Duration</h2>
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' className="max-w-40">30 Min</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setDuration(15)}>15 Min</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setDuration(30)}>30 Min</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setDuration(45)}>45 Min</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setDuration(60)}>60 Min</DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>

        <h2 className='font-bold'>Location</h2>
        <div className="grid grid-cols-3 gap-3">
          {LocationOption.map((option, index) => (
            <div className={`border flex flex-col justify-center items-center p-3 rounded-xl hover:bg-purple-300 hover:border-purple-800 ${location == option.name && 'bg-purple-300 hover:border-purple-800'}`} onClick={() => setLocationType(option.name)} >
              <Image src={option.icon} width={24} height={24} alt={option.name}/>
              <h2>{option.name}</h2>
            </div>
          ))}
        </div>
        {locationType && <>
        <h2 className='font-bold'>Add {location} URL</h2>
        <Input onChange={(e) => setLocationUrl(e.target.value)}/>
        </>}
      </div>
      <Button className="w-full mt-5" disabled={!eventName||!locationType||!locationUrl}>Create</Button>
    </div>
  )
}

export default MeetingForm