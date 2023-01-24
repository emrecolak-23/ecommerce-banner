import classNames from 'classnames';

function Elipsis({ baseClass, active, onClick, ellipsis, product }) {
  const ellipsisDiv = classNames(baseClass, {
    'ellipsis-active': active === ellipsis.id,
    'ellipsis-normal': active !== ellipsis.id,
  });

  const ellipsisMain = classNames('ellipsis', {
    'ellipsis-main-active': active === ellipsis.id,
  });

  const handleClick = () => {
    onClick(ellipsis.id, product.id);
  };

  return (
    <div onClick={handleClick} className={ellipsisMain}>
      <div className={ellipsisDiv}></div>
    </div>
  );
}

export default Elipsis;
