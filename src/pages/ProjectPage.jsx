import CardProject from '@/components/CardProject';
const ProjectPage = () => {
  return (
    <div className="mt-20 min-h-screen animate__animated animate__fadeInUp animate__faster">
      <div>
        <h5 className="text-3xl font-extrabold text-slate-200">Projects</h5>
      </div>
      <div className="mt-6 flex gap-2 justify-start">
        <CardProject
          title="Test Project"
          shortDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        posuere purus varius, finibus dui fringilla"
          techStack="['aji', 'bayu']"
          thumbnail="project/chatbot.webp"
          Github="https://google.com"
          Publication="https://google.com"
        />
      </div>
    </div>
  );
};

export default ProjectPage;
