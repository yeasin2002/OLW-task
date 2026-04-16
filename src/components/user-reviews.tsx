'use client'

import { AnimatePresence, motion } from 'motion/react'
import React, { useState } from 'react'
import { ReviewCard } from './review-card'

const reviews = [
  {
    name: 'Jenny Wilson',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    accentColor: '#f7d8ca',
    avatarLabel: 'JW',
  },
  {
    name: 'Esther Howard',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    accentColor: '#ffc85c',
    avatarLabel: 'EH',
  },
  {
    name: 'Robert Fox',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    accentColor: '#b8e8ff',
    avatarLabel: 'RF',
  },
]

const getWrappedIndex = (index: number) => {
  return (index + reviews.length) % reviews.length
}

export const UserReviews = () => {
  const [activeIndex, setActiveIndex] = useState(1)

  const previousIndex = getWrappedIndex(activeIndex - 1)
  const nextIndex = getWrappedIndex(activeIndex + 1)
  const activeReview = reviews[activeIndex]
  const previousReview = reviews[previousIndex]
  const nextReview = reviews[nextIndex]

  const showPrevious = () => {
    setActiveIndex((currentIndex) => getWrappedIndex(currentIndex - 1))
  }

  const showNext = () => {
    setActiveIndex((currentIndex) => getWrappedIndex(currentIndex + 1))
  }

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: { offset: { x: number }; velocity: { x: number } }) => {
    if (info.offset.x <= -80 || info.velocity.x <= -500) {
      showNext()
      return
    }

    if (info.offset.x >= 80 || info.velocity.x >= 500) {
      showPrevious()
    }
  }

  return (
    <section className="overflow-hidden bg-white px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto">
        <div className="mx-auto text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            Check Our Clients <span className="text-primary">Review</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <motion.div
          className="mt-16 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.16}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
          aria-label="Client reviews carousel"
        >
          <div className="hidden items-center gap-5 lg:grid lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.08fr)_minmax(0,0.82fr)]">
            <motion.div
              key={`left-${previousReview.name}`}
              initial={{ opacity: 0, x: -28, scale: 0.96 }}
              animate={{ opacity: 0.92, x: 0, scale: 1 }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
              className="justify-self-end"
            >
              <ReviewCard
                name={previousReview.name}
                description={previousReview.description}
                accentColor={previousReview.accentColor}
                avatarLabel={previousReview.avatarLabel}
                compact
              />
            </motion.div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeReview.name}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.34, ease: 'easeOut' }}
                className="relative z-10"
              >
                <ReviewCard
                  name={activeReview.name}
                  description={activeReview.description}
                  accentColor={activeReview.accentColor}
                  avatarLabel={activeReview.avatarLabel}
                  className="min-h-49"
                />
              </motion.div>
            </AnimatePresence>

            <motion.div
              key={`right-${nextReview.name}`}
              initial={{ opacity: 0, x: 28, scale: 0.96 }}
              animate={{ opacity: 0.92, x: 0, scale: 1 }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
              className="justify-self-start"
            >
              <ReviewCard
                name={nextReview.name}
                description={nextReview.description}
                accentColor={nextReview.accentColor}
                avatarLabel={nextReview.avatarLabel}
                compact
              />
            </motion.div>
          </div>

          <div className="lg:hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeReview.name}
                initial={{ opacity: 0, x: 26 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -26 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <ReviewCard
                  name={activeReview.name}
                  description={activeReview.description}
                  accentColor={activeReview.accentColor}
                  avatarLabel={activeReview.avatarLabel}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
