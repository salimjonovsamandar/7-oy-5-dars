import React from 'react'
import Image from 'next/image'
import Aboutimg from "../../../public/Aboutimg.png"
import scan from "../../../public/scan.png"


function About() {
  return (
    <div>
      <div className='container bg-slate-100 flex items-center  justify-around mx-auto pt-16 pb-16 p-4'>
        <Image src={Aboutimg} ></Image>
        <div className='w-3/6'>
          <h3 className='text-4xl font-bold text-center'>About Author</h3>
          <h6 className='text-4xl font-bold text-center'>——</h6>
          <p className='w-3/5 mx-auto mt-3 text-gray-400'>All the Lorem Ipsum generators on the Internet tend to repeated predefined chunks as necessary, making this the first true value generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful.</p>
          <div className='w-3/5 mx-auto flex justify-around text-center mt-6'>
            <div>
              <h2 className='text-4xl leading-15 text-slate-900 font-bold'>02</h2>
              <p>Books Published</p>
            </div>
            <div>
              <h2 className='text-4xl text-slate-900 font-bold'>4.5</h2>
              <p>User Reviews</p>
            </div>
            <div>
              <h2 className='text-4xl text-slate-900 font-bold'>04</h2>
              <p>Best Seller Awards</p>
            </div>
          </div>
          <div className='bg-blue-950 w-7/12 mt-6 flex p-3 mx-auto  gap-9'>
            <div >
              <Image src={scan} ></Image>
            </div>
            <div>
              <h2 className=' text-warning mb-3 '>John Abraham , Ph.d</h2>
              <span className='text-white '>Mail:<a className="link link-hover text-slate-400"> support@doctors.com</a></span> <br />
              <span className='text-white'>Phone :<a className="link link-hover text-slate-400">  (+22) 123 - 4567 - 900</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About