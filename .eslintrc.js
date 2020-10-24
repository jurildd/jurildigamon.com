module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	extends: ['plugin:vue/recommended', 'eslint:recommended'],
	plugins: [],
	// add your custom rules here
	rules: {
		'vue/component-name-in-template-casing': ['error', 'PascalCase'],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'max-len': ['error', {'code': 120}],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
		],
		'no-unused-vars': ['error', {'args': 'none'}],
        'vue/script-indent': ['error', 4, {
            'baseIndent': 1
        }],
        'vue/html-indent': ['error', 4, {
            'attribute': 1,
            'closeBracket': 0,
            'alignAttributesVertically': true,
            'ignores': []
        }],
		'vue/max-attributes-per-line': ['error', {
            'singleline': 2,
            'multiline': {
                'max': 1,
                'allowFirstLine': false
            }
        }],
        'vue/multiline-html-element-content-newline': ['error', {
            'ignoreWhenEmpty': true,
            'ignores': ['pre', 'textarea', 'NuxtLink', 'a'],
            'allowEmptyLines': false
        }],
        'vue/html-closing-bracket-spacing': ['error'],
        'vue/html-closing-bracket-newline': ['error', {
            'singleline': 'never',
            'multiline': 'always'
        }],
        'vue/require-default-prop': 'off',
        'vue/html-self-closing': 'off'
	},
	globals: {
		$nuxt: true,
	},
};
