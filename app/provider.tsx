import { SessionProvider } from "next-auth/react"

export default function Provider({ childern }) {
  return (
    <SessionProvider>
      {childern}
    </SessionProvider>
  )
}