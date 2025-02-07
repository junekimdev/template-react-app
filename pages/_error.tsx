import { useSetAtom } from 'jotai';
import { NextPageContext } from 'next';
import { useEffect } from 'react';
import Errors from '../components/errors';
import Meta from '../components/meta';
import * as gState from '../controllers/data/states';

const Error = ({ statusCode }: { statusCode: number }) => {
  const publicUrl = process.env.PUBLIC_URL || 'localhost:3000';
  const setErrorCode = useSetAtom(gState.errorCode);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setErrorCode(statusCode);
  }, [setErrorCode, statusCode]);

  return (
    <>
      <Meta title={`${statusCode} | June Kim`} desc="Error page" url={publicUrl}></Meta>
      <main role="main">
        <Errors />
      </main>
    </>
  );
};

export const config = {
  runtime: 'nodejs', // or "edge"
};

export const getServerSideProps = async ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : (err?.statusCode ?? 404);
  return { props: { statusCode } };
};

export default Error;
