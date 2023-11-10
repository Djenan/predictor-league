# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## v4.1.0
### Changed
- SSW-6101: Updated watch banner links on match pages

### Added
- Updated HolaSpark comments for z-index

## v4.0.0
### Changed
- VIDEO-401: Ooyala Decomm, removed references to `sdc-article-video` and replaced with `sdc-site-video`.
### Removed 
- VIDEO-401: Component functionality from `play-video.js` as now all videos are embedded via iframes.

## v3.10.4
### Fixed
- INC1790824: renamed live background colour to avoid confusion

## v3.10.3
### Fixed
- VIDEO-503: Update ads to pause on Brightcove ima3 ads when closed on mobile

## v3.10.2
### Fixed
- Use short name on data-short-name attribute
- load champions league image from https

## v3.10.1
### Fixed
- VIDEO-476: undeclared variable within sdc-site-match-header__content, updated to $z-index-top as it is set within project-base

## v3.10.0
### Changed
- VIDEO-476: Changed floating player styling on match pages, so z-index of floating videos sits above the secondary page menu

## v3.9.0
### Added
- sdc-site-video support on match header video

### Fixed
- Cleared timeout on successful detection of the video component 

## v3.8.4
### Added
- sdc-site-video support & fixed preview.js

## v3.8.3
### Fixed
- Attendance and venue resize issue

## v3.8.2
### Changed
- Attendance and venue styling

## v3.8.1
### Fixed
- Hidden the “shine” for ie11 so it doesnt block interaction with link
- Removed legacy objects from package.json file

## v3.8.0
### Changed
- Added lazy loading and intrinsic size attributes for chrome

## v3.7.1
### Fixed
- Fixing release tagging.

## v3.7.0
### Added
- Full time translation for DE.

## v3.6.3
### Changed
- Sky Sports channels and links to buy now show during all match statuses
- Now TV link now hides if the channel is red button

## v3.6.2
### Fixed
- SVG channel logo now displaying again in ie11

## v3.6.1
### Fixed
- Pre-match scores set to disaply:none again

## v3.6.0
### Changed
- "Att" is now read as "attendance" on screen readers
- "og" is now read as "own goal" on screen readers
- Match stauses rebuilt to be read properly by screen readers
- Red card now uses svg with descriptive text content for screen readers
- Using a long status for Live state to give context and correct screenreader pronounciation

## v3.5.0
### Changed
- Added long form match status names to the template and translations json (defaults back to short form if no long form is present)

## v3.4.0
### Changed
- Betting can now be disabled

## v3.3.0
### Changed
- Use team long names for the match header for SEO purposes

## v3.2.0
### Changed
- Fixed issue with minutes on screen readers

## v3.1.0
### Changed
- Add `arial-label` on match datetime for screen readers

## v3.0.2
### Changed
- Fix width issue with scores block

## v3.0.1
### Changed
- Fixed deploy

## v3.0.0
### Changed
- Complete redesign
- Remove DE hardcoded path from tvlogo, use full path from data
- Move tv logo and links below main body of match header
- Visually hide first text element with fixture (still visible for SEO)

### Added
- Optional betting row
- Optional link around tv logo
- New themes

## v2.7.0
### Changed
- Add ability to embed highlight video through an `<iframe>` in template
- Additional logic in `play-video.js` to get player object from the `<iframe>` window
- New state in `expand-video.js` to handle videos that require authentication

## v2.6.0
### Changed
- `expand-video.js` now adds a loading spinner and prevents expand whilst the video is loading

## v2.5.0
### Changed
- `play-video.js` now checks if the player object is contained inside `window` as part of an array

### Fixed
- Remove `display:none` from video component so it can be rendered by component-loader
- Check for app bridge in `play-video.js`

## v2.4.0
### Changed
- Removed hardcoded background Champions league header image url

## v2.3.1
### Fixed
- Fixed scope of caption hiding

## v2.3.0
### Fixed
- Fixed all the CSS and JavaScript lint errors and warnings.

## v2.2.5
### Fixed
- included 30 in match status to show livestream button

## v2.2.2
### Fixed
- updated styles on tv details text

## v2.2.1
### Fixed
- Added catch block to play video function

## v2.2.0
### Added
- Gitlab CI pipelines integration to run unit tests
- `play-video.js` to check for player object and play video when expanded
- `play-video.js` unit tests
- `Watch match highlights` translation for play video link

### Changed
- livestream button now on screen for all in play events
- app deep linking directs to sky sports channel
- modal detects whether user is on mobile
- Removed expand animation on video
- Included `imgsrc` in helpers
- Init `sdc-article-video` components in `preview.js`

### Fixed
- Added guard to check `window.sdc` before adding modal button

## v2.1.1
### Changed
- Checks livestream toggle button exists before adding event listener

## v2.1.0
### Changed
- Adds support for champions league match header
- added modal content with user role based content

## v2.0.6
### Fixed
- Remove goal scorers from synopsis when the goal is deleted

## v2.0.4
### Changed
- Update translation 'vs' for DE

## v2.0.3
### Changed
- Fix horizontal scrollbars in large mobile view

## v2.0.2
### Changed
- Fix adding and spacing around Live and HT labels

## v2.0.1
### Changed
- Size channel logos using height rather than width to avoid reflows on load

## v2.0.0
### Changed
- The football badge image url is now dependent on `@root.imageServerUrl` being set in the root of the data

## v1.0.0
### Changed
- Accessibility improvements
- Bump up to v1
- Add toolbelt compatibility

## v0.7.4
### Changed
- The size of team badge

## v0.7.3
### Changed
- de-blackjackification
