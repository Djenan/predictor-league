/* global document */

import component from '../src/components/update-text';

describe('Component', () => {
  let div;
  let text;

  beforeEach(() => {
    div = document.createElement('div');
  });

  afterEach(() => {
    div = null;
  });

  it('is a function', () => {
    expect(typeof component).to.equal('function');
  });

  it('updates div to jupiter', () => {
    component(div, 'jupiter');
    expect(div.textContent).to.equal('jupiter');
  });

  it('ignores undefined text', () => {
    component(div, 'jupiter');
    component(div, text);
    expect(div.textContent).to.equal('jupiter');
  });

  it('ignores null', () => {
    component(div, 'jupiter');
    component(div, null);
    expect(div.textContent).to.equal('jupiter');
  });

  it('adds data-updated when text changes', () => {
    component(div, 'jupiter');
    component(div, 'jupiter2');
    expect(div.getAttribute('data-updated')).to.equal('true');
  });

  it('removes data-updated when text is the same', () => {
    component(div, 'jupiter');
    component(div, 'jupiter');
    expect(div.getAttribute('data-updated')).to.equal(null);
  });
});
