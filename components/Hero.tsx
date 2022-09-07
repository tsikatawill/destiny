import { styled } from '../stitches.config';
import Container from './Container';

const HeroInner = styled('div', {
  minHeight: '75vh',
  display: 'grid',
  gridTemplateColumns: '80%',
  alignItems: 'center',

  '@md': {
    minHeight: '40rem',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center',
  },

  '& h1': {
    fontWeight: '800',
    fontSize: '3rem',
    margin: '0',
    lineHeight: '3rem',

    '@md': {
      fontSize: '3.2rem',
      lineHeight: '3.5rem',
    },
  },

  '& p': {
    margin: '1rem 0',
  },
});

export const StyledButton = styled('button', {
  color: 'White',
  padding: '0.5rem 1.5rem',
  fontWeight: '500',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in',

  '&:hover': {
    transform: 'scale(0.95)',
  },

  variants: {
    type: {
      primary: {
        backgroundColor: 'DodgerBlue',
        color: 'white',
        '&:hover': {
          backgroundColor: 'Turquoise',
        },
      },
      gray: {
        backgroundColor: 'gainsboro',
        color: 'Black',
        '&:hover': {
          backgroundColor: 'lightgray',
        },
      },
    },
  },
});

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <HeroInner>
          <div className="left">
            <h1>Meet Destiny, the visionary landing page</h1>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum inventore, officiis aliquid similique,
              praesentium?.
            </p>

            <StyledButton type="primary">Watch Intro</StyledButton>
          </div>
        </HeroInner>
      </Container>
    </section>
  );
};

export default Hero;
