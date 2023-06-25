import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./Home";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { ProductsList } from "./ProductsList.js";
import { ProductDetails } from "./ProductDetails";
import { Cart } from "./CartScreen";
import { CreateProfile } from "./CreateProfile";
import { Profile } from "./Profile";
import { CartIcon } from "../Component/CartIcon";


const Stack = createStackNavigator();
//screenOptions={{headerShown:false}} 
export function StackNavigation(){
    return(
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="My Home"component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Products"component={ProductsList} options={({navigation})=>({title: 'Products',headerRight:()=> <CartIcon navigation={navigation}/>})} />
        <Stack.Screen name="Product Details"component={ProductDetails} options={({navigation})=>({title: 'Products',headerRight:()=> <CartIcon navigation={navigation}/>})}/>
        <Stack.Screen name="Cart"component={Cart} options={({navigation})=>({title: 'Products',headerRight:()=> <CartIcon navigation={navigation}/>})}/>
        <Stack.Screen name="CreateProfile"component={CreateProfile} options={{headerShown:true}}/>
        <Stack.Screen name="Login"component={Login} options={{headerShown:true}}/>
        <Stack.Screen name="Signup"component={Signup} options={{headerShown:true}}/>
        <Stack.Screen name="Profile"component={Profile} />
        </Stack.Navigator>
    )
}