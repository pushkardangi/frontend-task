import { Header, Next, Back } from "../assets";

const Carousel = () => {
  return (
    <div>
      <div className="grid grid-cols-12 mb-5">
        <div className="bg-red-300 flex justify-end items-center">
          <div>
            <img src={Back} className="h-10" alt="back" />
          </div>
        </div>
        <div className="bg-red-400 col-span-10 flex justify-evenly">
          <div>
            <img src={Header} className="h-44 object-cover rounded-mid" alt="back" />
          </div>
          <div>
            <img src={Header} className="h-44 object-cover rounded-mid" alt="back" />
          </div>

        </div>
        <div className="bg-red-300 flex justify-start items-center">
          <div>
            <img src={Next} className="h-10" alt="next" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
