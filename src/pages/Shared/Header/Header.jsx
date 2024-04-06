import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto mb-5" src={logo} alt="" />
      <p className="mb-4">Journalism Without Fear or Favour</p>
      <p className="text-xl text-zinc-500 ">
        {moment().format("dddd, MMMM D, YYYY")}
      </p>
    </div>
  );
};

export default Header;
<h2 className="text-3xl">this is header</h2>;
