'use client';

import { RELATED_PROJECTS, RELATED_SECTION } from '@/lib/constants/pages';
import { Section } from '../../container';
import { motion } from 'motion/react';
import { baseInViewAnimation } from '@/lib/constants/animation/base-animation';
import ProjectCard from './project-card';

const RelatedSection = () => {
  const { subTitle, title, id } = RELATED_SECTION;

  return (
    <Section.Root
      id={id}
      title={title}
      subTitle={subTitle}
      className='base-container flex-col'
    >
      <motion.div
        {...baseInViewAnimation(0.2, 0.3)}
        className='mt-8 grid grid-cols-1 gap-6'
      >
        {RELATED_PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </Section.Root>
  );
};

export default RelatedSection;
