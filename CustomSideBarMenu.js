import React, { Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity, ScrollView} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer'

import firebase from 'firebase';

export default class CustomSideBarMenu extends Component{
    render(){
        return(
            <View style={{flex: 1}}>
               <DrawerItems {...this.props}/>
               <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 30}}>
                   <TouchableOpacity style={{justifyContent: 'center', padding: 10, height: 30, width:'100%'}}
                   onPress = {()=>{
                       this.props.navigation.navigate('SignupLoginScreen')
                       firebase.auth().signOut()
                   }}>
                       <Text>Log Out</Text>
                   </TouchableOpacity>
               </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container : {
      flex:1
    },
    drawerItemsContainer:{
      flex:0.8
    },
    logOutContainer : {
      flex:0.25,
      justifyContent: 'flex-end',
    },
    logOutButton : {
      height:30,
      width:'100%',
      justifyContent:'center',
      padding:10,
      marginBottom: 10
    },
    logOutText:{
      fontSize: 15,
      fontWeight:'bold'
    }
  })