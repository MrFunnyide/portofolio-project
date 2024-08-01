import { NavLink } from "react-router-dom";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";

const HomePages = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blackKnight">
          Hi, My Name is,{" "}
          <span className="bg-gradient-to-r from-blackKnight via-blueKnight to-purpleKnight text-transparent bg-clip-text">
            Aji Bayu Permadi
          </span>
        </h1>
        <p className="my-4 font-medium text-xl text-blackKnight">
          Web Development Enthusiast
        </p>
        <DotPattern
          width={10}
          height={10}
          className={cn(
            "[mask-image:radial-gradient(450px_circle_at_center,white,transparent)]",
          )}
        />
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
