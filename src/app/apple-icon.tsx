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
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#06b6d4',
          padding: 6,
          borderRadius: 28,
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
            borderRadius: 20,
          }}
        >
          <span
            style={{
              fontSize: 60,
              fontWeight: 700,
              color: 'white',
              fontFamily: 'Georgia, serif',
              letterSpacing: -2,
            }}
          >
            KMG
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
