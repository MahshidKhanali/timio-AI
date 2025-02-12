"use client"

import { PR } from "@/data"
import { GitPullRequest, MoveDownIcon, MoveUpIcon } from "lucide-react"
import React, { FC, useEffect, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"
import PrStats from "./stats"

const PrCard: FC<{ pr: PR }> = ({ pr }) => {
  const [showStats, setShowStats] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const prStyle = {
    Pending: "bg-gray-500/20 text-yellow-200",
    Accepted: "bg-green-500/20 text-green-400",
    Rejected: "bg-red-500/20 text-red-400",
  }[pr.status]

  useEffect(() => {
    if (showStats) {
      ref.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [showStats])

  return (
    <div ref={ref} className="scroll-m-4 rounded bg-[#27272B] p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <GitPullRequest size={24} />
          <div className="ml-2">{pr.name}</div>
        </div>

        <div
          className={twMerge(
            "flex-shrink-0 whitespace-nowrap rounded-full px-3 py-1 text-center text-sm",
            prStyle,
          )}
        >
          {pr.status}
        </div>
      </div>

      {showStats && <PrStats pr={pr} />}

      <div className="mt-2 flex justify-end">
        <button
          className="flex items-center gap-2 border-b-2 border-b-gray-400 text-sm text-gray-400 duration-100 hover:border-b-yellow-500 hover:text-yellow-500"
          onClick={() => setShowStats((prev) => !prev)}
        >
          <div>{showStats ? "Hide Details" : "View Details"}</div>
          {showStats ? <MoveUpIcon size={14} /> : <MoveDownIcon size={14} />}
        </button>
      </div>
    </div>
  )
}

export default PrCard
