import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import "../../app/globals.css"

function index() {
    return (
        <div className='w-full bg-blue-950'>
            <div className='flex'>
                <div className=''>
                    <h5 className=''>Welcome to Pages</h5>
                    <h3>Books are uniquely portable magic </h3>
                    <p className='w-2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    <div className=''>
                        <button >Order Today</button>
                        <Link href="/welcomePages">Read Free Demo</Link>
                    </div>
                    <div>
                        <div>
                            <circle cx="12" cy="12" r="11"></circle>
                            <div>
                                <h4>Pages:</h4>
                                <p>586pages</p>
                            </div>
                        </div>
                        <div>
                            <circle cx="12" cy="12" r="11"></circle>
                            <div>
                                <h4>Length:</h4>
                                <p>10 Hours</p>
                            </div>
                        </div>
                        <div>
                            <circle cx="12" cy="12" r="11"></circle>
                            <div>
                                <h4>Ratings:</h4>
                                <p>4.5/5 (305 ratings)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src="/book.png" width={592} height={800} alt='Book' />
                </div>
            </div>
        </div>
    )
}

export default index