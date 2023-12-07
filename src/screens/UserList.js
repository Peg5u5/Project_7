import { FlatList, StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import {images} from '../assets/constants'


const UserList = ({navigation}) => {

const Users=[
    {
        "id": 1,
        'image':images.user1,
        "name": "Suresh Kharat",
        "username": "Bret",
        "email": "kharatsuresh12@gmail.com",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Nanded",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "9420626495",
        "website": "hildegard.org",
        "experience":12,
        "company": {
          "name": "Freelancer",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      },
      {
        "id": 2,
        'image':images.user2,
        "name": "Yatharth Bagal",
        "username": "Antonette",
        "email": "yatharth3bagal@gmail.com",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Nanded",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "9765886458",
        "website": "anastasia.net",
        "experience":6,
        "company": {
          "name": "Freelancer",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      },
      {
        "id": 3,
        'image':images.user3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
          "street": "Douglas Extension",
          "suite": "Suite 847",
          "city": "McKenziehaven",
          "zipcode": "59590-4157",
          "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
          }
        },
        "phone": "925212286",
        "website": "ramiro.info",
        "experience":8,
        "company": {
          "name": "Romaguera-Jacobson",
          "catchPhrase": "Face to face bifurcated interface",
          "bs": "e-enable strategic applications"
        }
      },
      {
        "id": 4,
        'image':images.user4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
          "street": "Hoeger Mall",
          "suite": "Apt. 692",
          "city": "South Elvis",
          "zipcode": "53919-4257",
          "geo": {
            "lat": "29.4572",
            "lng": "-164.2990"
          }
        },
        "phone": "7352121314",
        "website": "kale.biz",
        "experience":4,
        "company": {
          "name": "Robel-Corkery",
          "catchPhrase": "Multi-tiered zero tolerance productivity",
          "bs": "transition cutting-edge web services"
        }
      },
      {
        "id": 5,
        'image':images.user5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
          "street": "Skiles Walks",
          "suite": "Suite 351",
          "city": "Roscoeview",
          "zipcode": "33263",
          "geo": {
            "lat": "-31.8129",
            "lng": "62.5342"
          }
        },
        "phone": "9541289258",
        "website": "demarco.info",
        "experience":18,
        "company": {
          "name": "Keebler LLC",
          "catchPhrase": "User-centric fault-tolerant solution",
          "bs": "revolutionize end-to-end systems"
        }
      },
      {
        "id": 6,
        'image':images.user6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
          "street": "Norberto Crossing",
          "suite": "Apt. 950",
          "city": "South Christy",
          "zipcode": "23505-1337",
          "geo": {
            "lat": "-71.4197",
            "lng": "71.7478"
          }
        },
        "phone": "8872121314",
        "website": "ola.org",
        "experience":1,
        "company": {

          "name": "Considine-Lockman",
          "catchPhrase": "Synchronised bottom-line interface",
          "bs": "e-enable innovative applications"
        }
      },
      {
        "id": 7,
        'image':images.user7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
          "street": "Rex Trail",
          "suite": "Suite 280",
          "city": "Howemouth",
          "zipcode": "58804-1099",
          "geo": {
            "lat": "24.8918",
            "lng": "21.8984"
          }
        },
        "phone": "9252696895",
        "experience":5,
        "website": "elvis.io",
        "experience":1.5,
        "company": {

          "name": "Johns Group",
          "catchPhrase": "Configurable multimedia task-force",
          "bs": "generate enterprise e-tailers"
        }
      },
]



  return (
    <View style={{backgroundColor:'white',flex:1}}>
 

      <FlatList 
      ListHeaderComponent={
        <View style={{justifyContent:'center',alignItems:'center',marginVertical:20}}>
            <Text style={{color:'black',fontSize:24,color:'blue',fontWeight:'bold'}}>Users List</Text>
            </View>
      }
      data={Users}
      renderItem={({item,index})=>{
        return(
            <TouchableOpacity onPress={()=>{navigation.navigate('UserDetails',{item:item})}} 
            style={{backgroundColor:'white',borderColor:'gray',borderWidth:1,padding:15,marginHorizontal:10,borderRadius:10,marginVertical:10,flexDirection:'row'}}>

<View style={{width:60,height:60,borderRadius:50,}}>
<Image source={item.image}  style={{width:'100%',height:'100%',borderRadius:50}} />

</View>                
        
        <View style={{flex:1,marginLeft:25}}>

        <Text style={{color:'black',fontSize:16,fontWeight:'bold'}}>{item.name}</Text>
                <Text style={{color:'black'}}>{item.email}</Text>
                <Text style={{color:'black'}}>{item.address.city}</Text>

        </View>
                </TouchableOpacity>
        )
      }}
      />
    </View>
  )
}

export default UserList

