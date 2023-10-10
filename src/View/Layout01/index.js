import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import { styles } from "./style";
import { TextInput } from "react-native";

export const Layout01 = function () {
      return (
            <SafeAreaView style={[styles.container]}>
                  <View style={[styles.flex1, styles.group1]}>
                        <Text style={[styles.textLogin]}>LOGIN</Text>
                  </View>
                  <View style={[styles.flex2, styles.group2]}>
                        <View style={[styles.GroupLogin]}>
                              <Image
                                    source={require("../../../assets/avataruser.png")}
                                    style={{ width: 32, height: 32 }}
                              />
                              <TextInput
                                    style={[styles.txtLogin]}
                                    placeholder="Name"
                              />
                        </View>
                        <View style={[styles.GroupLogin, { marginTop: 15 }]}>
                              <Image
                                    source={require("../../../assets/lock.png")}
                                    style={{ width: 32, height: 32 }}
                              />
                              <TextInput
                                    style={[styles.txtLogin]}
                                    placeholder="Password"
                              />
                              <Image
                                    source={require("../../../assets/eye.png")}
                                    style={{ width: 32, height: 32 }}
                              />
                        </View>
                  </View>
                  <View style={[styles.flex1, styles.group3]}>
                        <Pressable style={[styles.btnLogin]}>
                              <Text style={[styles.lblLoginBtn]}>LOGIN</Text>
                        </Pressable>
                  </View>
                  <View style={[styles.flex2]}>
                        <Text style={[styles.lblGroup4]}>
                              Forgot your password?
                        </Text>
                  </View>
            </SafeAreaView>
      );
};
