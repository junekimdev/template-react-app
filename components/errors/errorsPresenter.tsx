import Link from 'next/link';
import styles from './errors.module.scss';
import ErrorImage from './errorsViewImage';

const Presenter = () => {
  return (
    <section className={styles.container}>
      <ErrorImage />
      <Link href="/">
        <div className={styles.btnBackToHome}>Back to Home</div>
      </Link>
    </section>
  );
};

export default Presenter;
