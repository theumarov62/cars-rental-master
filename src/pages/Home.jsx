import { useEffect } from "react";
import Header from "../components/header/Header";
import SelectCategory from "../components/home-components/SelectCategory";
import useAxios from "../hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../redux/cars-data-slice";
import Hero from "../components/hero";
import Facts from "../components/facts";
import Footer from "../components/footer";
const Home = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.carsdata);
  const axios = useAxios();

  const getCars = async () => {
    let data = await axios({ url: "cars" });
    dispatch(setData(data.data));
  };
  useEffect(() => {
    getCars();
  }, []);
  console.log(data);

  return (
    <>
      <Header />
      <Hero />
      <SelectCategory />

      <section className="all-cars">
        <div className="mycon grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-[100px] pb-[100px]">
          {data &&
            data?.data.map((car) => (
              <div
                key={car.id}
                className="
    w-[220px] p-4 
    bg-white 
    border border-gray-200 
    rounded-xl 
    shadow-md 
    hover:shadow-lg 
    transition 
    duration-300 
    cursor-pointer
  "
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-[130px] object-cover rounded-lg mb-3"
                />

                <h2 className="text-lg font-semibold text-gray-800">
                  {car.name}
                </h2>

                <p className="text-sm text-gray-600">Drive: {car.drive}</p>
              </div>
            ))}
        </div>
      </section>

      <Facts />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
