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
    width: "100%",
    height: 200,
    borderRadius: 8,
    
   },
   restaurantName: {
    fontSize: 40,
    position: "absolute",
    marginBlock: 80,
    marginLeft: 110,
    color: "#fff",
    
   },
   cardapioName: {
     fontWeight: 400,
     textAlign: "center",
     fontSize: 25,
     marginTop: 15
   },
   subTitle: {
    fontWeight: 300,
    textAlign: "center",
    color: "#444444",
    marginTop: 5
   },
   tabs: {
      flexDirection: "row",
      padding: 16,
      borderBottomColor: "#eee",
      borderBottomWidth: 1,
      gap: 16
   },
   tabsName: {
      color: "#666"
   }, 
   menuList: {
      padding: 16,
      flex: 1
   },
   menuItem: {
       flexDirection: "row",
      borderBottomColor: "#eee",
      borderBottomWidth: 1,
      margin: 10
   }, 
   menuContent: {
      flex: 1,
      marginRight: 16
   },
   itemImage: {
      width: 80,
      height: 80,
      borderRadius: 8,
      margin: 1,
      marginBottom: 20
   },
   itemName: {
      fontSize: 19,
      fontWeight: 500,
      marginLeft: 25
   },
   itemDescription: {
      color: "#666",
      marginTop: 10,
      marginLeft: 20,
      fontSize: 14
   }
})