// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// export * from "ext:deno_node/path/mod.ts";
// import * as m from "ext:deno_node/path/mod.ts";

import {
  basename,
  delimiter,
  dirname,
  extname,
  format,
  isAbsolute,
  join,
  normalize,
  parse,
  posix,
  relative,
  resolve,
  sep,
  toNamespacedPath,
  win32,
} from "ext:deno_node/path/mod.ts";

posix.posix = posix;
posix.win32 = win32;
win32.posix = posix;
win32.win32 = win32;
delete posix.fromFileUrl;
delete posix.toFileUrl;
delete win32.fromFileUrl;
delete win32.toFileUrl;

export {
  basename,
  delimiter,
  dirname,
  extname,
  format,
  isAbsolute,
  join,
  normalize,
  parse,
  posix,
  relative,
  resolve,
  sep,
  toNamespacedPath,
  win32,
};

export default {
  basename,
  delimiter,
  dirname,
  extname,
  format,
  isAbsolute,
  join,
  normalize,
  parse,
  posix,
  relative,
  resolve,
  sep,
  toNamespacedPath,
  win32,
};
