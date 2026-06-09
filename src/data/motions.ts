export type MotionItem = {
  id: string
  name: string
  badge: string
  category: string
  description: string
  aiPrompt: string
  animationKey: string
}

export const categories = [
  'All',
  'Entrance & Exit',
  'Easing & Timing',
  'Emphasis & Attention',
  'Loading & Progress',
  'Text Effects',
  'Transform & Morph',
  'Scroll & Reveal',
  'Stagger & Choreography',
  'Spatial & Depth',
  '⚙️ Motion Libraries & Tools',
]

export const motions: MotionItem[] = [
  // ENTRANCE & EXIT
  {
    id: '1',
    name: 'Fade In',
    badge: 'Fade In / Fade Out',
    category: 'Entrance & Exit',
    animationKey: 'fade-in',
    description:
      'The most fundamental UI transition. An element moves from opacity 0 to 1. Used for modals, tooltips, page transitions, and content reveals.',
    aiPrompt:
      'Apply a fade-in entrance animation. Transition from opacity 0 to opacity 1 over 300ms using ease-out. No movement, only opacity change.',
  },
  {
    id: '2',
    name: 'Slide In',
    badge: 'Slide In / Slide Out',
    category: 'Entrance & Exit',
    animationKey: 'slide-in',
    description:
      'An element enters by moving from outside its container boundary. Used for drawers, side panels, and notification banners.',
    aiPrompt:
      'Apply a slide-in-from-bottom animation. Translate from translateY(30px) to translateY(0) combined with opacity 0 to 1, over 350ms ease-out.',
  },
  {
    id: '3',
    name: 'Scale In (Pop)',
    badge: 'Scale / Transform Scale',
    category: 'Entrance & Exit',
    animationKey: 'scale-in-pop',
    description:
      'An element grows from a tiny point to full size. With spring easing, this creates a satisfying "pop." Used for buttons, badges, and dialog boxes.',
    aiPrompt:
      'Apply a scale-in pop animation. Start at scale(0.5) opacity 0, animate to scale(1) opacity 1 over 400ms. Use spring easing: cubic-bezier(0.34, 1.56, 0.64, 1).',
  },
  {
    id: '4',
    name: 'Fly In',
    badge: 'Fly In (Translate + Fade)',
    category: 'Entrance & Exit',
    animationKey: 'fly-in',
    description:
      'Combines positional movement with opacity. The element travels AND fades in simultaneously. Popular in hero sections and onboarding screens.',
    aiPrompt:
      'Apply a fly-in combining translateY(40px) with fade in (opacity 0 to 1) over 500ms ease-out. Element arrives from slightly below its final position.',
  },

  // EASING & TIMING
  {
    id: '5',
    name: 'Ease Out',
    badge: 'Ease Out / Deceleration Curve',
    category: 'Easing & Timing',
    animationKey: 'ease-out-demo',
    description:
      'Starts fast and decelerates to a stop — like a car braking. The default for UI entrance animations. Google Material calls this "Standard Easing."',
    aiPrompt:
      'Use ease-out easing cubic-bezier(0.0, 0.0, 0.2, 1) for entrance animations. The element arrives quickly and settles into place, decelerating at the end.',
  },
  {
    id: '6',
    name: 'Ease In',
    badge: 'Ease In / Acceleration Curve',
    category: 'Easing & Timing',
    animationKey: 'ease-in-demo',
    description:
      'Starts slow and accelerates. Used primarily for EXIT animations — things leaving the screen should accelerate away.',
    aiPrompt:
      'Use ease-in easing cubic-bezier(0.4, 0.0, 1, 1) for exit animations. The element accelerates as it leaves, like being pulled away quickly.',
  },
  {
    id: '7',
    name: 'Spring / Bounce',
    badge: 'Spring Easing / Overshoot',
    category: 'Easing & Timing',
    animationKey: 'spring-bounce',
    description:
      "Overshoots the target value then snaps back. Creates organic springiness. Popularised by Framer Motion's spring physics and Apple's iOS UI kit.",
    aiPrompt:
      'Apply spring physics: cubic-bezier(0.34, 1.56, 0.64, 1). The element overshoots its target slightly then settles back, creating a spring-like snap.',
  },
  {
    id: '8',
    name: 'Linear',
    badge: 'Linear Easing',
    category: 'Easing & Timing',
    animationKey: 'linear-demo',
    description:
      'Constant speed throughout — no acceleration. Feels robotic for most UI but ideal for continuous animations like spinners and rotating elements.',
    aiPrompt:
      'Use linear easing for constant-speed animations. Best for continuous rotations, spinners, or progress indicators that need perfectly uniform motion.',
  },

  // EMPHASIS & ATTENTION
  {
    id: '9',
    name: 'Pulse',
    badge: 'Pulse / Throb',
    category: 'Emphasis & Attention',
    animationKey: 'pulse',
    description:
      'A continuous rhythmic scaling animation — a "breathing" effect. Used for notification badges, live status indicators, and recording states.',
    aiPrompt:
      'Apply a pulse: scale from 1 to 1.08 and back continuously with subtle opacity shift (1 to 0.8). ease-in-out over 1.5s looping. Gentle breathing quality.',
  },
  {
    id: '10',
    name: 'Error Shake',
    badge: 'Shake / Error Shake',
    category: 'Emphasis & Attention',
    animationKey: 'shake',
    description:
      'Rapid horizontal oscillation to signal an error or invalid input. Pattern: centre → left → right → left → right → centre. Universally means "no."',
    aiPrompt:
      'Apply an error shake: translateX oscillating from -8px, +8px, -6px, +6px, -3px back to 0 over 400ms. Use on form fields to indicate a validation error.',
  },
  {
    id: '11',
    name: 'Ping Beacon',
    badge: 'Ripple / Ping Beacon',
    category: 'Emphasis & Attention',
    animationKey: 'ping-ripple',
    description:
      "An expanding ring radiates outward from an element then fades out. Used for live indicators, map pins, and notification hotspots. Made famous by Tailwind's animate-ping.",
    aiPrompt:
      'Apply a ping beacon: a static dot with a pseudo-element circle expanding from scale(1) to scale(2.5) while fading opacity 0.7 to 0. Loop continuously for live/active states.',
  },
  {
    id: '12',
    name: 'Skeleton Shimmer',
    badge: 'Shimmer / Skeleton Loading',
    category: 'Emphasis & Attention',
    animationKey: 'shimmer',
    description:
      'A moving light gradient sweep across a placeholder. The industry standard for skeleton loading states used by Facebook, LinkedIn, and YouTube.',
    aiPrompt:
      'Apply skeleton shimmer: linear-gradient background animating via background-position over 1.5s. Base #e0e0e0 with lighter #f5f5f5 highlight streak. Loop infinitely.',
  },

  // LOADING & PROGRESS
  {
    id: '13',
    name: 'Spinner',
    badge: 'Spinner / Indeterminate Loader',
    category: 'Loading & Progress',
    animationKey: 'spinner',
    description:
      'The canonical indeterminate loading state. A rotating circle arc communicates the system is working but duration is unknown.',
    aiPrompt:
      'Create a CSS spinner: circle with border 3px solid, border-top-color transparent, border-radius: 50%, rotating 360deg over 0.7s linear. Classic loading indicator.',
  },
  {
    id: '14',
    name: 'Progress Bar',
    badge: 'Determinate Progress Bar',
    category: 'Loading & Progress',
    animationKey: 'progress-bar',
    description:
      'A bar that fills to indicate percentage completion of a known task. Animate with scaleX() for performance — never animate width directly.',
    aiPrompt:
      'Animate a progress bar with scaleX() from 0 to 1 on a child element, transform-origin: left. More performant than animating width. ease-in-out over the fill duration.',
  },
  {
    id: '15',
    name: 'Bouncing Dots',
    badge: 'Ellipsis Loader / Bouncing Dots',
    category: 'Loading & Progress',
    animationKey: 'bouncing-dots',
    description:
      'Three dots animate vertically with staggered timing — the "typing in progress" pattern. The stagger creates a wave effect used in chat apps.',
    aiPrompt:
      'Three dots each animating translateY(-8px) and back: dot 1 at 0ms, dot 2 at 150ms, dot 3 at 300ms delay. ease-in-out over 0.6s each, looping infinitely.',
  },
  {
    id: '16',
    name: 'Morphing Loader',
    badge: 'Shape Morphing / CSS Morphing',
    category: 'Loading & Progress',
    animationKey: 'morphing-loader',
    description:
      'An element transforms between square and circle using border-radius animation. The smooth interpolation creates an organic loading state.',
    aiPrompt:
      'Animate border-radius from 0% to 50% to 0% over 1.2s ease-in-out. Morphs square to circle and back. Combine with subtle scale pulse for an interesting loader.',
  },

  // TEXT EFFECTS
  {
    id: '17',
    name: 'Typewriter',
    badge: 'Typewriter Effect / Text Reveal',
    category: 'Text Effects',
    animationKey: 'typewriter',
    description:
      'Text appears letter by letter using CSS steps() timing and width animation on overflow: hidden. Iconic for terminal aesthetics and hero headings.',
    aiPrompt:
      'Typewriter reveal: animate width from 0 to 100% using steps(N) where N is character count. Add blinking cursor via ::after with border-right. Use overflow: hidden; white-space: nowrap.',
  },
  {
    id: '18',
    name: 'Staggered Word Reveal',
    badge: 'Staggered Text / Split Text',
    category: 'Text Effects',
    animationKey: 'stagger-words',
    description:
      'Text split into words, each animating in with a slight delay after the previous. Creates a cinematic feel for hero headings.',
    aiPrompt:
      'Split text into word spans, stagger-animate each: translateY(20px) opacity-0 to translateY(0) opacity-1 over 400ms ease-out. Delay each word by 80ms from previous.',
  },
  {
    id: '19',
    name: 'Gradient Text Sweep',
    badge: 'Gradient Text / Animated Gradient',
    category: 'Text Effects',
    animationKey: 'gradient-text-sweep',
    description:
      'Text rendered with background-clip: text and a moving linear-gradient. The sweeping colour creates a premium, modern feel for hero headings.',
    aiPrompt:
      'Animated gradient text: background: linear-gradient(90deg, #6c63ff, #ff6584, #6c63ff), background-size: 200%, background-clip: text. Animate background-position 0% to 200% over 3s linear.',
  },
  {
    id: '20',
    name: 'Number Counter',
    badge: 'Odometer / Count-Up Animation',
    category: 'Text Effects',
    animationKey: 'number-counter',
    description:
      'A number animates from start to end using requestAnimationFrame and easing. Creates momentum and achievement. Common on dashboards and stats sections.',
    aiPrompt:
      'Count-up animation using requestAnimationFrame. Interpolate startValue to endValue over 2000ms using ease-out (t => 1 - Math.pow(1 - t, 3)). Update textContent each frame.',
  },

  // TRANSFORM & MORPH
  {
    id: '21',
    name: '3D Card Flip',
    badge: 'CSS 3D Flip / Perspective Transform',
    category: 'Transform & Morph',
    animationKey: 'card-3d-flip',
    description:
      'CSS perspective and rotateY(180deg) with backface-visibility: hidden creates a card with a front and back. Used for product cards and flashcards.',
    aiPrompt:
      'Build 3D card flip: container with perspective(1000px), inner wrapper with transform-style: preserve-3d. Front/back use backface-visibility: hidden. Hover rotates rotateY(180deg) over 600ms.',
  },
  {
    id: '22',
    name: 'Squash & Stretch',
    badge: 'Squash and Stretch',
    category: 'Transform & Morph',
    animationKey: 'squash-stretch',
    description:
      "One of Disney's 12 Animation Principles. On land: squash (wider, shorter). On launch: stretch (taller, narrower). Makes UI feel physical and alive.",
    aiPrompt:
      'Squash-and-stretch on button press: :active uses scaleX(1.15) scaleY(0.85). Release: briefly scaleX(0.9) scaleY(1.1) then back to scale(1). 100ms each step.',
  },
  {
    id: '23',
    name: 'Motion Path',
    badge: 'Motion Path / offset-path',
    category: 'Transform & Morph',
    animationKey: 'motion-path',
    description:
      "CSS offset-path allows elements to travel along an SVG path, automatically rotating to follow direction. Used for decorative elements and onboarding flows.",
    aiPrompt:
      "CSS offset-path animation: set offset-path: path('M 0,100 Q 150,-50 300,100') on element. Animate offset-distance from 0% to 100% over 2s ease-in-out.",
  },
  {
    id: '24',
    name: 'SVG Shape Morph',
    badge: 'SVG Path Morphing / Shape Tween',
    category: 'Transform & Morph',
    animationKey: 'svg-morph',
    description:
      'SVG path d attribute animated between two shapes with identical point counts. Used for play/pause icons, hamburger/X menus, and decorative blobs.',
    aiPrompt:
      'Animate SVG path d attribute between two shapes via CSS @keyframes (identical point count required). Use animation-direction: alternate for continuous morphing loop.',
  },

  // SCROLL & REVEAL
  {
    id: '25',
    name: 'Scroll Fade Up',
    badge: 'Scroll-Triggered / Intersection Observer',
    category: 'Scroll & Reveal',
    animationKey: 'scroll-fade-up',
    description:
      'Elements animate from invisible + offset to natural position when scrolled into view via IntersectionObserver. The most common reveal on modern marketing sites.',
    aiPrompt:
      'IntersectionObserver trigger: start opacity: 0, translateY(30px). When element intersects (threshold: 0.1), transition to opacity: 1, translateY(0) over 600ms ease-out.',
  },
  {
    id: '26',
    name: 'Parallax Scroll',
    badge: 'Parallax / Depth Scroll',
    category: 'Scroll & Reveal',
    animationKey: 'parallax-scroll',
    description:
      'Background scrolls slower than foreground, creating depth illusion. Now achievable with CSS animation-timeline: scroll() without JS.',
    aiPrompt:
      'CSS scroll-driven parallax: animation-timeline: scroll(). Background element translateY at 0.5x scroll speed vs foreground at 1x. Use will-change: transform.',
  },
  {
    id: '27',
    name: 'Clip-Path Reveal',
    badge: 'Clip-Path Reveal / Mask Animation',
    category: 'Scroll & Reveal',
    animationKey: 'clip-path-reveal',
    description:
      'clip-path defines the visible element area. Animating from inset(0 100% 0 0) to inset(0 0 0 0) creates a cinematic left-to-right wipe reveal.',
    aiPrompt:
      'Clip-path reveal: start clip-path: inset(0 100% 0 0), end at inset(0 0% 0 0) over 700ms ease-out. Left-to-right wipe excellent for text headings and images.',
  },
  {
    id: '28',
    name: 'Staggered List Reveal',
    badge: 'Staggered Entrance / List Animation',
    category: 'Scroll & Reveal',
    animationKey: 'stagger-list',
    description:
      'Each list item animates in after the previous with a 50–100ms stagger, creating a waterfall cascade that guides the eye down the list.',
    aiPrompt:
      'Stagger-animate a list: each li starts opacity 0, translateX(-20px). Animate to visible with 80ms delay per item. 400ms ease-out per item. Cascade guides eye naturally.',
  },

  // STAGGER & CHOREOGRAPHY
  {
    id: '29',
    name: 'Grid Choreography',
    badge: 'Choreography / Stagger',
    category: 'Stagger & Choreography',
    animationKey: 'stagger-grid',
    description:
      "Child elements animate in sequence with 30–60ms stagger offsets. Guides the viewer's eye through content hierarchy and prevents visual chaos.",
    aiPrompt:
      'Choreograph grid: each card starts opacity 0, scale(0.9). Animate in sequence with stagger-delay: index * 60ms. 300ms ease-out per card. Elegant grid reveal.',
  },
  {
    id: '30',
    name: 'Material Ripple',
    badge: 'Material Ripple / Touch Feedback',
    category: 'Stagger & Choreography',
    animationKey: 'material-ripple',
    description:
      "A circle spawns at exact click coordinates and expands outward while fading. Material Design's core tactile feedback — the visual originates from the action point.",
    aiPrompt:
      'Material ripple on click: spawn div at click coordinates (clientX/Y relative to button), animate scale(0) to scale(4) opacity 0.3 to 0 over 400ms ease-out. Remove after animation.',
  },

  // SPATIAL & DEPTH
  {
    id: '31',
    name: 'Elevation Lift',
    badge: 'Elevation / Box Shadow Animation',
    category: 'Spatial & Depth',
    animationKey: 'elevation-lift',
    description:
      'Increasing shadow depth combined with translateY(-4px) simulates a surface rising toward the viewer. Material Design defines 24 elevation levels.',
    aiPrompt:
      'Hover elevation: transition box-shadow from (0 2px 4px rgba(0,0,0,0.1)) to (0 12px 30px rgba(0,0,0,0.2)) + translateY(-4px). 250ms ease-out. Convincing card lift.',
  },
  {
    id: '32',
    name: 'Ken Burns Effect',
    badge: 'Ken Burns Effect / Slow Zoom',
    category: 'Spatial & Depth',
    animationKey: 'ken-burns',
    description:
      'A slow cinematic zoom and pan on a static background. Named after documentary filmmaker Ken Burns. Creates depth in hero sections and portfolio headers.',
    aiPrompt:
      'Ken Burns: animate from scale(1) translateX(0) to scale(1.1) translateX(-3%) over 8s linear, alternating. Use will-change: transform and overflow: hidden on parent.',
  },
  {
    id: '33',
    name: 'Glassmorphism Shimmer',
    badge: 'Glassmorphism / Frosted Glass',
    category: 'Spatial & Depth',
    animationKey: 'glassmorphism-shimmer',
    description:
      'Frosted glass aesthetic: backdrop-filter blur, semi-transparent background, subtle border. A diagonal shimmer sweep finishes the premium effect used in Apple visionOS.',
    aiPrompt:
      'Glassmorphism card: background rgba(255,255,255,0.1), backdrop-filter: blur(10px), border: 1px solid rgba(255,255,255,0.2). ::before diagonal gradient shimmer over 3s.',
  },
]
