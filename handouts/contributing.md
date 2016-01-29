### Learning Goals

We will learn how to create and maintain a `CONTRIBUTING.md` for an open source project.

### Target Audience
Project, event and community leads.

### Delivery Format
In person workshop or online.

### Level
Beginner.

### Time to Complete:
30 min.

### What you'll need to start: 
Paper, pen (in person); Collaborative document like [Etherpad](public.etherpad-mozilla.org/), Google Docs, etc. (online). Download [Mou](http://25.io/mou/) or a markdown viewer so that you can test your file before posting it online.

![Mou Markdown View](http://i.imgur.com/byGmNwM.png)

*Fig 1: side-by-side markdown and rendered contributor file for Atom.io, as viewed in Mou*

### Before using this resource you should be familiar with:

* General structure of a Github repository
* Creating files on Github (editing in browser or on command line)
* Markdown syntax, and (optional) a "markdown editor" like [Mou](http://25.io/mou/) or [Dilliger](http://dillinger.io/) will help you toggle between Markdown sytax and its rendered product

### For information on those topics, see:

* [Contributor Covenant:  A Code of Conduct for Open Source Projects](http://contributor-covenant.org/)
* [Suggested project structure outline for Github](https://github.com/CODESIGN2/Project-Structure)
* [Github's guidelines for Markdown syntax](https://guides.github.com/features/mastering-markdown/)
* [Github's Guidlines for setting up CONTRIBUTING.md](https://help.github.com/articles/setting-guidelines-for-repository-contributors/)
* [Working Open Guide: Mechanics of Contributing](http://mozillascience.github.io/leadership-training/03.1-mechanics.html)

### Intro to material: 
A `CONTRIBUTING.md` file, in your open source repository or site, provides potential project contributors with a short guide to how they can help with your project or study group. It is convention to capitalize the word "contributing" as the file title, and to save it as a resource in markdown (hence the extension `.md`). 

This file is for:

* *Project owners* - creators and maintainers of the file
* *Project contributors* - users of the file who want to know items they're welcome to tackle, and tact they need in navigating the project/respecting those involved with the project
* *Project consumers* - users who want to build off the project to create their own project

`CONTRIBUTING.md` should be in your root directory, think of it as a anchor for your project, around which you will build community and keep things tidy. It complements other "all-caps" resources like your `README.md` (which introduces your community to the project, its purpose and basic installation requirements), or your `LICENSE.md` (which provides information on the resuse and permissions associated with the code).

`CONTRIBUTING.md` should be one of your first priorities in putting an open source/science project online to solicit contributions. If you have yet to define possible avenues of contribution, consider creating a `CONTRIBUTING.md` file with a "check back later, we will populate this soon" message, and the contact information of the project lead for follow-up.

![Atom.io](http://i.imgur.com/Xp8TMvT.png)

*Fig 3: where the Atom.io CONTRIBUTING.md file lives in Github*

### Steps to complete:

This exercise can be done individually or in a group. Try to build a draft of the `CONTRIBUTING.md` file with the core contributors to your project, to help others feel a shared sense of responsibility, and create the best possible guide for encouraging new contributors. It's sometimes best to practice building a markdown file in an offline program like [Mou](http://25.io/mou/) or an online one like [Dilliger](http://dillinger.io/), before you post it online.

##### STEP 1: Reflect/Plan

Start by reflecting on what to include, and what to invite (in terms of contributions) in your `CONTRIBUTING.md`.

![Atom Contributing file](http://i.imgur.com/wASaP5P.png)

*Fig 4: contents of the the Atom.io CONTRIBUTING.md file in Github*

Consider the following bulleted items:

* **Welcome contributors to the project** - admit that you are eager for contributions and so happy they found themselves here. 

> :+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

* **Table of Contents** - if your `CONTRIBUTING.md` file is long, you might consider including a table of contents with links to different headings in your document. In github, each heading is given a URL by default, so you can link to that URL in the appropriate section of the Table of Contents for each heading. Do this in Markdown by wrapping the heading in `[ ]` and following with a parenthetical that includes the URL or header after `#`, like `[Reporting Bugs](#reporting-bugs)`.

So this in Markdown:

```
[Styleguides](#styleguides)
  * [Git Commit Messages](#git-commit-messages)
  * [CoffeeScript Styleguide](#coffeescript-styleguide)
  * [Specs Styleguide](#specs-styleguide)
  * [Documentation Styleguide](#documentation-styleguide)

```

...would look like this when rendered:

[Styleguides](#styleguides)
  * [Git Commit Messages](#git-commit-messages)
  * [CoffeeScript Styleguide](#coffeescript-styleguide)
  * [Specs Styleguide](#specs-styleguide)
  * [Documentation Styleguide](#documentation-styleguide)

* **Short link to important resources** -  
 * **docs**: handbook/roadmap (you'll learn more about this in the roadmapping session, you can read the outline for that [here](http://mozillascience.github.io/leadership-training/02.2-roadmap.html) and take a look at the [Study Group Handbook](http://mozillascience.github.io/studyGroupHandbook/) as an example)
 * **bugs**: issue tracker/bug report tool
 * **comms**: forum link, developer list, IRC/email 
* **Testing** - how to test the project, where the tests are located in your directories.
* **Environment details** - how to set up your development environment - this might exist in the `README.md` depending on the project. If so, then include a link.
* **How to submit changes** - (Pull Request protocol etcet), you might also include what response they'll get back from the team on submission, or any caveats about the speed of response.
* **How to report a bug** - Bugs are problems in code, in the functionality of an application or in its UI design; you can submit them through "bug trackers" and most projects invite you to do so, so that they may "debug" with more efficiency and the input of a contributor. Take a look at [Atom's example here](https://github.com/atom/atom/blob/master/CONTRIBUTING.md#reporting-bugs) for how to teach people to report bugs to your project
 * **Templates** - in this section of your file, you might also want to link to a bug report "template" like this one [here](https://gist.github.com/auremoser/72803ba969d0e61ff070) which contributors can copy and add context to; this will keep your bugs tidy and relevant.
 * **First bugs for Contributors** - Sometimes it is helpful to provide some guidelines for the types of bugs contributors should tackle (should they want to fix the bugs and not just submit them), see [Atom's example section here](https://github.com/atom/atom/blob/master/CONTRIBUTING.md#styleguides)
* **How to request an "enhancement"** - enhancements are features that you might like to suggest to a project, but aren't necessarily bugs/problems with the existing code; there is a "label" for enhancments in Github's Issues (where you report bugs), so you can tag issues as "enhancement," and thereby allow contributors to prioritize issues/bugs reported to the project; see [Atom's example section here](https://github.com/atom/atom/blob/master/CONTRIBUTING.md#suggesting-enhancements)
* **Style Guide/Coding conventions** - see [Atom's example here](https://github.com/atom/atom/blob/master/CONTRIBUTING.md#styleguides)
* **Code of Conduct** - (this is linked here, or part of `CONTRIBUTING.md`), you might put it at the start of your `CONTRIBUTING.md` file, as Atom did [here](https://github.com/atom/atom/blob/master/CONTRIBUTING.md#code-of-conduct) just to set the tone for contributions.
 * You might extend this section to link to your `LICENSE.md`, or any details for project consumers about how they might use this open source project for their own work, or how they can build on-top of it according to the permissions and license details you have established
* **Recognition model** - provide a pre-emptive "thank you" for contributing, and list any recognition contributors might receive for participating in your project (if applicable)
* **Who is involved?** - [Open Government's CONTRIBUTING.md](https://github.com/opengovernment/opengovernment/blob/master/CONTRIBUTING.md) has as a name/author, and it might be nice to have a more personal/friendly individual to attact to a project and reach out to with questions. You might list the core contributors and their preferred methods of contact here, or link to a [humans.txt](http://humanstxt.org/) file in your root directory (same place as your `CONTRIBUTING.md` file), which lets people know who they are working. Here is an example of a [humans.txt file](http://www.stereosemantics.com/humans.txt).
* **Where can I ask for help?** - a nice extension to the previous section, with links to good comms channels for anyone with questions.

##### STEP 2: Create a file named `CONTRIBUTING.md`

* Start by making the structure of your project clean and welcoming, with folder titles that make sense, if you have several projects, consider adopting a template "project structure" that is consistent across projects, take a look at this [example](https://github.com/CODESIGN2/Project-Structure).
* Author a `CONTRIBUTING.md` file that fits your projects, check out the models below in "Followup Resources", and inorporate the appropriate "To Include" items above.

#### STEP 3: Make supporting materials

* Make a LICENSE - make a `LICENSE.md` file that you can reference in your `CONTRIBUTING.md` file, use the following links to generate and copy the appropriate text: https://creativecommons.org/choose/ + http://choosealicense.com/
* Make a README - make a `README.md` with a brief description of your project and some setup/installation details that you might link to in your `CONTRIBUTING.md` file.
* Create a system for rewarding people
 * (optional) Include a [humans.txt](http://humanstxt.org/) file - to give accolades to contributors (store in your root directory just like your `CONTRIBUTING.md`, on deployment, it will be available via your website www.yourwebsite.com/humans.txt) 
 * (optional) Get a [DOI for a github project](https://guides.github.com/activities/citable-code/), and make [Contributor Badges](https://mozillascience.org/projects/contributorship-badges) as a way to recognize contributors for their particular contributions
 * Hat-tip or thank people in your `README.md`, especially if you forked the repo; thank people when they submit issues or requests; be polite.

### Glossary Terms:

* **bugs** : bugs are problems in a project, particularly one in code, they are either problems where a program/project does not perform according to intention, or situations where the users' expectations are not met in a program/project. You can read a more granular definition in [Code Simplicity](http://www.codesimplicity.com/post/what-is-a-bug/) or in [Wikipedia](https://en.wikipedia.org/wiki/Software_bug).
* **bug report tool** : bug reporting tools are applications for processing and organizing bugs submitted by product contributors or users, [Bugzilla](https://bugzilla.mozilla.org/) is Mozilla's bug tracking tool, and [Github has it's own issue system](https://github.com/features) built into every repository, in the "issues" tab of your repo. See [Wikipedia](https://en.wikipedia.org/wiki/Bug_tracking_system) for more details.

### Follow-up resources and materials: 

* [Github's Guidlines for setting up CONTRIBUTING.md](https://help.github.com/articles/setting-guidelines-for-repository-contributors/)
* [Working Open Guide: Mechanics of Contributing](http://mozillascience.github.io/leadership-training/03.1-mechanics.html)
* [SlideWinder Contributor Site](http://www.slidewinder.io/docs/)
* [Atom Editor's CONTRIBUTING.md](https://github.com/atom/atom/blob/master/CONTRIBUTING.md)
* [Open Government's CONTRIBUTING.md](https://github.com/opengovernment/opengovernment/blob/master/CONTRIBUTING.md)

### Any credits or attribution:

Hat-tip to the Atom and Open Government developers for their fabulous examples, the creators of Humans.txt, Github and Github's documentation, Mou, Dilliger, Bugzilla, Slidewinder, and the Working Open Guide (linked above).