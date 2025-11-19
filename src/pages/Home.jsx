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
        <div className="mycon">
          {data &&
            data?.data.map((car) => <div key={car.id}> {car.name} </div>)}
        </div>
      </section>

      <Facts />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
