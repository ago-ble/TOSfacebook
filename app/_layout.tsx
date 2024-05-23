import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        
        headerTitle: '', 
        
        headerTintColor: 'black',
        headerTitleAlign: 'center',
      }}>

      <Stack.Screen name="index" />
      <Stack.Screen name="introPage" />
      <Stack.Screen name="docPage" />
      <Stack.Screen name="tosPage" />
      <Stack.Screen name="TosFbBandymasSuReddd" />

      
    </Stack>
  );
}