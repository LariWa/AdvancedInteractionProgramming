import { StyleSheet} from "react-native";

export const styles_registrationPage = StyleSheet.create({
  mainContainer: {
      backgroundColor: "#F4FFDC",
      padding: 10,
      top: 0,
      width: "100%",
      height: "100%",
      position:"absolute",
      paddingLeft: 50,
      paddingRight: 50,
      paddingTop: 10,
      alignContent:"center"
  },
  mainContainer_textInput:{
      marginRight:"auto", 
      marginLeft:"auto", 
      marginBottom: 10,
      border: "1px solid #314959",
      borderRadius: 10,
      width: 264,
      height: 45,
      paddingLeft: 10
  },
  mainContainer_h5: {
      fontWeight:"bold",
      marginRight:"auto", 
      marginLeft:"auto", 
      fontSize: 32,
      marginBottom: 20,
      color:"#314959"
  },
  mainContainer_italics: {
      fontStyle: "italic",
      fontSize: 16,
      marginRight:"auto", 
      marginLeft:"auto", 
      color:"#314959",
      textDecorationLine: "underline",
      marginBottom: 30,
      overflow: 'hidden'
  },
  mainContainer_button: {
      backgroundColor: '#314959', 
      width:155, 
      height:60, 
      marginRight:"auto", 
      marginLeft:"auto", 
      paddingTop: 10, 
      paddingBottom:10, 
      borderRadius: 300,
      boxShadow: "0px 0px 100px rgba(162, 170, 106, 0.2)"
  },
  maincontainer_image:{
      position: "absolute",
      bottom: 0,
      right: 0,
      width: 150,
      height: 250
  }
})

export const styles_loginPage = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#314959",
    padding: 10,
    top: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 0,
    alignContent: "center",
  },
  mainContainer_textInput: {
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 10,
    border: "1px solid #A7C6DA",
    borderColor: "#A7C6DA",
    borderWidth: 2,
    color: "#A7C6DA",
    borderRadius: 10,
    width: 264,
    height: 45,
    paddingLeft: 10,
  },
  mainContainer_h5: {
    fontWeight:"bold",
    marginRight: "auto",
    marginLeft: "auto",
    fontSize: 32,
    marginBottom: 20,
    color: "#A7C6DA",
  },
  mainContainer_italics: {
    fontStyle: "italic",
    fontSize: 16,
    marginRight: "auto",
    marginLeft: "auto",
    color: "#A7C6DA",
    textDecorationLine: "underline",
    marginBottom: 30,
    overflow: "hidden",
  },
  mainContainer_button: {
    backgroundColor: "#A7C6DA",
    width: 155,
    height: 60,
    marginRight: "auto",
    marginLeft: "auto",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 300,
    boxShadow: "0px 0px 100px rgba(162, 170, 106, 0.2)",
  },
  maincontainer_image: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 150,
    height: 270,
  },
});