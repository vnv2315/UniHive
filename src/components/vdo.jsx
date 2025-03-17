import React,{ useRef } from 'react'
import video from '../assets/vdo.mp4'

const vdo = ({play,setPlay}) => {
    const closeVideo=useRef();

    const playVideo = (e)=>{
        if(e.target===closeVideo.current)
        setPlay(false);
    }

  return (
    <div onClick={playVideo} ref={closeVideo}  style={play?{ backgroundColor: 'rgba(17, 24, 39, 0.8)' }:{display:'none'}} className="fixed inset-0 z-50 vdo flex items-center justify-center w-screen ">
        <div className='flex items-center justify-center overflow-hidden max-w-180 p-10'>
            <video src={video} controls loop muted className='w-full object-cover z-100'/>
        </div>
    </div>
  )
}

export default vdo
