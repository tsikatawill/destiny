import Container from './Container';
import StyledSectionWrapper from './SectionWrapper';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <StyledSectionWrapper>
      <Container>
        <p>All rights reserved &copy; {year}</p>
      </Container>
    </StyledSectionWrapper>
  );
}
