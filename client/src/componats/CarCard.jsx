const CarCard = ({ car }) => {
  return (
    <article className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={car.pictures[0]} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{car.model}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </article>
  );
};
export default CarCard;
