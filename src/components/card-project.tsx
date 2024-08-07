import Skeleton from "./skeleton"
const CardProject = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Skeleton />
      <h3 className="text-2xl text-white font-bold">
        Project&apos;s title
      </h3>
    </div>
  )
}

export default CardProject