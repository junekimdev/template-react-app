import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import Errors from '../components/errors';
import { code } from '../components/errors/errorsStates';
import MainFrame from '../components/mainFrame';
import Meta from '../components/meta';

const Error404 = () => {
  const publicUrl = process.env.PUBLIC_URL || 'localhost:3000';
  const setErrorCode = useSetRecoilState(code);

  useEffect(() => {
    setErrorCode(404);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta title="404 | June Kim" desc="Error page" url={publicUrl}></Meta>
      <MainFrame>
        <Errors />
      </MainFrame>
    </>
  );
};

export default Error404;
