import { View, Text, Image , TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity className='relative items-center mr-3 item'>
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-16 w-16 p-4 bg-gray-300 rounded-full"
        // style={{width:50, height:50}
      />
      <Text className='py-2'>{title}</Text>
    </TouchableOpacity>
  );
}

export default CategoryCard

// touchableopacity simply means hovering