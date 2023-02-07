import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

const Signpage = () => {
  const [genderValue, setGenderValue] = useState('');

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>What's your Phone no.?</Text>
        <TextInput style={styles.input} keyboardType="numeric" />
        <Text style={styles.title}>What's your name?</Text>
        <TextInput style={styles.input} />
        <Text style={styles.title}>What's your date of birth?</Text>
        <TextInput style={styles.input} />
        <Text style={styles.title}>What's your gender?</Text>
        <Picker
          style={styles.input}
          selectedValue={genderValue}
          onValueChange={(itemValue, itemIndex) => setGenderValue(itemValue)}>
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Others" value="others" />
        </Picker>
      </View>

      <View style={styles.Buttonwrapper}>
        <Text style={styles.Buttontitle}>Sign Up</Text>
      </View>
    </>
  );
};

export default Signpage;

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 10,
    marginTop: 30,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 50,
    marginTop: 15,
  },
  input: {
    backgroundColor: '#717171',
    fontSize: 20,
    color: '#fff',
    borderRadius: 5,
    paddingLeft: 15,
  },
  Buttonwrapper: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderRadius: 50,
    height: 60,
    width: 150,
    margin: 50,
    marginHorizontal: 120,
  },
  Buttontitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#121212',
  },
});
