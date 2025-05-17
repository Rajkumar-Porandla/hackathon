import { Flashcard, User, ReviewLog, Stats } from '../types';

// Helper to create a date a certain number of days from now
const daysFromNow = (days: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
};

// Helper to create a date a certain number of days ago
const daysAgo = (days: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date;
};

export const dummyUser: User = {
  id: '1',
  name: 'Alex Johnson',
  email: 'alex@example.com',
  role: 'learner',
  joinDate: daysAgo(30),
};

export const dummyFlashcards: Flashcard[] = [
  {
    id: '1',
    question: 'What is the capital of France?',
    answer: 'Paris',
    tags: ['Geography', 'Europe', 'Capitals'],
    difficulty: 'easy',
    lastReviewed: daysAgo(2),
    nextReview: daysFromNow(2),
    repetitions: 3,
    easeFactor: 2.5,
    interval: 5,
    status: 'review',
  },
  {
    id: '2',
    question: 'What is the square root of 144?',
    answer: '12',
    tags: ['Math', 'Arithmetic'],
    difficulty: 'easy',
    lastReviewed: daysAgo(1),
    nextReview: daysFromNow(3),
    repetitions: 4,
    easeFactor: 2.7,
    interval: 7,
    status: 'review',
  },
  {
    id: '3',
    question: 'What is the largest organ in the human body?',
    answer: 'Skin',
    tags: ['Biology', 'Human Body'],
    difficulty: 'medium',
    lastReviewed: daysAgo(3),
    nextReview: daysFromNow(1),
    repetitions: 2,
    easeFactor: 2.2,
    interval: 4,
    status: 'review',
  },
  {
    id: '4',
    question: 'In which year did World War II end?',
    answer: '1945',
    tags: ['History', 'War'],
    difficulty: 'medium',
    lastReviewed: daysAgo(4),
    nextReview: daysFromNow(0),
    repetitions: 1,
    easeFactor: 2.0,
    interval: 3,
    status: 'review',
  },
  {
    id: '5',
    question: 'What is the process by which plants make their own food called?',
    answer: 'Photosynthesis',
    tags: ['Biology', 'Plants'],
    difficulty: 'hard',
    lastReviewed: null,
    nextReview: null,
    repetitions: 0,
    easeFactor: 2.5,
    interval: 0,
    status: 'new',
  },
  {
    id: '6',
    question: 'What is the main function of RNA in cells?',
    answer: 'Protein synthesis and carrying genetic information',
    tags: ['Biology', 'Cellular Biology'],
    difficulty: 'hard',
    lastReviewed: daysAgo(5),
    nextReview: daysFromNow(4),
    repetitions: 1,
    easeFactor: 1.8,
    interval: 8,
    status: 'learning',
  },
];

export const dummyReviewLogs: ReviewLog[] = [
  {
    id: '1',
    flashcardId: '1',
    timestamp: daysAgo(2),
    responseQuality: 3,
    timeTaken: 15,
  },
  {
    id: '2',
    flashcardId: '2',
    timestamp: daysAgo(1),
    responseQuality: 4,
    timeTaken: 8,
  },
  {
    id: '3',
    flashcardId: '3',
    timestamp: daysAgo(3),
    responseQuality: 2,
    timeTaken: 25,
  },
  {
    id: '4',
    flashcardId: '4',
    timestamp: daysAgo(4),
    responseQuality: 1,
    timeTaken: 30,
  },
  {
    id: '5',
    flashcardId: '1',
    timestamp: daysAgo(8),
    responseQuality: 2,
    timeTaken: 20,
  },
  {
    id: '6',
    flashcardId: '2',
    timestamp: daysAgo(7),
    responseQuality: 3,
    timeTaken: 12,
  },
  {
    id: '7',
    flashcardId: '3',
    timestamp: daysAgo(9),
    responseQuality: 1,
    timeTaken: 40,
  },
  {
    id: '8',
    flashcardId: '4',
    timestamp: daysAgo(10),
    responseQuality: 3,
    timeTaken: 18,
  },
];

export const dummyStats: Stats = {
  cardsReviewed: 85,
  accuracy: 78.5,
  streak: 7,
  timeSpent: 120,
  reviewsByDay: [
    { date: '2025-01-01', count: 12 },
    { date: '2025-01-02', count: 8 },
    { date: '2025-01-03', count: 15 },
    { date: '2025-01-04', count: 10 },
    { date: '2025-01-05', count: 14 },
    { date: '2025-01-06', count: 18 },
    { date: '2025-01-07', count: 8 },
  ],
  accuracyByDay: [
    { date: '2025-01-01', accuracy: 75 },
    { date: '2025-01-02', accuracy: 80 },
    { date: '2025-01-03', accuracy: 85 },
    { date: '2025-01-04', accuracy: 70 },
    { date: '2025-01-05', accuracy: 75 },
    { date: '2025-01-06', accuracy: 90 },
    { date: '2025-01-07', accuracy: 78 },
  ],
  distributionByDifficulty: [
    { difficulty: 'Easy', count: 25 },
    { difficulty: 'Medium', count: 40 },
    { difficulty: 'Hard', count: 20 },
  ],
  upcomingReviews: [
    { date: 'Today', count: 5 },
    { date: 'Tomorrow', count: 8 },
    { date: 'In 2 days', count: 12 },
    { date: 'In 3 days', count: 6 },
    { date: 'In 4 days', count: 4 },
    { date: 'In 5 days', count: 10 },
    { date: 'In 6 days', count: 7 },
  ],
};