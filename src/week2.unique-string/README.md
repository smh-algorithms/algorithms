> 출처: https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3 (코드워즈, 난이도 5 Kyu)

There is an array of strings. All strings contains similar letters except one. Try to find it!

```js
findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']) === 'BbBb';
findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']) === 'foo';
```

Strings may contain spaces. Spaces is not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 3 strings.
