---
slug: using-git-submodule-as-package-manager
title: Using git submodule system as a package distribution manager.
authors: [marvin]
tags: [toucaan, git, submodules, setup]
---

Some of you reached out to understand how I was using the [git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) tooling as a package manager for some of my projects, a few of which are private repositories on GitHub. Well, here it is:

To start, I'm assuming that you have already installed Toucaan inside of your project (`MyProject`) with the following command:

```git
 $ cd MyProject/assets/stylesheets/.
 $ git submodule add https://github.com/Toucaan/toucaan
```

<!--truncate-->

This command allows the `master` distribution of Toucaan and its entire `git history` to sit within the namespace of your project. The installation also attaches a `.gitmodules` file at the root of the main project with the following contents:

```.gitmodules
[submodule "app/assets/stylesheets/toucaan"]
	path = app/assets/stylesheets/toucaan
	url = https://github.com/Toucaan/toucaan
```

You're required to check-in the `.gitmodules` file into your project. git uses the `.gitmodules` file to keep track of all the submodules or dependencies that your project will use.

### Using A Relative URL

By default, the `.gitmodules` file references its source repository (the master Toucaan repository on GitHub) using an absolute `https` url. 

I usually change this url to a relative one, to allow both `ssh` and `https` type of authentication, and also to point the installed submodule to a private repository within my organization first, like so:
```
[submodule "app/assets/stylesheets/toucaan"]
	path = app/assets/stylesheets/toucaan
	url = ../toucaan.git 👈🏻
```

Then I sync up all the submodule(s) and check-in the edited `.gitmodules` to my project. This step ensures that I have a full copy of all the submodules that my project at my organization privately and that the modules are synced as well with the main project at root. 

```git
$ git submodule sync
$ git submodule update --init --recursive --remote
```

### Setting Up A Private Repository

To do this I step inside the `toucaan` submodule that was checked out inside the `MyProject` repo and create a new branch called `MyProject` of Toucaan to keep all the future changes specific to `MyProject` in `toucaan` at one place. Then save the submodule with all the local code into the freshly created empty and private repository in my GitHub organization, like so:

```git
$ cd ./MyProject/assets/stylesheets/toucaan/
git checkout -b MyProject
git remote add MyProject https://github.com/my-organization/toucaan.git 
git push -u origin MyProject
```

Note that I have also labeled the `MyProject` branch as the new origin of my _instance of_ the Toucaan submodule. 

### Managing Remote Repositories

This is what the remote urls will look inside your instance of the Toucaan submodule upon installation:

```git
$ git remote -v
origin	https://github.com/Toucaan/toucaan (fetch)
origin	https://github.com/Toucaan/toucaan (push)
```

To change the origin to the private repo within your GitHub organization:

```git
$ git remote set-url --add --fetch https://github.com/my-organization/toucaan.git
$ git remote set-url origin https://github.com/my-organization/toucaan.git
```

This way we can leave the maintainer's master alone and not affect the upstream lifecycle of the FOSS repository. This is how the remote urls look inside my local submodule after:

```
$ git remote -v
MyProject https://github.com/my-organization/toucaan.git (fetch)
MyProject https://github.com/my-organization/toucaan.git (push)
origin	https://github.com/my-organization/toucaan (fetch)
origin	https://github.com/my-organization/toucaan.git (push)
master	https://github.com/Toucaan/toucaan (fetch)
master	https://github.com/Toucaan/toucaan (push)
```

Setting the origin this way ensures that all the downstream work done inside of the Toucaan submodule for the `MyProject` app gets saved privately with full history attached and it is also _not_ pushed out in the open or into the maintainer's repository accidentally (which would of course would get rejected).

### Recursive Git Config 

For recursive checking and syncing, I have set the following on my local git true just for submodules:

```git
$ git config submodule.recurse true
```

So this is how I use the `git submodule` system to manage and distribute the Toucaan package within my private projects.

### Main Advantages

1. Independence from complicated and unrelated package managers such as `npm`, `yarn`, `pip`, `bundler` or similar.
2. Access to full history of the submodule both from maintainer's side and your own.
3. Stronger control, better access, and improved maintainability of project internal dependencies. While the repository of the Toucaan submodule lives inside of the project `MyProject` it still has a separate git history and doesn't "pollute" the git log with the detailed check-ins of the changes made to the submodule. 

These are few advantages from the top of my head. Are you using `git submodules` for distribution any differently? Do share your strategy or tips!


