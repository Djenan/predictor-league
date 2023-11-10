/* global document */

import component from '../src/components/football-match-header-view';

describe('Component', () => {
  let rootElement;
  let data;

  beforeEach(() => {
    rootElement = document.createElement('div');
    rootElement.innerHTML = [
      '<div data-update="score-home"></div>',
      '<div data-update="score-away"></div>',
      '<div data-update="status-note"></div>',
      '<div data-update="score-aggregate"></div>'
    ].join('');

    data = {
      id: 12345,
      status: 8,
      teams: {
        home: {
          score: 1,
          aggregate: 2
        },
        away: {
          score: 2,
          aggregate: 2
        }
      },

      summary: {
        full: 'this is my summary'
      }
    };
  });

  afterEach(() => {
    rootElement = null;
    data = null;
  });

  it('is a function', () => {
    expect(typeof component).to.equal('function');
  });

  it('updates the data-status-HELLO', () => {
    rootElement.update = component;
    rootElement.update(data);
    expect(rootElement.getAttribute('data-status')).to.equal('8');
  });

  it('updates the home score to 1', () => {
    component.call(rootElement, data);
    expect(rootElement.querySelector('[data-update="score-home"]').textContent).to.equal('1');
  });

  it('updates the away score to 2', () => {
    component.call(rootElement, data);
    expect(rootElement.querySelector('[data-update="score-away"]').textContent).to.equal('2');
  });

  it('updates the status note', () => {
    component.call(rootElement, data);
    expect(rootElement.querySelector('[data-update="status-note"]').textContent).to.equal('this is my summary');
  });

  it('updates the aggregate to 2-2', () => {
    component.call(rootElement, data);
    expect(rootElement.querySelector('[data-update="score-aggregate"]').textContent).to.equal('2-2');
  });
});
