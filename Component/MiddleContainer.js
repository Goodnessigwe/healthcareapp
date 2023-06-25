import React from "react";
import {View,Text,FlatList,StyleSheet,TouchableOpacity,Image} from "react-native";

 const data = [
    {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1607326957431-29d25d2b386f',
        title: 'Dahlia',
      },
      {
        id: 2,
        title: 'Fruit2',
        imageUrl: 'https://media.gettyimages.com/id/139496979/photo/assortment-of-fruits-and-vegetables-background.jpg?s=612x612&w=0&k=20&c=Tns4-67GV8LoJoN9YYwRM9PhpYKQ4kfbWg70_NJc9L8=',
      },
    
    {
      id: 3,
      title: 'Fruit3',
      imageUrl: 'https://media.gettyimages.com/id/139496979/photo/assortment-of-fruits-and-vegetables-background.jpg?s=612x612&w=0&k=20&c=Tns4-67GV8LoJoN9YYwRM9PhpYKQ4kfbWg70_NJc9L8=',
    },
    {
        id: 4,
        title: 'Fruit4',
        imageUrl: 'https://media.gettyimages.com/id/139496979/photo/assortment-of-fruits-and-vegetables-background.jpg?s=612x612&w=0&k=20&c=Tns4-67GV8LoJoN9YYwRM9PhpYKQ4kfbWg70_NJc9L8=',
      },
      {
        id: 5,
        title: 'Fruit5',
        imageUrl: 'https://media.gettyimages.com/id/139496979/photo/assortment-of-fruits-and-vegetables-background.jpg?s=612x612&w=0&k=20&c=Tns4-67GV8LoJoN9YYwRM9PhpYKQ4kfbWg70_NJc9L8=',
      },
      {
        id: 6,
        title: 'Fruit6',
        imageUrl: 'https://media.gettyimages.com/id/139496979/photo/assortment-of-fruits-and-vegetables-background.jpg?s=612x612&w=0&k=20&c=Tns4-67GV8LoJoN9YYwRM9PhpYKQ4kfbWg70_NJc9L8=',
      },
  ];
   export function MiddleContainerScroll(){
    return(
        <View>
            <FlatList
              nestedScrollEnabled={true} 
              data={data}
              renderItem={({item})=>(
             <View style={styles.imageAndTitleWrapper}>
              <TouchableOpacity>
              <Image
              source={{uri: item.imageUrl}}
              style={styles.carouselImage}
              />
              <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>  
            </View>
            )}
                keyExtractor={(item)=>item.id.toString()}
                ItemSeparatorComponent={()=><View style={styles.separator}></View>}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
           />
       </View>
    )

   }

   const styles = StyleSheet.create({
    imageAndTitleWrapper:{
        width:'100%',
        marginTop:5,
        marginLeft:5,
        marginRight:5,
        marginBottom:5,
        flex:1,
        alignItems:'center',
        justifyContent:'space-evenly',
        borderRadius:15,
        elevation:13,
        backgroundColor:'white',
        
    
       },
       carouselImage:{
        width:280,
        height:140,
        borderRadius:10,
        borderWidth:2,
        borderColor:'#016064',
        resizeMode:'contain',
        flex:1,
        alignItems:'center',
        marginTop:10,
        marginHorizontal:12
       },
       title:{
        fontWeight:'bold',
        textAlign:'center',
       },
       separator:{
        backgroundColor:'#FBFCFA',
      },
   })
  //  <View style={styles.middleHorizontalScrollWrapper}>
  //           <MiddleContainerScroll/>
  //       </View>
  //      <View style={styles.listViewWrapper}>
  //         <BodyPartsDescription/>
  //      </View>