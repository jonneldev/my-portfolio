import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-scroll';
import IconWrapper from './IconWrapper';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  color: #fff;
  padding: 0 2rem;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
`;

const Greeting = styled(motion.h1)`
  color: #00f2fe;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Name = styled(motion.h2)`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #00f2fe 0%, #4facfe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Title = styled(motion.h3)`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #a0a0a0;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: #a0a0a0;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  &:hover {
    color: #00f2fe;
  }
`;

const CTAButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background: linear-gradient(90deg, #00f2fe 0%, #4facfe 100%);
  border: none;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <Greeting
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, my name is
        </Greeting>
        <Name
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Jonnel Dosado.
        </Name>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I build things for the web.
        </Title>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          I'm a MERN Stack Developer specializing in building exceptional digital experiences.
          Currently, I'm focused on building accessible, high-quality web applications.
        </Description>
        <SocialLinks>
          <SocialLink
            href="https://github.com/jonneldosado"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper icon={FaGithub} size={24} color="#fff" />
          </SocialLink>
          <SocialLink
            href="https://linkedin.com/in/jonneldosado"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper icon={FaLinkedin} size={24} color="#fff" />
          </SocialLink>
          <SocialLink
            href="https://twitter.com/jonneldosado"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper icon={FaTwitter} size={24} color="#fff" />
          </SocialLink>
        </SocialLinks>
        <Link to="contact" smooth={true} duration={500}>
          <CTAButton
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Get In Touch
          </CTAButton>
        </Link>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 