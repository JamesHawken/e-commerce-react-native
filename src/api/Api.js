import firestore from '@react-native-firebase/firestore';



export default class Api {
static  async nouveauPost() {
    const postsCollection = await firestore().collection('posts').get();
    console.log(postsCollection)
}

}