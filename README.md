# wakelock-lazy-polyfill

```bash
npm i wakelock-lazy-polyfill
```

Polyfills WakeLock if not present by lazy-loading [nosleep.js](https://github.com/richtr/NoSleep.js) (but only when actually requested).

That means if it's natively supported this lib only adds ~800 bytes to your project.

Can also drop it in via CDN:

```html
<script src="http://unpkg.com/wakelock-lazy-polyfill"></script>
```

## Test site

https://wakelock-polyfill.joreteg.com/

## Background

The Web is getting a wonderful WakeLock API to keep your screen awake, but it's not broadly available yet. As of this writing it's a Origin Trial in Chrome that should ship in the next version.

Regardless, there's been a clever hack, called nosleep.js that plays a hidden video in the background to trick the browser into staying awake. This works pretty well, but...

1. I want to use native version if available
2. I only want to load the polyfill at the point where it's going to be used

So, here we are.

## License

[MIT](https://mit.joreteg.com/)

## Credits

Obviously props to [@richtr](https://github.com/richtr) for nosleep.js and [Thomas Steiner](https://twitter.com/tomayac) for his work on making the WakeLock API "A Thing".

If you like this, follow [@HenrikJoreteg](https://twitter.com/HenrikJoreteg) on twitter.
