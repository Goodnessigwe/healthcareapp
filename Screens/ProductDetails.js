import React, { useState, useEffect, useContext } from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity} from "react-native";
import { SafeArea } from "../Component/SafeArea";
import { AppContext } from "../Settings/GlobalVariables";
import { getProduct } from "../Images/NetworkImages/GeneralProduct";


export function ProductDetails({route},{navigation}){
    const {productId} = route.params;
    const [product, setProduct] = useState({});
    

    useEffect(()=> {
        setProduct(getProduct(productId))
    })

    const {addItemToCart} = useContext(AppContext);

    function onAddToCart(){
        addItemToCart(product.id)
    }
    return(
        <SafeArea>
            <View style={{flex:2}} >
            <View style={{borderRadius:10}}>
                <Image source={{uri:product.imageUrl}}
                style={{width:320,height:200,resizeMode:'contain',borderRadius:10}}/> 
            </View>
            <View >
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:20,marginBottom:30}}>
                    <Text style={{fontSize:25,fontWeight:'bold',}}>{product.name}</Text> 
                    <Text style={{fontSize:20,fontWeight:'bold',color:'gray'}}>$ {product.price}</Text>
                    </View> 
                    <Text style={{fontSize:20,}}>{product.description}</Text>   
            </View>
            <TouchableOpacity onPress={onAddToCart}
            style={{backgroundColor:'#016064',borderRadius:10,height:50,justifyContent:'center',marginBottom:50,marginTop:10}}>
                <Text style={{textAlign:'center',color:'white',fontSize:20,fontWeight:'bold',}}>Add To Cart</Text>
            </TouchableOpacity>
            </View>
        </SafeArea>  
    )
}

const styles = StyleSheet.create({
    imageContainer:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
    },
    image:{
        width:'%80',
        //aspectRatio:1,
    },
    infoContainer:{
        padding:16,
    },
    name:{
        fontSize:22,
        fontWeight:'bold',
    },
    price:{
        fontSize:16,
        fontWeight:'600',
        marginBottom:8,
    },
    description:{
        fontSize:16,
        fontWeight:'bold',
        numberOfLines:3,
    }
})