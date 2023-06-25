import React from "react";
import {View,Text,FlatList,StyleSheet,TouchableOpacity,Image} from "react-native";

const bodyPartsData = [
    {
        id: 1,
        imageUrl: 'https://media.istockphoto.com/id/1141195857/photo/human-eye-close-up-with-a-multi-colored-iris.jpg?s=612x612&w=0&k=20&c=1LI5M-TXi4pq14wZL8VaTt_4MklywwvWatMURMLx63Q=',
        title: 'Eye',

    },
    {
        id: 2,
        imageUrl: 'https://media.istockphoto.com/id/1358922261/photo/human-heart-anatomy.jpg?s=612x612&w=0&k=20&c=-I2P-KBxfY-C18Atiq1oCXXIqhZwK83TGvSXMffs7FA=',
        title: 'Heart',

    },
    {
        id: 3,
        imageUrl: 'https://media.istockphoto.com/id/1404145480/photo/cardiologist-doctor-examine-patient-heart-functions-and-blood-vessel-on-virtual-interface.jpg?s=612x612&w=0&k=20&c=XVV0i6cPcq-qMYvq66cPihgkWlsjExpPmdsoXBHnLGI=',
        title: 'Heart',

    },
    {
        id: 4,
        imageUrl: 'https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20210118115944/ri/673/picture/2021/1/shutterstock_1576424071.jpg',
        title: 'Heart',

    },
    {
        id: 5,
        imageUrl: 'https://media.istockphoto.com/id/826766860/photo/fat-male-stomach.jpg?s=612x612&w=0&k=20&c=f_CCQ0nseLg2ZEVBtCbfxB4Ov-NTDxnBowJ7bm6pRZA=',
        title: 'Obesity',

    },
    {
        id: 6,
        imageUrl: 'https://images.unsplash.com/photo-1607326957431-29d25d2b386f',
        title: 'Dahlia',

    },
];

export function BodyPartsDescription(){
    return(
        <View>
            <FlatList
              nestedScrollEnabled={true} 
              data={bodyPartsData}
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
                //horizontal={true}
                showsVerticalScrollIndicator={false}
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
        width:300,
        height:150,
        borderRadius:10,
        borderWidth:2,
        borderColor:'#016064',
        resizeMode:'contain',
        flex:1,
        alignItems:'center',
        marginTop:10,
        marginHorizontal:5
       },
       title:{
        fontWeight:'bold',
        textAlign:'center',
       },
       separator:{
        backgroundColor:'#FBFCFA',
      },
   })