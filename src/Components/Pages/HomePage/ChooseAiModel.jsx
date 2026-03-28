import { use } from 'react';
import Cards from './Cards';

const ChooseAiModel = ({ ChooseAiModelData }) => {
  const useData = use(ChooseAiModelData);
  console.log(useData);

  return (
    <section className="containers">
      {/* Title Subtile */}
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-semibold">Choose Your AI Model</h2>
        <p className="text-lg">
          One subscription gives you access to all frontier AI models
        </p>
      </div>

      {/* Card Renders */}
      <div className="py-4 px-2 grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-3">
        {useData.map(item => (
          <Cards key={item.id} itemData={item} />
        ))}
      </div>
    </section>
  );
};

export default ChooseAiModel;
