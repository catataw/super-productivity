## [1.999.1001](https://github.com/johannesjo/super-productivity/compare/v1.999.1000...v1.999.1001) (2019-01-27)



## [1.999.1000](https://github.com/johannesjo/super-productivity/compare/v0.1.19...v1.999.1000) (2019-01-27)


### Bug Fixes

* potential error in global link list, when dropping html elements ([4b80285](https://github.com/johannesjo/super-productivity/commit/4b80285))
* typo ([d450efb](https://github.com/johannesjo/super-productivity/commit/d450efb))


### Features

* add move cursor to handle ([00c9771](https://github.com/johannesjo/super-productivity/commit/00c9771))
* improve enlarge image animation for jira assets ([a0203ef](https://github.com/johannesjo/super-productivity/commit/a0203ef))
* prepare disabling drag and drop [#119](https://github.com/johannesjo/super-productivity/issues/119) ([5711044](https://github.com/johannesjo/super-productivity/commit/5711044))



## [1.10.56](https://github.com/johannesjo/super-productivity/compare/v1.10.55...v1.10.56) (2018-09-27)



## [1.10.55](https://github.com/johannesjo/super-productivity/compare/v1.10.54...v1.10.55) (2018-09-26)


### Bug Fixes

* animation for enlarge image ([59351a7](https://github.com/johannesjo/super-productivity/commit/59351a7))


### Features

* also enable preview for jira images ([08c479f](https://github.com/johannesjo/super-productivity/commit/08c479f))



## [1.10.54](https://github.com/johannesjo/super-productivity/compare/v1.10.53...v1.10.54) (2018-09-25)


### Bug Fixes

* **idleTime:** not playing nicely with pomodoro button ([24b5745](https://github.com/johannesjo/super-productivity/commit/24b5745))
* **Jira:** checking for updates on sub tasks not working correctly ([15d9ca8](https://github.com/johannesjo/super-productivity/commit/15d9ca8))
* **tasks:** time tracking sometimes not working as intended ([982d5c3](https://github.com/johannesjo/super-productivity/commit/982d5c3))
* **tasks:** tracking for sub tasks throwing errors ([71c677f](https://github.com/johannesjo/super-productivity/commit/71c677f))


### Features

* add logging for not a real jira issue (shouldn't happen) ([63c9f6f](https://github.com/johannesjo/super-productivity/commit/63c9f6f))
* improve google drive sync dialogs ([bb6e8a4](https://github.com/johannesjo/super-productivity/commit/bb6e8a4))
* improve google drive sync dialogs ([75b84f9](https://github.com/johannesjo/super-productivity/commit/75b84f9))
* show components for jira tasks [#113](https://github.com/johannesjo/super-productivity/issues/113) ([f9affe7](https://github.com/johannesjo/super-productivity/commit/f9affe7))
* **dbus:** only show errors once ([968694e](https://github.com/johannesjo/super-productivity/commit/968694e))
* **idle:** create new tasks from idle time dialog ([43f244c](https://github.com/johannesjo/super-productivity/commit/43f244c))
* **idleTime:** refactor idle time handling to service [#118](https://github.com/johannesjo/super-productivity/issues/118) ([e775c59](https://github.com/johannesjo/super-productivity/commit/e775c59))



## [1.10.53](https://github.com/johannesjo/super-productivity/compare/v1.10.52...v1.10.53) (2018-08-31)


### Bug Fixes

* google drive load from never working ([81cdf3f](https://github.com/johannesjo/super-productivity/commit/81cdf3f))
* pomodoro timer not being precise [#107](https://github.com/johannesjo/super-productivity/issues/107) ([71c7bf1](https://github.com/johannesjo/super-productivity/commit/71c7bf1))


### Features

* add tick sound [#112](https://github.com/johannesjo/super-productivity/issues/112) ([5309de6](https://github.com/johannesjo/super-productivity/commit/5309de6))
* fix syncing behaviour before quit ([fd68c77](https://github.com/johannesjo/super-productivity/commit/fd68c77))
* if task with same original id exists in backlog use it instead of creating a new instance ([5084626](https://github.com/johannesjo/super-productivity/commit/5084626))
* improve google drive sync dialogs ([ef4c9ff](https://github.com/johannesjo/super-productivity/commit/ef4c9ff))
* improve performance ([9a41144](https://github.com/johannesjo/super-productivity/commit/9a41144))
* make auto checking issues for updates optional ([29c0aa3](https://github.com/johannesjo/super-productivity/commit/29c0aa3))
* prevent additional jira requests after a failed one ([4fb3030](https://github.com/johannesjo/super-productivity/commit/4fb3030))
* remove trailing slash for jira url [#108](https://github.com/johannesjo/super-productivity/issues/108) ([8c37204](https://github.com/johannesjo/super-productivity/commit/8c37204))



## [1.10.52](https://github.com/johannesjo/super-productivity/compare/v1.10.51...v1.10.52) (2018-08-18)


### Bug Fixes

* add missing aria label ([b21fa21](https://github.com/johannesjo/super-productivity/commit/b21fa21))
* chrome throwing errors on focus sometimes ([d2f1755](https://github.com/johannesjo/super-productivity/commit/d2f1755))


### Features

* improve wording for google drive sync dialog ([8fdcfc6](https://github.com/johannesjo/super-productivity/commit/8fdcfc6))



## [1.10.51](https://github.com/johannesjo/super-productivity/compare/v1.10.50...v1.10.51) (2018-08-17)


### Bug Fixes

* show success animation only after syncing to google if enabled ([7616f00](https://github.com/johannesjo/super-productivity/commit/7616f00))
* welcome screen showing up per project basis ([4ecfcf4](https://github.com/johannesjo/super-productivity/commit/4ecfcf4))


### Features

* make minimize to tray optional [#106](https://github.com/johannesjo/super-productivity/issues/106) ([43f9968](https://github.com/johannesjo/super-productivity/commit/43f9968))



## [1.10.50](https://github.com/johannesjo/super-productivity/compare/v1.10.49...v1.10.50) (2018-07-19)


### Bug Fixes

* check if dbus is ready before emiting pomodoro status ([f3f4885](https://github.com/johannesjo/super-productivity/commit/f3f4885))
* play icons [#101](https://github.com/johannesjo/super-productivity/issues/101) ([ef75ee8](https://github.com/johannesjo/super-productivity/commit/ef75ee8))
* potential issue with global link list ([a7075b0](https://github.com/johannesjo/super-productivity/commit/a7075b0))


### Features

* improve google drive syncing experience by changing when data is saved when lastActive is set ([eeba0e9](https://github.com/johannesjo/super-productivity/commit/eeba0e9))



## [1.10.49](https://github.com/johannesjo/super-productivity/compare/v1.10.48...v1.10.49) (2018-07-18)


### Bug Fixes

* remove unused modules ([c1b41d6](https://github.com/johannesjo/super-productivity/commit/c1b41d6))



## [1.10.48](https://github.com/johannesjo/super-productivity/compare/v1.10.47...v1.10.48) (2018-07-18)


### Bug Fixes

* checking for assigned user when setting is disabled [#99](https://github.com/johannesjo/super-productivity/issues/99) ([5d0e05f](https://github.com/johannesjo/super-productivity/commit/5d0e05f))
* prevent double links in global link list ([eb1ebb6](https://github.com/johannesjo/super-productivity/commit/eb1ebb6))


### Features

* add better logging to local sync ([e8bcec8](https://github.com/johannesjo/super-productivity/commit/e8bcec8))
* allow choosing sync file and loading data afterwards ([c2b3966](https://github.com/johannesjo/super-productivity/commit/c2b3966))
* also check for equal dates when syncing ([423eb4e](https://github.com/johannesjo/super-productivity/commit/423eb4e))
* handle special state when manual continue is activated and the dialog was clicked away [#100](https://github.com/johannesjo/super-productivity/issues/100) ([cebf58c](https://github.com/johannesjo/super-productivity/commit/cebf58c))
* log into google via refresh token if present ([405c2e1](https://github.com/johannesjo/super-productivity/commit/405c2e1))
* save local backup before importing data from google drive ([8facbd4](https://github.com/johannesjo/super-productivity/commit/8facbd4))
* update message for google drive sync ([42c26d8](https://github.com/johannesjo/super-productivity/commit/42c26d8))



## [1.10.47](https://github.com/johannesjo/super-productivity/compare/v1.10.46...v1.10.47) (2018-07-07)



## [1.10.46](https://github.com/johannesjo/super-productivity/compare/v1.10.45...v1.10.46) (2018-07-07)


### Features

* add last action decorator to better handle data syncing ([4ebfd11](https://github.com/johannesjo/super-productivity/commit/4ebfd11))
* add max duration to success animation ([b2a0d38](https://github.com/johannesjo/super-productivity/commit/b2a0d38))
* improve remote update checks ([4153880](https://github.com/johannesjo/super-productivity/commit/4153880))
* provide minimum and default value for idle time and take a break [#96](https://github.com/johannesjo/super-productivity/issues/96) ([aa8ec69](https://github.com/johannesjo/super-productivity/commit/aa8ec69))



## [1.10.45](https://github.com/johannesjo/super-productivity/compare/v1.10.44...v1.10.45) (2018-06-24)


### Features

* add issue link also to local attachments [#89](https://github.com/johannesjo/super-productivity/issues/89) ([b18ec6e](https://github.com/johannesjo/super-productivity/commit/b18ec6e))
* focus next closest task when using shortcuts for move from or to backlog ([dcabe2e](https://github.com/johannesjo/super-productivity/commit/dcabe2e))



## [1.10.44](https://github.com/johannesjo/super-productivity/compare/v1.10.43...v1.10.44) (2018-06-23)


### Bug Fixes

* done log acting weirdly on project change [#93](https://github.com/johannesjo/super-productivity/issues/93) ([801a8f4](https://github.com/johannesjo/super-productivity/commit/801a8f4))
* doneBacklog acting weirdly on project change(2) [#93](https://github.com/johannesjo/super-productivity/issues/93) ([caf235d](https://github.com/johannesjo/super-productivity/commit/caf235d))


### Features

* add xprintidle to linux dependencies [#92](https://github.com/johannesjo/super-productivity/issues/92) ([c4f5674](https://github.com/johannesjo/super-productivity/commit/c4f5674))
* make assignee to check configurable [#94](https://github.com/johannesjo/super-productivity/issues/94) ([973f4d6](https://github.com/johannesjo/super-productivity/commit/973f4d6))



## [1.10.43](https://github.com/johannesjo/super-productivity/compare/v1.10.42...v1.10.43) (2018-06-22)


### Bug Fixes

* app storage for mobile safari [#87](https://github.com/johannesjo/super-productivity/issues/87) ([b8b4666](https://github.com/johannesjo/super-productivity/commit/b8b4666))
* contenteditable for mobile safari [#87](https://github.com/johannesjo/super-productivity/issues/87) ([5f341f3](https://github.com/johannesjo/super-productivity/commit/5f341f3))
* remove notifications for mobile safari [#87](https://github.com/johannesjo/super-productivity/issues/87) ([80e5b30](https://github.com/johannesjo/super-productivity/commit/80e5b30))
* wrong check for notifications ([46b3209](https://github.com/johannesjo/super-productivity/commit/46b3209))
* wrong check for notifications ([b329e78](https://github.com/johannesjo/super-productivity/commit/b329e78))



## [1.10.42](https://github.com/johannesjo/super-productivity/compare/v1.10.41...v1.10.42) (2018-06-06)



## [1.10.41](https://github.com/johannesjo/super-productivity/compare/v1.10.40...v1.10.41) (2018-06-06)



## [1.10.40](https://github.com/johannesjo/super-productivity/compare/v1.10.38...v1.10.40) (2018-06-03)


### Bug Fixes

* sub task list collapse animation ([1293364](https://github.com/johannesjo/super-productivity/commit/1293364))
* **tasks:** next task selection ([78d3466](https://github.com/johannesjo/super-productivity/commit/78d3466))


### Features

* round minutes in respect to seconds for duration filter ([338cab6](https://github.com/johannesjo/super-productivity/commit/338cab6))
* show total time left on daily planner rather than total estimate [#86](https://github.com/johannesjo/super-productivity/issues/86) ([bac0329](https://github.com/johannesjo/super-productivity/commit/bac0329))
* update button text ([addb37a](https://github.com/johannesjo/super-productivity/commit/addb37a))



## [1.10.38](https://github.com/johannesjo/super-productivity/compare/v1.10.37...v1.10.38) (2018-05-15)



## [1.10.37](https://github.com/johannesjo/super-productivity/compare/v1.10.36...v1.10.37) (2018-05-15)


### Features

* improve jira set status ([a3037dc](https://github.com/johannesjo/super-productivity/commit/a3037dc))
* improve task list enter animation ([49a7e14](https://github.com/johannesjo/super-productivity/commit/49a7e14))
* minor adjustment for mobile ([12b98de](https://github.com/johannesjo/super-productivity/commit/12b98de))
* prolong entering done by 1s ([e9f115c](https://github.com/johannesjo/super-productivity/commit/e9f115c))
* remove notification for task created to today ([bd11ac9](https://github.com/johannesjo/super-productivity/commit/bd11ac9))
* slightly improve task enter animation ([642d9a7](https://github.com/johannesjo/super-productivity/commit/642d9a7))
* smoothen up crawl in crawl out ani ([6de8bd4](https://github.com/johannesjo/super-productivity/commit/6de8bd4))
* use theme color for edit on click border ([d031655](https://github.com/johannesjo/super-productivity/commit/d031655))



## [1.10.36](https://github.com/johannesjo/super-productivity/compare/v1.10.35...v1.10.36) (2018-05-11)


### Bug Fixes

*  add global add task bar for work view button ([a3b151b](https://github.com/johannesjo/super-productivity/commit/a3b151b))
* global add task bar for mobile ([7fa461a](https://github.com/johannesjo/super-productivity/commit/7fa461a))
* remove inject for add task bar global because other wise the build doesn't work WEIRD ([c9d3e45](https://github.com/johannesjo/super-productivity/commit/c9d3e45))


### Features

* add nice staggering animation for task list ([3b7e659](https://github.com/johannesjo/super-productivity/commit/3b7e659))
* add update confirm for web version ([77d1bde](https://github.com/johannesjo/super-productivity/commit/77d1bde))
* improve performance by disabling task list animations on route change ([8e3ae71](https://github.com/johannesjo/super-productivity/commit/8e3ae71))
* speed up task deletion animation ([0f33af8](https://github.com/johannesjo/super-productivity/commit/0f33af8))



## [1.10.35](https://github.com/johannesjo/super-productivity/compare/v1.10.34...v1.10.35) (2018-05-10)


### Bug Fixes

* make new task title optional for add task bar component ([cdbe0b6](https://github.com/johannesjo/super-productivity/commit/cdbe0b6))



## [1.10.34](https://github.com/johannesjo/super-productivity/compare/v1.10.33...v1.10.34) (2018-05-10)


### Bug Fixes

* unit tests ([b58d0c4](https://github.com/johannesjo/super-productivity/commit/b58d0c4))



## [1.10.33](https://github.com/johannesjo/super-productivity/compare/v1.10.32...v1.10.33) (2018-05-10)


### Bug Fixes

* unit tests ([2754a08](https://github.com/johannesjo/super-productivity/commit/2754a08))



## [1.10.32](https://github.com/johannesjo/super-productivity/compare/v1.10.31...v1.10.32) (2018-05-10)


### Bug Fixes

* global link list not showing initially sometimes ([d94a56f](https://github.com/johannesjo/super-productivity/commit/d94a56f))
* minor styling issue ([d1469a3](https://github.com/johannesjo/super-productivity/commit/d1469a3))


### Features

* add add-task-bar as standalone component ([7912b74](https://github.com/johannesjo/super-productivity/commit/7912b74))
* add global add task bar ([3b4c49e](https://github.com/johannesjo/super-productivity/commit/3b4c49e))
* add missing ani-expand-collapse ([b346974](https://github.com/johannesjo/super-productivity/commit/b346974))
* adjust main header and global link lists z-index ([8a5dae6](https://github.com/johannesjo/super-productivity/commit/8a5dae6))
* adjust timings for expand collapse ([1688471](https://github.com/johannesjo/super-productivity/commit/1688471))
* blend in rather than sliding ([5282c5e](https://github.com/johannesjo/super-productivity/commit/5282c5e))
* improve performance by replacing md-button with just a regular button for the task list where possible ([5d3433d](https://github.com/johannesjo/super-productivity/commit/5d3433d))
* improve styling for global add task bar ([4a20402](https://github.com/johannesjo/super-productivity/commit/4a20402))
* remove margin top for first list inside inline markdown ([d3e63fc](https://github.com/johannesjo/super-productivity/commit/d3e63fc))
* remove padding bottom for global link list ([e694c18](https://github.com/johannesjo/super-productivity/commit/e694c18))
* remove ripple effect from navigation buttons ([355e611](https://github.com/johannesjo/super-productivity/commit/355e611))
* reset task title when opening global task bar ([7f8c1b7](https://github.com/johannesjo/super-productivity/commit/7f8c1b7))
* slide down bookmark bar instead of expanding ([3b26c63](https://github.com/johannesjo/super-productivity/commit/3b26c63))



## [1.10.31](https://github.com/johannesjo/super-productivity/compare/v1.10.30...v1.10.31) (2018-05-08)


### Features

* make pomodoro button less prominent ([1250cb2](https://github.com/johannesjo/super-productivity/commit/1250cb2))
* move global links closer together ([d0f8108](https://github.com/johannesjo/super-productivity/commit/d0f8108))



## [1.10.30](https://github.com/johannesjo/super-productivity/compare/v1.10.29...v1.10.30) (2018-05-08)


### Bug Fixes

* blurry fonts for edit on click [#81](https://github.com/johannesjo/super-productivity/issues/81) ([a0a42e6](https://github.com/johannesjo/super-productivity/commit/a0a42e6))
* icon positions for icon buttons on task list ([7197acd](https://github.com/johannesjo/super-productivity/commit/7197acd))
* make idle time calculation more exact ([9950ee5](https://github.com/johannesjo/super-productivity/commit/9950ee5))
* pomodoro button being beneath bookmark bar ([7cd4a31](https://github.com/johannesjo/super-productivity/commit/7cd4a31))
* remove icon center fix ([730cb20](https://github.com/johannesjo/super-productivity/commit/730cb20))
* slide up down longer item duration ([f1e977c](https://github.com/johannesjo/super-productivity/commit/f1e977c))


### Features

* adjust animation for edit on click ([0c3da1a](https://github.com/johannesjo/super-productivity/commit/0c3da1a))
* adjust animation timings for collapsible and related ([d0388ee](https://github.com/johannesjo/super-productivity/commit/d0388ee))
* adjust bookmark icon transition ([65c6a55](https://github.com/johannesjo/super-productivity/commit/65c6a55))
* adjust font family ([2dccaec](https://github.com/johannesjo/super-productivity/commit/2dccaec))
* adjust more transition timings for page transitions ([5710152](https://github.com/johannesjo/super-productivity/commit/5710152))
* adjust more transition timings to material guidelines ([44335cb](https://github.com/johannesjo/super-productivity/commit/44335cb))
* adjust multiple transitions to material guidelines ([23c9314](https://github.com/johannesjo/super-productivity/commit/23c9314))
* adjust task box shadow for dark theme ([f020d84](https://github.com/johannesjo/super-productivity/commit/f020d84))
* improve slide-up-down.ani again ([843b46a](https://github.com/johannesjo/super-productivity/commit/843b46a))
* load roboto font from google fonts ([5512029](https://github.com/johannesjo/super-productivity/commit/5512029))
* make padding for dialogs a little smaller on mobile ([666fc95](https://github.com/johannesjo/super-productivity/commit/666fc95))
* minor style adjustments ([76d2c8f](https://github.com/johannesjo/super-productivity/commit/76d2c8f))
* move time spent on other days to collapsible ([541dcdc](https://github.com/johannesjo/super-productivity/commit/541dcdc))
* remove one example ([6a3052e](https://github.com/johannesjo/super-productivity/commit/6a3052e))
* show sp icon on mobile ([f6da59e](https://github.com/johannesjo/super-productivity/commit/f6da59e))
* use css rather than angular material shadow helper ([24f4305](https://github.com/johannesjo/super-productivity/commit/24f4305))



## [1.10.29](https://github.com/johannesjo/super-productivity/compare/v1.10.28...v1.10.29) (2018-05-06)


### Features

* update electron builder and electron core [#27](https://github.com/johannesjo/super-productivity/issues/27) ([7318217](https://github.com/johannesjo/super-productivity/commit/7318217))



## [1.10.28](https://github.com/johannesjo/super-productivity/compare/v1.10.27...v1.10.28) (2018-05-06)


### Bug Fixes

* error case for time estimate ([9e78e06](https://github.com/johannesjo/super-productivity/commit/9e78e06))
* progress calculation for time estimate ([b2d1353](https://github.com/johannesjo/super-productivity/commit/b2d1353))
* sync toast being off ([1f9506d](https://github.com/johannesjo/super-productivity/commit/1f9506d))


### Features

* adjust styles for global link list ([720e9d6](https://github.com/johannesjo/super-productivity/commit/720e9d6))
* minor style adjustments ([6a655b7](https://github.com/johannesjo/super-productivity/commit/6a655b7))
* sexify task list shadows ([d722ddb](https://github.com/johannesjo/super-productivity/commit/d722ddb))
* unify task list styles for mobile ([e1780c6](https://github.com/johannesjo/super-productivity/commit/e1780c6))



## [1.10.27](https://github.com/johannesjo/super-productivity/compare/v1.10.26...v1.10.27) (2018-05-06)


### Bug Fixes

* minor styling issues ([f2d36db](https://github.com/johannesjo/super-productivity/commit/f2d36db))



## [1.10.26](https://github.com/johannesjo/super-productivity/compare/v1.10.25...v1.10.26) (2018-05-06)


### Bug Fixes

* missing toolbar shadow when global link list is expanded ([992c01d](https://github.com/johannesjo/super-productivity/commit/992c01d))


### Features

* add time spent on other days total to time estimate ([a6d6c0f](https://github.com/johannesjo/super-productivity/commit/a6d6c0f))
* beautify duration input slider ([09d40ec](https://github.com/johannesjo/super-productivity/commit/09d40ec))
* improve duration input styling ([1514d79](https://github.com/johannesjo/super-productivity/commit/1514d79))
* use theme color for progress bar ([7032929](https://github.com/johannesjo/super-productivity/commit/7032929))
* use theme color for progress bar ([4d369b0](https://github.com/johannesjo/super-productivity/commit/4d369b0))



## [1.10.25](https://github.com/johannesjo/super-productivity/compare/v1.10.24...v1.10.25) (2018-05-06)


### Bug Fixes

* don't display more than 12 hour dots ([7c9ec07](https://github.com/johannesjo/super-productivity/commit/7c9ec07))
* global link toggle button position ([11b6225](https://github.com/johannesjo/super-productivity/commit/11b6225))
* help not working for quick access ([f21b360](https://github.com/johannesjo/super-productivity/commit/f21b360))
* make sure quick access doesn't start open ([d220cc5](https://github.com/johannesjo/super-productivity/commit/d220cc5))
* only show missing xprintidle error once ([d1f4984](https://github.com/johannesjo/super-productivity/commit/d1f4984))
* only show missing xprintidle error once [#80](https://github.com/johannesjo/super-productivity/issues/80) ([4d4a957](https://github.com/johannesjo/super-productivity/commit/4d4a957))
* prevent expand button being overlapped ([035914a](https://github.com/johannesjo/super-productivity/commit/035914a))


### Features

* add message to the global link list if no items ([8040104](https://github.com/johannesjo/super-productivity/commit/8040104))
* add mobile notifications ([80749fb](https://github.com/johannesjo/super-productivity/commit/80749fb))
* add progress to time estimate ([18ee933](https://github.com/johannesjo/super-productivity/commit/18ee933))
* add utility directives for theme coloring ([2e4ab7d](https://github.com/johannesjo/super-productivity/commit/2e4ab7d))
* hide global link list when changing project ([165efb5](https://github.com/johannesjo/super-productivity/commit/165efb5))
* make quick access buttons more recognizable ([fb5eebc](https://github.com/johannesjo/super-productivity/commit/fb5eebc))
* speed up slide down animation ([913a945](https://github.com/johannesjo/super-productivity/commit/913a945))
* use theme colors for duration input slider ([d62b490](https://github.com/johannesjo/super-productivity/commit/d62b490))



## [1.10.24](https://github.com/johannesjo/super-productivity/compare/v1.10.23...v1.10.24) (2018-05-05)


### Features

* add minor improvement to bookmark bar button ([14b0de5](https://github.com/johannesjo/super-productivity/commit/14b0de5))



## [1.10.23](https://github.com/johannesjo/super-productivity/compare/v1.10.22...v1.10.23) (2018-05-05)


### Features

* **durationInputSlider:** add dots for hours and update styling ([1caf315](https://github.com/johannesjo/super-productivity/commit/1caf315))
* improve collapsible global link list ([55d0318](https://github.com/johannesjo/super-productivity/commit/55d0318))
* make glboal link list expandable ([4f1ce4a](https://github.com/johannesjo/super-productivity/commit/4f1ce4a))
* move add task to quick access ([876d20a](https://github.com/johannesjo/super-productivity/commit/876d20a))
* move settings and help to quick access ([463afbf](https://github.com/johannesjo/super-productivity/commit/463afbf))
* open speed dial on hover ([121ffe5](https://github.com/johannesjo/super-productivity/commit/121ffe5))



## [1.10.22](https://github.com/johannesjo/super-productivity/compare/v1.10.21...v1.10.22) (2018-05-04)


### Bug Fixes

* **durationInputSlider:** drag not being canceled when mouseup is occurring outside wrapper ([7f72089](https://github.com/johannesjo/super-productivity/commit/7f72089))


### Features

* **durationInputSlider:** add uid to input and label ([f31bb57](https://github.com/johannesjo/super-productivity/commit/f31bb57))
* **durationInputSlider:** beautify ([3c06774](https://github.com/johannesjo/super-productivity/commit/3c06774))
* **durationInputSlider:** beautify for dark theme ([6efd327](https://github.com/johannesjo/super-productivity/commit/6efd327))
* **durationInputSlider:** improve performance a little ([5042abe](https://github.com/johannesjo/super-productivity/commit/5042abe))
* **durationInputSlider:** minor adjustments ([b7ba628](https://github.com/johannesjo/super-productivity/commit/b7ba628))
* **durationInputSlider:** minor refactor ([e80d1e4](https://github.com/johannesjo/super-productivity/commit/e80d1e4))



## [1.10.21](https://github.com/johannesjo/super-productivity/compare/v1.10.20...v1.10.21) (2018-05-02)


### Features

* **durationInputSlider:** allow sliding to zero ([7d61597](https://github.com/johannesjo/super-productivity/commit/7d61597))
* **durationInputSlider:** disable spellcheck for input ([1d032a5](https://github.com/johannesjo/super-productivity/commit/1d032a5))
* **durationInputSlider:** don't trigger when clicking on label or input ([275322f](https://github.com/johannesjo/super-productivity/commit/275322f))
* **durationInputSlider:** fix circle being slightly off ([f9f92f3](https://github.com/johannesjo/super-productivity/commit/f9f92f3))
* **durationInputSlider:** fix comma seconds for moment duration ([100eb90](https://github.com/johannesjo/super-productivity/commit/100eb90))
* **durationInputSlider:** fix styling on time estimate ([4d9e6b7](https://github.com/johannesjo/super-productivity/commit/4d9e6b7))
* **durationInputSlider:** improve styling ([b6c9bb6](https://github.com/johannesjo/super-productivity/commit/b6c9bb6))
* **durationInputSlider:** improve styling ([de8d507](https://github.com/johannesjo/super-productivity/commit/de8d507))
* **durationInputSlider:** improve styling ([d9b2baf](https://github.com/johannesjo/super-productivity/commit/d9b2baf))
* **durationInputSlider:** make label more readable ([a57b75d](https://github.com/johannesjo/super-productivity/commit/a57b75d))



## [1.10.20](https://github.com/johannesjo/super-productivity/compare/v1.10.19...v1.10.20) (2018-05-01)


### Bug Fixes

* appcache manifest killing external apis ([df4bfa7](https://github.com/johannesjo/super-productivity/commit/df4bfa7))



## [1.10.19](https://github.com/johannesjo/super-productivity/compare/v1.10.18...v1.10.19) (2018-05-01)


### Bug Fixes

* **durationInputSlider:** slide not moving on grab ([b7c45d0](https://github.com/johannesjo/super-productivity/commit/b7c45d0))


### Features

* **durationInputSlider:** also allow click to set the handle ([dab2830](https://github.com/johannesjo/super-productivity/commit/dab2830))
* **durationInputSlider:** improve styling ([90af925](https://github.com/johannesjo/super-productivity/commit/90af925))



## [1.10.18](https://github.com/johannesjo/super-productivity/compare/v1.10.17...v1.10.18) (2018-05-01)


### Features

* **durationInputSlider:** add basic user input ([d5a3535](https://github.com/johannesjo/super-productivity/commit/d5a3535))
* **durationInputSlider:** add to time estimate dialog ([1a5d475](https://github.com/johannesjo/super-productivity/commit/1a5d475))
* **durationInputSlider:** beautify ([343c9cb](https://github.com/johannesjo/super-productivity/commit/343c9cb))
* **durationInputSlider:** connect input to model and allow for multiple rounds ([965909f](https://github.com/johannesjo/super-productivity/commit/965909f))
* **durationInputSlider:** fix click on input or label behavior ([f9e326c](https://github.com/johannesjo/super-productivity/commit/f9e326c))
* **durationInputSlider:** fix on change behavior ([d5a03a9](https://github.com/johannesjo/super-productivity/commit/d5a03a9))
* **durationInputSlider:** improve styling and add to add task dialog ([f80f85a](https://github.com/johannesjo/super-productivity/commit/f80f85a))
* **durationInputSlider:** make it work for touch devices ([e77cad0](https://github.com/johannesjo/super-productivity/commit/e77cad0))
* **durationInputSlider:** minor improvements ([c037195](https://github.com/johannesjo/super-productivity/commit/c037195))
* **durationInputSlider:** update on model changes ([73aa0fe](https://github.com/johannesjo/super-productivity/commit/73aa0fe))



## [1.10.17](https://github.com/johannesjo/super-productivity/compare/v1.10.16...v1.10.17) (2018-05-01)


### Bug Fixes

* page transition ([aa98cb9](https://github.com/johannesjo/super-productivity/commit/aa98cb9))


### Features

* add minimal transition for main task lists ([b300cb2](https://github.com/johannesjo/super-productivity/commit/b300cb2))
* make offline access work ([67cd09a](https://github.com/johannesjo/super-productivity/commit/67cd09a))
* set git update poll interval duration much higher to prevent reaching githubs limit so quickly ([c3888f2](https://github.com/johannesjo/super-productivity/commit/c3888f2))



## [1.10.16](https://github.com/johannesjo/super-productivity/compare/v1.10.15...v1.10.16) (2018-04-29)


### Bug Fixes

* allowing closing of inline markdown via escape key ([414a9e3](https://github.com/johannesjo/super-productivity/commit/414a9e3))
* focusing last or next task not working for closed sub tasks ([a2b0625](https://github.com/johannesjo/super-productivity/commit/a2b0625))
* it not being possible to start sub tasks via keyboard shortcut ([3b134ea](https://github.com/johannesjo/super-productivity/commit/3b134ea))
* missing aria labels ([e2177fb](https://github.com/johannesjo/super-productivity/commit/e2177fb))
* remove missing function call ([a1f61d0](https://github.com/johannesjo/super-productivity/commit/a1f61d0))


### Features

* **performance:** improve edit on click by generally setting the contenteditable attribute manually ([5f1c95c](https://github.com/johannesjo/super-productivity/commit/5f1c95c))
* add untoggling task notes via escape key ([cf2125a](https://github.com/johannesjo/super-productivity/commit/cf2125a))
* improve on task keyboard shortcuts and trigger stop propagation and prevent default for all ([a7c6202](https://github.com/johannesjo/super-productivity/commit/a7c6202))
* improve performance by replacing watchers with intervals ([d66fdd2](https://github.com/johannesjo/super-productivity/commit/d66fdd2))
* improve sub tasks slide down up ([c7ccc6e](https://github.com/johannesjo/super-productivity/commit/c7ccc6e))
* make keyboard focusing much smoother ([574f77b](https://github.com/johannesjo/super-productivity/commit/574f77b))
* make slide up down work for ng-hide ([aadffcb](https://github.com/johannesjo/super-productivity/commit/aadffcb))
* use outline instead of box shadow for focus styles, as the performance is much better ([0df98c7](https://github.com/johannesjo/super-productivity/commit/0df98c7))
* use parent el for keyboard shortcut ([5777e8d](https://github.com/johannesjo/super-productivity/commit/5777e8d))
* when using toggle play mark done tasks as undone ([15407fa](https://github.com/johannesjo/super-productivity/commit/15407fa))



## [1.10.15](https://github.com/johannesjo/super-productivity/compare/v1.10.14...v1.10.15) (2018-04-25)


### Bug Fixes

* add missing aria attribute ([ad5d226](https://github.com/johannesjo/super-productivity/commit/ad5d226))
* dropping links on task title edit area not working ([292385e](https://github.com/johannesjo/super-productivity/commit/292385e))
* make toasts look a little better ([901c397](https://github.com/johannesjo/super-productivity/commit/901c397))
* toasts once more ([3e61911](https://github.com/johannesjo/super-productivity/commit/3e61911))
* unit test ([6f45276](https://github.com/johannesjo/super-productivity/commit/6f45276))
* use eval async for global link list ([cb575c9](https://github.com/johannesjo/super-productivity/commit/cb575c9))
* use eval async where possible to prevent digest errors ([fe6b4e6](https://github.com/johannesjo/super-productivity/commit/fe6b4e6))
* **globalLinks:** error when copying empty clipboard ([d041844](https://github.com/johannesjo/super-productivity/commit/d041844))
* **taskList:** rotate icon instead of button ([6c3851e](https://github.com/johannesjo/super-productivity/commit/6c3851e))


### Features

* add backface-visibility: hidden to prevent flicker ([4eb6430](https://github.com/johannesjo/super-productivity/commit/4eb6430))
* add general performance optimizations for angularjs ([ba8407d](https://github.com/johannesjo/super-productivity/commit/ba8407d))
* add global error handler to notify the user ([98bdd47](https://github.com/johannesjo/super-productivity/commit/98bdd47))
* add lock edit mode feature to task notes ([03cae43](https://github.com/johannesjo/super-productivity/commit/03cae43))
* add minimal hover transition for icon buttons ([551d217](https://github.com/johannesjo/super-productivity/commit/551d217))
* add minimal timeout to simple toast to make it run more smoothly ([3501b16](https://github.com/johannesjo/super-productivity/commit/3501b16))
* allow global add task and add sub task to have the same shortcut ([f30a562](https://github.com/johannesjo/super-productivity/commit/f30a562))
* improve project switcher button ([5f28f00](https://github.com/johannesjo/super-productivity/commit/5f28f00))
* improve task started animation ([0efea2a](https://github.com/johannesjo/super-productivity/commit/0efea2a))
* make changing projects much smoother ([1560acb](https://github.com/johannesjo/super-productivity/commit/1560acb))
* make header a little smaller for mobile ([8b0ded2](https://github.com/johannesjo/super-productivity/commit/8b0ded2))
* show x icon when help section is open ([05518a7](https://github.com/johannesjo/super-productivity/commit/05518a7))



## [1.10.14](https://github.com/johannesjo/super-productivity/compare/v1.10.13...v1.10.14) (2018-04-14)


### Bug Fixes

* add missing aria attribute ([a3d2b5f](https://github.com/johannesjo/super-productivity/commit/a3d2b5f))
* backup button not giving full back up for all projects ([f23da6a](https://github.com/johannesjo/super-productivity/commit/f23da6a))
* collapsible button appearing everywhere ([4b2c801](https://github.com/johannesjo/super-productivity/commit/4b2c801))
* custom toast not working ([df55b22](https://github.com/johannesjo/super-productivity/commit/df55b22))
* edit on click for project settings ([3270ae1](https://github.com/johannesjo/super-productivity/commit/3270ae1))
* google api toast appearance ([03d619f](https://github.com/johannesjo/super-productivity/commit/03d619f))
* multiple scope events not being called correctly [#76](https://github.com/johannesjo/super-productivity/issues/76) ([1c07338](https://github.com/johannesjo/super-productivity/commit/1c07338))
* prevent collapsible from overflowing ([b563e84](https://github.com/johannesjo/super-productivity/commit/b563e84))


### Features

* improve backup settings section [#76](https://github.com/johannesjo/super-productivity/issues/76) ([66c54eb](https://github.com/johannesjo/super-productivity/commit/66c54eb))
* **enlargeImage:** also add zoom out ani ([34c11b4](https://github.com/johannesjo/super-productivity/commit/34c11b4))
* add button to add local attachments to task list ([47e5e8b](https://github.com/johannesjo/super-productivity/commit/47e5e8b))
* add counter to collapsible and for local attachments ([08339ad](https://github.com/johannesjo/super-productivity/commit/08339ad))
* add manifest for better mobile experience ([4d8c7f8](https://github.com/johannesjo/super-productivity/commit/4d8c7f8))
* add on the fly data syncing without reloads [#76](https://github.com/johannesjo/super-productivity/issues/76) ([d2b4828](https://github.com/johannesjo/super-productivity/commit/d2b4828))
* add option to completely enable/disable Google Drive Sync [#76](https://github.com/johannesjo/super-productivity/issues/76) ([dce0140](https://github.com/johannesjo/super-productivity/commit/dce0140))
* allow home tilde to be used in local backup and sync paths [#76](https://github.com/johannesjo/super-productivity/issues/76) ([96ab646](https://github.com/johannesjo/super-productivity/commit/96ab646))
* improve edit on click out transition ([42297d3](https://github.com/johannesjo/super-productivity/commit/42297d3))
* improve image zoom animation once more ([1a7640f](https://github.com/johannesjo/super-productivity/commit/1a7640f))
* make app storage more efficient ([a2ef65f](https://github.com/johannesjo/super-productivity/commit/a2ef65f))
* only disable md-input-container transitions for collapsible content ([bd41f1f](https://github.com/johannesjo/super-productivity/commit/bd41f1f))
* prevent animations and transitions inside when collapsible is animating ([0df2337](https://github.com/johannesjo/super-productivity/commit/0df2337))
* reintroduce dialog transitions ([1519851](https://github.com/johannesjo/super-productivity/commit/1519851))



## [1.10.13](https://github.com/johannesjo/super-productivity/compare/v1.10.12...v1.10.13) (2018-04-13)


### Bug Fixes

* blurry fonts on scale ([a1eba3a](https://github.com/johannesjo/super-productivity/commit/a1eba3a))
* broken focus mode ([447b16b](https://github.com/johannesjo/super-productivity/commit/447b16b))
* collapsible icon not turning ([8d7604b](https://github.com/johannesjo/super-productivity/commit/8d7604b))
* edit on click transition messing up hover states ([a3519b9](https://github.com/johannesjo/super-productivity/commit/a3519b9))
* image preview not working any more due to translateZ ([0c43378](https://github.com/johannesjo/super-productivity/commit/0c43378))
* limit mark-done-btn animation to active button state ([2c3be8b](https://github.com/johannesjo/super-productivity/commit/2c3be8b))
* quick fix for syncing issue [#76](https://github.com/johannesjo/super-productivity/issues/76) ([b69cc4d](https://github.com/johannesjo/super-productivity/commit/b69cc4d))
* toast styling not being good in some circumstances ([d263483](https://github.com/johannesjo/super-productivity/commit/d263483))


### Features

* add hack for android issue with the keyboard opening over inputs ([40ee1a9](https://github.com/johannesjo/super-productivity/commit/40ee1a9))
* give task controls just a little bit more space on mobile ([759eaae](https://github.com/johannesjo/super-productivity/commit/759eaae))
* remove tooltips in favor of just a simple title attribute (unfortunately tooltips are messing up in several scenarios) ([232f062](https://github.com/johannesjo/super-productivity/commit/232f062))
* run current task animation only after expand animation ([43bfc13](https://github.com/johannesjo/super-productivity/commit/43bfc13))
* **enlargeImage:** make it appear as original image is being enlarged ([b71a0fd](https://github.com/johannesjo/super-productivity/commit/b71a0fd))



## [1.10.12](https://github.com/johannesjo/super-productivity/compare/v1.10.11...v1.10.12) (2018-04-08)


### Bug Fixes

* change detection parameter for callback for edit on click ([3d0cfc8](https://github.com/johannesjo/super-productivity/commit/3d0cfc8))
* rare global link list error ([4f9acec](https://github.com/johannesjo/super-productivity/commit/4f9acec))
* undo delete task toast weird layout for long task names ([e7cc5cd](https://github.com/johannesjo/super-productivity/commit/e7cc5cd))


### Features

* add simple animation to mark as done button ([5051bfd](https://github.com/johannesjo/super-productivity/commit/5051bfd))
* handle hide controls case for edit on click focus transition ([f8aa235](https://github.com/johannesjo/super-productivity/commit/f8aa235))
* limit short syntax to a lesser degree ([e1cc08f](https://github.com/johannesjo/super-productivity/commit/e1cc08f))
* make simple toast handle multi line content better ([6e857c3](https://github.com/johannesjo/super-productivity/commit/6e857c3))
* smooth out edit on click transition ([d271cc3](https://github.com/johannesjo/super-productivity/commit/d271cc3))



## [1.10.11](https://github.com/johannesjo/super-productivity/compare/v1.10.10...v1.10.11) (2018-04-08)


### Bug Fixes

* toggling edit on click via enter key not working ([90a49d2](https://github.com/johannesjo/super-productivity/commit/90a49d2))
* unknown provider error caused by missing inject ([9c0cee2](https://github.com/johannesjo/super-productivity/commit/9c0cee2))


### Features

* add better styling to overflowing text elements (for very looong words) ([2a49d4a](https://github.com/johannesjo/super-productivity/commit/2a49d4a))
* adjust task title styles ([815d989](https://github.com/johannesjo/super-productivity/commit/815d989))
* allow directly editing other task titles and inputs on click ([cf0a689](https://github.com/johannesjo/super-productivity/commit/cf0a689))
* caret color of contenteditable ([1e8aba4](https://github.com/johannesjo/super-productivity/commit/1e8aba4))
* improve edit on click styles ([0573003](https://github.com/johannesjo/super-productivity/commit/0573003))
* improve edit on click styles again ([e0592da](https://github.com/johannesjo/super-productivity/commit/e0592da))
* improve sub task visibility further by adjusting progress bars ([16589ec](https://github.com/johannesjo/super-productivity/commit/16589ec))
* improve task deletion toast ([9103e5c](https://github.com/johannesjo/super-productivity/commit/9103e5c))
* make copy & paste work for edit on click ([46e28f5](https://github.com/johannesjo/super-productivity/commit/46e28f5))
* make tasks borders more distinguishable ([0ac309a](https://github.com/johannesjo/super-productivity/commit/0ac309a))
* prevent global link list from triggering on contenteditable ([d796855](https://github.com/johannesjo/super-productivity/commit/d796855))
* use contenteditable for edit-on-click ([d87d075](https://github.com/johannesjo/super-productivity/commit/d87d075))



## [1.10.10](https://github.com/johannesjo/super-productivity/compare/v1.10.9...v1.10.10) (2018-04-07)


### Bug Fixes

* quick access menu blocking ui underneath ([1fb826d](https://github.com/johannesjo/super-productivity/commit/1fb826d))
* several issues with the new task wrapper ([41456f0](https://github.com/johannesjo/super-productivity/commit/41456f0))


### Features

* improve crawl in crawl out ([2e1c398](https://github.com/johannesjo/super-productivity/commit/2e1c398))
* improve outlines ([5540461](https://github.com/johannesjo/super-productivity/commit/5540461))
* improve progress bar styling ([5fb50a5](https://github.com/johannesjo/super-productivity/commit/5fb50a5))
* make nested lists look better ([7799a43](https://github.com/johannesjo/super-productivity/commit/7799a43))
* speed up task enter/leave animations by using js ([54b3340](https://github.com/johannesjo/super-productivity/commit/54b3340))
* use css animation again as cleanup styles is not playing nicely with the sortable lists ([389dc6f](https://github.com/johannesjo/super-productivity/commit/389dc6f))



## [1.10.9](https://github.com/johannesjo/super-productivity/compare/v1.10.8...v1.10.9) (2018-04-06)


### Bug Fixes

* expand collapse icons not shown for daily planner ([3561c8e](https://github.com/johannesjo/super-productivity/commit/3561c8e))
* help icon displaced ([c16ede6](https://github.com/johannesjo/super-productivity/commit/c16ede6))
* hide sub task notes when clicking collapse all button ([b5204c3](https://github.com/johannesjo/super-productivity/commit/b5204c3))
* lint ([d557032](https://github.com/johannesjo/super-productivity/commit/d557032))
* update icon position ([2dbd64b](https://github.com/johannesjo/super-productivity/commit/2dbd64b))


### Features

* add a little bit of animation to the current task ([9e05a04](https://github.com/johannesjo/super-productivity/commit/9e05a04))
* add animation to time tracking history ([0a13b4b](https://github.com/johannesjo/super-productivity/commit/0a13b4b))
* don't transition task background color as it is bad for keyboard navigation experience ([a2d225c](https://github.com/johannesjo/super-productivity/commit/a2d225c))
* improve animation for daily planner input ([52e2d70](https://github.com/johannesjo/super-productivity/commit/52e2d70))
* improve daily planner animations ([9d3ca22](https://github.com/johannesjo/super-productivity/commit/9d3ca22))
* improve help icon animation ([902b6d8](https://github.com/johannesjo/super-productivity/commit/902b6d8))
* improve page transitions ([7acb415](https://github.com/johannesjo/super-productivity/commit/7acb415))
* improve page transitions once more ([ff473d6](https://github.com/johannesjo/super-productivity/commit/ff473d6))
* improve pulse on daily planner ([b1c3e29](https://github.com/johannesjo/super-productivity/commit/b1c3e29))
* improve slide down up animation ([8a27f57](https://github.com/johannesjo/super-productivity/commit/8a27f57))
* make page transitions more subtle ([93759a4](https://github.com/johannesjo/super-productivity/commit/93759a4))
* make progress bars less dominant for dark theme ([ac6c796](https://github.com/johannesjo/super-productivity/commit/ac6c796))
* make task list a little bit more compact ([dcd2a04](https://github.com/johannesjo/super-productivity/commit/dcd2a04))
* minor tweaks for task list ([9bda05e](https://github.com/johannesjo/super-productivity/commit/9bda05e))
* put loading bar just on the edge of the task ([85c02bf](https://github.com/johannesjo/super-productivity/commit/85c02bf))
* remove old progress bar ([eb80f75](https://github.com/johannesjo/super-productivity/commit/eb80f75))
* replace md-progress with custom solution and make it a little bit more recognizable ([c2ecc99](https://github.com/johannesjo/super-productivity/commit/c2ecc99))
* shorten dialog titles ([43a6f1f](https://github.com/johannesjo/super-productivity/commit/43a6f1f))
* slightly improve all animations related to entering or leaving a page ([6572fd9](https://github.com/johannesjo/super-productivity/commit/6572fd9))
* slightly improve delete btn ([b19531c](https://github.com/johannesjo/super-productivity/commit/b19531c))
* slightly improve show notes btn ([b019f0a](https://github.com/johannesjo/super-productivity/commit/b019f0a))
* slightly speed up expand collapse ([b46a9c1](https://github.com/johannesjo/super-productivity/commit/b46a9c1))
* slightly speed up expand collapse ([c2d08b1](https://github.com/johannesjo/super-productivity/commit/c2d08b1))
* update page transitions ([c39c433](https://github.com/johannesjo/super-productivity/commit/c39c433))
* very politely animate current task on work view ([bfc6ffd](https://github.com/johannesjo/super-productivity/commit/bfc6ffd))



## [1.10.8](https://github.com/johannesjo/super-productivity/compare/v1.10.7...v1.10.8) (2018-04-02)


### Features

* objectively improve success animation even more ([9340a1a](https://github.com/johannesjo/super-productivity/commit/9340a1a))



## [1.10.7](https://github.com/johannesjo/super-productivity/compare/v1.10.6...v1.10.7) (2018-04-02)



## [1.10.6](https://github.com/johannesjo/super-productivity/compare/v1.10.5...v1.10.6) (2018-04-02)


### Features

* beautify daily success animation ([daa91bb](https://github.com/johannesjo/super-productivity/commit/daa91bb))



## [1.10.5](https://github.com/johannesjo/super-productivity/compare/v1.10.4...v1.10.5) (2018-04-02)


### Bug Fixes

* description text for short syntax [#71](https://github.com/johannesjo/super-productivity/issues/71) ([d6e682d](https://github.com/johannesjo/super-productivity/commit/d6e682d))
* time sheet export wrong total time [#72](https://github.com/johannesjo/super-productivity/issues/72) ([3704db1](https://github.com/johannesjo/super-productivity/commit/3704db1))


### Features

* add js based animation for slide up down ([7a217de](https://github.com/johannesjo/super-productivity/commit/7a217de))
* improve task list styling ([7a8a7bd](https://github.com/johannesjo/super-productivity/commit/7a8a7bd))



## [1.10.4](https://github.com/johannesjo/super-productivity/compare/v1.10.3...v1.10.4) (2018-03-29)


### Bug Fixes

* tasks getting replaced when switching projects in work view [#69](https://github.com/johannesjo/super-productivity/issues/69) ([adcc034](https://github.com/johannesjo/super-productivity/commit/adcc034))


### Features

* improve project creation dialog ([9fda280](https://github.com/johannesjo/super-productivity/commit/9fda280))
* make sync notification optional [#67](https://github.com/johannesjo/super-productivity/issues/67) ([f4b7887](https://github.com/johannesjo/super-productivity/commit/f4b7887))
* optionally notify when time estimate was exceeded [#69](https://github.com/johannesjo/super-productivity/issues/69) ([0f84ef8](https://github.com/johannesjo/super-productivity/commit/0f84ef8))



## [1.10.3](https://github.com/johannesjo/super-productivity/compare/v1.10.2...v1.10.3) (2018-03-26)


### Bug Fixes

* edit on click producing block elements ([3a87061](https://github.com/johannesjo/super-productivity/commit/3a87061))
* project renaming not working [#65](https://github.com/johannesjo/super-productivity/issues/65) ([24de1e3](https://github.com/johannesjo/super-productivity/commit/24de1e3))



## [1.10.2](https://github.com/johannesjo/super-productivity/compare/v1.10.1...v1.10.2) (2018-03-26)


### Bug Fixes

* add missing ngInject statements [#65](https://github.com/johannesjo/super-productivity/issues/65) ([57daea4](https://github.com/johannesjo/super-productivity/commit/57daea4))
* set the right default value for 'isBlockFinishDayUntilTimeTimeTracked' [#66](https://github.com/johannesjo/super-productivity/issues/66) ([d5857e5](https://github.com/johannesjo/super-productivity/commit/d5857e5))


### Features

* add optional reset break timer but track when tracking on idle dialog ([359ddb2](https://github.com/johannesjo/super-productivity/commit/359ddb2))
* show optional 'Are you sure you want to leave?' confirm dialog when quitting web version ([db34ac0](https://github.com/johannesjo/super-productivity/commit/db34ac0))



## [1.10.1](https://github.com/johannesjo/super-productivity/compare/v1.10.0...v1.10.1) (2018-03-24)


### Bug Fixes

* google api not working any more ([9812b1b](https://github.com/johannesjo/super-productivity/commit/9812b1b))


### Features

* make focus view work without pomodoro ([2cc8607](https://github.com/johannesjo/super-productivity/commit/2cc8607))



# [1.10.0](https://github.com/johannesjo/super-productivity/compare/v1.9.4...v1.10.0) (2018-03-23)


### Bug Fixes

* dark theme being unset after toggling theme settings ([06da8b9](https://github.com/johannesjo/super-productivity/commit/06da8b9))
* jira issue urls being wrong sometimes ([67fb8bf](https://github.com/johannesjo/super-productivity/commit/67fb8bf))
* jira requests being made event though the configuration is invalid ([31b0bc1](https://github.com/johannesjo/super-productivity/commit/31b0bc1))
* keyboard shortcuts from firing when editing text ([9a9ae61](https://github.com/johannesjo/super-productivity/commit/9a9ae61))
* only check for tasks updates if jira is enabled ([e8e9c73](https://github.com/johannesjo/super-productivity/commit/e8e9c73))
* original link icon wrongly aligned ([13cc557](https://github.com/johannesjo/super-productivity/commit/13cc557))


### Features

* add a way to configure transition handling initially ([6548fb4](https://github.com/johannesjo/super-productivity/commit/6548fb4))
* add animation utility classes and use them ([1bceb9c](https://github.com/johannesjo/super-productivity/commit/1bceb9c))
* add dark theme for new task list styles ([902fd7e](https://github.com/johannesjo/super-productivity/commit/902fd7e))
* add idle time tracking for extension ([49f4bde](https://github.com/johannesjo/super-productivity/commit/49f4bde))
* add login toast if authentication fails ([6534f7d](https://github.com/johannesjo/super-productivity/commit/6534f7d))
* add mark as done button again ([dffe15d](https://github.com/johannesjo/super-productivity/commit/dffe15d))
* add neat progress bar when syncing to google drive ([219b762](https://github.com/johannesjo/super-productivity/commit/219b762))
* add notification for successful login ([c20d9a8](https://github.com/johannesjo/super-productivity/commit/c20d9a8))
* add notification to extension interface ([190f41e](https://github.com/johannesjo/super-productivity/commit/190f41e))
* add possibility to hide task list controls ([c55b65b](https://github.com/johannesjo/super-productivity/commit/c55b65b))
* add user select none to several ui items ([7b6ea97](https://github.com/johannesjo/super-productivity/commit/7b6ea97))
* beautification ([def56f2](https://github.com/johannesjo/super-productivity/commit/def56f2))
* beautification ([1b21001](https://github.com/johannesjo/super-productivity/commit/1b21001))
* beautify settings and fix clickable area for extendable ([627a433](https://github.com/johannesjo/super-productivity/commit/627a433))
* don't hide collapse/expand button as it is an important indicator ([6696c0b](https://github.com/johannesjo/super-productivity/commit/6696c0b))
* give pomodoro settings their own panel ([f4b0899](https://github.com/johannesjo/super-productivity/commit/f4b0899))
* improve google api handling ([b0e1a8d](https://github.com/johannesjo/super-productivity/commit/b0e1a8d))
* improve google auth behaviour ([394f59a](https://github.com/johannesjo/super-productivity/commit/394f59a))
* improve pomodoro messages ([04a9325](https://github.com/johannesjo/super-productivity/commit/04a9325))
* make all settings expandables ([a0b2c90](https://github.com/johannesjo/super-productivity/commit/a0b2c90))
* make app much more responsive by using template cache ([0374f5a](https://github.com/johannesjo/super-productivity/commit/0374f5a))
* make issue transitioning optional ([c49601d](https://github.com/johannesjo/super-productivity/commit/c49601d))
* make settings a bit more compact ([0c1c608](https://github.com/johannesjo/super-productivity/commit/0c1c608))
* only show extension notification once ([c417f1d](https://github.com/johannesjo/super-productivity/commit/c417f1d))
* optionally block finish day until time sheet is exported ([e479b29](https://github.com/johannesjo/super-productivity/commit/e479b29))
* organize jira options better ([93d194e](https://github.com/johannesjo/super-productivity/commit/93d194e))
* restyle task list ([4fcf15e](https://github.com/johannesjo/super-productivity/commit/4fcf15e))
* save to ls directly after sync to google drive to minify the risk of conflicting data ([a032137](https://github.com/johannesjo/super-productivity/commit/a032137))
* select text for edit on click ([e707f8c](https://github.com/johannesjo/super-productivity/commit/e707f8c))
* show optional time worked without break ([d43150d](https://github.com/johannesjo/super-productivity/commit/d43150d))
* simply remove timer button for parent tasks if they have sub tasks ([c8103c2](https://github.com/johannesjo/super-productivity/commit/c8103c2))
* smoth out help icon animation ([277ef51](https://github.com/johannesjo/super-productivity/commit/277ef51))
* smoth out some more ([77dad29](https://github.com/johannesjo/super-productivity/commit/77dad29))
* smothen up animations once more ([9c00f56](https://github.com/johannesjo/super-productivity/commit/9c00f56))
* stop pomodoro timer if button is disabled ([d557819](https://github.com/johannesjo/super-productivity/commit/d557819))
* styling adjustments for settings ([d843008](https://github.com/johannesjo/super-productivity/commit/d843008))
* update chrome extension link ([3fa0d8e](https://github.com/johannesjo/super-productivity/commit/3fa0d8e))
* update pomodoro focus jira icon ([e35adae](https://github.com/johannesjo/super-productivity/commit/e35adae))



## [1.9.4](https://github.com/johannesjo/super-productivity/compare/v1.9.3...v1.9.4) (2018-03-18)


### Bug Fixes

* add strike-through again for done tasks ([a6bd449](https://github.com/johannesjo/super-productivity/commit/a6bd449))
* only select next task if current task was marked as done ([a543829](https://github.com/johannesjo/super-productivity/commit/a543829))
* **chromeExtension:** jira set status modal ([e7c75ac](https://github.com/johannesjo/super-productivity/commit/e7c75ac))
* only show download extension button for web version ([6444a40](https://github.com/johannesjo/super-productivity/commit/6444a40))
* only show download extension button for web version and if the extension is not installed already ([9b3359c](https://github.com/johannesjo/super-productivity/commit/9b3359c))
* scrolling on mobile with ng-sortable ([9aac5bb](https://github.com/johannesjo/super-productivity/commit/9aac5bb))


### Features

* add nice little animation to the task title edit form ([565250f](https://github.com/johannesjo/super-productivity/commit/565250f))
* add notification when syncing ([26f4d40](https://github.com/johannesjo/super-productivity/commit/26f4d40))
* add transition to inline-markdown ([fba83fa](https://github.com/johannesjo/super-productivity/commit/fba83fa))
* improve slide animation ([caca38a](https://github.com/johannesjo/super-productivity/commit/caca38a))
* make daily summary much more lucid ([df1437c](https://github.com/johannesjo/super-productivity/commit/df1437c))
* make dialogs bigger on mobile ([a6f609f](https://github.com/johannesjo/super-productivity/commit/a6f609f))
* only show import error, when an error occured ([1a6aab3](https://github.com/johannesjo/super-productivity/commit/1a6aab3))
* **chromeExtension:** wait for extension to be ready before sending jira events ([54e1877](https://github.com/johannesjo/super-productivity/commit/54e1877))
* slightly improve task enter leave animations ([46c79eb](https://github.com/johannesjo/super-productivity/commit/46c79eb))
* sync to google drive before closing app ([3e4d4e9](https://github.com/johannesjo/super-productivity/commit/3e4d4e9))
* **chromeExtension:** add basic jira interface ([1cf304d](https://github.com/johannesjo/super-productivity/commit/1cf304d))
* **chromeExtension:** add IS_EXTENSION checks for task jira actions ([64eef30](https://github.com/johannesjo/super-productivity/commit/64eef30))
* sync before finishing day ([4b6b37a](https://github.com/johannesjo/super-productivity/commit/4b6b37a))
* **chromeExtension:** basic communication interface for jira ready ([348ecb1](https://github.com/johannesjo/super-productivity/commit/348ecb1))
* **chromeExtension:** basic initialization of extension interface ([de3164e](https://github.com/johannesjo/super-productivity/commit/de3164e))
* **chromeExtension:** improve help section ([18118ba](https://github.com/johannesjo/super-productivity/commit/18118ba))
* **chromeExtension:** remove APP_READY and timeouts ([5d3651f](https://github.com/johannesjo/super-productivity/commit/5d3651f))
* **chromeExtension:** update jira settings to reflect on the extension being available ([de93daa](https://github.com/johannesjo/super-productivity/commit/de93daa))
* **gDriveSync:** also set expires at for electron flow ([076525d](https://github.com/johannesjo/super-productivity/commit/076525d))
* **taskList:** move time and time button together ([6a5ba34](https://github.com/johannesjo/super-productivity/commit/6a5ba34))



## [1.9.3](https://github.com/johannesjo/super-productivity/compare/v1.9.2...v1.9.3) (2018-03-13)


### Bug Fixes

* add more verbose logout ([1187bce](https://github.com/johannesjo/super-productivity/commit/1187bce))
* desktop styling for task list ([2aed60a](https://github.com/johannesjo/super-productivity/commit/2aed60a))
* missing space in error message ([51a1349](https://github.com/johannesjo/super-productivity/commit/51a1349))
* save sync file name button on mobile ([3cf205f](https://github.com/johannesjo/super-productivity/commit/3cf205f))


### Features

* add more accurate warning ([e845879](https://github.com/johannesjo/super-productivity/commit/e845879))
* **mobile:** improve task list styles ([21db12e](https://github.com/johannesjo/super-productivity/commit/21db12e))
* improve google login flow and really log out if the users does so ([712ffea](https://github.com/johannesjo/super-productivity/commit/712ffea))
* insert new tasks after current task ([566ebc7](https://github.com/johannesjo/super-productivity/commit/566ebc7))



## [1.9.2](https://github.com/johannesjo/super-productivity/compare/v1.9.1...v1.9.2) (2018-03-12)


### Bug Fixes

* endless error messages if xprintidle is not installed [#60](https://github.com/johannesjo/super-productivity/issues/60) ([58a631a](https://github.com/johannesjo/super-productivity/commit/58a631a))
* google login not working sometimes ([a5ff1f7](https://github.com/johannesjo/super-productivity/commit/a5ff1f7))
* save button not appearing for timesheet export ([f6d6b0e](https://github.com/johannesjo/super-productivity/commit/f6d6b0e))



## [1.9.1](https://github.com/johannesjo/super-productivity/compare/v1.9.0...v1.9.1) (2018-03-11)


### Features

* **gDriveSync:** better error case handling ([eeefbff](https://github.com/johannesjo/super-productivity/commit/eeefbff))
* **gDriveSync:** improve sync file selection ([52722c7](https://github.com/johannesjo/super-productivity/commit/52722c7))
* **gDriveSync:** wait for login before syncing ([8aa264f](https://github.com/johannesjo/super-productivity/commit/8aa264f))



# [1.9.0](https://github.com/johannesjo/super-productivity/compare/v1.8.3...v1.9.0) (2018-03-11)


### Bug Fixes

* adding empty global links ([b17a85c](https://github.com/johannesjo/super-productivity/commit/b17a85c))
* auto remove dupes ([59e5a26](https://github.com/johannesjo/super-productivity/commit/59e5a26))
* idle time not being tracked when option is disabled [#56](https://github.com/johannesjo/super-productivity/issues/56) ([a36f011](https://github.com/johannesjo/super-productivity/commit/a36f011))
* import not working correctly ([fed37a9](https://github.com/johannesjo/super-productivity/commit/fed37a9))
* **gDriveSync:** initial check not working as intended ([9ae946c](https://github.com/johannesjo/super-productivity/commit/9ae946c))
* project creation wrong check for existing ([7fcefb8](https://github.com/johannesjo/super-productivity/commit/7fcefb8))
* settings state name ([4d75537](https://github.com/johannesjo/super-productivity/commit/4d75537))
* **gDriveSync:** initial creation of backup file ([e75e3d4](https://github.com/johannesjo/super-productivity/commit/e75e3d4))
* **gDriveSync:** message ([51af762](https://github.com/johannesjo/super-productivity/commit/51af762))
* **pomodoroFocus:** fix possible error ([8ee5343](https://github.com/johannesjo/super-productivity/commit/8ee5343))
* **thumbnails:** fix removing local links ([bc3102e](https://github.com/johannesjo/super-productivity/commit/bc3102e))
* **timeSheetExport:** allow for custom date formats ([fe03021](https://github.com/johannesjo/super-productivity/commit/fe03021))
* **timeSheetExport:** use us/en date per default for export ([2ae102f](https://github.com/johannesjo/super-productivity/commit/2ae102f))


### Features

* add button to reset all keyboard shortcuts ([c3538cd](https://github.com/johannesjo/super-productivity/commit/c3538cd))
* add notification when shutting down additional instances of super productivity ([69cb232](https://github.com/johannesjo/super-productivity/commit/69cb232))
* add original stacktrace to error handling ([c893fe9](https://github.com/johannesjo/super-productivity/commit/c893fe9))
* **gDriveSync:** add auto login ([c3885ac](https://github.com/johannesjo/super-productivity/commit/c3885ac))
* improve error handling by sending the errors to the frontend and show them there as well ([300caf0](https://github.com/johannesjo/super-productivity/commit/300caf0))
* **focusMode:** add keyboard shortcut for focus mode ([b97767d](https://github.com/johannesjo/super-productivity/commit/b97767d))
* **focusMode:** add to pomodoro button ([150fed1](https://github.com/johannesjo/super-productivity/commit/150fed1))
* **focusMode:** add ui for component ([da97c4c](https://github.com/johannesjo/super-productivity/commit/da97c4c))
* **focusMode:** better edge case handling ([669fcf0](https://github.com/johannesjo/super-productivity/commit/669fcf0))
* **focusMode:** clean up and fine tuning ([272dc50](https://github.com/johannesjo/super-productivity/commit/272dc50))
* **focusMode:** implement as state ([d6f9c71](https://github.com/johannesjo/super-productivity/commit/d6f9c71))
* **focusMode:** link button functionality ([1d8013d](https://github.com/johannesjo/super-productivity/commit/1d8013d))
* **focusMode:** make drop and drag work for focus mode ([7ee2fc2](https://github.com/johannesjo/super-productivity/commit/7ee2fc2))
* **gDriveSync:** add a way to specify the file name used ([7c693fc](https://github.com/johannesjo/super-productivity/commit/7c693fc))
* **gDriveSync:** add basic sync ([f6ebeb8](https://github.com/johannesjo/super-productivity/commit/f6ebeb8))
* **gDriveSync:** add better dialog for save confirm ([7701927](https://github.com/johannesjo/super-productivity/commit/7701927))
* **gDriveSync:** add error handling for google api ([04130cc](https://github.com/johannesjo/super-productivity/commit/04130cc))
* **gDriveSync:** add import of data ([2d5c5dc](https://github.com/johannesjo/super-productivity/commit/2d5c5dc))
* **gDriveSync:** add promise button spinner ([29d5f17](https://github.com/johannesjo/super-productivity/commit/29d5f17))
* **gDriveSync:** add promise buttons also to time sheet export ([af9e5af](https://github.com/johannesjo/super-productivity/commit/af9e5af))
* **gDriveSync:** add settings and improve structure ([67d03d7](https://github.com/johannesjo/super-productivity/commit/67d03d7))
* **gDriveSync:** basic saving ([528020c](https://github.com/johannesjo/super-productivity/commit/528020c))
* **gDriveSync:** fix error handling ([19da8f2](https://github.com/johannesjo/super-productivity/commit/19da8f2))
* **gDriveSync:** further improve logging ([96f8043](https://github.com/johannesjo/super-productivity/commit/96f8043))
* **gDriveSync:** handle loading conditions correctly ([bbb94bf](https://github.com/johannesjo/super-productivity/commit/bbb94bf))
* **gDriveSync:** improve concurrent api call prevention ([0a3ad93](https://github.com/johannesjo/super-productivity/commit/0a3ad93))
* **gDriveSync:** improve logging ([245b7c6](https://github.com/johannesjo/super-productivity/commit/245b7c6))
* **gDriveSync:** improve ui ([dacbe58](https://github.com/johannesjo/super-productivity/commit/dacbe58))
* **gDriveSync:** make syncing work nicely ([30070c7](https://github.com/johannesjo/super-productivity/commit/30070c7))
* **gDriveSync:** prevent multiple dialogs ([f3fa7e6](https://github.com/johannesjo/super-productivity/commit/f3fa7e6))
* **gDriveSync:** prompt before loading data ([d3dee47](https://github.com/johannesjo/super-productivity/commit/d3dee47))
* **gDriveSync:** prompt before saving if there is a remote update ([8b3e99a](https://github.com/johannesjo/super-productivity/commit/8b3e99a))
* **gDriveSync:** save data before closing the page ([ae7a14a](https://github.com/johannesjo/super-productivity/commit/ae7a14a))
* **mobile:** beautify settings for mobile ([4570ae9](https://github.com/johannesjo/super-productivity/commit/4570ae9))
* **mobile:** don't display keyboard settings ([d9e2df0](https://github.com/johannesjo/super-productivity/commit/d9e2df0))
* **mobile:** further improve ui ([3cb776d](https://github.com/johannesjo/super-productivity/commit/3cb776d))
* **mobile:** improve ui for mobile ([954bbe5](https://github.com/johannesjo/super-productivity/commit/954bbe5))
* **mobile:** make md switch more mobile friendly ([ae547df](https://github.com/johannesjo/super-productivity/commit/ae547df))
* **mobile:** make more space for navigation items ([fe67b53](https://github.com/johannesjo/super-productivity/commit/fe67b53))
* **pomodoroFocus:** add basic outline of component ([8943f1b](https://github.com/johannesjo/super-productivity/commit/8943f1b))
* **pomodoroFocus:** also show parent task name in focus mode ([bf05be1](https://github.com/johannesjo/super-productivity/commit/bf05be1))
* **pomodoroFocus:** re-arrange ui ([bca4813](https://github.com/johannesjo/super-productivity/commit/bca4813))
* **thumbnails:** add enlarging of thumbnails ([7d3b057](https://github.com/johannesjo/super-productivity/commit/7d3b057))
* **thumbnails:** add new global link type ([bbdeb5c](https://github.com/johannesjo/super-productivity/commit/bbdeb5c))
* let notes take up less space if empty ([9354791](https://github.com/johannesjo/super-productivity/commit/9354791))
* make notes more recognizable by changing their color ([e989785](https://github.com/johannesjo/super-productivity/commit/e989785))
* remember logged in state for time sheet export ([8b40cd7](https://github.com/johannesjo/super-productivity/commit/8b40cd7))
* **thumbnails:** add thumbnails ([05fb01f](https://github.com/johannesjo/super-productivity/commit/05fb01f))
* **thumbnails:** prevent dragging of fullscreen image ([8b7376f](https://github.com/johannesjo/super-productivity/commit/8b7376f))
* require at least the current version of the gnome shell extension ([aca6792](https://github.com/johannesjo/super-productivity/commit/aca6792))
* show images being dropped on markdown area as images rather than opening a dialog for attachments ([e88cc50](https://github.com/johannesjo/super-productivity/commit/e88cc50))



## [1.8.3](https://github.com/johannesjo/super-productivity/compare/v1.8.2...v1.8.3) (2018-02-28)


### Bug Fixes

* wrong and missing dependencies ([43dcb05](https://github.com/johannesjo/super-productivity/commit/43dcb05))



## [1.8.2](https://github.com/johannesjo/super-productivity/compare/v1.8.1...v1.8.2) (2018-02-28)


### Bug Fixes

* bug when huge amount of time was wrongly tracked when application is idle for a long time (e.g. when being on lock screen over several hours) ([55ee266](https://github.com/johannesjo/super-productivity/commit/55ee266))
* import data not working ([8959fde](https://github.com/johannesjo/super-productivity/commit/8959fde))


### Features

* improve pomodoro messaging ([99b1db9](https://github.com/johannesjo/super-productivity/commit/99b1db9))



## [1.8.1](https://github.com/johannesjo/super-productivity/compare/v1.8.0...v1.8.1) (2018-02-26)


### Bug Fixes

* **dailySummary:** always show time sheet export modal button ([31a25b1](https://github.com/johannesjo/super-productivity/commit/31a25b1))


### Features

* **pomodoro:** focus window on and after break or show notification for web ([2f08642](https://github.com/johannesjo/super-productivity/commit/2f08642))



# [1.8.0](https://github.com/johannesjo/super-productivity/compare/v1.7.9...v1.8.0) (2018-02-25)


### Bug Fixes

* don't use done tasks for total estimate remaining calculation ([39d4e61](https://github.com/johannesjo/super-productivity/commit/39d4e61))


### Features

* **sheetExport:** prepare value replacement ([eba5a52](https://github.com/johannesjo/super-productivity/commit/eba5a52))
* improve pomodoro button states visibility ([4fe85d1](https://github.com/johannesjo/super-productivity/commit/4fe85d1))
* **sheetExport:** add advanced formatting options ([4e0b0fb](https://github.com/johannesjo/super-productivity/commit/4e0b0fb))
* **sheetExport:** add all formatters ([f3d3282](https://github.com/johannesjo/super-productivity/commit/f3d3282))
* **sheetExport:** add complete help ([599eba7](https://github.com/johannesjo/super-productivity/commit/599eba7))
* **sheetExport:** add google api login ([8bba9f1](https://github.com/johannesjo/super-productivity/commit/8bba9f1))
* **sheetExport:** add loading spinner ([d3faaea](https://github.com/johannesjo/super-productivity/commit/d3faaea))
* **sheetExport:** add saving rows ([30cd123](https://github.com/johannesjo/super-productivity/commit/30cd123))
* **sheetExport:** cleanup ([5b73c2c](https://github.com/johannesjo/super-productivity/commit/5b73c2c))
* **sheetExport:** fix lint ([0f8d116](https://github.com/johannesjo/super-productivity/commit/0f8d116))
* **sheetExport:** further outline time sheet export ([fecee98](https://github.com/johannesjo/super-productivity/commit/fecee98))
* **sheetExport:** keep the user logged in if possible ([a77bfbd](https://github.com/johannesjo/super-productivity/commit/a77bfbd))
* **sheetExport:** make it all work with electron ([db1ae33](https://github.com/johannesjo/super-productivity/commit/db1ae33))
* prepare time sheet export ([f875367](https://github.com/johannesjo/super-productivity/commit/f875367))
* **sheetExport:** outline ui ([13db775](https://github.com/johannesjo/super-productivity/commit/13db775))
* **sheetExport:** persist and implement options ([2cc463d](https://github.com/johannesjo/super-productivity/commit/2cc463d))
* **sheetExport:** prepare google spreadsheet export ([40e4050](https://github.com/johannesjo/super-productivity/commit/40e4050))
* **sheetExport:** refactor google api ([e6839fe](https://github.com/johannesjo/super-productivity/commit/e6839fe))
* **sheetExport:** remove for electron version ([e5daf8b](https://github.com/johannesjo/super-productivity/commit/e5daf8b))
* prevent multiple instances from being opened ([a4be335](https://github.com/johannesjo/super-productivity/commit/a4be335))



## [1.7.9](https://github.com/johannesjo/super-productivity/compare/v1.7.8...v1.7.9) (2018-02-21)


### Features

* add option to require the user to manually confirm starting the next session ([14a88f2](https://github.com/johannesjo/super-productivity/commit/14a88f2))



## [1.7.8](https://github.com/johannesjo/super-productivity/compare/v1.7.7...v1.7.8) (2018-02-19)



## [1.7.7](https://github.com/johannesjo/super-productivity/compare/v1.7.6...v1.7.7) (2018-02-19)



## [1.7.6](https://github.com/johannesjo/super-productivity/compare/v1.7.5...v1.7.6) (2018-02-19)


### Bug Fixes

* missing binding for close button on task selection dialog [#53](https://github.com/johannesjo/super-productivity/issues/53) ([b3cc7f8](https://github.com/johannesjo/super-productivity/commit/b3cc7f8))
* pulling from wrong repository by getting git settings each time [#55](https://github.com/johannesjo/super-productivity/issues/55) ([0c6227a](https://github.com/johannesjo/super-productivity/commit/0c6227a))


### Features

* add version string to update notification ([546f3e4](https://github.com/johannesjo/super-productivity/commit/546f3e4))



## [1.7.5](https://github.com/johannesjo/super-productivity/compare/v1.7.4...v1.7.5) (2018-01-30)


### Bug Fixes

* **pomodoro:** better handling for when pomodoro was disabled in the options again [#51](https://github.com/johannesjo/super-productivity/issues/51) ([49d7682](https://github.com/johannesjo/super-productivity/commit/49d7682))



## [1.7.4](https://github.com/johannesjo/super-productivity/compare/v1.7.3...v1.7.4) (2018-01-26)


### Bug Fixes

* **timeTracking:** weird behavior when no active task is selected ([a420ad2](https://github.com/johannesjo/super-productivity/commit/a420ad2))


### Features

* always set default value for new config options in deep nested objects ([462ab2e](https://github.com/johannesjo/super-productivity/commit/462ab2e))
* make checking if current ticket is assigned to current user optional [#47](https://github.com/johannesjo/super-productivity/issues/47) ([8be885a](https://github.com/johannesjo/super-productivity/commit/8be885a))
* **pomodoro:** add interface to gnome shell indicator ([15e05c7](https://github.com/johannesjo/super-productivity/commit/15e05c7))
* update electron and electron builder to latest version to fix security issue ([ce9f70c](https://github.com/johannesjo/super-productivity/commit/ce9f70c))



## [1.7.3](https://github.com/johannesjo/super-productivity/compare/v1.7.2...v1.7.3) (2018-01-09)


### Bug Fixes

* take a break not working as intended ([bbf188f](https://github.com/johannesjo/super-productivity/commit/bbf188f))
* **pomodoro:** case when there is no task available and the error when the last task was deleted ([914149d](https://github.com/johannesjo/super-productivity/commit/914149d))


### Features

* **idleTimeTracking:** cleanup ([3cbeaa4](https://github.com/johannesjo/super-productivity/commit/3cbeaa4))
* **idleTimeTracking:** make it optional and configurable ([333617c](https://github.com/johannesjo/super-productivity/commit/333617c))
* **idleTimeTracking:** rework idleTimeTracking ([92868d0](https://github.com/johannesjo/super-productivity/commit/92868d0))
* add notification when there is a new version of super productivity available ([38f6196](https://github.com/johannesjo/super-productivity/commit/38f6196))
* **pomodoro:** add skip break button ([5bd2935](https://github.com/johannesjo/super-productivity/commit/5bd2935))



## [1.7.2](https://github.com/johannesjo/super-productivity/compare/v1.7.1...v1.7.2) (2018-01-06)


### Features

* **pomodoro:** set going to work view initially to disabled [#46](https://github.com/johannesjo/super-productivity/issues/46) ([e47c603](https://github.com/johannesjo/super-productivity/commit/e47c603))



## [1.7.1](https://github.com/johannesjo/super-productivity/compare/v1.7.0...v1.7.1) (2018-01-05)



# [1.7.0](https://github.com/johannesjo/super-productivity/compare/v1.6.17...v1.7.0) (2018-01-05)


### Features

* **pomodoro:** add dialog for breaks and show distraction list on break [#32](https://github.com/johannesjo/super-productivity/issues/32) [#22](https://github.com/johannesjo/super-productivity/issues/22) ([d7f6a68](https://github.com/johannesjo/super-productivity/commit/d7f6a68))
* show version string in app help ([f748a23](https://github.com/johannesjo/super-productivity/commit/f748a23))
* **pomodoro:** add and improve notifications [#32](https://github.com/johannesjo/super-productivity/issues/32) ([67e301a](https://github.com/johannesjo/super-productivity/commit/67e301a))
* **pomodoro:** add better integration with time tracking [#32](https://github.com/johannesjo/super-productivity/issues/32) ([ae33268](https://github.com/johannesjo/super-productivity/commit/ae33268))
* **pomodoro:** add play/pause on button click [#32](https://github.com/johannesjo/super-productivity/issues/32) ([77b1ed0](https://github.com/johannesjo/super-productivity/commit/77b1ed0))
* **pomodoro:** add reselection of last task after restart [#32](https://github.com/johannesjo/super-productivity/issues/32) ([47f30d6](https://github.com/johannesjo/super-productivity/commit/47f30d6))
* **pomodoro:** add settings [#32](https://github.com/johannesjo/super-productivity/issues/32) ([47a20d1](https://github.com/johannesjo/super-productivity/commit/47a20d1))
* **pomodoro:** add ui [#32](https://github.com/johannesjo/super-productivity/issues/32) ([791c422](https://github.com/johannesjo/super-productivity/commit/791c422))
* **pomodoro:** fix initialization for older configurations [#32](https://github.com/johannesjo/super-productivity/issues/32) ([f780eff](https://github.com/johannesjo/super-productivity/commit/f780eff))
* **pomodoro:** fix task selection [#32](https://github.com/johannesjo/super-productivity/issues/32) ([521a2fa](https://github.com/johannesjo/super-productivity/commit/521a2fa))
* **pomodoro:** focus window on break [#32](https://github.com/johannesjo/super-productivity/issues/32) ([db06d1e](https://github.com/johannesjo/super-productivity/commit/db06d1e))
* **pomodoro:** go to work view when starting session [#32](https://github.com/johannesjo/super-productivity/issues/32) ([76cfd2b](https://github.com/johannesjo/super-productivity/commit/76cfd2b))
* **pomodoro:** improve activating and deactivating current task [#32](https://github.com/johannesjo/super-productivity/issues/32) ([c7bfa49](https://github.com/johannesjo/super-productivity/commit/c7bfa49))
* **pomodoro:** improve messages [#32](https://github.com/johannesjo/super-productivity/issues/32) ([d267d70](https://github.com/johannesjo/super-productivity/commit/d267d70))
* **pomodoro:** improve time tracking integration with task play/pause button ([78d009f](https://github.com/johannesjo/super-productivity/commit/78d009f))
* **pomodoro:** improve ui [#32](https://github.com/johannesjo/super-productivity/issues/32) ([cd370d8](https://github.com/johannesjo/super-productivity/commit/cd370d8))
* **pomodoro:** improve ui [#32](https://github.com/johannesjo/super-productivity/issues/32) ([4c9b927](https://github.com/johannesjo/super-productivity/commit/4c9b927))
* **pomodoro:** improve ui [#32](https://github.com/johannesjo/super-productivity/issues/32) ([34d8767](https://github.com/johannesjo/super-productivity/commit/34d8767))
* **pomodoro:** make cycles work [#32](https://github.com/johannesjo/super-productivity/issues/32) ([769dd4c](https://github.com/johannesjo/super-productivity/commit/769dd4c))
* **pomodoro:** make pause and stop work properly [#32](https://github.com/johannesjo/super-productivity/issues/32) ([1e30a91](https://github.com/johannesjo/super-productivity/commit/1e30a91))
* **pomodoro:** make restarting tasks work when quitting on break [#32](https://github.com/johannesjo/super-productivity/issues/32) ([4cd2c17](https://github.com/johannesjo/super-productivity/commit/4cd2c17))
* **pomodoro:** make timer optional [#32](https://github.com/johannesjo/super-productivity/issues/32) ([d099e2b](https://github.com/johannesjo/super-productivity/commit/d099e2b))
* **pomodoro:** outline basic interface [#32](https://github.com/johannesjo/super-productivity/issues/32) ([8a3704f](https://github.com/johannesjo/super-productivity/commit/8a3704f))
* **pomodoro:** play optional sound on session done [#32](https://github.com/johannesjo/super-productivity/issues/32) ([ee1e686](https://github.com/johannesjo/super-productivity/commit/ee1e686))
* **pomodoro:** prepare idle handling [#32](https://github.com/johannesjo/super-productivity/issues/32) ([c52b1f5](https://github.com/johannesjo/super-productivity/commit/c52b1f5))
* **pomodoro:** prevent multiple actions from being triggered at the same time [#32](https://github.com/johannesjo/super-productivity/issues/32) ([21a870c](https://github.com/johannesjo/super-productivity/commit/21a870c))
* **pomodoro:** prevent timer resetting itself on play [#32](https://github.com/johannesjo/super-productivity/issues/32) ([92147d0](https://github.com/johannesjo/super-productivity/commit/92147d0))
* **pomodoro:** show current session cycle on break [#32](https://github.com/johannesjo/super-productivity/issues/32) ([e64ea90](https://github.com/johannesjo/super-productivity/commit/e64ea90))
* **pomodoro:** show or focus window on break [#32](https://github.com/johannesjo/super-productivity/issues/32) ([31aefe0](https://github.com/johannesjo/super-productivity/commit/31aefe0))
* **pomodoro:** unset current task on startup [#32](https://github.com/johannesjo/super-productivity/issues/32) ([fc632f4](https://github.com/johannesjo/super-productivity/commit/fc632f4))
* **pomodoro:** unset lastCurrentTask on pomodoro stop [#32](https://github.com/johannesjo/super-productivity/issues/32) ([cf950a4](https://github.com/johannesjo/super-productivity/commit/cf950a4))



## [1.6.17](https://github.com/johannesjo/super-productivity/compare/v1.6.16...v1.6.17) (2017-12-16)



## [1.6.16](https://github.com/johannesjo/super-productivity/compare/v1.6.15...v1.6.16) (2017-12-16)



## [1.6.15](https://github.com/johannesjo/super-productivity/compare/v1.6.14...v1.6.15) (2017-12-15)



## [1.6.14](https://github.com/johannesjo/super-productivity/compare/v1.6.13...v1.6.14) (2017-12-15)



## [1.6.13](https://github.com/johannesjo/super-productivity/compare/v1.6.12...v1.6.13) (2017-12-15)



## [1.6.12](https://github.com/johannesjo/super-productivity/compare/v1.6.11...v1.6.12) (2017-12-10)



## [1.6.11](https://github.com/johannesjo/super-productivity/compare/v1.6.10...v1.6.11) (2017-12-10)


### Features

* add automatic updates ([b25cfb7](https://github.com/johannesjo/super-productivity/commit/b25cfb7))



## [1.6.10](https://github.com/johannesjo/super-productivity/compare/v1.6.9...v1.6.10) (2017-12-10)


### Bug Fixes

* clearing backlog not working properly ([ae4bdf3](https://github.com/johannesjo/super-productivity/commit/ae4bdf3))
* git requests being made without enough permissions ([41c8197](https://github.com/johannesjo/super-productivity/commit/41c8197))
* theme issue on config page ([cd69e78](https://github.com/johannesjo/super-productivity/commit/cd69e78))
* theme selection for new project dialog ([dfd57f7](https://github.com/johannesjo/super-productivity/commit/dfd57f7))


### Features

* make some settings global and work for all projects ([692fb5e](https://github.com/johannesjo/super-productivity/commit/692fb5e))



## [1.6.9](https://github.com/johannesjo/super-productivity/compare/v1.6.8...v1.6.9) (2017-12-08)


### Bug Fixes

* partially fix 'creating a new project clones the old one' ([f19144f](https://github.com/johannesjo/super-productivity/commit/f19144f))


### Features

* remove minimize to tray [#44](https://github.com/johannesjo/super-productivity/issues/44) ([be70fd8](https://github.com/johannesjo/super-productivity/commit/be70fd8))



## [1.6.8](https://github.com/johannesjo/super-productivity/compare/v1.6.7...v1.6.8) (2017-11-30)


### Bug Fixes

* enforce quit on system which might not do it automatically on main window closing [#29](https://github.com/johannesjo/super-productivity/issues/29) ([e3928b4](https://github.com/johannesjo/super-productivity/commit/e3928b4))



## [1.6.7](https://github.com/johannesjo/super-productivity/compare/v1.6.6...v1.6.7) (2017-11-30)


### Bug Fixes

* time tracking not working on windows [#40](https://github.com/johannesjo/super-productivity/issues/40) ([19fd9f4](https://github.com/johannesjo/super-productivity/commit/19fd9f4))
* work around electron's makeSingleInstance limitations ([9ffc785](https://github.com/johannesjo/super-productivity/commit/9ffc785))
* work around electron's makeSingleInstance limitations [#29](https://github.com/johannesjo/super-productivity/issues/29) ([d67510b](https://github.com/johannesjo/super-productivity/commit/d67510b))



## [1.6.6](https://github.com/johannesjo/super-productivity/compare/v1.6.5...v1.6.6) (2017-11-30)



## [1.6.5](https://github.com/johannesjo/super-productivity/compare/v1.6.4...v1.6.5) (2017-11-30)


### Bug Fixes

* unable to create or delete projects [#37](https://github.com/johannesjo/super-productivity/issues/37) ([3aeecca](https://github.com/johannesjo/super-productivity/commit/3aeecca))



## [1.6.4](https://github.com/johannesjo/super-productivity/compare/v1.6.3...v1.6.4) (2017-11-29)



## [1.6.3](https://github.com/johannesjo/super-productivity/compare/v1.6.2...v1.6.3) (2017-11-29)



## [1.6.2](https://github.com/johannesjo/super-productivity/compare/v1.6.1...v1.6.2) (2017-11-29)



## [1.6.1](https://github.com/johannesjo/super-productivity/compare/v1.6.0...v1.6.1) (2017-11-29)


### Bug Fixes

* windows error when idle time tracker is run [#35](https://github.com/johannesjo/super-productivity/issues/35) ([7210ef0](https://github.com/johannesjo/super-productivity/commit/7210ef0))


### Features

* add rudimentary syncing ([82d5077](https://github.com/johannesjo/super-productivity/commit/82d5077))
* add rudimentary syncing [#23](https://github.com/johannesjo/super-productivity/issues/23) ([99559ed](https://github.com/johannesjo/super-productivity/commit/99559ed))



## [1.5.2](https://github.com/johannesjo/super-productivity/compare/v1.5.1...v1.5.2) (2017-11-24)


### Bug Fixes

* **appStorage:** messing up with backlog data and import of settings ([ebed0c9](https://github.com/johannesjo/super-productivity/commit/ebed0c9))



## [1.5.1](https://github.com/johannesjo/super-productivity/compare/v1.5.0...v1.5.1) (2017-11-24)


### Bug Fixes

* **dailyPlanner:** fix task suggestions ([f97afaa](https://github.com/johannesjo/super-productivity/commit/f97afaa))


### Features

* add option to start app with open dev tools ([2b00986](https://github.com/johannesjo/super-productivity/commit/2b00986))
* improve performance by only loading done backlog on demand ([05eb12b](https://github.com/johannesjo/super-productivity/commit/05eb12b))
* **dailyPlanner:** add refresh remote tasks button to backlog [#31](https://github.com/johannesjo/super-productivity/issues/31) ([662e665](https://github.com/johannesjo/super-productivity/commit/662e665))
* **editGlobalLink:** auto add http to url if not given [#21](https://github.com/johannesjo/super-productivity/issues/21) ([782273e](https://github.com/johannesjo/super-productivity/commit/782273e))



# [1.5.0](https://github.com/johannesjo/super-productivity/compare/v1.4.2...v1.5.0) (2017-11-23)


### Features

* **settings:** make auto starting next task on done configurable [#28](https://github.com/johannesjo/super-productivity/issues/28) ([1c92dfe](https://github.com/johannesjo/super-productivity/commit/1c92dfe))
* add automatic backups [#23](https://github.com/johannesjo/super-productivity/issues/23) ([039d477](https://github.com/johannesjo/super-productivity/commit/039d477))



## [1.4.2](https://github.com/johannesjo/super-productivity/compare/v1.4.1...v1.4.2) (2017-11-21)


### Bug Fixes

* tomorrows note not showing up [#20](https://github.com/johannesjo/super-productivity/issues/20) ([5e19230](https://github.com/johannesjo/super-productivity/commit/5e19230))



## [1.4.1](https://github.com/johannesjo/super-productivity/compare/v1.4.0...v1.4.1) (2017-11-21)


### Bug Fixes

* **taskList:** parent task not startable after all sub tasks are deleted [#17](https://github.com/johannesjo/super-productivity/issues/17) ([095f574](https://github.com/johannesjo/super-productivity/commit/095f574))


### Features

* add github issue template ([b9d7896](https://github.com/johannesjo/super-productivity/commit/b9d7896))
* **gnomeShellExt:** don't try to connect any more, if there was an error ([743ba7a](https://github.com/johannesjo/super-productivity/commit/743ba7a))
* improve error handling for main window ([7e4153b](https://github.com/johannesjo/super-productivity/commit/7e4153b))



# [1.4.0](https://github.com/johannesjo/super-productivity/compare/v1.3.6...v1.4.0) (2017-11-21)


### Bug Fixes

* **jira:** wrong property access ([428d378](https://github.com/johannesjo/super-productivity/commit/428d378))
* **projects:** changing a project not working ([dac5a53](https://github.com/johannesjo/super-productivity/commit/dac5a53))
* **tasks:** wrong property access ([a6dbb08](https://github.com/johannesjo/super-productivity/commit/a6dbb08))
* unable to reopen the application when there is no indicator [#18](https://github.com/johannesjo/super-productivity/issues/18) ([4c9207e](https://github.com/johannesjo/super-productivity/commit/4c9207e))


### Features

* **animations:** improve animations ([875feb4](https://github.com/johannesjo/super-productivity/commit/875feb4))
* **betterStorage:** add ls functionality for custom wrapper ([8647d17](https://github.com/johannesjo/super-productivity/commit/8647d17))
* **betterStorage:** replace ngStorage with a custom empty wrapper ([7bfc0f6](https://github.com/johannesjo/super-productivity/commit/7bfc0f6))
* **dialogs:** improve task selection ([2ee20d7](https://github.com/johannesjo/super-productivity/commit/2ee20d7))
* **dialogs:** improve task selection for was idle and edit global link ([b0f36e4](https://github.com/johannesjo/super-productivity/commit/b0f36e4))
* **taskList:** cleanup ([07eff8d](https://github.com/johannesjo/super-productivity/commit/07eff8d))
* **taskList:** limit drag and drop to handle ([15870be](https://github.com/johannesjo/super-productivity/commit/15870be))
* add on demand load for projects ([05943e5](https://github.com/johannesjo/super-productivity/commit/05943e5))
* **taskList:** select currently edited task after editing title ([c8d9c87](https://github.com/johannesjo/super-productivity/commit/c8d9c87))



## [1.3.6](https://github.com/johannesjo/super-productivity/compare/v1.3.5...v1.3.6) (2017-11-10)



## [1.3.5](https://github.com/johannesjo/super-productivity/compare/v1.3.4...v1.3.5) (2017-11-09)



## [1.3.4](https://github.com/johannesjo/super-productivity/compare/v1.3.3...v1.3.4) (2017-11-08)


### Features

* **keyboardShortcuts:** add support for assigning meta key shortcuts [#15](https://github.com/johannesjo/super-productivity/issues/15) ([615181a](https://github.com/johannesjo/super-productivity/commit/615181a))
* also allow non registered ssl certificates for jira endpoint [#14](https://github.com/johannesjo/super-productivity/issues/14) ([75e7e00](https://github.com/johannesjo/super-productivity/commit/75e7e00))



## [1.3.3](https://github.com/johannesjo/super-productivity/compare/v1.3.2...v1.3.3) (2017-11-04)


### Bug Fixes

* **tasks:** update view model after moving tasks via keyboard ([8dd246c](https://github.com/johannesjo/super-productivity/commit/8dd246c))
* dev tools keyboard shortcut ([4486540](https://github.com/johannesjo/super-productivity/commit/4486540))
* total time spent not showing on done backlog ([23b3b58](https://github.com/johannesjo/super-productivity/commit/23b3b58))


### Features

* **keyboardShortcuts:** change defaults ([d0b35a3](https://github.com/johannesjo/super-productivity/commit/d0b35a3))
* add snap package ([1fb926d](https://github.com/johannesjo/super-productivity/commit/1fb926d))
* **taskList:** make tasks a little easier to distinguish by adding a stronger background color and borders ([0206c2f](https://github.com/johannesjo/super-productivity/commit/0206c2f))
* **workView:** focus first task when entering page ([e7a018d](https://github.com/johannesjo/super-productivity/commit/e7a018d))



## [1.3.2](https://github.com/johannesjo/super-productivity/compare/v1.3.1...v1.3.2) (2017-10-29)


### Bug Fixes

* **keyboardShortcuts:** use keydown instead of keypress ([8b38435](https://github.com/johannesjo/super-productivity/commit/8b38435))
* **taskList:** fix focus task when there is no current task ([b32c635](https://github.com/johannesjo/super-productivity/commit/b32c635))


### Features

* **backup:** prepare automatic backups ([41fb164](https://github.com/johannesjo/super-productivity/commit/41fb164))
* **globalLinks:** add reveal and remove animation and refactor animations to mixin ([c37a992](https://github.com/johannesjo/super-productivity/commit/c37a992))
* **globalLinks:** improve edit dialog ([1ac4404](https://github.com/johannesjo/super-productivity/commit/1ac4404))
* **taskList:** refocus last task after notes were edited ([16773ce](https://github.com/johannesjo/super-productivity/commit/16773ce))
* **taskList:** toggle textarea on keyboard show ([4ce1a1a](https://github.com/johannesjo/super-productivity/commit/4ce1a1a))



## [1.3.1](https://github.com/johannesjo/super-productivity/compare/v1.3.0...v1.3.1) (2017-10-29)


### Features

* **globalLinks:** add default icon for commands ([97d224b](https://github.com/johannesjo/super-productivity/commit/97d224b))
* **globalLinks:** add missing tabindex to dialog ([d01276a](https://github.com/johannesjo/super-productivity/commit/d01276a))
* **welcomeDialog:** add info for help to welcome dialog ([c6d172c](https://github.com/johannesjo/super-productivity/commit/c6d172c))



# [1.3.0](https://github.com/johannesjo/super-productivity/compare/v1.2.1...v1.3.0) (2017-10-29)


### Bug Fixes

* deprecated and aria warnings ([61f16e1](https://github.com/johannesjo/super-productivity/commit/61f16e1))


### Features

* **globalLinkList:** remove classes for dragover again as there are not working nicely ([7a68dfc](https://github.com/johannesjo/super-productivity/commit/7a68dfc))
* improve task list help ([89ca1be](https://github.com/johannesjo/super-productivity/commit/89ca1be))
* **doneBacklog:** add restoring tasks to todays list ([08b1554](https://github.com/johannesjo/super-productivity/commit/08b1554))
* **globalLinkList:** add command type for global links ([9c00cbf](https://github.com/johannesjo/super-productivity/commit/9c00cbf))
* **globalLinkList:** add styles for dragover ([8a6b902](https://github.com/johannesjo/super-productivity/commit/8a6b902))
* **globalLinkList:** improve animation for edit and delete buttons ([f0f2307](https://github.com/johannesjo/super-productivity/commit/f0f2307))
* **globalLinkList:** improve edit global link dialog to allow adding to tasks from there ([2a8bc1a](https://github.com/johannesjo/super-productivity/commit/2a8bc1a))
* **globalLinkList:** improve edit global link dialog type selection ([45a85a1](https://github.com/johannesjo/super-productivity/commit/45a85a1))
* **globalLinkList:** open dialog on copy text ([be31102](https://github.com/johannesjo/super-productivity/commit/be31102))
* **globalLinkList:** polish ui ([51f012a](https://github.com/johannesjo/super-productivity/commit/51f012a))
* **globalLinkList:** rework link handling to be more consistent ([2905592](https://github.com/johannesjo/super-productivity/commit/2905592))
* **help:** add doc for global links ([866ee7c](https://github.com/johannesjo/super-productivity/commit/866ee7c))
* **keyboardControls:** add shortcuts for routes/states ([83d5c66](https://github.com/johannesjo/super-productivity/commit/83d5c66))



## [1.2.1](https://github.com/johannesjo/super-productivity/compare/v1.2.0...v1.2.1) (2017-10-28)


### Bug Fixes

* **globalLinks:** always selecting LINK type ([1b7a1c9](https://github.com/johannesjo/super-productivity/commit/1b7a1c9))
* **globalLinks:** improve custom icon selection ([a75f9db](https://github.com/johannesjo/super-productivity/commit/a75f9db))
* **globalLinks:** polish ui ([57154a5](https://github.com/johannesjo/super-productivity/commit/57154a5))
* **localLinksForTasks:** add functionality to drop links on tasks ([a5c0b0e](https://github.com/johannesjo/super-productivity/commit/a5c0b0e))
* **localLinksForTasks:** add notification for dropping links ([1e054a2](https://github.com/johannesjo/super-productivity/commit/1e054a2))


### Features

* **globalLinks:** allow to select custom icons ([c1d5044](https://github.com/johannesjo/super-productivity/commit/c1d5044))
* **globalLinks:** improve custom icon selection by filtering out unmatched results ([7813356](https://github.com/johannesjo/super-productivity/commit/7813356))
* **globalLinks:** polish ui ([16033f6](https://github.com/johannesjo/super-productivity/commit/16033f6))



# [1.2.0](https://github.com/johannesjo/super-productivity/compare/v1.1.0...v1.2.0) (2017-10-28)


### Bug Fixes

* overflowing tasks for sub task list and don't hide icons any more ([2bf311f](https://github.com/johannesjo/super-productivity/commit/2bf311f))


### Features

* improve task selection via keyboard ([31aae53](https://github.com/johannesjo/super-productivity/commit/31aae53))
* remove dialog animation ([ef41321](https://github.com/johannesjo/super-productivity/commit/ef41321))
* **globalLinks:** add dialog to edit and add new globalLinks ([e7d5dd8](https://github.com/johannesjo/super-productivity/commit/e7d5dd8))
* **globalLinks:** add dropping of links ([9802aee](https://github.com/johannesjo/super-productivity/commit/9802aee))
* **globalLinks:** connect to ls and add basic drag and drop for files ([2c33e61](https://github.com/johannesjo/super-productivity/commit/2c33e61))
* **globalLinks:** polish ui ([db715fb](https://github.com/johannesjo/super-productivity/commit/db715fb))
* **globalLinks:** polish ui ([28a4013](https://github.com/johannesjo/super-productivity/commit/28a4013))
* **globalLinks:** refactor globalLink.name to globalLink.title ([0158a47](https://github.com/johannesjo/super-productivity/commit/0158a47))
* **globalLinks:** remove dropping of text for now ([bde1578](https://github.com/johannesjo/super-productivity/commit/bde1578))



# [1.1.0](https://github.com/johannesjo/super-productivity/compare/v1.0.0...v1.1.0) (2017-10-28)


### Bug Fixes

* theme selection not working ([49f3f78](https://github.com/johannesjo/super-productivity/commit/49f3f78))


### Features

* add collapse all notes button for work view ([5aa4524](https://github.com/johannesjo/super-productivity/commit/5aa4524))
* add collapse/expand sub tasks keyboard shortcut ([7713ace](https://github.com/johannesjo/super-productivity/commit/7713ace))
* add dark theme for expand/collapse button ([809aa6d](https://github.com/johannesjo/super-productivity/commit/809aa6d))
* add keyboard shortcut for starting/stopping task ([0890ffe](https://github.com/johannesjo/super-productivity/commit/0890ffe))
* always feature current task after starting it ([fbc6167](https://github.com/johannesjo/super-productivity/commit/fbc6167))
* copy over time tracking data from parent task if the first sub task is created ([50bcd28](https://github.com/johannesjo/super-productivity/commit/50bcd28))
* disallow collapsing when a sub task is the current task ([f696114](https://github.com/johannesjo/super-productivity/commit/f696114))
* expand and collapse sub tasks ([3c5b960](https://github.com/johannesjo/super-productivity/commit/3c5b960))
* improve keyboard task selection ([e2737ad](https://github.com/johannesjo/super-productivity/commit/e2737ad))
* make collapse notes button to collapse sub tasks and motes button ([74ae53f](https://github.com/johannesjo/super-productivity/commit/74ae53f))
* speed up animations ([c8f7d47](https://github.com/johannesjo/super-productivity/commit/c8f7d47))



# [1.0.0](https://github.com/johannesjo/super-productivity/compare/v0.9.0...v1.0.0) (2017-02-04)



# 0.9.0 (2017-01-16)



## [0.1.19](https://github.com/johannesjo/sp2/compare/v0.1.18...v0.1.19) (2019-01-26)


### Bug Fixes

* mat table throwing error because of es6 compilation ([8f68326](https://github.com/johannesjo/sp2/commit/8f68326))



## [0.1.18](https://github.com/johannesjo/sp2/compare/v0.1.17...v0.1.18) (2019-01-26)


### Bug Fixes

* planning mode popping in weirdly ([8b4cd69](https://github.com/johannesjo/sp2/commit/8b4cd69))
* **tasks:** focusing after task deletion not working ([fcb0e8d](https://github.com/johannesjo/sp2/commit/fcb0e8d))


### Features

* add productivity tips on startup ([994ef3c](https://github.com/johannesjo/sp2/commit/994ef3c))



## [0.1.17](https://github.com/johannesjo/sp2/compare/v0.1.16...v0.1.17) (2019-01-26)


### Bug Fixes

* es6 only not working for electron ([1bfd795](https://github.com/johannesjo/sp2/commit/1bfd795))



## [0.1.16](https://github.com/johannesjo/sp2/compare/v0.1.15...v0.1.16) (2019-01-26)


### Bug Fixes

* 0 bug ([b8621d4](https://github.com/johannesjo/sp2/commit/b8621d4))
* remove debug val from tpl ([3e1f6ae](https://github.com/johannesjo/sp2/commit/3e1f6ae))


### Features

* add dragging cursor to drag handle ([46450ed](https://github.com/johannesjo/sp2/commit/46450ed))
* adjust header shadow ([cafb505](https://github.com/johannesjo/sp2/commit/cafb505))
* display worklog always again ([b8dd56b](https://github.com/johannesjo/sp2/commit/b8dd56b))
* improve split handle by little animation ([df040c0](https://github.com/johannesjo/sp2/commit/df040c0))
* improve split styling ([14b97c2](https://github.com/johannesjo/sp2/commit/14b97c2))
* improve work-view and split styling ([650d357](https://github.com/johannesjo/sp2/commit/650d357))
* reduce bundle size by only compiling to es6 ([8c2a71e](https://github.com/johannesjo/sp2/commit/8c2a71e))
* reduce themes ([3dc7a86](https://github.com/johannesjo/sp2/commit/3dc7a86))
* reduce work view header size ([6fb4240](https://github.com/johannesjo/sp2/commit/6fb4240))
* remove ani for split component ([bba38b5](https://github.com/johannesjo/sp2/commit/bba38b5))
* use moment-mini to reduce bundle size ([038ef51](https://github.com/johannesjo/sp2/commit/038ef51))



## [0.1.15](https://github.com/johannesjo/sp2/compare/v0.1.14...v0.1.15) (2019-01-26)


### Bug Fixes

* breakpoint 1px gap issue ([ab06521](https://github.com/johannesjo/sp2/commit/ab06521))
* force same height for project and main nav buttons ([c98d4c0](https://github.com/johannesjo/sp2/commit/c98d4c0))


### Features

* add frameless window for mac ([75ba25b](https://github.com/johannesjo/sp2/commit/75ba25b))
* add robot for tasks as well ([4cc7084](https://github.com/johannesjo/sp2/commit/4cc7084))
* break to 2 line nav much later ([ee39fed](https://github.com/johannesjo/sp2/commit/ee39fed))
* improve frameless window for mac ([03eff3c](https://github.com/johannesjo/sp2/commit/03eff3c))
* improve split drag ([6e9c9e6](https://github.com/johannesjo/sp2/commit/6e9c9e6))
* leave scrollbar alone for mac ([c81a921](https://github.com/johannesjo/sp2/commit/c81a921))



## [0.1.14](https://github.com/johannesjo/sp2/compare/v0.1.13...v0.1.14) (2019-01-26)


### Bug Fixes

* **googleDriveSync:** case when there is no initial file id ([5c9f7e8](https://github.com/johannesjo/sp2/commit/5c9f7e8))
* **tasks:** estimate remaining calculation ([130a1f2](https://github.com/johannesjo/sp2/commit/130a1f2))
* backup & sync not working when there only is the default project and no project state ([eeae84f](https://github.com/johannesjo/sp2/commit/eeae84f))
* disable service worker for electron, as it does not work ([f6dd283](https://github.com/johannesjo/sp2/commit/f6dd283))
* make back button work again ([a3b5b17](https://github.com/johannesjo/sp2/commit/a3b5b17))


### Features

* beautify task summary table ([1efa03e](https://github.com/johannesjo/sp2/commit/1efa03e))
* flatten daily summary table tasks ([3cdf0e1](https://github.com/johannesjo/sp2/commit/3cdf0e1))
* login before every google request to avoid errors ([bd6946f](https://github.com/johannesjo/sp2/commit/bd6946f))
* **localBackup:** add boilerplate ([1a9a46f](https://github.com/johannesjo/sp2/commit/1a9a46f))
* **localBackup:** add frontend side of things ([e292422](https://github.com/johannesjo/sp2/commit/e292422))
* **localBackup:** save simple backups from electron ([6cef8bf](https://github.com/johannesjo/sp2/commit/6cef8bf))



## [0.1.13](https://github.com/johannesjo/sp2/compare/v0.1.12...v0.1.13) (2019-01-23)


### Bug Fixes

* **electron:** linting errors ([c2bce87](https://github.com/johannesjo/sp2/commit/c2bce87))
* **electron:** type import ([4402eca](https://github.com/johannesjo/sp2/commit/4402eca))
* **googleDriveSync:** error handling ([42e142a](https://github.com/johannesjo/sp2/commit/42e142a))
* **googleDriveSync:** make change sync file work ([da094be](https://github.com/johannesjo/sp2/commit/da094be))
* **googleDriveSync:** make it kinda work ([8e29afa](https://github.com/johannesjo/sp2/commit/8e29afa))
* **googleDriveSync:** quick fix for data not found error ([6051e3b](https://github.com/johannesjo/sp2/commit/6051e3b))
* **googleDriveSync:** request filter ([fa7b6ce](https://github.com/johannesjo/sp2/commit/fa7b6ce))
* **pomodoro:** several issues ([c3fa7df](https://github.com/johannesjo/sp2/commit/c3fa7df))
* app not quitting ([9414b60](https://github.com/johannesjo/sp2/commit/9414b60))
* disable uppercasing the first task title character as it messes uo editing the titles ([c9e5189](https://github.com/johannesjo/sp2/commit/c9e5189))
* google final sync ([dd75574](https://github.com/johannesjo/sp2/commit/dd75574))
* google login for electron ([762efff](https://github.com/johannesjo/sp2/commit/762efff))
* input duration slider not working as we want ([7d15ff3](https://github.com/johannesjo/sp2/commit/7d15ff3))
* jira cfg form only being editable when host etc are present ([cd27dbf](https://github.com/johannesjo/sp2/commit/cd27dbf))
* lint ([23c6db7](https://github.com/johannesjo/sp2/commit/23c6db7))
* potential database error ([38edebf](https://github.com/johannesjo/sp2/commit/38edebf))
* success animation ([a22c856](https://github.com/johannesjo/sp2/commit/a22c856))
* typing error ([8c0c2f8](https://github.com/johannesjo/sp2/commit/8c0c2f8))


### Features

* **electron:** add basic setup and convert all files to typescript ([6796ca0](https://github.com/johannesjo/sp2/commit/6796ca0))
* **electron:** make typescript for electron work ([b28f6eb](https://github.com/johannesjo/sp2/commit/b28f6eb))
* improve jira credentials ([a203528](https://github.com/johannesjo/sp2/commit/a203528))
* **googleDriveSync:** add proper error handling when being offline ([9ae7368](https://github.com/johannesjo/sp2/commit/9ae7368))
* **googleDriveSync:** better error handling ([aaebc76](https://github.com/johannesjo/sp2/commit/aaebc76))
* **googleDriveSync:** don't show other snacks when async toast is there ([8600200](https://github.com/johannesjo/sp2/commit/8600200))
* **googleDriveSync:** don't sync if offline ([b1251c9](https://github.com/johannesjo/sp2/commit/b1251c9))
* slightly improve styling for settings ([d2dfb15](https://github.com/johannesjo/sp2/commit/d2dfb15))
* **googleDriveSync:** make async toast work again ([6040ca3](https://github.com/johannesjo/sp2/commit/6040ca3))
* **googleDriveSync:** slightly improve ui ([ca08c24](https://github.com/johannesjo/sp2/commit/ca08c24))
* **tasks:** bring back left arrow parent focus ([e0b48a4](https://github.com/johannesjo/sp2/commit/e0b48a4))
* **tasks:** bring back tt uppercase for first letter ([0f53600](https://github.com/johannesjo/sp2/commit/0f53600))
* remove background color from manifest ([cbd3f44](https://github.com/johannesjo/sp2/commit/cbd3f44))
* **tasks:** don't filter out current task when collapsing sub tasks ([a95b81e](https://github.com/johannesjo/sp2/commit/a95b81e))
* **tasks:** improve animations ([09ec103](https://github.com/johannesjo/sp2/commit/09ec103))
* add better ios support ([e85d613](https://github.com/johannesjo/sp2/commit/e85d613))
* add confirm dialog for deleting projects ([21543b9](https://github.com/johannesjo/sp2/commit/21543b9))
* add missing on push change detection strategy ([5c1c58f](https://github.com/johannesjo/sp2/commit/5c1c58f))
* improve pomodoro timer styling ([2e365aa](https://github.com/johannesjo/sp2/commit/2e365aa))
* use appropriate operators ([4dc87e4](https://github.com/johannesjo/sp2/commit/4dc87e4))



## [0.1.12](https://github.com/johannesjo/sp2/compare/v0.1.11...v0.1.12) (2019-01-13)


### Bug Fixes

* **jira:** cfg component throwing an error ([4a9a990](https://github.com/johannesjo/sp2/commit/4a9a990))
* **tasks:** crucial bug where task state in db was overwritten ([9b7798f](https://github.com/johannesjo/sp2/commit/9b7798f))
* **tasks:** time spent sometimes linking values ([c5d866c](https://github.com/johannesjo/sp2/commit/c5d866c))
* cleanup debug error ([458be1d](https://github.com/johannesjo/sp2/commit/458be1d))
* for older browsers ([dbb9311](https://github.com/johannesjo/sp2/commit/dbb9311))
* keyboard shortcuts not working for edge case ([c5fc2f1](https://github.com/johannesjo/sp2/commit/c5fc2f1))
* potential worklog error if there is nothing in the archive ([abc82ad](https://github.com/johannesjo/sp2/commit/abc82ad))
* time worked without a break popping in ([a0ad47d](https://github.com/johannesjo/sp2/commit/a0ad47d))


### Features

* remove non working keyboard hide handler ([0c8543f](https://github.com/johannesjo/sp2/commit/0c8543f))
* **pomodoro:** adjust timer styling ([c7ba50f](https://github.com/johannesjo/sp2/commit/c7ba50f))
* **tasks:** improve arrow navigation ([8e191e5](https://github.com/johannesjo/sp2/commit/8e191e5))
* add no archived tasks to worklog ([0500b96](https://github.com/johannesjo/sp2/commit/0500b96))
* **tasks:** simplify keyboard left right actions ([1f20b0c](https://github.com/johannesjo/sp2/commit/1f20b0c))
* add missing help texts ([8278458](https://github.com/johannesjo/sp2/commit/8278458))
* add tabs to daily summary and most basic google time export component ([faa9ba1](https://github.com/johannesjo/sp2/commit/faa9ba1))
* beautify daily summary ([d7ab2d7](https://github.com/johannesjo/sp2/commit/d7ab2d7))
* bring back burger menu for smaller screens ([1207de9](https://github.com/johannesjo/sp2/commit/1207de9))
* fine tune daily summary styling ([be11bfa](https://github.com/johannesjo/sp2/commit/be11bfa))
* improve performance ([843685b](https://github.com/johannesjo/sp2/commit/843685b))
* integrate export task list nicely into daily summary ([ecf92e8](https://github.com/johannesjo/sp2/commit/ecf92e8))
* make google export time work for daily summary ([62d3410](https://github.com/johannesjo/sp2/commit/62d3410))
* no focus for textarea in simple task summary ([f40b640](https://github.com/johannesjo/sp2/commit/f40b640))
* persist daily summary tab index ([e19503b](https://github.com/johannesjo/sp2/commit/e19503b))
* remove focus for time estimates on mobile ([eae41e9](https://github.com/johannesjo/sp2/commit/eae41e9))



## [0.1.11](https://github.com/johannesjo/sp2/compare/v0.1.10...v0.1.11) (2019-01-13)


### Bug Fixes

* **jira:** default jira config being enabled ([a563fbe](https://github.com/johannesjo/sp2/commit/a563fbe))
* **pomodoro:** cycles not working as intended ([07c4527](https://github.com/johannesjo/sp2/commit/07c4527))
* **pomodoro:** pausing tracking not working as intended ([50646b3](https://github.com/johannesjo/sp2/commit/50646b3))


### Features

* **pomodoro:** add skip break ([b80ba77](https://github.com/johannesjo/sp2/commit/b80ba77))
* add isIdle$ as observable ([2fa90e4](https://github.com/johannesjo/sp2/commit/2fa90e4))
* add simple file import export of app data ([b3c8b84](https://github.com/johannesjo/sp2/commit/b3c8b84))
* hide calendar ([72da73b](https://github.com/johannesjo/sp2/commit/72da73b))
* make static import of v1 exports work ([4c5a413](https://github.com/johannesjo/sp2/commit/4c5a413))
* **pomodoro:** add basic dialog ([d0579a2](https://github.com/johannesjo/sp2/commit/d0579a2))
* trigger blur when android keyboard closes ([74c3300](https://github.com/johannesjo/sp2/commit/74c3300))
* **pomodoro:** add notifications ([2ca0b1d](https://github.com/johannesjo/sp2/commit/2ca0b1d))
* **pomodoro:** add session started toast ([76a3bb0](https://github.com/johannesjo/sp2/commit/76a3bb0))
* **pomodoro:** add sounds ([cf5e8c8](https://github.com/johannesjo/sp2/commit/cf5e8c8))
* **pomodoro:** improve button styles a bit ([d943d50](https://github.com/johannesjo/sp2/commit/d943d50))
* **pomodoro:** make disabled time tracking during breaks work ([bf33327](https://github.com/johannesjo/sp2/commit/bf33327))
* **pomodoro:** make it work ([e1f062b](https://github.com/johannesjo/sp2/commit/e1f062b))
* **pomodoro:** make manual resume work for cancel ([c99af17](https://github.com/johannesjo/sp2/commit/c99af17))
* **pomodoro:** prepare store and actions ([49fad8b](https://github.com/johannesjo/sp2/commit/49fad8b))
* **pomodoro:** remove extra long break config option for now ([796c5d5](https://github.com/johannesjo/sp2/commit/796c5d5))



## [0.1.10](https://github.com/johannesjo/sp2/compare/v0.1.9...v0.1.10) (2019-01-11)


### Bug Fixes

* task list switch animation leading to errors sometimes ([8ed8d10](https://github.com/johannesjo/sp2/commit/8ed8d10))


### Features

* **electron:** disable reload shortcut for production build ([b2c4ab0](https://github.com/johannesjo/sp2/commit/b2c4ab0))
* **electron:** show win gracefully ([a3734ba](https://github.com/johannesjo/sp2/commit/a3734ba))
* **tasks:** change order for add attachment dialog ([77141bb](https://github.com/johannesjo/sp2/commit/77141bb))
* **tasks:** improve additional notes styling ([ea8f678](https://github.com/johannesjo/sp2/commit/ea8f678))
* **tasks:** improve done task box styling ([c7c2f96](https://github.com/johannesjo/sp2/commit/c7c2f96))
* add icons ([15eb3a7](https://github.com/johannesjo/sp2/commit/15eb3a7))
* cache all google fonts ([431dc0b](https://github.com/johannesjo/sp2/commit/431dc0b))
* improve hide sub tasks animation ([7c0bd9a](https://github.com/johannesjo/sp2/commit/7c0bd9a))
* only add overlay scrollbars to browsers that support them ([d1c4454](https://github.com/johannesjo/sp2/commit/d1c4454))



## [0.1.8](https://github.com/johannesjo/sp2/compare/v0.1.7...v0.1.8) (2019-01-09)



## [0.1.9](https://github.com/johannesjo/sp2/compare/v0.1.7...v0.1.9) (2019-01-10)


### Bug Fixes

* **electron:** remove dbus related stuff for now ([8497d82](https://github.com/johannesjo/sp2/commit/8497d82))
* possible wrong data crashing app ([b74c82a](https://github.com/johannesjo/sp2/commit/b74c82a))
* **tasks:** remove animation for checkmark  when list is animating ([7fc20d7](https://github.com/johannesjo/sp2/commit/7fc20d7))


### Features

* **tasks:** just switch between show and hide when there are no done sub tasks ([f25e69c](https://github.com/johannesjo/sp2/commit/f25e69c))
* improve default task model and task type to be more performant ([668e846](https://github.com/johannesjo/sp2/commit/668e846))
* **tasks:** add icon change for hide done sub tasks ([1568ba0](https://github.com/johannesjo/sp2/commit/1568ba0))
* **tasks:** also handle case when there are only done tasks ([e110f4e](https://github.com/johannesjo/sp2/commit/e110f4e))
* **tasks:** improve task list animation ([5cbd5f7](https://github.com/johannesjo/sp2/commit/5cbd5f7))
* **tasks:** increase animation speed for task list ([a1e6cb9](https://github.com/johannesjo/sp2/commit/a1e6cb9))
* **tasks:** less aggressive focus style ([ade9335](https://github.com/johannesjo/sp2/commit/ade9335))
* **tasks:** make collapsing sub tasks work ([61a0305](https://github.com/johannesjo/sp2/commit/61a0305))
* **tasks:** prepare collapsing sub tasks ([40aeb1d](https://github.com/johannesjo/sp2/commit/40aeb1d))
* **tasks:** restyle done tasks button ([90a4c47](https://github.com/johannesjo/sp2/commit/90a4c47))
* **tasks:** simplify focusing tasks ([dbe4770](https://github.com/johannesjo/sp2/commit/dbe4770))



## [0.1.8](https://github.com/johannesjo/sp2/compare/v0.1.7...v0.1.8) (2019-01-10)


### Bug Fixes

* **electron:** remove dbus related stuff for now ([8497d82](https://github.com/johannesjo/sp2/commit/8497d82))
* possible wrong data crashing app ([b74c82a](https://github.com/johannesjo/sp2/commit/b74c82a))
* **tasks:** remove animation for checkmark  when list is animating ([7fc20d7](https://github.com/johannesjo/sp2/commit/7fc20d7))


### Features

* **tasks:** just switch between show and hide when there are no done sub tasks ([f25e69c](https://github.com/johannesjo/sp2/commit/f25e69c))
* improve default task model and task type to be more performant ([668e846](https://github.com/johannesjo/sp2/commit/668e846))
* **tasks:** add icon change for hide done sub tasks ([1568ba0](https://github.com/johannesjo/sp2/commit/1568ba0))
* **tasks:** also handle case when there are only done tasks ([e110f4e](https://github.com/johannesjo/sp2/commit/e110f4e))
* **tasks:** improve task list animation ([5cbd5f7](https://github.com/johannesjo/sp2/commit/5cbd5f7))
* **tasks:** increase animation speed for task list ([a1e6cb9](https://github.com/johannesjo/sp2/commit/a1e6cb9))
* **tasks:** less aggressive focus style ([ade9335](https://github.com/johannesjo/sp2/commit/ade9335))
* **tasks:** make collapsing sub tasks work ([61a0305](https://github.com/johannesjo/sp2/commit/61a0305))
* **tasks:** prepare collapsing sub tasks ([40aeb1d](https://github.com/johannesjo/sp2/commit/40aeb1d))
* **tasks:** restyle done tasks button ([90a4c47](https://github.com/johannesjo/sp2/commit/90a4c47))
* **tasks:** simplify focusing tasks ([dbe4770](https://github.com/johannesjo/sp2/commit/dbe4770))



## [0.1.7](https://github.com/johannesjo/sp2/compare/v0.1.6...v0.1.7) (2019-01-09)


### Bug Fixes

* open not being present ([f519ee0](https://github.com/johannesjo/sp2/commit/f519ee0))



## [0.1.6](https://github.com/johannesjo/sp2/compare/v0.1.5...v0.1.6) (2019-01-08)


### Bug Fixes

* dirty fix for jira cfg issues ([0bd86c8](https://github.com/johannesjo/sp2/commit/0bd86c8))
* typing error ([2d3200f](https://github.com/johannesjo/sp2/commit/2d3200f))
* typing error ([5429541](https://github.com/johannesjo/sp2/commit/5429541))
* **tasks:** next task selection on done ([b1c9a0a](https://github.com/johannesjo/sp2/commit/b1c9a0a))


### Features

* add backdrop for add task bar ([5302392](https://github.com/johannesjo/sp2/commit/5302392))
* **jira:** add description focus mode ([a4b42a6](https://github.com/johannesjo/sp2/commit/a4b42a6))
* **jira:** improve issue attachment styling and reduce th width ([09bcda1](https://github.com/johannesjo/sp2/commit/09bcda1))



## [0.1.5](https://github.com/johannesjo/sp2/compare/v0.1.4...v0.1.5) (2019-01-07)


### Bug Fixes

* controls hitbox blocking time edit ([66fa902](https://github.com/johannesjo/sp2/commit/66fa902))
* **jira:** don't refresh backlog if not enabled ([24e6ad6](https://github.com/johannesjo/sp2/commit/24e6ad6))
* **jira:** no way to disable ([683e847](https://github.com/johannesjo/sp2/commit/683e847))
* **jira:** only do initial request when enabled ([90c56b3](https://github.com/johannesjo/sp2/commit/90c56b3))


### Features

* add roboto sans ([a7565b5](https://github.com/johannesjo/sp2/commit/a7565b5))
* **tasks:** add interactive attachment icon ([81632a5](https://github.com/johannesjo/sp2/commit/81632a5))
* add subtle snack type to use it for syncing and polling ([c99329b](https://github.com/johannesjo/sp2/commit/c99329b))
* declutter ui further by only showing timer icon on hover ([ba1b91f](https://github.com/johannesjo/sp2/commit/ba1b91f))
* make active nav link bold ([72607d8](https://github.com/johannesjo/sp2/commit/72607d8))
* move mark as done up, because it is more important ([adecf2f](https://github.com/johannesjo/sp2/commit/adecf2f))
* only show hover styles for non parent tasks ([80dd325](https://github.com/johannesjo/sp2/commit/80dd325))
* only show toggle show notes button when there are notes ([11dfb03](https://github.com/johannesjo/sp2/commit/11dfb03))
* only show toggle show notes button when there are ntoes ([9da3e6c](https://github.com/johannesjo/sp2/commit/9da3e6c))
* remove ui clutter ([8b2aba2](https://github.com/johannesjo/sp2/commit/8b2aba2))



## [0.1.4](https://github.com/johannesjo/sp2/compare/v0.1.3...v0.1.4) (2019-01-06)


### Bug Fixes

* **electron:** tray dark mode icon ([cabd99c](https://github.com/johannesjo/sp2/commit/cabd99c))
* ipc send breaking web ([af8353b](https://github.com/johannesjo/sp2/commit/af8353b))
* **jira:** error handling ([d8fcb67](https://github.com/johannesjo/sp2/commit/d8fcb67))
* work around ngrx formly issues :( ([1fab8ef](https://github.com/johannesjo/sp2/commit/1fab8ef))


### Features

* **electron:** make indicator work again ([9d3d544](https://github.com/johannesjo/sp2/commit/9d3d544))
* **jira:** add submit worklog dialog ([78977ab](https://github.com/johannesjo/sp2/commit/78977ab))
* **jira:** add worklog data to jira issue content ([774deaa](https://github.com/johannesjo/sp2/commit/774deaa))
* **jira:** adjust default settings ([5148a72](https://github.com/johannesjo/sp2/commit/5148a72))
* **jira:** auto assign userAssignee to current user when test credentials was clicked ([7a414bf](https://github.com/johannesjo/sp2/commit/7a414bf))
* **jira:** change default query for backlog ([ab21e59](https://github.com/johannesjo/sp2/commit/ab21e59))
* **jira:** make submitting worklogs work ([df6bffc](https://github.com/johannesjo/sp2/commit/df6bffc))
* **jira:** prepare effect for opening worklog dialog ([09e4230](https://github.com/johannesjo/sp2/commit/09e4230))
* **pomodoro:** add config and outline pomodoro service ([4e893da](https://github.com/johannesjo/sp2/commit/4e893da))
* **pomodoro:** add more outline code ([f8908a7](https://github.com/johannesjo/sp2/commit/f8908a7))
* **pomodoro:** add very basic timer to header ([719398b](https://github.com/johannesjo/sp2/commit/719398b))
* **pomodoro:** hide pomodoro functionality for now ([1d94ca9](https://github.com/johannesjo/sp2/commit/1d94ca9))



## [0.1.3](https://github.com/johannesjo/sp2/compare/v0.1.2...v0.1.3) (2019-01-06)


### Features

* **jira:** minor refactor for effects ([ac19b7e](https://github.com/johannesjo/sp2/commit/ac19b7e))
* handle error when syncing on daily summary fails ([3af8bda](https://github.com/johannesjo/sp2/commit/3af8bda))
* limit min max zoom ([7928c10](https://github.com/johannesjo/sp2/commit/7928c10))



## [0.1.2](https://github.com/johannesjo/sp2/compare/v0.1.1...v0.1.2) (2019-01-05)


### Bug Fixes

* **jira:** issue polling happening quite too often ([dd5f217](https://github.com/johannesjo/sp2/commit/dd5f217))


### Features

* **jira:** improve transition notifications ([1ede100](https://github.com/johannesjo/sp2/commit/1ede100))
* **jira:** only transition if needed ([cc59f73](https://github.com/johannesjo/sp2/commit/cc59f73))
* **jira, git:** improve polling behaviour ([9d21739](https://github.com/johannesjo/sp2/commit/9d21739))



## [0.1.1](https://github.com/johannesjo/sp2/compare/v0.1.0...v0.1.1) (2019-01-05)



# 0.1.0 (2019-01-05)


### Bug Fixes

* add missing type ([6b81cfd](https://github.com/johannesjo/sp2/commit/6b81cfd))
* add target blank to attachment link ([e059b36](https://github.com/johannesjo/sp2/commit/e059b36))
* add task bar being overlapped by bookmarks ([7889721](https://github.com/johannesjo/sp2/commit/7889721))
* add task bar color ([ee48962](https://github.com/johannesjo/sp2/commit/ee48962))
* add task not working any more ([161d7c0](https://github.com/johannesjo/sp2/commit/161d7c0))
* adjust timeout trick for now ([6857958](https://github.com/johannesjo/sp2/commit/6857958))
* all kinds of linting errors ([742d536](https://github.com/johannesjo/sp2/commit/742d536))
* annoying issue that jira cfg was throwing an error ([6e006d5](https://github.com/johannesjo/sp2/commit/6e006d5))
* another error with destroyed view ([0c36982](https://github.com/johannesjo/sp2/commit/0c36982))
* attachment saving generating a lot of ids ([d0f1152](https://github.com/johannesjo/sp2/commit/d0f1152))
* backlog heading position ([25f2930](https://github.com/johannesjo/sp2/commit/25f2930))
* build ([965da14](https://github.com/johannesjo/sp2/commit/965da14))
* build ([0fa66ca](https://github.com/johannesjo/sp2/commit/0fa66ca))
* container not being 100% height ([ccd3d61](https://github.com/johannesjo/sp2/commit/ccd3d61))
* contenteditable messing up ([5051361](https://github.com/johannesjo/sp2/commit/5051361))
* create project dialog throwing error when opened from config page ([e31ca2e](https://github.com/johannesjo/sp2/commit/e31ca2e))
* dirty dirty dirty fix for input duration ([c7ac3b5](https://github.com/johannesjo/sp2/commit/c7ac3b5))
* dynamic jira cfg not working ([c3ca8b7](https://github.com/johannesjo/sp2/commit/c3ca8b7))
* edit attachment dialog throwing an error when link is empty ([66d878d](https://github.com/johannesjo/sp2/commit/66d878d))
* edit on click being confused ([f39ab3a](https://github.com/johannesjo/sp2/commit/f39ab3a))
* electron build for current state ([b3a2782](https://github.com/johannesjo/sp2/commit/b3a2782))
* enlarge image animation for thumbnail images ([1ec854b](https://github.com/johannesjo/sp2/commit/1ec854b))
* error with destroyed view ([e4c7c82](https://github.com/johannesjo/sp2/commit/e4c7c82))
* finish day button not being centered ([e59adfb](https://github.com/johannesjo/sp2/commit/e59adfb))
* first start issue with project state ([f0d8c6f](https://github.com/johannesjo/sp2/commit/f0d8c6f))
* focus behavior ([7993970](https://github.com/johannesjo/sp2/commit/7993970))
* google sync not working ([370cb4e](https://github.com/johannesjo/sp2/commit/370cb4e))
* google sync not working ([382e0d8](https://github.com/johannesjo/sp2/commit/382e0d8))
* icon ([eed6cb9](https://github.com/johannesjo/sp2/commit/eed6cb9))
* import ([52c9990](https://github.com/johannesjo/sp2/commit/52c9990))
* inline edit sometimes not updating value ([8ad7af2](https://github.com/johannesjo/sp2/commit/8ad7af2))
* inline markdown component rendering ([2337fb4](https://github.com/johannesjo/sp2/commit/2337fb4))
* issue model issues ([68524d4](https://github.com/johannesjo/sp2/commit/68524d4))
* jira issue content text color error ([b7782f8](https://github.com/johannesjo/sp2/commit/b7782f8))
* jira password field not being a password field ([35b39f7](https://github.com/johannesjo/sp2/commit/35b39f7))
* lint ([461067b](https://github.com/johannesjo/sp2/commit/461067b))
* lint ([8ff9dfb](https://github.com/johannesjo/sp2/commit/8ff9dfb))
* lint ([c4d2dc2](https://github.com/johannesjo/sp2/commit/c4d2dc2))
* localForage not being ready initially ([47484a5](https://github.com/johannesjo/sp2/commit/47484a5))
* main header navigation for mobile ([d2a9681](https://github.com/johannesjo/sp2/commit/d2a9681))
* manifest ([2e1634d](https://github.com/johannesjo/sp2/commit/2e1634d))
* markdown links for electron ([1f9f659](https://github.com/johannesjo/sp2/commit/1f9f659))
* minor issue ([d9f7405](https://github.com/johannesjo/sp2/commit/d9f7405))
* minor styling issue ([575ed11](https://github.com/johannesjo/sp2/commit/575ed11))
* mobile bookmark bar button styling ([aa244c5](https://github.com/johannesjo/sp2/commit/aa244c5))
* mouse wheel zoom direction for electron ([ca9409e](https://github.com/johannesjo/sp2/commit/ca9409e))
* next task sometimes selecting weird values ([017b83e](https://github.com/johannesjo/sp2/commit/017b83e))
* no state worklog ([3e83b49](https://github.com/johannesjo/sp2/commit/3e83b49))
* note background for dark theme ([0e05b2c](https://github.com/johannesjo/sp2/commit/0e05b2c))
* note state being overwritten by task state ([e429a32](https://github.com/johannesjo/sp2/commit/e429a32))
* note value being null sometimes ([7662938](https://github.com/johannesjo/sp2/commit/7662938))
* paste not working any more ([3289145](https://github.com/johannesjo/sp2/commit/3289145))
* persistence ([59dab7a](https://github.com/johannesjo/sp2/commit/59dab7a))
* planning mode being always triggered initially ([77e2ea3](https://github.com/johannesjo/sp2/commit/77e2ea3))
* play icon for dark theme ([d2dbda8](https://github.com/johannesjo/sp2/commit/d2dbda8))
* potential errors when interacting with ls ([39d8287](https://github.com/johannesjo/sp2/commit/39d8287))
* project change for worklog ([db84304](https://github.com/johannesjo/sp2/commit/db84304))
* projects saving for load state ([a3884be](https://github.com/johannesjo/sp2/commit/a3884be))
* projects without jira cfg throwing errors ([11459cc](https://github.com/johannesjo/sp2/commit/11459cc))
* reducer being executed twice ([854e43c](https://github.com/johannesjo/sp2/commit/854e43c))
* **bookmarks:** fix form for bookmarks ([ab4c04d](https://github.com/johannesjo/sp2/commit/ab4c04d))
* **bookmarks:** persistence for bookmark toggle state ([fafb266](https://github.com/johannesjo/sp2/commit/fafb266))
* **electron:** don't load electron handlers for web instance ([a42011a](https://github.com/johannesjo/sp2/commit/a42011a))
* **enlargeImg:** image animation sometimes not triggering as intended ([10162b1](https://github.com/johannesjo/sp2/commit/10162b1))
* **enlargeImg:** zoom out animation failing when in zoomed mode and clicking on background ([b1db3e9](https://github.com/johannesjo/sp2/commit/b1db3e9))
* **git:** error when polling issues ([7b87f99](https://github.com/johannesjo/sp2/commit/7b87f99))
* **git:** search not working ([58fceb9](https://github.com/johannesjo/sp2/commit/58fceb9))
* **googleDriveSnyc:** opening multiple dialogs ([736acb9](https://github.com/johannesjo/sp2/commit/736acb9))
* **googleDriveSync:** check for remote update ([e07a77b](https://github.com/johannesjo/sp2/commit/e07a77b))
* **googleDriveSync:** config section ([a42d03f](https://github.com/johannesjo/sp2/commit/a42d03f))
* **googleDriveSync:** electron calls ([18843f0](https://github.com/johannesjo/sp2/commit/18843f0))
* **googleDriveSync:** expression changed after check error ([73f56c4](https://github.com/johannesjo/sp2/commit/73f56c4))
* **googleDriveSync:** fix async toast notification ([f860844](https://github.com/johannesjo/sp2/commit/f860844))
* **googleDriveSync:** google config ([0915856](https://github.com/johannesjo/sp2/commit/0915856))
* **googleDriveSync:** initial login not being triggered ([49faf0f](https://github.com/johannesjo/sp2/commit/49faf0f))
* **googleDriveSync:** login for electron not working ([52e316e](https://github.com/johannesjo/sp2/commit/52e316e))
* **googleDriveSync:** save not working any more ([7fe4030](https://github.com/johannesjo/sp2/commit/7fe4030))
* **googleTimeSheetExport:** settings not being saved ([e7fd8ff](https://github.com/johannesjo/sp2/commit/e7fd8ff))
* **googleTimeSheetExport:** updating default values not working ([516013f](https://github.com/johannesjo/sp2/commit/516013f))
* **idle:** create task not working ([0ec81d4](https://github.com/johannesjo/sp2/commit/0ec81d4))
* **inputDurationSlider:** hour problem ([9569011](https://github.com/johannesjo/sp2/commit/9569011))
* **inputDurationSlider:** not working as intended ([ee70a74](https://github.com/johannesjo/sp2/commit/ee70a74))
* **jira:** extension request not working ([68e0bf0](https://github.com/johannesjo/sp2/commit/68e0bf0))
* **jira:** mark issues as checked throwing an error ([5109d0a](https://github.com/johannesjo/sp2/commit/5109d0a))
* **jira:** potential error for auto updates when there are no comments ([c069126](https://github.com/johannesjo/sp2/commit/c069126))
* **jira:** problem when jira cfg is missing ([0eef193](https://github.com/johannesjo/sp2/commit/0eef193))
* **jira:** query not working ([3862c46](https://github.com/johannesjo/sp2/commit/3862c46))
* **jira:** text color and author image styling ([4c26eb1](https://github.com/johannesjo/sp2/commit/4c26eb1))
* **project:** creation dialog bot resetting tmp data after project creation ([d80e97c](https://github.com/johannesjo/sp2/commit/d80e97c))
* **projects:** project creation dialog ([8ba5405](https://github.com/johannesjo/sp2/commit/8ba5405))
* **task:** mobile drag and drop ([9ab424b](https://github.com/johannesjo/sp2/commit/9ab424b))
* typing issue ([2548168](https://github.com/johannesjo/sp2/commit/2548168))
* **tasks:** animation issues ([2cb6b48](https://github.com/johannesjo/sp2/commit/2cb6b48))
* scrolling issue on mobile ([cf118b3](https://github.com/johannesjo/sp2/commit/cf118b3))
* selecting next task throwing an error ([0f5630e](https://github.com/johannesjo/sp2/commit/0f5630e))
* semicolons instead of commas ([7662454](https://github.com/johannesjo/sp2/commit/7662454))
* setting model from input for input duration slider ([a0e8862](https://github.com/johannesjo/sp2/commit/a0e8862))
* **tasks:** color changing on drag ([5f64d83](https://github.com/johannesjo/sp2/commit/5f64d83))
* settings for dark theme ([a9363d2](https://github.com/johannesjo/sp2/commit/a9363d2))
* settings not being scrollable ([75e674a](https://github.com/johannesjo/sp2/commit/75e674a))
* several minor theming issues ([98e41c7](https://github.com/johannesjo/sp2/commit/98e41c7))
* shutdown not working ([1255223](https://github.com/johannesjo/sp2/commit/1255223))
* shutdown not working ([ca34f75](https://github.com/johannesjo/sp2/commit/ca34f75))
* simple task export not working ([650b858](https://github.com/johannesjo/sp2/commit/650b858))
* snack custom styling ([0fb3731](https://github.com/johannesjo/sp2/commit/0fb3731))
* snack login button ([3e1f629](https://github.com/johannesjo/sp2/commit/3e1f629))
* styling for project overview page ([0ce4c5b](https://github.com/johannesjo/sp2/commit/0ce4c5b))
* super productivity getting cut off for project switcher ([7824c35](https://github.com/johannesjo/sp2/commit/7824c35))
* take a break ([e8e51a2](https://github.com/johannesjo/sp2/commit/e8e51a2))
* task styling ([e1329ec](https://github.com/johannesjo/sp2/commit/e1329ec))
* task sync not triggering for moving tasks ([6fefed1](https://github.com/johannesjo/sp2/commit/6fefed1))
* the possibility of starting a done task via button ([d077219](https://github.com/johannesjo/sp2/commit/d077219))
* theme body class ([c4c1298](https://github.com/johannesjo/sp2/commit/c4c1298))
* time spent not updating ([bc1ee5b](https://github.com/johannesjo/sp2/commit/bc1ee5b))
* time worked without a break being twice as fast ([cf58078](https://github.com/johannesjo/sp2/commit/cf58078))
* typing ([91979d0](https://github.com/johannesjo/sp2/commit/91979d0))
* typing error ([4a29b2b](https://github.com/johannesjo/sp2/commit/4a29b2b))
* typing error ([15a5212](https://github.com/johannesjo/sp2/commit/15a5212))
* typing for google timesheet export ([b3f74ec](https://github.com/johannesjo/sp2/commit/b3f74ec))
* **tasks:** animation playing when opening backlog ([6898294](https://github.com/johannesjo/sp2/commit/6898294))
* typing for input duration slider ([874bb17](https://github.com/johannesjo/sp2/commit/874bb17))
* **tasks:** attachment color ([53f29a9](https://github.com/johannesjo/sp2/commit/53f29a9))
* **tasks:** case when last sub task was deleted ([c77fb8e](https://github.com/johannesjo/sp2/commit/c77fb8e))
* **tasks:** case when sub task is added to current task ([eb01a6b](https://github.com/johannesjo/sp2/commit/eb01a6b))
* **tasks:** colors for light theme ([77d12d4](https://github.com/johannesjo/sp2/commit/77d12d4))
* **tasks:** deleting backlog and todays task items ([0fb6053](https://github.com/johannesjo/sp2/commit/0fb6053))
* **tasks:** deleting sub tasks ([a72c1db](https://github.com/johannesjo/sp2/commit/a72c1db))
* **tasks:** error in template ([d00ed88](https://github.com/johannesjo/sp2/commit/d00ed88))
* **tasks:** issue check not working as intended ([d027f89](https://github.com/johannesjo/sp2/commit/d027f89))
* typing for ma archive to worklog ([691ae55](https://github.com/johannesjo/sp2/commit/691ae55))
* typing issue ([ef49a21](https://github.com/johannesjo/sp2/commit/ef49a21))
* typing issue ([3663e17](https://github.com/johannesjo/sp2/commit/3663e17))
* typo ([00ad367](https://github.com/johannesjo/sp2/commit/00ad367))
* worklog for async data ([1ef7014](https://github.com/johannesjo/sp2/commit/1ef7014))
* **tasks:** issue text not being visible ([f1ae984](https://github.com/johannesjo/sp2/commit/f1ae984))
* **tasks:** jira info not being readable ([d7e88b9](https://github.com/johannesjo/sp2/commit/d7e88b9))
* **tasks:** minor styling issue ([7fdc6c5](https://github.com/johannesjo/sp2/commit/7fdc6c5))
* **tasks:** mobile styling ([bdbbf2e](https://github.com/johannesjo/sp2/commit/bdbbf2e))
* **tasks:** prevent drag handle shrinking ([38fbe53](https://github.com/johannesjo/sp2/commit/38fbe53))
* **tasks:** task isDone styling ([57874b1](https://github.com/johannesjo/sp2/commit/57874b1))
* **tasks:** toggle to undone ([db8b1d1](https://github.com/johannesjo/sp2/commit/db8b1d1))


### Features

* add 15 min to datetime input ([f18d489](https://github.com/johannesjo/sp2/commit/f18d489))
* add actual notification to take a break reminder ([864d61b](https://github.com/johannesjo/sp2/commit/864d61b))
* add add task btn to work view ([708eccb](https://github.com/johannesjo/sp2/commit/708eccb))
* add add-task-bar component ([47df742](https://github.com/johannesjo/sp2/commit/47df742))
* add and style note for tomorrow ([9ad72f2](https://github.com/johannesjo/sp2/commit/9ad72f2))
* add attachment via task context menu ([dbe31f5](https://github.com/johannesjo/sp2/commit/dbe31f5))
* add badge for undone tasks rather than for notes ([c7acd56](https://github.com/johannesjo/sp2/commit/c7acd56))
* add basic functionality to play button ([4d2f135](https://github.com/johannesjo/sp2/commit/4d2f135))
* add basic jira config section ([768d519](https://github.com/johannesjo/sp2/commit/768d519))
* add basic project settings ([6e51051](https://github.com/johannesjo/sp2/commit/6e51051))
* add basic split component ([3a4ae2c](https://github.com/johannesjo/sp2/commit/3a4ae2c))
* add basic sync interface and add function to load complete user data ([c69428a](https://github.com/johannesjo/sp2/commit/c69428a))
* add body class to help with showing and hiding elements when there is/ain't jira support ([8da579c](https://github.com/johannesjo/sp2/commit/8da579c))
* add boilerplate for datetime-input ([cbf5ab1](https://github.com/johannesjo/sp2/commit/cbf5ab1))
* add complete misc settings interface ([db800cf](https://github.com/johannesjo/sp2/commit/db800cf))
* add copy to clipboard for simple task summary ([ee0b10b](https://github.com/johannesjo/sp2/commit/ee0b10b))
* add counter for split ([d8fa02a](https://github.com/johannesjo/sp2/commit/d8fa02a))
* add css scroll bars ([c841a85](https://github.com/johannesjo/sp2/commit/c841a85))
* add data to daily summary ([c0d9560](https://github.com/johannesjo/sp2/commit/c0d9560))
* add datetime input with buttons for simplicity ([99846d0](https://github.com/johannesjo/sp2/commit/99846d0))
* add debugging code for google login ([1335249](https://github.com/johannesjo/sp2/commit/1335249))
* add default issue provider configs to default project ([2b7d626](https://github.com/johannesjo/sp2/commit/2b7d626))
* add dialogs as ngrx component ([564bb0b](https://github.com/johannesjo/sp2/commit/564bb0b))
* add different color for backlog ([e53be44](https://github.com/johannesjo/sp2/commit/e53be44))
* add double enter starts working ([df0b940](https://github.com/johannesjo/sp2/commit/df0b940))
* add download button for simple summary ([d944968](https://github.com/johannesjo/sp2/commit/d944968))
* add drag and drop for task list ([9eae8a7](https://github.com/johannesjo/sp2/commit/9eae8a7))
* add duration input for formly forms ([8181512](https://github.com/johannesjo/sp2/commit/8181512))
* add estimate remaining for backlog ([ed8cd97](https://github.com/johannesjo/sp2/commit/ed8cd97))
* add expand panel animation ([82f5e4c](https://github.com/johannesjo/sp2/commit/82f5e4c))
* add hit area to speed dial items ([85d6e38](https://github.com/johannesjo/sp2/commit/85d6e38))
* add icons to jira and git setup dialogs ([23cf4de](https://github.com/johannesjo/sp2/commit/23cf4de))
* add inset shadow to work vie page header ([6fa1bb5](https://github.com/johannesjo/sp2/commit/6fa1bb5))
* add issue icon to issue search ([603fed8](https://github.com/johannesjo/sp2/commit/603fed8))
* add jira attachments ([0195c07](https://github.com/johannesjo/sp2/commit/0195c07))
* add local forage and prepare data saving ([94e9c3b](https://github.com/johannesjo/sp2/commit/94e9c3b))
* add mat typography globally ([d3cc604](https://github.com/johannesjo/sp2/commit/d3cc604))
* add missing detect changes ([a842c47](https://github.com/johannesjo/sp2/commit/a842c47))
* add missing misc settings ([1f9eeb7](https://github.com/johannesjo/sp2/commit/1f9eeb7))
* add missing state to root state ([228ef9a](https://github.com/johannesjo/sp2/commit/228ef9a))
* add model for focus id lists ([380583b](https://github.com/johannesjo/sp2/commit/380583b))
* add more ipc events ([1574ea7](https://github.com/johannesjo/sp2/commit/1574ea7))
* add more minimal task ui ([14c7131](https://github.com/johannesjo/sp2/commit/14c7131))
* add most basic duration input slider ([578414c](https://github.com/johannesjo/sp2/commit/578414c))
* add most basic split backlog ([1003dd6](https://github.com/johannesjo/sp2/commit/1003dd6))
* add mousewheel zoom for electron ([55a79cd](https://github.com/johannesjo/sp2/commit/55a79cd))
* add new input also to add reminder dialog ([4e42734](https://github.com/johannesjo/sp2/commit/4e42734))
* add new media mixin ([709fc44](https://github.com/johannesjo/sp2/commit/709fc44))
* add new play icon ([27959af](https://github.com/johannesjo/sp2/commit/27959af))
* add nice little animation to attachments ([33e2eed](https://github.com/johannesjo/sp2/commit/33e2eed))
* add note to install extension for jira cfg ([af03eae](https://github.com/johannesjo/sp2/commit/af03eae))
* add option to only track idle time when there is a current task ([24ab839](https://github.com/johannesjo/sp2/commit/24ab839))
* add overflow scrolling for mobile ([1d6e156](https://github.com/johannesjo/sp2/commit/1d6e156))
* add pink theme ([0e7fd09](https://github.com/johannesjo/sp2/commit/0e7fd09))
* add plan your day to new work view ([c3888bd](https://github.com/johannesjo/sp2/commit/c3888bd))
* add pre load for enlarge image ([52b0aac](https://github.com/johannesjo/sp2/commit/52b0aac))
* add project related data action ([cffecf1](https://github.com/johannesjo/sp2/commit/cffecf1))
* add proper jira and git icon ([36e6c4a](https://github.com/johannesjo/sp2/commit/36e6c4a))
* add pulse animation when tracking time ([4fae79d](https://github.com/johannesjo/sp2/commit/4fae79d))
* add real progress to progress circle ([4eaaf4e](https://github.com/johannesjo/sp2/commit/4eaaf4e))
* add reducer for global layout stuff and remove daily planner ([44faeff](https://github.com/johannesjo/sp2/commit/44faeff))
* add reload data function to sync interface ([29dacd3](https://github.com/johannesjo/sp2/commit/29dacd3))
* add routing animations ([1eba194](https://github.com/johannesjo/sp2/commit/1eba194))
* add saving and loading from ls ([c2d81f4](https://github.com/johannesjo/sp2/commit/c2d81f4))
* add saving to ls again ([4c38b91](https://github.com/johannesjo/sp2/commit/4c38b91))
* add short syntax ([cca760b](https://github.com/johannesjo/sp2/commit/cca760b))
* add shortcut for open add task bar ([5aee2bf](https://github.com/johannesjo/sp2/commit/5aee2bf))
* add shortcut for toggling backlog ([2474e92](https://github.com/johannesjo/sp2/commit/2474e92))
* add shortcut to toggle bookmark bar ([a626a66](https://github.com/johannesjo/sp2/commit/a626a66))
* add show task bar to main header quick access ([9745f1b](https://github.com/johannesjo/sp2/commit/9745f1b))
* add shutdown ([5b1dd13](https://github.com/johannesjo/sp2/commit/5b1dd13))
* add shutdown to finish day for electron ([0116f0e](https://github.com/johannesjo/sp2/commit/0116f0e))
* add simple summary for worklog too ([c54c445](https://github.com/johannesjo/sp2/commit/c54c445))
* add simple task summary ([2a1f121](https://github.com/johannesjo/sp2/commit/2a1f121))
* add some route links ([e6ca6b3](https://github.com/johannesjo/sp2/commit/e6ca6b3))
* add some useful mixins ([669ce4c](https://github.com/johannesjo/sp2/commit/669ce4c))
* add sophisticated select next task logic ([5d02745](https://github.com/johannesjo/sp2/commit/5d02745))
* add split component ([80577b5](https://github.com/johannesjo/sp2/commit/80577b5))
* add startedTimeToday for project model ([6445b05](https://github.com/johannesjo/sp2/commit/6445b05))
* add styles for dragula ([69c56d0](https://github.com/johannesjo/sp2/commit/69c56d0))
* add sub tasks ([48a5f75](https://github.com/johannesjo/sp2/commit/48a5f75))
* add super cool loading spinner ([cf81761](https://github.com/johannesjo/sp2/commit/cf81761))
* add take a break reminder and time worked without break counter ([9dbf0ea](https://github.com/johannesjo/sp2/commit/9dbf0ea))
* add task archive ([c60a4d3](https://github.com/johannesjo/sp2/commit/c60a4d3))
* add task selection for idle time ([1268cfa](https://github.com/johannesjo/sp2/commit/1268cfa))
* add theme class to body rather than to app ([598dd54](https://github.com/johannesjo/sp2/commit/598dd54))
* add theme colors for duration input ([4d7a8e9](https://github.com/johannesjo/sp2/commit/4d7a8e9))
* add time estimate to simple task summary export [#1](https://github.com/johannesjo/sp2/issues/1) ([adfaab9](https://github.com/johannesjo/sp2/commit/adfaab9))
* add trackBy to task list for performance and to fix animations ([3a2a019](https://github.com/johannesjo/sp2/commit/3a2a019))
* add typing to config form constants ([d87d1b3](https://github.com/johannesjo/sp2/commit/d87d1b3))
* add view logic part for task drag & drop ([d6211b8](https://github.com/johannesjo/sp2/commit/d6211b8))
* adjust app loading spinner position ([eafde19](https://github.com/johannesjo/sp2/commit/eafde19))
* adjust default table styling ([9d9505a](https://github.com/johannesjo/sp2/commit/9d9505a))
* adjust styling ([3c82be1](https://github.com/johannesjo/sp2/commit/3c82be1))
* adjust styling ([7109d31](https://github.com/johannesjo/sp2/commit/7109d31))
* allow for dropping inside empty lists ([b7db0b5](https://github.com/johannesjo/sp2/commit/b7db0b5))
* allow pause and play of last current task ([1bb1cc4](https://github.com/johannesjo/sp2/commit/1bb1cc4))
* also add stagger to leave list animation ([00cddef](https://github.com/johannesjo/sp2/commit/00cddef))
* also sync attachment state ([9a3684e](https://github.com/johannesjo/sp2/commit/9a3684e))
* animate markdown edit ([95a0d8e](https://github.com/johannesjo/sp2/commit/95a0d8e))
* auto delete task attachments for sub tasks ([441acf5](https://github.com/johannesjo/sp2/commit/441acf5))
* auto reload data for missing issues ([8600a7b](https://github.com/johannesjo/sp2/commit/8600a7b))
* beatify and improve worklog ([7b3f239](https://github.com/johannesjo/sp2/commit/7b3f239))
* beautify add task and work view header ([24932c6](https://github.com/johannesjo/sp2/commit/24932c6))
* beautify daily planner ([c651aca](https://github.com/johannesjo/sp2/commit/c651aca))
* beautify daily summary ([614d3aa](https://github.com/johannesjo/sp2/commit/614d3aa))
* beautify tasks some more ([3697f1f](https://github.com/johannesjo/sp2/commit/3697f1f))
* block saving while importing data ([ac2a5b2](https://github.com/johannesjo/sp2/commit/ac2a5b2))
* change default shortcut for bookmarks ([e5afa8c](https://github.com/johannesjo/sp2/commit/e5afa8c))
* change default shortcuts ([9f34298](https://github.com/johannesjo/sp2/commit/9f34298))
* change toggle backlog default shortcut ([1451293](https://github.com/johannesjo/sp2/commit/1451293))
* check if issue was imported before creating a task ([906dec7](https://github.com/johannesjo/sp2/commit/906dec7))
* confirm before quit for electron ([cf99578](https://github.com/johannesjo/sp2/commit/cf99578))
* confirm before quit for web ([8b2d3ef](https://github.com/johannesjo/sp2/commit/8b2d3ef))
* connect settings for idle time ([0b07414](https://github.com/johannesjo/sp2/commit/0b07414))
* create tick in a more reactive style ([91329fc](https://github.com/johannesjo/sp2/commit/91329fc))
* don't always start dev tools for production ([6044e67](https://github.com/johannesjo/sp2/commit/6044e67))
* don't emit invalid values from datetime input ([b1c531d](https://github.com/johannesjo/sp2/commit/b1c531d))
* don't save last active for note ui action ([5259044](https://github.com/johannesjo/sp2/commit/5259044))
* don't save last active when saving google session data ([4ba65aa](https://github.com/johannesjo/sp2/commit/4ba65aa))
* don't submit google drive sync cfg if invalid ([a526cd3](https://github.com/johannesjo/sp2/commit/a526cd3))
* don't trigger global key combos if inside an input and no special keys are used ([8997d43](https://github.com/johannesjo/sp2/commit/8997d43))
* don't update last active for project change ([1315961](https://github.com/johannesjo/sp2/commit/1315961))
* even more fine tuning for nav ([b44f600](https://github.com/johannesjo/sp2/commit/b44f600))
* finish styling for progress circle ([39af8f6](https://github.com/johannesjo/sp2/commit/39af8f6))
* fix daily summary success animation ([fc4f98c](https://github.com/johannesjo/sp2/commit/fc4f98c))
* force final sync to google drive ([d014f3c](https://github.com/johannesjo/sp2/commit/d014f3c))
* get rid extra container ([6d77211](https://github.com/johannesjo/sp2/commit/6d77211))
* hide bookmarks on new projects and first start ([fa2cd87](https://github.com/johannesjo/sp2/commit/fa2cd87))
* hide time estimate button for parent tasks ([3b7f4fc](https://github.com/johannesjo/sp2/commit/3b7f4fc))
* implement dynamic config section content ([e0bee93](https://github.com/johannesjo/sp2/commit/e0bee93))
* improve all animations ([6253ddc](https://github.com/johannesjo/sp2/commit/6253ddc))
* improve config forms ([ea97e42](https://github.com/johannesjo/sp2/commit/ea97e42))
* improve daily summary styling ([cf25579](https://github.com/johannesjo/sp2/commit/cf25579))
* improve first app start experience ([7e49556](https://github.com/johannesjo/sp2/commit/7e49556))
* improve focus behavior ([c152c96](https://github.com/johannesjo/sp2/commit/c152c96))
* improve folder structure ([9878d0d](https://github.com/johannesjo/sp2/commit/9878d0d))
* improve form and add settings for idle time ([a7b76a1](https://github.com/johannesjo/sp2/commit/a7b76a1))
* improve icon nav header for small mobile ([ead2cac](https://github.com/johannesjo/sp2/commit/ead2cac))
* improve idle time dialog ([1057ab5](https://github.com/johannesjo/sp2/commit/1057ab5))
* improve main header styling ([5dcc5ca](https://github.com/johannesjo/sp2/commit/5dcc5ca))
* improve markdown even further ([5bb08ec](https://github.com/johannesjo/sp2/commit/5bb08ec))
* improve markdown further ([c4842af](https://github.com/johannesjo/sp2/commit/c4842af))
* improve note readability ([1061ff8](https://github.com/johannesjo/sp2/commit/1061ff8))
* improve scrollbars ([8ca335b](https://github.com/johannesjo/sp2/commit/8ca335b))
* improve simple task summary for worklog ([a67f9bf](https://github.com/johannesjo/sp2/commit/a67f9bf))
* improve split ([5f0126c](https://github.com/johannesjo/sp2/commit/5f0126c))
* improve split further ([0ee9339](https://github.com/johannesjo/sp2/commit/0ee9339))
* improve split further and further ([4b50856](https://github.com/johannesjo/sp2/commit/4b50856))
* improve styling for plan mode ([b2055d5](https://github.com/johannesjo/sp2/commit/b2055d5))
* improve work view header ([ef103da](https://github.com/johannesjo/sp2/commit/ef103da))
* improve work view header styling ([e625cb8](https://github.com/johannesjo/sp2/commit/e625cb8))
* include complete task data for missing issue observable ([c7139a3](https://github.com/johannesjo/sp2/commit/c7139a3))
* increase storage quota ([11b891f](https://github.com/johannesjo/sp2/commit/11b891f))
* limit cfg update notification to public sections ([1f4a653](https://github.com/johannesjo/sp2/commit/1f4a653))
* link sp icon to work view ([ccb1b07](https://github.com/johannesjo/sp2/commit/ccb1b07))
* load project data initially ([1489ef0](https://github.com/johannesjo/sp2/commit/1489ef0))
* make async database basically work ([666204e](https://github.com/johannesjo/sp2/commit/666204e))
* make completed and uncompleted tasks work ([b742dfd](https://github.com/johannesjo/sp2/commit/b742dfd))
* make config section and config form more flexible ([a0c87d0](https://github.com/johannesjo/sp2/commit/a0c87d0))
* make deleting sub tasks work ([72242e1](https://github.com/johannesjo/sp2/commit/72242e1))
* make deleting sub tasks work ([7ce44bf](https://github.com/johannesjo/sp2/commit/7ce44bf))
* make flat list for attachments in jira panel ([9558f76](https://github.com/johannesjo/sp2/commit/9558f76))
* make header always smaller ([1a84508](https://github.com/johannesjo/sp2/commit/1a84508))
* make header fixed ([c74e263](https://github.com/johannesjo/sp2/commit/c74e263))
* make hiding the navigation optional ([c12616d](https://github.com/johannesjo/sp2/commit/c12616d))
* make it work like before ([4afb0ac](https://github.com/johannesjo/sp2/commit/4afb0ac))
* make most simple idle time handling work ([bdcd6ea](https://github.com/johannesjo/sp2/commit/bdcd6ea))
* make new input duration slider work inside dialog time estimate ([fc51397](https://github.com/johannesjo/sp2/commit/fc51397))
* make notifications work ([a7ade53](https://github.com/johannesjo/sp2/commit/a7ade53))
* make saving work over projects ([c70b703](https://github.com/johannesjo/sp2/commit/c70b703))
* make setting the current task possible again ([56b1fa5](https://github.com/johannesjo/sp2/commit/56b1fa5))
* make split a little bigger ([860e05e](https://github.com/johannesjo/sp2/commit/860e05e))
* make split drag work on mobile ([37a42af](https://github.com/johannesjo/sp2/commit/37a42af))
* make split less prominent ([af62c34](https://github.com/johannesjo/sp2/commit/af62c34))
* make tasks work as most basic entity ([7df9300](https://github.com/johannesjo/sp2/commit/7df9300))
* make time estimate exceeded snack stay longer ([6542e71](https://github.com/johannesjo/sp2/commit/6542e71))
* make undo delete task work with task attachments ([e8a6598](https://github.com/johannesjo/sp2/commit/e8a6598))
* make update one work ([820106a](https://github.com/johannesjo/sp2/commit/820106a))
* make web worker work ([c0ddeb4](https://github.com/johannesjo/sp2/commit/c0ddeb4))
* minor change ([dd12331](https://github.com/johannesjo/sp2/commit/dd12331))
* minor improvement for task keyboard navigation ([06977f9](https://github.com/johannesjo/sp2/commit/06977f9))
* minor styling adjustment ([c4aa2d6](https://github.com/johannesjo/sp2/commit/c4aa2d6))
* minor styling improvements ([30fcad3](https://github.com/johannesjo/sp2/commit/30fcad3))
* more fine tuning for nav ([44c4056](https://github.com/johannesjo/sp2/commit/44c4056))
* move speed dial to top ([1374081](https://github.com/johannesjo/sp2/commit/1374081))
* **notes:** add keyboard shortcut ([d944fd9](https://github.com/johannesjo/sp2/commit/d944fd9))
* move speed dial to top ([847d16a](https://github.com/johannesjo/sp2/commit/847d16a))
* moving current task to backlog selects next task ([d633dcd](https://github.com/johannesjo/sp2/commit/d633dcd))
* notify when time estimate was exceeded ([478a2c8](https://github.com/johannesjo/sp2/commit/478a2c8))
* omit google tokens when importing data via google drive sync ([97f5e9c](https://github.com/johannesjo/sp2/commit/97f5e9c))
* only show take a break if enabled ([20f49c6](https://github.com/johannesjo/sp2/commit/20f49c6))
* open and close backlog via click ([eaf41e3](https://github.com/johannesjo/sp2/commit/eaf41e3))
* outline app structure ([2b99e83](https://github.com/johannesjo/sp2/commit/2b99e83))
* outline app structure2 ([d4bce6b](https://github.com/johannesjo/sp2/commit/d4bce6b))
* package material icons with app ([4d18e2f](https://github.com/johannesjo/sp2/commit/4d18e2f))
* persist settings for simple summary ([2ab1888](https://github.com/johannesjo/sp2/commit/2ab1888))
* persist zoom level for electron ([f3eeb12](https://github.com/johannesjo/sp2/commit/f3eeb12))
* port edit on click ([c3cf848](https://github.com/johannesjo/sp2/commit/c3cf848))
* **bookmarks:** add basic edit / ad dialog ([ac56ed6](https://github.com/johannesjo/sp2/commit/ac56ed6))
* **bookmarks:** add basic styling for bookmark bar ([447ceee](https://github.com/johannesjo/sp2/commit/447ceee))
* **bookmarks:** add boilerplate files ([c938333](https://github.com/johannesjo/sp2/commit/c938333))
* **bookmarks:** add external link directive ([7ff05b0](https://github.com/johannesjo/sp2/commit/7ff05b0))
* **bookmarks:** add facade store stuff ([2e813ab](https://github.com/johannesjo/sp2/commit/2e813ab))
* **bookmarks:** add icon to edit dialog ([1b1e427](https://github.com/johannesjo/sp2/commit/1b1e427))
* **bookmarks:** add image links ([f23065b](https://github.com/johannesjo/sp2/commit/f23065b))
* **bookmarks:** add layout methods for bookmarks ([f716fe3](https://github.com/johannesjo/sp2/commit/f716fe3))
* **bookmarks:** add nice drag over ui element ([8763170](https://github.com/johannesjo/sp2/commit/8763170))
* **bookmarks:** add persistence to bookmarks ([7102efa](https://github.com/johannesjo/sp2/commit/7102efa))
* **bookmarks:** add possibility to run bookmark command ([21532c8](https://github.com/johannesjo/sp2/commit/21532c8))
* **bookmarks:** add show/hide for bookmark bar ([6a95116](https://github.com/johannesjo/sp2/commit/6a95116))
* **bookmarks:** add store stuff for layout model ([aed3b91](https://github.com/johannesjo/sp2/commit/aed3b91))
* **bookmarks:** adjust sub header style ([544f5c6](https://github.com/johannesjo/sp2/commit/544f5c6))
* **bookmarks:** also blur element ([3627968](https://github.com/johannesjo/sp2/commit/3627968))
* **bookmarks:** animate bar ([52d7bab](https://github.com/johannesjo/sp2/commit/52d7bab))
* **bookmarks:** beautify bookmark bar ([755f06f](https://github.com/johannesjo/sp2/commit/755f06f))
* **bookmarks:** implement drag & drop for links ([ac06b90](https://github.com/johannesjo/sp2/commit/ac06b90))
* **bookmarks:** make saving local task attachments work ([200f6a8](https://github.com/johannesjo/sp2/commit/200f6a8))
* **bookmarks:** make split component work with dynamic header height ([294efe5](https://github.com/johannesjo/sp2/commit/294efe5))
* **bookmarks:** prevent page reloads from drops ([0f759ce](https://github.com/johannesjo/sp2/commit/0f759ce))
* **config:** add basic keyboard config ([3af844a](https://github.com/johannesjo/sp2/commit/3af844a))
* **config:** add basic markup and components ([7161762](https://github.com/johannesjo/sp2/commit/7161762))
* **config:** add boilerplate ([2ee82c1](https://github.com/johannesjo/sp2/commit/2ee82c1))
* **config:** add collapsable component ([9720b44](https://github.com/johannesjo/sp2/commit/9720b44))
* **config:** add form config ([c03ca71](https://github.com/johannesjo/sp2/commit/c03ca71))
* **config:** add help section ([c05f14d](https://github.com/johannesjo/sp2/commit/c05f14d))
* **config:** add model ([adc7286](https://github.com/johannesjo/sp2/commit/adc7286))
* **config:** add more boilerplate ([5538b31](https://github.com/johannesjo/sp2/commit/5538b31))
* **config:** add ngx formly ([702828b](https://github.com/johannesjo/sp2/commit/702828b))
* **config:** add proper store ([d349568](https://github.com/johannesjo/sp2/commit/d349568))
* **config:** add update notification ([743f5cf](https://github.com/johannesjo/sp2/commit/743f5cf))
* **config:** always create a copy for config forms ([53df8e3](https://github.com/johannesjo/sp2/commit/53df8e3))
* **config:** improve help section ([4036d42](https://github.com/johannesjo/sp2/commit/4036d42))
* **config:** improve styling ([18a06b8](https://github.com/johannesjo/sp2/commit/18a06b8))
* **config:** make all keyboard shortcuts configurable ([1b0d82e](https://github.com/johannesjo/sp2/commit/1b0d82e))
* **config:** make basic config form work ([83a9429](https://github.com/johannesjo/sp2/commit/83a9429))
* **config:** make data for the config components work ([9bb5a45](https://github.com/johannesjo/sp2/commit/9bb5a45))
* **config:** make saving for config form work ([ba5fc07](https://github.com/johannesjo/sp2/commit/ba5fc07))
* **config:** make saving to ls work ([2a41bc6](https://github.com/johannesjo/sp2/commit/2a41bc6))
* **config:** only show update config notification for non private props ([3e37bd7](https://github.com/johannesjo/sp2/commit/3e37bd7))
* **electron:** add open dev tools ([0b0dec2](https://github.com/johannesjo/sp2/commit/0b0dec2))
* **electron:** don't open dev tools initially ([2a78fb1](https://github.com/johannesjo/sp2/commit/2a78fb1))
* **electron:** show electron errors ([9557acf](https://github.com/johannesjo/sp2/commit/9557acf))
* **enlargeImg:** add possibility to move zoomed in detail ([44f644b](https://github.com/johannesjo/sp2/commit/44f644b))
* **enlargeImg:** add some fine tuning ([86808d2](https://github.com/johannesjo/sp2/commit/86808d2))
* **enlargeImg:** improve animation and remove hide ([65a9eba](https://github.com/johannesjo/sp2/commit/65a9eba))
* **enlargeImg:** make most simple form of zooming work nicely ([990eaaa](https://github.com/johannesjo/sp2/commit/990eaaa))
* **enlargeImg:** prepare zoom ([f647463](https://github.com/johannesjo/sp2/commit/f647463))
* **extensionInterface:** improve extension interface ([47ec23f](https://github.com/johannesjo/sp2/commit/47ec23f))
* **git:** add basic issue template ([95ddee9](https://github.com/johannesjo/sp2/commit/95ddee9))
* **git:** add boilerplate ([27645b8](https://github.com/johannesjo/sp2/commit/27645b8))
* **git:** add caching for data ([07599cf](https://github.com/johannesjo/sp2/commit/07599cf))
* **git:** add code to get complete issue data for repository ([3453909](https://github.com/johannesjo/sp2/commit/3453909))
* **git:** add config dialog ([9fb2ed6](https://github.com/johannesjo/sp2/commit/9fb2ed6))
* **git:** add config for github integration ([9779500](https://github.com/johannesjo/sp2/commit/9779500))
* **git:** add error handling ([2ebf182](https://github.com/johannesjo/sp2/commit/2ebf182))
* **git:** add git issues to search and make add task bar more generic ([77ff285](https://github.com/johannesjo/sp2/commit/77ff285))
* **git:** add issue tab header and fix comments ([2ca1bf6](https://github.com/johannesjo/sp2/commit/2ca1bf6))
* **git:** add messages for auto import ([5017357](https://github.com/johannesjo/sp2/commit/5017357))
* **git:** add model and persistence for it ([438da92](https://github.com/johannesjo/sp2/commit/438da92))
* **git:** add polling updates ([3e2616e](https://github.com/johannesjo/sp2/commit/3e2616e))
* **git:** add pre check for api ([a0da47a](https://github.com/johannesjo/sp2/commit/a0da47a))
* **git:** add proper url ([63822c0](https://github.com/johannesjo/sp2/commit/63822c0))
* **git:** add saving issue configs from settings ([51f112d](https://github.com/johannesjo/sp2/commit/51f112d))
* **git:** add some basic api methods ([7108919](https://github.com/johannesjo/sp2/commit/7108919))
* **git:** add to migrate service ([f8a050e](https://github.com/johannesjo/sp2/commit/f8a050e))
* **git:** also abstract loading issue states and add properly load for git ([b36ceda](https://github.com/johannesjo/sp2/commit/b36ceda))
* **git:** also search issue body ([17e0d44](https://github.com/johannesjo/sp2/commit/17e0d44))
* **git:** auto import issues to backlog ([4f9daf1](https://github.com/johannesjo/sp2/commit/4f9daf1))
* **git:** better check ([980cc2c](https://github.com/johannesjo/sp2/commit/980cc2c))
* **git:** cleanup and and restore issues based on task actions ([74c6312](https://github.com/johannesjo/sp2/commit/74c6312))
* **git:** get more comments ([87365ec](https://github.com/johannesjo/sp2/commit/87365ec))
* **git:** implement issue icon as pipe ([b7126b3](https://github.com/johannesjo/sp2/commit/b7126b3))
* **git:** improve config ([2073c8b](https://github.com/johannesjo/sp2/commit/2073c8b))
* **git:** load comments for git issues ([4f056f2](https://github.com/johannesjo/sp2/commit/4f056f2))
* **git:** make polling updates work ([9671fa6](https://github.com/johannesjo/sp2/commit/9671fa6))
* **git:** make searching work again ([8886081](https://github.com/johannesjo/sp2/commit/8886081))
* **git:** prepare polling issues ([eb21a8c](https://github.com/johannesjo/sp2/commit/eb21a8c))
* **git:** refresh issue data on project change ([f1432c6](https://github.com/johannesjo/sp2/commit/f1432c6))
* **git:** use fresh git issue data when importing ([58ba253](https://github.com/johannesjo/sp2/commit/58ba253))
* **git:** use issue number as id, as the id is not practical for the api ([34c93a2](https://github.com/johannesjo/sp2/commit/34c93a2))
* **google:** improve login ([afed8ee](https://github.com/johannesjo/sp2/commit/afed8ee))
* **googleApi:** auto refresh token for web ([59ec4bf](https://github.com/johannesjo/sp2/commit/59ec4bf))
* **googleApi:** don't fire request when there is no token ([c9ec8a6](https://github.com/johannesjo/sp2/commit/c9ec8a6))
* **googleDriveSync:** add confirm drive sync load dialog ([3871aa8](https://github.com/johannesjo/sp2/commit/3871aa8))
* **googleDriveSync:** add confirm save dialog ([6c82f55](https://github.com/johannesjo/sp2/commit/6c82f55))
* **googleDriveSync:** add first outline of service ([96cd485](https://github.com/johannesjo/sp2/commit/96cd485))
* **googleDriveSync:** add interface for model ([1c1b042](https://github.com/johannesjo/sp2/commit/1c1b042))
* **googleDriveSync:** add outline for basic async toast ([3a070e5](https://github.com/johannesjo/sp2/commit/3a070e5))
* **googleDriveSync:** add promise btn ([2b9d702](https://github.com/johannesjo/sp2/commit/2b9d702))
* **googleDriveSync:** add simple confirms ([e27c75a](https://github.com/johannesjo/sp2/commit/e27c75a))
* **googleDriveSync:** don't ask again if other option was choosen ([aab12cf](https://github.com/johannesjo/sp2/commit/aab12cf))
* **googleDriveSync:** don't exec stuff when in progress ([7555352](https://github.com/johannesjo/sp2/commit/7555352))
* **googleDriveSync:** don't update last active in some instances and improve messaging ([7243254](https://github.com/johannesjo/sp2/commit/7243254))
* **googleDriveSync:** don't update when there are no changes ([c2c9afc](https://github.com/johannesjo/sp2/commit/c2c9afc))
* **googleDriveSync:** fix google sync config form ([7fda9ed](https://github.com/johannesjo/sp2/commit/7fda9ed))
* **googleDriveSync:** improve dialogs ([4ab0369](https://github.com/johannesjo/sp2/commit/4ab0369))
* **googleDriveSync:** improve sync config ([814686a](https://github.com/johannesjo/sp2/commit/814686a))
* **googleDriveSync:** improve sync config 2 ([ad0916d](https://github.com/johannesjo/sp2/commit/ad0916d))
* **googleDriveSync:** improve syncing process and checks ([3a2693e](https://github.com/johannesjo/sp2/commit/3a2693e))
* **googleDriveSync:** make config work inside config block ([3db2ad4](https://github.com/johannesjo/sp2/commit/3db2ad4))
* **googleDriveSync:** make it work ([b8400fe](https://github.com/johannesjo/sp2/commit/b8400fe))
* **googleDriveSync:** make loading backup work (apart from globalConfig) ([0906737](https://github.com/johannesjo/sp2/commit/0906737))
* **googleDriveSync:** make saving the backup work ([52b2cf2](https://github.com/johannesjo/sp2/commit/52b2cf2))
* **googleDriveSync:** only block other requests for a specified amount of time ([aeea4ec](https://github.com/johannesjo/sp2/commit/aeea4ec))
* **googleDriveSync:** save a local backup before importing data and fall back if something fails ([73f81d2](https://github.com/johannesjo/sp2/commit/73f81d2))
* **googleDriveSync:** save and get last active local ([c01c26e](https://github.com/johannesjo/sp2/commit/c01c26e))
* **googleIntegration:** add boilerplate ([94dac21](https://github.com/johannesjo/sp2/commit/94dac21))
* **googleIntegration:** add snacks for the process ([9cfa045](https://github.com/johannesjo/sp2/commit/9cfa045))
* **googleIntegration:** dirty port first version of google api service from sp1 ([04fd96a](https://github.com/johannesjo/sp2/commit/04fd96a))
* **googleIntegration:** make login work ([eff8177](https://github.com/johannesjo/sp2/commit/eff8177))
* **googleIntegration:** prepare google sync cfg ([dd28aff](https://github.com/johannesjo/sp2/commit/dd28aff))
* **googleTimeSheet:** add {startTime} and {taskTitles} ([5a4571a](https://github.com/johannesjo/sp2/commit/5a4571a))
* **history:** add boilerplate and nice header ([3044e0f](https://github.com/johannesjo/sp2/commit/3044e0f))
* **history:** make active tab work ([90e40ba](https://github.com/johannesjo/sp2/commit/90e40ba))
* **history:** make most basic worklog work ([d4c7994](https://github.com/johannesjo/sp2/commit/d4c7994))
* **history:** refine ([78318b6](https://github.com/johannesjo/sp2/commit/78318b6))
* **history:** refine2 ([8ff868d](https://github.com/johannesjo/sp2/commit/8ff868d))
* **inputDurationSlider:** add animation and fix mobile styling ([2806770](https://github.com/johannesjo/sp2/commit/2806770))
* **jira:** add a link to reply a comment ([b77b036](https://github.com/johannesjo/sp2/commit/b77b036))
* **jira:** add add action for task ith issue ([9eb7659](https://github.com/johannesjo/sp2/commit/9eb7659))
* **jira:** add all types and map data ([8699053](https://github.com/johannesjo/sp2/commit/8699053))
* **jira:** add basic dialog for transitioning issues ([813b28a](https://github.com/johannesjo/sp2/commit/813b28a))
* **jira:** add basic jira issue module ([9bd9bcb](https://github.com/johannesjo/sp2/commit/9bd9bcb))
* **jira:** add better search for jira ([2227e33](https://github.com/johannesjo/sp2/commit/2227e33))
* **jira:** add better search for jira ([45523c6](https://github.com/johannesjo/sp2/commit/45523c6))
* **jira:** add cfg stepper as its own modal ([58ceab8](https://github.com/johannesjo/sp2/commit/58ceab8))
* **jira:** add chrome extension interface ([0dade0c](https://github.com/johannesjo/sp2/commit/0dade0c))
* **jira:** add component based approach to show issue content and header ([57eb538](https://github.com/johannesjo/sp2/commit/57eb538))
* **jira:** add custom config form ([3e49c2a](https://github.com/johannesjo/sp2/commit/3e49c2a))
* **jira:** add effects for transition handling ([125a56e](https://github.com/johannesjo/sp2/commit/125a56e))
* **jira:** add error notifications and fix issue search ([4462445](https://github.com/johannesjo/sp2/commit/4462445))
* **jira:** add first final version of form ([02d190e](https://github.com/johannesjo/sp2/commit/02d190e))
* **jira:** add form config ([bbc493c](https://github.com/johannesjo/sp2/commit/bbc493c))
* **jira:** add help ([6bc7f63](https://github.com/johannesjo/sp2/commit/6bc7f63))
* **jira:** add helper observable checking for missing issues ([8523e5e](https://github.com/johannesjo/sp2/commit/8523e5e))
* **jira:** add issue selector for transition handling ([804fe64](https://github.com/johannesjo/sp2/commit/804fe64))
* **jira:** add jira data to task ([52b5eff](https://github.com/johannesjo/sp2/commit/52b5eff))
* **jira:** add jira for electron ([4fa9daf](https://github.com/johannesjo/sp2/commit/4fa9daf))
* **jira:** add loading spinner to add task bar ([1e86c95](https://github.com/johannesjo/sp2/commit/1e86c95))
* **jira:** add most basic issue info tab ([253b449](https://github.com/johannesjo/sp2/commit/253b449))
* **jira:** add notification when updating settings ([245cbbe](https://github.com/johannesjo/sp2/commit/245cbbe))
* **jira:** add persistence for jira issues ([90cf7c6](https://github.com/johannesjo/sp2/commit/90cf7c6))
* **jira:** add show updates and a way to hide them ([bf58512](https://github.com/johannesjo/sp2/commit/bf58512))
* **jira:** add snack to unblock again ([8b7c073](https://github.com/johannesjo/sp2/commit/8b7c073))
* **jira:** add test credentials to stepper ([f9b66d1](https://github.com/johannesjo/sp2/commit/f9b66d1))
* **jira:** add transforms to requests ([57b408e](https://github.com/johannesjo/sp2/commit/57b408e))
* **jira:** add transition issue ([f623756](https://github.com/johannesjo/sp2/commit/f623756))
* **jira:** adjust max time out ([a1e3eb1](https://github.com/johannesjo/sp2/commit/a1e3eb1))
* **jira:** adjust polling back to normal ([9959a79](https://github.com/johannesjo/sp2/commit/9959a79))
* **jira:** allow for specifying max results ([ad44c2f](https://github.com/johannesjo/sp2/commit/ad44c2f))
* **jira:** auto import issues ([606d756](https://github.com/johannesjo/sp2/commit/606d756))
* **jira:** beautify comments ([7a8e257](https://github.com/johannesjo/sp2/commit/7a8e257))
* **jira:** block requests after one failed ([ed55f32](https://github.com/johannesjo/sp2/commit/ed55f32))
* **jira:** check for minimal settings before firing a jira request ([738fb4a](https://github.com/johannesjo/sp2/commit/738fb4a))
* **jira:** cleanup issue data when task is deleted ([30fdf6e](https://github.com/johannesjo/sp2/commit/30fdf6e))
* **jira:** convert api usage from promise to observable ([7fa3213](https://github.com/johannesjo/sp2/commit/7fa3213))
* **jira:** further improve update issue ([7a63ad3](https://github.com/johannesjo/sp2/commit/7a63ad3))
* **jira:** get complete data when auto importing issues ([1ced867](https://github.com/johannesjo/sp2/commit/1ced867))
* **jira:** get list with jira issues for autocomplete ([e38af8d](https://github.com/johannesjo/sp2/commit/e38af8d))
* **jira:** improve login flow ([88f31f1](https://github.com/johannesjo/sp2/commit/88f31f1))
* **jira:** improve mobile experience for config stepper ([639cbfd](https://github.com/johannesjo/sp2/commit/639cbfd))
* **jira:** improve transition dialog ([9ec70eb](https://github.com/johannesjo/sp2/commit/9ec70eb))
* **jira:** improve update issue behaviour ([a27d1de](https://github.com/johannesjo/sp2/commit/a27d1de))
* **jira:** list changes ([ac4a897](https://github.com/johannesjo/sp2/commit/ac4a897))
* **jira:** load full issue data in second request to speed up search ([d449f46](https://github.com/johannesjo/sp2/commit/d449f46))
* **jira:** make auto transitions work ([92d24f7](https://github.com/johannesjo/sp2/commit/92d24f7))
* **jira:** make issue assignment work ([830a2c0](https://github.com/johannesjo/sp2/commit/830a2c0))
* **jira:** make issue assignment work ([a957d6a](https://github.com/johannesjo/sp2/commit/a957d6a))
* **jira:** make it work with electron ([5cf4954](https://github.com/johannesjo/sp2/commit/5cf4954))
* **jira:** make it work with jira api and chrome extension ([4482667](https://github.com/johannesjo/sp2/commit/4482667))
* **jira:** make saving of jira config work ([f6c72c7](https://github.com/johannesjo/sp2/commit/f6c72c7))
* **jira:** make transitioning work nicely by updating local issue data afterwards ([eccb2db](https://github.com/johannesjo/sp2/commit/eccb2db))
* **jira:** make transitions configurable ([c214d9d](https://github.com/johannesjo/sp2/commit/c214d9d))
* **jira:** minor styling adjustment ([6112e03](https://github.com/johannesjo/sp2/commit/6112e03))
* **jira:** only poll issues if setting is enabled ([a5ec40d](https://github.com/johannesjo/sp2/commit/a5ec40d))
* **jira:** outline config ui ([2aa3ff9](https://github.com/johannesjo/sp2/commit/2aa3ff9))
* **jira:** outline interfaces and constants ([7af4d4c](https://github.com/johannesjo/sp2/commit/7af4d4c))
* **jira:** poll issues for updates ([7623071](https://github.com/johannesjo/sp2/commit/7623071))
* **jira:** prepare issue module ([21b6a03](https://github.com/johannesjo/sp2/commit/21b6a03))
* **jira:** reject timed out promises ([b0286bd](https://github.com/johannesjo/sp2/commit/b0286bd))
* **jira:** remove open state and prepare for model changes ([c9311c3](https://github.com/johannesjo/sp2/commit/c9311c3))
* **jira:** save issue together with task ([a350e93](https://github.com/johannesjo/sp2/commit/a350e93))
* **jira:** show attachments directly ([78dcde9](https://github.com/johannesjo/sp2/commit/78dcde9))
* **jira:** show basic attachments ([46e2c1e](https://github.com/johannesjo/sp2/commit/46e2c1e))
* **jira:** show notification when issue was updated ([31af432](https://github.com/johannesjo/sp2/commit/31af432))
* **jira:** update model ([2c9c79a](https://github.com/johannesjo/sp2/commit/2c9c79a))
* **jira:** use constants for several things ([91388df](https://github.com/johannesjo/sp2/commit/91388df))
* **mainHeader:** add elevation to main toolbar ([f4164d5](https://github.com/johannesjo/sp2/commit/f4164d5))
* **mainHeader:** add most basic navigation ([3627538](https://github.com/johannesjo/sp2/commit/3627538))
* **mainHeader:** add sp icon ([15408c4](https://github.com/johannesjo/sp2/commit/15408c4))
* **mainHeader:** improve project switcher ([5478ed6](https://github.com/johannesjo/sp2/commit/5478ed6))
* **migrate:** make migration work for single project instances and improve confirm ([fb560ad](https://github.com/johannesjo/sp2/commit/fb560ad))
* **migrateV1:** add additional data and fix data not showing up ([e4252ad](https://github.com/johannesjo/sp2/commit/e4252ad))
* **migrateV1:** add basic data for issues ([36b02c6](https://github.com/johannesjo/sp2/commit/36b02c6))
* **migrateV1:** add basic migration models and constants ([dafc13a](https://github.com/johannesjo/sp2/commit/dafc13a))
* **migrateV1:** add most basic migration script ([afdc0a9](https://github.com/johannesjo/sp2/commit/afdc0a9))
* **migrateV1:** allow for worklog items to be reverted to todays task ([9da671e](https://github.com/johannesjo/sp2/commit/9da671e))
* **migrateV1:** also migrate what little old issue data we have ([06938dd](https://github.com/johannesjo/sp2/commit/06938dd))
* **migrateV1:** you only migrate once TM ([63a01e5](https://github.com/johannesjo/sp2/commit/63a01e5))
* **note:** adjust snacks ([a3074a8](https://github.com/johannesjo/sp2/commit/a3074a8))
* **note:** adjust style for modals ([e1dcd3f](https://github.com/johannesjo/sp2/commit/e1dcd3f))
* **note:** fix mobile style for add dialog ([d67e343](https://github.com/johannesjo/sp2/commit/d67e343))
* **notes:** add animation ([46d2925](https://github.com/johannesjo/sp2/commit/46d2925))
* **notes:** add back focus styles ([8628c8d](https://github.com/johannesjo/sp2/commit/8628c8d))
* **notes:** add badge for number of notes ([991e7c1](https://github.com/johannesjo/sp2/commit/991e7c1))
* **notes:** add boilerplate code ([5d77b9a](https://github.com/johannesjo/sp2/commit/5d77b9a))
* **notes:** add drag & drop ordering ([18910bc](https://github.com/johannesjo/sp2/commit/18910bc))
* **notes:** add drawer to display notes in ([7fcef48](https://github.com/johannesjo/sp2/commit/7fcef48))
* **notes:** add focus styles ([9ef9696](https://github.com/johannesjo/sp2/commit/9ef9696))
* **notes:** add most basic notes ([115f0ee](https://github.com/johannesjo/sp2/commit/115f0ee))
* **notes:** add most simple add note dialog ([8c5e307](https://github.com/johannesjo/sp2/commit/8c5e307))
* **notes:** add most simple ui version ([f3ace08](https://github.com/johannesjo/sp2/commit/f3ace08))
* **notes:** add note state and layout state to persistence ([d1347b4](https://github.com/johannesjo/sp2/commit/d1347b4))
* **notes:** add persistence ([648038e](https://github.com/johannesjo/sp2/commit/648038e))
* **notes:** add shortcut config for new add note dialog ([7d20a0f](https://github.com/johannesjo/sp2/commit/7d20a0f))
* **notes:** add submit via ctrl+enter ([7b66dd0](https://github.com/johannesjo/sp2/commit/7b66dd0))
* **notes:** add to top rather than bottom of list ([5705575](https://github.com/johannesjo/sp2/commit/5705575))
* **notes:** also persist show hide ([ab5d1a8](https://github.com/johannesjo/sp2/commit/ab5d1a8))
* **notes:** connect backdrop click to store action ([55eda9f](https://github.com/johannesjo/sp2/commit/55eda9f))
* **notes:** fix focus behavior for notes ([b03f79b](https://github.com/johannesjo/sp2/commit/b03f79b))
* **notes:** focus added note ([aab8d7a](https://github.com/johannesjo/sp2/commit/aab8d7a))
* **notes:** focus button when panel is opened ([1baedee](https://github.com/johannesjo/sp2/commit/1baedee))
* **notes:** improve styling ([5b64abf](https://github.com/johannesjo/sp2/commit/5b64abf))
* **notes:** improve styling ([c604487](https://github.com/johannesjo/sp2/commit/c604487))
* **notes:** improve styling a bit ([d7416dc](https://github.com/johannesjo/sp2/commit/d7416dc))
* **notes:** improve styling further ([d52c559](https://github.com/johannesjo/sp2/commit/d52c559))
* **notes:** limit drag and drop to button ([c2fc305](https://github.com/johannesjo/sp2/commit/c2fc305))
* **notes:** make markdown parsing optional ([49f997d](https://github.com/johannesjo/sp2/commit/49f997d))
* **notes:** minor ui improvements ([0a44398](https://github.com/johannesjo/sp2/commit/0a44398))
* **notes:** prevent double submits ([8c445fb](https://github.com/johannesjo/sp2/commit/8c445fb))
* **notes:** remove ms for initial date value ([1935321](https://github.com/johannesjo/sp2/commit/1935321))
* **notes:** replace direct edit with modal ([9e7392f](https://github.com/johannesjo/sp2/commit/9e7392f))
* **notes:** save note to session storage ([4a49db6](https://github.com/johannesjo/sp2/commit/4a49db6))
* **notes:** style notes and add delete functionality ([ba8f8e2](https://github.com/johannesjo/sp2/commit/ba8f8e2))
* **notes:** styling adjustment ([b9f5146](https://github.com/johannesjo/sp2/commit/b9f5146))
* **notes:** styling adjustments ([ba06eeb](https://github.com/johannesjo/sp2/commit/ba06eeb))
* **notes:** update styling ([113d255](https://github.com/johannesjo/sp2/commit/113d255))
* **project:** add dialog for project creation ([9de7157](https://github.com/johannesjo/sp2/commit/9de7157))
* **project:** add notifications when deleting or creating projects ([28db914](https://github.com/johannesjo/sp2/commit/28db914))
* **project:** add project page boilerplate ([210f4b1](https://github.com/johannesjo/sp2/commit/210f4b1))
* **project:** add project switcher ([347c6bd](https://github.com/johannesjo/sp2/commit/347c6bd))
* **project:** add store stuff fore projects ([ecec2d1](https://github.com/johannesjo/sp2/commit/ecec2d1))
* **project:** beautify project page ([b4fa5b7](https://github.com/johannesjo/sp2/commit/b4fa5b7))
* **project:** improve saving dialog ([72e1a92](https://github.com/johannesjo/sp2/commit/72e1a92))
* **project:** make deleting of projects work ([95f8641](https://github.com/johannesjo/sp2/commit/95f8641))
* **project:** make editing of projects work ([72078ae](https://github.com/johannesjo/sp2/commit/72078ae))
* **project:** make loading and saving tasks work ([2415545](https://github.com/johannesjo/sp2/commit/2415545))
* **project:** make project switcher work for new projects ([dd9342b](https://github.com/johannesjo/sp2/commit/dd9342b))
* **project:** make saving and loading projects work ([e520761](https://github.com/johannesjo/sp2/commit/e520761))
* **project:** make task form work ([21713f1](https://github.com/johannesjo/sp2/commit/21713f1))
* **project:** persist google time sheet settings ([5c09b7e](https://github.com/johannesjo/sp2/commit/5c09b7e))
* **pwa:** add google fonts to cached assets ([e6687cb](https://github.com/johannesjo/sp2/commit/e6687cb))
* **reminder:** add better reminder icons ([3eb58be](https://github.com/johannesjo/sp2/commit/3eb58be))
* **reminders:** add basic service to communicate with worker ([c2e347f](https://github.com/johannesjo/sp2/commit/c2e347f))
* **reminders:** add boilerplate for add reminder dialog ([835be4c](https://github.com/johannesjo/sp2/commit/835be4c))
* **reminders:** add boilerplate for view note reminder dialog ([de682e0](https://github.com/johannesjo/sp2/commit/de682e0))
* **reminders:** add buttons and functionality for reminder view ([0da1840](https://github.com/johannesjo/sp2/commit/0da1840))
* **reminders:** add logic for showing a limited number of messages for period ([a1bf882](https://github.com/johannesjo/sp2/commit/a1bf882))
* **reminders:** add most basic worker logic for reminding ([c0c50f6](https://github.com/johannesjo/sp2/commit/c0c50f6))
* **reminders:** add most simple add reminder dialog ([56cab04](https://github.com/johannesjo/sp2/commit/56cab04))
* **reminders:** add persistence ([44a2b00](https://github.com/johannesjo/sp2/commit/44a2b00))
* **reminders:** add update method ([73297f9](https://github.com/johannesjo/sp2/commit/73297f9))
* **reminders:** also delete reminders when note was deleted ([b3acd93](https://github.com/johannesjo/sp2/commit/b3acd93))
* **reminders:** also focus electron window on reminder ([10fb83e](https://github.com/johannesjo/sp2/commit/10fb83e))
* **reminders:** display note inside reminder dialog ([a3e4360](https://github.com/johannesjo/sp2/commit/a3e4360))
* **reminders:** don't show future reminders ([6438e7f](https://github.com/johannesjo/sp2/commit/6438e7f))
* **reminders:** fix some quirks ([75d8703](https://github.com/johannesjo/sp2/commit/75d8703))
* **reminders:** improve worker logic ([4fe4375](https://github.com/johannesjo/sp2/commit/4fe4375))
* **reminders:** only show single dialog for note reminders ([7bef966](https://github.com/johannesjo/sp2/commit/7bef966))
* **reminders:** plan out model ([975980e](https://github.com/johannesjo/sp2/commit/975980e))
* **reminders:** refactor stuff to service ([fc90fa4](https://github.com/johannesjo/sp2/commit/fc90fa4))
* **reminders:** remove directly from note context menu ([069a5ed](https://github.com/johannesjo/sp2/commit/069a5ed))
* **reminders:** set restore focus for all dialogs ([52f761e](https://github.com/johannesjo/sp2/commit/52f761e))
* **reminders:** show indication when a note has a reminder ([c3a0330](https://github.com/johannesjo/sp2/commit/c3a0330))
* **snack:** add custom icon support ([53ee30c](https://github.com/johannesjo/sp2/commit/53ee30c))
* **snack:** add most basic snack ([57f4c69](https://github.com/johannesjo/sp2/commit/57f4c69))
* **snack:** improve on snacks ([721d142](https://github.com/johannesjo/sp2/commit/721d142))
* **speedDial:** add speed dial to access settings page ([12c25ec](https://github.com/johannesjo/sp2/commit/12c25ec))
* **sync:** improve error ([6751433](https://github.com/johannesjo/sp2/commit/6751433))
* **sync:** not including all data ([f951e69](https://github.com/johannesjo/sp2/commit/f951e69))
* **task:** add created field to task ([0e2e15f](https://github.com/johannesjo/sp2/commit/0e2e15f))
* **task:** improve mobile styling but only using a single line and moving buttons into the menu ([70a018a](https://github.com/johannesjo/sp2/commit/70a018a))
* **task:** properly update parentId when moving sub task ([6947f19](https://github.com/johannesjo/sp2/commit/6947f19))
* **task:** properly update time estimate on parent if moving sub task ([f608178](https://github.com/johannesjo/sp2/commit/f608178))
* **task:** remove drag handle size for mobile ([6871ce5](https://github.com/johannesjo/sp2/commit/6871ce5))
* **taskAttachments:** add cool image zoom ([e932e94](https://github.com/johannesjo/sp2/commit/e932e94))
* **taskAttachments:** add cool image zoom also for bookmarks ([17875ca](https://github.com/johannesjo/sp2/commit/17875ca))
* **taskAttachments:** add model and store ([1f0c996](https://github.com/johannesjo/sp2/commit/1f0c996))
* **taskAttachments:** improve loading attachment data ([be04065](https://github.com/johannesjo/sp2/commit/be04065))
* **taskAttachments:** make saving and loading attachments work ([bd396d9](https://github.com/johannesjo/sp2/commit/bd396d9))
* **taskAttachments:** prepare list and item loading ([69e040f](https://github.com/johannesjo/sp2/commit/69e040f))
* **taskAttachments:** show attachments in a cool way ([1d7ade0](https://github.com/johannesjo/sp2/commit/1d7ade0))
* **tasks:** add animations for adding and removing tasks ([4574d93](https://github.com/johannesjo/sp2/commit/4574d93))
* **tasks:** add backlog and todays tasks for moving task ([9d5de6e](https://github.com/johannesjo/sp2/commit/9d5de6e))
* **tasks:** add basic keyboard interface for tasks ([31d05dc](https://github.com/johannesjo/sp2/commit/31d05dc))
* **tasks:** add basic planning mode ([deb67e1](https://github.com/johannesjo/sp2/commit/deb67e1))
* **tasks:** add boilerplate for move up and down ([dc860f5](https://github.com/johannesjo/sp2/commit/dc860f5))
* **tasks:** add border ([d8d50df](https://github.com/johannesjo/sp2/commit/d8d50df))
* **tasks:** add border to notes panel ([83d888c](https://github.com/johannesjo/sp2/commit/83d888c))
* **tasks:** add daily planner and backlog tasks ([74becfd](https://github.com/johannesjo/sp2/commit/74becfd))
* **tasks:** add debug data to additional info ([dca7667](https://github.com/johannesjo/sp2/commit/dca7667))
* **tasks:** add dynamic templates for issue tab ([49af450](https://github.com/johannesjo/sp2/commit/49af450))
* **tasks:** add keyboard shortcut for switching between adding to backlog and to todays list for add task bar ([cd4d72a](https://github.com/johannesjo/sp2/commit/cd4d72a))
* **tasks:** add little animation for when a task switches a list ([f53f871](https://github.com/johannesjo/sp2/commit/f53f871))
* **tasks:** add model and action for focusTaskId ([2d78b12](https://github.com/johannesjo/sp2/commit/2d78b12))
* **tasks:** add move up and down for sub tasks ([7747964](https://github.com/johannesjo/sp2/commit/7747964))
* **tasks:** add new layout for additional task infos ([8bb6add](https://github.com/johannesjo/sp2/commit/8bb6add))
* **tasks:** add nice little done animation ([4f9d3d0](https://github.com/johannesjo/sp2/commit/4f9d3d0))
* **tasks:** add nicer drag handle icon ([acae326](https://github.com/johannesjo/sp2/commit/acae326))
* **tasks:** add no wrap to time ([e9e49a4](https://github.com/johannesjo/sp2/commit/e9e49a4))
* **tasks:** add progress bar and theme helpers ([0d30699](https://github.com/johannesjo/sp2/commit/0d30699))
* **tasks:** add several task keyboard shortcuts ([30d5ce7](https://github.com/johannesjo/sp2/commit/30d5ce7))
* **tasks:** add shortcut for focussing task ([bcd94d9](https://github.com/johannesjo/sp2/commit/bcd94d9))
* **tasks:** add shortcut for moving from and to backlog ([ada61f1](https://github.com/johannesjo/sp2/commit/ada61f1))
* **tasks:** add shortcut to focus last active task ([7ea6ec3](https://github.com/johannesjo/sp2/commit/7ea6ec3))
* **tasks:** add some debugging info ([8f5c64d](https://github.com/johannesjo/sp2/commit/8f5c64d))
* **tasks:** add task selection component ([340f6e3](https://github.com/johannesjo/sp2/commit/340f6e3))
* **tasks:** add tt uppercase to first letter of title ([e3cd901](https://github.com/johannesjo/sp2/commit/e3cd901))
* **tasks:** add undo deletion ([b89ef8a](https://github.com/johannesjo/sp2/commit/b89ef8a))
* **tasks:** add update issue button and connect for git ([6008ad0](https://github.com/johannesjo/sp2/commit/6008ad0))
* **tasks:** add upsert jira issue ([8d9c18c](https://github.com/johannesjo/sp2/commit/8d9c18c))
* **tasks:** adjust icon color ([408e0ae](https://github.com/johannesjo/sp2/commit/408e0ae))
* **tasks:** adjust styling for time ([24b7c6d](https://github.com/johannesjo/sp2/commit/24b7c6d))
* **tasks:** adjust styling for time values ([2981129](https://github.com/johannesjo/sp2/commit/2981129))
* **tasks:** allow for adding sub tasks via shortcut when focus is on a sub task ([8838158](https://github.com/johannesjo/sp2/commit/8838158))
* **tasks:** allow for time spent via short syntax ([31d8d45](https://github.com/johannesjo/sp2/commit/31d8d45))
* **tasks:** allow switching between adding to backlog and to todays list for add task bar ([2e03771](https://github.com/johannesjo/sp2/commit/2e03771))
* **tasks:** also allow adding tasks while searching ([dd196b5](https://github.com/johannesjo/sp2/commit/dd196b5))
* **tasks:** beautify collapsible sub tasks button and add keyboard navigation for the feature ([295fcfb](https://github.com/johannesjo/sp2/commit/295fcfb))
* **tasks:** beautify done tasks ([157a641](https://github.com/johannesjo/sp2/commit/157a641))
* **tasks:** beautify for mobile just a bit ([d12798a](https://github.com/johannesjo/sp2/commit/d12798a))
* **tasks:** change keyboard navigation selected style ([f793bdc](https://github.com/johannesjo/sp2/commit/f793bdc))
* **tasks:** change play icon ([4b9e264](https://github.com/johannesjo/sp2/commit/4b9e264))
* **tasks:** connect ui only model ([35bfe7f](https://github.com/johannesjo/sp2/commit/35bfe7f))
* **tasks:** connect update issue button for jira ([1a99f62](https://github.com/johannesjo/sp2/commit/1a99f62))
* **tasks:** copy over parent task time stuff when first sub task is created ([a305791](https://github.com/johannesjo/sp2/commit/a305791))
* **tasks:** copy over time stuff from sub task, if last sub task was deleted ([dad898e](https://github.com/johannesjo/sp2/commit/dad898e))
* **tasks:** deal with toggle start via effect ([76ff078](https://github.com/johannesjo/sp2/commit/76ff078))
* **tasks:** distinguish task additional info by using a larger border radius ([8b8a456](https://github.com/johannesjo/sp2/commit/8b8a456))
* **tasks:** don't update timeSpent if none given for short syntax ([5a6f2a1](https://github.com/johannesjo/sp2/commit/5a6f2a1))
* **tasks:** fine tune styling ([6bae7d7](https://github.com/johannesjo/sp2/commit/6bae7d7))
* **tasks:** fix add task bar for non jira tasks ([6d7527c](https://github.com/johannesjo/sp2/commit/6d7527c))
* **tasks:** fix minor is done issue for task when dragging ([3b69fd3](https://github.com/johannesjo/sp2/commit/3b69fd3))
* **tasks:** fix minor issue and make tasks focusable ([fe35c60](https://github.com/johannesjo/sp2/commit/fe35c60))
* **tasks:** focus sub task on creation ([a5fefa4](https://github.com/johannesjo/sp2/commit/a5fefa4))
* **tasks:** get working today quicker ([ed6a274](https://github.com/johannesjo/sp2/commit/ed6a274))
* **tasks:** handle next task selection completely via effects ([aca8d89](https://github.com/johannesjo/sp2/commit/aca8d89))
* **tasks:** improve animation skip ([4c970f4](https://github.com/johannesjo/sp2/commit/4c970f4))
* **tasks:** improve button animations ([b63d9b3](https://github.com/johannesjo/sp2/commit/b63d9b3))
* **tasks:** improve daily planner view by adding tasks to the bottom of the list ([e2aa817](https://github.com/johannesjo/sp2/commit/e2aa817))
* **tasks:** improve drag handle ([63c3970](https://github.com/johannesjo/sp2/commit/63c3970))
* **tasks:** improve estimate remaining ([6ff3fb2](https://github.com/johannesjo/sp2/commit/6ff3fb2))
* **tasks:** improve focus behavior and add for work view ([0b6a5a7](https://github.com/johannesjo/sp2/commit/0b6a5a7))
* **tasks:** improve keyboard nav ([173c9b1](https://github.com/johannesjo/sp2/commit/173c9b1))
* **tasks:** improve start task behavior ([717590b](https://github.com/johannesjo/sp2/commit/717590b))
* **tasks:** improve styling for current ([6c11950](https://github.com/johannesjo/sp2/commit/6c11950))
* **tasks:** improve task list structure ([116ce5d](https://github.com/johannesjo/sp2/commit/116ce5d))
* **tasks:** improve task notes ([7a0d971](https://github.com/johannesjo/sp2/commit/7a0d971))
* **tasks:** improve time estimates readability ([3a37829](https://github.com/johannesjo/sp2/commit/3a37829))
* **tasks:** improve ui by only showing progress bar only for current task ([99297c1](https://github.com/johannesjo/sp2/commit/99297c1))
* **tasks:** make everything a selector ([505c93b](https://github.com/johannesjo/sp2/commit/505c93b))
* **tasks:** make focus work properly ([060b398](https://github.com/johannesjo/sp2/commit/060b398))
* **tasks:** make issue work with dynamic data ([32e5a4d](https://github.com/johannesjo/sp2/commit/32e5a4d))
* **tasks:** make play less prominent ([7aeebc2](https://github.com/johannesjo/sp2/commit/7aeebc2))
* **tasks:** make progress bar visible for current ([01abc5e](https://github.com/johannesjo/sp2/commit/01abc5e))
* **tasks:** make sub tasks expandable ([6162e68](https://github.com/johannesjo/sp2/commit/6162e68))
* **tasks:** make task data more robust ([9d7ac3e](https://github.com/johannesjo/sp2/commit/9d7ac3e))
* **tasks:** make time values less prominent ([3c57fe7](https://github.com/johannesjo/sp2/commit/3c57fe7))
* **tasks:** make time values less prominent2 ([268fe6e](https://github.com/johannesjo/sp2/commit/268fe6e))
* **tasks:** merge AddTask and AddTaskWithIssue into one aciton ([c992bd2](https://github.com/johannesjo/sp2/commit/c992bd2))
* **tasks:** minor styling adjustment ([c25def5](https://github.com/johannesjo/sp2/commit/c25def5))
* **tasks:** minor styling adjustments ([1b57ccb](https://github.com/johannesjo/sp2/commit/1b57ccb))
* **tasks:** minor styling adjustments ([308bb9c](https://github.com/johannesjo/sp2/commit/308bb9c))
* **tasks:** move all selection logic to selectors ([16dca90](https://github.com/johannesjo/sp2/commit/16dca90))
* **tasks:** next task selection via effect for move to backlog ([5f4c1b6](https://github.com/johannesjo/sp2/commit/5f4c1b6))
* **tasks:** next task selection via effect for update task ([5798a4e](https://github.com/johannesjo/sp2/commit/5798a4e))
* **tasks:** persist current tab index for task ([39e0052](https://github.com/johannesjo/sp2/commit/39e0052))
* **tasks:** persist showNotes ([620ff15](https://github.com/johannesjo/sp2/commit/620ff15))
* **tasks:** prepare ui only model ([c85ffef](https://github.com/johannesjo/sp2/commit/c85ffef))
* **tasks:** refactor dispatch ([c939adc](https://github.com/johannesjo/sp2/commit/c939adc))
* **tasks:** refocus last active task after add task bar is hidden ([3208e89](https://github.com/johannesjo/sp2/commit/3208e89))
* **tasks:** restyle outline ([5f32636](https://github.com/johannesjo/sp2/commit/5f32636))
* **tasks:** save data when restoring tasks from archive ([a8895e4](https://github.com/johannesjo/sp2/commit/a8895e4))
* **tasks:** set focus to next task if task was marked as done ([d6ee22e](https://github.com/johannesjo/sp2/commit/d6ee22e))
* **tasks:** set task to undone if started ([33272f6](https://github.com/johannesjo/sp2/commit/33272f6))
* **tasks:** style add task bar and add it globally ([3f94d04](https://github.com/johannesjo/sp2/commit/3f94d04))
* **tasks:** test other syntax ([09ccd76](https://github.com/johannesjo/sp2/commit/09ccd76))
* **tasks:** update deletion ([3f18f1f](https://github.com/johannesjo/sp2/commit/3f18f1f))
* **tasks:** update parent time estimate when child is updated ([522563e](https://github.com/johannesjo/sp2/commit/522563e))
* **tasks:** use play_arrow again ([ef3eeba](https://github.com/johannesjo/sp2/commit/ef3eeba))
* **tasks:** use primary rather than accent color for current task ([89f0093](https://github.com/johannesjo/sp2/commit/89f0093))
* **tasks:** zoom in on current task and style inline edit ([cdeafba](https://github.com/johannesjo/sp2/commit/cdeafba))
* **theming:** add theme switching ([e1761e5](https://github.com/johannesjo/sp2/commit/e1761e5))
* **timeSheetExport:** add most simple dialog ([3f31e35](https://github.com/johannesjo/sp2/commit/3f31e35))
* **timeSheetExport:** better handling for google auth ([8440152](https://github.com/johannesjo/sp2/commit/8440152))
* **timeSheetExport:** fix template ([c7ad410](https://github.com/johannesjo/sp2/commit/c7ad410))
* **timeSheetExport:** get rid of most of the errors ([7c96e05](https://github.com/johannesjo/sp2/commit/7c96e05))
* **timeSheetExport:** half way there ([bfc79e8](https://github.com/johannesjo/sp2/commit/bfc79e8))
* **timeSheetExport:** make everything work ([c17a7bb](https://github.com/johannesjo/sp2/commit/c17a7bb))
* **timeSheetExport:** update button dialog alignment ([0ecfefe](https://github.com/johannesjo/sp2/commit/0ecfefe))
* **timeTracking:** add boilerplate ([8dfd452](https://github.com/johannesjo/sp2/commit/8dfd452))
* **timeTracking:** add estimate remaining ([004eba3](https://github.com/johannesjo/sp2/commit/004eba3))
* **timeTracking:** add most basic time tracking ([5a3979c](https://github.com/johannesjo/sp2/commit/5a3979c))
* **timeTracking:** add ms to string pipe and use it for view ([ba59ed4](https://github.com/johannesjo/sp2/commit/ba59ed4))
* **timeTracking:** add working today ([5c3faa6](https://github.com/johannesjo/sp2/commit/5c3faa6))
* **timeTracking:** fix time input ([2cc8199](https://github.com/johannesjo/sp2/commit/2cc8199))
* **worklog:** allow for restoring task together with sub tasks from worklog ([fc22108](https://github.com/johannesjo/sp2/commit/fc22108))
* **worklog:** also display parent and prepare restoring parent including sub tasks ([aff7ca4](https://github.com/johannesjo/sp2/commit/aff7ca4))
* replace days with hours ([e3b623e](https://github.com/johannesjo/sp2/commit/e3b623e))
* **worklog:** remove restore button as long as it is not implemented ([0ef1596](https://github.com/johannesjo/sp2/commit/0ef1596))
* **worklog:** sort items ([ccd76b2](https://github.com/johannesjo/sp2/commit/ccd76b2))
* **worklog:** update sub task styling ([c4484c0](https://github.com/johannesjo/sp2/commit/c4484c0))
* **workView:** add header ([b81476c](https://github.com/johannesjo/sp2/commit/b81476c))
* **workView:** hide backlog until pulled out ([1dfb41a](https://github.com/johannesjo/sp2/commit/1dfb41a))
* **workView:** keep backlog tasks in memory for better performance ([cfc065c](https://github.com/johannesjo/sp2/commit/cfc065c))
* prepare app storage ([09ded37](https://github.com/johannesjo/sp2/commit/09ded37))
* prepare daily summary ([207b879](https://github.com/johannesjo/sp2/commit/207b879))
* prepare drag & drop ([18998e1](https://github.com/johannesjo/sp2/commit/18998e1))
* prepare global keyboard shortcuts module ([27bb737](https://github.com/johannesjo/sp2/commit/27bb737))
* prepare issue connection ([d658885](https://github.com/johannesjo/sp2/commit/d658885))
* prepare mapping of jira changelog ([1039071](https://github.com/johannesjo/sp2/commit/1039071))
* prepare meta reducer to better handle undo redo ([97d012c](https://github.com/johannesjo/sp2/commit/97d012c))
* prepare service worker stuff ([10d1973](https://github.com/johannesjo/sp2/commit/10d1973))
* prepare svg progress around play button ([5a7c08f](https://github.com/johannesjo/sp2/commit/5a7c08f))
* prevent errors when there is no issue data ([39add55](https://github.com/johannesjo/sp2/commit/39add55))
* print out storage info at beginning ([07d2e2a](https://github.com/johannesjo/sp2/commit/07d2e2a))
* raise debounce time for jira requests ([9a98df6](https://github.com/johannesjo/sp2/commit/9a98df6))
* redo idle time polls ([690f621](https://github.com/johannesjo/sp2/commit/690f621))
* redo main header navigation ([1d86701](https://github.com/johannesjo/sp2/commit/1d86701))
* refactor ipc events and add global shortcut for how hide ([50b91f0](https://github.com/johannesjo/sp2/commit/50b91f0))
* refine new split backlog ([0d0f657](https://github.com/johannesjo/sp2/commit/0d0f657))
* remove auto start task ([989f2ca](https://github.com/johannesjo/sp2/commit/989f2ca))
* remove dialogs as ngrx module ([20edb6d](https://github.com/johannesjo/sp2/commit/20edb6d))
* remove old cfg components and beautify config form ([5ff1e94](https://github.com/johannesjo/sp2/commit/5ff1e94))
* remove redundant add task button for work view header for desktop ([fd26426](https://github.com/johannesjo/sp2/commit/fd26426))
* remove speed dial menu ([c27b5f3](https://github.com/johannesjo/sp2/commit/c27b5f3))
* remove tracked idle time when idle ([7f75346](https://github.com/johannesjo/sp2/commit/7f75346))
* rename all ipc event constants and add notify module ([a055102](https://github.com/johannesjo/sp2/commit/a055102))
* restyle nav ([7ebbbb3](https://github.com/johannesjo/sp2/commit/7ebbbb3))
* restyle task ([ab6b67c](https://github.com/johannesjo/sp2/commit/ab6b67c))
* save complete tasks to archive to restore them later including issue models ([7c9a4fa](https://github.com/johannesjo/sp2/commit/7c9a4fa))
* save tmp project to session storage ([c3757d4](https://github.com/johannesjo/sp2/commit/c3757d4))
* set circle value from input ([fe53492](https://github.com/johannesjo/sp2/commit/fe53492))
* show errors for local storage quota ([ca59622](https://github.com/johannesjo/sp2/commit/ca59622))
* slightly adjust styling for main header ([7deee26](https://github.com/johannesjo/sp2/commit/7deee26))
* slightly improve page transitions ([d302ba5](https://github.com/johannesjo/sp2/commit/d302ba5))
* slightly improve router transition ([c5db76d](https://github.com/johannesjo/sp2/commit/c5db76d))
* slightly improve ui ([4ed796d](https://github.com/johannesjo/sp2/commit/4ed796d))
* some fine tuning for work view ([ce76659](https://github.com/johannesjo/sp2/commit/ce76659))
* start first task on ready for work ([564d8e8](https://github.com/johannesjo/sp2/commit/564d8e8))
* sync to google if enabled before closing app ([ef31e8b](https://github.com/johannesjo/sp2/commit/ef31e8b))
* unset current if it is marked as done ([3d988d1](https://github.com/johannesjo/sp2/commit/3d988d1))
* unset current on finish day ([11f202d](https://github.com/johannesjo/sp2/commit/11f202d))
* unset current task when loading task state ([5d0f4d1](https://github.com/johannesjo/sp2/commit/5d0f4d1))
* update assets and manifest settings ([c2a75c5](https://github.com/johannesjo/sp2/commit/c2a75c5))
* update default shortcuts ([bb654ae](https://github.com/johannesjo/sp2/commit/bb654ae))
* update keyboard shortcuts texts and config ([5ddd6e9](https://github.com/johannesjo/sp2/commit/5ddd6e9))
* update project list ([205b6ad](https://github.com/johannesjo/sp2/commit/205b6ad))
* update rxjs usage to latest version compatibility ([556cc2d](https://github.com/johannesjo/sp2/commit/556cc2d))
* update storage report ([9cd124c](https://github.com/johannesjo/sp2/commit/9cd124c))
* use button instead of checkbox for marking tasks as done ([54655f4](https://github.com/johannesjo/sp2/commit/54655f4))
* use session storage for tmp backup ([0e7103f](https://github.com/johannesjo/sp2/commit/0e7103f))
* use standard scrollbars for mobile ([7ac1a01](https://github.com/johannesjo/sp2/commit/7ac1a01))



