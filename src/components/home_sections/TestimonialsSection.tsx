import TestimonialsList from "../TestimonialsList";
import BackgroundPattern from "../ui/BackgroundPattern";
import SectionContainer from "../ui/SectionContainer";
import SectionLabel from "../ui/SectionLabel";

function TestimonialsSection() {
  return (
    <SectionContainer id="opinie" className="text-white" noWidthLimit>
      <BackgroundPattern
        fill="hsla(240, 100%, 4%, 1)"
        stroke="hsla(45, 36%, 28%, 1)"
      />
      <div className="p-12 xl:py-20">
        <SectionLabel className="text-gold-light text-center">
          OPINIE
        </SectionLabel>
        <TestimonialsList />
      </div>
    </SectionContainer>
  );
}

export default TestimonialsSection;
