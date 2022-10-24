import { ScrollView,View, Text } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import Testing from './Featured';

export default function Categories() {
  return (
    <View>
      <Text className="text-xl py-4 font-bold">Collections</Text>
      <ScrollView
        contentContainerStyles={{
          paddingTop: 10,
          paddingHorizontal: 15,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <CategoryCard
          imgUrl="https://images.pexels.com/photos/1445454/pexels-photo-1445454.jpeg?auto=compress&cs=tinysrgb&w=300"
          title="Jackets"
        />
        <CategoryCard
          imgUrl="https://images.pexels.com/photos/1129019/pexels-photo-1129019.jpeg?auto=compress&cs=tinysrgb&w=300"
          title="T-Shirts"
        />
        <CategoryCard
          imgUrl="https://images.pexels.com/photos/7588023/pexels-photo-7588023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Bottoms"
        />
        <CategoryCard
          imgUrl="https://images.pexels.com/photos/10910449/pexels-photo-10910449.jpeg?auto=compress&cs=tinysrgb&w=300"
          title="Shorts"
        />
        <CategoryCard
          imgUrl="https://images.pexels.com/photos/6127687/pexels-photo-6127687.jpeg?auto=compress&cs=tinysrgb&w=300"
          title="Accessories"
        />
        {/* <CategoryCard
          imgUrl="https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg?auto=compress&cs=tinysrgb&w=300"
          title="Bags"
        /> */}
        {/* <CategoryCard
          imgUrl="https://images.pexels.com/photos/2155319/pexels-photo-2155319.jpeg?auto=compress&cs=tinysrgb&w=300"
          title="Watches"
        />
        <CategoryCard
          imgUrl="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Shoes"
        /> */}
        {/* <Testing/> */}
        {/* <Text>Categories</Text> */}
      </ScrollView>
    </View>
  );
}