import '../dist/wakelock-polyfill.umd'

const statusSpan = document.getElementById('status')
const setStatus = (status) => (statusSpan.textContent = status)

const isPolyfill = navigator.wakeLock.isPolyfill

if (!isPolyfill) {
  setStatus('WakeLock natively supported, will attempt in 5 seconds')
} else {
  setStatus('Not natively supported, will attempt in 5 seconds')
}

setTimeout(() => {
  setStatus('initiating request' + isPolyfill ? ' waiting for any click' : '')

  let acquiredLock

  navigator.wakeLock
    .request('screen')
    .then((lock) => {
      acquiredLock = lock
      setStatus('lock acquired!')
    })
    .catch(() => {
      setStatus('lock failed!')
    })
}, 5000)
