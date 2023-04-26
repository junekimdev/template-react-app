import { useContext } from 'react';
import styles from './example.module.scss';
import { ExampleData } from './exampleAdapter';
import ViewPostSingle from './exampleViewPostSingle';
import { ExamplePostType } from './exampleType';

const View = () => {
  const { query } = useContext(ExampleData);
  const dataMapper = (post: ExamplePostType) => <ViewPostSingle key={post.id} post={post} />;

  return <div className={styles.view}>{query.data.map(dataMapper)}</div>;
};

export default View;
