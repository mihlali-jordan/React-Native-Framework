// React imports
import React, {useContext} from 'react';
// Navigation
import {createStackNavigator} from '@react-navigation/stack';
// Custom Screens imports
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
// Context
import ThemeContext from '../context/ThemeContext';
// Constants
import SCREENS from '../constants/ScreenConstants';
// redux imports
import {connect} from 'react-redux';

const AuthStack = createStackNavigator();

const AuthStackScreen = ({navigation}) => {
  const {theme} = useContext(ThemeContext);

  const screenOptions = {
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: theme.app.color.primary,
      borderBottomWidth: 0,
      elevation: 0,
      height: 65,
    },
    headerTitleStyle: {
      color: theme.font.color.primary,
      fontSize: theme.font.size.f6,
    },
    headerRightContainerStyle: {
      paddingRight: theme.spacing.f5,
    },
    headerTintColor: theme.icon.color.primary,
  };

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={SCREENS.LOGIN}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={SCREENS.SIGN_UP}
        component={SignUpScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};

// Mapping the redux state to props
const mapStateToProps = (state) => {
  return {};
};

// Mapping the redux actions to props
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthStackScreen);
