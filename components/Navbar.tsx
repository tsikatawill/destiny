import Link from 'next/link';
import React, { useState } from 'react';
import { styled } from '../stitches.config';
import Container from './Container';

export const Logo = styled('span', {
  padding: '10px',
  background: 'DodgerBlue',
  color: 'White',
  fontSize: '1.3rem',
  fontWeight: 'bold',
});

const NavbarInner = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const NavMenu = styled('div', {
  display: 'flex',
  gap: '1rem',
  textTransform: 'uppercase',
  transition: 'all 0.5s ease',

  // justifyContent: 'center',
  // alignItems: 'center',
  // flexDirection: 'column',
  // position: 'fixed',
  // background: 'White',
  // color: 'Black',
  // width: '100vw',
  // minHeight: '100vh',
  // top: 0,
  // left: 0,

  variants: {
    minimised: {
      true: {
        position: 'fixed',
        height: '100vh',
        width: '100vw',
        top: 0,
        left: '100vw',
        background: 'White',
        color: 'Black',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: '1.5rem',
      },
      false: {
        position: 'static',
        height: 'auto',
        width: 'fit-content',
        left: '100vw',
        background: 'transparent',
        color: 'white',
        flexDirection: 'row',
        fontSize: '1rem',
      },
    },

    open: {
      true: {
        left: 0,
      },
      false: {
        left: '100vw',
      },
    },
  },
});

const StyledToggleBtn = styled('button', {
  height: '1.5rem',
  width: '1.5rem',
  display: 'block',
  cursor: 'pointer',

  '@md': {
    display: 'none',
  },

  variants: {
    type: {
      closeBtn: {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
      },
    },
  },
});

const Navbar = () => {
  const [showNavMenu, setShowNavMenu] = useState<boolean>(false);
  return (
    <nav className="navbar">
      <Container>
        <NavbarInner>
          <Logo>De</Logo>

          <NavMenu minimised={{ '@initial': true, '@md': false }} open={showNavMenu}>
            <StyledToggleBtn type="closeBtn" onClick={() => setShowNavMenu(!showNavMenu)}>
              X
            </StyledToggleBtn>

            <Link href="/#">Home</Link>
            <Link href="/#">Services</Link>
            <Link href="/#">features</Link>
            <Link href="/#">reviews</Link>
            <Link href="/#">pricing</Link>
            <Link href="/#">contact</Link>
          </NavMenu>

          <StyledToggleBtn onClick={() => setShowNavMenu(!showNavMenu)}>=</StyledToggleBtn>
        </NavbarInner>
      </Container>
    </nav>
  );
};

export default Navbar;
