import React, { useContext } from "react"
import { Image, ImageStyle, Text, View, ViewStyle } from "react-native"
import { UserContext } from "../app"
import { spacing } from "../theme"

const $containerStyle = {
  flexDirection: "row",
  alignItems: "center",
  padding: spacing[2],
} as ViewStyle

const $imageStyle = {
  height: 40,
  width: 40,
  borderRadius: 20,
  marginRight: spacing[2],
} as ImageStyle

export function UserInfo(props: { name: string; avatarUrl: string }) {
  const user = useContext(UserContext)

  return (
    <View style={$containerStyle}>
      <Image style={$imageStyle} source={{ uri: props.avatarUrl }} />
      <Text>{user.name}</Text>
    </View>
  )
}
