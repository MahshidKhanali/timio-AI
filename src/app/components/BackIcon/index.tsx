"use client"

import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import React from "react"

const BackButton = () => {
  const router = useRouter()
  return (
    <button
      onClick={router.back}
      className="rounded-full p-2 duration-100 hover:bg-white/5"
    >
      <ChevronLeft size={24} color="white" />
    </button>
  )
}

export default BackButton
