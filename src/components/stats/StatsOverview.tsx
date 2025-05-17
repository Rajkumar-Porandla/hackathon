import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
         LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Stats } from '../../types';
import { Clock, CheckCircle, TrendingUp, Calendar } from 'lucide-react';

interface StatsOverviewProps {
  stats: Stats;
}

const StatsOverview: React.FC<StatsOverviewProps> = ({ stats }) => {
  const COLORS = ['#4339F2', '#FFB200', '#10B981', '#F43F5E'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Summary Cards */}
      <div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card p-6 animate-slide-up">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4">
              <CheckCircle size={20} />
            </div>
            <h3 className="text-lg font-medium">Cards Reviewed</h3>
          </div>
          <p className="text-3xl font-bold">{stats.cardsReviewed}</p>
          <p className="text-sm text-gray-500 mt-2">Lifetime total</p>
        </div>
        
        <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mr-4">
              <TrendingUp size={20} />
            </div>
            <h3 className="text-lg font-medium">Accuracy</h3>
          </div>
          <p className="text-3xl font-bold">{stats.accuracy}%</p>
          <p className="text-sm text-gray-500 mt-2">Average recall rate</p>
        </div>
        
        <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4">
              <Calendar size={20} />
            </div>
            <h3 className="text-lg font-medium">Current Streak</h3>
          </div>
          <p className="text-3xl font-bold">{stats.streak} days</p>
          <p className="text-sm text-gray-500 mt-2">Keep it going!</p>
        </div>
        
        <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-4">
              <Clock size={20} />
            </div>
            <h3 className="text-lg font-medium">Time Spent</h3>
          </div>
          <p className="text-3xl font-bold">{stats.timeSpent} min</p>
          <p className="text-sm text-gray-500 mt-2">Total study time</p>
        </div>
      </div>
      
      {/* Reviews by Day */}
      <div className="card p-6 animate-slide-up">
        <h3 className="text-xl font-semibold mb-6">Daily Reviews</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={stats.reviewsByDay}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#4339F2" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Number of cards reviewed each day
        </p>
      </div>
      
      {/* Accuracy Trend */}
      <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <h3 className="text-xl font-semibold mb-6">Accuracy Trend</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={stats.accuracyByDay}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="accuracy" 
                stroke="#FFB200" 
                activeDot={{ r: 8 }} 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Your daily recall accuracy percentage
        </p>
      </div>

      {/* Difficulty Distribution */}
      <div className="card p-6 animate-slide-up">
        <h3 className="text-xl font-semibold mb-6">Cards by Difficulty</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={stats.distributionByDifficulty}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {stats.distributionByDifficulty.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Distribution of cards by difficulty level
        </p>
      </div>

      {/* Upcoming Reviews */}
      <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <h3 className="text-xl font-semibold mb-6">Upcoming Reviews</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={stats.upcomingReviews}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Number of cards scheduled for review in the coming days
        </p>
      </div>
    </div>
  );
};

export default StatsOverview;