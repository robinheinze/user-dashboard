import React, { useState } from "react"
import { View, ViewStyle } from "react-native"
import { spacing } from "../theme"
import { Button } from "./button/button"
import { TextField } from "./text-field/text-field"

const $containerStyle = { padding: spacing[3] } as ViewStyle
const $inputStyle = { padding: spacing[2], color: "black" } as ViewStyle

export const ProfileForm = () => {
  const [newName, setNewName] = useState("")
  const [newAvatarUrl, setNewAvatarUrl] = useState("")

  return (
    <View style={$containerStyle}>
      <TextField
        inputStyle={$inputStyle}
        preset="outlined"
        placeholder="Name"
        value={newName}
        onChangeText={(text) => setNewName(text)}
      />
      <TextField
        inputStyle={$inputStyle}
        preset="outlined"
        placeholder="Avatar URL"
        value={newAvatarUrl}
        onChangeText={(text) => setNewAvatarUrl(text)}
      />
      <Button
        text="Save"
        onPress={() => {
          // TODO
        }}
      />
    </View>
  )
}
