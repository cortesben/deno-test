import { assertEquals } from "https://deno.land/std@0.97.0/testing/asserts.ts";

assertEquals("hello", "hello");
assertEquals("world", "world");
assertEquals("hello", "world");

console.log("Asserted! ✓");