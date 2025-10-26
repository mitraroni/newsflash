'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';

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

  const handleValueChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  return (
    <div className="bg-gradient-to-b from-blue-400 to-purple-500 min-h-screen">
        <div className="bg-white rounded-b-3xl">
            <header className="bg-green-500 text-white flex items-center p-4">
            <button onClick={() => router.back()} className="mr-4">
                <ArrowLeft className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-bold truncate">Chapter 1: Chemical Reactions...</h1>
            </header>
            <main className="p-4 space-y-6">
            {questions.map((q) => (
                <Card key={q.id} className="p-4 shadow-lg rounded-lg">
                <p className="font-semibold mb-4">{q.text}</p>
                <RadioGroup
                    onValueChange={(value) => handleValueChange(q.id, value)}
                    value={answers[q.id]}
                >
                    {q.options.map((opt) => (
                    <div key={opt.id} className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value={opt.id} id={opt.id} />
                        <Label htmlFor={opt.id}>{opt.text}</Label>
                    </div>
                    ))}
                </RadioGroup>
                {answers[q.id] && (
                    <div className="mt-4">
                    {answers[q.id] === q.correctAnswer ? (
                        <Badge variant="default" className="bg-green-500 hover:bg-green-600">Correct</Badge>
                    ) : (
                        <Badge variant="destructive">Wrong</Badge>
                    )}
                    </div>
                )}
                </Card>
            ))}
            </main>
      </div>
    </div>
  );
}
