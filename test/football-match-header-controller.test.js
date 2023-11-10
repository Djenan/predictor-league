import component from '../src/components/football-match-header-controller';

describe('Component', () => {
  let rootElement;
  let view;
  let data;

  beforeEach(() => {
    rootElement = document.createElement('div');

    /* eslint-disable func-names, no-shadow */
    view = function(data) {
      this.setAttribute('data-status', data.status);
    };
    /* eslint-enable */

    data = {
      football: [{ id: 12345, status: 1 }]
    };
  });

  afterEach(() => {
    rootElement = null;
    view = null;
    data = null;
  });

  it('is a function', () => {
    expect(typeof component).to.equal('function');
  });

  it('attaches the update function', () => {
    component(rootElement, view, data);
    expect(typeof rootElement.update).to.equal('function');
  });

  it('changes the status to 1 using attached update function', () => {
    component(rootElement, view, data);
    expect(rootElement.getAttribute('data-status')).to.equal('1');
  });

  it('updates the status to 2 by passing new data to update function', () => {
    component(rootElement, view, data);
    rootElement.update({ id: 12345, status: 2 });
    expect(rootElement.getAttribute('data-status')).to.equal('2');
  });
});
