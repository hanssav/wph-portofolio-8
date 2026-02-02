'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { ProjectCardProps } from './types';

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
          delay: index * 0.1,
        },
      }}
      viewport={{ once: true, amount: 0.3 }}
      className='group relative w-full cursor-pointer rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-800/50'
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className='space-y-4'>
        <div className='flex items-start justify-between'>
          <div className='flex-1'>
            <h3 className='text-xl-bold group-hover:text-primary text-white transition-colors'>
              {project.title}
            </h3>
            <p className='text-sm-regular mt-1 text-neutral-400'>
              {project.tech}
            </p>
          </div>
          <Button
            variant='ghost'
            size='sm'
            className='pointer-events-none ml-4 p-2 text-neutral-400 hover:text-white'
          >
            {isExpanded ? (
              <ChevronUp className='size-4' />
            ) : (
              <ChevronDown className='size-4' />
            )}
          </Button>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className='overflow-hidden'
            >
              <div className='space-y-4 border-t border-neutral-800 pt-4'>
                <p className='text-md-regular leading-relaxed text-neutral-300'>
                  {project.description}
                </p>

                <div className='space-y-3'>
                  <h4 className='text-lg-semibold text-white'>Features:</h4>
                  <ul className='space-y-2'>
                    {project.features.map((feature: string, idx: number) => (
                      <li
                        key={idx}
                        className='text-sm-regular flex items-start gap-2 text-neutral-400'
                      >
                        <span className='text-primary mt-1.5'>•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='space-y-3'>
                  <h4 className='text-lg-semibold text-white'>Impact:</h4>
                  <p className='text-sm-regular leading-relaxed text-neutral-400'>
                    {project.impact}
                  </p>
                </div>

                <div className='flex flex-wrap gap-3 pt-4'>
                  {project.github && (
                    <Button
                      variant='outline'
                      size='sm'
                      asChild
                      className='rounded-xl border-neutral-700 bg-neutral-800/50 text-white hover:bg-neutral-700'
                    >
                      <a
                        href={project.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className='size-4' />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.liveDemo && (
                    <Button
                      variant='default'
                      size='sm'
                      asChild
                      className='rounded-xl'
                    >
                      <a
                        href={project.liveDemo}
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className='size-4' />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
