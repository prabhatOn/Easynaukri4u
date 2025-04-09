"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@clerk/nextjs"

export default function SSOSignupCallback() {
  const { isLoaded, isSignedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.replace("/") // ✅ Redirect to homepage
    }
  }, [isLoaded, isSignedIn, router])

  return <p>Signing you in...</p>
}
