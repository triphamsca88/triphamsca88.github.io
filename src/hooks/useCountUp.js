import { useLayoutEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from './useReducedMotion.js'

// Counts from 0 to `target` the first time the element scrolls into view.
// Without IntersectionObserver or with reduced motion, the final value is shown straight away.
export function useCountUp(target, { duration = 1400, decimals = 0 } = {}) {
  const ref = useRef(null)
  const [value, setValue] = useState(target)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      setValue(target)
      return undefined
    }
    setValue(0)
    let frame = 0
    const run = () => {
      const t0 = performance.now()
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / duration)
        const eased = 1 - Math.pow(1 - p, 3)
        setValue(target * eased)
        if (p < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        io.disconnect()
        run()
      }
    }, { threshold: 0.4 })
    io.observe(el)
    return () => {
      io.disconnect()
      if (frame) cancelAnimationFrame(frame)
    }
  }, [target, duration])

  return [ref, value.toFixed(decimals)]
}
