import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import Errors from '../components/errors';
import Meta from '../components/meta';
import { stateErrorCode } from '../controllers/data/states';

const Error404 = () => {
  const publicUrl = process.env.PUBLIC_URL || 'localhost:3000';
  const setErrorCode = useSetAtom(stateErrorCode);

  useEffect(() => {
    setErrorCode(404);
    window.scrollTo(0, 0);
  }, [setErrorCode]);

  return (
    <>
      <Meta title="404 | June Kim" desc="Error page" url={publicUrl}></Meta>
      <main role="main">
        <Errors />
      </main>
    </>
  );
};

export default Error404;
