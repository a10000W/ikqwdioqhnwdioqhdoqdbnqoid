module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-console": "off",
    "no-unused-vars": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/html-indent": "off",
    "vue/max-attributes-per-line": "off",
    "vue/html-self-closing": "off",
    "vue/require-default-prop": "off",
    "vue/no-v-html": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-closing-bracket-spacing": "off",
    "vue/attribute-hyphenation": [
      "error",
      "always",
      {
        "ignore": [
          "viewBox"
        ]
      }
    ]
  }
}
