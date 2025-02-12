import { Task } from "@/data"
import { CalendarCheck2 } from "lucide-react"
import React, { FC } from "react"
import { twMerge } from "tailwind-merge"

const TaskCard: FC<{ task: Task }> = ({ task }) => {
  const statusStyle = {
    "Code Review": "bg-gray-500/20 text-yellow-200",
    Accepted: "bg-green-500/20 text-green-400",
    "In Progress": "bg-blue-500/20 text-blue-400",
    "To Do": "bg-gray-500/20 text-gray-300",
  }[task.status]

  return (
    <div className="rounded bg-[#27272B] p-4">
      <div className="flex items-center justify-between">
        <div className="flex">
          <CalendarCheck2 />
          <div className="ml-2">{task.name}</div>
        </div>

        <div
          className={twMerge(
            "flex-shrink-0 whitespace-nowrap rounded-full px-3 py-1 text-center text-sm",
            statusStyle,
          )}
        >
          {task.status}
        </div>
      </div>
    </div>
  )
}

export default TaskCard
