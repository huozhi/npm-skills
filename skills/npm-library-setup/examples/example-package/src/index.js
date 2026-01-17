/**
 * Example ESM module - index.js
 *
 * This demonstrates ES Module syntax in an npm package
 */

// Imports must be at the top
import { helperFunction } from './helpers.js';

// Named exports
export function greet(name) {
  return `Hello, ${name}!`;
}

export const version = '1.0.0';

// Default export
export default class MyLibrary {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return greet(this.name);
  }
}

export function useHelper() {
  return helperFunction();
}
