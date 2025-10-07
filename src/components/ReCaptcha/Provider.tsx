'use client'

import { useRef, ReactNode } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

type ReCaptchaProviderProps = {
  // eslint-disable-next-line no-unused-vars
  onVerify: (token: string | null) => void
  // eslint-disable-next-line no-unused-vars
  children: (execute: () => void) => ReactNode
}

export default function ReCaptchaProvider({ onVerify, children }: ReCaptchaProviderProps) {
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  const handleExecute = async () => {
    if (!siteKey) {
      // Skip reCAPTCHA if no site key is configured
      console.warn('ReCAPTCHA site key not configured, skipping verification')
      onVerify('skip-recaptcha')
      return
    }
    
    const token = await recaptchaRef.current?.executeAsync()
    recaptchaRef.current?.reset()
    onVerify(token ?? null)
  }

  return (
    <>
      {siteKey && (
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={siteKey}
          size="invisible"
          badge="bottomleft"
          style={{ display: 'none' }}
        />
      )}
      {children(handleExecute)}
    </>
  )
}
