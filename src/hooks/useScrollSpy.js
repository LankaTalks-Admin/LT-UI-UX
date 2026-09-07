import { useEffect, useState, useRef } from 'react'

export function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState(ids[0] || '')
  const observer = useRef(null)

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return

    observer.current?.disconnect()

    observer.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => {
            const aRect = a.boundingClientRect
            const bRect = b.boundingClientRect
            return Math.abs(aRect.top) - Math.abs(bRect.top)
          })

        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.current.observe(el))

    return () => observer.current?.disconnect()
  }, [ids])

  return activeId
}
