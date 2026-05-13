import { useMemo } from 'react'
import type { CSSProperties } from 'react'

import {
  AVATAR_SIZE,
  ditherAvatarDataUri,
  generateDitherAvatarData,
} from '@/lib/dither'

export type DitherAvatarProps = {
  seed: string
  size?: number
  alt?: string
  className?: string
  style?: CSSProperties
}

export function DitherAvatar({
  seed,
  size = 40,
  alt = '',
  className,
  style,
}: DitherAvatarProps) {
  const uri = useMemo(() => ditherAvatarDataUri(seed), [seed])

  return (
    <img
      src={uri}
      alt={alt}
      width={size}
      height={size}
      className={className}
      style={{
        borderRadius: '50%',
        ...style,
      }}
    />
  )
}

export function DitherAvatarSVG({
  seed,
  size = 40,
  alt,
  className,
  style,
}: DitherAvatarProps) {
  const avatar = useMemo(() => generateDitherAvatarData(seed), [seed])

  return (
    <svg
      viewBox={`0 0 ${AVATAR_SIZE} ${AVATAR_SIZE}`}
      width={size}
      height={size}
      shapeRendering="crispEdges"
      className={className}
      style={{
        borderRadius: '50%',
        overflow: 'hidden',
        ...style,
      }}
      role={alt ? 'img' : undefined}
      aria-label={alt}
      aria-hidden={alt ? undefined : true}
    >
      {/* <rect width={AVATAR_SIZE} height={AVATAR_SIZE} fill={avatar.fill} /> */}
      <rect width={AVATAR_SIZE} height={AVATAR_SIZE} className="fill-muted" />

      <path
        fill="none"
        stroke={avatar.stroke}
        transform="translate(0, 3) scale(6)"
        d={avatar.path}
        // CUSTOM
        className="stroke-foreground/70"
      />
    </svg>
  )
}
