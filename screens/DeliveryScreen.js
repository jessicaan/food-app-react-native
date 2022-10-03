import { View, Text, SafeAreaView, TouchableOpacity, Image, Touchable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { XIcon } from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <XIcon color="white" size={30} />
          </TouchableOpacity>

          <TouchableOpacity>
          <Text className="font-light-120 text-white text-md">Preciso de ajuda!</Text>
          </TouchableOpacity>
       </View>

        <View className="bg-white mx-2 my-2 rounded-md p-5 z-50 shadow-md">
         <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-md text-gray-400"> Tempo aproximado de Entrega </Text>
            <Text className="text-4xl font-bold"> 45-55 Minutos </Text>
          </View>
          <Image
          source={{
            uri: "https://links.papareact.com/fls"
          }}
          className="h-20 w-20"
          />
          </View>

          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />

          <Text className="mt-3 text-gray-500">
            Seu pedido do {restaurant.title} está sendo preparado
          </Text>
        </View>
      </SafeAreaView>


     <MapView
     initialRegion={{
      latitude: restaurant.lat,
      longitude: restaurant.long,

      // Escala de zoom
      latitudeDelta: 0.005,
      longitudeDelta: 0.005
     }
    }
    className="-mt-10 z-0 flex-1"
    mapType="mutedStandard"
     >
      <Marker
       coordinate={{
        latitude: restaurant.lat,
        longitude: restaurant.long,
       }}
       title={restaurant.title}
       description={restaurant.short_description}
       identifier="origin"
       pinColor='#00CCBB'
      />
     </MapView>

    <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
      <Image
      source={{
        uri: "https://links.papareact.com/wru"
      }}
      className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
      />
      <View className="flex-1">
        <Text className="text-md">
          João da Silva
        </Text>
        <Text className="text-gray-400 text-xs">
          Seu entregador
        </Text>
      </View>
      <TouchableOpacity>
        <Text className="text-[#00CCBB] text-md mr-5 font-bold"> Entrar em Contato </Text>
      </TouchableOpacity>

    </SafeAreaView>


    </View>
  );
}

export default DeliveryScreen;
