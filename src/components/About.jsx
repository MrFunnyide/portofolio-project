import imageSelf from "../assets/image/foto.webp";
import Button from "./Button";
import TechStack from "./TechStack";

const About = () => {
  return (
    <>
      <div>
        <h5 className="text-3xl font-extrabold text-slate-200">About</h5>
      </div>
      <div className="flex justify-start md:items-center mt-6 gap-6 max-sm:flex-wrap">
        <img
          alt="aji-bayu-permadi"
          className="w-full h-full md:w-[28%] rounded-md"
          src={imageSelf}
        />
        <div>
          <h5 className="mb-4 text-2xl font-extrabold bg-gradient-to-r from-slate-200 to-slate-500 text-transparent bg-clip-text">
            Aji Bayu Permadi
          </h5>
          <p className="text-justify text-sm">
            Haii, perkenalkan nama saya{" "}
            <strong className="hover:text-slate-500">
              <a href="document/cv.pdf">Aji Bayu Permadi</a>
            </strong>{" "}
            Saya lulusan Teknik Informatika, Universitas Islam Negeri Sultan
            Syarif Kasim Riau, dengan GPA 3.51. Selama Kuliah Saya berfokus pada
            bidang Web Development, Dengan pengalaman dalam Pengembangan Web,
            khususnya dalam memanfaatkan framework Laravel dan Vue.js selama
            masa kuliah, saya memiliki minat yang kuat di bidang Web Development
            dan saat ini sedang memperdalam keterampilan saya sebagai pengembang
            web. Saya antusias untuk menghadapi tantangan baru dan siap memulai
            karier di bidang pengembangan web. Jika Anda tertarik untuk
            berkolaborasi atau memiliki peluang kerja, jangan ragu untuk
            menghubungi saya melalui{" "}
            <strong className="hover:text-slate-500">
              <a href="mailto:ajineo3@gmail.com">email</a>
            </strong>{" "}
            atau pesan langsung di{" "}
            <strong className="hover:text-slate-500">
              <a href="https://www.linkedin.com/in/aji-bayu-permadi-11a5a9214/">
                LinkedIn
              </a>
            </strong>
            . Saya berharap dapat terhubung dengan Anda! Terima kasih
          </p>
          <TechStack />
        </div>
      </div>
    </>
  );
};

export default About;
