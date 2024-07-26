import SectionContainer from "../ui/SectionContainer";
import SectionLabel from "../ui/SectionLabel";

function ServicesSection() {
  return (
    <SectionContainer id="oferta" className="bg-white">
      <div className="px-10 py-12 xl:py-24">
        <SectionLabel className="text-gold-base">OFERTA</SectionLabel>
        <div className="flex flex-col xl:grid xl:grid-cols-3 gap-20 md:gap-40 mt-12">
          <article className="rounded-2xl shadow-2xl overflow-hidden xl:col-start-1 xl:col-end-3 flex flex-col transition-all duration-300 hover:-translate-y-6 hover:shadow-lg">
            <img
              src="/gallery/microphone.webp"
              alt="Zdjęcie oświetlonego mikrofonu"
              className="w-full max-h-80 object-cover"
            />
            <div className="py-8">
              <h3 className="text-2xl text-gold-medium text-center font-bold">
                ZAJĘCIA INDYWIDUALNE
              </h3>
              <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x h-full">
                <div className="flex flex-col gap-10 justify-between px-12 h-full py-8">
                  <h3 className="text-center text-3xl font-semibold">
                    45-minutowe
                  </h3>
                  <p className="text-2xl">
                    Jest to optymalny czas dla praktycznie każdego! Podczas
                    zajęć bardzo dokładnie popracujemy nad emisją głosu,
                    ćwiczenia przełożymy na wybrane piosenki i zajmiemy się
                    dokładną interpretacją oraz przerabianiem danych utworów,
                    byśmy w przyszłości mogli je pokazać!
                  </p>
                  <p className="text-right text-xl  font-bold">Cena: 100zł</p>
                </div>
                <div className="flex flex-col justify-between px-12 h-full py-8">
                  <h3 className="text-center text-3xl font-semibold">
                    30-minutowe
                  </h3>
                  <p className="text-2xl">
                    Zajęcia te proponujemy dla najmłodszych do 7 roku życia.
                    Jest to optymalny czas by skutecznie pracować nad głosem.
                    Będziemy w super atmosferze pracować nad emisją, ekspresją
                    oraz kreatywnością! dopasujemy odpowiednie ćwiczenia oraz
                    popracujemy nad piosenkami byśmy w przyszłości mogli je
                    pokazać!
                  </p>
                  <p className="text-right text-xl font-bold">Cena: 65zł</p>
                </div>
              </div>
            </div>
          </article>
          <article className="rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-6 hover:shadow-lg">
            <img
              src="/gallery/choir.webp"
              alt="Ludzie śpiewający w chórze na ciemnym tle"
              className="w-full max-h-80 object-cover"
            />
            <div className="my-8 h-full">
              <h3 className="text-2xl text-gold-medium text-center font-bold">
                ZAJĘCIA GRUPOWE
              </h3>
              <div className="flex flex-col justify-between px-12 h-full py-8">
                <h3 className="text-center text-3xl font-semibold">
                  60-minutowe
                </h3>
                <p className="text-2xl">
                  Na te zajęcia zapraszamy wszystkich! są to idaelne zajęcia,
                  które pomagają rozwijać się wokalnie, muzycznie oraz
                  kreatywnie! Podczas zajęć pracujemy nad śpiewaniem na głosy,
                  przygotowujemy repertuar, który systematycznie będzie
                  wystawiany.
                </p>
                <p className="text-right text-xl font-bold ">Cena: 50zł</p>
              </div>
            </div>
          </article>
        </div>
        <p className="mt-12 text-xl text-center text-blue-dark">
          Pierwsze 10 zapisanych osób otrzyma{" "}
          <span className="text-gold-base font-bold">10% zniżki</span> za
          pierwszy miesiąc
        </p>
      </div>
    </SectionContainer>
  );
}

export default ServicesSection;
