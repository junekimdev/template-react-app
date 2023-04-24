import { useContext } from 'react';
import styles from './example.module.scss';
import { ExampleData } from './exampleAdapter';
import PostsView from './examplePostsView';

const Presenter = () => {
  const { query } = useContext(ExampleData);

  let contents;
  if (query.isLoading) {
    contents = <div>Loading...</div>;
  } else if (query.isError) {
    contents = <div>Error: {query.error.message}</div>;
  } else {
    contents = <PostsView />;
  }

  return <section className={styles.container}>{contents}</section>;
};

export default Presenter;
