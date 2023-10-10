import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export const Layout02 = function () {
    return (
        <View style={{ flex: 1, fontFamily: "roboto" }}>
            <View style={[styles.flex2, styles.group1]}>
                <Image
                    source={require("../../../assets/usb.png")}
                    style={{ width: 70, height: 70 }}
                />
                <Text style={[styles.textGroup1]}>
                    USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth
                </Text>
            </View>
            <View style={[styles.flex5, styles.group2]}>
                <Text style={[styles.textGroup2]}>Cực kỳ hài lòng</Text>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        width: "85%",
                    }}
                >
                    {Array.from({ length: 5 }).map(() => {
                        return (
                            <Image
                                style={{
                                    width: 39,
                                    height: 39,
                                }}
                                source={require("../../../assets/star.png")}
                            />
                        );
                    })}
                </View>
                <Pressable style={styles.btn}>
                    <Image
                        style={{
                            width: 39,
                            height: 32,
                        }}
                        source={require("../../../assets/camera.png")}
                    />
                    <Text style={styles.textGroup2_2}>Thêm hình ảnh</Text>
                </Pressable>
            </View>
            <View style={[styles.flex4, styles.group3]}>
                <TextInput
                    multiline={true}
                    numberOfLines={8}
                    style={styles.inputMul}
                    placeholder=" Hãy chi sẻ những điều mà bạn thích về sản phẩm"
                />
            </View>
            <View style={[styles.flex2, styles.bottom]}>
                <Pressable style={styles.btnBottom}>
                    <Text style={[styles.lblBtnGui]}>Gửi</Text>
                </Pressable>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    flex2: {
        flex: 2,
    },
    flex3: {
        flex: 3,
    },
    flex4: {
        flex: 4,
    },
    flex5: {
        flex: 5,
    },
    group1: {
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    textGroup1: {
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: "19px",
    },
    // GROUP2
    group2: {
        justifyContent: "space-around",
        alignItems: "center",
    },
    textGroup2: {
        fontSize: "18px",
        fontWeight: "700",
        lineHeight: "21px",
        justifyContent: "center",
        textAlign: "center",
    },
    btn: {
        backgroundColor: "#ffff",
        border: "1px solid #1511EB",
        borderRadius: "3px",
        height: 68,
        width: "80%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    textGroup2_2: {
        fontSize: "18px",
        fontWeight: "700",
        lineHeight: "21px",
        textAlign: "center",
        lineHeight: 68,
        paddingLeft: 20,
    },
    // GROUP3
    group3: {
        alignItems: "center",
    },
    ////////////////////////////////
    bottom: {
        alignItems: "center",
        justifyContent: "center",
    },
    inputMul: {
        height: "222px",
        borderRadius: 5,
        border: "1px solid gray",
        width: "90%",
        placeholderTextColor: "gray",
        fontSize: "18px",
        fontWeight: "700",
        lineHeight: "21px",
        padding: "15px",
    },
    btnBottom: {
        backgroundImage: "linear-gradient(to bottom, #0D5DB6, #1511EB)",
        width: "85%",
        height: 41,
        borderRadius: 5,
    },
    lblBtnGui: {
        fontSize: 20,
        fontWeight: "700",
        lineHeight: 23,
        textAlign: "center",
        lineHeight: 41,
        color: "#ffff",
    },
});
