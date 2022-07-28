import React from "react";
import {ScrollView, Text, View} from "react-native";
import { Button, Card, Image, Icon } from "@rneui/themed";
import { NavigationContainer } from "@react-navigation/native";
const MyHome =  ({navigation}) => {
  return(
    <ScrollView> 
      <Button title="Todo " 
      onPress={() => navigation.navigate("page")} /> 
    </ScrollView> 
  )
}

export default MyHome;
