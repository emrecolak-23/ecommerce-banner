import { useState } from 'react';

import BannerImage from './assets/images/bg.png';

import ProductGroup from './components/ProductGroup';

function App() {
  const [activeEllipsis, setActiveEllipsis] = useState(1);
  const [activeProductId, setActiveProductId] = useState(1);

  const products = [
    {
      id: 1,
      name: '365 Signature Hoodie',
      price: 33.95,
      image: 'bg1',
    },
    {
      id: 2,
      name: 'Organic Skinny High Waist Jeans',
      price: 33.95,
      image: 'bg2',
    },
    {
      id: 3,
      name: 'Organic Skinny High Waist Jeans',
      price: 33.95,
      image: 'bg3',
    },
  ];

  const handleActiveEllipsis = (ellipsisId, productId) => {
    setActiveEllipsis(ellipsisId);
    setActiveProductId(productId);
  };

  return (
    <div className="row">
      <div className="column">
        <img src={BannerImage} alt="lifestyle" />
      </div>
      <div className="column">
        <div className="blur"></div>
        <div className="header">
          <div className="header-content">
            <div className="header-title">
              Everyday items, we have something to suit every occasion.
            </div>
            <div className="header-description">
              At suspendisse augue lectus arcu, accumsan ut sit posuere vitae
              sit tincidunt semper eu proin leo gravida cursus.
            </div>
            <span>Shop all everyday items</span>
          </div>
        </div>
        <ProductGroup
          activeEllipsis={activeEllipsis}
          activeProduct={activeProductId}
          onClick={handleActiveEllipsis}
          products={products}
        />
      </div>
    </div>
  );
}

export default App;
