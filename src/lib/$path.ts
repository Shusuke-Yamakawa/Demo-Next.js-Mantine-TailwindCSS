export const pagesPath = {
  "career": {
    "basicInfoEdit": {
      $url: (url?: { hash?: string }) => ({ pathname: '/career/basicInfoEdit' as const, hash: url?.hash })
    },
    "desiredCondition": {
      $url: (url?: { hash?: string }) => ({ pathname: '/career/desiredCondition' as const, hash: url?.hash })
    },
    $url: (url?: { hash?: string }) => ({ pathname: '/career' as const, hash: url?.hash })
  },
  "demo": {
    $url: (url?: { hash?: string }) => ({ pathname: '/demo' as const, hash: url?.hash })
  },
  "headHunter": {
    $url: (url?: { hash?: string }) => ({ pathname: '/headHunter' as const, hash: url?.hash })
  },
  "message": {
    $url: (url?: { hash?: string }) => ({ pathname: '/message' as const, hash: url?.hash })
  },
  "offer": {
    $url: (url?: { hash?: string }) => ({ pathname: '/offer' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
