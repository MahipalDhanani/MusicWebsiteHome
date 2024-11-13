import React from 'react';
import { HOC } from '../Hoc/HOC';
import { GiGuitar, GiPianoKeys } from 'react-icons/gi';
import { FaMicrophoneAlt } from 'react-icons/fa';
import { MdMusicNote } from 'react-icons/md'; 
import { GiSoundWaves } from 'react-icons/gi'; 

function Courses() {
  const courses = [
    { icon: <FaMicrophoneAlt />, title: "VOCAL", description: "Enhance your singing skills with professional vocal coaching." },
    { icon: "/Images/harmonium-svgrepo-com.svg", title: "HARMONIYUM", description: "Learn the basics of playing the Harmonium and musical techniques." },
    { icon: <GiPianoKeys />, title: "KEYBOARD", description: "Learn keyboard skills and music theory for beginners to advanced levels." },
    { icon: "/Images/tablas-svgrepo-com.svg", title: "TABLA", description: "Master the art of playing Tabla with rhythm and beats." },
    { icon: <GiGuitar />, title: "GUITAR", description: "Learn to play acoustic and electric guitar with ease." },
    { icon: <GiSoundWaves />, title: "OCTAPAD", description: "Learn music production techniques using Aouctoped software." }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-center text-3xl md:text-4xl mb-10">Music Instrument Classes</h2>
        
        {/* Course List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="flex items-center justify-center mb-4 text-4xl text-[#fcd462]">
                {typeof course.icon === 'string' ? (
                  <img src={course.icon} alt={course.title} className="w-[36px] h-[36px]" />
                ) : (
                  course.icon
                )}
              </div>
              <h3 className="text-2xl font-semibold text-center text-gray-700 mb-4">{course.title}</h3>
              <p className="text-center text-gray-600">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HOC(Courses);
