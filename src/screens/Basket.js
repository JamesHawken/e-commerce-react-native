
import React from 'react'
import auth from '@react-native-firebase/auth'

import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import firestore from "@react-native-firebase/firestore"
import { FlatList } from 'react-native-gesture-handler'
import storage from '@react-native-firebase/storage';


export default class Basket extends React.Component {
  state = {
    
  }
  constructor(props) {
    super(props)


  }

  componentDidMount() {
    
  }


  render() {
   

    return (
      <View style={styles.container}>
       <Text>Hello</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
 
})