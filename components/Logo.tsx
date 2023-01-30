import React from 'react'
import Image from 'next/image'

function Logo(props: any) {
    const { renderDefault, title} = props
  return (
    <div className='flex items-center space-x-2'>
        <Image
        className="rounded-full object-cover bg-[#111111]"
        height={90}
        width={90}
        src="/MID-Whitesmoke.png"
        alt="logo"/>
        <>{renderDefault(props)}</>
    </div>
  )
}

export default Logo