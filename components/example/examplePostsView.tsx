import { useContext } from 'react';
import styles from './example.module.scss';
import { ExampleData } from './exampleAdapter';
import PostSingleView from './examplePostSingleView';
import { ExamplePostType } from './exampleType';

const View = () => {
  const { query } = useContext(ExampleData);
  const dataMapper = (post: ExamplePostType) => <PostSingleView key={post.id} post={post} />;

  return <div className={styles.view}>{query.data.map(dataMapper)}</div>;
};

export default View;
