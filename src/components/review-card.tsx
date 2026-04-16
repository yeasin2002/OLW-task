import { Star } from 'lucide-react'
import React from 'react'

type ReviewCardProps = {
  name: string
  description: string
  accentColor: string
  avatarLabel: string
  className?: string
  compact?: boolean
}

export const ReviewCard = ({
  name,
  description,
  accentColor,
  avatarLabel,
  className,
  compact = false,
}: ReviewCardProps) => {
  return (
    <article
      className={[
        compact
          ? 'flex w-full items-center gap-4 rounded-2xl bg-white px-5 py-6 shadow-[0_18px_42px_rgba(15,23,42,0.06)]'
          : 'flex w-full items-center gap-5 rounded-2xl bg-white px-6 py-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div
        className={[
          'shrink-0 rounded-full text-gray-950',
          compact
            ? 'flex h-12 w-12 items-center justify-center text-base font-semibold'
            : 'flex h-14 w-14 items-center justify-center text-lg font-semibold',
        ].join(' ')}
        style={{ backgroundColor: accentColor }}
      >
        {avatarLabel}
      </div>

      <div className="min-w-0">
        <h3 className={compact ? 'text-base font-semibold text-gray-950' : 'text-lg font-semibold text-gray-950'}>
          {name}
        </h3>
        <p
          className={
            compact
              ? 'mt-1 max-w-[15rem] text-sm leading-5 text-gray-600'
              : 'mt-1 max-w-[17rem] text-sm leading-6 text-gray-600'
          }
        >
          {description}
        </p>
        <div className={compact ? 'mt-2 flex items-center gap-1 text-[#f59e0b]' : 'mt-3 flex items-center gap-1 text-[#f59e0b]'}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-3.5 w-3.5 fill-current" />
          ))}
        </div>
      </div>
    </article>
  )
}
