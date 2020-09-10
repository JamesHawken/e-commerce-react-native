
import React from 'react'
import auth from '@react-native-firebase/auth'
import Api from '../api/Api'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import firestore from "@react-native-firebase/firestore"
import { FlatList } from 'react-native-gesture-handler'
import storage from '@react-native-firebase/storage';


export default class Products extends React.Component {
  state = {
    currentUser: null,
    products: []
  }
  constructor(props) {
    super(props)
    console.log(firestore().collection("categories").get().then( categories => {
      console.log(categories)
    }) )
    this.subscriber = firestore().collection("posts").onSnapshot(async docs => {
      

   // })

       
      /*firestore()
      .collection("categories").doc("cf6mzlOOmiEhQaBWKoMm").collection("office").get().then(element => {
        console.log(element)
      })*/

    
   let products = []
     docs.forEach(async doc => {
       let product = doc.data()
       product.urlCouverture = await storage()
         .ref(product.urlCouverture)
         .getDownloadURL();

       console.log(product.urlCouverture)
       products.push(product)
       this.setState({
         products
       })
     })


     console.log(this.state.products)
  })
}

componentDidMount() {
  console.log("auth", auth())
  const { currentUser } = auth()
  this.setState({ currentUser })
  //Api.nouveauPost()
}


render() {
  console.log(this.state)
  const { currentUser, products } = this.state

  const renderItem = ({ item }) => (

    <View style={styles.productCardView}>
      <Card wrapperStyle={styles.productCard}
        containerStyle={styles.productCardOuter}>
        <Card.Title>{item.titre}</Card.Title>
        <Card.Divider />
        <Card.Image source={{ uri: item.urlCouverture }}></Card.Image>
        <Text >
          {item.description}
        </Text>

        <Text >
          {item.prix}€
          </Text>
      </Card>
    </View >
  );

  return (
    <View style={styles.container}>
      {products != [] ? (
        <FlatList
          numColumns={2}
          data={this.state.products}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}

        ></FlatList>) : (

          <Button
            title="sign out"
            onPress={() => {
              console.log("se décoooo")
              auth()
                .signOut()
            }}
          ></Button>)}



    </View>
  )
}
}
const styles = StyleSheet.create({
  productCardView: {
    flex: 1,
    flexDirection: 'column',
  },

  productCard: {


  },
  container: {

    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,

  }
})