import React from "react";

const About = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#E3F2FD] to-[#FFFFFF] flex flex-col items-center min-h-screen py-16 px-6 md:px-20 lg:px-40">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1
          className="text-4xl font-bold"
          style={{ color: "#1565C0", fontFamily: "Lora" }}
        >
          About Us
        </h1>
        <p className="text-xl text-[#000000] mt-4 font-thin font-serif">
          Welcome to <strong>ReadSphere</strong>, your one-stop destination for exploring, discovering, and purchasing your favorite eBooks. 
          We are dedicated to connecting readers with a world of knowledge and stories.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="mb-12 text-center max-w-2xl">
        <h2 className="text-2xl font-semibold" style={{ color: "#1565C0" }}>
          Our Mission & Vision
        </h2>
        <p className="text-lg text-[#000000] mt-2 font-serif">
          Our mission is to make literature accessible, affordable, and enjoyable for readers worldwide. 
          Our vision is to empower readers with a seamless platform that blends technology and storytelling.
        </p>
      </div>

      {/* Meet Our Team Section */}
      <div className="mb-12 text-center max-w-2xl">
        <h2 className="text-2xl font-semibold" style={{ color: "#1565C0" }}>
          Meet Our Team
        </h2>
        <p className="text-lg text-[#000000] mt-2 font-serif">
          Our passionate team of book enthusiasts and tech experts is committed to curating an exceptional reading experience.
          Together, we ensure you have access to a diverse collection of eBooks, from timeless classics to modern bestsellers.
        </p>

        {/* Team Members */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
          <div className="flex flex-col items-center bg-[#E1F5FE] shadow-lg p-6 rounded-lg">
            <h3 className="text-lg font-semibold">Emily Carter</h3>
            <p className="text-center mt-2">Founder & CEO</p>
          </div>
          <div className="flex flex-col items-center bg-[#E1F5FE] shadow-lg p-6 rounded-lg">
            <h3 className="text-lg font-semibold">James Williams</h3>
            <p className="text-center mt-2">Chief Technology Officer</p>
          </div>
          <div className="flex flex-col items-center bg-[#E1F5FE] shadow-lg p-6 rounded-lg">
            <h3 className="text-lg font-semibold">Sophia Martinez</h3>
            <p className="text-center mt-2">Content Manager</p>
          </div>
        </div>
      </div>

      {/* eBook Library Section */}
      <div className="mb-12 text-center max-w-2xl">
        <h2 className="text-2xl font-semibold" style={{ color: "#1565C0" }}>
          Explore Our eBook Library
        </h2>
        <p className="text-lg text-[#000000] mt-2 font-serif">
          Dive into a wide selection of genres, including fiction, self-help, science, and more. 
          Enjoy reading anytime, anywhere with our user-friendly platform.
        </p>
        <div className="flex justify-center mt-4">
          <img
            src="/images/ebook-library.jpg"
            alt="eBook Library"
            className="w-60 h-60 mt-4 rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-12 text-center max-w-2xl">
        <h2 className="text-2xl font-semibold" style={{ color: "#1565C0" }}>
          Our Services
        </h2>
        <ul className="list-disc pl-8 text-lg text-[#000000] mt-4 font-serif">
          <li>Wide range of eBooks available for purchase</li>
          <li>Personalized recommendations based on your interests</li>
          <li>Instant downloads for all purchases</li>
          <li>Exclusive member discounts and offers</li>
        </ul>
      </div>

      {/* Testimonials Section */}
      <div className="mb-12 text-center max-w-2xl">
        <h2 className="text-2xl font-semibold" style={{ color: "#1565C0" }}>
          What Our Readers Say
        </h2>
        <p className="text-lg text-[#000000] mt-4 font-serif">
          "ReadSphere has revolutionized the way I enjoy books. 
          It's fast, easy, and offers an incredible collection!" - Sarah L.
          <br />
          "I found my favorite eBooks at amazing prices. 
          Highly recommended!" - Michael K.
        </p>
      </div>
    </div>
  );
};

export default About;
