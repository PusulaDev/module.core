module.exports = {
    "root": true,
    "parserOptions": {
        "tsconfigRootDir": __dirname,
        "project": ["./tsconfig.json"]
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "rules": {
        "no-console": ["error", { "allow": ["warn", "error", "info"] }],
        "prettier/prettier": [
            "error",
            {
                "endOfLine": "auto",
                "tabWidth": 4
            }
        ]
    }
};