import { Markdown } from './markdown-formatter';
import { describe, it, expect } from '@jest/globals';

describe('Markdown Formatter', () => {
  it('should return an empty string', () => {
    expect(Markdown``).toBe('');
  });

  it('should return a basic value', () => {
    expect(Markdown`Hello World`).toBe('<p>Hello World</p>');
  });

  it('should return a string with a value', () => {
    expect(Markdown`Hello ${'World'}`).toBe('<p>Hello World</p>');
  });

  it('should return a string with formatting', () => {
    expect(Markdown`# Hello\nWorld`).toBe('<h1>Hello</h1>\n<p>World</p>');
  });
});
