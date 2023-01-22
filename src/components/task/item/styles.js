import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemList: {
        fontSize: 14,
        color: "#ffffff",
        fontWeight: "bold",
      },
      itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: "#626893",
        marginBottom: 10,
        borderRadius: 10,
      },
      checkBoxItemList:{
        marginEnd: 20, 
        backgroundColor: 'white',
        borderColor: 'grey',
      }
})