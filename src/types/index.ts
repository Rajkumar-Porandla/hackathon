export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  tags: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  lastReviewed: Date | null;
  nextReview: Date | null;
  repetitions: number;
  easeFactor: number;
  interval: number;
  status: 'new' | 'learning' | 'review' | 'relearning';
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'learner' | 'educator';
  joinDate: Date;
}

export interface ReviewLog {
  id: string;
  flashcardId: string;
  timestamp: Date;
  responseQuality: 1 | 2 | 3 | 4; // 1-Again, 2-Hard, 3-Good, 4-Easy
  timeTaken: number; // in seconds
}

export interface Stats {
  cardsReviewed: number;
  accuracy: number;
  streak: number;
  timeSpent: number; // in minutes
  reviewsByDay: {
    date: string;
    count: number;
  }[];
  accuracyByDay: {
    date: string;
    accuracy: number;
  }[];
  distributionByDifficulty: {
    difficulty: string;
    count: number;
  }[];
  upcomingReviews: {
    date: string;
    count: number;
  }[];
}