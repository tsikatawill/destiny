import { styled } from '../../stitches.config';
import Container from '../Container';
import StyledSectionWrapper from '../SectionWrapper';
import FeatureCard from '../FeatureCard';

const SectionHead = styled('div', {
  textAlign: 'center',
  '& h2': {
    fontWeight: 'bold',
    fontSize: '2rem',
    margin: 0,
    marginBottom: '0.5rem',
  },
  '& p': {
    fontSize: '$1',
    maxWidth: '100%',

    '@md': {
      maxWidth: '600px',
      margin: '0 auto',
    },
  },
});

const FeatureCards = styled('div', {
  display: 'grid',
  marginTop: '2rem',
  gridTemplateColumns: '1fr',
  gap: '1rem',

  '@md': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 300px))',
    justifyContent: 'center',
  },
});

export default function Features() {
  return (
    <section className="features">
      <StyledSectionWrapper background="white">
        <Container>
          <SectionHead>
            <h2>Destiny isn&lsquo;t A.I, its the result of human intelligence</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt accusantium quia qui, consequatur amet
              nemo. Nemo magnam ab totam sit molestias ea tempore pariatur assumenda maxime.
            </p>
          </SectionHead>

          <FeatureCards>
            <FeatureCard
              title="Highly responsive"
              icon="/favicon.ico"
              text="Repellat doloribus atque optio quis. Vel accusamus quod ducimus aperiam minus repellendus aspernatur."
            />
            <FeatureCard
              title="Built-in security"
              icon="/favicon.ico"
              text="Dolor really coming soon sit amet consectetur adipisicing elit. Magni repellendus quidem, culpa a dolor nihil"
            />
            <FeatureCard
              title="Safety locked"
              icon="/favicon.ico"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni repellendus quidem, culpa a dolor nihil"
            />
          </FeatureCards>
        </Container>
      </StyledSectionWrapper>
    </section>
  );
}
