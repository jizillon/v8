// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated by tools/bigint-tester.py.

// Flags: --harmony-bigint

var data = [{
  a: "-193b47d0d9a8688b329e80de92195f311825",
  b: "-2fabed9434bff933e23ea21af0f21a43",
  r: "-193b6ffbfdbc7cbffbbfe2feb21bfff31a67"
}, {
  a: "35979ec99b7ff03f81817ebc9ddd50025d1ccf41565b502f0fc85ec54f630",
  b: "be96016cc031653c9b1eceb1dd",
  r: "8c9401648000603c810c44b010"
}, {
  a: "-f594f8199c11594681a9c38fd985a03d8c79ce6c8d342809924c89b385af43116ec3a21",
  b: "-53e7b9738caaecc58fde1b5a4aa9f782f28a04e2bb29d207ccd5d45",
  r: "-f594f8199c115946d3effbffddafecfd8fffdf7ecfbdff8bf2ce8df3bfafd317eed7f65"
}, {
  a: "dd7245d3ca5b360296082e6ca91915179b257f36e45e6e44cf892db875fdcfb19522b3",
  b: "-dcc83137df3bb234e1144390f6c5bc0772a07f2a4540865554d20ebd37be",
  r: "dd7245d3ca0336028000044c891801140b013a02e00c4e00c5882d3820a90db1000002"
}, {
  a: "-28",
  b: "eaec4017147fd9741ff3b98f1b6f71d8f3d6869c18b39c6237a6b2d4d2fc3c81e9",
  r: "eaec4017147fd9741ff3b98f1b6f71d8f3d6869c18b39c6237a6b2d4d2fc3c81c8"
}, {
  a: "-223909fc585f36f995d6f72dd9f169df1fad8",
  b: "b13e919ce59c18c7c0517eecdb2519155cc",
  r: "80360184a0880042000052240a040000508"
}, {
  a: "-fcb4ac9fdc7ee85d03585f944a79b28efffb461e17df2d",
  b: "13cd27fb49c92d53c567688ab6b9",
  r: "38023b100492100042160882091"
}, {
  a: "-1a16ca8c3725cec0c8a61ce81",
  b: "-dbf3e",
  r: "-1a16ca8c3725cec0c8a6dffbe"
}, {
  a: "-834db45b67472062091e",
  b: "5aff66623af6b6cd042a361d5a22aea03152b764a056c71",
  r: "5aff66623af6b6cd042a361d5a228a2030408304a056460"
}, {
  a: "1a8c37cff2e02f5272bc61d60b8301e443c38172446f75d75e01c41f60",
  b: "e15d12bee18edaca77ad15ff0a567e132bb1b046623858",
  r: "215012bc61860a8201a401c30052440321911000401840"
}, {
  a: "-f463",
  b: "bb02038e2ff03fa",
  r: "bb02038e2ff0398"
}, {
  a: "3178f92d2eeee1aebc33f085aa96c9046f1133ad6afbd666664ab79625639e001",
  b: "124d8bd8ea20d8e510ba30d9",
  r: "20d02406020586010382001"
}, {
  a: "fc7aaaa7a52f3604e1e700f01ea6f266912f583bffa78aee08939401056cde",
  b: "-50e3611d6ada075f432319f10c8192f1de56ead628972",
  r: "fc7aaaa7a52f3604e0e100e008025202010d4820ef2782c00012900005648e"
}, {
  a: "7dea10c67bdf023c00d94643e9f2d38295635b0b2b55a0e40818",
  b: "8defe4741785c6c2d2ecaf7752a903ed",
  r: "443e0701380844252082b5500a00008"
}, {
  a: "6f837e0ec2d00abb60051299bfd36b58c803f6445f91bb8dded858c6c1c476142",
  b: "-26746eda5ca5095ab8f315c88b201cfa2affbbb700fc3bba8626b5bfd0a",
  r: "6f837e08829000a3400400010cc22350c80304440000088d02c04040c14040042"
}, {
  a: "ab69c286138358dea4308b60f12f212fcd1e0",
  b: "-c8735b6ce5513cc661fdae7941055028a2ea768dc13b9c83a79b9bf84e62cdf",
  r: "aa29c2041181501e84200840602401218d120"
}, {
  a: "6c9ec2e7cdb2c1fb630a8e16323138db939c2a21e3576b777d",
  b: "-51cf93f77a711c00",
  r: "6c9ec2e7cdb2c1fb630a8e16323138db938c202000050a6400"
}, {
  a: "edee34cd0c29ad27fed12e77a42aedbf8b53161716c90d516394b9038a2f125c95",
  b: "-18a515e3705a582d82f14bd42075b3b",
  r: "edee34cd0c29ad27fed12e77a42aedbf8b52140600c8085061049003022d100485"
}, {
  a: "466fee7dabecbaea71c19892f045d7d196a80c6f",
  b: "-5c93c7afd552be",
  r: "466fee7dabecbaea71c19892f001441010280c42"
}, {
  a: "-657c587f67a70177797befb96f116c2843",
  b: "-c3b8e2",
  r: "-657c587f67a70177797befb96f11efb8e4"
}];

var error_count = 0;
for (var i = 0; i < data.length; i++) {
  var d = data[i];
  var a = BigInt.parseInt(d.a, 16);
  var b = BigInt.parseInt(d.b, 16);
  var r = a & b;
  if (d.r !== r.toString(16)) {
    print("Input A:  " + a.toString(16));
    print("Input B:  " + b.toString(16));
    print("Result:   " + r.toString(16));
    print("Expected: " + d.r);
    print("Op: &");
    error_count++;
  }
}
if (error_count !== 0) {
  print("Finished with " + error_count + " errors.")
  quit(1);
}