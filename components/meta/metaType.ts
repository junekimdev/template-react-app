import { ReactNode } from 'react';

export type Props = {
  title: string;
  desc: string;
  url: string;
  image?: string;
  imageWidth?: string;
  imageHeight?: string;
  children?: ReactNode[] | ReactNode | any;
};
