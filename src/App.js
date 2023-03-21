import { Fragment } from 'react';
import { MainWrapper } from './common/containers';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

const App = () => {
  return (
    <Fragment>
      <MainWrapper>
        <Header />
        <Content />
      </MainWrapper>
      <Footer />
    </Fragment>
  );
};

export default App;
