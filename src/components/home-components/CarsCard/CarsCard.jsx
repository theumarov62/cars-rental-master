import { Link } from "react-router-dom";

function CarsCard({ car }) {
  const { image, name, id } = car;
  return (
    <Link
      to={`/cars/${id}`}
      className="
    group bg-white rounded-2xl shadow-md border border-gray-100
    p-4 w-[240px]
    hover:shadow-xl hover:-translate-y-1
    transition-all duration-300
  "
    >
      {(() => {
        const {
          image,
          name,
          pricePerDay,
          type,
          drive,
          fuel,
          gearbox,
          details: { doors, seats, airConditioner },
        } = car;

        return (
          <>
            <div className="relative">
              <img
                src={image}
                className="w-full h-[140px] object-cover rounded-xl"
                alt={name}
              />
              <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-lg shadow-md">
                {type}
              </span>
            </div>

            <h2 className="text-lg font-semibold text-gray-800 mt-3">{name}</h2>

            {/* Details */}
            <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-600">
              <div>
                <span className="font-bold">Seats: </span>
                {seats}
              </div>
              <div>
                <span className="font-bold">Doors: </span>
                {doors}
              </div>
              <div>
                <span className="font-bold">Fuel: </span>
                {fuel}
              </div>
              <div>
                <span className="font-bold">Gearbox: </span>
                {gearbox}
              </div>
              <div className="col-span-2">
                <span className="font-bold">Drive: </span>
                {drive}
              </div>
              {airConditioner && (
                <div className="col-span-2">
                  <span className="font-bold">AC: </span>
                  {airConditioner}
                </div>
              )}
            </div>

            {/* Price + Rent button */}
            <div className="mt-4 flex items-center justify-between">
              <p className="text-lg font-bold text-purple-600">
                ${pricePerDay}/day
              </p>
              <button className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-purple-700 transition">
                Rent
              </button>
            </div>
          </>
        );
      })()}
    </Link>
  );
}

export default CarsCard;
