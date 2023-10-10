import { Image, Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import { styles } from "./style";

export const Layout03 = function () {
    return (
        <SafeAreaView style={[styles.container]}>
            <View style={[styles.subContainer]}>
                <View style={[styles.flex2]}>
                    <Text style={styles.topText}>PASSWORD GENERATOR</Text>
                    <TextInput style={styles.txtTopInput} />
                </View>
                <View style={[styles.flex3]}>
                    <View style={[styles.flexRow]}>
                        <Text style={styles.lblBottom}>Password length</Text>
                        <TextInput style={styles.txtInputBottom} />
                    </View>
                    <View style={[styles.flexRow, styles.checkBoxGroup]}>
                        <Text style={styles.lblCheckBox}>Include lower case letters</Text>
                        <View style={[styles.checkBox]}>
                            <TextInput style={styles.checkSelectedBottom} />
                            <Image
                                source={require("../../../assets/linea.png")}
                                style={{
                                    width: 10,
                                    height: 17,
                                    position: "absolute",
                                    top: 8,
                                    left: 3,
                                }}
                            />
                            <Image
                                source={require("../../../assets/lineb.png")}
                                style={{
                                    width: 15,
                                    height: 19,
                                    position: "absolute",
                                    right: 2,
                                    top: 4,
                                }}
                            />
                        </View>
                    </View>
                    <View style={[styles.flexRow, styles.checkBoxGroup]}>
                        <Text style={styles.lblCheckBox}>Include upcase letters</Text>
                        <TextInput style={styles.checkSelectedBottom} />
                    </View>
                    <View style={[styles.flexRow, styles.checkBoxGroup]}>
                        <Text style={styles.lblCheckBox}>Include number</Text>
                        <View style={[styles.checkBox]}>
                            <TextInput style={styles.checkSelectedBottom} />
                            <Image
                                source={require("../../../assets/linea.png")}
                                style={{
                                    width: 10,
                                    height: 17,
                                    position: "absolute",
                                    top: 8,
                                    left: 3,
                                }}
                            />
                            <Image
                                source={require("../../../assets/lineb.png")}
                                style={{
                                    width: 15,
                                    height: 19,
                                    position: "absolute",
                                    right: 2,
                                    top: 4,
                                }}
                            />
                        </View>
                    </View>
                    <View style={[styles.flexRow, styles.checkBoxGroup]}>
                        <Text style={styles.lblCheckBox}>Include special symbol</Text>
                        <TextInput style={styles.checkSelectedBottom} />
                    </View>
                    <Pressable style={[styles.btn]}>
                        <Text style={[styles.lblBtn]}>GENERATE PASSWORD </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};
