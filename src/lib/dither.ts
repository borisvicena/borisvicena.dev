const GRID = 34
const SIZE = 200
const SCALE = 6
const TRANSLATE_Y = 3

const BAYER_4X4: readonly (readonly number[])[] = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
]

export const AVATAR_SIZE = SIZE
export const AVATAR_GRID = GRID

export type DitherAvatarData = {
  fill: string
  stroke: string
  path: string
}

function hashString(str: string): number {
  let hash = 0

  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0
  }

  return Math.abs(hash)
}

function hashMultiple(str: string, count: number): number[] {
  return Array.from({ length: count }, (_, index) =>
    hashString(`${str}:${index}`),
  )
}

function hslToHex(h: number, s: number, l: number): string {
  s /= 100
  l /= 100

  const k = (n: number) => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)

  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))

  const toHex = (value: number) =>
    Math.round(value * 255)
      .toString(16)
      .padStart(2, '0')

  return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`
}

function generateDensityGrid(seed: string): number[][] {
  const hashes = hashMultiple(seed, 2)
  const angle = (hashes[0] % 360) * (Math.PI / 180)
  const offset = ((hashes[1] % 100) / 100) * 0.4 - 0.2

  const cosA = Math.cos(angle)
  const sinA = Math.sin(angle)

  return Array.from({ length: GRID }, (_1, y) =>
    Array.from({ length: GRID }, (_2, x) => {
      const nx = (x / (GRID - 1)) * 2 - 1
      const ny = (y / (GRID - 1)) * 2 - 1

      const projected = nx * cosA + ny * sinA
      const density = (projected + 1 + offset) / 2

      return Math.max(0, Math.min(1, density))
    }),
  )
}

function dither(density: number[][]): number[][] {
  return density.map((row, y) =>
    row.map((value, x) => {
      const bayer = BAYER_4X4[y % 4][x % 4] / 16
      return value >= bayer ? 1 : 0
    }),
  )
}

function bitmapToPath(pixels: number[][]): string {
  const parts: string[] = []

  for (let y = 0; y < GRID; y++) {
    const row = pixels[y]
    const segments: { start: number; length: number }[] = []

    let x = 0

    while (x < GRID) {
      if (row[x] === 1) {
        const start = x

        while (x < GRID && row[x] === 1) {
          x++
        }

        segments.push({
          start,
          length: x - start,
        })
      } else {
        x++
      }
    }

    for (const segment of segments) {
      parts.push(`M${segment.start} ${y}h${segment.length}`)
    }
  }

  return parts.join('')
}

export function generateDitherAvatarColors(seed: string): {
  fill: string
  stroke: string
} {
  const [hueHash] = hashMultiple(seed, 1)
  const hue = hueHash % 360

  return {
    // fill: hslToHex(hue, 100, 100),
    // stroke: hslToHex(hue, 0, 0),
    fill: hslToHex(hue, 85, 30),
    stroke: hslToHex(hue, 90, 65),
  }
}

export function generateDitherAvatarData(seed: string): DitherAvatarData {
  const { fill, stroke } = generateDitherAvatarColors(seed)
  const density = generateDensityGrid(seed)
  const pixels = dither(density)
  const path = bitmapToPath(pixels)

  return {
    fill,
    stroke,
    path,
  }
}

export function generateDitherAvatar(seed: string): string {
  const { fill, stroke, path } = generateDitherAvatarData(seed)

  return [
    `<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">`,
    `<rect width="${SIZE}" height="${SIZE}" fill="${fill}"/>`,
    `<path fill="none" stroke="${stroke}" transform="translate(0,${TRANSLATE_Y}) scale(${SCALE})" d="${path}"/>`,
    `</svg>`,
  ].join('')
}

export function ditherAvatarDataUri(seed: string): string {
  const svg = generateDitherAvatar(seed)

  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}
