import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Signup from './src/Signup';
import { Component } from 'react';
import Login from './src/Login';
// import LandingPage from './src/landing_page'; // Import your LandingPage component

import {  MainPage,UserDetails, UserList,MapPage, Interior } from './src/screens';

import {Section2100 , Section1500, Section1800} from './src/screens';
// import {Map1_2100 , Map2_2100 , Map3_2100 , Map4_2100} from './src/screens/section2100/';

import Map1_2100 from './src/screens/section2100/Map1_2100';
import Map2_2100 from './src/screens/section2100/Map2_2100';
import Map3_2100 from './src/screens/section2100/Map3_2100';
import Map4_2100 from './src/screens/section2100/Map4_2100';


import Map1_1500 from './src/screens/section1500/Map1_1500';
import Map2_1500 from './src/screens/section1500/Map2_1500';
import Map3_1500 from './src/screens/section1500/Map3_1500';
import Map4_1500 from './src/screens/section1500/Map4_1500';

import Map1_1800 from './src/screens/section1800/Map1_1800';
import Map2_1800 from './src/screens/section1800/Map2_1800';
import Map3_1800 from './src/screens/section1800/Map3_1800';
import Map4_1800 from './src/screens/section1800/Map4_1800';

import Map1_pdf  from "./src/screens/section2100/Map1_data/pdf/Map1_pdf";


const Stack = createNativeStackNavigator();

const App=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      <Stack.Screen name="MainPage" component={MainPage}/>         
      <Stack.Screen name="Interior" component={Interior}/>         
         <Stack.Screen name="MapPage" component={MapPage} />
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen name="UserDetails" component={UserDetails} />
        <Stack.Screen name="Home" component={Home} />                                                    
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Section2100" component={Section2100} />
        <Stack.Screen name="Section1500" component={Section1500} />
        <Stack.Screen name="Section1800" component={Section1800} />

        <Stack.Screen name="Map1_2100" component={Map1_2100} />
        <Stack.Screen name="Map2_2100" component={Map2_2100} />
        <Stack.Screen name="Map3_2100" component={Map3_2100} />
        <Stack.Screen name="Map4_2100" component={Map4_2100} />

        <Stack.Screen name="Map1_1500" component={Map1_1500} />
        <Stack.Screen name="Map2_1500" component={Map2_1500} />
        <Stack.Screen name="Map3_1500" component={Map3_1500} />
        <Stack.Screen name="Map4_1500" component={Map4_1500} />

        <Stack.Screen name="Map1_1800" component={Map1_1800} />
        <Stack.Screen name="Map2_1800" component={Map2_1800} />
        <Stack.Screen name="Map3_1800" component={Map3_1800} />
        <Stack.Screen name="Map4_1800" component={Map4_1800} /> 


        <Stack.Screen name="Map1_Pdf" component={Map1_pdf} /> 

        
      </Stack.Navigator>
    </NavigationContainer>
  )}

// Home - Login and Signup page
//Main Page - Architect and Main page


export default App;

