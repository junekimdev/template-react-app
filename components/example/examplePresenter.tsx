import { placeholderUrl } from '../../controllers/apiURLs';
import { staticQuery } from '../../controllers/net/staticQuery';
import styles from './example.module.scss';
import { ExamplePost } from './exampleType';
import Posts from './exampleViewPosts';

const Presenter = () => {
  const query = staticQuery<ExamplePost[]>(placeholderUrl);

  let contents;
  switch (query.status) {
    case 'pending':
      contents = <div>Loading...</div>;
      break;
    case 'error':
      contents = <div>Error: {query.error.message}</div>;
      break;
    case 'success':
      contents = <Posts data={query.data} />;
      break;
    default:
      contents = <div></div>;
      break;
  }

  return <section className={styles.container}>{contents}</section>;
};

export default Presenter;
