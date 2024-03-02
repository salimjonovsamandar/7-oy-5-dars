import React from 'react'
import Image from 'next/image'
import LearnImg from "../../../public/LearnImg.png"

function Learn() {
    return (
        <div className="container items-center justify-around mx-auto mb-9 p-4">
            <h5 className="text-4xl pt-9 pb-9 font-bold text-center">What will You learn ?</h5>
            <div className="flex items-center gap-20 justify-between">
                <div className="flex flex-wrap gap-16 ">

                    <div className="bg-gray-300 w-72 p-5">
                        <span className="bg-warning mb-9 p-2 rounded-full">01</span>
                        <p className="mt-5 text-l w-4/6">Use HDFS & Map Reduce for storing & analyzing data at scale.</p>
                    </div>

                    <div className="bg-gray-300 w-72 p-5">
                        <span className="bg-warning mb-9 p-2 rounded-full">02</span>
                        <p className="mt-5 text-l w-4/6">Consume streaming data using Spark Streaming, Flink, and Storm.</p>
                    </div>

                    <div className="bg-gray-300 w-72 p-5">
                        <span className="bg-warning mb-9 p-2 rounded-full">03</span>
                        <p className="mt-5 text-l w-4/6">Choose an appropriate data storage technology for your application</p>
                    </div>

                    <div className="bg-gray-300 w-72 p-5">
                        <span className="bg-warning mb-9 p-2 rounded-full">04</span>
                        <p className="mt-5 text-l w-4/6">Analyze non-relational data using HBase, Cassandra, and MongoDB.</p>
                    </div>

                </div>
                <div>
                    <Image src={LearnImg} width={600} height={700} alt="Learn" />
                </div>
            </div>
        </div>
    )
}

export default Learn