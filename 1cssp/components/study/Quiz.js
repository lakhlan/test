import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  const renderQuiz = () => {
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <View style={styles.container}>
        <Text style={styles.question}>{currentQuestion.question}</Text>
        {currentQuestion.answers.map((answer, index) => (
          <Button
            key={index}
            title={answer.text}
            onPress={() => handleAnswer(answer.isCorrect)}
          />
        ))}
      </View>
    );
  };

  const renderScore = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.scoreText}>{`You scored ${score}/${questions.length}`}</Text>
        <Button title="Restart Quiz" onPress={restartQuiz} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {showScore ? renderScore() : renderQuiz()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default Quiz;
