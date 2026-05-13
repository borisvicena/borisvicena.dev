import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

import { generateDitherAvatar } from '../src/lib/dither'

const publicDir = join(process.cwd(), 'public')
const faviconPath = join(publicDir, 'favicon.svg')

mkdirSync(publicDir, { recursive: true })

const svg = generateDitherAvatar('borisvicena.dev')
writeFileSync(faviconPath, svg, 'utf8')

console.log('Generated public/favicon.svg')
