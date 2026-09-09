export type FullscreenDocument = Document & {
  webkitFullscreenEnabled?: boolean
  webkitExitFullscreen?: () => Promise<void> | void
  webkitFullscreenElement?: Element | null
}

export type FullscreenElement = HTMLElement & {
  webkitRequestFullscreen?: () => Promise<void> | void
}

export type KeyboardNavigationHandlers = {
  onPrevious: () => void
  onNext: () => void
  onFirst: () => void
  onLast: () => void
}

export type SwipeNavigationHandlers = {
  onPrevious: () => void
  onNext: () => void
}
