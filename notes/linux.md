# Linux

## Manage packages with Advanced Package Tool

```shell
# Refresh package index
apt-get update

# Search for a package
apt-cache search "some search"

# View details about a package
apt-cache show some-package

# Install packages
apt-get install some-package

# Upgrade packages
apt-get upgrade some-package

# Uninstall packages
apt-get remove some-package

# List installed packages
apt list --installed
```

## Manage packages with Snap

```shell
# Refresh package index
snap refresh

# Search for a package
snap find "some search"

# View details about a package
snap info some-package

# Install packages
snap install some-package

# Upgrade packages
snap refresh some-package

# Uninstall packages
snap remove some-package

# List installed packages
snap list
```

## Navigate the filesystem

```shell
# Root
/

# User files
/home

# User specific things (like dotfiles)
/home/someusername

# Essential command binaries (executable programs)
/bin

# Static files of the boot loader
/boot

# Device files
/dev

# Host-specific system configuration
/etc

# Overridden DNS resolving with hostnames mapped to IP addresses
/etc/hosts

# Essential shared libraries and kernel modules
/lib

# Mount point for removable media
/media

# Mount point for mounting a filesystem temporarily
/mnt

# Add-on application software packages
/opt

# Data relevant to running processes
/run

# Essential system binaries
/sbin

# Data for services provided by this system
/srv

# Temporary files
/tmp

# Secondary hierarchy
/usr

# Most user commands
/usr/bin

# Libraries
/usr/lib

# Local hierarchy (empty after main installation)
/usr/local

# Non-vital system binaries
/usr/sbin

# Architecture-independent data
/usr/share

# Source code (optional)
/usr/src

# Variable data
/var
```
