import { GoogleAnalytics } from '@next/third-parties/google'

export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  if (!gaId) {
    console.warn('Google Analytics ID is not set')
    return null
  }

  return <GoogleAnalytics gaId={gaId} />
}



