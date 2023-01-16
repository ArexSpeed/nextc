import { Container } from "../components/container";
import { Hero, HeroSubtitle, HeroTitle } from "../components/hero";

export default function Homepage() {
  return (
    <div>
      <main>
        <Container>
          <Hero>
            <HeroTitle>
              Linear is a better way
              <br /> to build products
            </HeroTitle>
            <HeroSubtitle>
              Meet the new standard for modern software devellpment.
              <br /> Streamline issues, spronts, and product roadmaps.
            </HeroSubtitle>
            <img src="/hero.webp" alt="Hero image" />
          </Hero>
        </Container>
      </main>
    </div>
  );
}
