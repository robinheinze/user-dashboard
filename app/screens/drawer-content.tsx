import React from "react"
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer"

import { UserInfo } from "../components/UserInfo"

interface CustomDrawerContentProps extends DrawerContentComponentProps {
  user: { name: string; avatarUrl: string }
}

export function CustomDrawerContent({ user, ...rest }: CustomDrawerContentProps) {
  return (
    <DrawerContentScrollView {...rest}>
      <UserInfo name={user.name} avatarUrl={user.avatarUrl} />
      <DrawerItemList {...rest} />
    </DrawerContentScrollView>
  )
}
