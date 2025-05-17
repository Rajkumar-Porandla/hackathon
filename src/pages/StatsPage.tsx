import React from 'react';
import { dummyStats } from '../data/dummyData';
import StatsOverview from '../components/stats/StatsOverview';

const StatsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Your Learning Statistics</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Track your progress, monitor your memory retention, and optimize your learning with detailed analytics.
          </p>

          {/* Stats Overview Component */}
          <StatsOverview stats={dummyStats} />

          {/* Learning Insights */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-8">Learning Insights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-3">Performance Summary</h3>
                <p className="text-gray-600 mb-4">
                  You're maintaining a strong 7-day review streak. Your accuracy has improved by 5% over the last week, showing progress in retention.
                </p>
                <div className="mt-6 border-t border-gray-200 pt-4">
                  <h4 className="font-medium mb-2">Recommendations:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Continue your daily review habit to maintain your streak.</li>
                    <li>Focus on "Hard" rated cards which make up 35% of your reviews.</li>
                    <li>Your best study time appears to be in the morning.</li>
                  </ul>
                </div>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-3">Spaced Repetition Health</h3>
                <p className="text-gray-600 mb-4">
                  Your review schedule is well-distributed over the coming week, with no significant overloads on any particular day.
                </p>
                <div className="mt-6 border-t border-gray-200 pt-4">
                  <h4 className="font-medium mb-2">System Status:</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Queue Health</span>
                        <span className="text-sm text-green-600 font-medium">Good</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Review Balance</span>
                        <span className="text-sm text-green-600 font-medium">Optimal</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Learning Efficiency</span>
                        <span className="text-sm text-yellow-600 font-medium">Good</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Export Options */}
          <div className="mt-12 text-center">
            <button className="btn-secondary mx-2">
              Export Data
            </button>
            <button className="btn-secondary mx-2">
              Print Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;