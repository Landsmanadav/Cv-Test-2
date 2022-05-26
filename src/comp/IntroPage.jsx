import React from 'react'
import { motion } from 'framer-motion'
export default function IntroPage() {
    return (
        <div className="introPageContainer">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {/* Replace with your content */}
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
                    </div>
                    {/* /End replace */}
                </div>
            </main>
        </div >


    )
}
{/* <motion.h1
animate={{ fontSize: "50px", color: "#ff2994" }}
transition={{ duration: 3 }}
> Intro Page </motion.h1> */}
