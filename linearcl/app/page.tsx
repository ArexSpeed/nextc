import { Button, IconWrapper } from "../components/button";
import { Container } from "../components/container";
import { Hero, HeroSubtitle, HeroTitle } from "../components/hero";
import { HeroImage } from "../components/hero-image";
import { ChevronIcon } from "../components/icons/chevron";

export default function Homepage() {
  return (
    <div>
      <main>
        <Container className="pt-[6.4rem]">
          <Hero>
            <Button href="/" variant="secondary" size="small">
              Linear 2022 Release - Build for scale{" "}
              <IconWrapper>{"->"}</IconWrapper>
            </Button>
            <HeroTitle className="animate-fade-in [--animation-delay:200ms]">
              Linear is a better way
              <br className="hidden md:block" /> to build products
            </HeroTitle>
            <HeroSubtitle className="animate-fade-in [--animation-delay:400ms]">
              Meet the new standard for modern software devellpment.
              <br /> Streamline issues, spronts, and product roadmaps.
            </HeroSubtitle>
            <Button
              className="animate-fade-in [--animation-delay:600ms]"
              href="/"
              variant="primary"
              size="large"
            >
              Get Started{" "}
              <IconWrapper>
                <ChevronIcon />
              </IconWrapper>
            </Button>
            <HeroImage />
          </Hero>
        </Container>
      </main>
    </div>
  );
}
