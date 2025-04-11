import React from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript } from 'react-icons/si';
import IconWrapper from './IconWrapper';

const SkillsSection = styled('section')(({ theme }) => ({
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

const SkillsGrid = styled('div')({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: '1.5rem',
  perspective: '1000px',
});

const SkillCard = styled(motion.div)(({ theme }) => ({
  background: theme.palette.background.default,
  padding: '1.5rem 1rem',
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  border: `1px solid ${theme.palette.divider}`,
}));

const SkillIcon = styled(motion.div)({
  marginBottom: '1rem',
  transformStyle: 'preserve-3d',
});

const SkillName = styled('h4')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '1rem',
  fontWeight: 500,
}));

const skills = [
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Express', icon: SiExpress },
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'JavaScript', icon: FaJs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Git', icon: FaGitAlt },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Docker', icon: FaDocker },
];

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <SkillsSection id="skills" ref={ref}>
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Skills & Technologies
      </SectionTitle>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              y: -5,
              rotateY: 5,
              boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
            }}
          >
            <SkillIcon
              whileHover={{
                scale: 1.2,
                rotate: [0, 10, -10, 0],
                transition: { duration: 0.7 },
              }}
            >
              <IconWrapper icon={skill.icon} size={36} />
            </SkillIcon>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;