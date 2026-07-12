# Devbox: sync local changes and open PRs

This runbook explains how to copy local working-tree changes into the ExtraBrain **devbox** (a Lima VM), build and verify them there, and open a GitHub pull request from inside the VM.
It is written to be usable by any coding agent (Claude Code, Codex, and others) or by a human.

## The setup (facts about this machine)

- The devbox is a Lima VM named `devbox` (Ubuntu 24.04).
  - Open a shell with `limactl shell devbox`, or use the wrapper `~/repos/devbox/devbox shell`.
  - Run a single command with `~/repos/devbox/devbox exec "<cmd>"` or `limactl shell devbox -- bash -lc '<cmd>'`.
  - Check status with `limactl list` (look for `devbox` with status `Running`).
- The host `~/repos` directory is mounted **writable** inside the VM (virtiofs) at `/home/<user>.linux/repos`.
  So the host checkout of this repo is visible live in the VM at `/home/<user>.linux/repos/ExtraBrain-releases`.
  Rediscover the mount if unsure with `mount | grep repos`.
- The VM home directory is `/home/<user>.guest`.
  Note that the mount uses a `.linux` suffix while the home uses a `.guest` suffix; they are different paths.
- The devbox working clone lives at `~/work/ExtraBrain-releases` (that is `/home/<user>.guest/work/ExtraBrain-releases`).
  Warning: `~/work` also contains a separate `ExtraBrain` checkout, so do not confuse the two. Paths are case-sensitive.
- Remotes in the devbox clone:
  - `origin` points to `git@github.com:ExtraBrainApp/ExtraBrain-releases.git` (real GitHub; push here to open PRs).
  - `no-mistakes` points to a local bare mirror; do not push there for PRs.
  - Run the full `git remote -v` and do not pipe it through `head`, because `origin` can appear below `no-mistakes`.
- The `gh` CLI is installed and authenticated in the VM over SSH, so `gh pr create` works.
- Node is installed via nvm and is not on the non-interactive shell PATH, so it must be loaded first (see the build step).
- The required git author for this repo is `ExtraBrain <developers@extrabrain.app>` (see the top of `AGENTS.md`).

For the examples below, `<user>` is `asokolov`, so the mount is `/home/asokolov.linux/repos` and the clone is `/home/asokolov.guest/work/ExtraBrain-releases`.

## A. Sync host changes into the devbox clone

1. On the host, list the changed files.

   ```bash
   git -C ~/repos/ExtraBrain-releases status --porcelain
   ```

   Do not sync `dist/`, `node_modules/`, or `.astro/`; they are gitignored build output and the VM rebuilds them.

2. Confirm the target clone is the right repo and has a clean working tree, so you do not clobber uncommitted work there.

   ```bash
   limactl shell devbox -- bash -lc '
     TGT=$HOME/work/ExtraBrain-releases
     git -C "$TGT" remote -v          # origin should be ExtraBrainApp/ExtraBrain-releases
     git -C "$TGT" status --porcelain # expect empty before you copy
   '
   ```

3. Copy each changed source file from the mounted host path to the devbox clone, preserving paths.

   ```bash
   limactl shell devbox -- bash -lc '
     SRC=/home/asokolov.linux/repos/ExtraBrain-releases
     TGT=$HOME/work/ExtraBrain-releases
     # modified files
     cp "$SRC/src/data/seo-pages.ts" "$TGT/src/data/seo-pages.ts"
     # new directories
     mkdir -p "$TGT/src/pages/tools" && cp "$SRC/src/pages/tools/"* "$TGT/src/pages/tools/"
   '
   ```

4. Verify the copy is byte-identical (silence means identical).

   ```bash
   limactl shell devbox -- bash -lc '
     SRC=/home/asokolov.linux/repos/ExtraBrain-releases
     TGT=$HOME/work/ExtraBrain-releases
     diff -q  "$SRC/src/data/seo-pages.ts" "$TGT/src/data/seo-pages.ts"
     diff -rq "$SRC/src/pages/tools"       "$TGT/src/pages/tools"
   '
   ```

## B. Build and verify inside the devbox

Node needs nvm loaded, and this VM also requires `unset LD_LIBRARY_PATH` before npm.

```bash
limactl shell devbox -- bash -lc '
  export NVM_DIR="$HOME/.nvm"; [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
  cd "$HOME/work/ExtraBrain-releases"
  unset LD_LIBRARY_PATH
  npm run check   # Astro type and content check
  npm run build   # outputs to dist/ (gitignored)
'
```

After building, verify new routes landed in the sitemap.

```bash
limactl shell devbox -- bash -lc '
  cd "$HOME/work/ExtraBrain-releases"
  grep -c "<loc>" dist/sitemap-0.xml
'
```

## C. Commit, push, and open the PR (from inside the devbox)

```bash
limactl shell devbox -- bash -lc '
  export NVM_DIR="$HOME/.nvm"; [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
  cd "$HOME/work/ExtraBrain-releases"

  # Required author for this repo
  git config user.name  "ExtraBrain"
  git config user.email "developers@extrabrain.app"

  git checkout -b seo/my-change        # branch off master; never commit on master

  # Stage specific paths (never dist/); use paths reported by git status.
  git add src/data/seo-pages.ts src/pages/tools

  # Put the commit message in a file to avoid shell quoting issues.
  cat > /tmp/commit-msg.txt <<"MSG"
Short summary line

- bullet describing the change
MSG
  git commit -F /tmp/commit-msg.txt

  git push -u origin seo/my-change     # push to GitHub (origin), NOT no-mistakes

  # Put the PR body in a file too.
  cat > /tmp/pr-body.md <<"BODY"
## Summary
What changed and why.

## Verification
- npm run build passes; new routes present in the sitemap.
BODY
  gh pr create --base master --head seo/my-change --title "My change" --body-file /tmp/pr-body.md
'
```

### Conventions

- The commit author must be `ExtraBrain <developers@extrabrain.app>`.
- Do not add an AI or agent co-author trailer to commits.
- Branch off `master`; never commit directly on `master`.
- Branch names follow the repo style, for example `seo/...`, `fix/...`, or `exta-<ticket>/...`.
- Push to `origin` (GitHub). The `no-mistakes` remote is a local mirror and is not used for PRs.

## Gotchas seen in practice

- `limactl shell` prints harmless `zsh:cd: no such file or directory: /Users/...` lines, because the login shell tries to cd to the host working directory.
  Always use absolute paths in commands.
- `npm: command not found` means nvm was not loaded.
  Source it as shown above, or run `export PATH="$(ls -d $HOME/.nvm/versions/node/*/bin | tail -1):$PATH"`.
- Truncating `git remote -v` (for example with `head`) can hide `origin` behind `no-mistakes`.
- Paths are case-sensitive: use `~/work/ExtraBrain-releases`, not `Extrabrain-releases`, and avoid the sibling `~/work/ExtraBrain`.
- Write commit messages and PR bodies to `/tmp` files (or heredocs) instead of long inline `-m` or `--body` strings, to avoid quoting problems.
- Do not sync `dist/`; it is gitignored build output that the VM regenerates with `npm run build`.
