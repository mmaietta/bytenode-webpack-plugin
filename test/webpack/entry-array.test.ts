import { runWebpack } from './runner';

describe('entry as an array of strings', () => {

  test('should support 1 entry', async () => {
    const assets = await runWebpack({
      entry: ['./fixtures/first.js'],
    });

    expect(assets?.sort()).toStrictEqual([
      'main.compiled.jsc',
      'main.js',
    ]);
  });

  test('should support N entries', async () => {
    const assets = await runWebpack({
      entry: ['./fixtures/first.js', './fixtures/second.js', './fixtures/third.js'],
    });

    expect(assets?.sort()).toStrictEqual([
      'main.compiled.jsc',
      'main.js',
    ]);
  });

});

describe('entry as an object of arrays', () => {

  test('should support 1 array of 1 entry', async () => {
    const assets = await runWebpack({
      entry: {
        first: ['./fixtures/first.js'],
      },
    });

    expect(assets?.sort()).toStrictEqual([
      'first.compiled.jsc',
      'first.js',
    ]);
  });

  test('should support 1 array of N entries', async () => {
    const assets = await runWebpack({
      entry: {
        named: ['./fixtures/first.js', './fixtures/second.js', './fixtures/third.js'],
      },
    });

    expect(assets?.sort()).toStrictEqual([
      'named.compiled.jsc',
      'named.js',
    ]);
  });

  test('should support N arrays of 1 entry', async () => {
    const assets = await runWebpack({
      entry: {
        firstNamed: ['./fixtures/first.js'],
        secondNamed: ['./fixtures/second.js'],
        thirdNamed: ['./fixtures/third.js'],
      },
    });

    expect(assets?.sort()).toStrictEqual([
      'firstNamed.compiled.jsc',
      'firstNamed.js',
      'secondNamed.compiled.jsc',
      'secondNamed.js',
      'thirdNamed.compiled.jsc',
      'thirdNamed.js',
    ]);
  });

  test('should support N arrays of N entries', async () => {
    const assets = await runWebpack({
      entry: {
        firstNamed: ['./fixtures/first.js'],
        mixNamed: ['./fixtures/second.js', './fixtures/third.js'],
      },
    });

    expect(assets?.sort()).toStrictEqual([
      'firstNamed.compiled.jsc',
      'firstNamed.js',
      'mixNamed.compiled.jsc',
      'mixNamed.js',
    ]);
  });

});
