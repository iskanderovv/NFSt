import avatar1 from '../../images/Polygon 1.png';
import avatar2 from '../../images/Polygon 2.png';
import avatar3 from '../../images/Polygon 3.png';

const Navbar = () => {
  return (
    <div className='container max-w-[1200px] mt-14 mb-11 mx-auto px-3 flex items-center'>
      <a href="#" className='flex gap-2 items-center lg:flex-none md:flex-none sm:flex-1 flex-1'>
        <img src={avatar1} alt="" />
        <img src={avatar2} alt="" />
        <img src={avatar3} alt="" />
      </a>
      <form action="#" className='lg:flex-1 md:flex-1 flex items-center flex-none ms-20'>
        <i className="bi bi-search me-4 text-2xl"></i>
        <input 
            type="text" 
            placeholder='Search...' 
            className='bg-transparent outline-none text-[18px] placeholder-white font-normal text-[#F4F4F4]' />
      </form>
      <ul className='lg:flex md:flex sm:hidden hidden gap-14 font-normal text-[18px] text-[#F4F4F4]'>
        <li><a href="#" className='font-bold'>Explore</a></li>
        <li><a href="#">Trending</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>
    </div>
  )
}

export default Navbar
