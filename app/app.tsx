import Banner from './components/Banner/Banner';
import CareerSection from './components/CareerSection/CareerSection';
import Header from './components/Header/Header';
import MainSection from './components/MainSection';
import { GameProvider } from './contexts/GameContext';
import { RuneProvider } from './contexts/RuneContext';

const App = () => (
  <GameProvider>
    <RuneProvider>
      <Header />
      <Banner />
      <CareerSection />
      <MainSection />
    </RuneProvider>
  </GameProvider>
);

export default App;
