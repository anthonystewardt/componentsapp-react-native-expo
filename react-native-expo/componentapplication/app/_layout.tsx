import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "./global.css";
import { useColorScheme } from '@/hooks/useColorScheme';
import { Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useThemeColor } from '@/hooks/useThemeColor';
import ThemedView from '@/presentation/shared/ThemedView';
import ThemedText from '@/presentation/shared/ThemedText';
import { allRoutes } from '@/constants/Routes';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const background = useThemeColor({ light: "", dark: "" }, 'background');
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView
      style={{ flex: 1, backgroundColor: background }}
    >
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme} >
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: background,
            },
            headerStyle: {
              backgroundColor: background,
            }
          }}
        >
          <Stack.Screen name="index" />
          {
            allRoutes.map((route, index) => (
              <Stack.Screen
                key={route.name}
                name={route.name}
                options={{
                  title: route.title,
                }}
              />
            ))
          }
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}