import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-ellipses-first">
      <div className="container mx-auto">
        <div className="space-y-10 mt-40 max-w-2xl">
          <h1 className="text-justify leading-tight text-white text-6xl font-black">
            ¡Bienvenidos a mi mundo digital!{" "}
            <span className="border-b-4 border-b-[#4CE19E]">
              Soy David Mendoza
            </span>
            .
          </h1>
          <p className="text-justify text-[#cdcdcd] text-lg font-medium">
            Soy un desarrollador web apasionado en construir sitios y
            aplicaciones web accesibles para todos los dispositivos.
          </p>
          <Link
            href="/#contact"
            className="mt-10 inline-block tracking-wider uppercase text-[#f8f8f8] text-xl border-b-2 border-b-[#4CE19E] py-6"
          >
            Contactame
          </Link>
        </div>
      <hr className="w-full h-px bg-gray-300 my-20" />
      </div>
    </div>
  );
};

export default Hero;
