import React from 'react'
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from '@react-email/components'
const EmailTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome To Ashmif</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Text className="font-bold text-2xl">Hello {name}</Text>
            <Link href="https://ashmif.com">www.ashmif.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default EmailTemplate
