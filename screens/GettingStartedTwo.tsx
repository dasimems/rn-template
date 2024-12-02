import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import Container from "@/components/_layouts/Container";
import { primaryColor, whiteColor } from "@/assets/colors";
import { ScreenNames, windowWidth } from "@/utils/_variables";
import {
  GettingStartedImageOne,
  GettingStartedImageTwo
} from "@/assets/images";
import Button from "@/components/_general/Button";
import TextComponent from "@/components/_general/TextComponent";
import { useNavigation } from "@react-navigation/native";

const GettingStartedTwo = () => {
  const { navigate } = useNavigation();
  return (
    <Container>
      <Button
        action={() => {
          navigate(ScreenNames.GettingStartedThree.name as never);
        }}
        style={{
          position: "absolute",
          top: 40,
          right: 40,
          width: "auto",
          zIndex: 9,
          backgroundColor: primaryColor.default,
          borderRadius: 90
        }}
      >
        <TextComponent color={whiteColor.default}>Next</TextComponent>
      </Button>
      <ImageBackground
        source={GettingStartedImageTwo}
        style={{
          ...StyleSheet.absoluteFillObject
        }}
      />
    </Container>
  );
};

export default GettingStartedTwo;

const styles = StyleSheet.create({});
