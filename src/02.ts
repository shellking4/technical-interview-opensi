// An anagram is a rearrangement of letters to form a new word: for example "owns" is an anagram of "snow".
//  A word is not its own anagram: for example, "stop" is not an anagram of "stop".
// Given a target word and a set of candidate words, this exercise requests the anagram set:
// the subset of the candidates that are anagrams of the target.
// The target and candidates are words of one or more ASCII alphabetic characters (A-Z and a-z).
// Lowercase and uppercase characters are equivalent: for example,
// "PoTS" is an anagram of "sTOp", but "StoP" is not an anagram of "sTOp".
// The anagram set is the subset of the candidate set that are anagrams of the target (in any order).
// Words in the anagram set should have the same letter case as in the candidate set.
// Given the target "stone" and candidates "stone", "tones", "banana", "tons", "notes", "Seton",
// the anagram set is "tones", "notes", "Seton".

export function anagramSet(target: string, candidates: string[]): string[] {
  const areAnagrams = (word1: string, word2: string) => {
    const sortedWord1 = word1.toLowerCase().split('').sort().join('');
    const sortedWord2 = word2.toLowerCase().split('').sort().join('');
    return sortedWord1 === sortedWord2;
  }
  const matches = candidates.filter(candidate => target.toLowerCase() !== candidate.toLowerCase() && areAnagrams(target, candidate));
  return matches;
}
