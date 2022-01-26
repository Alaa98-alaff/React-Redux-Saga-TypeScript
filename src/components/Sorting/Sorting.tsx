import "./Sorting.scss";

const Sorting: React.FC = () => {
  return (
    <div className="sorting-container">
      <p className="sorting-container__title">Sorting</p>
      <div className="sorting-types">
        <div className="sorting-types__type">
          <div className="checkcirle"></div>
          <div className="type-title">Price low to high</div>
        </div>

        <div className="sorting-types__type">
          <div className="checkcirle"></div>
          <div className="type-title">Price high to low</div>
        </div>

        <div className="sorting-types__type">
          <div className="checkcirle"></div>
          <div className="type-title">New to old</div>
        </div>

        <div className="sorting-types__type">
          <div className="checkcirle"></div>
          <div className="type-title">Old to new</div>
        </div>
      </div>
    </div>
  );
};

export default Sorting;