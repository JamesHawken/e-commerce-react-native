// Main.js
import React from 'react'
import auth from '@react-native-firebase/auth'
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native'
export default class Main extends React.Component {
  state = { currentUser: null }
  componentDidMount() {
    console.log("auth", auth())
    const { currentUser } = auth()
    this.setState({ currentUser })
  }
  render() {
    const { currentUser } = this.state
    return (
      <View style={styles.container}>
        <Text>
          Bienvenue {currentUser && currentUser.email}!
        </Text>

        <Button
          title="sign out"
          onPress={() => {
            console.log("se décoooo")
            auth()
              .signOut()
          }}
        ></Button>

        <Button
          title="NouveauPost"
          onPress={() => {
            this.props.navigation.navigate('Products')
          }}
        ></Button>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})