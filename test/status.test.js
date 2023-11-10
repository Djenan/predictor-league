import component from '../src/components/status';

describe('Component', () => {
  let response;

  beforeEach(() => {
    response = {
      status: 200
    };
  });

  afterEach(() => {
    response = null;
  });

  it('is a function', () => {
    expect(typeof component).to.equal('function');
  });

  it('returns the response object if status is 200', () => {
    expect(component(response)).to.equal(response);
  });

  it('returns undefined if status is not 200', () => {
    response.status = 404;
    expect(component(response)).to.equal(undefined);
  });
});
