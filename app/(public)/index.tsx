import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BlogScreen from './../../src/screens/Home';
import PerformanceChallengeScreen from '@/screens/Second';

const Tab = createBottomTabNavigator();

const App = () => {
  return (

      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: 'black', // Fondo negro para las tabs
            borderTopWidth: 0, // Quitar el borde superior de las tabs
          },
          tabBarActiveTintColor: 'white', // Color del texto o ícono activo
          tabBarInactiveTintColor: 'gray', // Color del texto o ícono inactivo
          headerStyle: {
            backgroundColor: 'black', // Fondo negro para el header
          },
          headerTitleStyle: {
            color: 'white', // Color blanco para el título del header
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={BlogScreen}
          options={{
            tabBarLabel: 'Inicio', // Etiqueta personalizada
          }}
        />
        <Tab.Screen
          name="Second"
          component={PerformanceChallengeScreen}
          options={{
            tabBarLabel: 'Segunda', // Etiqueta personalizada
          }}
        />
      </Tab.Navigator>
  );
};

export default App;

