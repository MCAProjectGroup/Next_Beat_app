import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,FlatList
} from 'react-native';
import React from 'react';
import Newsongs from './Newsongs';


const ListData = [
  {
   date:'6 days ago',
    sname:'Tere Pyaar Mein (From "Tu Jhooti Main Makkar")',
    aname:"Pritam,Arijit Singh,Nikita Gandhi",
    
  },
  {
    date:'5 Feb',
     sname:'Chedkhaniyan (From "Shehzada")',
     aname:"Pritam,Arijit Singh,Nikita Gandhi",
     
   },
   {
    date:'24 jan',
     sname:'Bhalolaage Tomake - Lofi' ,
     aname:"Arijit Singh,",
     
   },
   {
    date:'23 jan',
     sname:'Sun Bhi Le - Lofi Mix',
     aname:"Arijit Singh,Vishal Mishra",
     
   },
   {
    date:'20 jan',
     sname:'Tere Pyaar Mein (From "Tu Jhooti Main Makkar")',
     aname:"Pritam,Arijit Singh,Nikita Gandhi",
     
   },
   {
    date:'6 days ago',
     sname:'Tere Pyaar Mein (From "Tu Jhooti Main Makkar")',
     aname:"Pritam,Arijit Singh,Nikita Gandhi",
     
   },
   {
     date:'5 Feb',
      sname:'Chedkhaniyan (From "Shehzada")',
      aname:"Pritam,Arijit Singh,Nikita Gandhi",
      
    },
    {
     date:'24 jan',
      sname:'Bhalolaage Tomake - Lofi' ,
      aname:"Arijit Singh,",
      
    },
    {
     date:'23 jan',
      sname:'Sun Bhi Le - Lofi Mix',
      aname:"Arijit Singh,Vishal Mishra",
      
    },
    {
     date:'20 jan',
      sname:'Tere Pyaar Mein (From "Tu Jhooti Main Makkar")',
      aname:"Pritam,Arijit Singh,Nikita Gandhi",
      
    },
]

const Notificationpage = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.textcontainer}>
          <Text style={styles.title}>What's New</Text>
          <Text style={styles.subtitle}>
            The latest releases from the artist,podcasts,and shows you follow.
          </Text>
        </View>
        <View style={styles.bottomcontainer}>
          <TouchableOpacity style={styles.buttonwraper}>
            <Text style={styles.playtitle}> Music </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonwraper}>
            <Text style={styles.playtitle}> podcasts & Shows </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.newtitle}>New</Text>
        <FlatList
        keyExtractor={(item, index)=> index}
        data={ListData}
        ListHeaderComponent={()=><View  />}
        renderItem={({item})=>(
          <Newsongs  date={item.date} sname={item.sname} aname={item.aname}/>
        )}
      />
      {/* <Newsongs  date="6 day ago" sname="Hello World" aname="Arijit Singh"/> */}
      </View>
    </ScrollView>
  );
};

export default Notificationpage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 15,
    paddingHorizontal:5,
  },
  textcontainer: {
    paddingTop: 10,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
  },
  subtitle: {
    color: 'grey',
    marginTop: 5,
  },
  bottomcontainer: {
    flexDirection: 'row',
    paddingTop: 12,
  },
  buttonwraper: {
    paddingVertical: 6,
    marginRight: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 999,
  },
  playtitle: {
    color: '#fff',
  },
  newtitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
    marginHorizontal: 15,
    paddingTop: 5,
  },
});
