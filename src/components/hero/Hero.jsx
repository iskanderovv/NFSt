import heroImg from "../../images/hero.png";

const Hero = () => {
  return (
    <div className="container max-w-[1200px] mx-auto px-3 gap-2 grid grid-cols-1 lg:gird-cols-2 md:grid-cols-1 sm:grid-cols-1 items-center lg:mb-60 md:mb-30 sm:mb-16 mb-10">
      <div>
        <strong className="text-[#F4F4F4] font-normal text-xs uppercase tracking-[3px]">WEB 3 NON-FUNGIBLE TOKENS</strong>
        <h1 className="font-nunito text-[60px] font-medium leading-[84px] tracking-[-0.3%] ">Unlock Unique Digital Ownership with NFTs</h1>
        <p className="text-[#F4F4F4] max-w-[583px] text-2xl leading-[42px] font-normal mb-14 ">Experience the Revolutionary World of Non-Fungible Tokens on Our Exclusive NFT Marketplace</p>
        <button 
          className="bg-gradient-to-r from-[#FF56BB] via-[6.99%]  to-[#FF8F77] via-[119.86%] font-bold flex gap-4 py-[18px] px-14 rounded-[20px] ">
          <i className="bi bi-wallet2"></i> 
          Connect Wallet
          </button>
      </div>
      <img src={heroImg} className="max-w-[631px] h-auto" alt="" />
    </div>
  );
};

export default Hero;
