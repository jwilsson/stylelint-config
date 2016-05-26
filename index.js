module.exports = {
  "extends": "stylelint-config-standard",
  "rules": {
    "at-rule-no-vendor-prefix": true,
    "block-closing-brace-newline-before": "always",
    "block-no-single-line": true,
    "block-opening-brace-newline-after": "always",
    "block-opening-brace-space-before": "always",
    "color-hex-length": "long",
    "color-named": "never",
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-properties-order": "alphabetical",
    "declaration-block-semicolon-newline-after": "always",
    "declaration-colon-space-after": "always",
    "declaration-no-important": true,
    "font-family-name-quotes": "always-unless-keyword",
    "font-weight-notation": "numeric",
    "function-url-quotes": "always",
    "indentation": 4,
    "max-nesting-depth": 2,
    "media-feature-name-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "rule-nested-empty-line-before": ["always", {
      "except": ["first-nested"],
      "ignore": ["after-comment"]
    }],
    "selector-max-compound-selectors": 3,
    "selector-no-id": true,
    "selector-no-qualifying-type": [true, {
      "ignore": ["attribute"]
    }],
    "selector-no-universal": true,
    "selector-no-vendor-prefix": true,
    "string-quotes": "single",
    "time-no-imperceptible": true,
    "value-keyword-case": "lower",
    "value-no-vendor-prefix": true
  }
};
