module.exports = {
	root: true,
	extends: ['eslint:recommended'],
	env: { browser: true, node: true, es6: true },
	parserOptions: {
		ecmaVersion: 8,
		sourceType: 'module',
		impliedStrict: true,
	},
	rules: {
		'no-console': 'off',
	},
};
