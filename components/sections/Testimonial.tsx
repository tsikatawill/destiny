import * as Avatar from '@radix-ui/react-avatar';
import * as Tooltip from '@radix-ui/react-tooltip';
import { styled } from '../../stitches.config';
import Container from '../Container';
import StyledSectionWrapper from '../SectionWrapper';

const StyledTestimonialCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  justifyContent: 'center',
  alignItems: 'center',

  '& p': {
    textAlign: 'center',
    maxWidth: '40rem',
  },

  '& .stars': {
    color: 'Darkorange',
  },
});

const StyledAvatar = styled(Avatar.Root, {
  height: '8rem',
  width: '8rem',
  borderRadius: '50%',
  overflow: 'hidden',
  background: '#ccc',
  display: 'grid',
  placeContent: 'center',
});

export default function Testimonial() {
  return (
    <StyledSectionWrapper background="white">
      <Container>
        <StyledTestimonialCard>
          <StyledAvatar>
            <Avatar.Image src="/beau.png" width="100%" />
          </StyledAvatar>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit voluptatibus officiis, ea eaque alias
            quaerat amet odit ab ullam perspiciatis, tempora quia, rem possimus atque nisi veniam! Ipsam, sequi a!
          </p>

          <div>
            <p>Beau Carnes</p>
            <p>Teacher - Developer, FreeCodeCamp</p>
          </div>

          <p className="stars">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
        </StyledTestimonialCard>
      </Container>
    </StyledSectionWrapper>
  );
}
