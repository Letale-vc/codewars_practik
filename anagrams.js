const anagrams = (word, words) => words.filter((el) => word.split('').sort().join('') === el.split('').sort().join(''))
