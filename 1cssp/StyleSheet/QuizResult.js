import React from 'react';
import { View } from 'react-native';
import QuizResult from './QuizResult';

const App = () => {
  const score = 8;
  const totalQuestions = 10;

  return (
    <View>
      <QuizResult score={score} totalQuestions={totalQuestions} />
    </View>
  );
};

export default App;
