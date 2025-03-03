import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';
import { login } from '@/lib/appwrite';
import  { useGlobalContext } from '@/lib/global-provider';
import { Redirect } from 'expo-router';

const signIn = () => {

  const{refetch, loading, isLogged} = useGlobalContext();

  if(!loading && isLogged) return <Redirect href='/'></Redirect>

    const  handleLogin = async() =>{
      const result = await login();

      if(result){
        refetch();
      }
      else{
        Alert.alert('Error',"Failed to login")
      }
    }
     
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <Image source={images.onboarding} className='w-full h-4/6' resizeMode='contain'></Image>
         
            <View className='px-12'>
                <Text className=' text-center text-sm font-rubik-light mt-12'>
                    Welcome to Nawalstate
                </Text>

                <Text className='text-center text-3xl font-rubik-bold mt-2'>
                    Let's Get You Closer to {'\n'} <Text className='text-primary-300'>
                       Your Ideal Home
                    </Text>
                </Text>

               <TouchableOpacity onPress={handleLogin} className='bg-white shadow-lg border-gray-50 p-4 rounded-xl w-full mt-6'>
                    <View className='flex flex-row justify-center items-center gap-4'>
                    <Image source={icons.google} className='w-6 h-6' resizeMode='contain'></Image>

                    <Text className='font-rubik-medium text-lg'>Continue with Google</Text>
                    </View>
               </TouchableOpacity>
            </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default signIn;