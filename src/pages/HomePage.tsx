import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Clock, BarChart3, CheckCircle } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-20 md:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <h1 className="mb-6 leading-tight">
                Master Anything. <span className="text-accent-400">Forever.</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-primary-100">
                Memoraid uses proven spaced repetition techniques to help you remember what you learn — for the long term.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup" className="btn bg-black text-primary-50 hover:bg-dark-800 focus:ring-black text-lg px-8 py-3">
                  Start Learning
                </Link>
                <Link to="/features" className="btn bg-black text-primary-50 hover:bg-dark-800 focus:ring-black text-lg px-8 py-3">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-fade-in">
              <img 
                src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg" 
                alt="Student studying with flashcards" 
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">The Problem with Traditional Learning</h2>
            <p className="text-lg text-gray-600">
              Traditional learning methods lead to the "forgetting curve" — where up to 80% of what you learn is forgotten within a week.
              Cramming might help you pass a test, but it won't help you retain knowledge for the long term.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 animate-slide-up">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-6">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Information Overload</h3>
              <p className="text-gray-600">
                Our brains aren't designed to memorize large amounts of information in one sitting. Yet traditional study methods encourage cramming.
              </p>
            </div>
            
            <div className="card p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Inefficient Review</h3>
              <p className="text-gray-600">
                Reviewing all materials equally wastes time on what you already know well, while neglecting what you struggle with.
              </p>
            </div>
            
            <div className="card p-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-6">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">No Feedback Loop</h3>
              <p className="text-gray-600">
                Without tracking what you're learning and how well you remember it, it's hard to know where to focus your efforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Our Solution: Smart Spaced Repetition</h2>
            <p className="text-lg text-gray-600">
              Memoraid uses an advanced algorithm that schedules reviews at the optimal time — just before you're about to forget. 
              This strengthens memory recall and makes learning more efficient.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <img 
                src="https://images.pexels.com/photos/3059748/pexels-photo-3059748.jpeg" 
                alt="Memoraid App Interface" 
                className="rounded-xl shadow-xl w-full"
              />
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-4 animate-slide-up">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
                  <p className="text-gray-600">
                    Our algorithm adapts to your performance, scheduling reviews at the optimal time to maximize retention.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
                  <p className="text-gray-600">
                    Focus more time on difficult cards and less on those you already know well. Your study time becomes more efficient.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Performance Analytics</h3>
                  <p className="text-gray-600">
                    Track your progress with detailed statistics. See your improvement over time and identify areas that need more attention.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Multi-Device Sync</h3>
                  <p className="text-gray-600">
                    Study anywhere, anytime. Your progress syncs across all your devices, so you can learn on the go.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Ready to Remember Everything You Learn?</h2>
            <p className="text-xl mb-8 text-dark-900">
              Join thousands of students, professionals, and lifelong learners who are using Memoraid to learn more effectively.
            </p>
            <Link 
              to="/signup" 
              className="btn bg-black text-primary-50 hover:bg-dark-800 focus:ring-black text-lg px-8 py-3 inline-flex items-center"
            >
              Get Started For Free <ArrowRight className="ml-2 text-primary-50" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;