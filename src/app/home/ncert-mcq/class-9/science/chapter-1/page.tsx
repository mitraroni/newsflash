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
    text: '1. The state of matter which consists of super energetic particles in the form of ionized gases is called?',
    options: [
      { id: 'q1o1', text: 'Liquid' },
      { id: 'q1o2', text: 'Gas' },
      { id: 'q1o3', text: 'Bose-Einstein Condensate' },
      { id: 'q1o4', text: 'Plasma' },
    ],
    correctAnswer: 'q1o4',
  },
  {
    id: 'q2',
    text: '2. The boiling point of water is?',
    options: [
      { id: 'q2o1', text: '100°C' },
      { id: 'q2o2', text: '0°C' },
      { id: 'q2o3', text: '273K' },
      { id: 'q2o4', text: '373K' },
    ],
    correctAnswer: 'q2o1',
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
    <div className="bg-background min-h-screen">
      <header className="bg-card text-foreground flex items-center p-4 border-b">
        <button onClick={() => router.back()} className="mr-4">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-bold truncate">
          Chapter 1: Matter in Our...
        </h1>
      </header>

      <div className="p-4 space-y-6">
        {submitted && (
          <Card className="bg-card border-border rounded-lg shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">🎉 Score!</span>
              </div>
              <div className="space-y-2 text-foreground">
                <p className="font-semibold">
                  Total Ques : {questions.length}
                </p>
                <p className="font-semibold">
                  Attempted Ques : {score.attempted}
                </p>
                <p className="flex items-center font-semibold">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                  Correct Ques : {score.correct}
                </p>
                <p className="flex items-center font-semibold">
                  <XCircle className="h-5 w-5 text-destructive mr-2" />
                  Incorrect Ques : {score.incorrect}
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {questions.map((q) => (
          <Card key={q.id} className="p-4 shadow-lg rounded-lg bg-card">
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
                    {submitted &&
                      answers[q.id] === opt.id &&
                      opt.id !== q.correctAnswer && (
                        <XCircle className="h-5 w-5 text-destructive ml-2" />
                      )}
                    {submitted && opt.id === q.correctAnswer && (
                      <CheckCircle2 className="h-5 w-5 text-primary ml-2" />
                    )}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {submitted && answers[q.id] && (
              <div className="mt-4">
                {answers[q.id] === q.correctAnswer ? (
                  <Badge variant="default" className="bg-primary/20 text-primary border-primary/50">
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
          <Button onClick={handleSubmit} className="w-full">
            Submit
          </Button>
        )}
      </div>
    </div>
  );
}
