import React, { FC } from "react"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { UserInfo } from "../../components/UserInfo"
import { ProfileForm } from "../../components/ProfileForm"

const FULL: ViewStyle = { flex: 1 }

export const WelcomeScreen: FC<StackScreenProps<NavigatorParamList, "welcome">> = () => {
  return (
    <View testID="WelcomeScreen" style={FULL}>
      <ProfileForm />
    </View>
  )
}
