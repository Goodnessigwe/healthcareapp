import React,{useContext} from "react";
import {View, Text,} from "react-native"
import { AppContext } from "../Settings/GlobalVariables";

export function CartIcon({navigation}){
    const {getItemsCount} = useContext(AppContext)

    return(
        <View style={{backgroundColor:'#016064',marginHorizontal:8,paddingBottom:8,marginBottom:50,height:42,width:80,borderRadius:30,alignItems:'center',justifyContent:'center',marginTop:50}}>
            <Text style={{color:'white',fontWeight:'bold',fontSize:18,}} onPress={() => {navigation.navigate('Cart')}}>
                Cart({getItemsCount()})
            </Text>
        </View>
    )
}