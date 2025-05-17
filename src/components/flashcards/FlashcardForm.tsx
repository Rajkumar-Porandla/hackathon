import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

interface FlashcardFormData {
  question: string;
  answer: string;
  tags: string[];
  difficulty: 'easy' | 'medium' | 'hard';
}

const FlashcardForm: React.FC = () => {
  const [formData, setFormData] = useState<FlashcardFormData>({
    question: '',
    answer: '',
    tags: [],
    difficulty: 'medium',
  });
  
  const [tagInput, setTagInput] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTag = () => {
    if (tagInput.trim() !== '' && !formData.tags.includes(tagInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }));
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleTagInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would save to your backend
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setIsSuccess(true);
      
      // Reset form after a delay
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          question: '',
          answer: '',
          tags: [],
          difficulty: 'medium',
        });
      }, 2000);
    }, 1000);
  };

  return (
    <div className="card p-8 animate-fade-in">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
            Question
          </label>
          <textarea
            id="question"
            name="question"
            value={formData.question}
            onChange={handleInputChange}
            rows={3}
            className="input"
            placeholder="Enter the question or front side of your flashcard"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="answer" className="block text-sm font-medium text-gray-700 mb-2">
            Answer
          </label>
          <textarea
            id="answer"
            name="answer"
            value={formData.answer}
            onChange={handleInputChange}
            rows={5}
            className="input"
            placeholder="Enter the answer or back side of your flashcard"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
            Tags
          </label>
          <div className="flex">
            <input
              id="tags"
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagInputKeyDown}
              className="input rounded-r-none flex-grow"
              placeholder="Add a tag (press Enter)"
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="bg-primary-500 text-white px-4 py-2 rounded-r-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <Plus size={20} />
            </button>
          </div>
          
          {formData.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {formData.tags.map((tag) => (
                <div 
                  key={tag}
                  className="bg-primary-100 text-primary-700 py-1 px-3 rounded-full flex items-center text-sm"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-2 text-primary-700 hover:text-primary-900 focus:outline-none"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="mb-6">
          <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 mb-2">
            Difficulty Level
          </label>
          <select
            id="difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleInputChange}
            className="input"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSaving || isSuccess}
            className={`btn px-6 py-2 ${
              isSuccess
                ? 'bg-green-500 text-white'
                : 'btn-primary'
            } transition-colors`}
          >
            {isSaving ? 'Saving...' : isSuccess ? 'Saved!' : 'Create Flashcard'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FlashcardForm;