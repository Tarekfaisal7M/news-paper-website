import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex bg-slate-500">
      <button className="btn btn-secondary">Breaking News</button>
      <Marquee pauseOnHover={true} speed={150}>
        <Link className="mr-12 text-black" to="/">
          Latest BD News and Bangla News from the most reputable and most
          visited newspapers in Bangladesh.......
        </Link>
        <Link className="mr-12 text-black" to="/">
          Latest BD News and Bangla News from the most reputable and most
          visited newspapers in Bangladesh.......
        </Link>
        <Link className="mr-12 text-black" to="/">
          Latest BD News and Bangla News from the most reputable and most
          visited newspapers in Bangladesh.......
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
