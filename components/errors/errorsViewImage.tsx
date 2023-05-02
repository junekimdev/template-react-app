import Image from 'next/image';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import styles from './errors.module.scss';
import { code } from './errorsStates';

const View = () => {
  const errorCode = useRecoilValue(code);

  let ErrorImg: JSX.Element;
  if (errorCode === 404)
    ErrorImg = () => (
      <Image
        src="/assets/images/404_broken_robot.png"
        alt="404 error image"
        width="1024"
        height="1024"
        priority
      />
    );
  if (errorCode >= 500)
    ErrorImg = () => (
      <Image
        src="/assets/images/500_faulty_dog.png"
        alt="Internal error image"
        width="1024"
        height="1024"
        priority
      />
    );

  return (
    <div className={styles.errorImage}>
      <ErrorImg />
      <Link href="http://www.freepik.com" target="_blank" rel="noopener noreferrer">
        <span className={styles.imageLicenseTxt}>Designed by stories / Freepik</span>
      </Link>
    </div>
  );
};

export default View;
