/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import VerticalStepper from './app/components/VerticalStepper';

const App = (props) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [data, setData] = useState([]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  // const data = [
  //   {
  //     title: 'Step 1',
  //     body: "For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversations, which network and geographical location you want your ads to show on, and more.",
  //   },
  //   {
  //     title: 'Step 2',
  //     body: "For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversations, which network and geographical location you want your ads to show on, and more.",
  //   },
  //   {
  //     title: 'Step 3',
  //     body: "For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversations, which network and geographical location you want your ads to show on, and more.",
  //   }
  // ];

  useEffect(() => {
    if(props.data){
      const formattedData = [];
      props.data.forEach((item, index) => {
        const eachData = {
          title: `Step ${index+1}`,
          body: item
        }
        formattedData.push(eachData);
      });
      setData(formattedData);
    }
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <VerticalStepper data={data}/>
    </SafeAreaView>
  );
};

export default App;
