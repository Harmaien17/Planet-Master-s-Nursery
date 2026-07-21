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
          fontSize: 120,
          background: 'linear-gradient(135deg, #FDE68A 0%, #F9A8D4 50%, #C4B5FD 100%)',
        }}
      >
        🚀
      </div>
    ),
    { ...size },
  )
}
