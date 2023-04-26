import { memo, useContext } from 'react';
import styles from './example.module.scss';
import { ExamplePostPropType } from './exampleType';

// This uses props to get data from parent
const View = (props: ExamplePostPropType) => {
  const { post } = props;
  return <p className={styles.view}>{post.title}</p>;
};

export default memo(View);
