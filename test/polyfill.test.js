/* global document, console */

import component from '../src/components/polyfill';

describe('Component', () => {
  let url;
  let callback;

  beforeEach(() => {
    url = 'my-polyfill.js';
    callback = {
      callback() {
        // eslint-disable-next-line no-console
        console.log('callback called');
      }
    };
  });

  it('is a function', () => {
    expect(typeof component).to.equal('function');
  });

  it('a script tag with polyfill src is created if the test is false', () => {
    component(false, url);
    expect(document.querySelectorAll('script[src="my-polyfill.js"]').length).to.equal(1);
  });

  it('the callback is immediately called if the test is true', () => {
    const spy = sinon.spy(callback, 'callback');
    component(true, url, callback.callback);
    expect(spy.called).to.equal(true);
  });
});
