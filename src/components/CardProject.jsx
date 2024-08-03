import {
  FaGithub,
  FaBrave,
  FaLaravel,
  FaReact,
  FaVuejs,
  FaBootstrap,
  FaWordpress,
  FaPython,
  FaHtml5,
  FaJs,
} from 'react-icons/fa6';
import { RiTailwindCssLine } from 'react-icons/ri';

const CardProject = (props) => {
  const { title, shortDesc, techStack, thumbnail, github, publication } = props;
  return (
    <div className="border-[1px] rounded-sm border-slate-500 md:w-[30%] overflow-hidden p-3 hover:scale-105 hover:transition-transform">
      <h4 className="font-extrabold">{title}</h4>
      <p className="text-sm my-2">{shortDesc}</p>
      <div className="text-2xl md:text-xl my-3 flex gap-3">
        {Array.isArray(techStack) ? (
          techStack.map((tech, index) => {
            if (tech === 'Laravel') {
              return (
                <a href="https://laravel.com/" key={index}>
                  <FaLaravel />
                </a>
              );
            }
            if (tech === 'Vue.js') {
              return (
                <a href="https://vuejs.org/" key={index}>
                  <FaVuejs />
                </a>
              );
            }
            if (tech === 'Wordpress') {
              return (
                <a href="https://wordpress.com/" key={index}>
                  <FaWordpress />
                </a>
              );
            }
            if (tech === 'Python') {
              return (
                <a href="https://www.python.org/" key={index}>
                  <FaPython />
                </a>
              );
            }
            if (tech === 'Bootstrap') {
              return (
                <a href="https://getbootstrap.com/" key={index}>
                  <FaBootstrap />
                </a>
              );
            }
            if (tech === 'Html') {
              return (
                <a href="https://en.wikipedia.org/wiki/HTML" key={index}>
                  <FaHtml5 />
                </a>
              );
            }
            if (tech === 'JavaScript') {
              return (
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  key={index}>
                  <FaJs />
                </a>
              );
            }
            if (tech === 'React') {
              return (
                <a href="https://react.dev/" key={index}>
                  <FaReact />
                </a>
              );
            }
            if (tech === 'Tailwind') {
              return (
                <a href="https://tailwindcss.com/" key={index}>
                  <RiTailwindCssLine />
                </a>
              );
            }
          })
        ) : (
          <a className="text-sm">no tech</a>
        )}
      </div>
      <img className="mt-2 rounded-sm" src={thumbnail} alt={title} />
      <div className="text-2xl md:text-xl mt-3 flex gap-3">
        <a href={github}>
          <FaGithub />
        </a>
        <a href={publication}>
          <FaBrave />
        </a>
      </div>
    </div>
  );
};

export default CardProject;
