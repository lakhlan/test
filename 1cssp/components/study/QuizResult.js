import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { StackParamList } from '../App';
import { Button } from 'react-native';
import { RootStackParamList } from '../App';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import React from 'react';

const QuizResult = ({ score, totalQuestions }) => {
  const calculatePercentage = () => {
    return ((score / totalQuestions) * 100).toFixed(2);
  };

  const renderFeedback = () => {
    const percentage = calculatePercentage();

    let feedbackText;
    if (percentage === 100) {
      feedbackText = 'Congratulations! You got a perfect score!';
    } else if (percentage >= 75) {
      feedbackText = 'Great job! You passed the quiz!';
    } else {
      feedbackText = 'Keep practicing to improve your score.';
    }

    return (
      <Text style={styles.feedback}>
        {feedbackText}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>{`Your Score: ${score}/${totalQuestions}`}</Text>
      {renderFeedback()}
    </View>
  );
};

export default QuizResult;

const QuizResult = ({ score, totalQuestions }) => {
const calculatePercentage = () => {
  const percentage = (score / totalQuestions) * 100;
  return percentage.toFixed(2);
};

const renderFeedback = () => {
  const percentage = calculatePercentage();
  let feedback = '';

  if (percentage === 100) return <Text style={styles.feedback}>Congratulations! You got a perfect score!</Text>;
  if (percentage >= 75) return <Text style={styles.feedback}>Great job! You passed the quiz!</Text>;

  return <Text style={styles.feedback}>Keep practicing to improve your score.</Text>;
};

  return renderFeedback();
};

  return <Text style={styles.feedback}>{feedback}</Text>;
};

  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>{`Your Score: ${score}/${totalQuestions}`}</Text>
      {renderFeedback()}
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
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  feedback: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default QuizResult;
