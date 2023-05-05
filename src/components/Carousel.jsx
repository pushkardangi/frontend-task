import { Player, Man, Back, Next } from "../assets";

const Carousel = () => {
  return (
    <div>
      <div className="mb-5 max-sm:hidden">
        <div className="flex justify-between items-center mx-4">
          <div>
            <img src={Back} className="h-10" alt="back" />
          </div>
          <div>
            <img src={Player} className="h-48 object-cover rounded-mid" alt="back" />
          </div>
          <div className="rounded-mid bg-purple-200">
            <img src={Man} className="h-48 object-cover rounded-mid" alt="back" />
          </div>

          <div>
            <img src={Next} className="h-10" alt="next" />
          </div>

        </div>
       
      </div>
    </div>
  );
};

export default Carousel;
