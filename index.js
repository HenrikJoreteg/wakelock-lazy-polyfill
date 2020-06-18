if (typeof window !== 'undefined' && !window.navigator.wakeLock) {
  let loaded = false
  const loadScript = () =>
    new Promise((resolve) => {
      if (loaded) {
        return resolve()
      }

      const script = document.createElement('script')
      script.onload = () => {
        loaded = true
        resolve()
      }
      script.crossOrigin = 'anonymous'
      script.src = 'https://unpkg.com/nosleep.js@0.10.0'
      document.head.appendChild(script)
    })

  window.navigator.wakeLock = {
    isPolyfill: true,
    request: () =>
      loadScript().then(
        () =>
          new Promise((resolve) => {
            const noSleep = new window.NoSleep()
            let listeners = []
            const responseObject = {
              release: () => {
                noSleep.disable()
                listeners.forEach((fn) => fn())
              },
              addEventListener: (type, callback) => {
                listeners.push(callback)
              },
              removeEventListener: (type, callback) => {
                listeners = listeners.filter((fn) => fn !== callback)
              }
            }

            function enableHandler() {
              document.removeEventListener('click', enableHandler, false)
              noSleep.enable()
              resolve(responseObject)
            }

            document.addEventListener('click', enableHandler, false)
          })
      )
  }
}
