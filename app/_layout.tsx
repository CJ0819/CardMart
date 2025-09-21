import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false, title: "Back" }} />
    <Stack.Screen name="topdeals" options={{
      headerTintColor: 'white', headerShown: true, title: "Top deals", headerStyle: {
        backgroundColor: "green",
      },
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
      },
    }} />
    <Stack.Screen name="populartoday" options={{  headerTintColor: 'white', headerShown: true, title: "Popular Today",
      headerStyle: {
        backgroundColor: "green",
      },
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
      },
    }} />
    <Stack.Screen name="new" options={{ headerTintColor: 'white', headerShown: true, title: "New",
       headerStyle: {
        backgroundColor: "green",
      },
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
      },
     }} />
     <Stack.Screen name="Help" options={{ headerTintColor: 'white', headerShown: true, title: "Help",
       headerStyle: {
        backgroundColor: "green",
      },
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
      },
     }}/>
     <Stack.Screen name="Settings" options={{ headerTintColor: 'white', headerShown: true, title: "Settings",
       headerStyle: {
        backgroundColor: "green",
      },
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
      },
     }}/>
     <Stack.Screen name="Legal" options={{ headerTintColor: 'white', headerShown: true, title: "Legal Information",
       headerStyle: {
        backgroundColor: "green",
      },
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
      },
     }}/>
     <Stack.Screen name="about" options={{ headerTintColor: 'white', headerShown: true, title: "About",
       headerStyle: {
        backgroundColor: "green",
      },
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
      },
     }}/>
     <Stack.Screen name="privacy" options={{ headerTintColor: 'white', headerShown: true, title: "Privacy Policy",
       headerStyle: {
        backgroundColor: "green",
      },
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
      },
     }}/>
    <Stack.Screen name="terms" options={{ headerTintColor: 'white', headerShown: true, title: "Terms and Conditions",
       headerStyle: {
        backgroundColor: "green",
      },
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
      },
     }}/>
         <Stack.Screen name="payment" options={{ headerTintColor: 'white', headerShown: true, title: "Payment",
       headerStyle: {
        backgroundColor: "green",
      },
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
      },
     }}/>
  </Stack>
}
