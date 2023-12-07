import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import Field from './Field';

const Signup = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistration = () => {
    const registrationData = {
      firstName,
      lastName,
      email,
      contactNumber,
      password,
    };

    fetch('http://localhost:3000/register', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registrationData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Registration response:', data);
        if (data.success) {
          alert('Account created successfully');
          props.navigation.navigate('Login');
        } else {
          alert('Registration failed. Please try again.');
        }
      })
      .catch(error => {
        console.error('Registration error:', error);
        alert('An error occurred during registration. Please try again.');
      });
  };

  return (
    <Background>
      <View style={{ alignItems: 'center', width: 460 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <Field placeholder="First Name" onChangeText={text => setFirstName(text)} />
          <Field placeholder="Last Name" onChangeText={text => setLastName(text)} />
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
            onChangeText={text => setEmail(text)}
          />
          <Field
            placeholder="Contact Number"
            keyboardType={'number-pad'}
            onChangeText={text => setContactNumber(text)}
          />
          <Field
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
          <Field
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={text => setConfirmPassword(text)}
          />
          <Btn
            textColor="white"
            bgColor="#2ecc71"
            btnLabel="Signup"
            onPress={handleRegistration}
          /> 
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16,
            }}>
            <Text style={{ color: 'grey', fontSize: 16 }}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{ color: '#2ecc71', fontWeight: 'bold', fontSize: 16 }}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              width: '78%',
              paddingRight: 16,
              marginBottom: 10,
            }}>
            <Text style={{ color: 'grey', fontSize: 16 }}>and </Text>
            <Text style={{ color: '#2ecc71', fontWeight: 'bold', fontSize: 16 }}>
              Privacy Policy
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={{ color: '#2ecc71', fontWeight: 'bold', fontSize: 16 }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
