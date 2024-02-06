import { Validator } from '../Validator ';

test.each([
  ["alex_FS19-netology", true],
  ["alex_FS1976-netology", false],
  ["1alex_FS19-netology", false],
  ["alex_FS19-netology5", false],
  ["alex_FS19-netology-", false],
  ["-alex_FS19-netology", false],
  ["alex_FS19-netol%ogy", false],    
])

  ('testing class Validator', (levelTest, expected) => {
    const check = new Validator(levelTest);
    const resultCheck = check.validateUsername();
    expect(resultCheck).toBe(expected);
  })