import { Engineers, PRs, Tasks } from "@/data"

import React from "react"
import EngineerCard from "@/app/components/EngineerCard"
import Stats from "./stats"

import BackButton from "@/app/components/BackIcon"
import TaskCard from "@/app/components/TaskCard"
import PrCard from "@/app/components/PrCard"

export default async function Page({
  params,
}: {
  params: Promise<{ engineerId: string }>
}) {
  const engineerId = (await params).engineerId
  const engineer = Engineers.find((item) => item.id === engineerId)

  if (!engineer) {
    return <div>Engineer not found :( </div>
  }

  const engineerPrs = engineer.prs
    .map((prId) => PRs.filter((pr) => String(pr.id) === String(prId)))
    .flat()

  const engineerTasks = engineer.tasks
    .map((taskId) => Tasks.filter((task) => String(task.id) === String(taskId)))
    .flat()

  return (
    <>
      <BackButton />

      <div className="relative mt-4 flex w-full items-start gap-4">
        <div className="flex w-full flex-col gap-4">
          <EngineerCard engineer={engineer} />

          <h2 className="border-l-2 border-l-gray-400 pl-2 text-2xl font-medium">
            Pull Requests
          </h2>

          {engineerPrs.map((item) => (
            <PrCard pr={item} key={item.id} />
          ))}

          <h2 className="border-l-2 border-l-gray-400 pl-2 text-2xl font-medium">
            Tasks
          </h2>

          {engineerTasks.map((item) => (
            <TaskCard task={item} key={item.id} />
          ))}
        </div>

        <div className="sticky top-0 w-full">
          <Stats engineer={engineer} />
        </div>
      </div>
    </>
  )
}
