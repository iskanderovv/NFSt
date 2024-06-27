import img from "../../images/Ellipse 62.png";
import img1 from "../../images/Ellipse 62-1.png";
import img2 from "../../images/Ellipse 62-2.png";
import img3 from "../../images/Ellipse 62-3.png";
import img4 from "../../images/Ellipse 62-4.png";

const LeaderBorad = () => {
  return (
    <div className="bg-[#191919] py-[95px] mx-auto">
      <div className="container max-w-[1200px] mx-auto px-3">
        <h1 className="text-center text-[40px] font-bold tracking-[-0.3%] leading-[40px] mb-[103px] ">
          Leaderboard of the Week
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-auto">
          <div className="flex flex-col items-center">
            <img src={img} alt="" />
            <h5 className="text-[26px] font-medium">Perperzon</h5>
            <p className="font-bold text-[18px] mt-[3px]">
              <i className="bi bi-arrow-down-up"></i> 9.421
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={img1} alt="" />
            <h5 className="text-[26px] font-medium">Perperzon</h5>
            <p className="font-bold text-[18px] mt-[3px]">
              <i className="bi bi-arrow-down-up"></i> 9.421
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={img2} alt="" />
            <h5 className="text-[26px] font-medium">Perperzon</h5>
            <p className="font-bold text-[18px] mt-[3px]">
              <i className="bi bi-arrow-down-up"></i> 9.421
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={img3} alt="" />
            <h5 className="text-[26px] font-medium">Perperzon</h5>
            <p className="font-bold text-[18px] mt-[3px]">
              <i className="bi bi-arrow-down-up"></i> 9.421
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={img4} alt="" />
            <h5 className="text-[26px] font-medium">Perperzon</h5>
            <p className="font-bold text-[18px] mt-[3px]">
              <i className="bi bi-arrow-down-up"></i> 9.421
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBorad;
