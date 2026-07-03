'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Session } from '@supabase/supabase-js'
import { supabase } from './client'

// Use Auth State
export const useAuthState = () => {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    // Get initial session
    const getSession = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession()

        if (error) throw error
        setSession(session)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    getSession()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setLoading(false)
    })

    return () => {
      subscription?.unsubscribe()
    }
  }, [])

  return { session, loading, error }
}

// Use Require Auth
export const useRequireAuth = () => {
  const router = useRouter()
  const { session, loading } = useAuthState()

  useEffect(() => {
    if (!loading && !session) {
      router.push('/auth/login')
    }
  }, [session, loading, router])

  return { session, loading }
}
