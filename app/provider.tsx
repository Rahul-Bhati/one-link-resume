import { SessionProvider } from "next-auth/react"

export default function Provider({ childern }: { childern: React.ReactNode }) {
  return (
    <SessionProvider>
      {childern}
    </SessionProvider>
  )
}