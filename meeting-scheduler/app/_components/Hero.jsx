import React from 'react';
import { Button } from '@/components/ui/button';

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center my-20'>
      <div className="text-center max-w-2xl mt-16">
      <h2 className='font-bold text-4xl text-slate-900'>It's Time</h2>
      <h2 className='text-xl mt-4 text-slate-600'>Neetly is your scheduling automation platform to find the right time - and so much more</h2>
        <div className="flex justify-center gap-8 mt-8 my-8
        ">
          <Button>Sign Up with Google</Button>
          <Button>Sign Up with Facebook</Button>
        </div>
        <hr></hr>
        <h2>No credit card required</h2>
      </div>
    </div>
  )
}

export default Hero