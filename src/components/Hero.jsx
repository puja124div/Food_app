import React from 'react'

const Hero = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-4 ">
      <div className="mx-h-[500px] relative">
        {/* overlay */}
        <div className="absolute w-full h-full text-white max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-orange-500"> Foods</span> Delivered
          </h1>
        </div>
        <img className='w-full max-h-[500px] object-cover'
          src="https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero