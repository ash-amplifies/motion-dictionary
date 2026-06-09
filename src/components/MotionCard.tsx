'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import PreviewCanvas from './PreviewCanvas'
import type { MotionItem } from '@/data/motions'

function CopyButton({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <Tooltip>
      <TooltipTrigger render={<span className="w-full" />}>
        <Button
          onClick={handleCopy}
          className="w-full"
          variant={copied ? 'secondary' : 'default'}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={copied ? 'copied' : 'copy'}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.15 }}
            >
              {copied ? '✓ Copied!' : 'I want this!'}
            </motion.span>
          </AnimatePresence>
        </Button>
      </TooltipTrigger>
      <TooltipContent>Copy AI prompt to clipboard</TooltipContent>
    </Tooltip>
  )
}

export default function MotionCard({
  motion: item,
  index,
}: {
  motion: MotionItem
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, scale: 0.97 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.5), ease: [0.0, 0.0, 0.2, 1] }}
      layout
    >
      <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-colors duration-200 h-full flex flex-col">
        <PreviewCanvas animationKey={item.animationKey} />
        <CardContent className="p-4 space-y-2 flex-1">
          <Badge variant="secondary" className="text-xs">
            {item.badge}
          </Badge>
          <h3 className="font-semibold text-base text-foreground">{item.name}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
        </CardContent>
        <CardFooter className="px-4 pb-4">
          <CopyButton prompt={item.aiPrompt} />
        </CardFooter>
      </Card>
    </motion.div>
  )
}
