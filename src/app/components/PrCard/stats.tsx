"use client"

import { PR } from "@/data"
import React, { FC } from "react"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"

const PrStats: FC<{ pr: PR }> = ({ pr }) => {
  const maintainability = pr.scores.maintainability
  const readability = pr.scores.readability
  const performance = pr.scores.performance
  const testCoverage = pr.scores.testCoverage

  const data = [
    {
      name: "Maintainability",
      score: maintainability,
    },
    {
      name: "Readability",
      score: readability,
    },
    {
      name: "Performance",
      score: performance,
    },
    {
      name: "Test Coverage",
      score: testCoverage,
    },
  ]

  return (
    <div className="w-full rounded bg-[#27272B] p-4">
      <div className="text-center text-sm font-medium">PR Score</div>

      <div className="h-[30vh] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={10}>
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 50, right: 50 }}
            />
            <YAxis domain={[0, 10]} />

            <Bar
              dataKey="score"
              fill="#EBB305"
              background={{ fill: "#27272B" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default PrStats
