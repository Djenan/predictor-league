/* global window, document */

import component from '../src/components/sdc-site-match-header';

describe('Component', () => {
  let div;

  beforeEach(() => {
    window.SKY_SPORTS = {
      user: {
        isLoggedIn: true,
        isSkySports: true,
        name: 'JEREMY'
      },
      device: {
        ios: true,
        name: 'iphone',
        mobile: true
      }
    };
    window.sdc = {};
    // create div html
    div = document.createElement('div');
    div.innerHTML = '<div data-id="12345" data-status="0"></div>';
  });

  afterEach(() => {
    div = null;
  });

  it('is a function', () => {
    expect(typeof component).to.equal('function');
  });

  it('it polyfills window.fetch', () => {
    div.setAttribute('data-url', 'about:blank');
    component(div);
  });

  it('returns undefined if no url specified', () => {
    const obj = component(div, { url: null });
    expect(typeof obj).to.equal('undefined');
  });
});
