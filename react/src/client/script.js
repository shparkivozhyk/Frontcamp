alert('opened');
window.__PRELOADED_STATE__ = ${JSON.stringify(blogs).replace(/</g, '\\u003c')};
alert (window.__PRELOADED_STATE__);