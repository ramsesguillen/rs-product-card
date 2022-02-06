import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const App = () => {
  return (
    <>
      <ProductCard
        product={{
          id: '1',
          title: 'headPhones',
        }}
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ( { reset, count, increaseBy, maxCount, isMaxCountReached } ) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
