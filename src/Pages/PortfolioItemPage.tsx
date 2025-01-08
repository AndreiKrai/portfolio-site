import { useParams } from 'react-router-dom';

const PortfolioItemPage = () => {
  const { id } = useParams();

  const PortfolioItemPage = {
    1: { title: 'Project A', description: 'Description of Project A' },
    2: { title: 'Project B', description: 'Description of Project B' },
    3: { title: 'Project C', description: 'Description of Project C' },
  };

  const details = PortfolioItemPage[id];

  if (!details) {
    return <p>Portfolio item not found</p>;
  }

  return (
    <div className="portfolio-details">
      <h2>{details.title}</h2>
      <p>{details.description}</p>
    </div>
  );
};

export default PortfolioItemPage;
