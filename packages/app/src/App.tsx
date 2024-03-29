import React from "react";
import {
  Image,
  ImageSourcePropType,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text as TextRN,
  View,
} from "react-native";
import { subplatform } from "./config";
import LogoSrc from "./logo.png";
import { Text } from "@my-app/core-ui";
import { EffectorExample } from "./EffectorExample";
// import { AsyncStorageExample } from "./AsyncStorageExample";

export function App(): JSX.Element {
  const platformValue = subplatform
    ? `${Platform.OS} (${subplatform})`
    : Platform.OS;
  return (
    <SafeAreaView style={styles.root}>
      {/* On React Native for Web builds coming from CRA, TypeScript 
          complains about the image type, so we cast it as a workaround  */}
      <Image style={styles.logo} source={LogoSrc as ImageSourcePropType} />
      <Text
        style={styles.text}
        color="yellow"
        fontWeight={900}
        bg="black"
        my={[5, 10]}
        p={2}
      >
        Hello from Oleg (:
      </Text>
      <TextRN style={styles.text}>& React Native</TextRN>
      <View style={styles.platformRow}>
        <TextRN style={styles.text}>Platform: </TextRN>
        <View style={styles.platformBackground}>
          <TextRN style={styles.platformValue}>{platformValue}</TextRN>
        </View>
      </View>
      <EffectorExample />
      {/* <AsyncStorageExample /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: "600",
  },
  platformRow: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  platformValue: {
    fontSize: 28,
    fontWeight: "500",
  },
  platformBackground: {
    backgroundColor: "#ececec",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#d4d4d4",
    paddingHorizontal: 6,
    borderRadius: 6,
    alignItems: "center",
  },
});
