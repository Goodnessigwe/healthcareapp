{/* import { useState, useEffect } from "react";
import {View, StyleSheet, TextInput, Text, Button, Image, TouchableOpacity,  } from "react-native";

export function Boxes({w,h}) {
    const [bg, setBg] = useState('oldlace');
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    
    function Successful (){
        console.log('Enrollment successful')
    }
    function Welcome (){
        console.log('Welcome to earlycode')
    }
   
    const Addition = () => {
    
        console.log(Number(num1) + Number(num2));
    }

    useEffect(()=>{
       
    },[]);

    

    return (
        <View style={[styles.myBox, {width:w, height:h, backgroundColor:bg}]}>
            <Button title="Enroll Now" color='red' onPress={Successful}/>
            <TouchableOpacity onPress={()=> Welcome()}>
                <Image source={{uri:'https://www.earlycode.net/_next/image?url=%2Fimages%2Fearlycode_logo.png&w=64&q=75'}}
                style={{width:48, height:30}}/>
                
            </TouchableOpacity>

            <TextInput style={styles.input} value={num1} keyboardType="numeric" onChangeText={setNum1}/>
            <TextInput style={styles.input} value={num2}  keyboardType="numeric" onChangeText={setNum2} />
            
            <Button style={styles.input} title="add me" onPress={Addition}/>


        </View>
    )
}

const styles = StyleSheet.create({
    myBox:{
       
       // backgroundColor:'black',
        marginTop:20,
        borderWidth:2,
        borderColor:'yellow'
      },

    input:{
        backgroundColor:'black',
        borderColor:'orange',
        borderWidth:2,
        margin:5,
        borderRadius:10,
        width:'80%',
        height:30,
        color:'white',
    

    }
      
}) */}