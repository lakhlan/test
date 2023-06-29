import React from 'react';
import { View } from 'react-native';
import Quiz from './Quiz';

const App = () => {
  const questions = [
    {
      question: 'What is the capital of France?',
      answers: [
        { text: 'Paris', isCorrect: true },
        { text: 'London', isCorrect: false },
        { text: 'Berlin', isCorrect: false },
        { text: 'Madrid', isCorrect: false },
      ],
    },
    {
      question: 'Who painted the Mona Lisa?',
      answers: [
        { text: 'Leonardo da Vinci', isCorrect: true },
        { text: 'Pablo Picasso', isCorrect: false },
        { text: 'Vincent van Gogh', isCorrect: false },
        { text: 'Michelangelo', isCorrect: false },
      ],
    },
    // Add more question objects here
  ];

  return (
    <View>
      <Quiz questions={questions} />
    </View>
  );
};

export default App;
