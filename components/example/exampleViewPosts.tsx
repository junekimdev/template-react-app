import styles from './example.module.scss';
import { ExamplePost } from './exampleType';
import PostSingle from './exampleViewPostSingle';

const View = ({ data }: { data: ExamplePost[] }) => {
  const dataMapper = (post: ExamplePost) => <PostSingle key={post.id} post={post} />;

  return <div className={styles.view}>{data.map(dataMapper)}</div>;
};

export default View;
