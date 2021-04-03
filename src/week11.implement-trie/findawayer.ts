// https://leetcode.com/problems/implement-trie-prefix-tree/
// Runtime: 184 ms, faster than 98.68% of TypeScript online submissions for Implement Trie (Prefix Tree).
// Memory Usage: 53 MB, less than 80.26% of TypeScript online submissions for Implement Trie (Prefix Tree).

const TRIE_LEAF_SYMBOL = '$';

interface TrieNode {
  [key: string]: TrieNode;
}

class Trie {
  private tree: TrieNode = {};

  public insert(word: string): void {
    let current = this.tree;
    for (const char of word) {
      if (!current[char]) current[char] = {};
      current = current[char];
    }
    current[TRIE_LEAF_SYMBOL] = {};
  }

  public search(word: string): boolean {
    const searchResult = this.traverseWith(word);
    return searchResult ? TRIE_LEAF_SYMBOL in searchResult : false;
  }

  public startsWith(prefix: string): boolean {
    return Boolean(this.traverseWith(prefix));
  }

  private traverseWith(word: string): TrieNode | null {
    let current = this.tree;
    for (const char of word) {
      if (!current[char]) return null;
      current = current[char];
    }
    return current;
  }
}

describe('implement-trie', () => {
  it('should retrieve partial keys from the stored string', () => {
    const trie = new Trie();
    trie.insert('apple');
    expect(trie.search('apple')).toBe(true);
    expect(trie.search('app')).toBe(false);
    expect(trie.startsWith('app')).toBe(true);
    trie.insert('app');
    expect(trie.search('app')).toBe(true);
  });

  it('should 2', () => {
    const trie = new Trie();
    trie.insert('app');
    trie.insert('apple');
    trie.insert('beer');
    trie.insert('add');
    trie.insert('jam');
    trie.insert('rental');
    expect(trie.search('apps')).toBe(false);
    expect(trie.search('app')).toBe(true);
    expect(trie.search('ad')).toBe(false);
  });
});
