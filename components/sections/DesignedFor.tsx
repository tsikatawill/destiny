import { styled } from '../../stitches.config';
import Container from '../Container';
import DesignFlex from '../DesignFlex';
import StyledSectionWrapper from '../SectionWrapper';

const DFlexWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '5rem',
});

export default function DesignedFor() {
  return (
    <section className="designed-for">
      <StyledSectionWrapper background="offWhite">
        <Container>
          <DFlexWrapper>
            <DesignFlex
              order="reversed"
              image="/laptop.png"
              btnText="WATCH INTRO"
              reasons={[
                'One awesome reason why something',
                'Another reason why something else',
                'Probably the last option on the list',
              ]}
              title="Designed for startups & brands"
              description="Some description that is meaningless to the meaninful lorem"
            />

            <DesignFlex
              image="/laptop.png"
              btnText="WATCH INTRO"
              reasons={[
                'One awesome reason why something',
                'Another reason why something else',
                'Probably the last option on the list',
              ]}
              title="Can be used on the fly anywhere"
              description="Some description that is meaningless to the meaninful lorem"
            />

            <DesignFlex
              order="reversed"
              image="/laptop.png"
              btnText="WATCH INTRO"
              reasons={[
                'One awesome reason why something',
                'Another reason why something else',
                'Probably the last option on the list',
              ]}
              title="Great coverage for all audiences"
              description="Some description that is meaningless to the meaninful lorem"
            />
          </DFlexWrapper>
        </Container>
      </StyledSectionWrapper>
    </section>
  );
}
