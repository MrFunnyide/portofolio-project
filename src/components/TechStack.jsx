import {
  FaGithub,
  FaLaravel,
  FaReact,
  FaVuejs,
  FaBootstrap,
  FaHtml5,
  FaJs,
  FaCss3,
} from "react-icons/fa6";
import { RiTailwindCssLine, RiUbuntuLine } from "react-icons/ri";

const TechStack = () => {
  return (
    <>
      <h5 className="mt-4 text-2xl font-extrabold text-slate-200">
        Tech Stack
      </h5>
      <div className="text-2xl md:text-3xl mt-3 flex gap-5 flex-wrap">
        <a href="https://laravel.com/">
          <FaLaravel />
        </a>
        <a href="https://vuejs.org/">
          <FaVuejs />
        </a>
        <a href="https://getbootstrap.com/">
          <FaBootstrap />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
          <FaHtml5 />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
          <FaJs />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
          <FaCss3 />
        </a>
        <a href="https://react.dev/">
          <FaReact />
        </a>
        <a href="https://tailwindcss.com/">
          <RiTailwindCssLine />
        </a>
        <a href="https://github.com/">
          <FaGithub />
        </a>
        <a href="https://ubuntu.com/">
          <RiUbuntuLine />
        </a>
      </div>
    </>
  );
};

export default TechStack;
