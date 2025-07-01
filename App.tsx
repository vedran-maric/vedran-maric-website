import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import AboutMeScreen from './AboutMeScreen';
import PortfolioScreen from './PortfolioScreen';
import ProjectScreen from './ProjectScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { IBMPlexMono_400Regular, IBMPlexMono_500Medium, IBMPlexMono_100Thin } from '@expo-google-fonts/ibm-plex-mono';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { Inter_400Regular, Inter_700Bold, Inter_300Light } from '@expo-google-fonts/inter';
import { createClient } from "@supabase/supabase-js";




const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export type RootStackParamList = {
  ProjectScreen: { projectId: number };
  // Dodaj i druge ekrane ako ih imaš
};


export default function App() {
  const [fontsLoaded] = useFonts({
  IBMPlexMono_400Regular,
  IBMPlexMono_500Medium,
  IBMPlexMono_100Thin,
  Inter_400Regular,
  Inter_700Bold,
  Inter_300Light,
  });

    useEffect(() => {
    if (!fontsLoaded) {
      SplashScreen.hideAsync();
    }
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: 'Home', headerShown: false}}/>
        <Stack.Screen name="AboutMeScreen" component={AboutMeScreen} options={{title: 'About me', headerShown: false}} />
        <Stack.Screen name="PortfolioScreen" component={PortfolioScreen} options={{title: 'Portfolio', headerShown: false}} />
        <Stack.Screen name="ProjectScreen" component={ProjectScreen} options={{title: 'Project', headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

  text: {
    fontFamily: "IBMPlexMono_400Regular",
  },
});
