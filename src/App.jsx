import ChooseAiModel from './Components/Pages/HomePage/ChooseAiModel';
import Footer from './Components/Pages/HomePage/Footer';
import Hero from './Components/Pages/HomePage/Hero';
import Nav from './Components/Pages/HomePage/Nav';

const dataAiModel = async () => {
  const res = await fetch('Data.json');
  return res.json();
};

const passData = dataAiModel();

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <ChooseAiModel ChooseAiModelData={passData} />
      <Footer />
    </div>
  );
};

export default App;
