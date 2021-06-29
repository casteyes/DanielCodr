/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, View, Image, TouchableWithoutFeedback  } from 'react-native';
import Colors from '../constants/Colors';
import {Octicons, Entypo} from '@expo/vector-icons'
import ChatRoomScreen from '../screens/ChatRoomScreen'
import styles from "../components/ChatListItem/style"

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();


function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ 
      
      headerStyle:{
        backgroundColor: Colors.light.tint,
        elevation:0,
      },
      headerTintColor: Colors.light.background,
      headerTitleStyle:{
        fontWeight:'bold',
        fontFamily:'monospace',
        fontSize: 24,

      }
      }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} 
      options={{title: 'Codr',
      
      headerRight:() => (
        <View style={{flexDirection:'row', width: 60, justifyContent:'space-between', marginRight:10}}>
          <Octicons name="search" size={24} color={'white'} />
          <Entypo name="dots-three-vertical" size={24} color={'white'}/>
        </View>
      )
    }}

      />
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} options={({ route }) => ({ 
        title: route.params.name,
        headerRight: () => (
          <View style={{
            flexDirection:'row',
            width: 35,
          }}>
              <TouchableWithoutFeedback > 
              <Entypo name="dots-three-vertical" size={24} color={'white'}/>
              </TouchableWithoutFeedback>
          </View>
        )

      
    })}
        />
        
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
