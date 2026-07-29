import styles from './example.module.scss';
import * as mType from './exampleType';
import PostSingle from './exampleViewPostSingle';

const dataMapper = (post: mType.Post) => <PostSingle key={post.id} post={post} />;

const View = ({ data }: { data: mType.Post[] }) => {
  return <div className={styles.view}>{data.map(dataMapper)}</div>;
};

export default View;
