import React from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import IconWrapper from './IconWrapper';

const ProjectsSection = styled('section')(({ theme }) => ({
  padding: '6rem 2rem',
  background: theme.palette.background.default,
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

const ProjectsGrid = styled('div')({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
});

const ProjectCard = styled(motion.div)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '10px',
  overflow: 'hidden',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
  },
}));

const ProjectImage = styled('div')({
  width: '100%',
  height: '200px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const ProjectContent = styled('div')(({ theme }) => ({
  padding: '1.5rem',
}));

const ProjectTitle = styled('h3')(({ theme }) => ({
  color: theme.palette.text.primary,
  marginBottom: '1rem',
}));

const ProjectDescription = styled('p')(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: '1.5rem',
  fontSize: '0.9rem',
}));

const ProjectTech = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  marginBottom: '1.5rem',
});

const TechTag = styled('span')(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.background.default,
  padding: '0.25rem 0.75rem',
  borderRadius: '20px',
  fontSize: '0.8rem',
}));

const ProjectLinks = styled('div')({
  display: 'flex',
  gap: '1rem',
});

const ProjectLink = styled('a')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '1.2rem',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with MERN stack.',
    image: '/images/ecommerce.png',
    github: 'https://github.com/jonneldosado/ecommerce',
    live: 'https://ecommerce.jonneldosado.com',
  },
  {
    title: 'Task Management App',
    description: 'A task management application with real-time updates.',
    image: '/images/taskmanager.png',
    github: 'https://github.com/jonneldosado/taskmanager',
    live: 'https://taskmanager.jonneldosado.com',
  },
];

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <ProjectsSection id="projects" ref={ref}>
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </SectionTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -5 }}
          >
            <ProjectImage
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLinks>
                <ProjectLink
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconWrapper icon={FaGithub} size={24} color="#fff" />
                </ProjectLink>
                <ProjectLink
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconWrapper icon={FaExternalLinkAlt} size={24} color="#fff" />
                </ProjectLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects; 