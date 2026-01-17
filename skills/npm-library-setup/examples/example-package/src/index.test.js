/**
 * Example tests using vitest
 */

import { describe, it, expect } from 'vitest';
import { greet, version, useHelper } from './index.js';
import MyLibrary from './index.js';

describe('greet', () => {
  it('should greet a user', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  it('should handle empty string', () => {
    expect(greet('')).toBe('Hello, !');
  });
});

describe('version', () => {
  it('should have version string', () => {
    expect(version).toBe('1.0.0');
  });
});

describe('MyLibrary', () => {
  it('should create instance and greet', () => {
    const lib = new MyLibrary('ESM');
    expect(lib.greet()).toBe('Hello, ESM!');
  });
});

describe('useHelper', () => {
  it('should use helper function', () => {
    expect(useHelper()).toBe('Helper function result');
  });
});
