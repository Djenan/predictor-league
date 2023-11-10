import component from '../src/components/merge-object';

describe('Component', () => {
  let object1;
  let object2;

  beforeEach(() => {
    object1 = {
      value1: 1,
      value2: 2,
      value3: 3
    };

    object2 = {
      value2: 3,
      value3: 4,
      value4: 5
    };
  });

  afterEach(() => {
    object1 = null;
    object2 = null;
  });

  it('is a function', () => {
    expect(typeof component).to.equal('function');
  });

  it('correctly merges onject2 into object1', () => {
    component(object1, object2);
    expect(object1.value1).to.equal(1);
    expect(object1.value2).to.equal(3);
    expect(object1.value3).to.equal(4);
    expect(object1.value4).to.equal(5);
  });
});
