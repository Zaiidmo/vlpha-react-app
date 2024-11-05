import React from 'react'
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "./ui/alert-dialog"

interface GlassModalProps {
  trigger: React.ReactNode
  children: React.ReactNode
}

export function GlassModal({ trigger, children }: GlassModalProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {trigger}
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-[425px] backdrop-filter backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl">
        {children}
      </AlertDialogContent>
    </AlertDialog>
  )
}
