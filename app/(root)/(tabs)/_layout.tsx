import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import icons from "@/constants/icons"

const  TabIcon = ({focused,icon,title}) => (
    <View className='flex-1 flex flex-col items-center mt-3'>
        <Image source={icon} tintColor={focused? "#0061ff" : "#666876" } resizeMode='contain' className='size-8'></Image>

        <Text className={`${focused? "text-primary-300 font-rubik-medium":"text-black-200 font-rubik "} text-sm text-center mt-1 w-full `}>{title}</Text>

    </View>
)

const TabsLayout = () => {
  return (
    <Tabs 
        screenOptions={
            {
                tabBarShowLabel:false,
                tabBarStyle: {
                    backgroundColor: 'white',
                    position: 'absolute',
                    borderTopColor: '#0061FF1A',
                    borderWidth: 1,
                    minHeight: 70
                }
            }
        }
        
    >
     <Tabs.Screen
        name='index'
        options={{
            title: "Home",
            headerShown: false,
            tabBarIcon : ({focused}) =>(
                <TabIcon icon={icons.home} focused={focused} title="Home"></TabIcon>
            )

        }}
     ></Tabs.Screen>
     <Tabs.Screen
        name='explore'
        options={{
            title: "Explore",
            headerShown: false,
            tabBarIcon : ({focused}) =>(
                <TabIcon icon={icons.search} focused={focused} title="Explore"></TabIcon>
            )

        }}
     ></Tabs.Screen>

<Tabs.Screen
        name='profile'
        options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon : ({focused}) =>(
                <TabIcon icon={icons.person} focused={focused} title="Profile"></TabIcon>
            )

        }}
     ></Tabs.Screen>
    </Tabs>
  )
}

export default TabsLayout