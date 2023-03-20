import { Fragment } from 'react';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Content />
      <Footer />
    </Fragment>
  );
};

export default App;
