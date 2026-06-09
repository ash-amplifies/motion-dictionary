'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion, useInView, useMotionValue, animate } from 'motion/react'

// ─── CSS-only animation renderers ───────────────────────────────────────────

function CssAnim({ isPlaying, children }: { isPlaying: boolean; children: React.ReactNode }) {
  return (
    <div style={{ animationPlayState: isPlaying ? 'running' : 'paused' } as React.CSSProperties}>
      {children}
    </div>
  )
}

function SpinnerAnim({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        style={{
          width: 48,
          height: 48,
          border: '3px solid rgba(255,255,255,0.2)',
          borderTopColor: '#a78bfa',
          borderRadius: '50%',
          animation: 'spin 0.7s linear infinite',
          animationPlayState: isPlaying ? 'running' : 'paused',
        }}
      />
    </div>
  )
}

function PulseAnim({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          backgroundColor: '#a78bfa',
          animation: 'pulseAnim 1.5s ease-in-out infinite',
          animationPlayState: isPlaying ? 'running' : 'paused',
        }}
      />
    </div>
  )
}

function PingRippleAnim({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative">
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: '50%',
            backgroundColor: '#a78bfa',
            position: 'relative',
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 16,
            height: 16,
            borderRadius: '50%',
            backgroundColor: '#a78bfa',
            animation: 'pingAnim 1.5s ease-out infinite',
            animationPlayState: isPlaying ? 'running' : 'paused',
          }}
        />
      </div>
    </div>
  )
}

function ShimmerAnim({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-3 px-8">
      {[80, 100, 60].map((w, i) => (
        <div
          key={i}
          style={{
            height: 12,
            width: `${w}%`,
            borderRadius: 6,
            background: 'linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmerAnim 1.5s ease-in-out infinite',
            animationPlayState: isPlaying ? 'running' : 'paused',
          }}
        />
      ))}
    </div>
  )
}

function ProgressBarAnim({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-8 gap-4">
      <div style={{ width: '100%', height: 8, backgroundColor: '#2a2a2a', borderRadius: 4, overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: '#a78bfa',
            borderRadius: 4,
            transformOrigin: 'left',
            animation: 'progressAnim 2s ease-in-out infinite',
            animationPlayState: isPlaying ? 'running' : 'paused',
          }}
        />
      </div>
    </div>
  )
}

function BouncingDotsAnim({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="flex items-center justify-center w-full h-full gap-2">
      {[0, 150, 300].map((delay, i) => (
        <div
          key={i}
          style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: '#a78bfa',
            animation: `bounceDot 0.6s ease-in-out infinite`,
            animationDelay: `${delay}ms`,
            animationPlayState: isPlaying ? 'running' : 'paused',
          }}
        />
      ))}
    </div>
  )
}

function MorphingLoaderAnim({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        style={{
          width: 48,
          height: 48,
          backgroundColor: '#a78bfa',
          animation: 'morphAnim 1.2s ease-in-out infinite',
          animationPlayState: isPlaying ? 'running' : 'paused',
        }}
      />
    </div>
  )
}

function TypewriterAnim({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        style={{
          color: '#a78bfa',
          fontFamily: 'monospace',
          fontSize: 20,
          fontWeight: 600,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          borderRight: '2px solid #a78bfa',
          animation: isPlaying
            ? 'typewriter 2s steps(14) forwards, blink 0.7s step-end infinite'
            : 'none',
          width: isPlaying ? 0 : '14ch',
        }}
      >
        Hello, World!
      </div>
    </div>
  )
}

function GradientTextSweepAnim({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        style={{
          fontSize: 28,
          fontWeight: 800,
          background: 'linear-gradient(90deg, #6c63ff, #ff6584, #6c63ff)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'gradientSweep 3s linear infinite',
          animationPlayState: isPlaying ? 'running' : 'paused',
        }}
      >
        Motionary
      </div>
    </div>
  )
}

function EaseOutDemoAnim({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="flex items-center justify-center w-full h-full px-8">
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 8,
          backgroundColor: '#a78bfa',
          animation: 'easeOutAnim 1.2s cubic-bezier(0.0,0.0,0.2,1) infinite',
          animationPlayState: isPlaying ? 'running' : 'paused',
        }}
      />
    </div>
  )
}

function EaseInDemoAnim({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="flex items-center justify-center w-full h-full px-8">
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 8,
          backgroundColor: '#f472b6',
          animation: 'easeInAnim 1.2s cubic-bezier(0.4,0.0,1,1) infinite',
          animationPlayState: isPlaying ? 'running' : 'paused',
        }}
      />
    </div>
  )
}

function LinearDemoAnim({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="flex items-center justify-center w-full h-full px-8">
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 8,
          backgroundColor: '#34d399',
          animation: 'linearAnim 1.2s linear infinite',
          animationPlayState: isPlaying ? 'running' : 'paused',
        }}
      />
    </div>
  )
}

function ClipPathRevealAnim({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        style={{
          width: 200,
          height: 60,
          borderRadius: 8,
          background: 'linear-gradient(135deg, #6c63ff, #a78bfa)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 700,
          fontSize: 18,
          animation: 'clipReveal 2s ease-out infinite',
          animationPlayState: isPlaying ? 'running' : 'paused',
        }}
      >
        Revealed
      </div>
    </div>
  )
}

function GlassmorphismShimmerAnim({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div
      className="flex items-center justify-center w-full h-full"
      style={{
        background: 'linear-gradient(135deg, #6c63ff 0%, #ff6584 50%, #43e97b 100%)',
      }}
    >
      <div
        style={{
          width: 160,
          height: 90,
          borderRadius: 16,
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.25)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)',
            backgroundSize: '200% 100%',
            animation: 'shimmerAnim 3s ease-in-out infinite',
            animationPlayState: isPlaying ? 'running' : 'paused',
          }}
        />
      </div>
    </div>
  )
}

function MotionPathAnim({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <svg width="260" height="80" viewBox="0 0 260 80" style={{ overflow: 'visible' }}>
        <path
          d="M 10,60 Q 130,-20 250,60"
          stroke="rgba(167,139,250,0.3)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 4"
        />
        <circle
          cx="0"
          cy="0"
          r="8"
          fill="#a78bfa"
          style={{
            offsetPath: "path('M 10,60 Q 130,-20 250,60')",
            animation: 'motionPathAnim 2s ease-in-out infinite',
            animationPlayState: isPlaying ? 'running' : 'paused',
          } as React.CSSProperties}
        />
      </svg>
    </div>
  )
}

function SvgMorphAnim({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <svg width="80" height="80" viewBox="0 0 80 80">
        <path
          fill="#a78bfa"
          style={{
            animation: 'svgMorph 2s ease-in-out infinite alternate',
            animationPlayState: isPlaying ? 'running' : 'paused',
          }}
          d="M 40,5 L 75,27.5 L 75,52.5 L 40,75 L 5,52.5 L 5,27.5 Z"
        />
      </svg>
    </div>
  )
}

function KenBurnsAnim({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="w-full h-full overflow-hidden relative">
      <div
        style={{
          position: 'absolute',
          inset: -20,
          background: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
          animation: 'kenBurns 6s ease-in-out infinite alternate',
          animationPlayState: isPlaying ? 'running' : 'paused',
          willChange: 'transform',
        }}
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: 3,
              height: 3,
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.6)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 16,
          left: 16,
          color: 'white',
          fontSize: 14,
          fontWeight: 600,
          opacity: 0.9,
        }}
      >
        Ken Burns
      </div>
    </div>
  )
}

function ShakeAnim({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        style={{
          width: 160,
          height: 40,
          borderRadius: 8,
          border: '2px solid #f87171',
          backgroundColor: 'rgba(248,113,113,0.1)',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 12,
          color: '#f87171',
          fontSize: 14,
          animation: 'shakeAnim 0.5s ease-in-out infinite',
          animationPlayState: isPlaying ? 'running' : 'paused',
        }}
      >
        Invalid input
      </div>
    </div>
  )
}

function ParallaxScrollAnim({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="flex items-center justify-center w-full h-full overflow-hidden relative">
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)',
          animation: 'parallaxBg 3s ease-in-out infinite alternate',
          animationPlayState: isPlaying ? 'running' : 'paused',
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          background: 'rgba(167,139,250,0.15)',
          border: '1px solid rgba(167,139,250,0.3)',
          borderRadius: 8,
          padding: '8px 20px',
          color: '#a78bfa',
          fontWeight: 600,
          fontSize: 14,
          animation: 'parallaxFg 3s ease-in-out infinite alternate',
          animationPlayState: isPlaying ? 'running' : 'paused',
        }}
      >
        Foreground
      </div>
    </div>
  )
}

function StaggerListAnim({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="flex flex-col justify-center w-full h-full px-8 gap-2">
      {['Item one', 'Item two', 'Item three', 'Item four'].map((item, i) => (
        <div
          key={i}
          style={{
            height: 28,
            borderRadius: 6,
            backgroundColor: 'rgba(167,139,250,0.15)',
            border: '1px solid rgba(167,139,250,0.25)',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: 12,
            color: '#a78bfa',
            fontSize: 13,
            animation: 'staggerListItem 2s ease-out infinite',
            animationDelay: `${i * 120}ms`,
            animationPlayState: isPlaying ? 'running' : 'paused',
          }}
        >
          {item}
        </div>
      ))}
    </div>
  )
}

// ─── Motion-powered animation renderers ─────────────────────────────────────

function FadeInAnim({ isPlaying, prefersReduced }: { isPlaying: boolean; prefersReduced: boolean }) {
  const [key, setKey] = useState(0)
  useEffect(() => {
    if (!isPlaying) return
    const t = setInterval(() => setKey(k => k + 1), 1200)
    return () => clearInterval(t)
  }, [isPlaying])

  return (
    <div className="flex items-center justify-center w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          initial={{ opacity: prefersReduced ? 1 : 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: prefersReduced ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 16,
            backgroundColor: '#a78bfa',
          }}
        />
      </AnimatePresence>
    </div>
  )
}

function SlideInAnim({ isPlaying, prefersReduced }: { isPlaying: boolean; prefersReduced: boolean }) {
  const [key, setKey] = useState(0)
  useEffect(() => {
    if (!isPlaying) return
    const t = setInterval(() => setKey(k => k + 1), 1400)
    return () => clearInterval(t)
  }, [isPlaying])

  return (
    <div className="flex items-center justify-center w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          initial={prefersReduced ? false : { x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={prefersReduced ? {} : { x: 120, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0, 0, 0.2, 1] }}
          style={{
            width: 120,
            height: 48,
            borderRadius: 10,
            backgroundColor: '#a78bfa',
          }}
        />
      </AnimatePresence>
    </div>
  )
}

function ScaleInPopAnim({ isPlaying, prefersReduced }: { isPlaying: boolean; prefersReduced: boolean }) {
  const [key, setKey] = useState(0)
  useEffect(() => {
    if (!isPlaying) return
    const t = setInterval(() => setKey(k => k + 1), 1400)
    return () => clearInterval(t)
  }, [isPlaying])

  return (
    <div className="flex items-center justify-center w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          initial={prefersReduced ? false : { scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={prefersReduced ? {} : { scale: 0, opacity: 0 }}
          transition={prefersReduced ? {} : { type: 'spring', stiffness: 300, damping: 15 }}
          style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            backgroundColor: '#a78bfa',
          }}
        />
      </AnimatePresence>
    </div>
  )
}

function FlyInAnim({ isPlaying, prefersReduced }: { isPlaying: boolean; prefersReduced: boolean }) {
  const [key, setKey] = useState(0)
  useEffect(() => {
    if (!isPlaying) return
    const t = setInterval(() => setKey(k => k + 1), 1600)
    return () => clearInterval(t)
  }, [isPlaying])

  return (
    <div className="flex items-center justify-center w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          initial={prefersReduced ? false : { y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={prefersReduced ? {} : { y: -50, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
          style={{
            width: 120,
            height: 48,
            borderRadius: 10,
            backgroundColor: '#a78bfa',
          }}
        />
      </AnimatePresence>
    </div>
  )
}

function SpringBounceAnim({ isPlaying, prefersReduced }: { isPlaying: boolean; prefersReduced: boolean }) {
  const [toggled, setToggled] = useState(false)
  useEffect(() => {
    if (!isPlaying) return
    const t = setInterval(() => setToggled(v => !v), 900)
    return () => clearInterval(t)
  }, [isPlaying])

  return (
    <div className="flex items-center justify-center w-full h-full">
      <motion.div
        animate={prefersReduced ? {} : { y: toggled ? -40 : 0 }}
        transition={prefersReduced ? {} : { type: 'spring', stiffness: 400, damping: 8 }}
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          backgroundColor: '#a78bfa',
        }}
      />
    </div>
  )
}

function SquashStretchAnim({ isPlaying, prefersReduced }: { isPlaying: boolean; prefersReduced: boolean }) {
  const [phase, setPhase] = useState<'idle' | 'launch' | 'air' | 'land'>('idle')
  useEffect(() => {
    if (!isPlaying) return
    const sequence = async () => {
      setPhase('launch')
      await new Promise(r => setTimeout(r, 150))
      setPhase('air')
      await new Promise(r => setTimeout(r, 500))
      setPhase('land')
      await new Promise(r => setTimeout(r, 200))
      setPhase('idle')
    }
    sequence()
    const t = setInterval(sequence, 1400)
    return () => clearInterval(t)
  }, [isPlaying])

  const variants = {
    idle: { scaleX: 1, scaleY: 1, y: 0 },
    launch: { scaleX: 1.3, scaleY: 0.7, y: 0 },
    air: { scaleX: 0.8, scaleY: 1.3, y: -40 },
    land: { scaleX: 1.2, scaleY: 0.8, y: 0 },
  }

  return (
    <div className="flex items-end justify-center w-full h-full pb-8">
      <motion.div
        animate={prefersReduced ? 'idle' : phase}
        variants={variants}
        transition={{ duration: 0.15, ease: 'easeInOut' }}
        style={{
          width: 56,
          height: 56,
          borderRadius: 10,
          backgroundColor: '#a78bfa',
          originY: 1,
        }}
      />
    </div>
  )
}

function Card3dFlipAnim({ isPlaying, prefersReduced }: { isPlaying: boolean; prefersReduced: boolean }) {
  const [flipped, setFlipped] = useState(false)
  useEffect(() => {
    if (!isPlaying) return
    const t = setInterval(() => setFlipped(v => !v), 1400)
    return () => clearInterval(t)
  }, [isPlaying])

  return (
    <div className="flex items-center justify-center w-full h-full" style={{ perspective: 1000 }}>
      <motion.div
        animate={prefersReduced ? {} : { rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        style={{ width: 120, height: 80, position: 'relative', transformStyle: 'preserve-3d' }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 12,
            backgroundColor: '#a78bfa',
            backfaceVisibility: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          Front
        </div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 12,
            backgroundColor: '#6d28d9',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          Back
        </div>
      </motion.div>
    </div>
  )
}

function ElevationLiftAnim({ isPlaying, prefersReduced }: { isPlaying: boolean; prefersReduced: boolean }) {
  const [up, setUp] = useState(false)
  useEffect(() => {
    if (!isPlaying) return
    const t = setInterval(() => setUp(v => !v), 1000)
    return () => clearInterval(t)
  }, [isPlaying])

  return (
    <div className="flex items-center justify-center w-full h-full">
      <motion.div
        animate={
          prefersReduced
            ? {}
            : {
                y: up ? -8 : 0,
                boxShadow: up
                  ? '0 16px 40px rgba(0,0,0,0.5)'
                  : '0 2px 6px rgba(0,0,0,0.2)',
              }
        }
        transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
        style={{
          width: 140,
          height: 80,
          borderRadius: 12,
          backgroundColor: '#1e1e2e',
          border: '1px solid rgba(167,139,250,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#a78bfa',
          fontWeight: 600,
          fontSize: 14,
        }}
      >
        Card
      </motion.div>
    </div>
  )
}

function StaggerGridAnim({ isPlaying, prefersReduced }: { isPlaying: boolean; prefersReduced: boolean }) {
  const [key, setKey] = useState(0)
  useEffect(() => {
    if (!isPlaying) return
    const t = setInterval(() => setKey(k => k + 1), 2200)
    return () => clearInterval(t)
  }, [isPlaying])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  }
  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  }

  return (
    <div className="flex items-center justify-center w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          variants={prefersReduced ? {} : container}
          initial="hidden"
          animate="show"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              variants={prefersReduced ? {} : item}
              transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
              style={{
                width: 44,
                height: 44,
                borderRadius: 8,
                backgroundColor: `hsl(${260 + i * 12}, 60%, 60%)`,
              }}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function MaterialRippleAnim({ isPlaying, prefersReduced }: { isPlaying: boolean; prefersReduced: boolean }) {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([])
  const btnRef = useRef<HTMLButtonElement>(null)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return
    const rect = btnRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()
    setRipples(r => [...r, { id, x, y }])
    setTimeout(() => setRipples(r => r.filter(rp => rp.id !== id)), 600)
  }

  useEffect(() => {
    if (!isPlaying || !btnRef.current) return
    const interval = setInterval(() => {
      const rect = btnRef.current!.getBoundingClientRect()
      const x = rect.width / 2 + (Math.random() - 0.5) * rect.width * 0.6
      const y = rect.height / 2 + (Math.random() - 0.5) * rect.height * 0.6
      const id = Date.now()
      setRipples(r => [...r, { id, x, y }])
      setTimeout(() => setRipples(r => r.filter(rp => rp.id !== id)), 600)
    }, 900)
    return () => clearInterval(interval)
  }, [isPlaying])

  return (
    <div className="flex items-center justify-center w-full h-full">
      <button
        ref={btnRef}
        onClick={handleClick}
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#a78bfa',
          color: 'white',
          border: 'none',
          borderRadius: 10,
          padding: '12px 32px',
          fontWeight: 600,
          fontSize: 14,
          cursor: 'pointer',
        }}
      >
        Click me
        {ripples.map(rp => (
          <motion.span
            key={rp.id}
            initial={prefersReduced ? {} : { scale: 0, opacity: 0.4 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              width: 60,
              height: 60,
              borderRadius: '50%',
              backgroundColor: 'white',
              top: rp.y - 30,
              left: rp.x - 30,
              pointerEvents: 'none',
            }}
          />
        ))}
      </button>
    </div>
  )
}

function ScrollFadeUpAnim({ prefersReduced }: { prefersReduced: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-10%' })

  return (
    <div className="flex items-center justify-center w-full h-full" ref={ref}>
      <motion.div
        animate={prefersReduced ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
        style={{
          width: 140,
          height: 60,
          borderRadius: 12,
          backgroundColor: '#a78bfa',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 600,
          fontSize: 14,
        }}
      >
        Scroll to reveal
      </motion.div>
    </div>
  )
}

function StaggerWordsAnim({ isPlaying, prefersReduced }: { isPlaying: boolean; prefersReduced: boolean }) {
  const [key, setKey] = useState(0)
  useEffect(() => {
    if (!isPlaying) return
    const t = setInterval(() => setKey(k => k + 1), 2000)
    return () => clearInterval(t)
  }, [isPlaying])

  const words = ['Motion', 'Makes', 'It', 'Alive']
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  }
  const word = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0, 0, 0.2, 1] as [number, number, number, number] } },
  }

  return (
    <div className="flex items-center justify-center w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          variants={prefersReduced ? {} : container}
          initial="hidden"
          animate="show"
          style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}
        >
          {words.map((w, i) => (
            <motion.span
              key={i}
              variants={prefersReduced ? {} : word}
              style={{ color: '#a78bfa', fontWeight: 700, fontSize: 22 }}
            >
              {w}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function NumberCounterAnim({ isPlaying, prefersReduced }: { isPlaying: boolean; prefersReduced: boolean }) {
  const count = useMotionValue(0)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isPlaying || prefersReduced) return
    const controls = animate(count, 9847, {
      duration: 2,
      ease: [0.33, 1, 0.68, 1],
      repeat: Infinity,
      repeatDelay: 0.8,
      repeatType: 'reverse',
    })
    return () => controls.stop()
  }, [isPlaying, prefersReduced, count])

  useEffect(() => {
    return count.on('change', v => setDisplay(Math.round(v)))
  }, [count])

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div style={{ fontSize: 48, fontWeight: 800, color: '#a78bfa', fontVariantNumeric: 'tabular-nums' }}>
        {display.toLocaleString()}
      </div>
    </div>
  )
}

// ─── Global CSS keyframes injection ─────────────────────────────────────────

const CSS_KEYFRAMES = `
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes pulseAnim { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.08); opacity: 0.8; } }
@keyframes pingAnim { 0% { transform: scale(1); opacity: 0.7; } 100% { transform: scale(2.5); opacity: 0; } }
@keyframes shimmerAnim { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
@keyframes progressAnim { 0% { transform: scaleX(0); } 70% { transform: scaleX(1); } 100% { transform: scaleX(0); } }
@keyframes bounceDot { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
@keyframes morphAnim { 0%,100% { border-radius: 0%; transform: rotate(0deg); } 50% { border-radius: 50%; transform: rotate(180deg); } }
@keyframes typewriter { from { width: 0; } to { width: 14ch; } }
@keyframes blink { 0%,100% { border-color: #a78bfa; } 50% { border-color: transparent; } }
@keyframes gradientSweep { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
@keyframes easeOutAnim { 0% { transform: translateX(-80px); opacity:0; } 60% { transform: translateX(0); opacity:1; } 100% { transform: translateX(0); opacity:1; } }
@keyframes easeInAnim { 0% { transform: translateX(0); opacity:1; } 40% { transform: translateX(0); opacity:1; } 100% { transform: translateX(80px); opacity:0; } }
@keyframes linearAnim { 0%,100% { transform: translateX(-80px); } 50% { transform: translateX(80px); } }
@keyframes clipReveal { 0%,100% { clip-path: inset(0 100% 0 0); } 30%,70% { clip-path: inset(0 0% 0 0); } }
@keyframes shakeAnim { 0%,100% { transform: translateX(0); } 20% { transform: translateX(-8px); } 40% { transform: translateX(8px); } 60% { transform: translateX(-6px); } 80% { transform: translateX(6px); } }
@keyframes kenBurns { 0% { transform: scale(1) translate(0,0); } 100% { transform: scale(1.12) translate(-2%,-1%); } }
@keyframes parallaxBg { 0% { transform: translateY(-10px); } 100% { transform: translateY(10px); } }
@keyframes parallaxFg { 0% { transform: translateY(-20px); } 100% { transform: translateY(20px); } }
@keyframes staggerListItem { 0%,100% { opacity:0; transform: translateX(-20px); } 20%,80% { opacity:1; transform: translateX(0); } }
@keyframes motionPathAnim { 0% { offset-distance: 0%; } 100% { offset-distance: 100%; } }
@keyframes svgMorph { 0% { d: path("M 40,5 L 75,27.5 L 75,52.5 L 40,75 L 5,52.5 L 5,27.5 Z"); } 100% { d: path("M 40,5 C 65,5 75,20 75,40 C 75,60 60,75 40,75 C 20,75 5,60 5,40 C 5,20 15,5 40,5 Z"); } }
`

// ─── Main PreviewCanvas ──────────────────────────────────────────────────────

const LOOP_DURATION_MS: Record<string, number> = {
  'fade-in': 1200,
  'slide-in': 1400,
  'scale-in-pop': 1400,
  'fly-in': 1600,
  'spring-bounce': 900,
  'squash-stretch': 1400,
  'card-3d-flip': 1400,
  'elevation-lift': 1000,
  'stagger-grid': 2200,
  'material-ripple': 900,
  'stagger-words': 2000,
  'number-counter': 2000,
}

const INITIAL_LOOPS = 3

export default function PreviewCanvas({ animationKey }: { animationKey: string }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [loopCount, setLoopCount] = useState(0)
  const prefersReduced = useReducedMotion() ?? false

  // Inject global CSS once
  useEffect(() => {
    if (document.getElementById('motionary-keyframes')) return
    const style = document.createElement('style')
    style.id = 'motionary-keyframes'
    style.textContent = CSS_KEYFRAMES
    document.head.appendChild(style)
  }, [])

  const loopDuration = LOOP_DURATION_MS[animationKey] ?? 1600

  useEffect(() => {
    if (isHovered) {
      setIsPlaying(true)
      return
    }
    if (loopCount < INITIAL_LOOPS) {
      setIsPlaying(true)
      const t = setTimeout(() => {
        setLoopCount(c => c + 1)
      }, loopDuration)
      return () => clearTimeout(t)
    } else {
      setIsPlaying(false)
    }
  }, [isHovered, loopCount, loopDuration])

  useEffect(() => {
    if (!isHovered) {
      setLoopCount(0)
      setIsPlaying(true)
    }
  }, [isHovered])

  const canvasProps = { isPlaying: prefersReduced ? true : isPlaying, prefersReduced }

  const renderer = (() => {
    switch (animationKey) {
      case 'fade-in': return <FadeInAnim {...canvasProps} />
      case 'slide-in': return <SlideInAnim {...canvasProps} />
      case 'scale-in-pop': return <ScaleInPopAnim {...canvasProps} />
      case 'fly-in': return <FlyInAnim {...canvasProps} />
      case 'ease-out-demo': return <EaseOutDemoAnim isPlaying={canvasProps.isPlaying} />
      case 'ease-in-demo': return <EaseInDemoAnim isPlaying={canvasProps.isPlaying} />
      case 'spring-bounce': return <SpringBounceAnim {...canvasProps} />
      case 'linear-demo': return <LinearDemoAnim isPlaying={canvasProps.isPlaying} />
      case 'pulse': return <PulseAnim isPlaying={canvasProps.isPlaying} />
      case 'shake': return <ShakeAnim isPlaying={canvasProps.isPlaying} />
      case 'ping-ripple': return <PingRippleAnim isPlaying={canvasProps.isPlaying} />
      case 'shimmer': return <ShimmerAnim isPlaying={canvasProps.isPlaying} />
      case 'spinner': return <SpinnerAnim isPlaying={canvasProps.isPlaying} />
      case 'progress-bar': return <ProgressBarAnim isPlaying={canvasProps.isPlaying} />
      case 'bouncing-dots': return <BouncingDotsAnim isPlaying={canvasProps.isPlaying} />
      case 'morphing-loader': return <MorphingLoaderAnim isPlaying={canvasProps.isPlaying} />
      case 'typewriter': return <TypewriterAnim isPlaying={canvasProps.isPlaying} />
      case 'stagger-words': return <StaggerWordsAnim {...canvasProps} />
      case 'gradient-text-sweep': return <GradientTextSweepAnim isPlaying={canvasProps.isPlaying} />
      case 'number-counter': return <NumberCounterAnim {...canvasProps} />
      case 'card-3d-flip': return <Card3dFlipAnim {...canvasProps} />
      case 'squash-stretch': return <SquashStretchAnim {...canvasProps} />
      case 'motion-path': return <MotionPathAnim isPlaying={canvasProps.isPlaying} />
      case 'svg-morph': return <SvgMorphAnim isPlaying={canvasProps.isPlaying} />
      case 'scroll-fade-up': return <ScrollFadeUpAnim prefersReduced={prefersReduced} />
      case 'parallax-scroll': return <ParallaxScrollAnim isPlaying={canvasProps.isPlaying} />
      case 'clip-path-reveal': return <ClipPathRevealAnim isPlaying={canvasProps.isPlaying} />
      case 'stagger-list': return <StaggerListAnim isPlaying={canvasProps.isPlaying} />
      case 'stagger-grid': return <StaggerGridAnim {...canvasProps} />
      case 'material-ripple': return <MaterialRippleAnim {...canvasProps} />
      case 'elevation-lift': return <ElevationLiftAnim {...canvasProps} />
      case 'ken-burns': return <KenBurnsAnim isPlaying={canvasProps.isPlaying} />
      case 'glassmorphism-shimmer': return <GlassmorphismShimmerAnim isPlaying={canvasProps.isPlaying} />
      default: return (
        <div className="flex items-center justify-center w-full h-full">
          <div style={{ width: 60, height: 60, borderRadius: 12, backgroundColor: '#a78bfa' }} />
        </div>
      )
    }
  })()

  return (
    <div
      className="relative w-full aspect-video overflow-hidden"
      style={{
        backgroundColor: '#0d0d0d',
        backgroundImage: 'radial-gradient(circle, #2a2a2a 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {renderer}
    </div>
  )
}
