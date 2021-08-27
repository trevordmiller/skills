# Cargo

[doc.rust-lang.org/cargo/](https://doc.rust-lang.org/cargo/)

## Check for compilation errors

```shell
cargo check
```

## Test logic

```shell
cargo test
```

## Lint for common issues

```shell
cargo clippy [-- -D warnings]
```

- `-D warnings` to fail on warnings.

## Format source code

```shell
cargo fmt [-- --check]
```

- `--check` to fail on differences.

## Generate package documentation

```shell
cargo doc [--open]
```

- `--open` to preview.

## Compile an executable

```shell
cargo build [--release]
```

- Defaults to the host architecture.
- Defaults to development mode.
- `--release` for production mode.
- Development mode outputs to `./target/debug/some_executable`.
- Production mode outputs to `./target/release/some_executable`.

## Run an executable

```shell
cargo run [--release]
```

## Fix issues that can be fixed automatically

```shell
cargo fix [--edition]
```

- `--edition` to upgrade syntax to the `edition` in `Cargo.toml`.

## Scaffold a new project

```shell
cargo new some_project [--lib]
```

- Defaults to an executable project.
- `--lib` for a library project.

## Add a dependency

- `some_library = "x.y.z"` manually added in `[dependencies]` section of `Cargo.toml`.
- From `crates.io`.
- Updates `Cargo.lock` during the next compile.

## Upgrade a dependency to newer minor/major versions

- Manually change in `[dependencies]` section of `Cargo.toml` to a different version.
- Updates `Cargo.lock` during the next compile.

## Upgrade all dependencies to the latest patch versions

```shell
cargo update
```
