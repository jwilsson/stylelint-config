module.exports = {
    extends: 'stylelint-config-standard',
    plugins: [
        'stylelint-declaration-block-no-ignored-properties',
        'stylelint-order',
    ],
    rules: {
        'at-rule-semicolon-space-before': 'never',
        'block-closing-brace-newline-before': 'always',
        'block-opening-brace-newline-after': 'always',
        'color-hex-length': 'long',
        'color-named': 'never',
        'custom-property-empty-line-before': [
            'always',
            {
                except: [
                    'after-comment',
                    'after-custom-property',
                    'first-nested',
                ],
            },
        ],
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-colon-newline-after': null,
        'declaration-no-important': true,
        'declaration-property-value-disallowed-list': {
            '/^border/': ['none'],
            'padding': ['auto'],
        },
        'font-weight-notation': 'numeric',
        'function-url-no-scheme-relative': true,
        'indentation': 4,
        'keyframe-block-no-duplicate-selectors': true,
        'linebreaks': 'unix',
        'max-line-length': null,
        'max-nesting-depth': 3,
        'number-max-precision': null,
        'rule-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment'],
            },
        ],
        'selector-max-compound-selectors': 3,
        'selector-max-id': 0,
        'selector-max-universal': 0,
        'selector-no-qualifying-type': [
            true,
            {
                ignore: ['attribute'],
            },
        ],
        'selector-not-notation': 'complex',
        'string-quotes': 'single',
        'time-min-milliseconds': 100,
        'unicode-bom': true,

        'order/properties-alphabetical-order': true,
        'plugin/declaration-block-no-ignored-properties': true,
    },
};
