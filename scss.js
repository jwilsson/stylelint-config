const namePattern = /^[a-z]+([a-z0-9-]+[a-z0-9]+)?$/;

module.exports = {
  "extends": "./index.js",
  "plugins": [
    "stylelint-scss",
  ],
  "rules": {
    "scss/at-else-if-parentheses-space-before": "always",
    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-function-named-arguments": "always",
    "scss/at-function-parentheses-space-before": "always",
    "scss/at-function-pattern": namePattern,
    "scss/at-mixin-argumentless-call-parentheses": "always",
    "scss/at-mixin-named-arguments": "always",
    "scss/at-mixin-parentheses-space-before": "always",
    "scss/at-mixin-pattern": namePattern,
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-colon-space-after": "always",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/dollar-variable-pattern": namePattern,
    "scss/double-slash-comment-whitespace-inside": "always",
    "scss/operator-no-unspaced": true,
    "scss/percent-placeholder-pattern": namePattern,
    "scss/selector-no-redundant-nesting-selector": true,
  },
};
