import React, { useState } from "react";
import {FlatList, Text, View} from "react-native";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";

export default function Todo () {

  const [data, setData] = useState([])

  const SubmitHandler = (value) => {
    setData((prevTodo) => {
        return [ 
            {
              value: value,
              key: Math.random().toString() 
            },
            ...prevTodo
        ]
    })
  }

  const deleteItem = (key) => {
    setData((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key )
    })
  }

  return (
    <View>
      <Text> Todo App </Text>
      <AddTodo  SubmitHandler = {SubmitHandler}/>
      <FlatList 
          data= {data}
          renderItem = {({item}) => <ListTodo item = {item} deleteItem= {deleteItem} /> }
          />  
    </View> 
  )
}