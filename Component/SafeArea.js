import { View, StyleSheet,SafeAreaView,Platform, StatusBar } from "react-native";

export function SafeArea ({children}) {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                {children}
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:Platform.OS == 'andriod'? StatusBar.currentHeight : 0,
        paddingHorizontal:8,
    },
    wrapper:{
        flex:1,
        paddingHorizontal:12,
    }
})