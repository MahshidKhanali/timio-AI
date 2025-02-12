import EngineerCard from "@/app/components/EngineerCard"
import { Engineers } from "@/data"
import { MoveRightIcon } from "lucide-react"
import Link from "next/link"

const EngineersPage = () => {
  return (
    <>
      <h1 className="mb-4 border-l-2 border-l-gray-400 pl-2 text-2xl font-medium text-white">
        Engineers
      </h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {Engineers.map((item) => {
          return (
            <EngineerCard key={item.id} engineer={item}>
              <div className="mt-2 flex justify-end">
                <Link href={`/dashboard/engineers/${item.id}`}>
                  <button className="flex items-center gap-2 border-b-2 border-b-gray-400 text-sm text-gray-400 duration-100 hover:border-b-yellow-500 hover:text-yellow-500">
                    <div>View Details</div>
                    <MoveRightIcon size={14} />
                  </button>
                </Link>
              </div>
            </EngineerCard>
          )
        })}
      </div>
    </>
  )
}

export default EngineersPage
