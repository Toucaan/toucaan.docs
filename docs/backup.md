---
sidebar_position: 12
---

# Getting Started

The first step is to **create a new folder** named `toucaan` somewhere in your project using the following command: 

```bash title="Setup:"
cd ./somewhere/in/your/project/

mkdir -p toucaan/{accessibility,app/{desktop,mobile,tablet,vehicle,television,watch},env/{helpers,tags},palette,router,typography,utils}

```

The `mkdir` command above will create all the folders necessary for you to start working with [intrinsic design](https://toucaan.com). These folders will carry ALL THE STYLES necessary for your application's **multiple frontends**. 


Head over to the next step and set up [The CSS Router](router.md)?

### The Architecture

Here is what the folder structure looks like: 

![Toucaan architecture](img/toucaan-folders.jpg)

### Quick discussion

Toucaan implements a simple architecture to cover the _entire design space_ of [the new web](https://bubblin.io/blog/the-new-landscape-of-the-web). There are quite a few devices connected to the web today and it is about not just mobile responsiveness. 

Learn about the Intrinsic Design Space in the [next chapter](space.md).

Toucaan uses a [simple css router](router.md) to prioritize and load the correct stylesheet for the _class_ of device the user is on. This router will separate your stylesheets according to the types (or classes) of devices being served, and help organize all your application CSS in the appropriate subfolders (see the screenshot above).



> Open `intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.