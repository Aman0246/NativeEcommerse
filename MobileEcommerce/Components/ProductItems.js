import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { addToCart } from "../Redux/CartReducer";
import { useDispatch } from 'react-redux';

export default function ProductItems({ item }) {
  const dispatch = useDispatch()
  const [addedToCart, setAddedToCart] = useState(false);
  const addItemToCart = (item) => {
    console.log(item)
    setAddedToCart(true);
    dispatch(addToCart(item));
    setTimeout(() => {
      setAddedToCart(false);
    }, 60000);
  };
  return (
    <Pressable style={{ marginHorizontal: 20, marginVertical: 25 }}>
      <Image
        resizeMode="contian"
        style={{ width: 150, height: 150 }}
        source={{ uri: item?.image }}
      />
      <Text numberOfLines={1} style={{ width: 150, marginTop: 10 }}>
        {item?.title}
      </Text>
      <View
        style={{
          marginTop: 5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>₹{item?.price}</Text>
        <Text style={{ color: "#FFC72C", fontWeight: "bold" }}>
          {item?.rating?.rate} ratings
        </Text>
      </View>

      <Pressable
        onPress={() => addItemToCart(item)}
        style={{
          backgroundColor: "#FFC72C",
          padding: 10,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 10,
          marginTop: 10,
        }}
      >
            {addedToCart ? (
          <View>
            <Text style={{color:'white', fontWeight:600}}>Added to Cart</Text>
          </View>
        ) : (
          <Text>Add to Cart</Text>
        )}
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
