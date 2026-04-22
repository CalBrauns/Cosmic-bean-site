import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import { motion } from 'framer-motion'
import UFO from '../components/UFO'

function StarField() {
  const stars = useMemo(() =>
    Array.from({ length: 80 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2.5 + 0.5,
      duration: `${Math.random() * 4 + 2}s`,
      delay: `${Math.random() * 4}s`,
    })),
  [])

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {stars.map(s => (
        <span
          key={s.id}
          className="star"
          style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDuration: s.duration, animationDelay: s.delay }}
        />
      ))}
    </div>
  )
}

function FeatureCard({ icon, title, desc, neonClass, borderClass }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
      }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      className={`comic-card ${borderClass}`}
      style={{ padding: '28px 24px', textAlign: 'center' }}
    >
      <motion.div
        style={{ fontSize: '2.5rem', marginBottom: 16 }}
        animate={{ rotate: [0, -8, 8, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
      >
        {icon}
      </motion.div>
      <h3 className={`font-pixel ${neonClass}`} style={{ fontSize: '0.6rem', marginBottom: 12, letterSpacing: '0.1em' }}>
        {title}
      </h3>
      <p style={{ color: '#999', fontSize: '0.8rem', lineHeight: 1.7 }}>{desc}</p>
    </motion.div>
  )
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          minHeight: '88vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '40px 24px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <StarField />
        <UFO />

        <motion.p
          className="neon-purple font-pixel"
          style={{ fontSize: '0.55rem', letterSpacing: '0.2em', marginBottom: 24 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ★ ★ ★ &nbsp; WELCOME TO THE GALAXY &nbsp; ★ ★ ★
        </motion.p>

        {/* Big titles beam in from opposite sides */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.h1
            className="neon-green"
            style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(3rem, 12vw, 9rem)', fontWeight: 900, letterSpacing: '0.08em', lineHeight: 1, marginBottom: 8 }}
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
          >
            COSMIC
          </motion.h1>
          <motion.h1
            className="neon-purple"
            style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(3rem, 12vw, 9rem)', fontWeight: 900, letterSpacing: '0.08em', lineHeight: 1, marginBottom: 32 }}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.55 }}
          >
            BEAN
          </motion.h1>
        </div>

        <motion.p
          className="neon-blue font-pixel"
          style={{ fontSize: '0.58rem', letterSpacing: '0.15em', marginBottom: 12 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          COFFEE · JAPANESE SNACKS · OTHERWORLDLY VIBES
        </motion.p>

        <motion.p
          className="font-pixel"
          style={{ fontSize: '0.5rem', color: '#666', letterSpacing: '0.1em', marginBottom: 40 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.05 }}
        >
          EST. IN A GALAXY FAR, FAR AWAY
        </motion.p>

        <motion.div
          style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center', position: 'relative', zIndex: 1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Link to="/menu" className="btn-neon-green">VIEW MENU</Link>
          <Link to="/order" className="btn-neon-purple">ORDER NOW</Link>
        </motion.div>

        {/* Floating decorations */}
        <motion.div
          style={{ position: 'absolute', bottom: 20, right: 30, fontSize: '2rem', opacity: 0.3 }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          👾
        </motion.div>
        <motion.div
          style={{ position: 'absolute', bottom: 30, left: 40, fontSize: '1.5rem', opacity: 0.25 }}
          animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          🛸
        </motion.div>
      </section>

      <hr className="section-divider" />

      {/* Feature cards */}
      <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <motion.p
          className="neon-red font-pixel"
          style={{ fontSize: '0.55rem', textAlign: 'center', letterSpacing: '0.2em', marginBottom: 48 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ── WHAT WE OFFER ──
        </motion.p>

        <motion.div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.12 }}
        >
          <FeatureCard icon="☕" title="COSMIC BREWS"   desc="Hand-crafted coffees, lattes, and cold brews from across the universe. Each sip takes you somewhere new." neonClass="neon-green"  borderClass="border-neon-green" />
          <FeatureCard icon="🍡" title="SPACE SNACKS"   desc="Japanese treats, mochi, pocky, taiyaki, and intergalactic bites imported from distant star systems."    neonClass="neon-purple" borderClass="border-neon-purple" />
          <FeatureCard icon="👾" title="ARCADE VIBES"   desc="Classic arcade machines, neon lights, retro sounds, and comic panels covering every wall."               neonClass="neon-blue"   borderClass="border-neon-blue" />
          <FeatureCard icon="👽" title="ALIEN APPROVED" desc="Even the Martian ambassador himself stops by for a Nebula Mocha. Ack ack ack — that means delicious."    neonClass="neon-red"    borderClass="border-neon-red" />
        </motion.div>
      </section>

      <hr className="section-divider" />

      {/* CTA strip */}
      <motion.section
        style={{ padding: '60px 24px', textAlign: 'center', background: 'linear-gradient(180deg, rgba(191,0,255,0.06) 0%, transparent 100%)' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-pixel" style={{ fontSize: '0.55rem', color: '#666', letterSpacing: '0.15em', marginBottom: 16 }}>
          READY FOR LIFTOFF?
        </p>
        <h2 className="neon-green" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: 32 }}>
          Come Find Your New Favorite Drink
        </h2>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/location" className="btn-neon-blue">FIND US</Link>
          <Link to="/gallery" className="btn-neon-red">SEE INSIDE</Link>
        </div>
      </motion.section>
    </div>
  )
}
