import React from "react"
import './main.global.scss'
import { hot } from "react-hot-loader/root"
import { Layout } from "./shared/Layout"
import { Header } from "./shared/Header"
import { Content } from "./shared/Content"
import { CardsList } from "./shared/CardsList"
import { Text } from './shared/Text'
import { Break } from "./shared/Break"
import { EColor } from './shared/constants/enums'

function AppComponent () {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        <Break size={20} top />
        <Text size={20} mobileSize={28} color={EColor.green} bold>
          Label1
        </Text>
        <Break size={8} mobileSize={16} top />
        <Text size={20}>
          Label2
        </Text>
        <Break size={16} inline />
        <Text size={20} mobileSize={16} upperCase>
          Label3
        </Text>
      </Content>
    </Layout>
  )
}

export const App = hot(() => <AppComponent />)
