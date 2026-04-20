
The build error says no "build" command is configured. The fix is to add a `lovable.toml` at the project root with the build command for this Next.js project.

## Plan

Create `lovable.toml` at the project root:

```toml
[run]
build = "next build"
```

This tells Lovable's production build runner how to build this Next.js app, resolving the "no command found for task 'build'" error.

The user's message ("Pull latest from GitHub main") appears to be a button label rather than a separate request — GitHub sync is automatic and bidirectional, so no manual pull action is needed. The actionable item is fixing the build error.
