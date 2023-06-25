import React,{useEffect, useState, useContext} from "react";
import { View,Image,Text,StyleSheet,FlatList,Button } from "react-native";
import { AppContext } from "../Settings/GlobalVariables";
import { SafeArea } from "../Component/SafeArea";

export function Cart({navigation}){
    const {items, getItemsCount,getTotalPrice} = useContext(AppContext);
    function Totals(){
        let [total, setTotal] = useState(0);
        
        useEffect(()=>{
            setTotal(getTotalPrice())
        })
        return(
            <SafeArea>
            <View style={{}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Total</Text>
                <Text style={{fontSize:20,fontWeight:'bold'}}>$ {total}</Text>
            </View>
            </SafeArea>
        )
    }
    function renderItem({item}){
        return(
            <>
            <View style={{flex:1}}>
                <Image style={{width:200,height:300,resizeMode:'contain'}} source={{uri:item.product.imageUrl}}/>
                <Text>{item.product.name} x {item.qty}  <Text> $ {item.totalPrice}</Text></Text>
            </View>
            </>
            
        )
    }
    return(
        <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item)=>item.product.id.toString()}
        ListFooterComponent={Totals}
        />

    )
}