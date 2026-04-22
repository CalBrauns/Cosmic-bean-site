import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const RIM_COLORS = ['#39ff14', '#bf00ff', '#ff0033', '#00bfff', '#39ff14', '#bf00ff', '#ff0033']

export default function UFO() {
  const [beamOn, setBeamOn] = useState(false)

  useEffect(() => {
    const fire = () => {
      setBeamOn(true)
      setTimeout(() => setBeamOn(false), 3200)
    }
    const first = setTimeout(fire, 1800)
    const loop  = setInterval(fire, 7000)
    return () => { clearTimeout(first); clearInterval(loop) }
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        top: 28,
        left: 28,
        zIndex: 2,
        userSelect: 'none',
        pointerEvents: 'none',
      }}
    >
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [-1.5, 1.5, -1.5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        {/* Glass dome */}
        <div
          style={{
            width: 46,
            height: 30,
            borderRadius: '50% 50% 0 0',
            background:
              'radial-gradient(ellipse at 38% 28%, rgba(210,255,230,0.95) 0%, rgba(0,220,130,0.65) 45%, rgba(0,70,45,0.5) 100%)',
            border: '1px solid rgba(57,255,20,0.5)',
            boxShadow: '0 0 14px rgba(57,255,20,0.55)',
            position: 'relative',
            zIndex: 2,
          }}
        />

        {/* Saucer body */}
        <div
          style={{
            width: 120,
            height: 30,
            borderRadius: '50%',
            background:
              'radial-gradient(ellipse at 50% 18%, #e8e8e8 0%, #aaa 30%, #555 70%, #222 100%)',
            boxShadow:
              '0 0 20px rgba(57,255,20,0.3), inset 0 2px 4px rgba(255,255,255,0.12), 0 8px 18px rgba(0,0,0,0.75)',
            marginTop: -12,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Specular highlight strip */}
          <div
            style={{
              position: 'absolute',
              top: '8%',
              left: '14%',
              right: '14%',
              height: '26%',
              borderRadius: '50%',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.38), transparent)',
            }}
          />

          {/* Rim lights */}
          {RIM_COLORS.map((color, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [1, 0.08, 1], scale: [1, 0.55, 1] }}
              transition={{ duration: 1.0, repeat: Infinity, delay: i * 0.13, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '50%',
                left: `${12 + i * 13}%`,
                transform: 'translate(-50%, -50%)',
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: color,
                boxShadow: `0 0 7px ${color}, 0 0 14px ${color}`,
              }}
            />
          ))}
        </div>

        {/* Tractor beam */}
        <AnimatePresence>
          {beamOn && (
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{
                scaleY: 1,
                opacity: [0, 0.72, 0.48, 0.78, 0.44, 0.68, 0.5],
              }}
              exit={{ scaleY: 0, opacity: 0, transition: { duration: 0.35 } }}
              transition={{
                scaleY: { duration: 0.3, ease: 'easeOut' },
                opacity: { duration: 3.2, times: [0, 0.12, 0.3, 0.5, 0.65, 0.82, 1] },
              }}
              style={{
                transformOrigin: 'top center',
                width: 140,
                height: 200,
                background:
                  'linear-gradient(to bottom, rgba(57,255,20,0.8) 0%, rgba(57,255,20,0.38) 55%, rgba(57,255,20,0) 100%)',
                clipPath: 'polygon(33% 0%, 67% 0%, 100% 100%, 0% 100%)',
                filter: 'blur(5px)',
              }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
