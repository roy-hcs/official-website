#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */
const { execSync } = require("child_process");

// Get the current branch name
let currentBranch;
try {
  currentBranch = execSync("git rev-parse --abbrev-ref HEAD", {
    encoding: "utf8",
  }).trim();
} catch {
  console.error("Error: Failed to get current branch name");
  process.exit(1);
}

// Skip validation for main/master/develop branches and hotfix branches
const skipBranches = ["main", "master", "develop", "HEAD"];
if (skipBranches.includes(currentBranch)) {
  console.log(
    `✅ Branch validation skipped for protected branch: ${currentBranch}`,
  );
  process.exit(0);
}

// Define the branch naming pattern
// Format: {type}/{task-id}/{description}
// Examples: feat/crm-001/init-user-login-page, fix/crm-002/resolve-auth-bug
const branchPattern =
  /^(feat|fix|style|refactor|docs|test|chore|perf|ci|build|revert)\/[a-z]+-\d+\/[a-z0-9-]+$/;

if (!branchPattern.test(currentBranch)) {
  console.error("❌ Branch name validation failed!");
  console.error("");
  console.error("Branch name must follow the pattern:");
  console.error("  {type}/{task-id}/{description}");
  console.error("");
  console.error(
    "Valid types: feat, fix, style, refactor, docs, test, chore, perf, ci, build, revert",
  );
  console.error("Task ID format: letters-numbers (e.g., crm-001, ui-123)");
  console.error(
    "Description: lowercase with hyphens (e.g., init-user-login-page)",
  );
  console.error("");
  console.error("Examples:");
  console.error("  ✅ feat/crm-001/init-user-login-page");
  console.error("  ✅ fix/crm-002/resolve-auth-bug");
  console.error("  ✅ style/ui-123/update-button-styles");
  console.error("  ✅ refactor/core-456/optimize-api-calls");
  console.error("");
  console.error(`❌ Your branch: ${currentBranch}`);
  console.error("");
  console.error("To rename your branch:");
  console.error(`  git branch -m ${currentBranch} {new-branch-name}`);
  process.exit(1);
}

console.log(`✅ Branch name validation passed: ${currentBranch}`);
process.exit(0);
