---
sidebar_position: 1
---

# Getting Started

**Create a new folder `toucaan`** somewhere in your project with the following command: 

```bash
mkdir -p toucaan/{accessibility,app/{desktop,mobile,tablet,vehicle,television,watch},env/{helpers,tags},palette,router,typography,utils}

```

### Architecture

Toucaan uses a simple architecture to cover the full design space of Intrinsic Design. Here is how it looks:

![Toucaan architecture](img/toucaan-folders.jpg)

The `mkdir` command above created all the folders necessary for you to start working with [Toucaan](https://toucaan.com). These folders contain **ALL THE STYLES needed for your application's multiple frontends**. 


Notice how Toucaan separates stylesheets according to the type of device(s) you wish to support. It uses a [simple css router](router.md) that prioritizes and loads the correct stylesheet for the device a user is on. 

Learn about the intrinsic design space in the [next chapter](space.md).


Open `intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.