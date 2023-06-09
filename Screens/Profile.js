import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Settings/GlobalVariables";
import { StyleSheet,Image,View,Text} from "react-native";
import { Button } from "react-native-paper";
import { db } from "../Settings/FirebaseConfig.setting";
import { getDoc,doc } from "firebase/firestore";
import { ScrollView } from "react-native-gesture-handler";

export function Profile ({navigation}) {
    const { uid } = useContext(AppContext);
    //updated useState after data is fetched
    const [userRecords,setUserRecords] = useState({});

    //fetch data after component is loaded
    useEffect(() => {
        const handleGetUserRecords = async () => {
            const snapShot = await getDoc(doc(db,'users',uid));
            setUserRecords(snapShot.data());
        }
        
        handleGetUserRecords();
    },[]);

    return (
        <View style={styles.container}>
            <Image
            style={styles.headerImage}
            source={require('../Images/profile1.png')}/>   
        
            <View style={styles.body}>
                <ScrollView>
                    <View style={styles.contentBox}>
                        <View style={{paddingLeft:9}}>
                            <Text>Name :</Text>
                            <Text style={{fontWeight:'200',fontSize:28}}>{userRecords.firstName} {userRecords.lastName}</Text> 
                        </View>
                    </View>

                    <View style={styles.contentBox}>
                        <View style={{paddingLeft:9}}>
                            <Text>Date Of Birth :</Text>
                            <Text style={{fontWeight:'200',fontSize:28}}>{userRecords.dateOfBirth}</Text>
                        </View>
                    </View>

                    <View style={styles.contentBox}>
                        <View style={{paddingLeft:9}}>
                            <Text>City :</Text>
                            <Text style={{fontWeight:'200',fontSize:28}}>{userRecords.city}</Text>
                        </View>
                    </View>

                    <View style={styles.contentBox}>
                        <View style={{paddingLeft:9}}>
                            <Text>Bio :</Text>
                            <Text style={{fontWeight:'200',fontSize:28}}>{userRecords.bioInfo}</Text>
                        </View>
                    </View>

                    <View style={{marginHorizontal:12}}>
                        <Button
                        contentStyle={{paddingVertical:16}}
                        style={{borderRadius:6}} 
                        textColor="white"
                        buttonColor={"#016064"}
                        onPress={() => navigation.navigate('My Home')}>
                            Update profile
                        </Button>
                    </View>
                </ScrollView>
            </View>
       </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headerImage:{
        flex:2,
        height:'80%',
        width:'80%',
        resizeMode:'contain',
        alignSelf:'center',
    },
    body:{
        flex:4,
        paddingBottom:28,
    },
    contentBox:{
        backgroundColor:'white',
        marginHorizontal:12,
        marginBottom:12,
        borderRadius:8,
        padding:25,
        borderWidth:1,
        borderColor:"#016064",
        marginTop:10
    }
})