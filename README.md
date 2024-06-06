# Markdown Formatter [![JS Tests](https://github.com/droberts-ctrlo/markdown-formatter/actions/workflows/tests.yml/badge.svg)](https://github.com/droberts-ctrlo/markdown-formatter/actions/workflows/tests.yml)

This is a simple markdown formatter that will format your template strings to a standard format.

## Usage

```typescript
import {Markdown} from '@davetheitguy/markdown-formatter';

const markdown = Markdown`#Heading!

This is a template string that will be formatted to a standard markdown format.`;
```

## Output

```markdown
# Heading!

This is a template string that will be formatted to a standard Markdown format.
```
