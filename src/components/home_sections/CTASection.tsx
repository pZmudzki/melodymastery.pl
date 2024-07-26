import SectionContainer from "../ui/SectionContainer";

function CTASection() {
  return (
    <SectionContainer className="bg-blue-dark">
      <div className="px-10 py-12 xl:py-24">
        <div className="flex flex-col items-center md:flex-row rounded-2xl text-white relative">
          <div className="md:w-2/3 p-20 flex flex-col items-center gap-14 sm:gap-20">
            <h2 className="text-5xl sm:text-6xl xl:text-8xl text-center tracking-widest ">
              <span className="italic bg-gradient-to-r from-gold-base to-rose-300 text-transparent bg-clip-text font-bold">
                MelodyMastery
              </span>{" "}
              czeka na Ciebie!
            </h2>
            <p className="flex text-center items-center text-2xl xl:text-4xl lg:mx-10 xl:mx-20 tracking-wider">
              Zapisz się wypełniając formularz, na który dotrzesz klikają w
              przycisk poniżej! Jeśli wciąż masz wątpliwości, napisz do nas! Z
              chęcią odpowiemy na wszystkie twoje pytania!
            </p>
            <a
              href="https://forms.gle/MqChpUv6838K8W967"
              target="_blank"
              className=" max-w-fit px-8 sm:px-10 py-4 sm:pt-5 sm:pb-7 flex justify-center items-center rounded-xl text-3xl md:text-4xl xl:text-5xl font-semibold transition-all duration-300 bg-rose-300 hover:bg-gold-dark hover:scale-105 border-4 border-white"
            >
              Dołączam!
            </a>
          </div>
          <img
            src="/gallery/cta-bg.webp"
            alt="Zdjęcie przedstawiające ścianę z napisem MUSIC IS THE ANSWER"
            className="sm:w-2/3 md:w-1/3 rounded-2xl shadow-[-35px_0_60px_rgba(0,0,0,0.4)] scale-105"
          />
        </div>
      </div>
    </SectionContainer>
  );
}

export default CTASection;
