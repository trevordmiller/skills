# Git

## Create a feature branch

```shell
git checkout some-main-branch
git pull
git checkout -b some-branch
```

## Check the local repository state

```shell
git status
```

## Save changes in the working directory to the staging area

```shell
git add [-p] some-paths
```

- `-p` to break into pieces.

## Save changes in the staging area to commits

```shell
git commit -m "Some message"
```

## Save changes in the staging area temporarily

```shell
git stash
# Temporarily do something else
git stash list
git stash show
git stash apply
```

## Save changes in commits to the remote repository

```shell
git push
```

## Keep feature branches up to date with a target branch

```shell
git checkout some-branch
git fetch
git merge/rebase origin/some-target-branch
git push [-f]
```

- `rebase` requires `-f` because it rewrites the feature branch commits on top of the commits from the target branch.

## Show diff

```shell
git diff [--staged] [some-reference]
```

- Defaults to comparing with working directory.
- `--staged` for diff with staging area.
- `some-reference` for diff with a reference.

Example:

```shell
git diff
git diff --staged
git diff origin/some-main-branch
git diff some-branch..another-branch
git diff some-tag another-tag
```

## Undo changes in the working directory

```shell
git checkout some-paths
```

## Undo changes in the staging area back to the working directory

```shell
git reset HEAD some-paths
```

## Undo commits

```shell
git revert some-reference
```

## Find which author made changes to a file

```shell
git blame some-file
```

## Show commit history

```shell
git log [-#] [-p] [-S "some-search-pattern"] [--since="date"] [--until="date"] [--stat] [--oneline] [--graph] [-- some-paths]
```

- `-#` for number of results.
- `-p` for diffs.
- `-S` for specific matches.
- `--since="date"` for before a specific date.
- `--until="date"` for after a specific date.
- `date` for a date (like `yesterday`, `last week`, `30 minutes ago`, `01-01-2000`).
- `--stat` for insertions / deletions.
- `--oneline` for condensed formatting.
- `--graph` for a graphical representation.
- `-- some-paths` for specific paths.

## List tracked files

```shell
git ls-files
```

## Remove untracked files

```shell
git clean -dxf[n]
```

- `-n` for a preview.

## Find a search pattern across all tracked files in the repository

```shell
git grep some-search-pattern
```

## Find the commit that broke something

```shell
# Begin a bisect session
git bisect start

# Mark the current broken point
git bisect bad

# Mark when things were known to work
git bisect good some-reference

# Check for the broken change

# Mark if the current state is broken or not
git bisect bad/good

# Repeat checking / marking until the problem commit is found

# Cleanup
git bisect reset
```

## Tag the current repo state

```shell
git tag vX.Y.Z
git push --tags
```

## Setup an existing repository on local machine

```shell
git clone some-url
git config user.email "jane@doe.org"
git config user.name "Jane A. Doe"
```

## List configuration

```shell
git config [--global] -l
```
