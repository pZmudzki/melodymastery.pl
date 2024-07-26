import SectionContainer from "../ui/SectionContainer";
import SectionLabel from "../ui/SectionLabel";

function AboutSection() {
  return (
    <SectionContainer id="o_nas" className="z-10">
      <div className="px-10 py-12 xl:py-24">
        <SectionLabel className="text-gold-base">O NAS</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-16">
          <div className="flex flex-col gap-3 md:col-start-1 md:col-end-4">
            <h3 className="text-5xl mt-4 font-bold">Dlaczego my?</h3>
            <p className="text-2xl xl:text-3xl mt-2 tracking-wide ">
              <span className="font-bold">MelodyMastery</span> to miejsce
              stworzone przez muzyków, artystów, wokalistów, których łączy pasja
              jaką jest jest śpiew! Naszym celem jest przede wszystkim
              spełnianie muzyczno-wokalnych marzeń, rozwój ekspresji , wokalu
              oraz świadomości artystycznej! Do naszej społeczności może
              dołączyć każdy, bez względu na umiejętności wokalne czy wiek.
              Skupiamy się na stworzeniu jak najlepszych warunków, byś mógł w
              bezpieczny, profesjonalny świadomy, dopasowany do siebie sposób
              progresować wokalnie.
            </p>
          </div>
          <div className="flex items-center justify-center md:col-start-4 md:col-end-7">
            <img
              src="/logo.webp"
              alt="Logo Melody Mastery"
              className="max-w-[300px] md:w-3/4 self-center rounded-full shadow-2xl"
            />
          </div>
          <div className="flex items-center justify-center gap-4 row-start-4 md:row-start-auto md:col-start-1 md:col-end-3">
            <img
              src="/gallery/ula2.webp"
              alt="Ula Dorosz występująca na scenie"
              className="max-w-[400px] md:w-full lg:w-full self-center rounded-2xl shadow-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 md:col-start-3 md:col-end-7">
            <h3 className="text-5xl font-bold">Kto będzie Cię uczyć?</h3>
            <p className="text-2xl xl:text-3xl mt-2 tracking-wide ">
              <span className="font-bold italic">Urszula Dorosz</span> -
              utalentowana wokalistka, z ponad 12 letnim doświadczeniem
              scenicznym. Swoją wytężoną pracą i rozwijaniem swojej pasji
              udowodniła, że każde marzenie może się spełnić. Jest absolwentką I
              stopnia Szkoły Muzycznej im. I.J. Paderewskiego w Sulejówku.
              Dodatkowo swój warsztat sceniczny doskonaliła w Szkole Aktorskiej
              im Haliny i Jana Machulskich w Warszawie. W wieku 11 lat Ula
              została jedną z finalistek Polskich Preselekcji do Eurowizji
              Junior (2016r). Występowała na scenie razem z Natalią Szroeder,
              Zespołem Enej, czy Anią Wyszkoni. W jej dotychczasowym życiorysie
              znajdziemy informacje o udziale w Narodowym Czytaniu dzieła
              Stanisława Wyspiańskiego „Wesele”, w którym u boku wielu znanych
              aktorów teatralnych i filmowych wcieliła się w rolę „Isi”.
              Dwukrotnie powierzono Uli współprowadzenie programu telewizyjnego
              „Kolędowanie z Fundacją Polsat”. Występowała na deskach teatrów,
              między innymi Teatru Polskiego, otwierając galę finałową Festiwalu
              Teatrów Młodzieżowych. Jest laureatką ponad stu festiwali
              wokalnych. Zdobywała nagrody na festiwalach o randze
              ogólnopolskiej jak i międzynarodowej. Ula z zamiłowaniem rozwija
              swoją pasję muzyczną, współtworząc i wydając piosenki, które
              możecie znaleźć w sieciach streamingowych.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default AboutSection;
