export default function WaveDivider({ flip = false, color = '#ffffff', darkColor = '#0f172a', className = '' }) {
  return (
    <div
      className={`w-full leading-none overflow-hidden wave-divider ${flip ? 'wave-divider--flip' : ''} ${className}`}
      style={{ '--wave-color': color, '--wave-dark': darkColor }}
    >
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[60px] md:h-[80px]">
        <path
          d="M0,60 C180,100 360,20 540,60 C720,100 900,20 1080,60 C1260,100 1440,40 1440,60 L1440,120 L0,120 Z"
          fill="var(--wave-color)"
        />
      </svg>
    </div>
  )
}
