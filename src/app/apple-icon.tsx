import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 56,
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 600,
          fontFamily: 'Georgia, Times New Roman, serif',
          letterSpacing: 4,
          textShadow: '0 0 8px #2563eb, 0 0 16px #06b6d4',
          borderRadius: 32,
        }}
      >
        KMG
      </div>
    ),
    {
      ...size,
    }
  )
}

