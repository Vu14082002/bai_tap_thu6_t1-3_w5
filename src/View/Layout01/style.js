import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
      container: {
            fontFamily: "roboto",
            flex: 1,
            backgroundImage: "linear-gradient(to bottom, #FBCB00, #BF9A00)",
      },
      flex1: {
            flex: 1,
      },
      flex2: {
            flex: 2,
      },
      group1: {
            justifyContent: "flex-end",
            paddingLeft: 10,
      },
      textLogin: {
            fontSize: 30,
            fontWeight: "700",
            lineHeight: 35,
      },
      // GROUP 2
      group2: {
            justifyContent: "flex-end",
            paddingHorizontal: 10,
      },
      GroupLogin: {
            height: 54,
            border: "1px solid #F2F2F2",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
            backgroundColor: "#C4C4C44D",
      },
      txtLogin: {
            borderWidth: 0,
            paddingHorizontal: 10,
            width: "100%",
            height: 54,
            borderWidth: 0,
            borderColor: "transparent",
            fontSize: 18,
            fontWeight: "400",
            lineHeight: 54,
            paddingLeft: 10,
      },
      // GROUP 3
      group3: {
            justifyContent: "flex-end",
            padding: 8,
      },
      btnLogin: {
            height: 45,
            borderRadius: "2px",
            backgroundColor: "#060000",
      },
      lblLoginBtn: {
            color: "#ffff",
            fontSize: 20,
            fontWeight: "700",
            lineHeight: 45,
            textAlign: "center",
      },
      // GROUP 4
      lblGroup4: {
            fontSize: 20,
            fontWeight: "700",
            lineHeight: 23,
            textAlign: "center",
            marginTop: 20,
      },
});
