import React from "react"
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"

import { UserInfo } from "../components/UserInfo"

export function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <UserInfo />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}
