import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: "roboto",
        backgroundColor: "#C4C4C4",
    },
    flex4: {
        flex: 4,
    },
    flex5: {
        flex: 5,
    },
    flex6: {
        flex: 6,
    },
    // GROUP TOP///////////////////////
    groupTop: {
        backgroundColor: "#ffff",
        justifyContent: "space-around",
    },
    subTop: {
        flexDirection: "row",
        padding: 15,
    },
    // SUBM TOP RIGHT
    subTopRight: {
        justifyContent: "space-between",
    },
    // TEXT CONTENT
    title: {
        fontSize: 12,
        fontWeight: "700",
        lineHeight: 14,
    },
    textDanger: {
        fontSize: 18,
        fontWeight: "700",
        lineHeight: 21,
        color: "#EE0D0D",
    },
    textPrimary: {
        fontSize: 12,
        fontWeight: "700",
        lineHeight: 14,
        color: "#808080",
    },
    // SUB LEFT
    subLeft: {
        flexDirection: "row",
    },
    lblInfo: {
        fontSize: 12,
        fontWeight: "700",
        lineHeight: 18,
        color: "#134FEC",
    },
    lblMaGiamGia: {
        fontSize: 12,
        fontWeight: "700",
        lineHeight: 18,
        color: "#011627",
    },
    footerLeft: {
        width: "65%",
        height: 45,
        border: "1px solid #808080",
        borderRadius: 2,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
    },
    lblMaGiamGIa: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: "700",
        lineHeight: 21,
        color: "#011627",
    },
    btnTop: {
        height: 45,
        borderRadius: 2,
        backgroundColor: "#0A5EB7",
        paddingHorizontal: 15,
    },
    lblOfBtnTop: {
        fontSize: 20,
        fontWeight: "700",
        lineHeight: 45,
        color: "#FFFFFF",
    },
});
