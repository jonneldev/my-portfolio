import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import IconWrapper from './IconWrapper';

const ContactSection = styled('section')(({ theme }) => ({
  padding: '6rem 2rem',
  background: theme.palette.background.paper,
}));

const SectionTitle = styled(motion.h2)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '2.5rem',
  marginBottom: '3rem',
  textAlign: 'center',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '-10px',
    width: '50px',
    height: '3px',
    background: theme.palette.primary.main,
  },
}));

const ContactContent = styled('div')({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4rem',
  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
  },
});

const ContactInfo = styled('div')(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const InfoItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1.5rem',
  gap: '1rem',
});

const InfoIcon = styled('div')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '1.5rem',
}));

const InfoText = styled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const SocialLinks = styled('div')({
  display: 'flex',
  gap: '1.5rem',
  marginTop: '2rem',
});

const SocialLink = styled('a')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '1.5rem',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const ContactForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
}));

const FormGroup = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

const Label = styled('label')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '0.9rem',
}));

const Input = styled('input')(({ theme }) => ({
  padding: '0.75rem',
  borderRadius: '5px',
  border: `1px solid ${theme.palette.text.secondary}`,
  background: theme.palette.background.default,
  color: theme.palette.text.primary,
  '&:focus': {
    outline: 'none',
    borderColor: theme.palette.primary.main,
  },
}));

const TextArea = styled('textarea')(({ theme }) => ({
  padding: '0.75rem',
  borderRadius: '5px',
  border: `1px solid ${theme.palette.text.secondary}`,
  background: theme.palette.background.default,
  color: theme.palette.text.primary,
  minHeight: '150px',
  resize: 'vertical',
  '&:focus': {
    outline: 'none',
    borderColor: theme.palette.primary.main,
  },
}));

const SubmitButton = styled('button')(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.background.default,
  padding: '0.75rem 2rem',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 600,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 15px rgba(0, 255, 136, 0.3)',
  },
}));

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <ContactSection id="contact" ref={ref}>
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </SectionTitle>
      <ContactContent>
        <ContactInfo>
          <InfoItem>
            <InfoIcon>
              <IconWrapper icon={MdEmail} size={24} color="#00f2fe" />
            </InfoIcon>
            <InfoText>jonneldosado.code@gmail.com</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoIcon>
              <IconWrapper icon={MdLocationOn} size={24} color="#00f2fe" />
            </InfoIcon>
            <InfoText>Hsinchu, Taiwan</InfoText>
          </InfoItem>
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
        </ContactInfo>
        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactContent>
    </ContactSection>
  );
};

export default Contact; 