"use client"

import React from "react"

import AiAnimation from "../assets/ai.json"
import Link from "next/link"

import dynamic from "next/dynamic"
const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

const HomePage = () => {
  return (
    <main className="relative flex h-dvh w-screen items-center bg-[#1E1F22]">
      <div className="flex w-full flex-col items-center gap-8">
        <div className="-mb-16 h-96 w-96">
          <Lottie animationData={AiAnimation} loop />
        </div>

        <h1 className="text-3xl font-black text-white">Timio AI</h1>

        <p className="-mt-6 font-light text-slate-300">
          AI powered tool that you always needed!
        </p>

        <Link href="/dashboard">
          <button className="mt-4 w-64 rounded bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-4 py-2 font-bold text-white transition-all hover:w-72 hover:scale-105">
            Get Started Now
          </button>
        </Link>
      </div>
    </main>
  )
}

export default HomePage
