export type ImageDataType = {
  title: string;
  src: string;
  className?: string;
};

export type BackgroundImageType = {
  className?: string;
  children?: React.ReactNode;
  imageData: ImageDataType;
};
