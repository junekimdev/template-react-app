import Image from 'next/image';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import imageSrc404 from '../../public/assets/images/404_broken_robot.png';
import imageSrc500 from '../../public/assets/images/500_faulty_dog.png';
import styles from './errors.module.scss';
import { code } from './errorsStates';

const View = () => {
  const errorCode = useRecoilValue(code);

  return (
    <div className={styles.errorImage}>
      {errorCode === 404 ? (
        <Image src={imageSrc404} alt="404 error image" priority />
      ) : (
        <Image src={imageSrc500} alt="Internal error image" priority />
      )}
      <Link href="http://www.freepik.com" target="_blank" rel="noopener noreferrer">
        <span className={styles.imageLicenseTxt}>Designed by stories / Freepik</span>
      </Link>
    </div>
  );
};

export default View;
