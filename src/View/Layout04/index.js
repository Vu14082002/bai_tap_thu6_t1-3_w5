import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import { styles } from "./style";

export const Layout04 = function () {
    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.flex4, styles.groupTop]}>
                <View style={[styles.subTop]}>
                    <View style={[styles.flex4]}>
                        <Image
                            source={require("../../../assets/book.png")}
                            style={{ width: 104, height: 127 }}
                        />
                    </View>
                    <View style={[styles.flex6, styles.subTopRight]}>
                        <Text style={[styles.title]}>Nguyên hàm tích phân và ứng dụng</Text>
                        <Text style={[styles.title]}>Cung cấp bởi Tiki Trading</Text>
                        <Text style={[styles.textDanger]}>141.800 đ</Text>
                        <View>
                            <Image
                                sourcec={require("../../../assets/delete.svg")}
                                style={{ width: 50, height: 2 }}
                            />
                            <Text style={[styles.textPrimary]}>141.800 đ</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={[styles.subLeft, styles.flex4]}>
                                <Image
                                    source={require("../../../assets/btnminus.png")}
                                    style={{ width: 14, height: 16 }}
                                />
                                <Text
                                    style={{
                                        marginHorizontal: 10,
                                        fontSize: 15,
                                        fontWeight: "700",
                                        lineHeight: 18,
                                    }}
                                >
                                    1
                                </Text>
                                <Image
                                    source={require("../../../assets/btnadd.png")}
                                    style={{ width: 14, height: 16 }}
                                />
                            </View>
                            <View style={[styles.subLeft]}>
                                <Text style={styles.lblInfo}>Mua sau</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", paddingLeft: 15 }}>
                    <Text style={[styles.flex4, styles.lblMaGiamGia]}>Mã giảm giá đã lưu</Text>
                    <Text style={[styles.flex6, styles.lblInfo]}>Xem tại đây</Text>
                </View>
                <View
                    style={{ flexDirection: "row", padding: 15, justifyContent: "space-between" }}
                >
                    <View style={[styles.footerLeft]}>
                        <View style={{ width: 32, height: 16, backgroundColor: "#F2DD1B" }} />
                        <Text style={styles.lblMaGiamGIa}>Mã giảm giá</Text>
                    </View>
                    <View style={[styles.footerRight]}>
                        <Pressable style={styles.btnTop}>
                            <Text style={[styles.lblOfBtnTop]}>Áp dụng</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={[styles.flex6]}>
                <View>
                    <View
                        style={{
                            backgroundColor: "#ffff",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingHorizontal: 15,
                            marginVertical: 15,
                        }}
                    >
                        <Text style={[styles.flex6_top_title]}>
                            Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
                        </Text>
                        <Text style={[styles.flex6_top_link]}>Nhập tại đây?</Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: "#ffff",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingHorizontal: 15,
                        }}
                    >
                        <Text style={[styles.flex6_top_text]}>Tạm tính</Text>
                        <Text style={[styles.flex6_top_number]}>141.800 đ</Text>
                    </View>
                </View>
                <View style={[styles.flex6_bottom]}>
                    <View
                        style={{
                            backgroundColor: "#ffff",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingHorizontal: 15,
                        }}
                    >
                        <Text style={[styles.flex6_bottom_text]}>Thành tiền</Text>
                        <Text style={[styles.flex6_top_number]}>141.800 đ</Text>
                    </View>
                    <Pressable style={styles.flex6_bottom_btn}>
                        <Text style={styles.flex6_bottom_btnText}>TIẾN HÀNH ĐẶT HÀNG</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};
