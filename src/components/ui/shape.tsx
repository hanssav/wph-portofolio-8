import { cn } from '@/lib/utils';

const Shape: React.FC<{ position: 'top' | 'bottom'; className?: string }> = ({
  position = 'top',
  className,
}) => {
  const align = { top: 'self-start', bottom: 'self-end' };

  return (
    <div
      className={cn(
        'size-[35px] bg-[#1D3300] md:size-[46px]',
        align[position],
        className
      )}
    />
  );
};

export default Shape;
