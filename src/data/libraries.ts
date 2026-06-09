export type LibraryItem = {
  name: string
  badge: string
  colour: string
  url: string
  description: string
  useWhen: string
  features: string[]
}

export const libraries: LibraryItem[] = [
  {
    name: 'Motion (Framer Motion)',
    badge: 'React Library',
    colour: '#0055FF',
    url: 'https://motion.dev',
    description:
      'The most popular animation library for React. Declarative API with spring physics, gestures, layout animations, and scroll-driven effects.',
    useWhen:
      'Building React apps needing physics-based animations, drag/drop interactions, whileHover/whileTap gestures, or shared layout transitions with layoutId.',
    features: [
      'Spring physics',
      'AnimatePresence (exit animations)',
      'useScroll + useTransform',
      'Layout animations (layoutId)',
      'Variants system',
      '~34KB gzipped',
    ],
  },
  {
    name: 'Rive',
    badge: 'Interactive Design Tool + Runtime',
    colour: '#FF3D00',
    url: 'https://rive.app',
    description:
      'End-to-end interactive animation platform. Design in the Rive editor, export a tiny .riv file, run it via lightweight runtimes on web, iOS, Android, Flutter, Unity, and Unreal. Powers Spotify Wrapped and Duolingo.',
    useWhen:
      'State-machine-driven interactive animations, game UI, character animations, or when designers need to own the full animation workflow without developer handoff.',
    features: [
      'State machines',
      'Real-time interactivity',
      'GPU-accelerated renderer',
      '.riv format (90% smaller than Lottie)',
      'Cross-platform runtimes',
      'Used by Spotify, Duolingo, Disney, Google',
    ],
  },
  {
    name: 'Jitter',
    badge: 'Motion Design Tool (No-Code)',
    colour: '#7C3AED',
    url: 'https://jitter.video',
    description:
      'The "Figma of Motion Design." Web-based tool with a Figma plugin for one-click design import. Export to 4K video, GIF, or Lottie. No After Effects knowledge required.',
    useWhen:
      'Animating Figma designs quickly, creating social media videos, onboarding animations, or Lottie files for apps without a dedicated motion designer.',
    features: [
      'One-click Figma import',
      '300+ templates',
      'Letter/word-by-word text animation',
      'Lottie export',
      'Real-time collaboration',
      'Easing presets (Elastic, Bounce, Overshoot)',
    ],
  },
  {
    name: 'Remotion',
    badge: 'Programmatic Video (React)',
    colour: '#04E3F4',
    url: 'https://remotion.dev',
    description:
      'A framework for creating real MP4 videos programmatically with React. Write components that render a frame at a given time value. Uses the full npm ecosystem.',
    useWhen:
      'Generating personalised videos at scale from data, building a video creation tool, or template-driven video content programmatically.',
    features: [
      'useCurrentFrame() hook',
      'Parameterised rendering',
      'React components as video frames',
      'Lottie/Rive/Three.js integrations',
      'Open-source (31k+ GitHub stars)',
    ],
  },
  {
    name: 'GSAP',
    badge: 'JavaScript Animation Library',
    colour: '#88CE02',
    url: 'https://gsap.com',
    description:
      'The gold standard JS animation library used on ~10 million websites. Framework-agnostic. Timeline-based API for sequencing complex animations.',
    useWhen:
      'Complex sequenced animation narratives, best-in-class performance, working without React, or needing SVG morphing, advanced scroll triggers, and draggable interactions.',
    features: [
      'Timeline API',
      'ScrollTrigger plugin',
      'SplitText plugin',
      'MorphSVG plugin',
      'Draggable + Flip plugins',
      'Free tier available',
    ],
  },
  {
    name: 'Native CSS / Web Animations API',
    badge: 'Native Browser API',
    colour: '#E44D26',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation',
    description:
      'The foundation everything else builds on. Built into every browser — zero dependency, zero bundle cost. Modern CSS includes animation-timeline: scroll() and @starting-style.',
    useWhen:
      'Simple micro-interactions, hover states, loaders, and transitions where a library is overkill. Always respect prefers-reduced-motion.',
    features: [
      '@keyframes',
      'transition',
      'animation-timeline: scroll()',
      '@starting-style',
      'Zero bundle cost',
      'Full browser support',
    ],
  },
]
