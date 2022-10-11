import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const VerticalStepper = ({data}) => {
  const [stepperData, setStpperData] = useState();

  useEffect(() => {
    data.forEach((step, index) => {
      step.index = index + 1;
      if (index === 0) {
        step.isActive = true;
      } else {
        step.isActive = false;
      }
      step.isCompleted = false;
    });
    setStpperData(data);
  }, [data]);

  const onContinuePress = index => {
    stepperData.forEach(data => {
      if (data.index === index) {
        data.isActive = true;
      } else {
        data.isActive = false;
      }
      if (data.index < index) {
        data.isCompleted = true;
      } else {
        data.isCompleted = false;
      }
    });
    setStpperData(setStpperData);
  };

  const onBackPress = index => {
    stepperData.forEach(data => {
      if (data.index === index) {
        data.isActive = true;
      } else {
        data.isActive = false;
      }
      if (data.index < index) {
        data.isCompleted = true;
      } else {
        data.isCompleted = false;
      }
    });
    setStpperData(setStpperData);
  };

  return (
    <ScrollView style={styles.container}>
      {stepperData &&
        stepperData.map(data => {
          return (
            <View
              key={data.index}
              style={[
                styles.stepperContent,
                data.isActive
                  ? styles.activeStepperContent
                  : styles.inactiveStepperContent,
              ]}>
              <View>
                <View
                  style={[
                    styles.stepper,
                    data.isActive || data.isCompleted
                      ? styles.activeStepper
                      : styles.inactiveStepper,
                  ]}>
                  {data.isCompleted ? (
                    <Image
                      style={{width: 12, height: 8, alignSelf: 'center'}}
                      source={require('../assets/tick.png')}
                    />
                  ) : (
                    <Text style={styles.stepperTxt}>{data.index}</Text>
                  )}
                </View>
                {data.index !== stepperData.length && (
                  <View
                    style={[
                      styles.stepperLine,
                      data.isActive
                        ? styles.activeStepperLine
                        : styles.inactiveStepperLine,
                    ]}></View>
                )}
              </View>
              <View style={{marginHorizontal: 10}}>
                <Text style={{marginTop: 5}}>{data.title}</Text>
                {data.index === stepperData.length && (
                  <Text style={{marginTop: 5, color: 'grey'}}>Last Step</Text>
                )}
                {data.isActive && (
                  <View style={{marginVertical: 10}}>
                    <Text>{data.body}</Text>
                    <View style={styles.btnLayout}>
                      <TouchableOpacity
                        style={styles.continueBtn}
                        onPress={() => {
                          if (data.index < stepperData.length) {
                            onContinuePress(data.index + 1);
                          }
                        }}>
                        <Text style={styles.continueBtnTxt}>
                          {data.index === stepperData.length
                            ? 'Finish'
                            : 'Continue'}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.backBtn}
                        onPress={() => {
                          if (data.index > 1) {
                            onBackPress(data.index - 1);
                          }
                        }}>
                        <Text
                          style={
                            data.index === 1
                              ? styles.inactiveBackBtnTxt
                              : styles.activeBackBtnTxt
                          }>
                          Back
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </View>
            </View>
          );
        })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  stepperContent: {
    flexDirection: 'row',
  },
  activeStepperContent: {
    height: 180,
  },
  inactiveStepperContent: {
    height: 80,
  },
  stepper: {
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepperTxt: {
    color: 'white',
  },
  activeStepper: {
    backgroundColor: 'blue',
  },
  inactiveStepper: {
    backgroundColor: 'grey',
  },
  stepperLine: {
    width: 1,
    backgroundColor: 'black',
    marginVertical: 5,
    marginLeft: 13,
  },
  activeStepperLine: {
    height: 142,
  },
  inactiveStepperLine: {
    height: 42,
  },
  btnLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  continueBtn: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
  },
  continueBtnTxt: {
    color: 'white',
  },
  backBtn: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  activeBackBtnTxt: {
    color: 'blue',
  },
  inactiveBackBtnTxt: {
    color: 'grey',
  },
});

export default VerticalStepper;
