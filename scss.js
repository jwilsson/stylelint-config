const namePattern = /[a-z-]+/;

module.exports = {
  "extends": "./index.js",
  "plugins": [
    "stylelint-order",
    "stylelint-scss",
  ],
  "rules": {
    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-function-pattern": namePattern,
    "scss/at-mixin-argumentless-call-parentheses": "always",
    "scss/at-mixin-pattern": namePattern,
    "scss/dollar-variable-colon-space-after": "always",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/dollar-variable-pattern": namePattern,
    "scss/double-slash-comment-whitespace-inside": "always",
    "scss/operator-no-unspaced": true,
    "scss/percent-placeholder-pattern": namePattern,
    "scss/selector-no-redundant-nesting-selector": true,
  },
};
