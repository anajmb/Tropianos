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
    color: "#8e8e8e",
    marginTop: 10
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
      borderRadius: 8
   },
   itemName: {
      fontSize: 16,
      fontWeight: "bold"
   },
   itemDescription: {
      color: "#666",
      marginTop: 4
   },
   itemPrice: {
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 8
   }
})