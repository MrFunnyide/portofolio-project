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

const CardProject = (props) => {
  const { title, shortDesc, techStack, thumbnail, Github, Publication } = props;
  return (
    <div className="border-[1px] rounded-sm border-slate-500 md:w-[30%] overflow-hidden p-3">
      <h4 className="font-extrabold">{title}</h4>
      <p className="text-sm my-2">{shortDesc}</p>
      <div className="text-sm my-3 flex gap-3">
        {Array.isArray(techStack) ? (
          techStack.map((tech, index) => <a key={index}>{tech}</a>)
        ) : (
          <a>no tech</a>
        )}
      </div>
      <img className="mt-2 rounded-sm" src={thumbnail} alt={title} />
      <div className="text-2xl mt-3 flex gap-3">
        <a href={Github}>
          <FaGithub />
        </a>
        <a href={Publication}>
          <FaBrave />
        </a>
      </div>
    </div>
  );
};

export default CardProject;
