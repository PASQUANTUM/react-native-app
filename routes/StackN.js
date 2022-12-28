import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Exams from '../components/Exams';
import Exam from '../components/Edit';

const screens = {
  Exams: {
    screen: Exams,
    
  },
  Exam: {
    screen: Exam,
    navigationOptions:{
      title: 'Edit',
    }
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);