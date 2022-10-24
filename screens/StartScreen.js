import { View, Text, Image, Button, Alert } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
  

export default function StartScreen() {
  // customizing your home
  const navigation = useNavigation();
  // layout effect
  useLayoutEffect(() => {
    // changing items
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <View className="bg-[#dc6516] w-full mx-auto items-center h-full">
        <Image
          source={{
            uri: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
          className="h-4/6 w-full  bg-gray-300 rounded-b-full"
        />
        <Text className="pt-8 text-xl">Spend your time </Text>
        <Text className="pt-2 pb-6 font-bold text-4xl">Being beautiful</Text>
        <Button
          onPress={()=>Alert.alert('Get started')}
          title="Start"
          color="white"
          className="px-8 my-4 w-full flex-1"
          accessibilityLabel="Get started"
        />
        <Text className='pt-2'>Privacy and Policy</Text>
      </View>
    </SafeAreaView>
  );
}