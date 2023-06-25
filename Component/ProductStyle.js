import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Dimensions, Image, TouchableHighlight,TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCartShopping, faPlus} from "@fortawesome/free-solid-svg-icons";


const { width } = Dimensions.get("screen");
const cardWidth = width/2 - 20

export function Product({name, price, imageUrl, onPress,}){
    return(
        <SafeAreaView style={styles.container}>
           <View style={styles.header}> 
            </View> 
            <TouchableOpacity 
            style={{backgroundColor:'white'}}
            activeOpacity={0.9}
            onPress={onPress} >
            <View style={styles.card}>
                <View style={{alignItems:'center',top:-40}}>
                    <Image style={{height:120,width:'90%',resizeMode:'contain',borderRadius:60}} source={{uri:imageUrl}}/>
                </View>
                <View style={{marginHorizontal:20}}>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>{name}</Text>
                </View>
                <View style={{marginTop:10,marginHorizontal:20,flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:18, fontWeight:'bold'}}>$ {price}</Text>
                    <View style={{height:30,width:30,borderRadius:20,justifyContent:'center',alignItems:'center',backgroundColor:'#016064'}}>
                    <FontAwesomeIcon icon={faPlus} size={20} color="#fff"/>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:Platform.OS == 'andriod'? StatusBar.currentHeight : 0,
        flex:1,
        backgroundColor:'white',
        //marginTop:50,
    },
    header:{
       // marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        //backgroundColor:'#c9cbb3',
    },
    card:{
        height:220,
        width:cardWidth,
        marginHorizontal:10,
        marginBottom:20,
        marginTop:50,
        borderRadius:15,
        elevation:13,
        backgroundColor:'white',
    },
})