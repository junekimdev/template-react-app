import { memo } from 'react';
import styles from './example.module.scss';
import { ExamplePost } from './exampleType';

// This uses props to get data from parent
const View = ({ post }: { post: ExamplePost }) => {
  return <p className={styles.view}>{post.title}</p>;
};

export default memo(View);
