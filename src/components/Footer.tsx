import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import IconWrapper from './IconWrapper';

const FooterSection = styled.footer`
  background: #1a1a1a;
  padding: 2rem 0;
  color: #fff;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  &:hover {
    color: #00f2fe;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #a0a0a0;
`;

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <FooterContent>
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
        <Copyright>
          © {new Date().getFullYear()} Jonnel Dosado. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterSection>
  );
};

export default Footer; 