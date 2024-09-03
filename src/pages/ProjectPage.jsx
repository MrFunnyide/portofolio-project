import CardProject from "@/components/CardProject";
import projects from "../projects.json";

const ProjectPage = () => {
  return (
    <div className="mt-20 min-h-screen animate__animated animate__fadeInUp animate__faster">
      <div>
        <h5 className="text-3xl font-extrabold text-slate-200">Projects</h5>
      </div>
      <div className="mt-6 flex gap-6 justify-start flex-wrap">
        {Array.isArray(projects) ? (
          projects.map((project) => (
            <CardProject
              title={project.title}
              shortDesc={project.shortDesc}
              key={project.id}
              techStack={project.techStack}
              thumbnail={project.image}
              github={project.link.github}
              publication={project.link.publication}
            />
          ))
        ) : (
          <h5 className="text-xl font-extrabold text-slate-200">No Projects</h5>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
