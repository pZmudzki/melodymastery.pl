import SectionContainer from "../ui/SectionContainer";

import { ChevronDoubleDownIcon } from "@heroicons/react/16/solid";

function HeroSection() {
  return (
    <SectionContainer className="mt-32 bg-blue-dark text-gray-50">
      <div className="mx-10 lg:mx-20 flex flex-col md:flex-row items-center justify-around md:gap-20">
        <div className="md:z-10 xl:w-1/2 ">
          <h1 className="text-4xl sm:text-6xl md:text-7xl  font-medium text-center leading-normal mt-10 sm:mt-12 md:mt-32 tracking-wide	">
            Odkryj swój muzyczny potencjał w{" "}
            <span className="italic text-6xl sm:text-7xl md:text-8xl xl:text-9xl bg-gradient-to-r from-gold-base to-rose-300 text-transparent bg-clip-text font-bold">
              MelodyMastery
            </span>
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl lg:mx-20 xl:mx-10 text-center text-gray-200 xl:text-gray-300  mt-8 sm:mt-14 md:mt-20 tracking-wider leading-normal px-10">
            Twoim marzeniem jest nauczyć się śpiewać? rozwinąć muzycznie?
            nagrywać w profesjonalnym studio nagraniowym bądź występować na
            wielkich scenach? Idealnie trafiłeś! Nie pozwól czekać marzeniom
            tylko pomóż im i zapisz się do MelodyMastery!
          </p>
          <div className="flex w-full gap-4 mt-16 sm:mt-20 md:mt-28 md:mb-32 xl:mt-44 justify-center items-center">
            <a
              href="https://forms.gle/MqChpUv6838K8W967"
              target="_blank"
              className="px-8 sm:px-10 py-4 sm:pt-5 sm:pb-7 rounded-xl text-3xl sm:text-4xl font-semibold bg-rose-300 hover:bg-gold-base transition-all duration-300 border-4 border-white"
            >
              Dołączam!
            </a>
            <a
              href="#o_nas"
              className="px-8 sm:px-10 py-4 sm:pt-5 sm:pb-7 rounded-xl text-3xl sm:text-4xl text-black font-semibold bg-gray-300 flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-300 border-4 border-gray-300"
            >
              Więcej
              <ChevronDoubleDownIcon className="h-8 sm:h-9 translate-y-1" />
            </a>
          </div>
        </div>
        <div className="md:absolute md:right-10 xl:static xl:flex justify-center items-center xl:w-1/2">
          <div className="overflow-hidden border-2 rounded-full shadow-[0_0_60px_rgba(255,255,255,0.4)] w-[23rem] h-[23rem] md:w-[45rem] md:h-[45rem] xl:w-[50rem] xl:h-[50rem] 2xl:w-[55rem] 2xl:h-[55rem] mt-16 mb-8">
            <img
              src="/gallery/ula1.webp"
              alt="Ula Dorosz na występująca na scenie"
              className="object-fit md:grayscale-[70%] xl:grayscale-[0%]"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default HeroSection;
