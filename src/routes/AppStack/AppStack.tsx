import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "../../screens/auth/Onboarding";



const AppStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      //  screenOptions={{ headerShown: false }
      screenOptions={{
        headerShown: false,

        cardStyleInterpolator: ({ current: { progress } }) => {
          return {
            cardStyle: {
              opacity: progress,
            },
          };
        },
      }}
    >
           <Stack.Screen name={"OnBoarding"} component={OnboardingScreen} />






     

      








    </Stack.Navigator>
  );
};
export default AppStack;
