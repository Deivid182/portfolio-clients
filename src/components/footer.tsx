import Image from "next/image";

const Footer = () => {
  return (
    <section className="bg-[#242424] bg-ellipses-last">
      <footer className="container mx-auto py-16">
        <div className="flex gap-10">
          <div className="space-y-4 flex-1">
            <h2 className="text-6xl font-black text-white">Contact</h2>
            <p className="text-justify text-[#cdcdcd] text-lg font-medium">
              Me encantaría escuchar sobre tu proyecto y como podría ayudarte.
              En tal caso, por favor llenar el formulario, y me pondré en
              contacto lo más pronto posible.
            </p>
          </div>
          <form className="flex-1 space-y-4">
            <input
              type="text"
              className="w-[100%] block focus:outline-none h-[3rem] px-5 py-2 text-xl font-medium text-[#868686] bg-[#242424] border-b-gray-300 border-b-2"
              placeholder="NOMBRE"
            />
            <input
              type="email"
              className="w-[100%] h-[3rem] focus:outline-none px-5 py-2 text-xl font-medium text-[#868686] bg-[#242424] border-b-gray-300 border-b-2"
              placeholder="EMAIL"
            />
            <textarea
              className="w-[100%] h-[7rem] focus:outline-none px-5 py-2 text-xl font-medium text-[#868686] bg-[#242424] border-b-gray-300 border-b-2"
              placeholder="MENSAJE"
            ></textarea>
            <button
              type="submit"
              className="mt-10 block ml-auto tracking-wider uppercase text-[#f8f8f8] text-xl border-b-2 border-b-[#4CE19E] py-6"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
        <hr className="w-full h-px bg-gray-300 my-20" />
        <div className="flex items-center justify-between my-10 container mx-auto">
          <span className="text-2xl text-white font-bold">davepm</span>
          <div className="flex items-center gap-8">
            <Image
              src="/icons/github.png"
              alt="github icono"
              width={30}
              height={30}
            />
            <Image
              src="/icons/linkedin.png"
              alt="linkedin icono"
              width={30}
              height={30}
            />
            <Image
              src="/icons/twitter.png"
              alt="twitter icono"
              width={30}
              height={30}
            />
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
