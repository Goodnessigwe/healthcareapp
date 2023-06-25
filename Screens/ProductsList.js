import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { getProducts } from "../Images/NetworkImages/GeneralProduct";
import { Product } from "../Component/ProductStyle";




export function ProductsList({navigation}) { 
    const [products, setProducts] = useState([]);
    function renderProduct ({item: product}){
        return(
            <Product
            {... product}
            onPress={() => {navigation.navigate('Product Details',{productId : product.id})}}   
            />
        )

    }
    useEffect(() => {
        setProducts(getProducts())

    })

    return(
        <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={(item) => item.id.toString()}
        data={products}
        renderItem={renderProduct}
        />
    )
}

const styles = StyleSheet.create({
    productsList:{
        backgroundColor:'#eeeeee',
    },
    productsListContainer:{
        backgroundColor:'#eeeeee',
        paddingVertical:8,
       // marginHorizontal:8,
    }
})