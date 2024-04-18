import React from 'react'

function BodyLayout({children , className}) {
  const screenWidth = localStorage.getItem('SCREEN_WIDTH')
  return (
    <>
    {screenWidth <= 750 ? 
    <div className={`px-[30px] w-full h-fit ${className || ''}`}>
    {children}
    </div> :
    <div className={`flex flex-col flex-1 h-fit ml-16  ${className || ''}`}>
    {children}
    </div>
    }
    </>
  )
}

export default BodyLayout