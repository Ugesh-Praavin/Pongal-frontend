export type OptionKey = 'A' | 'B' | 'C' | 'D';

export interface QuestionOption {
  text: string;
}

export interface Question {
  id: number;
  text: string;
  options: Record<OptionKey, QuestionOption>;
}

export interface Answer {
  questionId: number;
  selectedOption: OptionKey;
}
export interface ClubResult {
  name: string;
  description: string;
  tags: string[];
}
