'use client'

import React from 'react'
import { useGetNearestCall } from '@/hooks/useGetNearestCall';

const NearestCall = () => {
  const { call } = useGetNearestCall();
  const today = new Date();

  return (
    <>
      {call && call.length > 0 ? (
        <h2 className='glassmorphism min-w-[270px] max-w-fit rounded py-2 px-2 text-center text-base font-normal'>
          Upcoming Meeting at {call[0].state.startsAt?.toLocaleDateString('en-US', { weekday: 'long', hour: 'numeric', minute: 'numeric' })}
        </h2>
        //  call[0].state.startsAt?.getDay() === today.getDay() ? (
        //   <h2 className='glassmorphism min-w-[270px] max-w-fit rounded py-2 px-2 text-center text-base font-normal'>
        //     Upcoming Meeting at {call[0].state.startsAt?.toLocaleDateString('en-US', { hour: 'numeric', minute: 'numeric' })}
        //   </h2>
        // ) : (
        //   <h2 className='glassmorphism min-w-[270px] max-w-fit rounded py-2 px-2 text-center text-base font-normal'>
        //     Upcoming Meeting at {call[0].state.startsAt?.toLocaleDateString('en-US', { weekday: 'long', hour: 'numeric', minute: 'numeric' })}
        //   </h2>
        // )
      ) : (
        <h2 className='glassmorphism min-w-[270px] max-w-fit rounded py-2 px-2 text-center text-base font-normal'>
          No Upcoming Meeting
        </h2>
      )}
    </>
    
  )
}

export default NearestCall