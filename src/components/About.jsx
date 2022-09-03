import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white pt-20 pb-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm a student. I'm currently studying in Jahangirnagar University. My major is Information Technology. I love working with MERN Stack. I've completed over 20 projects. Recently I'm learning blockchain. I've also learned Ethical Hacking.  
        </p>

        <br />

        <p className="text-xl">
          I am able to handle multiple tasks on a daily basis. I use a creative approach to problem solve. I am a dependable person who is great at time management. I am always energetic and eager to learn new skills. I have experience working as part of a team and individually. I am flexible in my working hours, being able to work evenings and weekends. I am always on time for organised events, work-related or otherwise.
        </p>
      </div>
    </div>
  );
};

export default About;