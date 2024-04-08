import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl text-white font-bold">Login With</h2>
        <button className="btn btn-outline w-full">
          <FcGoogle></FcGoogle>
          login with google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          login with github
        </button>
      </div>
      {/* 2 */}
      <div className="p-4 mb-6">
        <h2 className="text-3xl text-white font-bold mb-4">Find us on</h2>
        <a
          className="p-4 gap-3 flex text-lg items-center border rounded-t-lg"
          href="">
          <FaFacebook />
          Facebook
        </a>
        <a
          className="p-4  gap-3 flex text-lg items-center border rounded-x"
          href="">
          <FaTwitter />
          Twitter
        </a>
        <a
          className="p-4 gap-3 flex text-lg items-center border rounded-b-lg"
          href="">
          <FaInstagramSquare />
          Instagram
        </a>
      </div>
      {/* q-zone */}
      <div className="p-4 bg-slate-400 space-y-6 mb-6">
        <h2 className="text-3xl text-black font-bold">Q - Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
