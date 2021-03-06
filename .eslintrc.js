module.exports = {
  "extends": require.resolve("gts"),
  "rules": {
    "@typescript-eslint/no-empty-interface": 1,
    "node/no-unpublished-import": [
      "error",
      {
        "allowModules": [
          "fastify-plugin",
          "app-root-path",
          "fastify-static",
          "aws-sdk"
        ]
      }
    ],
    "node/no-unpublished-require": [
      "error",
      {
        "allowModules": ["fastify-redis-mock"]
      }
    ],
    "node/no-extraneous-import": [
      "error",
      {
        "allowModules": ["fastify-plugin"]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
    "complexity": ["error", 10],
    "max-len": [
      "error",
      { "code": 100, "ignoreStrings": true, "ignorePattern": "^import .*" }
    ],
    "max-depth": "error",
    "max-lines": ["error", 500],
    "max-lines-per-function": ["error", 110],
    "max-nested-callbacks": "error",
    "max-params": ["warn", 6],
    "max-statements": ["error", 20]
  }
}