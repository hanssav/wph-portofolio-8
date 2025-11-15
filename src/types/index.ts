type SectionData = {
  title: string;
  subTitle: string;
  desc: string;
};

type BaseComponent = {
  children: React.ReactNode;
  className?: string;
};

export type { SectionData, BaseComponent };
