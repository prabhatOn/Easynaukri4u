// app/login/sso-callback/page.tsx
"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@clerk/nextjs"

export default function SSORedirectPage() {
  const { isSignedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isSignedIn) {
      router.push("/") // or wherever you want to redirect after login
    }
  }, [isSignedIn, router])

  return <p>Redirecting...</p>
}
