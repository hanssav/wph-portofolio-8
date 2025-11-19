import SparkleIcon from '@/components/ui/sparkle';
import { cn } from '@/lib/utils';

const ExperienceListItem: React.FC<{ skill: string; isMe: boolean }> = ({
  skill,
  isMe,
}) => {
  return (
    <div className='gap-lg pb-3xl flex w-full items-center border-b border-neutral-800'>
      <SparkleIcon
        fill={!isMe ? '#91FF0266' : '#88dd0e'}
        className='lg:size-8'
      />
      <h1
        className={cn(
          'text-md-bold lg:text-xl-bold',
          !isMe && 'text-neutral-400'
        )}
      >
        {skill}
      </h1>
    </div>
  );
};

export default ExperienceListItem;
