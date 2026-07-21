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
          fontSize: 24,
          background: 'linear-gradient(135deg, #FDE68A 0%, #F9A8D4 50%, #C4B5FD 100%)',
          borderRadius: '50%',
        }}
      >
        🚀
      </div>
    ),
    { ...size },
  )
}
