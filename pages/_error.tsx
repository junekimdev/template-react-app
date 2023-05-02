import { NextPageContext } from 'next';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import Errors from '../components/errors';
import { code } from '../components/errors/errorsStates';
import MainFrame from '../components/mainFrame';
import Meta from '../components/meta';

type ErrorCodeType = { statusCode: number };

const Error = ({ statusCode }: ErrorCodeType) => {
  const publicUrl = process.env.PUBLIC_URL || 'localhost:3000';
  const setErrorCode = useSetRecoilState(code);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setErrorCode(statusCode);
  }, [statusCode]);

  return (
    <>
      <Meta title={`${statusCode} | June Kim`} desc="Error page" url={publicUrl}></Meta>
      <MainFrame>
        <Errors />
      </MainFrame>
    </>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
