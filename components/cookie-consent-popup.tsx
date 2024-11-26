'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { X } from 'lucide-react'
import { setCookie, getCookie } from '@/lib/cookies'

export function CookieConsentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    const consentGiven = getCookie('cookieConsent')
    if (!consentGiven) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    setCookie('cookieConsent', JSON.stringify(preferences), 365) // Set cookie for 1 year
    setIsVisible(false)
  }

  const handleAcceptAll = () => {
    setPreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    })
    setCookie('cookieConsent', JSON.stringify({ necessary: true, functional: true, analytics: true, marketing: true }), 365)
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 bg-background border border-border rounded-lg p-6 shadow-lg z-50 max-w-2xl mx-auto"
        >
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <h2 className="text-lg font-semibold">Cookie Preferences</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsVisible(false)} aria-label="Close">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              We use cookies to enhance your browsing experience, analyze our traffic, and provide social media features. 
              Please select your preferences below.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" onClick={() => setShowDetails(true)}>Customize</Button>
              <Button variant="outline" size="sm" onClick={() => setIsVisible(false)}>Decline All</Button>
              <Button variant="default" size="sm" onClick={handleAcceptAll}>Accept All</Button>
            </div>
          </div>
        </motion.div>
      )}

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cookie Preferences</DialogTitle>
            <DialogDescription>
              Customize your cookie preferences. Necessary cookies are always enabled.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="necessary" className="flex flex-col">
                <span>Necessary</span>
                <span className="font-normal text-sm text-muted-foreground">Required for the website to function</span>
              </Label>
              <Switch id="necessary" checked={preferences.necessary} disabled />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="functional" className="flex flex-col">
                <span>Functional</span>
                <span className="font-normal text-sm text-muted-foreground">Enhance website functionality and personalization</span>
              </Label>
              <Switch 
                id="functional" 
                checked={preferences.functional}
                onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, functional: checked }))}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="analytics" className="flex flex-col">
                <span>Analytics</span>
                <span className="font-normal text-sm text-muted-foreground">Help us understand how visitors interact with the website</span>
              </Label>
              <Switch 
                id="analytics" 
                checked={preferences.analytics}
                onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, analytics: checked }))}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="marketing" className="flex flex-col">
                <span>Marketing</span>
                <span className="font-normal text-sm text-muted-foreground">Used to track visitors across websites for advertising purposes</span>
              </Label>
              <Switch 
                id="marketing" 
                checked={preferences.marketing}
                onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, marketing: checked }))}
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setShowDetails(false)}>Cancel</Button>
            <Button onClick={() => { handleAccept(); setShowDetails(false); }}>Save Preferences</Button>
          </div>
        </DialogContent>
      </Dialog>
    </AnimatePresence>
  )
}


