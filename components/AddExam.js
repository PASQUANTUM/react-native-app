import React,{useState, useContext} from 'react'
import { TextInput, TouchableOpacity, Text, StyleSheet, View, Button} from 'react-native'
import { ExamContext } from './Exams'
import urid from 'urid';

export default function AddExam() {
    const [showinputs,setShowinputs] = useState(false)
    const {exams} = useContext(ExamContext)
    const {setExams} = useContext(ExamContext)
    const [subject,setSubject] = useState('')
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [knowledge,setKnowledge] = useState('')

    function submit(){
        if(subject.length === 0 || date.length === 0 || knowledge.length === 0){
            return
        }
        setShowinputs(false)
        setExams([{subject:subject,date:date,knowledge:knowledge,id:urid()},...exams])
        setSubject('')
        setDate('')
        setKnowledge('')
    }

  return (
    <>
        <TouchableOpacity onPress={()=>setShowinputs(true)}>
            <Text style={styles.addwidget}>+ Add exam</Text>
        </TouchableOpacity>
        {showinputs&&<TextInput style={styles.input}
        placeholder='subject'
        onChangeText={(e)=>setSubject(e)}/>}
        {showinputs}
        {showinputs&&<View><Text style={styles.knowledgetext}>knowledge:</Text></View>}
        {showinputs&&<View style={styles.knowledgetouch}>
            {knowledge!='r'&&<TouchableOpacity onPress={()=>setKnowledge('r')}><View style={styles.red}></View></TouchableOpacity>}
            {knowledge=='r'&&<View style={styles.redBorder}></View>}
            {knowledge!='o'&&<TouchableOpacity onPress={()=>setKnowledge('o')}><View style={styles.orange}></View></TouchableOpacity>}
            {knowledge=='o'&&<View style={styles.orangeBorder}></View>}
            {knowledge!='g'&&<TouchableOpacity onPress={()=>setKnowledge('g')}><View style={styles.green}></View></TouchableOpacity>}
            {knowledge=='g'&&<View style={styles.greenBorder}></View>}
        </View>}
        <TouchableOpacity onPress={()=>submit()}>
            {showinputs&&<Text style={styles.submit}>&#10003;</Text>}
        </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
    addwidget: {
        fontSize:25,
        backgroundColor:'yellow',
        width:375,
        padding:10,
        marginBottom:5,
        borderColor:'black',
        borderWidth:1,
        borderRadius:15,
    },
    input: {
        fontSize:25,
        width:375,
        paddingLeft:10,
        padding:5,
        marginBottom:5,
        borderColor:'black',
        borderWidth:1,
        borderRadius:15,
    },
    submit: {
        fontSize:25,
        backgroundColor:'lime',
        width:375,
        textAlign:'center',
        marginBottom:5,
        borderColor:'black',
        borderWidth:1,
        borderRadius:15,
    },
    knowledgetext:{
        width:375,
        paddingLeft:10,
        padding:5,
        fontSize:25,
        borderColor:'black',
        color:'grey',
        textAlign:'center',
    },
    red:{
        borderRadius:100,
        backgroundColor:'red',
        padding:20,
        marginRight:20,
        marginLeft:25,
        marginBottom:5,
    },
    orange:{
        borderRadius:100,
        backgroundColor:'orange',
        padding:20,
        marginBottom:5,
        marginRight:20,
    },
    green:{
        borderRadius:100,
        backgroundColor:'limegreen',
        padding:20,
        marginBottom:5,
        marginRight:20,
    },
    knowledgetouch:{
        display:'flex',
        flexDirection:'row',
    },
    redBorder:{
        borderRadius:100,
        backgroundColor:'red',
        padding:20,
        marginBottom:5,
        marginRight:20,
        borderWidth:2,
        marginLeft:25,
    },
    orangeBorder:{
        borderRadius:100,
        backgroundColor:'orange',
        padding:20,
        marginBottom:5,
        marginRight:20,
        borderWidth:2,
    },
    greenBorder:{
        borderRadius:100,
        backgroundColor:'limegreen',
        padding:20,
        marginBottom:5,
        marginRight:20,
        borderWidth:2,
    }
});