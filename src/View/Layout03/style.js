import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: "#6464aa",
            fontFamily: "roboto",
            paddingHorizontal: "20px",
      },
      subContainer: {
            flex: 1,
            margin: 20,
            backgroundColor: "#23235B",
            borderRadius: "5px solid ",
            borderRadius: 15,
            padding: 15,
      },
      flex2: {
            flex: 2,
            justifyContent: "space-evenly",
            alignItems: "center",
      },
      flex3: {
            flex: 3,
            backgroundColor: "red",
      },
      // TOP
      topText: {
            width: "50%",
            fontSize: 25,
            fontWeight: "700",
            lineHeight: 29,
            textAlign: "center",
            color: "#ffff",
      },
      txtTopInput: {
            width: "97%",
            height: 55,
            backgroundColor: "#151537",
      },
      // BOTTOM
      flexRow: {
            flexDirection: "row",
            justifyContent: "space-between",
      },
      lblBottom: {
            fontSize: 20,
            fontWeight: "700",
            lineHeight: 23,
            color: "#ffff",
            lineHeight: 33,
      },
      txtInputBottom: {
            width: "36%",
            height: 33,
            backgroundColor: "#ffff",
      },
      checkSelectedBottom: {
            width: 25,
            height: 25,
            backgroundColor: "#ffff",
      },
      checkBoxGroup: {},
});
