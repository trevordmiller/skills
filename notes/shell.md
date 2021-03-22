# Shell

## View documentation

```shell
man some-thing
```

## Start a shell process

```shell
sh
```

## Use paths

```shell
some-path(s)
```

- `~` absolute for the user’s directory.
- `/` absolute for the root directory.
- `.` relative for the current directory.
- `..` relative for the directory above the current directory.
- `*` wildcard for directory contents.
- `-` shorthand for the last directory.

Example:

```shell
rm -rf ~/Downloads/*
```

## Pipe output from one command as input to another

```shell
some-command | another-command
```

## Redirect output from one command to a file

```shell
some-command > some-file
```

## Append to a file

```shell
some-command >> some-file
```

## Use file contents in a command

```shell
some-file < some-command
```

## Run commands if the previous succeeds

```shell
some-command && another-command
```

- If the previous command has an exit code of 0.

## Run commands if the previous fails

```shell
some-command || another-command
```

- If the previous command has an exit code other than 0.

## Run commands in sequence whether they succeed or fail

```shell
some-command; another-command
```

## Define variables

```shell
some_local_variable=some_value
```

## Evaluate variables

```shell
$some_variable
```

Example:

```shell
echo $some_variable
```

## Share variables globally

```shell
export SOME_GLOBAL_VARIABLE=some_value
```

- Uppercase by convention to avoid clashing with local variables.

## View all global variables

```shell
export
```

- `PATH` includes what programs are available globally.

## Use global variables

```shell
$SOME_GLOBAL_VARIABLE
```

Example:

```shell
echo $PATH
```

## Exit the current process with a successful exit code

```shell
exit
```

## Exit the current process with a failed exit code

```shell
exit 1
```

## Check the last exit code

```shell
echo $?
```

## Run an executable

```shell
[./]some-path<enter>
```

## Use search patterns (regular expressions)

```text
# Match the starting position
^

# Match the ending position
$

# Match any single character
.

# Match the preceeding element 0 or more times
*
```

- Can escape special characters with `\` to use literal characters.

Example:

```
# Find instances of echo commands that use double quotes
^echo ".*"$
```

## Print the working directory

```shell
pwd
```

## Display running processes

```shell
ps [-e]
```

- `-e` for all including non-owned.

## Stop a process

```shell
kill [-15/-9] some-pid
```

- `-15` sends a SIGTERM signal to try to gracefully kill a process.
- `-9` sends a SIGKILL signal to force a process to quit with potential data loss or corruption.

## Stop the current process

```shell
<ctrl c>
```

- Sends a SIGINT signal to interrupt the current process.

## List directory contents

```shell
ls [-al] [some-directory]
```

- `-a` for all including hidden.
- `-l` for permissions (`r` is read, `w` is write, `x` is execute).

## Change directory

```shell
cd some-path
```

## Make directory

```shell
mkdir some-directory
```

## Create file

```shell
touch some-file
```

## Remove file / directory

```shell
rm [-rf] some-path
```

- `-r` is recursive for directories.
- `-f` is for forcing without prompting for confirmation.

## Move / rename file / directory

```shell
mv some-path another-path
```

## Copy file / directory

```shell
cp [-R] some-path another-path
```

- `-R` is recursive for directories.

## Use text

```shell
echo "Some text"
```

Example:

```shell
echo "Some text to append to file" >> some-file
```

## Find a search pattern

```shell
grep [-iRl] some-search-pattern [some-path]
```

- `-i` to ignore casing.
- `-R` for recursive.
- `-l` for names of files with matches.

Example:

```shell
ps -ef | grep systemd
```

## Substitute a search pattern

```shell
sed [-i] [""] 's/some-search-pattern/some-replacement/g' [some-path]
```

- `-i` to overwrite file(s) in place.
- `""` needed as a suffix in some versions.

## Transform lines

```shell
awk [-F "some-delimiter"] '{action}' [some-file]
```

- `-F` to use a delimiter other than spaces.
- `print` for printing.
- `$#` for parts of line by delimiter.
- `$0` for entire line.

Example:

```shell
awk -F "," '{print $1, $3}' log.csv
```

## Find files / directories

```shell
find some-path [-type d] -name some-search-pattern
```

- `-type d` for directories.

Example:

```shell
find . -name '*.txt'
```

## Pass output of a command as arguments to another command

```shell
some-command | xargs another-command
```

Example:

```shell
find . -name '*.txt' | xargs grep -l copyright
```

## See where an executable is installed

```shell
command -v some-executable
```

## Compare the contents of two files / directories

```shell
diff [-r] some-path another-path
```

- `-r` for recursive.

## Use file contents

```shell
cat [some-file]
```

## Use the beginning of content

```shell
head [-n#] [some-file]
```

- `-n` for number of lines.

Example:

```shell
ls | head -n1
```

## Use the end of content

```shell
tail [-n#f] [some-file]
```

- `-n` for number of lines.
- `-f` for follow real-time.

Example:

```shell
tail -f some-log-file
```

## Page through content

```shell
more [some-file]
```

## Print system information

```shell
uname [-a]
```

- `-a` for all.

## Show who is logged in

```shell
who
```

## Track running time

```shell
time some-command
```

## Use current date

```shell
date
```

## Use command output

```shell
$(some-command)
```

## Do something for each item in a list

```shell
for some-item in some-list; do
  # Commands
done
```

Examples:

```shell
for dir in */; do echo "$dir"; done
```

## Change ownership of a file / directory

```shell
chown some-user some-path
```

## Change permissions of a file / directory

```shell
chmod owner/group/world-permissions some-path
```

- `owner` is myself.
- `group` is my group.
- `world` is everyone else.
- `r` is read.
- `w` is write.
- `x` is execute.
- `+` adds to existing permissions.
- `1` = 1 (execute).
- `2` = 2 (write).
- `3` = 2+1 (write/execute).
- `4` = 4 (read).
- `5` = 4+1 (read/execute).
- `6` = 4+2 (read/write).
- `7` = 4+2+1 (read/write/execute).

Example:

```shell
chmod +x some-script
chmod 755 somefile.txt
```

## Store commands in an executable file (script)

```shell
#!/bin/sh
# Commands
```

Example:

```shell
#!/bin/sh

if ! command -v git > /dev/null; then
  echo "Error: git is required"
  exit 1
fi

if [ -z "$1" ]; then
  echo "Error: version argument is required"
  exit 1
fi

version=$1
git checkout some-main-branch
git pull
git tag v"$version"
git push --tags
```

## Update files that are derived from other files

`./Makefile`

```makefile
some_target: some_prerequisite
	some_command
```

```shell
make
```

Example:

```makefile
some_executable: some_source_code.c
	$(CC) some_source_code.c -o some_executable -Wall -Wextra -pedantic -std=c99
```
