import path from "node:path";

console.log(path.SEP);
console.log(path.SEP_PATTERN);
console.log(path.fromFileUrl);
console.log(path.globToRegExp);
console.log(path.isGlob);
console.log(path.joinGlobs);
console.log(path.normalizeGlob);
console.log(path.toFileUrl);
console.log(path.posix.fromFileUrl);
console.log(path.posix.toFileUrl);
console.log(path.win32.fromFileUrl);
console.log(path.win32.toFileUrl);
console.log(path.posix.posix);
console.log(path.posix.win32);
console.log(path.win32.posix);
console.log(path.win32.win32);
if (Deno.build.os == "windows") {
  console.log(path === path.win32);
} else {
  console.log(path === path.posix);
}

console.assert(path.SEP === undefined);
console.assert(path.SEP_PATTERN === undefined);
console.assert(path.fromFileUrl === undefined);
console.assert(path.globToRegExp === undefined);
console.assert(path.isGlob === undefined);
console.assert(path.joinGlobs === undefined);
console.assert(path.normalizeGlob === undefined);
console.assert(path.toFileUrl === undefined);
console.assert(path.posix.fromFileUrl === undefined);
console.assert(path.posix.toFileUrl === undefined);
console.assert(path.win32.fromFileUrl === undefined);
console.assert(path.win32.toFileUrl === undefined);
console.assert(path.posix.posix === path.posix);
console.assert(path.posix.win32 === path.win32);
console.assert(path.win32.posix === path.posix);
console.assert(path.win32.win32 === path.win32);
if (Deno.build.os == "windows") {
  console.assert(path === path.win32);
} else {
  console.assert(path === path.posix);
}
