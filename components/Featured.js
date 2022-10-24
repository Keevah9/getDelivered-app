import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import ClothingCard from './ClothingCard';
import sanityClient from '../sanity';
export default function Featured({title,id, desc,rating, featuredCategory}) {

  const [clothings, setClothings] = useState([])
  useEffect(()=>{
    sanityClient
      .fetch(
        `
      *[_type == "featured" && _id == $id]{
          ...,
          restaurants[]->{
            ...,
            dishes[]->,
            type->{
              name
            }
          },
        }[0]
      `,
        {id}
      )
      .then((data) => {
        setClothings(data?.clothings);
        console.log(data)
      });
  }, [])
  console.log(clothings)
  return (
    <View className="py-4">
      <View className="flex-row items-center justify-between">
        <Text className="text-xl font-bold">{title} </Text>
        <ArrowRightIcon color="#dc6516" />
      </View>
      <Text className="pt-1">{desc}</Text>

      <ScrollView
        horizontal
        // contentContainerStyle={{
        //   paddingHorizontal: 15,
        // }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* clothing cards */}
        <ClothingCard
          id={123}
          imgUrl="https://images.pexels.com/photos/1445454/pexels-photo-1445454.jpeg?auto=compress&cs=tinysrgb&w=300"
          title="Top clothings"
          rating={4.5}
          category="Hoods"
          address="123, Main St"
          clothes={[]}
          long={1234}
          lat={0}
          short_desc="Checking it out"
        />
        <ClothingCard
          id={123}
          imgUrl="https://images.pexels.com/photos/1445454/pexels-photo-1445454.jpeg?auto=compress&cs=tinysrgb&w=300"
          title="Top clothings"
          rating={4.5}
          category="Hoods"
          address="123, Main St"
          clothes={[]}
          long={1234}
          lat={0}
          short_desc="Checking it out"
        />
        <ClothingCard
          id={123}
          imgUrl="https://images.pexels.com/photos/1445454/pexels-photo-1445454.jpeg?auto=compress&cs=tinysrgb&w=300"
          title="Top clothings"
          rating={4.5}
          category="Hoods"
          address="123, Main St"
          clothes={[]}
          long={1234}
          lat={0}
          short_desc="Checking it out"
        />
        <ClothingCard
          id={123}
          imgUrl="https://images.pexels.com/photos/1445454/pexels-photo-1445454.jpeg?auto=compress&cs=tinysrgb&w=300"
          title="Top clothings"
          rating={4.5}
          category="Hoods"
          address="123, Main St"
          clothes={[]}
          long={1234}
          lat={0}
          short_desc="Checking it out"
        />
      </ScrollView>
    </View>
  );
}