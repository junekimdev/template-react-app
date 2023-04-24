import { useState } from 'react';
import { staticQuery } from '../../controllers/net/staticQuery';
import { ExampleData } from './exampleAdapter';
import Presenter from './examplePresenter';
import { ExamplePostType, ExampleProviderType } from './exampleType';

const Interactor = () => {
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts');

  const providerValue: ExampleProviderType = { query: staticQuery<ExamplePostType[]>(url) };

  return (
    <ExampleData.Provider value={providerValue}>
      <Presenter />
    </ExampleData.Provider>
  );
};

export default Interactor;
