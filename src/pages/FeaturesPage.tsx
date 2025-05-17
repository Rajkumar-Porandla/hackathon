import React from 'react';
import { Brain, BarChart3, Clock, RefreshCw, Tags, Laptop, Calendar, User } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="bg-primary-500 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Features That Make Learning Stick</h1>
            <p className="text-xl text-black">
              Memoraid combines proven memory science with modern technology to help you learn faster and remember longer.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Main Features</h2>
            <p className="text-lg text-gray-600">
              Our app is designed with one goal in mind: to help you remember what you learn, forever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Smart Flashcards */}
            <div className="card p-8 flex flex-col h-full animate-slide-up">
              <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-6">
                <Brain size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Smart Flashcard Creation</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Create rich flashcards with text, images, and formatting. Group related cards with tags and organize your knowledge in a way that makes sense to you.
              </p>
              <img 
                src="https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg" 
                alt="Smart Flashcard Creation" 
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>

            {/* Spaced Repetition */}
            <div className="card p-8 flex flex-col h-full animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-6">
                <RefreshCw size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Spaced Repetition Engine</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Our scientifically-proven algorithm schedules reviews at the optimal time to strengthen your memory. Each card adapts to your performance, giving you more practice with difficult items.
              </p>
              <img 
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg" 
                alt="Spaced Repetition Engine" 
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>

            {/* Personalized Review */}
            <div className="card p-8 flex flex-col h-full animate-slide-up">
              <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-6">
                <Calendar size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Personalized Review Scheduling</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                See your upcoming review schedule and plan your study sessions. Our algorithm optimizes the intervals between reviews based on your performance and learning goals.
              </p>
              <img 
                src="https://images.pexels.com/photos/5797913/pexels-photo-5797913.jpeg" 
                alt="Personalized Review Scheduling" 
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>

            {/* Performance Stats */}
            <div className="card p-8 flex flex-col h-full animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-6">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Visual Performance Stats</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Track your progress with detailed analytics. See your daily study streak, review accuracy, and long-term retention rates. Identify patterns and continuously improve your learning process.
              </p>
              <img 
                src="https://images.pexels.com/photos/5699440/pexels-photo-5699440.jpeg" 
                alt="Visual Performance Stats" 
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Additional Features</h2>
            <p className="text-lg text-gray-600">
              These features enhance your learning experience and make Memoraid even more powerful.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="card p-6 animate-slide-up">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                <Tags size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tagging System</h3>
              <p className="text-gray-600">
                Organize your cards with tags. Filter your study sessions by subject, topic, or custom categories.
              </p>
            </div>

            <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Study Timer</h3>
              <p className="text-gray-600">
                Track how much time you spend studying. Set goals and see how efficient your sessions are.
              </p>
            </div>

            <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                <Laptop size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Device Sync</h3>
              <p className="text-gray-600">
                Study on any device. Your progress syncs automatically, so you can learn anywhere.
              </p>
            </div>

            <div className="card p-6 animate-slide-up">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                <User size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">User Roles</h3>
              <p className="text-gray-600">
                Different roles for learners and educators. Share decks and track student progress.
              </p>
            </div>

            <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                <RefreshCw size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interval Customization</h3>
              <p className="text-gray-600">
                Adjust the spaced repetition algorithm to fit your learning style and goals.
              </p>
            </div>

            <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Retention Score</h3>
              <p className="text-gray-600">
                See how likely you are to remember each card. Focus on improving your weakest areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Why Choose Memoraid?</h2>
            <p className="text-lg text-gray-600">
              See how Memoraid compares to traditional learning methods.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary-100">
                  <th className="p-4 text-left font-semibold text-gray-900 border-b border-gray-200">Feature</th>
                  <th className="p-4 text-center font-semibold text-gray-900 border-b border-gray-200">Traditional Flashcards</th>
                  <th className="p-4 text-center font-semibold text-primary-600 border-b border-gray-200">Memoraid</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 border-b border-gray-200">Spaced Repetition</td>
                  <td className="p-4 text-center border-b border-gray-200">❌</td>
                  <td className="p-4 text-center border-b border-gray-200">✅</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 border-b border-gray-200">Performance Tracking</td>
                  <td className="p-4 text-center border-b border-gray-200">❌</td>
                  <td className="p-4 text-center border-b border-gray-200">✅</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 border-b border-gray-200">Adaptive Scheduling</td>
                  <td className="p-4 text-center border-b border-gray-200">❌</td>
                  <td className="p-4 text-center border-b border-gray-200">✅</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 border-b border-gray-200">Efficient Time Use</td>
                  <td className="p-4 text-center border-b border-gray-200">❌</td>
                  <td className="p-4 text-center border-b border-gray-200">✅</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 border-b border-gray-200">Multi-Device Access</td>
                  <td className="p-4 text-center border-b border-gray-200">❌</td>
                  <td className="p-4 text-center border-b border-gray-200">✅</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 border-b border-gray-200">Data-Driven Insights</td>
                  <td className="p-4 text-center border-b border-gray-200">❌</td>
                  <td className="p-4 text-center border-b border-gray-200">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;