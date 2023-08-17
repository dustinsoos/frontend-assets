export default function Cards() {
  const cardData = [
    {
      id: 1,
      heading: "Frontend Essentials",
      information:
        "Elevate your frontend development with our site's curated tools. From cheatsheets to color palettes and animations, our resources cater to all levels of experience.",
      img: "/essentials-icon.svg",
    },
    {
      id: 2,
      heading: "Empowering Frontend Developers",
      information:
        "Our mission is to empower frontend developers. With essential resources, we help you achieve excellence in coding, whether it's for HTML, CSS, JavaScript & Libraries.",
      img: "/empower-icon.svg",
    },

    {
      id: 3,
      heading: "Recommend Other Resources",
      information:
        "You're invited to contribute to our resource pool! Your input enhances our community and helps fellow developers access valuable resources. ",
      img: "/recommend-icon.svg",
    },
    {
      id: 4,
      heading: "Cutting-edge Tools",
      information:
        "Stay updated with the latest frontend tech. Access tools, frameworks, and libraries, learning how to leverage them for your projects.",
      img: "/tools-icon.svg",
    },
  ];

  return (
    <>
      <section className="h-screen px-8 md:px-16 lg:px-32 xl:px-64 bg-slate-900 ">
        <div className="grid pt-8  lg:pt-64">
          <h3 className=" text-sky-500 text-3xl font-semibold grid items-end mb-8 md:mb-0 pb-8">
            What do we offer?
          </h3>
          <div className="text-white   md:text-left flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-4 ">
            {cardData.map((data) => (
              <div
                key={data.id}
                className="bg-slate-900 hover:scale-105 border-2 border-slate-800 hover:border-sky-500  p-4 mx-auto bg-gradient-to-r from-slate-900 from-70%  to-slate-800 to-90% rounded-xl"
              >
                <div className="flex gap-3 items-center justify-start">
                  <img src={data.img} alt="card-icons" className="w-10" />
                  <h3 className="text-lg">{data.heading}</h3>
                </div>
                <p className=" text-slate-400 mt-2">{data.information}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr className=" border-sky-500" />
    </>
  );
}