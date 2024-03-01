import React from 'react'
import Image from 'next/image'
import Atomic from "../../../public/Atomic.png"
import Light from "../../../public/Light.png"

function Includes() {
    return (
        <div className="container items-center  justify-between mx-auto  p-4">
            <h3 className="text-blue-950 font-bold text-4xl text-center pt-8 pb-4 ">
                Author's Book Includes
            </h3>
            <div className="flex items-center gap-16">
                <div className="flex items-center mt-6 mb-6">
                    <Image src={Atomic} alt="Atomic book" />
                    <div>
                        <h5 className="text-4xl font-bold mb-5">Atomic One's</h5>
                        <p className="w-4/4 opacity-50 text-2xl">
                            Many variations of passages of Lorem Ipsum willing araise
                            alteration in some form.
                        </p>
                        <div className="flex mt-9 items-center gap-8">
                            <div>
                                <h4>🟡 Pages:</h4>
                                <p className="opacity-50">586pages</p>
                            </div>
                            <div>
                                <h4>🟡 Length::</h4>
                                <p className="opacity-50">10 Hours</p>
                            </div>
                        </div>
                        <button className="btn btn-outline btn-warning w-3/6 mt-4 rounded-none">Warning</button>
                    </div>
                </div>

                <div className="flex items-center mt-6   mb-6">
                    <Image src={Light} alt="Light book" />
                    <div>
                        <h5 className="text-4xl font-bold mb-5">The Dark Light </h5>
                        <p className="w-4/4 opacity-50 text-2xl">
                            Many variations of passages of Lorem Ipsum willing araise
                            alteration in some form.
                        </p>
                        <div className="flex mt-9 items-center gap-8">
                            <div>
                                <h4>🟡 Pages:</h4>
                                <p className="opacity-50">586pages</p>
                            </div>
                            <div>
                                <h4>🟡 Length::</h4>
                                <p className="opacity-50">10 Hours</p>
                            </div>
                        </div>
                        <button className="btn btn-outline btn-warning w-3/6 mt-4 rounded-none">Warning</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Includes