'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowLeft, CheckCircle2, XCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const questions = [
  {
    id: 'q1',
    text: '1. What type of reaction is respiration?',
    options: [
      { id: 'q1o1', text: 'Exothermic' },
      { id: 'q1o2', text: 'Combination' },
      { id: 'q1o3', text: 'Reduction' },
      { id: 'q1o4', text: 'Endothermic' },
    ],
    correctAnswer: 'q1o1',
  },
  {
    id: 'q2',
    text: '2. What is the color of ferrous sulphate crystal?',
    options: [
      { id: 'q2o1', text: 'White' },
      { id: 'q2o2', text: 'Brown' },
      { id: 'q2o3', text: 'Red' },
      { id: 'q2o4', text: 'Green' },
    ],
    correctAnswer: 'q2o4',
  },
  {
    id: 'q3',
    text: '3. The decomposition of vegetables into compost is an example of which reaction?',
    options: [
      { id: 'q3o1', text: 'Exothermic' },
      { id: 'q3o2', text: 'Endothermic' },
      { id: 'q3o3', text: 'Displacement' },
      { id: 'q3o4', text: 'Combination' },
    ],
    correctAnswer: 'q3o1',
  },
];

export default function McqPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState({
    attempted: 0,
    correct: 0,
    incorrect: 0,
  });

  const handleValueChange = (questionId: string, value: string) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    let correct = 0;
    let incorrect = 0;
    const attempted = Object.keys(answers).length;

    questions.forEach((q) => {
      if (answers[q.id]) {
        if (answers[q.id] === q.correctAnswer) {
          correct++;
        } else {
          incorrect++;
        }
      }
    });

    setScore({ attempted, correct, incorrect });
    setSubmitted(true);
  };

  return (
    <div className="bg-gradient-to-b from-blue-400 to-purple-500 min-h-screen">
      <div className="bg-white rounded-b-3xl pb-8">
        <header className="bg-green-500 text-white flex items-center p-4">
          <button onClick={() => router.back()} className="mr-4">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h1 className="text-xl font-bold truncate">
            Chapter 1: Chemical Reactions...
          </h1>
        </header>

        {submitted && (
          <div className="p-4">
            <Card className="bg-blue-100 border-blue-300 rounded-lg shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-700">🎉 Score!</span>
                </div>
                <div className="space-y-2 text-gray-800">
                  <p className='font-semibold'>Total Ques : {questions.length}</p>
                  <p className='font-semibold'>Attempted Ques : {score.attempted}</p>
                  <p className="flex items-center font-semibold">
                    <span className="w-4 h-4 rounded-full bg-green-500 mr-2"></span>
                    Correct Ques : {score.correct}
                  </p>
                  <p className="flex items-center font-semibold">
                    <span className="w-4 h-4 rounded-full bg-red-500 mr-2"></span>
                    Incorrect Ques : {score.incorrect}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <main className="p-4 space-y-6">
          {questions.map((q) => (
            <Card key={q.id} className="p-4 shadow-lg rounded-lg">
              <p className="font-semibold mb-4">{q.text}</p>
              <RadioGroup
                onValueChange={(value) => handleValueChange(q.id, value)}
                value={answers[q.id]}
                disabled={submitted}
              >
                {q.options.map((opt) => (
                  <div key={opt.id} className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value={opt.id} id={opt.id} />
                    <Label htmlFor={opt.id} className="flex items-center">
                      {opt.text}
                      {submitted && answers[q.id] === opt.id && opt.id !== q.correctAnswer && (
                        <XCircle className="h-5 w-5 text-red-500 ml-2" />
                      )}
                      {submitted && opt.id === q.correctAnswer && (
                        <CheckCircle2 className="h-5 w-5 text-green-500 ml-2" />
                      )}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              {submitted && answers[q.id] && (
                <div className="mt-4">
                  {answers[q.id] === q.correctAnswer ? (
                    <Badge
                      variant="default"
                      className="bg-green-100 text-green-800 border-green-300"
                    >
                      Correct
                    </Badge>
                  ) : (
                    <Badge variant="destructive">Wrong</Badge>
                  )}
                </div>
              )}
            </Card>
          ))}
          {!submitted && (
            <Button onClick={handleSubmit} className="w-full bg-green-500 hover:bg-green-600">
              Submit
            </Button>
          )}
        </main>
      </div>
    </div>
  );
}
