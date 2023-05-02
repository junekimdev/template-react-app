import Link from 'next/link';
import styles from './errors.module.scss';
import Image from './errorsViewImage';

const Presenter = () => {
  return (
    <section className={styles.container}>
      <Image />
      <Link href="/">
        <div className={styles.btnBackToHome}>Back to Home</div>
      </Link>
    </section>
  );
};

export default Presenter;
