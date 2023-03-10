import React from "react";
import { Image, Platform, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useAppNavigation } from "@/utils/hooks";
import * as Icons from "@/components/icons";
import { rs, rsui } from "@/utils";

const Walkthrough1 = () => {
  const navigator = useAppNavigation();
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff", height: 1000, flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }}>
      <View style={{ alignItems: "center" }}>
        <Image source={require("@/assets/images/walkthrough1.png")} />
      </View>
      <View style={{ left: rs(30), top: rsui(20), backgroundColor: "#fff" }}>
        <Text
          style={{
            fontSize: rsui(21),
            textAlign: "left",
            fontFamily: "Plus Jakarta Sans"
          }}>
          Hayatta{"\n"}
          <Text
            style={{
              fontWeight: "bold",
              textDecorationLine: "line-through",
              textDecorationStyle: "solid"
            }}>
            Engel
          </Text>
          {"\n"}Tanımayan{"\n"}Bir{"\n"}Uygulama
        </Text>
      </View>
      <View
        style={{ alignItems: "center", top: rsui(60), backgroundColor: "#fff" }}>
        <Icons.Point1 />
      </View>
      <View style={{ top: rsui(53) }}>
        <TouchableOpacity
          style={{ right: rs(30) }}
          onPress={() => navigator.navigate("Walkthrough", { screen: "Two" })}>
          <Text style={{ color: "#1C215D", textAlign: "right" }}>Sonraki</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Walkthrough1;
