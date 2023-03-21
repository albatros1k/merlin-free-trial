import { MainWrapper } from './common/containers';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

const App = () => {
  return (
    <MainWrapper>
      <Header />
      <Content />
      <Footer />
    </MainWrapper>
  );
};

export default App;
