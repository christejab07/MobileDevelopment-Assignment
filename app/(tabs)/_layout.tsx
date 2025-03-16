import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="home-sharp" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="debug"
        options={{
          title: "Debug",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="information-circle" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
