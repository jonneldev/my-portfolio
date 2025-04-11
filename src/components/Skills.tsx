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
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
});

const SkillCard = styled(motion.div)(({ theme }) => ({
  background: theme.palette.background.default,
  padding: '2rem',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}));

const SkillTitle = styled('h3')(({ theme }) => ({
  color: theme.palette.text.primary,
  marginBottom: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
}));

const ProgressBar = styled(motion.div)(({ theme }) => ({
  height: '8px',
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '4px',
  overflow: 'hidden',
  marginBottom: '1rem',
}));

const ProgressFill = styled(motion.div)(({ theme }) => ({
  height: '100%',
  background: theme.palette.primary.main,
  borderRadius: '4px',
}));

const SkillName = styled('span')(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.9rem',
}));

const SkillItem = styled(motion.div)(({ theme }) => ({
  background: theme.palette.background.default,
  padding: '2rem',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const SkillIcon = styled('div')({
  marginBottom: '1rem',
});

const SkillLevel = styled('div')({
  width: '100%',
  height: '8px',
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '4px',
  overflow: 'hidden',
});

interface SkillLevelBarProps {
  level: number;
}

const SkillLevelBar = styled(motion.div)<SkillLevelBarProps>`
  height: 100%;
  background: #00f2fe;
  border-radius: 4px;
  width: ${props => props.level}%;
`;

const skills = [
  { name: 'React', icon: FaReact, level: 90 },
  { name: 'Node.js', icon: FaNodeJs, level: 85 },
  { name: 'MongoDB', icon: SiMongodb, level: 80 },
  { name: 'Express.js', icon: SiExpress, level: 85 },
  { name: 'HTML5', icon: FaHtml5, level: 95 },
  { name: 'CSS3', icon: FaCss3Alt, level: 90 },
  { name: 'JavaScript', icon: FaJs, level: 90 },
  { name: 'TypeScript', icon: SiTypescript, level: 80 },
  { name: 'Git', icon: FaGitAlt, level: 85 },
  { name: 'GitHub', icon: FaGithub, level: 85 },
  { name: 'Docker', icon: FaDocker, level: 70 },
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
          <SkillItem
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <SkillIcon>
              <IconWrapper icon={skill.icon} size={40} color="#00f2fe" />
            </SkillIcon>
            <SkillName>{skill.name}</SkillName>
            <SkillLevel>
              <SkillLevelBar level={skill.level} />
            </SkillLevel>
          </SkillItem>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills; 