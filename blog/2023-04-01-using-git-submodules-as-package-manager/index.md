---
slug: using-git-submodule-as-package-distribution-manager
title: Using Git Submodules for Distribution.
authors: [marvin]
tags: [git, submodules, distribution]
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

I usually change this url to a relative one, like so:
```
[submodule "app/assets/stylesheets/toucaan"]
	path = app/assets/stylesheets/toucaan
	url = ../toucaan.git 👈🏻
```

This allows git authentication with both `ssh` and `https`, and it also helps me to point the installed submodule to a private repository within my organization.

Then I sync up all the submodule(s) that project uses and check-in the edited `.gitmodules` file into the main project. This step ensures that my organization has a full copy of all the submodules of the project privately and also syncs the module with the main repository. 

```git
$ git submodule sync
$ git submodule update --init --recursive --remote
```

### Branch Naming Convention

For the Toucaan submodule, I step inside the `toucaan` folder inside `MyProject` and create a new branch called `MyProject` of Toucaan to keep all the app-specific changes relevant to `MyProject` in that branch. 

For example, in our rails app [Bubblin](https://bubblin.io) all submodules have a branch named `bubblin` to push production level code into. This way, we can leave the `master` or `main` branch of the submodule up to the maintainers for updates. 

Basically, these steps:

```git
$ cd ./MyProject/assets/stylesheets/toucaan/
git checkout -b MyProject
git remote add MyProject https://github.com/my-organization/toucaan.git 
git push -u origin MyProject
```

Note that `MyProject` branch is also labeled as the new `origin` for my _instance of_ the Toucaan submodule. 

### Managing Remote Repositories

This is what the original remote urls will look like inside the Toucaan submodule upon installation:

```git
$ git remote -v
origin	https://github.com/Toucaan/toucaan (fetch)
origin	https://github.com/Toucaan/toucaan (push)
```

Set the origin to your own private repository within your organization:

```git
$ git remote set-url --add --fetch https://github.com/my-organization/toucaan.git
$ git remote set-url origin https://github.com/my-organization/toucaan.git
```

This will guarantee that all the app-specific downstream changes and additions to the Toucaan submodule will always be saved, and the upstream lifecycle of the FOSS repository remains unaffected. 

This is how the remote urls look inside my local submodule afterwards:

```
$ git remote -v
MyProject https://github.com/my-organization/toucaan.git (fetch)
MyProject https://github.com/my-organization/toucaan.git (push)
origin	https://github.com/my-organization/toucaan (fetch)
origin	https://github.com/my-organization/toucaan.git (push)
master	https://github.com/Toucaan/toucaan (fetch)
master	https://github.com/Toucaan/toucaan (push)
```

Developing and maintaining submodules this way offers great freedom in managing the direction of downstream work inside of any submodule, along with access to full history of mainstream FOSS community which may or may not always be aligned with your goals. It also helps keep the footprint of your overall project small and modular with the full power of `git` to jump to any place on the timeline created by your team or outsiders for each submodule separately.

### Recursive Git Config 

For recursive checking and syncing, I have set the following on my local git true just for submodules:

```git
$ git config submodule.recurse true
```

So this is how I use the `git submodule` system to manage and distribute the Toucaan package within my private projects.

### Main Advantages

1. Independence from complicated and unrelated package managers such as `npm`, `yarn`, `pip`, `bundler` or similar. Good ol' freedom!
2. Access to full history of the submodule both from maintainer's side and your own.
3. Stronger control, better access, and improved maintainability of project internal dependencies. While the repository of the Toucaan submodule lives inside of the project `MyProject` it still has a separate git history and doesn't "pollute" the git log with the detailed check-ins of the changes made to the submodule. 

These are few advantages from the top of my head. Are you using `git submodules` for distribution any differently? Do share your strategy or tips!


