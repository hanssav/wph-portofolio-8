export type MapperProps<T> = {
  data: readonly T[] | T[];
  className?: string;
  children: (item: T, index: number) => React.ReactNode;
};

const Mapper = <T,>({ data, className, children }: MapperProps<T>) => {
  const render = () => data.map((item, idx) => children(item, idx));

  if (!className) {
    // Tanpa wrapper
    return <>{render()}</>;
  }

  return <div className={className}>{render()}</div>;
};

export default Mapper;
