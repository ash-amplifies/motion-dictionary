'use client'

import { useState, useMemo } from 'react'
import { AnimatePresence } from 'motion/react'
import Sidebar from '@/components/Sidebar'
import MotionCard from '@/components/MotionCard'
import LibraryCard from '@/components/LibraryCard'
import { motions } from '@/data/motions'
import { libraries } from '@/data/libraries'

const LIBRARIES_TAB = '⚙️ Motion Libraries & Tools'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    let list = motions
    if (activeCategory !== 'All' && activeCategory !== LIBRARIES_TAB) {
      list = list.filter(m => m.category === activeCategory)
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(m => m.name.toLowerCase().includes(q) || m.badge.toLowerCase().includes(q))
    }
    return list
  }, [activeCategory, search])

  const showLibraries = activeCategory === LIBRARIES_TAB

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      <Sidebar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        totalCount={motions.length}
        filteredCount={filtered.length}
        search={search}
        onSearchChange={setSearch}
      />

      <main className="flex-1 overflow-y-auto">
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="mb-8 md:ml-0 ml-12">
            <h1 className="text-2xl font-bold text-foreground">
              {showLibraries
                ? 'Motion Libraries & Tools'
                : activeCategory === 'All'
                ? 'All Animations'
                : activeCategory}
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              {showLibraries
                ? 'The best tools for building UI animations'
                : `${filtered.length} animation${filtered.length !== 1 ? 's' : ''} — hover any card to replay`}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {showLibraries ? (
              <div key="libraries" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {libraries.map((lib, i) => (
                  <LibraryCard key={lib.name} library={lib} index={i} />
                ))}
              </div>
            ) : (
              <div
                key={activeCategory + search}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
              >
                <AnimatePresence>
                  {filtered.map((item, i) => (
                    <MotionCard key={item.id} motion={item} index={i} />
                  ))}
                </AnimatePresence>
                {filtered.length === 0 && (
                  <div className="col-span-full py-24 text-center text-muted-foreground">
                    No animations match &quot;{search}&quot;
                  </div>
                )}
              </div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}
