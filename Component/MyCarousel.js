import {useRef, useState, useEffect} from "react";
import {View, FlatList, Image, Dimensions } from "react-native";


export function Carousel (){
  const flatlistRef = useRef();
  const screenWidth = Dimensions.get("window").width;
  const [ activeIndex, setActiveIndex ] = useState (0);

  //auto scroll
  useEffect(()=>{
    //if active inex === the last index --->jump back to the first index
    //else active index + 1
    let interval = setInterval(()=>{
      if(activeIndex===carouselData.length-1){
        flatlistRef.current.scrollToIndex({
          index: 0,
          animation: true,
        });
        } else {
          flatlistRef.current.scrollToIndex({
            index: activeIndex + 1,

          });
        }
    },2000);
    return() => clearInterval(interval);
  });

  const getItemLayout = (data, index)=>({
    length:screenWidth,
    offset:screenWidth * index,
    index:index,

  }
 )
  const carouselData = [
    {id: 1,imageUrl:  "https://thumbs.dreamstime.com/b/tasty-vitamin-juice-vitamins-fruits-color-nobody-108903319.jpg?w=1200"},
    {id: 2,imageUrl: "https://thumbs.dreamstime.com/b/female-dietician-writing-diet-list-female-dietician-writing-diet-list-fresh-season-fruit-105412695.jpg"},
    {id: 3,imageUrl: "https://thumbs.dreamstime.com/b/girl-chalkboard-fruits-vitamins-sign-happy-smiling-blond-child-holding-apple-banana-school-as-background-healthy-149056784.jpg?w=1200"},
    {id: 4,imageUrl: "https://thumbs.dreamstime.com/b/fresh-vegetables-fruit-11155978.jpg"},
    {id: 5,imageUrl: "https://thumbs.dreamstime.com/b/african-american-woman-eating-salad-29638764.jpg"},
    // {id: 3,image: require("../assets/fruit3.png")},
  ];

//Display images//UI
  const renderItem = ({item,index})=>{
    return(
      <View style={{marginBottom:10,borderRadius:10,}} >
        <Image source={{uri:item.imageUrl}} 
        style={{
          height:150,
          width:screenWidth,
          borderRadius:10,
          marginTop:10,
          resizeMode:'contain',
          }} />

      </View>
    )

  };
  //Handle Scroll
  const handleScroll = (event) => {
    //get the scroll position
    const scrollPosition = event.nativeEvent.contentOffset.x;
    //console.log({scrollPosition})

    //get the index of current active item
    const index = scrollPosition/screenWidth;
    
    //update the index
    setActiveIndex(index);

  };

  //Render Dot Indicators
  const renderDotInicators = () =>{
    return carouselData.map((dot,index) =>{
      //if the active inex === inex
      if(activeIndex===index.toString()){
        return(
          <View style={{
          backgroundColor:'red',
          height:10, 
          width:10, 
          borderRadius:5,
          marginHorizontal:6,
          }}>

          </View>
        )

      }else{
        return(
          <View
          key={index.toString()} 
             style = {{
              backgroundColor:'white',
              height:10, 
              width:10, 
              borderRadius:5,
              marginHorizontal:6,
              }}>
          </View>
          );

      }

    //   return(
    //   <View
    //   key={index} 
    //      style = {{
    //       backgroundColor:'red',
    //       height:10, 
    //       width:10, 
    //       borderRadius:5,
    //       marginHorizontal:6,
    //       }}>
    //   </View>
    //   );
     });

  };
  return(
    <View>
      {/* <Text>Carousel</Text> */}
      <FlatList 
      data={carouselData} 
      ref={flatlistRef}
      renderItem={renderItem}
      getItemLayout={getItemLayout} 
      keyExtractor={(item)=>item.id.toString()}
      horizontal={true}
      pagingEnabled={true}
      onScroll={handleScroll}
      showsHorizontalScrollIndicator={false}
      />
        <View style={{ flexDirection:'row',justifyContent:'center',borderRadius:20,marginTop:10 }}>
          {renderDotInicators()}
        </View>
      
    </View>
  )

}



