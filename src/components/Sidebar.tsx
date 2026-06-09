'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { categories } from '@/data/motions'

interface SidebarProps {
  activeCategory: string
  onCategoryChange: (cat: string) => void
  totalCount: number
  filteredCount: number
  search: string
  onSearchChange: (s: string) => void
}

function SidebarContent({
  activeCategory,
  onCategoryChange,
  totalCount,
  filteredCount,
  search,
  onSearchChange,
  onClose,
}: SidebarProps & { onClose?: () => void }) {
  const handleCategory = (cat: string) => {
    onCategoryChange(cat)
    onClose?.()
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-4 pt-5 pb-4 border-b border-border">
        <div className="font-bold text-lg text-foreground tracking-tight">Motionary</div>
        <div className="text-xs text-muted-foreground mt-0.5">
          The names behind every UI animation
        </div>
      </div>

      {/* Search */}
      <div className="px-3 py-3 border-b border-border">
        <Input
          placeholder="Search animations…"
          value={search}
          onChange={e => onSearchChange(e.target.value)}
          className="h-8 text-sm"
        />
      </div>

      {/* Categories */}
      <ScrollArea className="flex-1 px-2 py-2">
        <div className="space-y-0.5">
          {categories.map(cat => {
            const isAll = cat === 'All'
            const isActive = activeCategory === cat
            return (
              <Button
                key={cat}
                variant="ghost"
                size="sm"
                onClick={() => handleCategory(cat)}
                className={`w-full justify-between text-left h-8 px-3 text-sm font-normal rounded-md transition-colors ${
                  isActive
                    ? 'bg-accent text-accent-foreground border-l-2 border-primary pl-[10px]'
                    : 'border-l-2 border-transparent pl-[10px] hover:bg-accent/50'
                }`}
              >
                <span className="truncate">{cat}</span>
                {isAll && (
                  <Badge variant="secondary" className="text-xs ml-2 shrink-0">
                    {search ? filteredCount : totalCount}
                  </Badge>
                )}
              </Button>
            )
          })}
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-border">
        <p className="text-xs text-muted-foreground">v1.0 · 33 animations</p>
      </div>
    </div>
  )
}

export default function Sidebar(props: SidebarProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-60 shrink-0 flex-col bg-card border-r border-border h-screen sticky top-0">
        <SidebarContent {...props} />
      </aside>

      {/* Mobile hamburger + sheet */}
      <div className="md:hidden fixed top-3 left-3 z-50">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0 bg-card">
            <SidebarContent {...props} onClose={() => setOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
