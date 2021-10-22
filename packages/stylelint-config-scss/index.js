const namePattern = /^[a-z]+([a-z0-9-]+[a-z0-9]+)?$/;

module.exports = {
    extends: '@jwilsson/stylelint-config',
    plugins: ['stylelint-scss'],
    rules: {
        'at-rule-no-unknown': null,
        'block-closing-brace-newline-after': [
            'always',
            {
                ignoreAtRules: ['/^[a-z]*-mixin/', 'include'],
            },
        ],
        'selector-type-no-unknown': [
            true,
            {
                ignoreTypes: ['/^%/'],
            },
        ],

        'scss/at-else-if-parentheses-space-before': 'always',
        'scss/at-extend-no-missing-placeholder': true,
        'scss/at-function-named-arguments': 'always',
        'scss/at-function-parentheses-space-before': 'always',
        'scss/at-function-pattern': namePattern,
        'scss/at-import-partial-extension': true,
        'scss/at-mixin-argumentless-call-parentheses': 'always',
        'scss/at-mixin-named-arguments': 'always',
        'scss/at-mixin-parentheses-space-before': 'always',
        'scss/at-mixin-pattern': namePattern,
        'scss/at-rule-no-unknown': true,
        'scss/comment-no-empty': true,
        'scss/dollar-variable-colon-space-after': 'always',
        'scss/dollar-variable-colon-space-before': 'never',
        'scss/dollar-variable-empty-line-after': true,
        'scss/dollar-variable-first-in-block': [
            true,
            {
                ignore: ['comments'],
            },
        ],
        'scss/dollar-variable-pattern': namePattern,
        'scss/double-slash-comment-whitespace-inside': 'always',
        'scss/function-unquote-no-unquoted-strings-inside': true,
        'scss/no-duplicate-dollar-variables': true,
        'scss/no-duplicate-mixins': true,
        'scss/no-global-function-names': true,
        'scss/operator-no-unspaced': true,
        'scss/percent-placeholder-pattern': namePattern,
        'scss/selector-no-redundant-nesting-selector': true,
        'scss/selector-no-union-class-name': true,
    },
};
