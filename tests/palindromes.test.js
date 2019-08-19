const palindromes = require('../palindromes');

describe('palindromes()', () => {
    it('correctly identifies on-word palindromes', () => {
        expect(palindromes('madam')).toEqual(['madam']);
        expect(palindromes('racecar')).toEqual(['racecar']);
    });
});