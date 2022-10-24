import { View, Text, Image, TextInput, ScrollView, FlatList } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import Featured from "../components/Featured";
import sanityClient from "../sanity";
import CategoryCard from "../components/CategoryCard";

export default function HomeScreen() {
  // customizing your home
  const navigation = useNavigation();
  // layout effect
//   when Ui loads
  useLayoutEffect(() => {
    // changing items
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const [featuredCategories, setFeaturedCategories] = useState([])
// when component loads
  useEffect(()=>{
    sanityClient.fetch(`
    *[_type == "featured"]{
      ...,
    restaurants[]->{
        ...,
        dishes[]->
    }
    }`)
  .then(data => {
    setFeaturedCategories(data)
    
})
  },[])
  // console.log(featuredCategories)
  return (
    // to make sure the content is not in the danger zone
    <SafeAreaView>
      <View className=" w-full h-full  bg-black  p-3">
        <View className="flex-row  items-center   flex">
          <Image
            source={{
              uri: "https://images.pexels.com/photos/13866617/pexels-photo-13866617.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            }}
            className="h-16 w-16 p-4 bg-gray-300 rounded-xl"
          />
          <View className="px-2 flex-1">
            <Text className="text-gray-300 text-xs">Deliver NOW</Text>
            <Text className="text-xl font-bold">Current Location</Text>
          </View>

          <View className="flex-row items-center mt-4">
            <UserIcon size={25} color="#dc6f09" />
          </View>
        </View>
        {/* search box */}
        <View className="flex-row justify-center items-center space-x-2 mt-3 mx-2">
          <View className="flex-row flex-1 items-center  rounded-xl  p-3 space-x-2">
            <MagnifyingGlassIcon size={20} color="#d3cfc3" />
            <TextInput
              placeholder="Search your favourite"
              keyboardType="default"
              className="flex-1"
            />
            <AdjustmentsHorizontalIcon size={25} color="#d3cfc3" />
          </View>
        </View>

        {/* body */}
        {/* makes the screen */}
        <ScrollView className="">
          {/* categories */}
          <Categories />

          {/* featured rows */}
          {/* featured */}
          {featuredCategories?.map(category=> (
            <Featured
              title={category.name}
              desc={category.short_description}
              id={category._id}
              rating={category.rating}
              key={category._id}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
