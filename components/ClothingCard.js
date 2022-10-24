import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon,} from "react-native-heroicons/solid";
const ClothingCard = ({id, imgUrl, title, rating, category, address, clothes,long,lat,short_desc}) => {
  return (
    <TouchableOpacity className="bg-[#dc6516] rounded-2xl mr-3 shadow-sm">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-40 w-64 rounded-2xl"
      />
      <View className="px-3 py-3">
        <Text className="font-bold text-lg pt-2">yo</Text>
        <View className="flex-row items-center space-x-2">
          <StarIcon color="yellow" opacity={0.5} />
          <Text>
            <Text className="text-yellow-400">{rating} </Text>
            <Text className="text-lg  font-bold">- {category}</Text>
          </Text>
          <View>{/* <LocationMarkerIcon /> */}</View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ClothingCard