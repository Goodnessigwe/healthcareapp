import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";


export function MyComponent({id,title,type,color}){
    return(
        <TouchableOpacity style={[styles.wrapper, {backgroundColor:color}]} onPress={()=> 
        Alert.alert("Alert Box", `The expCategory Title is ${title}`,
            
        )}>
            <Text style={styles.text}>{id}</Text>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>{type}</Text>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    wrapper:{
        
        paddingHorizontal:10,
        paddingVertical:80,
        borderRadius:8,
        marginVertical:20,
        alignItems:'center',
        justifyContent:'center'
        
    },
    text:{
        color:'white',
        fontSize:18
    }
})
