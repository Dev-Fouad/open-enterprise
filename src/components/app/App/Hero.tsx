import illustration from "../../../assets/illustration.png";
function Hero() {
  return (
    <div className="flex items-center px-10 py-[20px]">

      <div>   
        <h2>A new model for open collaboration</h2>
        <p>
          Run an organization where members get rewarded for their contributions
          with fractional ownership.
        </p>
        <button className="bg-[#71A894] mt-[30px] px-[20px] py-[20px] rounded-[8px] text-[white] text-[18px] font-bold leading-[24px]">Request early access</button>
      </div>

      <div className="border-2">
        <img src={illustration} alt="" />
      </div>
      

    </div>
  );
}

export default Hero;
