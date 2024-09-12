import Image from 'next/image'
import React from 'react'
import image1 from "../../public/gri2.png";

export default function Mainpage() {
  return (
    <div className=" font-sans flex ">
    <div className="h-screen w-1/2 pt-10 pl-24 pr-24 bg-black">
      <div className="text-4xl font-semibold text-white mb-24 leading-[110px]">
        AllPay
      </div>
      <div className="text-white text-7xl mt-4">
        <span>Online payments made easy</span>
        <span className="text-light-green">.</span>
      </div>
      <div className="  px-2 py-2">
        <p className="text-white mt-[57px] font-sans text-base w-4/5 tracking-wide leading-5">
          make and grow your business online with accepting and sending
          payments all over the world
        </p>
      </div>
      <div className=" pl-1">
        <button className="text-black px-5 py-2  bg-light-green text-2xl font-semibold rounded-full mt-[60px]">
          Signup &rarr;
        </button>
      </div>
    </div>
    <div className="h-screen  w-1/2 ">
      <div className=" bg-[#CF3D0F]">
        <div className="flex justify-end  rounded mr-3 mb-7 py-2 ">
          <button className=" text-xl bg-black text-white px-3 py-2 rounded" >Login &rarr;</button>
        </div>
        <Image
          className="bg-center h-[87.8vh] w-full"
          src={image1}
          alt="image"
          quality={100}
        />

        <div></div>
        <div></div>
      </div>
    </div>
  </div>
  )
}
