# Test Plan

## Automated Verification
- [ ] Run `npm run build` to ensure static export succeeds.
- [ ] Run `npm run lint` to check for code quality issues.

## Manual Verification
- [ ] Verify `dist/404.html` exists.
- [ ] Verify `dist/index.html` contains the Analytics scripts (search for "clarity" and "gtag").
- [ ] Verify `dist/index.html` contains the ThemeProvider script (search for "next-themes").
