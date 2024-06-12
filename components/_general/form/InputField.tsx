import {
  Keyboard,
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native";
import React, { forwardRef, useEffect, useState } from "react";
import TextComponent from "../TextComponent";
import { colorSchemes } from "@/utils/_variables";
import { blackColor, redColor, whiteColor } from "@/assets/colors";
import { InputFieldType } from "@/utils/types";
import { EyeIcon } from "@/assets/icons";
import { getComponentLayoutProperties } from "@/utils/functions";
import { useActionContext } from "@/context";

const IconButton: React.FC<{
  action?: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
  onLayout?: (event: LayoutChangeEvent) => void;
}> = ({ action, children, style, onLayout }) => {
  return action && typeof action === "function" ? (
    <TouchableOpacity
      onPress={action}
      onLayout={onLayout}
      style={{
        ...style
      }}
    >
      {children}
    </TouchableOpacity>
  ) : (
    <Pressable
      onLayout={onLayout}
      style={{
        ...style
      }}
    >
      {children}
    </Pressable>
  );
};

const InputField = forwardRef<TextInput, InputFieldType>(
  (
    {
      leftIcon,
      rightIcon,
      error,
      leftIconAction,
      rightIconAction,
      rightIconStyle,
      leftIconStyle,
      secureTextEntry,
      style,
      inputStyle,
      errorStyle,
      label,
      labelStyle,
      inputParentStyle,
      iconStyle,
      iconSize,
      inputBorderColor,
      placeholderTextColor,
      onBlur,
      leftContent,
      rightContent,
      preventKeyBoardAutoHide,
      keyboardType,
      ...props
    },
    ref
  ) => {
    const { colorScheme } = useActionContext(),
      [hidePassword, setHidePassword] = useState<boolean>(false),
      [leftIconWidth, setLeftIconWidth] = useState<number>(0),
      [rightIconWidth, setRightIconWidth] = useState<number>(0),
      inputPadding = 15;

    useEffect(() => {
      setHidePassword(secureTextEntry || false);
    }, [secureTextEntry]);
    return (
      <View
        style={{
          gap: 10,
          ...style
        }}
      >
        {label && (
          <TextComponent
            style={{
              ...labelStyle
            }}
          >
            {label}
          </TextComponent>
        )}
        <View
          style={{
            width: "100%",
            position: "relative",
            flexDirection: "row",
            gap: rightContent || leftContent ? 10 : 0,
            ...inputParentStyle
          }}
        >
          {leftContent}
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              position: "relative",
              alignItems: "stretch"
            }}
          >
            {leftIcon && (
              <IconButton
                onLayout={(event) => {
                  let { width } = getComponentLayoutProperties(event);
                  setLeftIconWidth(width);
                }}
                style={{
                  left: 0,
                  ...styles.generalIconsStyle,
                  ...iconStyle,
                  ...leftIconStyle
                }}
                action={leftIconAction}
              >
                {leftIcon}
              </IconButton>
            )}
            <TextInput
              onBlur={(e) => {
                if (!preventKeyBoardAutoHide) {
                  Keyboard.dismiss();
                }
                if (onBlur) {
                  onBlur(e);
                }
              }}
              ref={ref}
              placeholderTextColor={
                placeholderTextColor || colorScheme === colorSchemes.dark
                  ? whiteColor.opacity400
                  : blackColor.opacity400
              }
              style={{
                borderWidth: 1,
                fontSize: 15,
                borderColor: error
                  ? redColor.opacity400
                  : inputBorderColor || colorScheme === colorSchemes.dark
                  ? whiteColor.opacity200
                  : blackColor.opacity200,
                borderRadius: 10,
                paddingVertical: 20,
                paddingLeft: leftIcon ? 5 + leftIconWidth : inputPadding,
                paddingRight: rightIcon ? rightIconWidth : inputPadding,
                flex: 1,
                color:
                  colorScheme === colorSchemes.dark
                    ? whiteColor.default
                    : blackColor.default,
                ...inputStyle
              }}
              secureTextEntry={hidePassword}
              keyboardType={
                secureTextEntry
                  ? !hidePassword
                    ? "visible-password"
                    : keyboardType
                  : keyboardType
              }
              {...props}
            />
            {secureTextEntry && !rightIcon ? (
              <IconButton
                onLayout={(event) => {
                  let { width } = getComponentLayoutProperties(event);
                  setRightIconWidth(width);
                }}
                style={{
                  right: 0,
                  ...styles.generalIconsStyle,
                  ...iconStyle,
                  ...rightIconStyle
                }}
                action={() => {
                  setHidePassword((prevState) => !prevState);
                }}
              >
                <EyeIcon size={iconSize || 30} />
              </IconButton>
            ) : (
              rightIcon && (
                <IconButton
                  onLayout={(event) => {
                    let { width } = getComponentLayoutProperties(event);
                    setRightIconWidth(width);
                  }}
                  style={{
                    right: 0,
                    ...styles.generalIconsStyle,
                    ...iconStyle,
                    ...rightIconStyle
                  }}
                  action={rightIconAction}
                >
                  {rightIcon}
                </IconButton>
              )
            )}
          </View>
          {rightContent}
        </View>
        {error && typeof error !== "boolean" && (
          <TextComponent
            style={{
              color: redColor.opacity600,
              ...errorStyle
            }}
          >
            {error}
          </TextComponent>
        )}
      </View>
    );
  }
);

export default InputField;

const styles = StyleSheet.create({
  generalIconsStyle: {
    paddingHorizontal: 10,
    position: "absolute",
    height: "100%",
    top: 0,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
