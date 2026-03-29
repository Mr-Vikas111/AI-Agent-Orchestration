#!/bin/bash

ISSUE_NUMBER=$1

if [ -z "$ISSUE_NUMBER" ]; then
  echo "Usage: ./scripts/fix-issue.sh <issue-number>"
  exit 1
fi

echo "🚀 Fixing issue #$ISSUE_NUMBER"

# Fetch issue
gh issue view $ISSUE_NUMBER

# Create branch
git checkout -b fix/issue-$ISSUE_NUMBER

# Generate AI suggestion
PROMPT=$(sed "s/{ISSUE_NUMBER}/$ISSUE_NUMBER/g" .github/prompts/fix-issue.txt)

gh copilot suggest "$PROMPT"