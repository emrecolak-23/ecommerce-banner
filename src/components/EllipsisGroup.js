import Ellipsis from './Ellipsis';

function EllipsisGroup({ active, onClick, product }) {
  const ellipsises = [
    {
      color: 'ellipsis-blue',
      id: 1,
    },
    {
      color: 'ellipsis-orchid',
      id: 2,
    },
    {
      color: 'ellipsis-purple',
      id: 3,
    },
    {
      color: 'ellipsis-green',
      id: 4,
    },
  ];
  const renderedEllipsises = ellipsises.map((ellipsis) => {
    return (
      <Ellipsis
        baseClass={ellipsis.color}
        key={ellipsis.id}
        active={active}
        onClick={onClick}
        ellipsis={ellipsis}
        product={product}
      />
    );
  });

  return <div className="elipsis-group">{renderedEllipsises}</div>;
}

export default EllipsisGroup;
