import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Pages/Home';
import CourseDetails from '../Pages/CourseDetails';
import CourseChapter from '../Pages/CourseChapter';
import PlayVideo from '../Pages/PlayVideo';
import JobSortPage from '../Pages/job/JobSortPage';
import JobListPage from '../Pages/job/JobListPage';
import JobSearchPage from '../Pages/job/JobSearchPage';
import JobDetailsPage from '../Pages/job/JobDetailsPage';
import JobEditPage from '../Pages/job/JobEditPage';
import JobCreatePage from '../Pages/job/JobCreatePage';
<View>

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}></HomeStack.Navigator>
  );
}
</View>

const routes = [
  { 
    name: 'Home',
    component: HomeStackScreen,
  },
  {
    name: 'CourseDetails',
    component: CourseDetails,
    cardStyle: { backgroundColor: "#1A82E2" },
    options: {
      title: 'Course Details Screen',
      headerStyle: {
        backgroundColor: '#1A82E2',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    },
  },
  {
    name: 'CourseChapter',
    component: CourseChapter,
    cardStyle: { backgroundColor: "#821A82" },
    options: {
      title: 'Developer Story',
      headerStyle: {
        backgroundColor: '#821A82',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    },
  },
  ];


export default function Navigation() {
  const routes = [
    { name: 'Home', component: Home },
    { name: 'CourseDetails', component: CourseDetails },
    { name: 'CourseChapter', component: CourseChapter },
    { name: 'PlayVideo', component: PlayVideo },
    { name: 'JobSortPage', component: JobSortPage },
  ];
}
  

      

const Stack = createNativeStackNavigator();
export default function HomeNavigation() {
  const screens = [
    { name: "home", component: Home },
    { name: "course-detail", component: CourseDetails },
    { name: "course-chapter", component: CourseChapter },
    { name: "play-video", component: PlayVideo },
    { name: "job-sort", component: JobSortPage },
    { name: "job-list", component: JobListPage },
    { name: "job-search", component: JobSearchPage },
    { name: "job-details", component: JobDetailsPage },
    { name: "job-create", component: JobCreatePage },
    { name: "job-edit", component: JobEditPage },
  ];

  const screenElements = screens.map(screen => (
    <Stack.Screen
      key={screen.name}
      name={screen.name}
      component={screen.component}
    />
  ));

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {screenElements}
    </Stack.Navigator>
  );
}
