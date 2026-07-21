/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Any photo rendered through next/image (e.g. real gallery/campus photos
    // added later) is automatically served as WebP or AVIF, resized per
    // device, and cached at the edge — no manual compression needed.
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
}

export default nextConfig
