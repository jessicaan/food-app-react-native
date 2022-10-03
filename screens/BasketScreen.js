import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';
import Currency from 'react-currency-formatter';

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsBasket] = useState([]);
  const dispatch = useDispatch();
  const basketTotal = useSelector(selectBasketTotal);

  // Agrupando os itens no carrinho \/
  useMemo(() => {
    const groupedItems = items.reduce((results, item) =>{
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsBasket(groupedItems);
  }, [items]);


  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center"> Carrinho </Text>
            <Text className="text-center text-gray-400">
            {restaurant.title}
              </Text>
          </View>

          <TouchableOpacity
          onPress={navigation.goBack}
          className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
          <XCircleIcon color="#00CCBB" height={50} width={50}/>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
          source={{
            uri: "http://links.papareact.com/wru"
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1"> Entrega em 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]"> Trocar </Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
              <Text className="text-[#00CCBB]">{items.length} x</Text>
              <Image
              source={{ uri: urlFor(items[0]?.image).url() }}
              className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>

              <Text className="text-gray-600">
                <Currency quantity={items[0]?.price} currency="BRL"/>
              </Text>

              <TouchableOpacity>
                <Text
                className="text-[#00CCBB] text-xs"
                onPress={() => dispatch(removeFromBasket({id : key}))}
                >
                  Remover
                </Text>
              </TouchableOpacity>
            </View>

          ))}
        </ScrollView>

            {/* Subtotal do Carrinho */}
        <View className="p-5 mt-5 bg-white space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={basketTotal} currency="BRL" />
            </Text>
            </View>


            {/* Taxa de Entrega - mock */}
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Taxa de Entrega</Text>
            <Text className="text-gray-400">
              <Currency quantity={5.99} currency="BRL" />
            </Text>
          </View>

            {/* Total  */}
          <View className="flex-row justify-between">
            <Text>Total do Pedido</Text>
            <Text className="font-extrabold">
              <Currency quantity={basketTotal + 5.99} currency="BRL" />
            </Text>
          </View>

          <TouchableOpacity
          onPress={() => navigation.navigate("PreparingOrderScreen")}
          className="rounded-lg bg-[#00CCBB] p-4 m-6" >
            <Text className="text-center text-white text-lg font-bold">Fazer pedido</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen

// Parei o video em 2:53:07
