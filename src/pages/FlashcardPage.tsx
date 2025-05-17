import React, { useState } from 'react';
import { dummyFlashcards } from '../data/dummyData';
import FlashcardReview from '../components/flashcards/FlashcardReview';
import FlashcardForm from '../components/flashcards/FlashcardForm';
import { Plus, BookOpen } from 'lucide-react';

const FlashcardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'review' | 'create'>('review');

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            {activeTab === 'review' ? 'Review Your Flashcards' : 'Create New Flashcards'}
          </h1>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg bg-gray-100 p-1">
              <button
                onClick={() => setActiveTab('review')}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'review'
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <BookOpen size={18} className="mr-2" />
                Review Cards
              </button>
              <button
                onClick={() => setActiveTab('create')}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'create'
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Plus size={18} className="mr-2" />
                Create Cards
              </button>
            </div>
          </div>
          
          {/* Content */}
          {activeTab === 'review' ? (
            <>
              {/* Flashcard Interface */}
              <div className="mb-16">
                <FlashcardReview flashcards={dummyFlashcards} />
              </div>

              {/* How It Works */}
              <div className="card p-8 mb-12">
                <h2 className="text-2xl font-semibold mb-4">How Spaced Repetition Works</h2>
                <div className="space-y-4">
                  <p>
                    Memoraid uses a modified version of the SuperMemo SM-2 algorithm to schedule your reviews:
                  </p>
                  <ol className="list-decimal list-inside ml-4 space-y-2">
                    <li>When you review a card, you rate how well you remembered it (Again, Hard, Good, Easy).</li>
                    <li>Your rating determines the card's ease factor and next review interval.</li>
                    <li>Cards you find difficult are shown more frequently.</li>
                    <li>Cards you know well are shown less frequently, but still reviewed to maintain memory.</li>
                  </ol>
                  <p>
                    This approach maximizes your learning efficiency by focusing on what you're about to forget.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Create Flashcard Form */}
              <div className="mb-12">
                <FlashcardForm />
              </div>

              {/* Tips for Creating Good Flashcards */}
              <div className="card p-8">
                <h2 className="text-2xl font-semibold mb-6">Tips for Creating Effective Flashcards</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-primary-600">Keep it Simple</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>One concept per card</li>
                      <li>Use clear, concise language</li>
                      <li>Break complex topics into smaller cards</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-primary-600">Make it Memorable</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Use mnemonics when helpful</li>
                      <li>Include relevant examples</li>
                      <li>Add images for visual concepts</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-primary-600">Organize Your Cards</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Use consistent tags</li>
                      <li>Group related concepts</li>
                      <li>Set appropriate difficulty levels</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-primary-600">Review Strategy</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Start with small batches</li>
                      <li>Review regularly</li>
                      <li>Trust the spaced repetition system</li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Card Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            <div className="card p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Import Cards</h3>
              <p className="text-gray-600 mb-4">
                Import flashcards from CSV, Excel, or other popular flashcard apps.
              </p>
              <button className="btn-primary">
                Import Cards
              </button>
            </div>
            
            <div className="card p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">View Your Stats</h3>
              <p className="text-gray-600 mb-4">
                See your review performance, retention rates, and upcoming review schedule.
              </p>
              <a href="/stats" className="btn-primary">
                View Stats
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashcardPage;