import React from 'react';
import FlashcardForm from '../components/flashcards/FlashcardForm';
import { FileText, Upload, Database } from 'lucide-react';

const CreatePage: React.FC = () => {
  return (
    <div className="min-h-screen pt-12 pb-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Create New Flashcards</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Add new flashcards to your collection. Be concise, clear, and make sure your questions and answers are specific.
          </p>

          {/* Form Tabs */}
          <div className="flex border-b border-gray-200 mb-8">
            <button className="px-4 py-2 border-b-2 border-primary-500 text-primary-600 font-medium">
              Single Card
            </button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700">
              Bulk Create
            </button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700">
              Import
            </button>
          </div>

          {/* Flashcard Form */}
          <FlashcardForm />

          {/* Tips Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Tips for Creating Effective Flashcards</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                  <FileText size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Keep it Simple</h3>
                <p className="text-gray-600">
                  Use simple, clear language. One question should test one piece of information.
                </p>
              </div>
              
              <div className="card p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                  <Upload size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Use Images</h3>
                <p className="text-gray-600">
                  Visual memory is powerful. Include relevant images where appropriate.
                </p>
              </div>
              
              <div className="card p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                  <Database size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Organize with Tags</h3>
                <p className="text-gray-600">
                  Use consistent tags to categorize your cards. This helps with focused review sessions.
                </p>
              </div>
            </div>
          </div>

          {/* Other Creation Options */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">Bulk Creation</h3>
              <p className="text-gray-600 mb-4">
                Need to create multiple cards at once? Try our bulk creation tool. Import from spreadsheets or enter multiple question-answer pairs.
              </p>
              <button className="btn-secondary">
                Try Bulk Creation
              </button>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">AI-Assisted Creation</h3>
              <p className="text-gray-600 mb-4">
                Let AI help you generate flashcards from your notes or text. Great for quickly creating comprehensive card sets.
              </p>
              <button className="btn-secondary">
                Try AI Assistant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;