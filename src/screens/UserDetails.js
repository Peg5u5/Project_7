import { StyleSheet, Text, View,Image, Dimensions } from 'react-native'
import React,{useState} from 'react'
const { width, height } = Dimensions.get("window");


const UserP=({title,val,containerStyle})=>{
  return(
    <View style={{flexDirection:'row',marginHorizontal:20,...containerStyle,}}>
      <Text style={{color:'black',marginRight:20,fontWeight:'bold',fontSize:16,width:100}}>{title}</Text>
      <Text style={{color:'black',fontWeight:'bold',fontSize:16,color:'#3E30BB'}}>:   {val}</Text>
    </View>
  )
}


const UserDetails = ({route}) => {
  const item = route.params.item

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
    
    <View style={{borderColor:'gray',borderWidth:1,marginHorizontal:20,marginVertical:20,borderRadius:10,height:height*.90}}>
    <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
    <Text style={{color:'blue',fontSize:20,marginVertical:15,marginVertical:35,fontWeight:'bold'}}>{item.name}</Text>
    <Image source={item.image} style={{width:150,height:150,borderRadius:100}} />

    </View>
  
<View style={{marginHorizontal:5,marginTop:40}}>
<UserP title={'Name'} val={item.name} containerStyle={{marginTop:20}} />
<UserP title={'Mobile'} val={item.phone} containerStyle={{marginTop:20}} />

<UserP title={'Email'} val={item.email} containerStyle={{marginTop:20}} />
<UserP title={'Company'} val={item.company.name} containerStyle={{marginTop:20}} />
<UserP title={'City'} val={item.address.city} containerStyle={{marginTop:20}} />
<UserP title={'Experience'} val={item.experience + '  Years'} containerStyle={{marginTop:20}} />
</View>
</View>
    </View>
  )
}

export default UserDetails

const styles = StyleSheet.create({})