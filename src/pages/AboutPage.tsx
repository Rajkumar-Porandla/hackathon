import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Raj Kumar Porandla',
      role: 'Developer',
      bio: 'Raj Kumar Porandla is the sole developer and participant for this hackathon project.',
      image: 'developer.png',
      social: {
        twitter: '',
        linkedin: '',
        github: '',
      },
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="bg-primary-500 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Our Mission</h1>
            <p className="text-xl text-black leading-relaxed">
              Memoraid exists to transform how we learn and remember. 
              We believe that with the right tools, anyone can master any subject and retain 
              knowledge for a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            
            <div className="mb-12 text-center">
              <p className="text-gray-700 text-lg mb-4">
                This project was built as part of the CodeCircuit Hackathon. The challenge was to create a fully functional, visually appealing web app from scratch in a short time frame.<br /><br />
                The idea for Memoraid came from my own experience as a student, struggling to retain information for the long term. I wanted to build a tool that not only helps with memorization but also makes the learning process enjoyable and efficient. Inspired by vintage aesthetics and modern UX, I designed Memoraid to be both elegant and highly usable.<br /><br />
                Participating in this hackathon pushed me to blend creativity with technical skills, and I am proud to present this project as a testament to what can be achieved with focus and passion.<br /><br />

              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center">
              <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div>
                  <h4 className="text-xl font-medium mb-2 text-primary-600">Education for All</h4>
                  <p className="text-gray-600">
                    We believe everyone deserves access to effective learning tools, regardless of background.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2 text-primary-600">Science-Backed</h4>
                  <p className="text-gray-600">
                    Our methods are founded on cognitive science and proven learning techniques.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2 text-primary-600">User-Centered</h4>
                  <p className="text-gray-600">
                    We design with real learners in mind, prioritizing simplicity and effectiveness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          
          <div className="flex justify-center items-center min-h-[400px]">
            {teamMembers.map((member, index) => (
              <div key={index} className="card overflow-hidden animate-slide-up max-w-xs w-full flex flex-col items-center p-0" style={{ animationDelay: `${index * 0.1}s` }}>
{/*                 <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full aspect-square object-cover"
                /> */}
                <div className="p-6 w-full text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Twitter size={18} />
                    </a>
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-700 transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href={member.social.github} className="text-gray-400 hover:text-gray-700 transition-colors">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're always looking for passionate people to join our team. If you're excited about 
              transforming education and building innovative learning tools, we'd love to hear from you.
            </p>
{/*             <a href="/contact" className="btn-primary py-3 px-8 text-lg">
              View Open Positions
            </a> */}
            <Link to="/contact" className="btn-primary py-3 px-8 text-lg">
            View Open Positions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
