import classNames from 'classnames';
import { useState, useEffect } from 'react';
import EllipsisGroup from './EllipsisGroup';

import bg1 from '../assets/images/bg-1.png';
import bg2 from '../assets/images/bg-1-2.png';
import bg3 from '../assets/images/bg-1-3.png';

function ProductGroup({ activeEllipsis, onClick, products, activeProduct }) {
  const [isDown, setIsDown] = useState(false);
  const [active, setActive] = useState(false);
  const [startX, setStartX] = useState();
  const [scrollLeft, setScrollLeft] = useState();
  const [slider, setSlider] = useState(null);

  const productsClass = classNames('product-group', {
    'active-scroll': active,
  });

  useEffect(() => {
    setSlider(document.querySelector('.product-group'));
  }, []);

  const srcMap = {
    bg1,
    bg2,
    bg3,
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    let x;

    if (slider.scrollLeft !== 0) {
      x = e.pageX - slider?.offsetLeft + 20;
    } else {
      x = e.pageX - slider?.offsetLeft - 20;
    }
    const move = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - move;
    console.log(slider.scrollLeft);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDown(true);

    setActive(true);
    setStartX(e.pageX - slider?.offsetLeft);
    setScrollLeft(slider?.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDown(false);
    setActive(false);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    setActive(false);
  };

  const renderedProducts = products.map((product) => {
    let activeEllipsisId;
    if (product.id === activeProduct) {
      activeEllipsisId = activeEllipsis;
    } else {
      activeEllipsisId = null;
    }
    return (
      <div className="card" key={product.id}>
        <img src={srcMap[product.image]} alt="Denim Jeans" />
        <div className="card-title">
          <span>{product.name}</span>
        </div>
        <div className="card-footer">
          <span className="card-price">${product.price}</span>
          <EllipsisGroup
            active={activeEllipsisId}
            product={product}
            onClick={onClick}
          />
        </div>
      </div>
    );
  });

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      className={productsClass}
    >
      {renderedProducts}
    </div>
  );
}

export default ProductGroup;
