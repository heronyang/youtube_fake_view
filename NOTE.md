# Youtube Fake View Script

**Network Security - Carnegie Mellon University**
**Team: Buckstar**

*All code and documents are for academic purpose only.*

## Preface: How Youtube View Counts

Refer: [Quora-How does YouTube calculate its views?](http://www.quora.com/How-does-YouTube-calculate-its-views)

- Youtube has distributed log servers, the view count record is stored in one centralized server.
- When one Youtube view count goes over 300, the views will be verified (usually, it get stucked for few hours or 1 day). More, when the number 300 was decided by the designers, the programmer made the elementary careless mistake of using the age old ViewCount &lt;= 300 instead of the ViewCount &lt; 300 in their logic
- If a video is viewed in its entirety by someone who clicked on it, it is counted as one view.
- YouTube also considers views from the same IP in breaks of 6 to 8 hours. So one person viewing the same video repeatedly would only generate 3 to 5 views a day, after views cross 300.

## Analysis Youtube Player Mechanism

### 1. HTML

In every Youtube page, it loads blank HTML for the player at first.

```html
<div id="player-api" class="player-width player-height off-screen-target player-api" tabIndex="-1">
</div>
```

### 2. Youtube ytplayer Javascript Code

Then, the Javascript code will load the Youtube player (Adobe Flash Player).

```html
<script>
var ytplayer = ytplayer || {};
ytplayer.config = {"min_version":"8.0.0",
                   "url":"https:\/\/s.ytimg.com\/yts\/swfbin\/player-vflenMUmo\/watch_as3.swf"
...
</script>
```

### 3. Loads Adobe Flash (SWF Player)

Here is how it looks like after the video is loaded. (The &lt;embed&gt; element is supported in all major browsers.)

```html
<embed name="movie_player" id="movie_player" width="100%" height="100%" tabindex="0" type="application/x-shockwave-flash" src="https://s.ytimg.com/yts/swfbin/player-vflenMUmo/watch_as3.swf" allowscriptaccess="always" bgcolor="#000000" allowfullscreen="true" ...>
```

## Script

In ordering to generate Youtube views, I've tried several approaches including using [PhantomJS](http://phantomjs.org/) and [SeleniumHQ](http://docs.seleniumhq.org/). And, PhamtonJS won't work for increasing Youtube views since it's not supporting Flash Player; however, SeleniumHQ works nicely and is tested on Ubuntu Server.

### 1. PhamtonJS

Under *phantomjs/* folder, execute

```
./run.sh
```

to run. And here are the details about the files:

#### phantomjs/fake_click_no_js.js:

opens a Youtube page without executing its javascript.

#### phantomjs/fake_click.js:

opens a Youtube page then executes its javascript. **However, by looking to its screenshot, we can learn that phamtonjs is not supporting Adobe Flash Player.** Refer to: [phantomjs doesn't support flash player](https://github.com/ariya/phantomjs/issues/12206).

### 2. Selenium HQ

Under *seleniumhq/* folder, execute:

```
./run.sh
```

opens Youtube page using Firefox driver. (**X11 is required**)

To start browser headlessly, we should apply [Xvfb(virtual framebuffer X server for X Version 11)](http://www.x.org/archive/X11R7.6/doc/man/man1/Xvfb.1.xhtml) as background process.

Under *seleniumhq/* folder, execute:
```
make run_headless_server
```

## Future Work

- Pick one platform or botnet as deploye platform, and write custom script for it (better would be shell code).
- Test different frequencies/patterns and their response on Youtube views.
- Record traffic packets and see if they can be reproduced.

## Code

All the code mentioned in this document is on this [GitHub Repo](https://github.com/heronyang/click_fraud).
