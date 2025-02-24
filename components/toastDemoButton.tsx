"use client"

import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export function ToastDemoButton() {
  return <Button onClick={() => toast("Operation successful!")}>Show Toast</Button>
}

