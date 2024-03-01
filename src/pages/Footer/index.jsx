import React from 'react'
import Logo from "../../../public/Logo.png"
import Icon from "../../../public/icon.png"
import facebook from "../../../public/facebook.png"
import twitter from "../../../public/twitter.png"
import linkiden from "../../../public/linkiden.png"
import instagram from "../../../public/instagram.png"
import Image from 'next/image'

function index() {
    return (
        <div>
            <div className="bg-blue-950">
                <footer className=" container mx-auto footer p-4 text-white justify-between pt-16 pb-16">
                    <nav>
                        <Image src={Logo} alt="Logo "></Image>
                        <div className='flex mt-3'>
                            <Image className="link link-hover" src={facebook} alt="Logo "></Image>
                            <Image className="link link-hover" src={twitter} alt="Logo "></Image>
                            <Image className="link link-hover" src={linkiden} alt="Logo "></Image>
                            <Image className="link link-hover" src={instagram} alt="Logo "></Image>
                        </div>
                    </nav>
                    <nav>

                    </nav>
                    <nav>
                        <h6 className="footer-title">Explore</h6>
                        <a className="link link-hover text-slate-400"><Image src={Icon} alt="" className='inline' /> Home</a>
                        <a className="link link-hover text-slate-400"><Image src={Icon} alt="" className='inline' /> About Us</a>
                        <a className="link link-hover text-slate-400"><Image src={Icon} alt="" className='inline' /> Marketing</a>
                        <a className="link link-hover text-slate-400"><Image src={Icon} alt="" className='inline' /> Advertisement</a>
                        <a className="link link-hover text-slate-400"><Image src={Icon} alt="" className='inline' /> Blog</a>
                        <a className="link link-hover text-slate-400"><Image src={Icon} alt="" className='inline' /> Contact Us</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Utility Pages</h6>
                        <a className="link link-hover text-slate-400"><Image src={Icon} alt="" className='inline' /> Start here</a>
                        <a className="link link-hover text-slate-400"><Image src={Icon} alt="" className='inline' /> Style guide</a>
                        <a className="link link-hover text-slate-400"><Image src={Icon} alt="" className='inline' /> 404 not found</a>
                        <a className="link link-hover text-slate-400"><Image src={Icon} alt="" className='inline' /> Password protected</a>
                        <a className="link link-hover text-slate-400"><Image src={Icon} alt="" className='inline' /> Licenses</a>
                        <a className="link link-hover text-slate-400"><Image src={Icon} alt="" className='inline' /> Changelog</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Keep in Touch</h6>
                        <span >Address: <a className="link link-hover text-slate-400">24A Kingston St, Los Vegas <br /> NC 28202, USA. us</a></span>
                        <span >Mail:<a className="link link-hover text-slate-400">  support@doctors.com</a></span>
                        <span >Phone :<a className="link link-hover text-slate-400">  (+22) 123 - 4567 - 900</a></span>
                    </nav>
                </footer>
            </div>
        </div>
    )
}

export default index