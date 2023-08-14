export default function Cards() {
  const cardData = [
    {
      id: 1,
      heading: "Frontend Essentials",
      information:
        "Elevate your frontend development with our site's curated tools. From cheatsheets to color palettes and animations, our resources cater to all levels of experience.",
    },
    {
      id: 2,
      heading: "Cutting-edge Tools",
      information:
        "Stay updated with the latest frontend tech. Access tools, frameworks, and libraries, learning how to leverage them for your projects.",
    },
    {
      id: 3,
      heading: "Recommend Other Resources",
      information:
        "You're invited to contribute to our resource pool! We value your unique insights as a frontend developer. Share your favorite tutorials, tools, and articles that have shaped your coding journey. Your input enhances our community and helps fellow developers access valuable resources. Let's build a dynamic hub together, empowering each other with the knowledge needed for coding excellence.",
    },
    {
      id: 4,
      heading: "Empowering Frontend Developers",
      information:
        "Our mission is to empower frontend developers. With essential resources, we help you achieve excellence in coding, whether it's for HTML, CSS, JavaScript & Libraries.",
    },
  ];

  return (
    <>
      <section className="h-screen  px-8 md:px-16 lg:px-32 xl:px-64">
        <div className="text-white  text-center flex flex-col gap-8 ">
          {cardData.map((data) => (
            <div
              key={data.id}
              className="bg-slate-900 hover:scale-105 mt-4 p-4 mx-auto"
            >
              <h3 className="text-xl">{data.heading}</h3>
              <p>{data.information}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
