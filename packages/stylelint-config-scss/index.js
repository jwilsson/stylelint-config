module.exports = {
    extends: ['@jwilsson/stylelint-config', 'stylelint-config-standard-scss'],
    plugins: ['stylelint-scss'],
    rules: {
        'selector-type-no-unknown': [
            true,
            {
                ignoreTypes: ['/^%/'],
            },
        ],

        'scss/at-function-named-arguments': 'always',
        'scss/at-function-parentheses-space-before': 'always',
        'scss/at-mixin-argumentless-call-parentheses': 'always',
        'scss/at-mixin-named-arguments': 'always',
        'scss/at-mixin-parentheses-space-before': 'always',
        'scss/at-rule-conditional-no-parentheses': null,
        'scss/dollar-variable-empty-line-after': [
            'always',
            {
                except: 'before-dollar-variable',
            },
        ],
        'scss/dollar-variable-first-in-block': [
            true,
            {
                ignore: ['comments'],
            },
        ],
        'scss/function-no-unknown': true,
        'scss/no-duplicate-dollar-variables': true,
        'scss/selector-no-redundant-nesting-selector': true,
        'scss/selector-no-union-class-name': true,
    },
};
