const presets = [
  [
    "@babel/env",
    {
      targets: {
        ie: "11",
        chrome: "58"
      },
      useBuiltIns: "usage",
      corejs: 3
    }
  ]
];

module.exports = { presets };
