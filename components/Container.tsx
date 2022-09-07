import React from 'react';

import { styled } from '../stitches.config';

const Container = styled('div', {
  maxWidth: '1024px',
  margin: '0 auto',
  padding: '1.5rem',
});

({ children }: { children: React.ReactNode }) => <Container>{children}</Container>;

export default Container;
