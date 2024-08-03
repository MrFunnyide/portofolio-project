const Footer = () => {
  return (
    <footer className="flex flex-col p-10 mt-8 border-t-[1px] border-white items-center border-opacity-10">
      <div className="text-center mt-3">
        <h5 className="text-sm font-semibold mb-2">Contact Me</h5>
        <div className="flex text-sm gap-5 flex-wrap">
          <p>
            <a href="https://www.linkedin.com/in/aji-bayu-permadi-11a5a9214/">
              LinkedIn
            </a>
          </p>
          <p>
            <a href="mailto:ajineo3@gmail.com">Email</a>
          </p>
          <p>
            <a href="https://github.com/MrFunnyide">Github</a>
          </p>
          <p>
            <a href="https://www.instagram.com/ajibayuper/">Instagram</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
