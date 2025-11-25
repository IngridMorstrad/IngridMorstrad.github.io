# Unused Files and Directories

This document lists files and directories that appear to be unused or leftover from previous setups.

**Note:** Most unused files have been cleaned up. See git history for what was removed.

## Likely Unused Files

### Jekyll-related (site now uses Hugo)
- `static/Gemfile~` - Jekyll Gemfile (leftover from previous Jekyll setup)
- `docs/Gemfile~` - Jekyll Gemfile in generated output

### Apache Configuration (GitHub Pages doesn't use Apache)
- `.htaccess` - Apache server configuration file. GitHub Pages doesn't support .htaccess files, so this has no effect.

### Migration Scripts (no longer needed)
- `usefulScripts` - Contains sed commands for migrating from Jekyll to Hugo. Likely no longer needed after migration.

### Draft/Unpublished Content
- `unclearPosts/` - Directory containing unpublished draft posts. These are not referenced in the site.

### Generated Output (stale)
- `docs/` - **CONFIRMED UNUSED**: This directory contains old generated Hugo output. GitHub Actions (`.github/workflows/hugo.yml`) builds to `public/` and deploys from there (line 60: `path: ./public`). The `docs/` folder is stale generated content from a previous build configuration and is not used by the current deployment process. This can be safely removed or added to `.gitignore` if you want to keep it locally but not commit it.

## Recommendations

1. **Remove Jekyll files**: Delete `static/Gemfile~` and `docs/Gemfile~` if you're not planning to use Jekyll
2. **Remove .htaccess**: Delete `.htaccess` since GitHub Pages doesn't support it
3. **Archive or remove migration scripts**: Move `usefulScripts` to an archive or delete if migration is complete
4. **Review unclearPosts**: Decide whether to publish, move to `content/drafts/`, or delete
5. **Clean up docs/**: If `docs/` is not your publish directory, consider removing it or adding it to `.gitignore` if it's generated content

## Note

Before deleting anything, verify:
- Check if `docs/` is configured as the publish directory in `config.toml` (it's not currently)
- Verify GitHub Pages is configured to deploy from `public/` (it is, via GitHub Actions)
- Ensure no important content is in `unclearPosts/` before removing

