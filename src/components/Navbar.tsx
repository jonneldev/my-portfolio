import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Link } from 'react-scroll';

const Nav = styled('nav')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  padding: '1rem 2rem',
  transition: 'all 0.3s ease-in-out',
  background: 'transparent',
  '&.scrolled': {
    background: theme.palette.background.paper,
    boxShadow: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
  },
}));

const NavContent = styled('div')({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Logo = styled('div')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
  fontSize: '1.5rem',
  cursor: 'pointer',
}));

const NavLinks = styled('div')({
  display: 'flex',
  gap: '2rem',
});

const NavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useScrollPosition(({ currPos }: { currPos: { y: number } }) => {
    setScrolled(currPos.y < -50);
  });

  return (
    <Nav className={scrolled ? 'scrolled' : ''}>
      <NavContent>
        <Logo>JD</Logo>
        <NavLinks>
          <NavLink
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            About
          </NavLink>
          <NavLink
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            Skills
          </NavLink>
          <NavLink
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            Projects
          </NavLink>
          <NavLink
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            Contact
          </NavLink>
        </NavLinks>
      </NavContent>
    </Nav>
  );
};

export default Navbar; 