# The React Native way

This repo is a great way to get started with a React Native project. React Native is the perfect framework to use when you need to build both Android and IOS applications with a single code base.

When using this project please make sure you follow the ways of work to ensure all derivative projects are aligned.

## Installation

1.  Ensure that you have node.js installed before starting =>
    https://nodejs.org/en/
2.  Then follow the React Native CLI setup (Choose React Native CLI Quickstart and NOT EXPO CLI Quickstart) =>
    https://reactnative.dev/docs/environment-setup

3.  Once you have the React Native CLI installed you are ready to rock it, so in a new project folder run the following command to clone this repo =>

```bash
git clone https://github.com/IOCOTech/React-Native-Framework.git
```

After you have cloned the repo open the android folder in Android Studio or (the root folder in VS Code) and run the following command before doing a build =>

```bash
npm install
```

Android Studio will work right off the bat whereas with VS Code you might need to do some extra permission changes which is worth it because we love VS code.
If you want to build for IOS you have to dowload Xcode and run the project from there.

Finally startup an emulator and build the project in Android Studio.

(Note) if you are using VS code you can run the following commands in sequence.
if you are having permission issues refer to the issue section below the commands.

```bash
npm install
```

```bash
react-native run-android
```

## Issues with permission

Sometimes things do not always work out according to plan, oops!
Here are some articles that will help resolve any issues found regarding the setup.

Note: the best way to resolve issues is sometimes to Google them.

**Permissions**

https://stackoverflow.com/questions/60276556/how-can-i-solve-permission-denied-in-react-native-project

**Emulator**

https://stackoverflow.com/questions/38835931/react-native-adb-reverse-enoent

**ANDROID_SDK_ROOT**

https://stackoverflow.com/questions/27620262/sdk-location-not-found-define-location-with-sdk-dir-in-the-local-properties-fil

## Dev standards

React Native is an empty box at first so here are guidelines to ensure that all developers working with this repo adhere to the same coding standards. First let's have a look at some helpful libraries that are used for navigation and UI components.

### Navigation library

https://reactnavigation.org/docs/getting-started

### UI component library (optional)

https://reactnativeelements.com

### Coding conventions

#### Naming Conventions

- Variable and function names are written in `camelCase`

```javascript
const newVariable ✅
const new_variable ❌
const newvariable ❌
```

- Global constants written in `UPPERCASE` with underscores

```javascript
const NEW_CONSTANT ✅
const NEWCONSTANT ❌
```

- Components and Classes are capitalised and written in `camelCase`

```javascript
class NewClass ✅
class newClass ❌

const NewComponent = () => {...} ✅
const newComponent = () => {...} ❌
```

- The folder names for Components and Classes follow the above naming convention
- Always put spaces around operators ( = + - \* / ), and after commas

```javascript
const sum = a + b ✅
const sum = a+b ❌
```

- Always end a simple statement with a semicolon.

```javascript
const someStatement = x + y; ✅
const someStatment = x + y ❌
```

_You can always use a tool like [Prettier](https://prettier.io) to format your code and add semicolons automatically on every save_

### Patterns to avoid

_A list of some patterns and practices to avoid in your code 💩_

#### Poor variable naming

```javascript
const od; ❌
const overdueDays; ✅

const objectModel; ❌
const customerModel; ✅

const arr1; ❌
const booksArray; ✅
```

- Variable names must be clean and intention revealing
- Name your variables, methods and classes in such a way that any person reading your code does not have to look elsewhere in your code to understand what is going on – the variable should best describe what is going on
- Avoid "noisy names"

```javascript
const theClient; ❌
const client; ✅

const listOfApprovedClients; ❌
const approvedClients; ✅
```

#### Poor function signatures

```javascript
function stringToNumber(string) {
    return string
} ❌
function stringToNumber(string) {
    return parseInt(string)
} ✅
```

- Keep consistent function signatures (i.e. Your functions must do or return what the name says it must do or return)

#### Long Parameter List

- Avoid having too many parameters on your functions
- The more parameters you have for a function, the more difficult it is to understand the function and its intention

#### Variable Declaration

- Declare all of your variables at the top of your file, function or class
- Do not declare your variables all over your code – it becomes difficult to track all the variables pertaining to a given file or function

#### Nested Conditionals

```javascript
if (condition1) {
  if (condition2) {
    // do something
  } else if (condition3) {
    if (condition4) {
      // do something
    }
  } else {
    // do something
  }
} else {
  // do something
}
```

- The above code is not very readable 💩 – avoid writing deeply nested conditionals
- Nested conditionals make code difficult to read, understand, change and test
- A higher number of nested conditionals means more execution tasks which ultimately leads to a need for various combinations of values in order to test a function
- You can simplify nested conditionals (see the following example):

```javascript
❌ No
if (person.age > 18)
    canDrink = true;
else
    canDrink = false;
------------------------------
✅ Yes
canDrink = person.age > 50
```

- In the above example, instead of making use of a conditional, we simply set the variable `canDrink` to the result of the boolean expression which will either be `true` or `false`
- Here is another example:

```javascript
if (condition1) {
  if (condition2) {
    doSomething();
  }
}

// Simplified ✅
if (condition1 && condition2) doSomething();

// Alternative option ✅
if (!condition1) return;
if (!condition2) return;
doSomething();

// Let's simplify it even further ✅😍🚀
if (!condition || !condition2) return;
doSomething();
```

_There are various ways to implement conditional logic – do your best to avoid nested conditionals_

#### Verbose Comments

```javascript
❌❌❌
// return list of customers
function getCustomers() {
    return customers
}
```

- Do not make use of comments if the code is self-explanatory
- Aim to write code that is so clean and self-explanatory that there ceases to be a need for any comments

```javascript
❌❌❌
const gf = 10; // Goal Frequency
```

- Avoid using comments to clarify code that could have been written better

#### Extremely long functions

- Long functions are difficult to understand, alter and reuse
- Always adhere to the Single Responsibility Principle which states that a class or function should do only one thing and do it well
- Your functions should have a single responsibility and handle only a specific bit of logic
- Adhering to this pattern ensures that you have reusable code and it makes your code easier to test

## Project folder Structure

Here is the example of what the base project folder structure consists of. The example excludes the andoird, ios and common js files so that you can get a clean view of the structure.

**Folder structure**

- [components/](./src/components)
  - [shared/](./src/components/shared)
    - [Button.js](./src/components/shared/Button.js)
    - [Container.js](./src/components/shared/Container.js)
    - [CustomInput.js](./src/components/shared/CustomInput.js)
    - [Spacer.js](./src/components/shared/Spacer.js)
    - [StyledText.js](./src/components/shared/StyledText.js)
- [config/](./src/config)
  - [appConfig.js](./src/config/appConfig.js)
- [constants/](./src/constants)
  - [screenConstants.js](./src/constants/screenConstants.js)
  - [testConstants.js](./src/constants/testConstants.js)
  - [themeConstants.js](./src/constants/themeConstants.js)
- [context/](./src/context)
  - [ThemeContext.js](./src/context/ThemeContext.js)
- [navigation/](./src/navigation)
  - [AppTabs.js](./src/navigation/AppTabs.js)
  - [AuthStackScreen.js](./src/navigation/AuthStackScreen.js)
  - [HomeStackScreen.js](./src/navigation/HomeStackScreen.js)
  - [SearchStackScreen.js](./src/navigation/SearchStackScreen.js)
  - [ShopStackScreen.js](./src/navigation/ShopStackScreen.js)
- [redux/](./src/redux)
  - [auth/](./src/redux/auth)
    - [authActions.js](./src/redux/auth/authActions.js)
    - [authReducer.js](./src/redux/auth/authReducer.js)
    - [authTypes.js](./src/redux/auth/authTypes.js)
  - [counter/](./src/redux/counter)
    - [counterActions.js](./src/redux/counter/counterActions.js)
    - [counterReducer.js](./src/redux/counter/counterReducer.js)
    - [counterTypes.js](./src/redux/counter/counterTypes.js)
  - [configureStore.js](./src/redux/configureStore.js)
  - [index.js](./src/redux/index.js)
  - [rootReducer.js](./src/redux/rootReducer.js)
  - [store.js](./src/redux/store.js)
- [screens/](./src/screens)
  - [auth/](./src/screens/auth)
    - [LoginScreen.js](./src/screens/auth/LoginScreen.js)
    - [SignUpScreen.js](./src/screens/auth/SignUpScreen.js)
  - [home/](./src/screens/home)
    - [HomeScreen.js](./src/screens/home/HomeScreen.js)
    - [ProfileScreen.js](./src/screens/home/ProfileScreen.js)
  - [search/](./src/screens/search)
    - [ResultsScreen.js](./src/screens/search/ResultsScreen.js)
    - [SearchScreen.js](./src/screens/search/SearchScreen.js)
  - [shop/](./src/screens/shop)
    - [ProductScreen.js](./src/screens/shop/ProductScreen.js)
    - [ShopScreen.js](./src/screens/shop/ShopScreen.js)
  - [splash/](./src/screens/splash)
    - [SplashScreen.js](./src/screens/splash/SplashScreen.js)
- [services/](./src/services)
  - [EventManager.js](./src/services/EventManager.js)
- [utils/](./src/utils)
  - [SmartStyle.js](./src/utils/SmartStyle.js)
  - [TestUtils.js](./src/utils/TestUtils.js)
- [directoryList.md](./src/directoryList.md)

## Theme implementaion

The theme implementation for this repo is flexible enough to change themes dynamicly in runtime, it accomplishes this by making use of a global theme file and state in the context api. Lets have a look at the different elements for you to be able to style components with the theme.

The first piece of the puszzle we will look at is the **Generic.js** file ( styles >> themes >> **Generic.js** ). This file is the root of a theme, more of these files can be created for different themes, it contains all the variables that will be used througout your application. The file returns an object that can be later used to style components in a dot fassion (Theme.app.color.primary).

_Below is an condensed example of the file. The accual file contains mush more variables._

**Generic.js**

```javascript
export default generic = {
  app: {
    color: {
      primary: '#27536B',
      secondary: '#1B5F85',
      accent: '#FDB833',
      white: '#ffffff',
      offWhite: '#EFEFEF',
      grey: '#555555',
      black: '#000000',
      error: '#D84545',
      warning: '#D89D45',
      success: '#74D845',
    },
  },
  font: {
    color: {
      primary: '#ffffff',
      secondary: '#000000',
      accent: '#555555',
      white: '#ffffff',
      offWhite: '#EFEFEF',
      grey: '#555555',
      black: '#000000',
      error: '#D84545',
      warning: '#D89D45',
      success: '#74D845',
    },
    family: {
      regular: 'Roboto-Regular',
      medium: 'Roboto-Medium',
      bold: 'Roboto-Bold',
      thin: 'Roboto-Thin',
    },
    size: {
      f0: 0,
      f1: 8,
      f2: 10,
      f3: 12,
      f4: 14,
      f5: 16,
      f6: 18,
      f7: 20,
      f8: 24,
      f9: 32,
      f10: 40,
    },
  },
  image: {
    logo: require('../../assets/images/logo.png'),
  },
};
```

Looking at the **Generic.js** file we can see how the object is structured in such a way that it alligns to properties of an element for instants the key **app** is used for styling every mundain object in the app such as background colors. Where as the key **font** is used to specificly style text elements in the app. It is important to separate some of the elements like this so that when changing a theme all the separate elements can make use of its own variables.

When setting up the theme it is important to use contrasting colors when it comes to the app, font styles (primary, scondary and acccent) and it should be used in such a way that primary font colors will be readable on primary app background color.

for example if you have made a box background primary then the text in that box should also be primary.

```jsx
<View style={{backgroundColor: theme.app.color.primary}}>
  <Text style={{color: theme.font.color.primary}}>Hello</Text>
</View>
```

Much like the **Generic.js** there are aslo a **Dark.js** and a **Light.js** file for styling different themes. These files are in the base repo but can be removed and replaced with you own theme files. Let's take a look at how these files are hook up to state.

In the theme styles folder you will find a **Theme.js** file that look like this.

```javascript
// Constants
import THEME from '../src/constants/ThemeConstants';
// Themes
import generic from './themes/Generic';
import dark from './themes/Dark';
import light from './themes/Light';

const themes = {
  generic: generic,
  dark: dark,
  light: light,
};

const Theme = (() => {
  let currentTheme = themes[THEME.GENERIC];

  return {
    set: (theme) => {
      if (!theme) {
        return currentTheme;
      }
      currentTheme = themes[theme];
      return currentTheme;
    },
  };
})();

export default Theme;
```

In the** Theme.js** file you can see how the different themes are hooked up to an object that gets returned when calling the **set** method. When adding a new theme all you need to do is, add the theme export to the imports and append it to the theme object in line 8.

Your theme should now be available when setting up the theme state in your components.

We are almost there, we just need to have a clear understanding on how to import the theme in a component.

Here is an example of a component without the theme.

```javascript
// React imports
import React from 'react';
import {View, StyleSheet} from 'react-native';
const Comp = () => {
  return (
    // Component start
    <>
      <View style={localStyles.box}></View>
      <View style={{backgroundColor: '#FFFFFF'}}></View>
    </>
    // Component end
  );
};
// This object is used to style your components
const localStyles = StyleSheet.create({
  box: {
    backgroundColor: '#FFFFFF',
  },
});
export default Comp;
```

Now here is how the component looks like with the theme. notice the difference between the files. We will go through the changes in detail.

```javascript
// React imports
import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
// Context
import ThemeContext from '../../context/ThemeContext';

const CompWithTheme = () => {
  const {theme} = useContext(ThemeContext);
  const styles = localStyles(theme);

  return (
    // Component start
    <>
      <View styles={styles.box}></View>
      <View styles={{backgroundColor: theme.app.color.primary}}></View>
    </>
    // Component end
  );
};

// This object is used to style your components
const localStyles = (theme) =>
  StyleSheet.create({
    box: {
      backgroundColor: theme.app.color.primary,
    },
  });

export default CompWithTheme;
```

Looking at the file line by line to illustrate what is happening here.
On line 3 we need to import **useContext** from react for us to use that context api.
On line 5 we import the **ThemeContext** that exposes the theme variables to our component.

```javascript
// React imports
import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
// Context
import ThemeContext from '../../context/ThemeContext';
```

On line 8 and 9 we have these to decalrations  
const {theme} = useContext(ThemeContext);
const styles = localStyles(theme);

The theme is used for styling any inline styles in you compoenent where as the styles referes to the created stylesheet on line 22, here we are passing the theme to the stylesheet to make use of the theme variables.

The **ThemeContext** allows us to make use of the theme variables anywhere in the app. There are many ways to extract the variable into the components. We just provide a starting point to follow and make use of the theme with Context api. The **ThemeContext** also exposes a method to switch the theme dynamically by pointing to theme constants.
Here is how that method looks like.

```javascript
// React imports
import React, {useState} from 'react';
// Constants
import THEME from '../constants/ThemeConstants';
// Theme
import Theme from '../../styles/Theme';

const ThemeContext = React.createContext();

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(Theme.set(THEME.GENERIC));

  const switchTheme = (theme) => {
    setTheme(Theme.set(theme));
  };
  return (
    <ThemeContext.Provider value={{theme, switchTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
```

#### Changing Themes

To change between different themes, we introduce the **ThemeConstant** class, ( constants >> **ThemeConstant.js** ) , this class exports a THEME class that defines our three base themes, which allows us to make use of the theme variables anywhere in the app.

Here is how that method looks like.

```javascript
// React imports
import React, {useContext, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
// Context
import ThemeContext from '../../context/ThemeContext';
import ThemeConstants from '../../constants/ThemeConstants';

const CompChangeTheme = () => {
  const {theme, switchTheme} = useContext(ThemeContext);
  const styles = localStyles(theme);

  useEffect(() => {
    switchTheme(ThemeConstants.DARK);
    // switchTheme(ThemeConstants.GENERIC)
    // switchTheme(ThemeConstants.LIGHT)
  }, []);

  return (
    // Component start
    <>
      <View styles={styles.box}></View>
      <View styles={{backgroundColor: ThemeConstants.DARK}}></View>
    </>
    // Component end
  );
};

// This object is used to style your components
const localStyles = (theme) =>
  StyleSheet.create({
    box: {
      backgroundColor: theme.app.color.primary,
    },
  });

export default CompChangeTheme;
```

On line 6, we import the ThemeConstants, which will give us access to all of our themes constants.
On line 5, our ThemeContext allows us to access all function within that class and the main theme object.
One function we are interested in and importing is the switchTheme found on line 9,
the switchTheme function allows us to set and pass a ThemeConstant as a parameter, hence invoking the different themes.

On line 13, we can see how we invoke the switchTheme function by calling switchTheme(ThemeConstants.DARK), that will initialise the app to the DARK theme, feel free to change between different base themes or create custom themes.

We hope that you enjoy using the theme in the app. Please feel free to make suggestions on how to improve the theme system by following the contribution flow.

## Contributing

Contributing to this documentation is always appreciated so if you found something useful to add, create a pull request for the readme file.
Code pull requests are welcome for major changes, please open an issue first to discuss what you would like to change.

## Questions and Answers

If you have any questions regarding this starter pack or guidelines please contact Daniel at daniel.botha1@eoh.com
