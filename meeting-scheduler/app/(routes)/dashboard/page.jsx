"use client"
import React, { useEffect, useState } from 'react';
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from '@/components/ui/button';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '@/config/FirebaseConfig';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useRouter } from 'next/navigation';

function Dashboard() {

  const db = getFirestore(app);

  const {user} = useKindeBrowserClient();

  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    user && isBusinessRegistered();
  }, [user])

  const isBusinessRegistered = async () => {
    const docRef = doc(db, "Business", user.email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setLoading(false)
;    } else {
      console.log("No such document!");
      setLoading(false)
    };

    if (loading) {
      return <h2>Loading...</h2>
    }
  };

  return (
    <div>
        <LogoutLink><Button>Logout</Button></LogoutLink>
    </div>
  )
}

export default Dashboard;