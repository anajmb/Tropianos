import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "#fff",
   },
   header: {
    padding: 16
   },
   headerImage: {
    marginLeft: 55,
    marginTop: 30,
    width: 270,
    height: 270,
    borderRadius: 10,
   },
   produtoName: {
    color: "#000",
    marginTop: 20,
    fontSize: 28,
    fontWeight: 400,
    textAlign: "center"
   },
   precoProduto: {
     fontWeight: 400,
     fontSize: 25,
     marginTop: 10,
   }, 
   linha: {
      borderBottomColor: "#eee",
      borderBottomWidth: 1,
      marginBottom: -12
   },
   molhoList: {
      padding: 5,
      flex: 1,
   },
   molhoItem: {
       flexDirection: "row",
      borderBottomColor: "#eee",
      borderBottomWidth: 1,
      margin: 10,
      marginLeft: 15
   }, 
   molhoContent: {
      flex: 1,
      marginRight: 16
   },
   itemImage: {
      width: 80,
      height: 80,
      borderRadius: 8,
      marginBottom: 20
   },
   itemName: {
      fontSize: 19,
      fontWeight: 400,
      marginLeft: 25
   },
   itemDescription: {
      color: "#666",
      marginTop: 10,
      marginLeft: 20,
      fontSize: 14
   }
})