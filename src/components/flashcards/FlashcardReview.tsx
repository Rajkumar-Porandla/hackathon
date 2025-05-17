import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Flashcard } from '../../types';

interface FlashcardReviewProps {
  flashcards: Flashcard[];
}

const FlashcardReview: React.FC<FlashcardReviewProps> = ({ flashcards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentCard = flashcards[currentIndex];

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setIsFlipped(false);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setIsFlipped(false);
        setIsAnimating(false);
      }, 300);
    }
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleResponse = (responseQuality: 1 | 2 | 3 | 4) => {
    // In a real app, this would update the card's spaced repetition data
    console.log(`Card ${currentCard.id} rated as ${responseQuality}`);
    handleNext();
  };

  if (!currentCard) return <div>No flashcards to review</div>;

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-3xl">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-primary-500 h-2.5 rounded-full transition-all duration-300" 
              style={{ width: `${((currentIndex + 1) / flashcards.length) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>Card {currentIndex + 1} of {flashcards.length}</span>
            <span>
              {(((currentIndex + 1) / flashcards.length) * 100).toFixed(0)}% Complete
            </span>
          </div>
        </div>

        {/* Flashcard */}
        <div 
          className={`w-full h-80 sm:h-96 perspective-1000 cursor-pointer ${isAnimating ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onClick={flipCard}
        >
          <div 
            className={`relative w-full h-full transition-transform duration-600 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
          >
            {/* Front */}
            <div className={`absolute w-full h-full backface-hidden card p-8 flex flex-col ${isFlipped ? 'invisible' : 'visible'}`}>
              <div className="text-xs text-gray-500 mb-2">
                Tags: {currentCard.tags.join(', ')}
              </div>
              <div className="flex-grow flex items-center justify-center">
                <h3 className="text-2xl font-medium text-center">{currentCard.question}</h3>
              </div>
              <div className="text-center text-gray-500 text-sm mt-4">
                Click to see answer
              </div>
            </div>

            {/* Back */}
            <div className={`absolute w-full h-full backface-hidden card p-8 flex flex-col rotate-y-180 ${isFlipped ? 'visible' : 'invisible'}`}>
              <div className="text-xs text-gray-500 mb-2">
                Difficulty: {currentCard.difficulty}
              </div>
              <div className="flex-grow flex items-center justify-center">
                <p className="text-xl text-center">{currentCard.answer}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between mt-8 mb-10">
          <button 
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`btn-secondary ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <ArrowLeft size={18} className="mr-2" />
            Previous
          </button>
          <button 
            onClick={handleNext}
            disabled={currentIndex === flashcards.length - 1}
            className={`btn-secondary ${currentIndex === flashcards.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Next
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>

        {/* Spaced Repetition Response Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          <button 
            onClick={() => handleResponse(1)}
            className="btn bg-red-500 hover:bg-red-600 text-white focus:ring-red-500"
          >
            Again
          </button>
          <button 
            onClick={() => handleResponse(2)}
            className="btn bg-orange-500 hover:bg-orange-600 text-white focus:ring-orange-500"
          >
            Hard
          </button>
          <button 
            onClick={() => handleResponse(3)}
            className="btn bg-green-500 hover:bg-green-600 text-white focus:ring-green-500"
          >
            Good
          </button>
          <button 
            onClick={() => handleResponse(4)}
            className="btn bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500"
          >
            Easy
          </button>
        </div>

        {/* Card Details */}
        <div className="text-sm text-gray-500 mt-4">
          <p>Last reviewed: {currentCard.lastReviewed ? new Date(currentCard.lastReviewed).toLocaleDateString() : 'Never'}</p>
          <p>Next review: {currentCard.nextReview ? new Date(currentCard.nextReview).toLocaleDateString() : 'Not scheduled'}</p>
          <p>Repetitions: {currentCard.repetitions}</p>
        </div>
      </div>
    </div>
  );
};

export default FlashcardReview;