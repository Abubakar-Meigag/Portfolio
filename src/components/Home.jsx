import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"

const Home = () => {
return <div name="home" className="w-full h-screen pl-[80px] bg-[#0a192f]">
      
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 text-1xl'>Hi my name is </p>
        <h1 className='text-3xl sm:text-6xl font-bold text-[#ccd6f6]'>
            Abubakar Meigag</h1>
        <h2 className='text-3xl sm:text-5xl font-bold text-[#ccd6f6]'>
            I'm Full Stack Developer</h2>
        <p className='text-[#858a9c] py-4 max-w-[700px]'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus maiores quam dolor quaerat quia, error similique nisi, eius pariatur omnis sequi. Laborum excepturi placeat explicabo, doloremque reprehenderit, aspernatur nulla architecto iusto suscipit iure enim facere ab aliquid labore consequuntur culpa, nam laboriosam esse qui assumenda quo harum maiores! Ratione optio unde ea quibusdam</p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                View MY Work
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' /></span>
            </button>
        </div>
    </div>

  </div>;
}

export default Home