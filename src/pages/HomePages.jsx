import { NavLink } from "react-router-dom";
import ShimmerButton from "@/components/magicui/shimmer-button";

const HomePages = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blackKnight">
          Hi, My Name is,{" "}
          <span className="bg-gradient-to-r from-blueKnight via-purpleKnight to-blackKnight text-transparent bg-clip-text">
            Aji Bayu Permadi
          </span>
        </h1>
        <p className="my-4 font-medium text-xl text-blackKnight">
          Web Development Enthusiast
        </p>
        <div className="flex justify-center">
          <NavLink to="/about">
            <ShimmerButton
              borderRadius="18px"
              shimmerSize="0.08em"
              shimmerColor="#E2E2B6"
              background="#021526"
            >
              Learn About Me
            </ShimmerButton>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomePages;
