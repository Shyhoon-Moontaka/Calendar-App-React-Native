import React,{ useState } from 'react';
import { View,Text,StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import { Calendar } from 'react-native-calendars';

const MyCalendar = () => {
  let [eventDate,setEventDate]=useState('');
  let [text,setText]=useState('');
  let [events,setEvents]=useState({});

  const addEvent = () => {
    if (eventDate && text) {
      setEvents((prevEvents) => ({
        ...prevEvents,
        [eventDate]: text,
      }));
      setText(''); 
      setEventDate('');
      Alert.alert('Event added successfully!');
    } else {
      Alert.alert('Please select a date and enter an event description.');
    }
  };
  
    return (
        <View>

        <TextInput placeholder='Learn Java Today.'
          style={styles.textinput}
          value={text}
          onChangeText={(text)=>{
          setText(text);
        }}
        >
        </TextInput>

          <TouchableOpacity style={styles.button} onPress={addEvent}>
            <Text style={styles.buttontext}>
              Add Event.
            </Text>
          </TouchableOpacity>

          
            <Calendar
                markedDates={{
                    [eventDate]:{
                      selected:true
                    }
                }}
                
               onDayPress={(day)=>{
                  if (!events[day.dateString]) {
                    setEventDate(day.dateString);
                  } else {
                    Alert.alert('Event', events[day.dateString]);
                  }
                }}

                theme={{
                  backgroundColor: '#ffffff',
                  calendarBackground: '#ffffff',
                  textSectionTitleColor: '#b6c1cd',
                  selectedDayBackgroundColor: '#00adf5',
                  todayBackgroundColor:"#00adf5",
                  selectedDayTextColor: '#ffffff',
                  todayTextColor: '#00adf5',
                  dayTextColor: '#2d4150',
                  textDisabledColor: '#dd99ee'
                }}

                style={{
                  borderWidth:3,
                  borderColor: 'green',
                  height: 350,
                  width:340,
                  borderRadius:50
                }}
            />

          {
              eventDate && (
            <Text style={styles.eventdate}>
                {eventDate}
            </Text>
              )
            }

        </View>
    );
};

export default function App() {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>
              Calendar App
            </Text>

            <MyCalendar/>

              <Text style={styles.text}>
              Powered By Shyhoon.
            </Text>
            
        </View>
    );
}
const styles=StyleSheet.create(
  {
    container:{
        justifyContent:"space-evenly", 
        alignItems: 'center',
    },
    text:{
      color:"red",
      fontSize:15,
      margin:20
    },
    title:{
      color:"violet",
      fontSize:40,
      marginTop:50
    },
    textinput:{
      fontSize:20,
      borderColor:"blue",
      borderWidth:5,
      borderRadius:20,
      textAlign:"center",
      margin:30
    },
    buttontext:{
      fontSize:20,
      color:"white",
      textAlign:"center"
    },
    button:{
      backgroundColor:"black",
      width:200,
      alignSelf:"center",
      borderRadius:100,
      marginBottom:40
    },
    eventdate:{
      fontSize:20,
      textAlign:"center",
      marginTop:40
    },
  }
)