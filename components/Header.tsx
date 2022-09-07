import { styled } from '../stitches.config';
import Navbar from './Navbar';
import Hero from './Hero';

const StyledHeader = styled('header', {
  background:
    'linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(./header-bg.jpg) center center/cover no-repeat',
  backgroundAttachment: 'fixed',
});

export default function Header() {
  return (
    <StyledHeader>
      <Navbar />
      <Hero />
    </StyledHeader>
  );
}
