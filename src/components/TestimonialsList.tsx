function TestimonialsList() {
  return (
    <ul className="mt-20 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-20">
      <li className=" flex flex-col gap-4">
        <div className="flex items-center gap-7">
          <img
            src="/gender_icons/female3.png"
            alt="Ikona osoby udzielającej opinii"
            className=" h-24"
          />
          <h3 className="text-3xl">Mama Madzi</h3>
        </div>
        <blockquote className="text-2xl">
          Bardzo polecam zajęcia wokalne z Panią Ulą! Córka jest zachwycona,
          inne zajęcia może odpuścić, ale na pewno nie te. Po zajęciach
          dostajemy informacje nad czym trzeba popracować. Świetny kontakt z
          córką, widzę u niej postępy, jesteśmy bardzo zadowolone!
        </blockquote>
      </li>
      <li className=" flex flex-col gap-4">
        <div className="flex items-center gap-7">
          <img
            src="/gender_icons/female1.png"
            alt="Ikona osoby udzielającej opinii"
            className=" h-24"
          />
          <h3 className="text-3xl">Mama Hani</h3>
        </div>
        <blockquote className="text-2xl">
          Pani Ula to trenerka wokalna, ktòrą uwielbiają wszystkie dziewczynki.
          Piękny głos, cierpliwa i życzliwa dla swoich podopiecznych. Młoda,
          świadoma swoich umiejętności wie jak zachęcić dzieci do angażowania
          się na zajęciach.
        </blockquote>
      </li>
      <li className=" flex flex-col gap-4">
        <div className="flex items-center gap-7">
          <img
            src="/gender_icons/male2.png"
            alt="Ikona osoby udzielającej opinii"
            className=" h-24"
          />
          <h3 className="text-3xl">Tata Heli</h3>
        </div>
        <blockquote className="text-2xl">
          Trenerka wokalna mojej córki, Ula Dorosz, jest bardzo zaangażowana w
          swoją pracę. Zawsze serdeczna, mówi nad czym pracować, ćwiczy do
          osiągnięcia perfekcji. Hela zawsze wraca bardzo zadowolona z zajęć.
        </blockquote>
      </li>
      <li className=" flex flex-col gap-4">
        <div className="flex items-center gap-7">
          <img
            src="/gender_icons/female2.png"
            alt="Ikona osoby udzielającej opinii"
            className=" h-24"
          />
          <h3 className="text-3xl">Mama Oli</h3>
        </div>
        <blockquote className="text-2xl">
          Pani Ula, jest bardzo ciepłą osobą z ogromnym doświadczeniem wokalnym.
          Bardzo świadomie uczy śpiewać. Jest też wymagająca, ale za tym idą
          efekty. Bardzo polecam i oczywiście nadal będziemy kontynuować zajęcia
          u Pani Uli!
        </blockquote>
      </li>
    </ul>
  );
}

export default TestimonialsList;
