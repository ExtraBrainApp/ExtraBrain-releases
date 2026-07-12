---
name: devbox-sync-pr
description: Sync local working-tree changes into the ExtraBrain devbox (a Lima VM) and open a GitHub PR from inside it. Use whenever asked to copy or sync files into the devbox, build or verify in the VM, or create a pull request from the devbox repo.
---

# Devbox sync and PR

Copy local changes into the ExtraBrain devbox (Lima VM `devbox`), build there, and open a GitHub PR from inside it.

The complete, authoritative runbook (exact commands, quoting-safe heredocs, and gotchas) is in `docs/devbox-sync-and-pr.md` at the repo root. Read it before running commands. Key points below.

## Setup facts
- Shell into the VM: `limactl shell devbox` (or `~/repos/devbox/devbox shell`); one-shot: `limactl shell devbox -- bash -lc '<cmd>'`.
- The host `~/repos` is mounted writable in the VM at `/home/<user>.linux/repos`, so the host repo is at `/home/<user>.linux/repos/ExtraBrain-releases`.
- The devbox clone is `~/work/ExtraBrain-releases` (VM home is `/home/<user>.guest`). Avoid the sibling `~/work/ExtraBrain`; paths are case-sensitive.
- Remotes: `origin` = GitHub (push here for PRs), `no-mistakes` = local mirror (never for PRs). Do not pipe `git remote -v` through `head` (it can hide `origin`).
- Node is installed via nvm and is not on the default PATH; `gh` is installed and authenticated over SSH.
- Required git author: `ExtraBrain <developers@extrabrain.app>`; never add an AI/agent co-author trailer.

## Procedure
1. **Sync.** On the host, run `git -C ~/repos/ExtraBrain-releases status --porcelain` to find changed files. First confirm the target clone is clean (`git -C ~/work/ExtraBrain-releases status --porcelain`). Then in the VM `cp` each changed file from `/home/<user>.linux/repos/ExtraBrain-releases` to `~/work/ExtraBrain-releases` (skip gitignored `dist/`, `node_modules/`, `.astro/`). Verify with `diff -q` / `diff -rq` (silence = identical).
2. **Build/verify in the VM.** Load nvm (`export NVM_DIR="$HOME/.nvm"; . "$NVM_DIR/nvm.sh"`), `cd` to the clone, `unset LD_LIBRARY_PATH`, then run `npm run check` and `npm run build`. Confirm routes with `grep -c "<loc>" dist/sitemap-0.xml`.
3. **PR.** Set the ExtraBrain git author, `git checkout -b <branch>` off `master`, `git add <specific paths>` (never `dist/`), commit with a message file (`git commit -F /tmp/commit-msg.txt`), `git push -u origin <branch>`, then `gh pr create --base master --head <branch> --title "..." --body-file /tmp/pr-body.md`.

## Gotchas
- `limactl shell` prints harmless `zsh:cd: no such file or directory: /Users/...` lines; use absolute paths.
- `npm: command not found` means nvm was not loaded.
- Write commit messages and PR bodies to `/tmp` files or heredocs, not long inline strings.

See `docs/devbox-sync-and-pr.md` for the full step-by-step with copy-paste commands.
