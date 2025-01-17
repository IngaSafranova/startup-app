import React from 'react'
import Ping from './Ping'
import { client } from '@/sanity/lib/client'
import { STARTUP_VIEWS_QURY } from '@/sanity/lib/queries'

const View = async ({ id }: { id: string }) => {
  {/** this dinamic rendering in video */}
   const { views: totalViews } = await client.withConfig( {useCdn: false}).fetch(STARTUP_VIEWS_QURY,{id})
 

  return (
    <div className='view-container' >
      <div className='absolute -top-2 -right-2' >
        <Ping/>
      </div>
      <p className='view-text' >
        <span className='font-black'>Views: {totalViews}</span>

      </p>

    </div>
  )
}

export default View