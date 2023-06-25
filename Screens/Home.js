 import { useCallback, useState, useEffect } from "react";
 import { 
   View, 
   Text, 
   StyleSheet,
   TouchableOpacity,
   TextInput,
   Image,
   ScrollView,
   SafeAreaView
  } from "react-native";
 import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
 import { faFilePrescription,faStore ,faEnvelopeOpenText,faFilterCircleDollar,faLocationDot,faCartPlus,faMagnifyingGlass 
} from "@fortawesome/free-solid-svg-icons";
 import { faUser } from "@fortawesome/free-regular-svg-icons"; 
 import * as SplashScreen from 'expo-splash-screen';
 import * as Font from 'expo-font';
 import {Pacifico_400Regular} from '@expo-google-fonts/pacifico';
 import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
 import { Login } from "../Screens/Login";
 import { Signup } from "../Screens/Signup";
 import Ionicons from "react-native-vector-icons/Ionicons";
 import { Carousel } from "../Component/MyCarousel";
 //import {Sacramento_400Regular } from '@expo-google-fonts/sacramento'
 //import { Login } from "./Screens/Login";
 //import { Signup } from "./Screens/Signup";

  const Tab = createBottomTabNavigator()
 
 export function Home ({navigation}) {
    const [appIsReady, setAppIsReady] = useState(false);
    useEffect(() => {
     async function prepare() {
       try {
         await Font.loadAsync({Pacifico_400Regular});
         await new Promise(resolve => setTimeout(resolve, 2000));
       } catch (e) {
         console.warn(e);
       } finally {
         setAppIsReady(true);
       }
     }

     prepare();
   }, []);

   const onLayoutRootView = useCallback(async () => {
     if (appIsReady) {
       await SplashScreen.hideAsync();
     }
   }, [appIsReady]);

   if (!appIsReady) {
     return null;
   }

   return(
    
     <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerIcons}>
          <View style={{flexDirection:'row',marginLeft:5,alignItems:'center'}}>
              <FontAwesomeIcon icon={faFilePrescription} size={30} color="#016064" />
              <Text style={[styles.headerText,{marginLeft:5}]}>Healthcare App</Text>
          </View>
          <View style={{flexDirection:'row',marginRight:5,alignItems:'center'}}>
          <View style={{marginRight:40}}>
          <TouchableOpacity onPress={() => navigation.navigate("Products")}>
             <FontAwesomeIcon icon={faCartPlus} size={30} color="#016064"/>
          </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
          <FontAwesomeIcon icon={faUser} size={30} color="#016064"/>
          </TouchableOpacity>
          </View>
          </View>
        </View>
        
        <View style={styles.btnAndSearchViewWrapper}>
          <Carousel/>
        </View>
        
        <View style={styles.bottomScrollWrapper}>
          <ScrollView>
            <View style={{height:50,flexDirection:'row',justifyContent:'space-evenly'}}>
              <View style={{alignItems:'center'}}>
              <TouchableOpacity onPress={() => navigation.navigate("Products")}>
              <FontAwesomeIcon icon={faStore} size={30} color="#016064"/>
              </TouchableOpacity>
              <Text>Store</Text>
             </View>
             <View>
              <FontAwesomeIcon icon={faEnvelopeOpenText} size={30} color="#016064"/>
              <Text>Email</Text>
              </View>
              <View>
              <FontAwesomeIcon icon={faFilterCircleDollar} size={30} color="#016064"/>
              <Text>Dollar</Text>
              </View>
              <View>
              <TouchableOpacity onPress={() => navigation.navigate("CreateProfile")}>
              <FontAwesomeIcon icon={faLocationDot} size={30} color="#016064"/>
              </TouchableOpacity>
              <Text>Location</Text>
              </View>
            </View>
            <View style={styles.searchView}>
              <FontAwesomeIcon icon={faMagnifyingGlass} size={30} color='#808080' />
              <TextInput
                placeholder="fruit supplement for........"
              style={{height:40,width:'80%',marginLeft:5,fontSize:16,fontWeight:'bold'}}
              />
          </View>
          <View style={styles.middleContainerWrapper}>

            <TouchableOpacity style={styles.middleContainerView} onPress={()=>navigation.navigate('Products')}>
              <Image source={{uri:'https://media.istockphoto.com/id/492363909/photo/fat-on-stomach.jpg?s=612x612&w=0&k=20&c=7vwlhOx_NcIZKoSXK8MMaeTx26qt3ztNIXSl0auCRxQ='}} 
              style={[styles.image,{width:'100%'}]}/>
              <Text style={styles.imageText}>Obesity</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.middleContainerView} onPress={()=>navigation.navigate('Products')}>
              <Image source={{uri:'https://media.istockphoto.com/id/1126117013/photo/3d-illustration-of-human-heart-and-cardiogram-on-futuristic-blue-background-digital.jpg?s=612x612&w=0&k=20&c=6lSGLe5-9ri7p4QjLi_ba66fh2PPHSgux0E3R5mlz0c='}} 
              style={[styles.image, {width:'100%'}]}/>
              <Text style={styles.imageText}>Heart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.middleContainerView} onPress={()=>navigation.navigate('Products')}>
              <Image source={{uri:'https://media.istockphoto.com/id/1141195857/photo/human-eye-close-up-with-a-multi-colored-iris.jpg?s=612x612&w=0&k=20&c=1LI5M-TXi4pq14wZL8VaTt_4MklywwvWatMURMLx63Q='}}
               style={[styles.image,{width:'100%'}]}/>
              <Text style={styles.imageText}>Eye</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.middleContainerView} onPress={() => navigation.navigate('Products')}>
              <Image source={{uri:'https://media.istockphoto.com/id/1421002902/photo/doctor-check-and-diagnose-the-pain-in-knee-joint-on-medical-background-3d-illustration.jpg?s=612x612&w=0&k=20&c=JwORn3h6dPuERmQKXaEW16_3vmRVqVHBKjcsG5ynH80='}} 
              style={[styles.image,{width:'100%'}]}/>
              <Text style={styles.imageText}>Bone</Text>
            </TouchableOpacity> 
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
       
   )
 }
 export function MyHome({navigation}){
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home-sharp' : 'home-outline';
        } else if (route.name === 'Login') {
          iconName = focused ? 'heart-circle-sharp' : 'heart-circle-outline';
        } else if (route.name === 'Signup') {
          iconName = focused ? 'information-circle' : 'information-circle-outline';
        }
        
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: Theme.colors.purple300,
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
    <Tab.Screen name="Login" component={Login} options={{headerShown:false}}/>
    <Tab.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
  </Tab.Navigator>
  )
 }
 const styles = StyleSheet.create ({
  container:{
    flex:1,
    marginTop:Platform.OS == 'andriod'? StatusBar.currentHeight : 0,
    //paddingHorizontal:8,
},
   header:{
    backgroundColor:'#FBFCFA',
     marginTop:10,

   },
   headerIcons:{
     flexDirection:'row',
     paddingVertical:15,
     justifyContent:'space-between',
     alignItems:'center',
     marginRight:5,
   },
   headerText:{
     color:'black',
     fontSize:18,
     fontWeight:'bold',
     fontFamily:'Pacifico_400Regular'
   },
   btnAndSearchViewWrapper:{
    flex:0.3,
    backgroundColor:'#016064',
    opacity:0.7,
    //paddingHorizontal:20,
    //borderRadius:10,
   },
   backgroundImage:{
    flex:1,
    borderRadius:20,
   },
   btnView:{
     flexDirection:'row',
     justifyContent:'space-around',
     marginTop:10,
   },
   logSignBtn:{
     width:75,
     height:35,
     //backgroundColor:'rgba(255,255,255,.5)',
     borderRadius:5,
     //borderColor:'#016064',
     //borderWidth:4,
     elevation:13,
    backgroundColor:'white', 
   },
   logSignText:{
     color:'#000',
     textAlign:'center',
     fontWeight:'bold',
     fontSize:17,
     marginTop:5,
   },
   searchView:{
     flexDirection:'row',
     //width:'80%',
     height:50,
     backgroundColor:'rgba(255,255,255,.5)',
     alignItems:'center',
     borderRadius:20,
     paddingLeft:10,
     //marginLeft:30,
     marginTop:30,
     borderColor:'#016064',
     borderWidth:4
   },
   bottomScrollWrapper:{
    flex:0.7,
    marginTop:15,
    borderRadius:10,
    paddingHorizontal:20,
    //backgroundColor:'red'
   },
   middleContainerWrapper:{
    marginTop:50,
    flex:3,
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap',
    gap:4,
  },
  
  middleContainerView:{
    width:'49%',
    height:'49%',
    backgroundColor:'#016064',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    

  },
  image:{
    height:100,
    //width:200,
    resizeMode:'contain',
    borderRadius:10
  },
  imageText:{
    fontSize:22,
    color:'white'
  },

   
   listViewWrapper:{
    flex:0.4,
    marginTop:15,
    marginBottom:5,
    flexDirection:'row',
    paddingHorizontal:5,
    //flexWrap:'wrap',
    backgroundColor:'#016064',
    justifyContent:'space-evenly',
    borderRadius:10,
   },
 })