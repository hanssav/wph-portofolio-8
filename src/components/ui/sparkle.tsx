import { cn } from '@/lib/utils';

const SparkleIcon: React.FC<{ className?: string; fill?: string }> = ({
  className,
  fill = '#88dd0e',
}) => {
  const points = [];
  const centerX = 12;
  const centerY = 12;
  const outerRadius = 10;
  const innerRadius = 4;
  const numPoints = 10;

  for (let i = 0; i < numPoints * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = (i * Math.PI) / numPoints - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    points.push(`${x},${y}`);
  }

  return (
    <svg viewBox='0 0 24 24' fill={fill} className={cn('h-6 w-6', className)}>
      <polygon points={points.join(' ')} />
    </svg>
  );
};

export default SparkleIcon;

// ======================
// OTHERS ICONS
// ======================

// const SparkleIcon = () => (
//   <svg viewBox='0 0 24 24' fill='currentColor' className='h-6 w-6'>
//     <path d='M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z' />
//   </svg>
// );

// const SparkleIcon: React.FC<{ className?: string; fill?: string }> = (
//   className,
//   fill = '#88dd0e'
// ) => (
//   <svg viewBox='0 0 24 24' fill={fill} className={cn('h-6 w-6', className)}>
//     <polygon points='12,2 13.2,8.8 19.1,5.9 14.8,10.2 21.4,11.4 15.2,13.6 19.1,18.1 13.2,15.2 14.8,21.8 12,16 9.2,21.8 10.8,15.2 4.9,18.1 8.8,13.6 2.6,11.4 9.2,10.2 4.9,5.9 10.8,8.8' />
//   </svg>
// );
