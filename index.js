const namePattern = /[a-z-]+/;

module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-order",
  ],
  "rules": {
    "at-rule-no-unknown": null,
    "at-rule-no-vendor-prefix": true,
    "at-rule-semicolon-space-before": "never",
    "block-closing-brace-newline-after": ["always", {
      "ignoreAtRules": ["/^[a-z]*-mixin/", "include"],
    }],
    "block-closing-brace-newline-before": "always",
    "block-opening-brace-newline-after": "always",
    "block-opening-brace-space-before": "always",
    "color-hex-length": "long",
    "color-named": "never",
    "custom-property-empty-line-before": ["always", {
        "except": ["after-comment", "after-custom-property", "first-nested"],
    }],
    "custom-property-pattern": namePattern,
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-semicolon-newline-after": "always",
    "declaration-colon-newline-after": null,
    "declaration-colon-space-after": "always",
    "declaration-no-important": true,
    "declaration-property-value-blacklist": {
        "/^border/": ["none"],
        "padding": ["auto"],
    },
    "font-family-name-quotes": "always-unless-keyword",
    "font-weight-notation": "numeric",
    "function-url-no-scheme-relative": true,
    "function-url-quotes": "always",
    "indentation": 4,
    "max-nesting-depth": 3,
    "media-feature-name-no-vendor-prefix": true,
    "property-no-unknown": true,
    "property-no-vendor-prefix": true,
    "rule-empty-line-before": ["always", {
      "except": ["first-nested"],
      "ignore": ["after-comment"],
    }],
    "selector-attribute-quotes": "always",
    "selector-max-compound-selectors": 3,
    "selector-max-id": 0,
    "selector-no-qualifying-type": [true, {
      "ignore": ["attribute"],
    }],
    "selector-max-universal": 0,
    "selector-no-vendor-prefix": true,
    "selector-type-no-unknown": [true, {
      "ignoreTypes": ["/^%/"],
    }],
    "string-quotes": "single",
    "time-min-milliseconds": 100,
    "value-keyword-case": "lower",
    "value-no-vendor-prefix": true,

    "order/properties-alphabetical-order": true,
  },
};
