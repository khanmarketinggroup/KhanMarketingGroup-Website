import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
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
          padding: 2,
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
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: 'white',
              fontFamily: 'Georgia, serif',
              letterSpacing: -0.5,
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
