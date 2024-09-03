import { FaBullhorn } from "react-icons/fa6";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

const ServicePage = () => {
  return (
    <div className="min-h-screen flex gap-5 justify-center items-center animate__animated animate__fadeInUp animate__faster">
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-200 to-slate-500 text-transparent bg-clip-text">
        Comming Soon
      </h1>
      <FaBullhorn className="text-3xl md:text-6xl text-slate-500" />
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
};

export default ServicePage;
