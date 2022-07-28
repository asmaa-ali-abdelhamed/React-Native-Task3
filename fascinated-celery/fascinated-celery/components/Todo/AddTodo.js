// import { Button } from "@rneui/themed";
import React, { useState } from "react";
import {Text, TextInput, View, Button, StyleSheet, Style} from "react-native";

export default function AddTodo ({SubmitHandler}) {

  const[value, setValue] = useState("");
  const onChangeValue = (text) => {
    setValue(text)
  }

  return (
    <View>
      <TextInput placeholder="Add Text ..." 
      onChangeText={onChangeValue}
      />
      <Button title="Add"  onPress = {() => SubmitHandler(value)}  style={{background:'white'}} />
    </View>
  )
}
const styles = StyleSheet.create({
});