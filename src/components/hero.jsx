import { BsFacebook, BsTwitter, BsInstagram, BsPinterest } from 'react-icons/bs';
import Heropic from '../assets/picture.jpg';

const Hero = () => {
  return (
    <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
      <div className="lg:w-1/3 ssm:w-fit">
        <p className="text-4xl mb-5 text-slate-300">We're</p>
        <h1 className="text-6xl">DEVELOPER</h1>
        <hr />
        <p className="mt-10 text-xl text-slate-300 font-sans">
          In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without revealing the readable content.
        </p>
      </div>
      <div className="w-1/3 items-center ssm:w-fit">
        <img 
          src={Heropic} 
          alt="Hero Image" 
          width={250} 
          height={250} 
          className="rounded-full w-full border-8 border-white" 
        />
      </div>
      <div>
        <p className="text-lg font-bold">About Me</p>
        <p className="text-lg">
          Let's build quality in programming and design with our services.
        </p>
        <button className="bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white">
          Show More..
        </button>
        <div className="flex mt-5 space-x-4 cursor-pointer">
          <SocialIcon icon={BsFacebook} />
          <SocialIcon icon={BsTwitter} />
          <SocialIcon icon={BsInstagram} />
          <SocialIcon icon={BsPinterest} />
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ icon: Icon }) => {
  return (
    <Icon size={40} className="border-4 hover:border-indigo-800 rounded-full" />
  );
};

export default Hero;