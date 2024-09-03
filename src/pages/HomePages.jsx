import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import Button from "@/components/Button";

const HomePages = () => {
  return (
    <div className="flex justify-center items-center min-h-screen animate__animated animate__fadeInUp animate__faster">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-200">
          Hi, Nama Saya{" "}
          <span className="bg-gradient-to-r from-slate-200 to-slate-500 text-transparent bg-clip-text">
            Aji Bayu Permadi
          </span>
        </h1>
        <p className="my-4 text-base md:text-xl bg-gradient-to-r from-slate-200 to-slate-400 text-transparent bg-clip-text font-semibold">
          Web Development Enthusiast
        </p>
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
          )}
        />
        <div className="flex justify-center">
          <NavLink to="/about">
            <Button className="bg-gradient-to-r from-slate-200 to-slate-500 hover:to-beigeKnight text-black font-semibold rounded-md translate-x-1">
              Tentang Saya
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomePages;
