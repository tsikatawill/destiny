import Image from 'next/image';
import React from 'react';
import { styled } from '../stitches.config';

const StyledFeatureCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  background: '#eee',
  padding: '2rem',
  textAlign: 'center',
  transition: 'all 0.2s ease-in',

  '&:hover': {
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)',
  },

  '& .icon': {
    width: '4rem',
    height: '4rem',
    borderRadius: '50%',
    background: 'DodgerBlue',
    color: 'White',
    margin: 'auto',
    display: 'grid',
    placeContent: 'center',
  },

  '& h3': {
    fontSize: '1.2rem',
    textTransform: 'capitalize',
  },

  '& p': {
    fontSize: '$2',
  },
});

type Props = {
  icon: string;
  title: string;
  text: string;
};

export default function FeatureCard({ icon, title, text }: Props) {
  return (
    <StyledFeatureCard>
      <div className="icon">
        <Image src={icon} alt="icon" width="50px" height="50px" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </StyledFeatureCard>
  );
}
