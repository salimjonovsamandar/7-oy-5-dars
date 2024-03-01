import React from 'react'
import Image from 'next/image'
import PhotoBook from "../../../public/PhotoBook.png"

function Book() {
    return (
        <div className="pt-9 pb-9 bg-blue-950">
            <div className="flex text-white container items-center justify-between p-4">
                <div className="flex flex-col gap-9">
                    <h3 className="text-5xl font-bold">Get Book Copy Today!</h3>
                    <h6> ———— </h6>
                    <p className="text-gray-400 text-1xl w-4/5">
                        This the first true value generator on the Internet. It uses alphas
                        dictionary of over 200 Latin words.
                    </p>
                    <button className="btn btn-outline text-white w-36 btn-warning rounded-none">Warning</button>
                </div>
                <div>
                    <Image src={PhotoBook} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Book