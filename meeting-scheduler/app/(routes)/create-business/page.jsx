"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { app } from '@/config/FirebaseConfig';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useRouter } from 'next/navigation';

function createBusiness() {
    const [businessName, setBusinessName] = useState();

    const db = getFirestore(app);

    const {user} = useKindeBrowserClient();

    const router = useRouter();

    const onCreateBusiness = async () => {
        console.log('btn Click', businessName);
        await setDoc(doc(db, 'Business', user.email), {
            businessName: businessName,
            email: user.email,
            userName: user.given_name + ' ' + user.family_name,
        }).then(response => {
            console.log("Document Saved");
            toast('New Business Created!');
            router.replace('/dashboard');
        })
    };

  return (
    <div className='flex items-center flex-col p-14 gap-16 my-10'>
        <Image src='/logo.svg' width={64} height={64} alt='logo'/>
        <div className="flex flex-col items-center gap-4 max-w-3xl">
            <h2 className='text-4xl font-bold'>What do you want to name your business?</h2>
            <p className='text-slate-500'>This can be changed later from settings</p>
            <div className="w-full">
                <label className='text-slate-500'>Team Name</label>
                <Input className="mt-2" onChange={(e) => setBusinessName(e.target.value)}/>
            </div>
            <Button className="w-full" disabled={!businessName} onClick={onCreateBusiness}>Create Business</Button>
        </div>
    </div>
  )
}

export default createBusiness;