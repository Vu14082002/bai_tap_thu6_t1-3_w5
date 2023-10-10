import { Image, SafeAreaView, Text, TextInput, View } from "react-native";
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
                                    <Text style={styles.lblBottom}>Include lower case letters</Text>
                                    <View style={[styles.checkBoxGroup]}>
                                          {/* <TextInput
                                                style={
                                                      styles.checkSelectedBottom
                                          /> */}
                                          <Image
                                                source={require("../../../assets/linea.png")}
                                                style={{ width: 22, height: 2 }}
                                          />
                                          <Image
                                                styles={{ with: 23, height: 2 }}
                                                source={require("../../../assets/lineb.png")}
                                          />
                                    </View>
                              </View>
                        </View>
                  </View>
            </SafeAreaView>
      );
};
