import { ReactNode } from 'react';
//import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import Presenter from './mainFramePresenter';
// import { useAppSelector } from '../../controllers';

function Interactor(props: { children?: ReactNode[] | ReactNode }) {
  const { children } = props;
  return <Presenter {...{ children }} />;
}

export default Interactor;
