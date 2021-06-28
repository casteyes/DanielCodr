import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
container:{
flexDirection:'row',
margin: 10,
alignItems: 'flex-end'
},
mainContainer:{
flexDirection: 'row',
backgroundColor:'white',
padding: 10,
borderRadius: 25,
marginRight: 10,
flex: 1,
alignItems: 'center',
},
textInput:{
flex: 1,
marginHorizontal: 10,
},
buttonContainer:{
backgroundColor: Colors.light.tint,
borderRadius: 25,
width: 50,
height: 50,
justifyContent: 'center',
alignItems: 'center',
},
icon:{
    marginHorizontal: 5,
}

})

export default styles;