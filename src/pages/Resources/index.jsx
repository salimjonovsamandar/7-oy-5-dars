import React from 'react'
import Image from 'next/image'
import recourses1 from "../../../public/recourses1.png"
import recourses2 from "../../../public/recourses2.png"
import recourses3 from "../../../public/recourses3.png"

function Resources() {
    return (
        <div className="container bg-slate-100 items-center justify-between mx-auto pb-20 p-4 ">
            <h3 className="text-4xl pt-12 pb-16 font-bold text-center">Articles & Resources</h3>
            <div className="flex items-center gap-6 justify-around">

                <div className="card w-96 shadow-xl bg-white rounded-none">
                    <Image src={recourses1} alt="" />
                    <div className="card-body">
                        <h2 className="card-title text-blue-950">
                            The energy efficiency offers hydrotherapy or swim!
                        </h2>
                        <p className="text-gray-400">
                            The point of using Lorem Ipsum hiter of that using making it look
                            like others readable will get end.
                        </p>
                        <div className="card-actions mt-3 flex gap-24 text-md">
                            <span className="link text-blue-950">Read more</span>
                            <p className='text-blue-950'>Author - 23.05.2022</p>
                        </div>
                    </div>
                </div>

                <div className="card w-96 shadow-xl bg-white rounded-none">
                    <Image src={recourses2} alt="" />
                    <div className="card-body">
                        <h2 className="card-title text-blue-950">
                            Release of Letraset sheets tools containing  passages
                        </h2>
                        <p className="text-gray-400">
                            The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.
                        </p>
                        <div className="mt-3 flex gap-24 text-md">
                            <span className="link text-blue-950">Read more</span>
                            <p>Author - 23.05.2022</p>
                        </div>
                    </div>
                </div>

                <div className="card w-96 shadow-xl bg-white rounded-none">
                    <Image src={recourses3} alt="" />
                    <div className="card-body">
                        <h2 className="card-title text-blue-950">
                            The energy efficiency offers hydrotherapy or swim!
                        </h2>
                        <p className="text-gray-400">
                            The point of using Lorem Ipsum hiter of that using making it look
                            like others readable will get end.
                        </p>
                        <div className="mt-3 flex gap-24 text-md">
                            <span className="link text-blue-950">Read more</span>
                            <p className='text-blue-950'>Author - 23.05.2022</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Resources