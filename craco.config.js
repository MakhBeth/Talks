module.exports = {
  reactScriptsVersion: "react-scripts" /* (default value) */ ,
  babel: {
    plugins: [
      ["@emotion",
        {
          "autoLabel": "dev-only",
          "labelFormat": "[filename]--[local]",
          "cssPropOptimization": true
        }
      ]
    ],
  },
};
