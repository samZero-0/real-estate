import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import icons from '@/constants/icons'
import images from '@/constants/images'
import { useGlobalContext } from '@/lib/global-provider'
import { logout } from '@/lib/appwrite'

const profile = () => {

  const { user, refetch} = useGlobalContext();
  const handleLogout = async() =>{
      const res = await logout();

      if(res){
        Alert.alert("Success")
        refetch();
      }
      else{
        Alert.alert("Error occured while logging out")
      }
  }

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName='pb-32 px-7'>

          <View className='flex flex-row items-center justify-between mt-3'>
            <Text className='font-rubik-bold text-xl'>
              Profile
            </Text>
            <Image source={icons.bell} className='size-6'></Image>
          </View>

          <View className='flex flex-row justify-center mt-6'>
            <View>
                <Image source={{uri:user?.avatar}} className='size-44 relative rounded-full'></Image>

                <TouchableOpacity className='absolute bottom-5 right-2'><Image source={icons.edit} className='size-9'></Image></TouchableOpacity>
            </View>
           
          </View>
          <View className='flex justify-center flex-row mt-3'> <Text className='font-rubik-extrabold text-2xl'>{user?.name}</Text></View>

          <View className='border-t mt-10 border-gray-300'></View>

          <View className='flex flex-col gap-4 mt-6'>

            <View className='flex flex-row justify-between'>
            <View className='flex items-center flex-row gap-3'>
              <Image source={icons.calendar} className='size-7'></Image>
              <Text className='font-rubik-bold text-lg'>My Bookings</Text>
              </View>
              <Image source={icons.rightArrow} className='size-7'></Image>

            </View>

            <View className='flex flex-row justify-between'>
            <View className='flex items-center flex-row gap-3'>
              <Image source={icons.wallet} className='size-7'></Image>
              <Text className='font-rubik-bold text-lg'>Payments</Text>
              </View>
              <Image source={icons.rightArrow} className='size-7'></Image>

            </View>
          </View>

          <View className='border-t mt-11 border-gray-300'></View>

<View className='flex flex-col gap-6 mt-6'>

  <View className='flex flex-row justify-between'>
  <View className='flex items-center flex-row gap-3'>
    <Image source={icons.person} className='size-7'></Image>
    <Text className='font-rubik-bold text-lg'>Profile</Text>
    </View>
    <Image source={icons.rightArrow} className='size-7'></Image>

  </View>

  <View className='flex flex-row justify-between'>
  <View className='flex items-center flex-row gap-3'>
    <Image source={icons.bell} className='size-7'></Image>
    <Text className='font-rubik-bold text-lg'>Notification</Text>
    </View>
    <Image source={icons.rightArrow} className='size-7'></Image>

  </View>

  <View className='flex flex-row justify-between'>
  <View className='flex items-center flex-row gap-3'>
    <Image source={icons.shield} className='size-7'></Image>
    <Text className='font-rubik-bold text-lg'>Security</Text>
    </View>
    <Image source={icons.rightArrow} className='size-7'></Image>

  </View>

  <View className='flex flex-row justify-between'>
  <View className='flex items-center flex-row gap-3'>
    <Image source={icons.language} className='size-7'></Image>
    <Text className='font-rubik-bold text-lg'>Language</Text>
    </View>
    <Image source={icons.rightArrow} className='size-7'></Image>

  </View>

  <View className='flex flex-row justify-between'>
  <View className='flex items-center flex-row gap-3'>
    <Image source={icons.info} className='size-7'></Image>
    <Text className='font-rubik-bold text-lg'>Help Center</Text>
    </View>
    <Image source={icons.rightArrow} className='size-7'></Image>

  </View>

    
  <View className='flex flex-row justify-between'>
  <View className='flex items-center flex-row gap-3'>
    <Image source={icons.people} className='size-7'></Image>
    <Text className='font-rubik-bold text-lg'>Invite Friends</Text>
    </View>
    <Image source={icons.rightArrow} className='size-7'></Image>

  </View>

  <TouchableOpacity onPress={handleLogout} className='mt-4'>
  <View className='flex flex-row justify-between'>
  <View className='flex items-center flex-row gap-3'>
    <Image source={icons.logout} className='size-7'></Image>
    <Text className='font-rubik-bold text-lg'>Logout</Text>
    </View>
    {/* <Image source={icons.rightArrow} className='size-7'></Image> */}

  </View>
  </TouchableOpacity>


</View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default profile