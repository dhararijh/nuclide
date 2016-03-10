Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.toJsString = toJsString;

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

/**
 * Serialize a JS object in a way that the result is valid JavaScript. Line separator U+2028 and
 * Paragraph Separator U+2029 are the potential issues here, as they can show up in JSON but must be
 * escaped in JS.
 * See http://timelessrepo.com/json-isnt-a-javascript-subset
 */

function toJsString(str) {
  return JSON.stringify(str).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvSnNTdHJpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQk8sU0FBUyxVQUFVLENBQUMsR0FBVyxFQUFVO0FBQzlDLFNBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7Q0FDeEYiLCJmaWxlIjoidG9Kc1N0cmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnO1xuLyogQGZsb3cgKi9cblxuLypcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBsaWNlbnNlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW5cbiAqIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8qKlxuICogU2VyaWFsaXplIGEgSlMgb2JqZWN0IGluIGEgd2F5IHRoYXQgdGhlIHJlc3VsdCBpcyB2YWxpZCBKYXZhU2NyaXB0LiBMaW5lIHNlcGFyYXRvciBVKzIwMjggYW5kXG4gKiBQYXJhZ3JhcGggU2VwYXJhdG9yIFUrMjAyOSBhcmUgdGhlIHBvdGVudGlhbCBpc3N1ZXMgaGVyZSwgYXMgdGhleSBjYW4gc2hvdyB1cCBpbiBKU09OIGJ1dCBtdXN0IGJlXG4gKiBlc2NhcGVkIGluIEpTLlxuICogU2VlIGh0dHA6Ly90aW1lbGVzc3JlcG8uY29tL2pzb24taXNudC1hLWphdmFzY3JpcHQtc3Vic2V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0pzU3RyaW5nKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHN0cikucmVwbGFjZSgvXFx1MjAyOC9nLCAnXFxcXHUyMDI4JykucmVwbGFjZSgvXFx1MjAyOS9nLCAnXFxcXHUyMDI5Jyk7XG59XG4iXX0=