import React,{useState, createContext} from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import urid from 'urid';
import AddExam from './AddExam';

export const ExamContext = createContext()

export default function Home({navigation}) {
    const [exams,setExams] = useState([
        {subject:'Math',date:'1.1.23',knowledge:'o',id:urid()},
        {subject:'Physics',date:'1.1.23',knowledge:'g',id:urid()}
      ])
      const value = {
        exams,
        setExams
      }
  return (
    <ExamContext.Provider value={value}>
        <View style={styles.container}>
        <AddExam/>
        <FlatList 
        data={exams}
        renderItem={({item})=>(
            <>
            {item.knowledge=='r'&&<View style={styles.examRed}>
                <Text style={{fontSize:25}}>{item.subject}</Text>
                <View style={styles.btn}><Button title='&#x270E;'
                onPress={()=>navigation.navigate('Exam',item)}/>
                </View>
                <Text style={{fontSize:25}}>{item.date}</Text>
            </View>}
            {item.knowledge=='o'&&<View style={styles.examOrange}>
                <Text style={{fontSize:25}}>{item.subject}</Text>
                <View style={styles.btn}><Button title='&#x270E;'
                onPress={()=>navigation.navigate('Exam',item)}/>
                </View>
                <Text style={{fontSize:25}}>{item.date}</Text>
            </View>}
            {item.knowledge=='g'&&<View style={styles.examGreen}>
                <Text style={{fontSize:25}}>{item.subject}</Text>
                <View style={styles.btn}>
                <Button title='&#x270E;'
                onPress={()=>navigation.navigate('Exam',item)}/>
                </View>
                <Text style={{fontSize:25}}>{item.date}</Text>
            </View>}
            </>
        )}
        />
        </View>
  </ExamContext.Provider>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems:'center',
    },
    examGreen:{
      justifyContent:'space-between',
      flexDirection: 'row',
      width:375,
      backgroundColor:'limegreen',
      borderWidth:1,
      borderRadius:5,
      padding:10,
      marginBottom:5,
    },
    examOrange:{
      justifyContent:'space-between',
      flexDirection: 'row',
      width:375,
      backgroundColor:'orange',
      borderWidth:1,
      borderRadius:5,
      padding:10,
      marginBottom:5,
    },
    examRed:{
      justifyContent:'space-between',
      flexDirection: 'row',
      width:375,
      backgroundColor:'red',
      borderWidth:1,
      borderRadius:5,
      padding:10,
      marginBottom:5,
    },
    btn:{
  
    }
  });
