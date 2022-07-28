import { Card } from "@rneui/themed";
import React from "react";
import { Button, Text } from "react-native";


export default function ListTodo({item, deleteItem}) {
  return(
    <Card>
      <Text>  {item.value}  </Text>
        <Button title="Delete" onPress={() => deleteItem(item.key)}  />
    </Card>
  )
}