import React from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = styled('section')(({ theme }) => ({
  padding: '6rem 2rem',
  background: theme.palette.background.default,
}));

const SectionTitle = styled(motion.h2)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '2.5rem',
  marginBottom: '3rem',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: '-10px',
    width: '50px',
    height: '3px',
    background: theme.palette.primary.main,
  },
}));

const AboutContent = styled('div')({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4rem',
  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
  },
});

const AboutText = styled('div')(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
}));

const Timeline = styled('div')({
  position: 'relative',
  paddingLeft: '2rem',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '2px',
    background: 'rgba(255, 255, 255, 0.1)',
  },
});

const TimelineItem = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  paddingBottom: '2rem',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '-2.5rem',
    top: '0.5rem',
    width: '1rem',
    height: '1rem',
    borderRadius: '50%',
    background: theme.palette.primary.main,
  },
}));

const TimelineDate = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '0.9rem',
  fontWeight: 600,
}));

const TimelineTitle = styled('h3')(({ theme }) => ({
  color: theme.palette.text.primary,
  margin: '0.5rem 0',
}));

const TimelineDescription = styled('p')(({ theme }) => ({
  color: theme.palette.text.secondary,
  margin: 0,
}));

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <AboutSection id="about" ref={ref}>
      <AboutContent>
        <div>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            About Me
          </SectionTitle>
          <AboutText>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I'm a passionate MERN Stack Developer with a strong foundation in web development.
              I love creating beautiful, functional, and user-friendly applications that solve
              real-world problems.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              My journey in web development started with a bootcamp, where I learned the
              fundamentals of programming and web technologies. Since then, I've been
              continuously learning and improving my skills to stay up-to-date with the
              latest technologies and best practices.
            </motion.p>
          </AboutText>
        </div>
        <Timeline>
          <TimelineItem
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <TimelineDate>2023 - Present</TimelineDate>
            <TimelineTitle>MERN Stack Developer</TimelineTitle>
            <TimelineDescription>
              Working on various projects using MongoDB, Express.js, React, and Node.js
            </TimelineDescription>
          </TimelineItem>
          <TimelineItem
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <TimelineDate>2022 - 2023</TimelineDate>
            <TimelineTitle>Web Development Bootcamp</TimelineTitle>
            <TimelineDescription>
              Completed intensive training in full-stack web development
            </TimelineDescription>
          </TimelineItem>
          <TimelineItem
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <TimelineDate>2021 - 2022</TimelineDate>
            <TimelineTitle>Self-Taught Developer</TimelineTitle>
            <TimelineDescription>
              Started learning programming fundamentals and web technologies
            </TimelineDescription>
          </TimelineItem>
        </Timeline>
      </AboutContent>
    </AboutSection>
  );
};

export default About; 