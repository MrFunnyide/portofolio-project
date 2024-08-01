import imageSelf from "../assets/image/foto.webp";

const AboutPage = () => {
  return (
    <div className="mt-20 min-h-screen animate__animated animate__fadeInUp animate__faster">
      <div>
        <h5 className="text-3xl font-extrabold text-slate-200">About</h5>
      </div>
      <div className="flex justify-start md:items-center mt-6 gap-6 max-sm:flex-wrap">
        <img
          alt="aji-bayu-permadi"
          className="w-full h-full md:w-2/6 rounded-md"
          src={imageSelf}
        />
        <div>
          <h5 className="mb-4 text-4xl font-extrabold bg-gradient-to-r from-slate-200 to-slate-500 text-transparent bg-clip-text">
            Aji Bayu Permadi
          </h5>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            posuere purus varius, finibus dui fringilla, pulvinar mi. Sed
            suscipit ultricies imperdiet. Integer non elit sit amet tortor
            bibendum tempus. Nulla id faucibus felis, vitae aliquet ante. Ut id
            est quis mauris ornare dictum vitae non dui. Nam ut ultrices risus.
            Vestibulum laoreet tellus sed augue efficitur, vel suscipit justo
            rhoncus. Maecenas at libero neque. Mauris enim justo, lacinia ut
            risus vel, accumsan venenatis elit. Donec dictum auctor lectus, eget
            luctus nibh mollis in. Vestibulum sit amet lorem vitae augue
            fermentum vestibulum. Nulla velit erat, efficitur et odio a, dapibus
            blandit ex. Aliquam quis venenatis velit, et cursus justo. Donec
            ullamcorper eros neque, at eleifend mi ultricies eget. Quisque
            vehicula nibh nec tellus lacinia auctor ac non magna. Ut nisl augue,
            suscipit sit amet tortor at, sagittis pretium metus.
          </p>
          <h5 className="mt-4 text-2xl font-extrabold text-slate-200">
            Tech Stack
          </h5>
        </div>
      </div>
      <div>
        <h5 className="mt-6 mb-4 text-3xl font-extrabold text-slate-200">
          Experience
        </h5>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          posuere purus varius, finibus dui fringilla, pulvinar mi. Sed suscipit
          ultricies imperdiet. Integer non elit sit amet tortor bibendum tempus.
          Nulla id faucibus felis, vitae aliquet ante. Ut id est quis mauris
          ornare dictum vitae non dui. Nam ut ultrices risus. Vestibulum laoreet
          tellus sed augue efficitur, vel suscipit justo rhoncus. Maecenas at
          libero neque. Mauris enim justo, lacinia ut risus vel, accumsan
          venenatis elit. Donec dictum auctor lectus, eget luctus nibh mollis
          in. Vestibulum sit amet lorem vitae augue
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
