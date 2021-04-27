import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView,
    FlatList} from 'react-native';
    import { ListItem } from 'react-native-elements';
    import db from '../config'
    import firebase from 'firebase'
    import MyHeader from '../components/MyHeader'
import { add } from 'react-native-reanimated';

export default class ExchangeScreen extends Component{
    constructor(){
        super();
        this.state={
            userId: firebase.auth().currentUser.email,
            itemName: "",
            description: ""
        }
    }
    createUniqueId(){
        return Math.random().toString(36).substring(7)
    }
    addItem=(itemName, description)=>{
        var userId =this.state.userId
        var randomRequestId = this.createUniqueId()
        db.collection('exchange_requests').add({
            "userId": userId,
            "itemName": itemName,
            "description": description
        })
        this.setState({
            itemName: '',
            description: ''
        })
        return Alert.alert(
            'Item ready to exchange',
            '',
            [{text: 'OK', 
              onPress: ()=>{
                  this.props.navigation.navigate('HomeScreen')
              }}]
        )
    }
    render(){
        return(
            <View style={{flex: 1}}>
                <MyHeader title="Upload Items"/>
                <KeyboardAvoidingView style={styles.keyBoardStyle}>
                    <TextInput 
                    style={styles.formTextInput}
                    placeholder={"enter item name"}
                    onChangeText={(text)=>{
                        this.setState({
                            itemName: text
                        })
                    }}
                    value={this.state.itemName}/>
                    <TextInput 
                    style={styles.descrriptionInput}
                    placeholder={"enter item description"}
                    onChangeText={(text)=>{
                        this.setState({
                            description: text
                        })
                    }}
                    value={this.state.description}/>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={()=>{this.addItem(this.state.itemName, this.state.description)}}> 
                        <Text style={{color:'#ffff', fontSize: 17, fontWeight: 'bold'}}> Add Item </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"75%",
      height:40,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:12,
      borderWidth:1,
      padding:10,
    },
    descrriptionInput:{
        width:"75%",
        height:200,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:12,
        borderWidth:1,
        marginTop:20,
        padding:10,
      },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )