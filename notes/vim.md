# Vi Improved

**[Official documentation](https://www.vim.org/docs.php)**

## Start a vim process

```shell
cd some-project
vim .
```

## Compose commands

```text
# Search pattern
/some-search-pattern
n

# Change
c

# Delete
d

# Yank
y

# Put
p

# Inside
i

# Around
a

# Parenthesis
(

# Braces
{

# Brackets
[

# Double quotes
"

# Single quotes
‘

# Backticks
`

# Tag
<

# Word
w

# Start of line
^

# End of line
$

# File top
gg

# File bottom
G

# Format
=

# Clipboard register
"+
```

Example:

```text
# Search for ‘some ‘thing
/some thing

# Delete up to ‘some ‘thing
d/some thing

# Delete word
dw

# Change to end of line
c$

# Change inside braces
ci{

# Yank around brackets
ya[

# Clipboard register put
"+p

# Format to end of file
=G
```

## Return to normal mode

```text
<ctrl [>
```

## Explore files / directories

```text
:vs/e/E some-path
```

Example:

```text
:vs .
:vs src/
:vs src/**/*some-file<tab>
:e src/**/*some-file<tab>
:E
```

## Go to window

```text
<ctrl w h/j/k/l>
```

## Write

```text
:w
```

## Quit

```text
:q
```

## Run a shell command

```text
:! some-command
```

## Undo

```text
u
```

## Redo

```text
<ctrl r>
```

## Repeat

```text
.
```

## Record a macro

```text
q{register}
{commands}
q
```

## Run a macro

```text
@{register}
```

## Populate quickfix with a search pattern

```text
:vim /some-search-pattern/[g] some-files
```

- `g` for all matches in a file.

Examples:

```text
:vim /TODO/g `git ls-files`
:vim /TODO/g src/**/*.txt
```

## Run commands on quickfix

```text
:c[f]do some-command
```

- `f` for only once per file..

Example:

```text
:cfdo normal @q | :w
```

## Show quickfix

```text
:cw
```

## Navigate quickfix

```text
:cn/p
```

## Run commands on ranges

```text
:some-range some-command
```

Example:

```text
:15,25 normal @q
```

## Run commands on open windows

```text
:windo some-command
```

## Substitute a search pattern

```text
:some-range s/some-search-pattern/some-replacement/g
```

Example:

```text
:%s/some thing/another thing/gc
```

## Complete word

```text
<ctrl n>
<ctrl n/p>
```

## Complete line

```text
<ctrl x><ctrl l>
<ctrl n/p>
```

## Page up/down

```text
<ctrl f/b>
```

## Go to file under cursor

```text
gf
```

## Go in/out

```text
<ctrl i/o>
```

## Toggle syntax highlighting

```text
:syntax on/off
```

## Compare the contents of windows

```text
# Activate on current window
:diffthis

# Deactivate on current window
:diffoff
```

Example:

```text
:windo diffthis
:windo diffoff
```

## Re-run commands

```text
:some-search
<up/down>
<enter>
```
