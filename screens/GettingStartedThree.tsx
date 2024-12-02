import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import Container from "@/components/_layouts/Container";
import { blackColor, primaryColor, whiteColor } from "@/assets/colors";
import { padding, windowHeight, windowWidth } from "@/utils/_variables";
import { GettingStartedImageThree } from "@/assets/images";
import Button from "@/components/_general/Button";
import TextComponent from "@/components/_general/TextComponent";

const GettingStartedThree = () => {
  return (
    <Container
      style={{
        justifyContent: "flex-end"
      }}
    >
      <View
        style={{
          justifyContent: "flex-end",
          gap: 10,
          height: "100%",
          width: "100%",
          zIndex: 9,
          paddingHorizontal: padding,
          backgroundColor: blackColor.opacity100
        }}
      >
        <View
          style={{
            width: "100%",
            gap: 20,
            paddingBottom: windowHeight * 0.02
          }}
        >
          <Button>
            <TextComponent
              textAlign="center"
              fontSize={20}
              color={primaryColor.default}
            >
              Fast login
            </TextComponent>
          </Button>

          <TextComponent
            textAlign="center"
            fontSize={22}
            color={whiteColor.default}
          >
            By signing in you agree to privacy policy and terms of use.
          </TextComponent>
        </View>
      </View>
      <ImageBackground
        source={GettingStartedImageThree}
        style={{
          ...StyleSheet.absoluteFillObject
        }}
      />
    </Container>
  );
};

export default GettingStartedThree;

const styles = StyleSheet.create({});
