(function(){"use strict";var e=typeof window!="undefined"?window:global;if(typeof e.require=="function")return;var t={},n={},r=function(e,t){return{}.hasOwnProperty.call(e,t)},i=function(e,t){var n=[],r,i;/^\.\.?(\/|$)/.test(t)?r=[e,t].join("/").split("/"):r=t.split("/");for(var s=0,o=r.length;s<o;s++)i=r[s],i===".."?n.pop():i!=="."&&i!==""&&n.push(i);return n.join("/")},s=function(e){return e.split("/").slice(0,-1).join("/")},o=function(t){return function(n){var r=s(t),o=i(r,n);return e.require(o)}},u=function(e,t){var r={id:e,exports:{}};t(r.exports,o(e),r);var i=n[e]=r.exports;return i},a=function(e){var s=i(e,".");if(r(n,s))return n[s];if(r(t,s))return u(s,t[s]);var o=i(s,"./index");if(r(n,o))return n[o];if(r(t,o))return u(o,t[o]);throw new Error('Cannot find module "'+e+'"')},f=function(e,n){if(typeof e=="object")for(var i in e)r(e,i)&&(t[i]=e[i]);else t[e]=n};e.require=a,e.require.define=f,e.require.register=f,e.require.brunch=!0})(),window.require.register("test/collections/brackets/games-test",function(e,t,n){var r,i,s;r=t("models/base/collection"),i=t("models/brackets/game"),s=t("collections/brackets/games"),describe("Brackets/game",function(){return beforeEach(function(){return this.model=new i,this.collection=new s}),afterEach(function(){return this.model.dispose(),this.collection.dispose()})})}),window.require.register("test/collections/brackets/group-stages-test",function(e,t,n){var r,i,s;r=t("models/base/collection"),i=t("models/brackets/group-stage"),s=t("collections/brackets/group-stages"),describe("Brackets/group",function(){return beforeEach(function(){return this.model=new i,this.collection=new s}),afterEach(function(){return this.model.dispose(),this.collection.dispose()})})}),window.require.register("test/collections/brackets/matches-test",function(e,t,n){var r,i,s;r=t("models/base/collection"),i=t("models/brackets/match"),s=t("collections/brackets/matches"),describe("Brackets/match",function(){return beforeEach(function(){return this.model=new i,this.collection=new s}),afterEach(function(){return this.model.dispose(),this.collection.dispose()})})}),window.require.register("test/collections/brackets/teams-test",function(e,t,n){var r,i,s;r=t("models/base/collection"),i=t("models/brackets/team"),s=t("collections/brackets/teams"),describe("Brackets/team",function(){return beforeEach(function(){return this.model=new i,this.collection=new s}),afterEach(function(){return this.model.dispose(),this.collection.dispose()})})}),window.require.register("test/collections/tools-test",function(e,t,n){var r,i,s;r=t("models/base/collection"),i=t("models/tool"),s=t("collections/tools"),describe("Tools",function(){return beforeEach(function(){return this.model=new i,this.collection=new s}),afterEach(function(){return this.model.dispose(),this.collection.dispose()})})}),window.require.register("test/models/admin-tools-test",function(e,t,n){var r;r=t("models/admin-tools"),describe("AdminTools",function(){return beforeEach(function(){return this.model=new r})})}),window.require.register("test/models/admin-workspace-test",function(e,t,n){var r;r=t("models/admin-workspace"),describe("AdminWorkspace",function(){return beforeEach(function(){return this.model=new r})})}),window.require.register("test/models/brackets/bracket-test",function(e,t,n){var r;r=t("models/brackets/bracket"),describe("Brackets/bracket",function(){return beforeEach(function(){return this.model=new r})})}),window.require.register("test/models/brackets/event-test",function(e,t,n){var r;r=t("models/brackets/event"),describe("Brackets/event",function(){return beforeEach(function(){return this.model=new r})})}),window.require.register("test/models/brackets/game-test",function(e,t,n){var r;r=t("models/brackets/game"),describe("Brackets/game",function(){return beforeEach(function(){return this.model=new r})})}),window.require.register("test/models/brackets/group-stage-test",function(e,t,n){var r;r=t("models/brackets/group-stage"),describe("Brackets/group",function(){return beforeEach(function(){return this.model=new r})})}),window.require.register("test/models/brackets/match-test",function(e,t,n){var r;r=t("models/brackets/match"),describe("Brackets/match",function(){return beforeEach(function(){return this.model=new r})})}),window.require.register("test/models/brackets/matchup-test",function(e,t,n){var r;r=t("models/brackets/matchup"),describe("Matchup",function(){return beforeEach(function(){return this.model=new r})})}),window.require.register("test/models/brackets/team-test",function(e,t,n){var r;r=t("models/brackets/team"),describe("Brackets/team",function(){return beforeEach(function(){return this.model=new r})})}),window.require.register("test/models/double-elim-generator-test",function(e,t,n){var r;r=t("models/double-elim-generator"),describe("DoubleElimGenerator",function(){return beforeEach(function(){return this.model=new r})})}),window.require.register("test/models/group-generator-test",function(e,t,n){var r;r=t("models/group-generator"),describe("GroupGenerator",function(){return beforeEach(function(){return this.model=new r})})}),window.require.register("test/models/match-mutator-test",function(e,t,n){var r;r=t("models/match-mutator"),describe("MatchMutator",function(){return beforeEach(function(){return this.model=new r})})}),window.require.register("test/models/single-elim-wizard-test",function(e,t,n){var r;r=t("models/single-elim-wizard"),describe("SingleElimWizard",function(){return beforeEach(function(){return this.model=new r({numPlayers:16})}),it("should be a non empty array",function(){return expect(this.model.generate().length).to.be.above(0)}),it("should have length of n-1",function(){return expect(this.model.generate()).to.have.length(15)})})}),window.require.register("test/models/team-auto-seeder-test",function(e,t,n){var r;r=t("models/team-auto-seeder"),describe("TeamAutoSeeder",function(){return beforeEach(function(){return this.model=new r})})}),window.require.register("test/models/tool-test",function(e,t,n){var r;r=t("models/tool"),describe("Tool",function(){return beforeEach(function(){return this.model=new r})})}),window.require.register("test/test-helpers",function(e,t,n){var r,i;r=t("chai"),i=t("sinon-chai"),r.use(i),n.exports={expect:r.expect,sinon:t("sinon")}}),window.require.register("test/views/admin-toolbar-view-test",function(e,t,n){var r;r=t("views/admin-toolbar-view"),describe("AdminToolbarView",function(){return beforeEach(function(){return this.view=new r})})}),window.require.register("test/views/admin-workspace-view-test",function(e,t,n){var r;r=t("views/admin-workspace-view"),describe("AdminWorkspaceView",function(){return beforeEach(function(){return this.view=new r})})}),window.require.register("test/views/bracket-editor-view-test",function(e,t,n){var r;r=t("views/bracket-editor-view"),describe("BrackerEditorView",function(){return beforeEach(function(){return this.view=new r})})}),window.require.register("test/views/brackets/bracket-view-test",function(e,t,n){var r;r=t("views/brackets/bracket-view"),describe("bracketView",function(){return beforeEach(function(){return this.view=new r})})}),window.require.register("test/views/brackets/group-view-test",function(e,t,n){var r;r=t("views/brackets/group-view"),describe("Brackets/groupView",function(){return beforeEach(function(){return this.view=new r})})}),window.require.register("test/views/brackets/match-view-test",function(e,t,n){var r;r=t("views/brackets/match-view"),describe("MatchView",function(){return beforeEach(function(){return this.view=new r})})}),window.require.register("test/views/header-view-test",function(e,t,n){var r,i,s,o={}.hasOwnProperty,u=function(e,t){function r(){this.constructor=e}for(var n in t)o.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};r=t("views/header-view"),s=t("mediator"),i=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return u(t,e),t.prototype.renderTimes=0,t.prototype.render=function(){return t.__super__.render.apply(this,arguments),this.renderTimes+=1},t}(r),describe("HeaderView",function(){return beforeEach(function(){return this.view=new i}),afterEach(function(){return this.view.dispose()}),it("should display 2 links",function(){return expect(this.view.$el.find("a")).to.have.length(2)})})}),window.require.register("test/views/home-page-view-test",function(e,t,n){var r;r=t("views/home-page-view"),describe("HomePageView",function(){return beforeEach(function(){return this.view=new r}),afterEach(function(){return this.view.dispose()}),it("should auto-render",function(){return expect(this.view.$el.find("img")).to.have.length(1)})})}),window.require.register("test/views/tool-menus/group-menu-view-test",function(e,t,n){var r;r=t("views/tool-menus/group-menu-view"),describe("GroupMenuView",function(){return beforeEach(function(){return this.view=new r})})}),window.require.register("test/views/tool-menus/match-menu-view-test",function(e,t,n){var r;r=t("views/tool-menus/match-menu-view"),describe("MatchMenuView",function(){return beforeEach(function(){return this.view=new r})})}),window.require.register("test/views/tool-menus/team-menu-view-test",function(e,t,n){var r;r=t("views/tool-menus/team-menu-view"),describe("TeamMenuView",function(){return beforeEach(function(){return this.view=new r})})}),window.require.register("test/views/tool-menus/wizard-menu-view-test",function(e,t,n){var r;r=t("views/tool-menus/wizard-menu-view"),describe("WizardMenuView",function(){return beforeEach(function(){return this.view=new r})})});var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/collections/brackets/games-test"):!0;valid&&window.require("test/collections/brackets/games-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/collections/brackets/group-stages-test"):!0;valid&&window.require("test/collections/brackets/group-stages-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/collections/brackets/matches-test"):!0;valid&&window.require("test/collections/brackets/matches-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/collections/brackets/teams-test"):!0;valid&&window.require("test/collections/brackets/teams-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/collections/tools-test"):!0;valid&&window.require("test/collections/tools-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/models/admin-tools-test"):!0;valid&&window.require("test/models/admin-tools-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/models/admin-workspace-test"):!0;valid&&window.require("test/models/admin-workspace-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/models/brackets/bracket-test"):!0;valid&&window.require("test/models/brackets/bracket-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/models/brackets/event-test"):!0;valid&&window.require("test/models/brackets/event-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/models/brackets/game-test"):!0;valid&&window.require("test/models/brackets/game-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/models/brackets/group-stage-test"):!0;valid&&window.require("test/models/brackets/group-stage-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/models/brackets/match-test"):!0;valid&&window.require("test/models/brackets/match-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/models/brackets/matchup-test"):!0;valid&&window.require("test/models/brackets/matchup-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/models/brackets/team-test"):!0;valid&&window.require("test/models/brackets/team-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/models/double-elim-generator-test"):!0;valid&&window.require("test/models/double-elim-generator-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/models/group-generator-test"):!0;valid&&window.require("test/models/group-generator-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/models/match-mutator-test"):!0;valid&&window.require("test/models/match-mutator-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/models/single-elim-wizard-test"):!0;valid&&window.require("test/models/single-elim-wizard-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/models/team-auto-seeder-test"):!0;valid&&window.require("test/models/team-auto-seeder-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/models/tool-test"):!0;valid&&window.require("test/models/tool-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/views/admin-toolbar-view-test"):!0;valid&&window.require("test/views/admin-toolbar-view-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/views/admin-workspace-view-test"):!0;valid&&window.require("test/views/admin-workspace-view-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/views/bracket-editor-view-test"):!0;valid&&window.require("test/views/bracket-editor-view-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/views/brackets/bracket-view-test"):!0;valid&&window.require("test/views/brackets/bracket-view-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/views/brackets/group-view-test"):!0;valid&&window.require("test/views/brackets/group-view-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/views/brackets/match-view-test"):!0;valid&&window.require("test/views/brackets/match-view-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/views/header-view-test"):!0;valid&&window.require("test/views/header-view-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/views/home-page-view-test"):!0;valid&&window.require("test/views/home-page-view-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/views/tool-menus/group-menu-view-test"):!0;valid&&window.require("test/views/tool-menus/group-menu-view-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/views/tool-menus/match-menu-view-test"):!0;valid&&window.require("test/views/tool-menus/match-menu-view-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/views/tool-menus/team-menu-view-test"):!0;valid&&window.require("test/views/tool-menus/team-menu-view-test");var hasFilterer=window.brunch&&window.brunch.test&&window.brunch.test.filterer,valid=hasFilterer?window.brunch.test.filterer("test/views/tool-menus/wizard-menu-view-test"):!0;valid&&window.require("test/views/tool-menus/wizard-menu-view-test")