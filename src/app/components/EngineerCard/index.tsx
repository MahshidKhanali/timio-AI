import { Engineer, PRs } from "@/data"
import { CalendarCheck2, GitPullRequest, Star } from "lucide-react"
import Image from "next/image"
import React, { FC, PropsWithChildren } from "react"

interface EngineerCardProps extends PropsWithChildren {
  engineer: Engineer
}

const EngineerCard: FC<EngineerCardProps> = ({ engineer, children }) => {
  const avg =
    engineer.prs
      .map((item) => PRs.find((pr) => String(pr.id) === String(item)))
      .map(
        (item) =>
          ((item?.scores?.maintainability || 0) +
            (item?.scores?.performance || 0) +
            (item?.scores?.readability || 0) +
            (item?.scores?.testCoverage || 0)) /
          4,
      )
      .reduce((a, b) => a + b, 0) / engineer.prs.length

  return (
    <div className="w-full rounded bg-[#27272B] p-4">
      <div className="flex items-center gap-4">
        <div className="h-14 w-14">
          <Image
            src={engineer.avatar}
            width={56}
            height={56}
            alt=" "
            className="rounded-full"
          />
        </div>

        <div className="flex w-full justify-between">
          <div className="w-full">
            <div className="text-lg font-medium text-white">
              {engineer.name}
            </div>
            <div className="text-xs text-white">{engineer.email}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Star size={14} className="fill-yellow-500 text-yellow-500" />
          <div>
            {avg.toFixed(1)}
            <span className="text-xs text-gray-400">/10</span>
          </div>
        </div>
      </div>

      <section className="mt-6 grid grid-cols-2">
        <div>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <CalendarCheck2 size={14} />
            <div>Tasks</div>
          </div>
          <div className="font-medium text-white">{engineer.tasks.length}</div>
        </div>

        <div>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <GitPullRequest size={14} />
            <div>Pull Requests</div>
          </div>
          <div className="font-medium text-white">{engineer.prs.length}</div>
        </div>
      </section>

      {children}
    </div>
  )
}

export default EngineerCard
