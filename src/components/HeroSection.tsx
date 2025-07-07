import React from 'react';
import { MapPin, Calendar, GraduationCap, Briefcase } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-bold text-[#ccd1d1] bubble-font">
                TARUN
                <br />
                SUTHAR
              </h1>
              <div className="flex items-center space-x-4 text-blue-400">
                <div className="w-12 h-px bg-blue-400"></div>
                <span className="text-lg font-medium">Full Stack Developer</span>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-[#ccd1d1]">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span>Born: 03/01/2003</span>
              </div>
              <div className="flex items-center space-x-3 text-[#ccd1d1]">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Bikaner, Rajasthan</span>
              </div>
              <div className="flex items-center space-x-3 text-[#ccd1d1]">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                <span>BCA Graduate</span>
              </div>
              <div className="flex items-center space-x-3 text-[#ccd1d1]">
                <Briefcase className="w-5 h-5 text-blue-400" />
                <span>Linux World Intern</span>
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-4">
              <p className="text-[#ccd1d1] text-lg leading-relaxed">
                I'm a passionate and curious individual who loves creating, building, and solving. 
                With a drive for continuous learning and a knack for turning ideas into meaningful work, 
                I bring creativity and adaptability to everything I do.
              </p>
              <p className="text-[#ccd1d1] text-lg leading-relaxed">
                Currently, I'm interning at Linux World, where I'm gaining hands-on experience and 
                sharpening my skills in a dynamic tech environment. I'm especially drawn to the arts—music 
                keeps me inspired, and photography allows me to capture the beauty in everyday moments.
              </p>
              <p className="text-[#ccd1d1] text-lg leading-relaxed">
                Whether I'm coding, collaborating, or exploring new interests, I'm fueled by curiosity and purpose.
              </p>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 animate-pulse-slow">
                <div className="w-full h-full rounded-full bg-[#141a24] flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-6xl font-bold text-[#ccd1d1]">
                    TS
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-bounce delay-100"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-bounce delay-300"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-green-400 rounded-full animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;