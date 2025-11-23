import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";
import { Input, InputNumber, Select } from "antd";
import { PlusCircledIcon, TrashIcon } from "@radix-ui/react-icons";

function Edit() {
  const axios = useAxios();
  const { id } = useParams();
  const navigate = useNavigate();
  const [gallery, setGallery] = useState([]);
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const getSingleCar = async (id) => {
    try {
      const res = await axios({ url: `cars/${id}` });
      if (res?.data) {
        setCar(res.data);
        setGallery(res.data.gallery);
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  function handleGallery(url) {
    const result = gallery.filter((el) => el !== url);
    setGallery(result);
  }

  function addImage() {
    const img = prompt("URL kiriting");

    try {
      new URL(img);
      setGallery((prev) => [...prev, img]);
    } catch {
      alert("URL kiritgin ukam!");
    }
  }

  console.log(car);

  useEffect(() => {
    getSingleCar(id);
  }, [id]);

  return (
    car && (
      <div>
        <div className="mx-auto px-5 container">
          <button
            onClick={() => navigate(`/cars/${id}`)}
            className="fixed z-2 right-2 top-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition-colors duration-300"
          >
            ComeBack?
          </button>
          <form className="px-10 flex flex-col gap-6">
            <div className="grid gird-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <label className="font-medium" htmlFor="name">
                  Mashina nomi
                </label>
                <Input name="name" defaultValue={car.name} id="name" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium" htmlFor="pricePerDay">
                  Kunlik ijara narxi ($)
                </label>
                <InputNumber
                  name="pricePerDay"
                  min={1}
                  max={100}
                  defaultValue={car.pricePerDay}
                  id="pricePerDay"
                />
              </div>
            </div>

            <div className="grid gird-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <label className="font-medium" htmlFor="fuel">
                  Yonilg'i turi
                </label>
                <Input name="fuel" defaultValue={car.fuel} id="fuel" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium" htmlFor="fuel">
                  Mashina tortish turi
                </label>
                <Select
                  defaultValue={car.drive}
                  name="drive"
                  options={[
                    { value: "AWD", label: <span>4x4 umumiy tortadi</span> },
                    { value: "FWD", label: <span>2x oldi tortadi</span> },
                    { value: "RWD", label: <span>2x orqa tortadi</span> },
                  ]}
                />
              </div>
            </div>

            <div className="grid gird-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <label className="font-medium" htmlFor="fuel">
                  Uzatmalar qutisi
                </label>
                <Select
                  defaultValue={car.gearbox}
                  name="gearbox"
                  options={[
                    { value: "Manual", label: <span>Ruchnoy</span> },
                    { value: "Automatic", label: <span>Avtomat</span> },
                  ]}
                />
              </div>
            </div>

            <div className="flex gap-4">
              {gallery.map((el, index) => {
                return (
                  <div className="relative overflow-hidden group rounded-md w-20 h-20">
                    <img
                      className="w-full h-full object-center object-cover"
                      src={el}
                      alt={`Rasm ${index + 1}`}
                    />

                    {gallery.length > 2 && (
                      <div
                        onClick={() => handleGallery(el)}
                        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer flex items-center justify-center"
                      >
                        <button>
                          <TrashIcon className="text-white w-6 h-6 cursor-pointer" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
              <button
                type="button"
                onClick={addImage}
                className="border-dashed border-slate-200 cursor-pointer flex items-center justify-center border-2 group w-20 h-20 hover:border-blue-500 hover:text-blue-500"
              >
                <PlusCircledIcon className="w-4 h-4 text-slate-200 group-hover:text-blue-500" />
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default Edit;
