import { multiplySync, multiplyAsync } from '../src/index';

test('should run, and show tests are being parsed', () => {
  const testsAre = 'running';
  expect(testsAre).toBe('running');
});

test('should test sync multiply function', () => {
  const answer = multiplySync(2);
  expect(answer).toBe(4);
});

test('should test async multiply function', (done) => {
  const multiply = multiplyAsync(2);
  multiply.then((answer) => {
    expect(answer).toBe(4);
    done();
  });
});

// using 'done'
test('should test async multiply function error with no arg', (done) => {
  const multiply = multiplyAsync();

  multiply.catch((error) => {
    expect(error).toEqual(new Error('a single arg of type number is required'));
    done();
  });
});

// using async
test('should test async multiply function error with incorrect arg type', async () => {
  await expect(multiplyAsync('potato')).rejects.toThrow('a single arg of type number is required');
});
