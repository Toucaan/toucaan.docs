---
sidebar_position: 1
---

# Getting Started

The first step is to **create a new folder named `toucaan`** somewhere in your project using the following command: 

```bash title="cd ./somewhere/in/your/project/"
mkdir -p toucaan/{accessibility,app/{desktop,mobile,tablet,vehicle,television,watch},env/{helpers,tags},palette,router,typography,utils}

```

### Architecture

Here is how it will look: 

![Toucaan architecture](img/toucaan-folders.jpg)

The `mkdir` command above created all the folders necessary for you to start working with [intrinsic design](https://toucaan.com). These folders will contain **ALL THE STYLES needed for your application's multiple frontends**. 

### Quick discussion

Or skip to the next step. [Set up the css router](router.md).

Toucaan implements a simple architecture to cover the entire design space of the web-connected devices. There are [quite a few](https://bubblin.io/blog/the-new-landscape-of-the-web). 

Toucaan uses a [simple css router](router.md) that prioritizes and loads the correct stylesheet for the _class_ of device a user is on. This router separates your stylesheets according to the type (or class) of device being served, and helps organize your CSS in the correct subfolders.

Learn about the Intrinsic Design Space in the [next chapter](space.md).


Open `intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.