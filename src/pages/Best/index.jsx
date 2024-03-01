import React from 'react'
import Image from 'next/image'
import Amazen from "../../../public/Amazen.png"
import Mergan from "../../../public/Mergan.png"
import Los from "../../../public/Los.png"
import Urban from "../../../public/Urban.png"
    
function Best() {
    return (
        <div className="container items-center justify-around mx-auto gap-9 p-4">
            <h3 className="text-4xl pt-9 pb-5 font-bold text-center">Articles & Resources</h3>
            <p className="text-4xl pb-5  font-bold text-center">——</p>
            <div className="flex items-center justify-between">
                <div className="flex flex-col items-center justify-center mb-9">
                    <Image src={Amazen} width={96} height={90} alt="logo" className="mb-4" />
                    <h3 className="text-3xl font-bold mb-3">Amazen Corp</h3>
                    <p className="text-gray-400 text-l w-4/6 text-center">A long established fact that a who looking at its layout.</p>
                </div>

                <div className="flex flex-col items-center justify-center mb-9">
                    <Image src={Mergan} width={190} height={80} alt="logo" className="mb-4" />
                    <h3 className="text-3xl font-bold mb-3">Megan Books</h3>
                    <p className="text-gray-400 text-l w-4/6 text-center">A long established fact that a who looking at its layout.</p>
                </div>

                <div className="flex flex-col items-center justify-center mb-9">
                    <Image src={Los} width={141} height={90} alt="logo" className="mb-4" />
                    <h3 className="text-3xl font-bold mb-3">Los Books</h3>
                    <p className="text-gray-400 text-l w-4/6 text-center">A long established fact that a who looking at its layout.</p>
                </div>

                <div className="flex flex-col items-center justify-center mb-9">
                    <Image src={Urban} width={100} height={100} alt="logo" className="mb-4" />
                    <h3 className="text-3xl font-bold mb-3">Urban Lib</h3>
                    <p className="text-gray-400 text-l w-4/6 text-center">A long established fact that a who looking at its layout.</p>
                </div>
            </div>
        </div>
    )
}

export default Best