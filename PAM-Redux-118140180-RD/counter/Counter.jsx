import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { merah, putih } from "../redux/action";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((data) => data.counter);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: `${counter}` }}>
          <TouchableOpacity style={{ backgroundColor: "#1f1b94", paddingBottom: 5, paddingTop: 5, paddingLeft: 20, paddingRight: 20 }} onPress={() => dispatch(merah(counter))}>
              <Text style={{ fontSize: 30,  }}>ganti merah</Text>
      </TouchableOpacity>
          <Text style={{ fontSize: 50, marginLeft: 20, marginRight: 20 }}>{counter}</Text>
          <TouchableOpacity style={{ backgroundColor: "#1f1b94", paddingBottom: 5, paddingTop: 5, paddingLeft: 20, paddingRight: 20 }} onPress={() => dispatch(putih(counter))}>
              <Text style={{ fontSize: 30, }}>ganti putih</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
