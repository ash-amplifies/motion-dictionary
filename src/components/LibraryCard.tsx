'use client'

import { motion } from 'motion/react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { LibraryItem } from '@/data/libraries'

export default function LibraryCard({ library, index }: { library: LibraryItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, scale: 0.97 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.08, 0.5), ease: [0.0, 0.0, 0.2, 1] }}
      layout
    >
      <Card className="h-full flex flex-col overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-base leading-tight">{library.name}</CardTitle>
          <p className="text-xs text-muted-foreground italic">{library.badge}</p>
        </CardHeader>
        <CardContent className="flex-1 space-y-3 text-sm">
          <p className="text-muted-foreground leading-relaxed">{library.description}</p>
          <div>
            <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1">Use when:</p>
            <p className="text-muted-foreground leading-relaxed">{library.useWhen}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1">Key features:</p>
            <ul className="space-y-0.5">
              {library.features.map((f, i) => (
                <li key={i} className="text-muted-foreground flex items-start gap-1.5">
                  <span className="text-primary mt-0.5">·</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-2">
            <a href={library.url} target="_blank" rel="noopener noreferrer" className="block w-full">
              <Button variant="outline" size="sm" className="w-full">
                Visit Site →
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
