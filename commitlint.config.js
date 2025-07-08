module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Type must be one of [build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test]
    "type-enum": [
      2,
      "always",
      [
        "feat", // A new feature
        "fix", // A bug fix
        "docs", // Documentation only changes
        "style", // Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
        "refactor", // A code change that neither fixes a bug nor adds a feature
        "perf", // A code change that improves performance
        "test", // Adding missing tests or correcting existing tests
        "build", // Changes that affect the build system or external dependencies
        "ci", // Changes to our CI configuration files and scripts
        "chore", // Other changes that don't modify src or test files
        "revert", // Reverts a previous commit
      ],
    ],
    // Subject line must be between 1 and 100 characters
    "subject-max-length": [2, "always", 100],
    "subject-min-length": [2, "always", 1],
    // Subject must not end with a period
    "subject-full-stop": [2, "never", "."],
    // Subject must be lowercase
    "subject-case": [2, "always", "lower-case"],
    // Body must have a blank line between header and body
    "body-leading-blank": [1, "always"],
    // Footer must have a blank line between body and footer
    "footer-leading-blank": [1, "always"],
    // Header must not be longer than 100 characters
    "header-max-length": [2, "always", 100],
  },
};
