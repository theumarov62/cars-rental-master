import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

const CarsDetail = () => {
  const axios = useAxios();
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const getSingleCar = async (id) => {
    try {
      const res = await axios({ url: `cars/${id}` });
      if (res?.data) {
        setCar(res.data);
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  console.log(car);

  useEffect(() => {
    getSingleCar(id);
  }, [id]);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center mt-[240px]">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6 animate-pulse">
          Loading . . .
        </h2>

        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  if (!car) return <h2>Mashinchalar yo'q </h2>;

  return (
    <div className="max-w-lg mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200">
      <Link
        to="/"
        className="absolute top-6 left-6 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition-colors duration-300"
      >
        ComeBack?
      </Link>

      <div className="w-full h-64 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">{car.name}</h2>
        <p className="text-gray-700">
          <span className="font-semibold">Type:</span> {car.type}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Drive:</span> {car.drive}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Fuel:</span> {car.details.fuel}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Gearbox:</span> {car.details.gearbox}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Doors:</span> {car.details.doors}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Seats:</span> {car.details.seats}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Air Conditioner:</span>{" "}
          {car.details.airConditioner}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Price per Day:</span> $
          {car.pricePerDay}
        </p>

        <div className="flex flex-wrap gap-2">
          {car.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-gray-800">Equipment:</h3>
          <div className="flex gap-4 flex-wrap">
            {car.equipment.safety.map((item, idx) => (
              <span
                key={idx}
                className="bg-red-100 text-red-800 px-2 py-1 rounded"
              >
                {item}
              </span>
            ))}
            {car.equipment.comfort.map((item, idx) => (
              <span
                key={idx}
                className="bg-green-100 text-green-800 px-2 py-1 rounded"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-4">
          {car.gallery.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${car.name} ${idx}`}
              className="w-full h-24 object-cover rounded"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarsDetail;
