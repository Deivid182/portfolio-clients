import CardProject from "./card-project"
const Projects = () => {
  return (
    <div className="bg-ellipse-intermediate">
      <div className="space-y-6 py-10 container mx-auto">
        <h2 className="text-white text-6xl font-black">
        Proyectos destacados
        </h2>
        <div className="grid md:grid-cols-2 gap-y-24 gap-x-12">
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        </div>
      </div>
    </div>
  )
}

export default Projects