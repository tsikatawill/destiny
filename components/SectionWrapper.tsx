import type * as Stitches from '@stitches/react';
import React from 'react';
import { styled } from '../stitches.config';

const StyledSectionWrapper = styled('div', {
  padding: '3rem 0',

  variants: {
    background: {
      white: {
        backgroundColor: 'White',
        color: 'Black',
      },
      offWhite: {
        backgroundColor: 'rgb(236, 240, 247)',
        color: 'Black',
      },
    },
  },
});

() => <StyledSectionWrapper></StyledSectionWrapper>;

export default StyledSectionWrapper;
