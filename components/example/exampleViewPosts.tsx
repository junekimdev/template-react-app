import styles from './example.module.scss';
import * as mType from './exampleType';
import PostSingle from './exampleViewPostSingle';

const View = ({ data }: { data: mType.Post[] }) => {
  const dataMapper = (post: mType.Post) => <PostSingle key={post.id} post={post} />;

  return <div className={styles.view}>{data.map(dataMapper)}</div>;
};

export default View;
