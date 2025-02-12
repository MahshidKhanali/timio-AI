"use client"

import { Engineer, PRs } from "@/data"
import React, { FC } from "react"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"

const Stats: FC<{ engineer: Engineer }> = ({ engineer }) => {
  const maintainability =
    engineer.prs
      .map((item) => PRs.find((pr) => String(pr.id) === String(item)))
      .reduce((a, b) => a + (b?.scores?.maintainability || 0), 0) /
    engineer.prs.length

  const readability =
    engineer.prs
      .map((item) => PRs.find((pr) => String(pr.id) === String(item)))
      .reduce((a, b) => a + (b?.scores?.readability || 0), 0) /
    engineer.prs.length

  const performance =
    engineer.prs
      .map((item) => PRs.find((pr) => String(pr.id) === String(item)))
      .reduce((a, b) => a + (b?.scores?.performance || 0), 0) /
    engineer.prs.length

  const testCoverage =
    engineer.prs
      .map((item) => PRs.find((pr) => String(pr.id) === String(item)))
      .reduce((a, b) => a + (b?.scores?.testCoverage || 0), 0) /
    engineer.prs.length

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
      <div className="text-center text-sm font-medium">Overall score</div>
      <div className="h-[50vh] w-full">
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

export default Stats
