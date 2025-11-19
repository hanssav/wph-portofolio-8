import Mapper from './mapper';
import { SHAPE_DATAS } from '@/lib/constants';
import Shape from '../ui/shape';
import { cn } from '@/lib/utils';

const Shapes: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Mapper
      data={SHAPE_DATAS}
      className={cn('absolute flex h-[70px] md:h-[92px]', className)}
    >
      {(item, i) => <Shape key={i} position={item} index={i} />}
    </Mapper>
  );
};

export default Shapes;
