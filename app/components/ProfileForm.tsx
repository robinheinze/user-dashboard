import React, { useContext, useState } from "react"
import { View } from "react-native"
import { UserContext } from "../app"
import { Button } from "./button/button"
import { TextField } from "./text-field/text-field"

export const ProfileForm = () => {
  const [newName, setNewName] = useState("")
  const userContext = useContext(UserContext)
  return (
    <View style={{ padding: 16 }}>
      <TextField
        inputStyle={{ color: "black" }}
        preset="outlined"
        placeholder="Name"
        value={newName}
        onChangeText={(text) => setNewName(text)}
      />
      <Button
        text="Save"
        onPress={() => {
          userContext.setName(newName)
          setNewName("")
        }}
      />
    </View>
  )
}
