import React, { useContext } from "react"
import { Image, Text, View } from "react-native"
import { UserContext } from "../app"

export const UserInfo = () => {
  const user = useContext(UserContext)

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image style={{ height: 40, width: 40 }} source={{ uri: user.avatarUrl }} />
      <Text>{user.name}</Text>
    </View>
  )
}
