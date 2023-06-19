---
slug: using-git-submodule-as-package-manager
title: Using git submodule tooling as package manager.
authors: [marvin]
tags: [toucaan, git, submodules, setup]
---

Some of you reached out to understand how I'm using the [git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) tooling as package manager in my projects, some of which are private repositories on GitHub. Well, here it is:

To start, I'm assuming that you have already installed Toucaan inside of your project with the following command:

```git
 $ git submodule add https://github.com/Toucaan/toucaan
```

<!--truncate-->

This command allows the `master` distribution of Toucaan and its entire `git history` to sit within the namespace of your project. The installation also attaches a `.gitmodules` file at the root with the following contents:

```.gitmodules
[submodule "app/assets/stylesheets/toucaan"]
	path = app/assets/stylesheets/toucaan
	url = https://github.com/Toucaan/toucaan
```

### Using A Relative URL
By default, a `.gitmodules` file would reference its parent (the master Toucaan repository on GitHub) using an absolute `https` url. I change this url to a relative one, to allow both `ssh` and `https` type of authentication first, and also to point to a parent (private) repository within my organization, like so:

```
[submodule "app/assets/stylesheets/toucaan"]
	path = app/assets/stylesheets/toucaan
	url = ../toucaan.git
```

Then sync up the submodule(s) and commit the relative `.gitmodules` to your git. Update all modules from the now correct remote URL using the following command in the repository root. 

```git
git submodule sync

git submodule update --init --recursive --remote
```
### Setting Up A Private Repository

At this stage, I step inside the `toucaan` submodule and create a new branch called `myproject` to keep all the future changes specific to `myproject` at one place. Save the submodule with my changes into a fresh empty repository within my GitHub organization, like so:

```git
git checkout -b myproject
git remote add myproject https://github.com/my-organization/toucaan.git 
git push -u origin myproject
```

Note, I also labeled the `myproject` branch as the new origin of my _instance of_ Toucaan, the submodule. 

### Managing The Remote Repositories

This is what the remote urls will look inside your instance of the Toucaan submodule upon installation:

```git
git remote -v
origin	https://github.com/Toucaan/toucaan (fetch)
origin	https://github.com/Toucaan/toucaan (push)
```

I point the origin to the private repo within my GitHub organization next, and leave the master alone for the maintainers to serve their distribution from:

```git
git remote set-url --add --fetch https://github.com/my-organization/toucaan.git
git remote set-url origin https://github.com/my-organization/toucaan.git
```

This is how my remote urls look after:

```
git remote -v
bubblin	https://github.com/my-organization/toucaan.git (fetch)
bubblin	https://github.com/my-organization/toucaan.git (push)
origin	https://github.com/my-organization/toucaan (fetch)
origin	https://github.com/my-organization/toucaan.git (push)
master	https://github.com/Toucaan/toucaan (fetch)
master	https://github.com/Toucaan/toucaan (push)
```

Setting the origin this way ensures that all the downstream work done inside of the Toucaan submodule for MyProject gets saved privately with full history and is also _not_ accidentally pushed out in the open into the maintainer's repository (which would of course would get rejected eventually).

### Recursive Git Config 

I have also set up recursive checking on my local git for submodules:

```git
$ git config submodule.recurse true
```

So this is how I use the `git submodule` system to manage the Toucaan package within my private projects.

### Main Advantages

1. Independence from complicated and unrelated package managers such as `npm`, `yarn`, `pip`, `bundler` or similar.
2. Access to full history of the submodule both from maintainer's side and your own.
3. Clear separation, granular control, and better maintainability of project dependencies. For example, the css repository Toucaan of the project `myproject` lives outside of the main project repository and can be used by designers who don't need access the main repo. 

These are few advantages from the top of my head. Are you using `git submodules` for distribution differently? Do share your strategy or tips!


