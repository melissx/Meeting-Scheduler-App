"use client"
import React, { useState } from 'react'
import MeetingForm from './_components/MeetingForm';
import MeetingPreview from './_components/MeetingPreview';

function CreateMeeting() {
  const [formValue, setFormValue] = useState();

  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>   
      <div className="shadow-md h-screen border">
        <MeetingForm setFormValue={(v) => setFormValue(v)}/>
      </div>
      <div className="col-span-2">
        <MeetingPreview formValue={formValue}/>
      </div>
    </div>
  )
}

export default CreateMeeting