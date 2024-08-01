const CardProject = (props) => {
  const { title, shortDesc, techStack, thumbnail } = props;
  return (
    <div className="w-[30%] p-3 border-slate-200 border-[1px] border-opacity-50 rounded-sm ">
      <h5 className="font-extrabold">{title}</h5>
      <p>{shortDesc}</p>
      <p className="font-extrabold">{techStack}</p>
      <img src={thumbnail} alt={title} />
    </div>
  );
};

export default CardProject;
