import React, { FC, useContext } from "react"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { NavigatorParamList } from "../../navigators"
import { UserInfo } from "../../components/UserInfo"
import { ProfileForm } from "../../components/ProfileForm"
import { UserContext } from "../../app"

const FULL: ViewStyle = { flex: 1 }

export const WelcomeScreen: FC<StackScreenProps<NavigatorParamList, "welcome">> = observer(() => {
  return (
    <View testID="WelcomeScreen" style={FULL}>
      <UserInfo />
      <ProfileForm />
    </View>
  )
})
