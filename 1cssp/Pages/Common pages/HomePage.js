import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Button } from 'react-native'
import Services from '../Shared/Services'
import { AuthContext } from '../Context/AuthContext'
import WelcomeHeader from '../Components/WelcomeHeader'
import SearchBar from '../Components/SearchBar'
import GlobalApi from '../Shared/GlobalApi'
import Slider from '../Components/Slider'
import VideoCourseList from '../Components/VideoCourseList'
import CourseList from '../Components/CourseList'
import ViewMore from '../Components/ViewMore'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native'



// Import the necessary dependencies
import React, { useContext } from 'react';
import WelcomeHeader from './WelcomeHeader';
import SearchBar from './SearchBar';
import Slider from './Slider';
import VideoCourseList from './VideoCourseList';
import CourseList from './CourseList';
import { AuthContext } from './AuthContext';

import React, { useContext } from 'react';
import AuthContext from './AuthContext';
import WelcomeHeader from './WelcomeHeader';
import SearchBar from './SearchBar';
import Slider from './Slider';
import VideoCourseList from './VideoCourseList';
import CourseList from './CourseList';

const Home = () => {
  const { userData, setUserData } = useContext(AuthContext);

  return (
    <>
      <WelcomeHeader />
      <SearchBar />
      <Slider />
      <VideoCourseList />
      <CourseList type="basic" />
      <CourseList type="advance" />
      <div style={{ height: 100 }}></div>
    </>
  );
};

export default Home;
            <SearchBar />
            <Slider />
            <VideoCourseList />
            <CourseList type={'basic'} />
            <CourseList type={'advance'} />
            <div style={{ height: 100 }}></div>
        </>
    );
}



    
