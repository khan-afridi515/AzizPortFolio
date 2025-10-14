import React from 'react'

const Skill = () => {

    const skills = [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "React", level:  85},
        { name: "Tailwind", level: 90},
        { name: "Node.js", level: 65 },
        { name: "Express js", level: 70},
        { name: "Mongo Db", level: 70}
      ];

  return (

    <div className="w-full p-4 py-10 px-16 bg-black">
        <h1 className='text-center text-white text-2xl font-bold'>My Skills</h1>
        <div className='py-8'>
        {skills.map((skill, index) => (
        <div key={index} className="mb-4 md:w-[60%] w-[90%] m-auto">
          <div className="flex justify-between">
            <span className="text-sm font-medium text-white">{skill.name}</span>
            <span className="text-sm text-gray-500">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-pink-500 h-4 rounded-full"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
        </div>
      
    </div>
  );

}

export default Skill
