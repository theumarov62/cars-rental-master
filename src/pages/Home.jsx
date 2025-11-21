import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import SelectCategory from "../components/home-components/SelectCategory";
import useAxios from "../hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../redux/cars-data-slice";
import Hero from "../components/hero";
import Facts from "../components/facts";
import Footer from "../components/footer";
import CarsCard from "../components/home-components/CarsCard/CarsCard";
  
const Home = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.carsdata);
  const axios = useAxios();
  const [type, setType] = useState("all");

  const getCars = async (type) => {
    let data = await axios({
      url: "cars",
      params: type == "all" ? {} : { type },
    });
    dispatch(setData(data.data));
  };

  useEffect(() => {
    getCars(type);
  }, [type]);

  return (
    <>
      <Header />
      <Hero />
      <SelectCategory type={type} setType={setType} />

      <section className="all-cars">
        <div className="mycon grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-[100px] pb-[100px]">
          {data && data?.data.map((car) => <CarsCard car={car} />)}
        </div>
      </section>

      <Facts />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
