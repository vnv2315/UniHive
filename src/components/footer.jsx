import React from 'react'

const footer = () => {
  return (
    <div className="bg-blue-100 pt-18 p-10  flex flex-col w-screen ">
      <div  className='w-[95%] m-auto items-center'><hr/></div>

      <div className="bg-blue-100 p-8  flex items-center justify-between flex-wrap">
        <div>&#169; 2023 UniHive. All rights reserved.</div>
        <div>Terms of Service | Privacy Policy</div>
      </div>
    </div>
  )
}

export default footer
