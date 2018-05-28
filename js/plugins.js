// MMenu Starts
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    root.jquery_mmenu_all_js = factory(root.jQuery);
  }
}(this, function(jQuery) {
/*
 * jQuery mmenu v6.1.3
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */
!function(e){function t(){e[n].glbl||(r={$wndw:e(window),$docu:e(document),$html:e("html"),$body:e("body")},s={},a={},o={},e.each([s,a,o],function(e,t){t.add=function(e){e=e.split(" ");for(var n=0,i=e.length;n<i;n++)t[e[n]]=t.mm(e[n])}}),s.mm=function(e){return"mm-"+e},s.add("wrapper menu panels panel nopanel highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen noanimation"),s.umm=function(e){return"mm-"==e.slice(0,3)&&(e=e.slice(3)),e},a.mm=function(e){return"mm-"+e},a.add("parent child"),o.mm=function(e){return e+".mm"},o.add("transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"),e[n]._c=s,e[n]._d=a,e[n]._e=o,e[n].glbl=r)}var n="mmenu",i="6.1.3";if(!(e[n]&&e[n].version>i)){e[n]=function(e,t,n){return this.$menu=e,this._api=["bind","getInstance","initPanels","openPanel","closePanel","closeAllPanels","setSelected"],this.opts=t,this.conf=n,this.vars={},this.cbck={},this.mtch={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initAddons(),this._initExtensions(),this._initMenu(),this._initPanels(),this._initOpened(),this._initAnchors(),this._initMatchMedia(),"function"==typeof this.___debug&&this.___debug(),this},e[n].version=i,e[n].addons={},e[n].uniqueId=0,e[n].defaults={extensions:[],initMenu:function(){},initPanels:function(){},navbar:{add:!0,title:"Menu",titleLink:"parent"},onClick:{setSelected:!0},slidingSubmenus:!0},e[n].configuration={classNames:{divider:"Divider",inset:"Inset",nolistview:"NoListview",nopanel:"NoPanel",panel:"Panel",selected:"Selected",spacer:"Spacer",vertical:"Vertical"},clone:!1,openingInterval:25,panelNodetype:"ul, ol, div",transitionDuration:400},e[n].prototype={getInstance:function(){return this},initPanels:function(e){this._initPanels(e)},openPanel:function(t,i){if(this.trigger("openPanel:before",t),t&&t.length&&(t.is("."+s.panel)||(t=t.closest("."+s.panel)),t.is("."+s.panel))){var o=this;if("boolean"!=typeof i&&(i=!0),t.hasClass(s.vertical))t.add(t.parents("."+s.vertical)).removeClass(s.hidden).parent("li").addClass(s.opened),this.openPanel(t.parents("."+s.panel).not("."+s.vertical).first()),this.trigger("openPanel:start",t),this.trigger("openPanel:finish",t);else{if(t.hasClass(s.opened))return;var r=this.$pnls.children("."+s.panel),l=r.filter("."+s.opened);if(!e[n].support.csstransitions)return l.addClass(s.hidden).removeClass(s.opened),t.removeClass(s.hidden).addClass(s.opened),this.trigger("openPanel:start",t),void this.trigger("openPanel:finish",t);r.not(t).removeClass(s.subopened);for(var d=t.data(a.parent);d;)d=d.closest("."+s.panel),d.is("."+s.vertical)||d.addClass(s.subopened),d=d.data(a.parent);r.removeClass(s.highest).not(l).not(t).addClass(s.hidden),t.removeClass(s.hidden);var c=function(){l.removeClass(s.opened),t.addClass(s.opened),t.hasClass(s.subopened)?(l.addClass(s.highest),t.removeClass(s.subopened)):(l.addClass(s.subopened),t.addClass(s.highest)),this.trigger("openPanel:start",t)},h=function(){l.removeClass(s.highest).addClass(s.hidden),t.removeClass(s.highest),this.trigger("openPanel:finish",t)};i&&!t.hasClass(s.noanimation)?setTimeout(function(){o.__transitionend(t,function(){h.call(o)},o.conf.transitionDuration),c.call(o)},this.conf.openingInterval):(c.call(this),h.call(this))}this.trigger("openPanel:after",t)}},closePanel:function(e){this.trigger("closePanel:before",e);var t=e.parent();t.hasClass(s.vertical)&&(t.removeClass(s.opened),this.trigger("closePanel",e)),this.trigger("closePanel:after",e)},closeAllPanels:function(){this.trigger("closeAllPanels:before"),this.$pnls.find("."+s.listview).children().removeClass(s.selected).filter("."+s.vertical).removeClass(s.opened);var e=this.$pnls.children("."+s.panel),t=e.first();this.$pnls.children("."+s.panel).not(t).removeClass(s.subopened).removeClass(s.opened).removeClass(s.highest).addClass(s.hidden),this.openPanel(t),this.trigger("closeAllPanels:after")},togglePanel:function(e){var t=e.parent();t.hasClass(s.vertical)&&this[t.hasClass(s.opened)?"closePanel":"openPanel"](e)},setSelected:function(e){this.trigger("setSelected:before",e),this.$menu.find("."+s.listview).children("."+s.selected).removeClass(s.selected),e.addClass(s.selected),this.trigger("setSelected:after",e)},bind:function(e,t){this.cbck[e]=this.cbck[e]||[],this.cbck[e].push(t)},trigger:function(){var e=this,t=Array.prototype.slice.call(arguments),n=t.shift();if(this.cbck[n])for(var i=0,s=this.cbck[n].length;i<s;i++)this.cbck[n][i].apply(e,t)},matchMedia:function(e,t,n){var i={yes:t,no:n};this.mtch[e]=this.mtch[e]||[],this.mtch[e].push(i)},_initAddons:function(){this.trigger("initAddons:before");var t;for(t in e[n].addons)e[n].addons[t].add.call(this),e[n].addons[t].add=function(){};for(t in e[n].addons)e[n].addons[t].setup.call(this);this.trigger("initAddons:after")},_initExtensions:function(){this.trigger("initExtensions:before");var e=this;this.opts.extensions.constructor===Array&&(this.opts.extensions={all:this.opts.extensions});for(var t in this.opts.extensions)this.opts.extensions[t]=this.opts.extensions[t].length?"mm-"+this.opts.extensions[t].join(" mm-"):"",this.opts.extensions[t]&&!function(t){e.matchMedia(t,function(){this.$menu.addClass(this.opts.extensions[t])},function(){this.$menu.removeClass(this.opts.extensions[t])})}(t);this.trigger("initExtensions:after")},_initMenu:function(){this.trigger("initMenu:before");this.conf.clone&&(this.$orig=this.$menu,this.$menu=this.$orig.clone(),this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function(){e(this).attr("id",s.mm(e(this).attr("id")))})),this.opts.initMenu.call(this,this.$menu,this.$orig),this.$menu.attr("id",this.$menu.attr("id")||this.__getUniqueId()),this.$pnls=e('<div class="'+s.panels+'" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu);var t=[s.menu];this.opts.slidingSubmenus||t.push(s.vertical),this.$menu.addClass(t.join(" ")).parent().addClass(s.wrapper),this.trigger("initMenu:after")},_initPanels:function(t){this.trigger("initPanels:before",t),t=t||this.$pnls.children(this.conf.panelNodetype);var n=e(),i=this,a=function(t){t.filter(this.conf.panelNodetype).each(function(){var t=i._initPanel(e(this));if(t){i._initNavbar(t),i._initListview(t),n=n.add(t);var o=t.children("."+s.listview).children("li").children(i.conf.panelNodeType).add(t.children("."+i.conf.classNames.panel));o.length&&a.call(i,o)}})};a.call(this,t),this.opts.initPanels.call(this,n),this.trigger("initPanels:after",n)},_initPanel:function(e){this.trigger("initPanel:before",e);if(e.hasClass(s.panel))return e;if(this.__refactorClass(e,this.conf.classNames.panel,"panel"),this.__refactorClass(e,this.conf.classNames.nopanel,"nopanel"),this.__refactorClass(e,this.conf.classNames.vertical,"vertical"),this.__refactorClass(e,this.conf.classNames.inset,"inset"),e.filter("."+s.inset).addClass(s.nopanel),e.hasClass(s.nopanel))return!1;var t=e.hasClass(s.vertical)||!this.opts.slidingSubmenus;e.removeClass(s.vertical);var n=e.attr("id")||this.__getUniqueId();e.removeAttr("id"),e.is("ul, ol")&&(e.wrap("<div />"),e=e.parent()),e.addClass(s.panel+" "+s.hidden).attr("id",n);var i=e.parent("li");return t?e.add(i).addClass(s.vertical):e.appendTo(this.$pnls),i.length&&(i.data(a.child,e),e.data(a.parent,i)),this.trigger("initPanel:after",e),e},_initNavbar:function(t){if(this.trigger("initNavbar:before",t),!t.children("."+s.navbar).length){var i=t.data(a.parent),o=e('<div class="'+s.navbar+'" />'),r=e[n].i18n(this.opts.navbar.title),l="";if(i&&i.length){if(i.hasClass(s.vertical))return;if(i.parent().is("."+s.listview))var d=i.children("a, span").not("."+s.next);else var d=i.closest("."+s.panel).find('a[href="#'+t.attr("id")+'"]');d=d.first(),i=d.closest("."+s.panel);var c=i.attr("id");switch(r=d.text(),this.opts.navbar.titleLink){case"anchor":l=d.attr("href");break;case"parent":l="#"+c}o.append('<a class="'+s.btn+" "+s.prev+'" href="#'+c+'" />')}else if(!this.opts.navbar.title)return;this.opts.navbar.add&&t.addClass(s.hasnavbar),o.append('<a class="'+s.title+'"'+(l.length?' href="'+l+'"':"")+">"+r+"</a>").prependTo(t),this.trigger("initNavbar:after",t)}},_initListview:function(t){this.trigger("initListview:before",t);var n=this.__childAddBack(t,"ul, ol");this.__refactorClass(n,this.conf.classNames.nolistview,"nolistview"),n.filter("."+this.conf.classNames.inset).addClass(s.nolistview);var i=n.not("."+s.nolistview).addClass(s.listview).children();this.__refactorClass(i,this.conf.classNames.selected,"selected"),this.__refactorClass(i,this.conf.classNames.divider,"divider"),this.__refactorClass(i,this.conf.classNames.spacer,"spacer");var o=t.data(a.parent);if(o&&o.parent().is("."+s.listview)&&!o.children("."+s.next).length){var r=o.children("a, span").first(),l=e('<a class="'+s.next+'" href="#'+t.attr("id")+'" />').insertBefore(r);r.is("span")&&l.addClass(s.fullsubopen)}this.trigger("initListview:after",t)},_initOpened:function(){this.trigger("initOpened:before");var e=this.$pnls.find("."+s.listview).children("."+s.selected).removeClass(s.selected).last().addClass(s.selected),t=e.length?e.closest("."+s.panel):this.$pnls.children("."+s.panel).first();this.openPanel(t,!1),this.trigger("initOpened:after")},_initAnchors:function(){var t=this;r.$body.on(o.click+"-oncanvas","a[href]",function(i){var a=e(this),o=!1,r=t.$menu.find(a).length;for(var l in e[n].addons)if(e[n].addons[l].clickAnchor.call(t,a,r)){o=!0;break}var d=a.attr("href");if(!o&&r&&d.length>1&&"#"==d.slice(0,1))try{var c=e(d,t.$menu);c.is("."+s.panel)&&(o=!0,t[a.parent().hasClass(s.vertical)?"togglePanel":"openPanel"](c))}catch(h){}if(o&&i.preventDefault(),!o&&r&&a.is("."+s.listview+" > li > a")&&!a.is('[rel="external"]')&&!a.is('[target="_blank"]')){t.__valueOrFn(t.opts.onClick.setSelected,a)&&t.setSelected(e(i.target).parent());var f=t.__valueOrFn(t.opts.onClick.preventDefault,a,"#"==d.slice(0,1));f&&i.preventDefault(),t.__valueOrFn(t.opts.onClick.close,a,f)&&t.close()}})},_initMatchMedia:function(){var e=this;this._fireMatchMedia(),r.$wndw.on(o.resize,function(t){e._fireMatchMedia()})},_fireMatchMedia:function(){for(var e in this.mtch)for(var t=window.matchMedia&&window.matchMedia(e).matches?"yes":"no",n=0;n<this.mtch[e].length;n++)this.mtch[e][n][t].call(this)},_getOriginalMenuId:function(){var e=this.$menu.attr("id");return this.conf.clone&&e&&e.length&&(e=s.umm(e)),e},__api:function(){var t=this,n={};return e.each(this._api,function(e){var i=this;n[i]=function(){var e=t[i].apply(t,arguments);return"undefined"==typeof e?n:e}}),n},__valueOrFn:function(e,t,n){return"function"==typeof e?e.call(t[0]):"undefined"==typeof e&&"undefined"!=typeof n?n:e},__refactorClass:function(e,t,n){return e.filter("."+t).removeClass(t).addClass(s[n])},__findAddBack:function(e,t){return e.find(t).add(e.filter(t))},__childAddBack:function(e,t){return e.children(t).add(e.filter(t))},__filterListItems:function(e){return e.not("."+s.divider).not("."+s.hidden)},__filterListItemAnchors:function(e){return this.__filterListItems(e).children("a").not("."+s.next)},__transitionend:function(e,t,n){var i=!1,s=function(n){"undefined"!=typeof n&&n.target!=e[0]||(i||(e.unbind(o.transitionend),e.unbind(o.webkitTransitionEnd),t.call(e[0])),i=!0)};e.on(o.transitionend,s),e.on(o.webkitTransitionEnd,s),setTimeout(s,1.1*n)},__getUniqueId:function(){return s.mm(e[n].uniqueId++)}},e.fn[n]=function(i,s){t(),i=e.extend(!0,{},e[n].defaults,i),s=e.extend(!0,{},e[n].configuration,s);var a=e();return this.each(function(){var t=e(this);if(!t.data(n)){var o=new e[n](t,i,s);o.$menu.data(n,o.__api()),a=a.add(o.$menu)}}),a},e[n].i18n=function(){var t={};return function(n){switch(typeof n){case"object":return e.extend(t,n),t;case"string":return t[n]||n;case"undefined":default:return t}}}(),e[n].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints||!1,csstransitions:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransitions||Modernizr.csstransitions}(),csstransforms:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransforms||Modernizr.csstransforms}(),csstransforms3d:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransforms3d||Modernizr.csstransforms3d}()};var s,a,o,r}}(jQuery),/*
 * jQuery mmenu offCanvas add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="offCanvas";e[t].addons[n]={setup:function(){if(this.opts[n]){var s=this,a=this.opts[n],r=this.conf[n];o=e[t].glbl,this._api=e.merge(this._api,["open","close","setPage"]),"object"!=typeof a&&(a={}),"top"!=a.position&&"bottom"!=a.position||(a.zposition="front"),a=this.opts[n]=e.extend(!0,{},e[t].defaults[n],a),"string"!=typeof r.pageSelector&&(r.pageSelector="> "+r.pageNodetype),o.$allMenus=(o.$allMenus||e()).add(this.$menu),this.vars.opened=!1;var l=[i.offcanvas];"left"!=a.position&&l.push(i.mm(a.position)),"back"!=a.zposition&&l.push(i.mm(a.zposition)),e[t].support.csstransforms||l.push(i["no-csstransforms"]),e[t].support.csstransforms3d||l.push(i["no-csstransforms3d"]),this.bind("initMenu:after",function(){this.setPage(o.$page),this._initBlocker(),this["_initWindow_"+n](),this.$menu.addClass(l.join(" ")).parent("."+i.wrapper).removeClass(i.wrapper),this.$menu[r.menuInsertMethod](r.menuInsertSelector);var e=window.location.hash;if(e){var t=this._getOriginalMenuId();t&&t==e.slice(1)&&this.open()}}),this.bind("initExtensions:after",function(){for(var e=[i.mm("widescreen"),i.mm("iconbar")],t=0;t<e.length;t++)for(var n in this.opts.extensions)if(this.opts.extensions[n].indexOf(e[t])>-1){!function(t,n){s.matchMedia(t,function(){o.$html.addClass(e[n])},function(){o.$html.removeClass(e[n])})}(n,t);break}}),this.bind("open:start:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!1)}),this.bind("close:finish:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)}),this.bind("initMenu:after:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)})}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("offcanvas slideout blocking modal background opening blocker page no-csstransforms3d"),s.add("style")},clickAnchor:function(e,t){var s=this;if(this.opts[n]){var a=this._getOriginalMenuId();if(a&&e.is('[href="#'+a+'"]')){if(t)return!0;var r=e.closest("."+i.menu);if(r.length){var l=r.data("mmenu");if(l&&l.close)return l.close(),s.__transitionend(r,function(){s.open()},s.conf.transitionDuration),!0}return this.open(),!0}if(o.$page)return a=o.$page.first().attr("id"),a&&e.is('[href="#'+a+'"]')?(this.close(),!0):void 0}}},e[t].defaults[n]={position:"left",zposition:"back",blockUI:!0,moveBackground:!0},e[t].configuration[n]={pageNodetype:"div",pageSelector:null,noPageSelector:[],wrapPageIfNeeded:!0,menuInsertMethod:"prependTo",menuInsertSelector:"body"},e[t].prototype.open=function(){if(this.trigger("open:before"),!this.vars.opened){var e=this;this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),this.trigger("open:after")}},e[t].prototype._openSetup=function(){var t=this,r=this.opts[n];this.closeAllOthers(),o.$page.each(function(){e(this).data(s.style,e(this).attr("style")||"")}),o.$wndw.trigger(a.resize+"-"+n,[!0]);var l=[i.opened];r.blockUI&&l.push(i.blocking),"modal"==r.blockUI&&l.push(i.modal),r.moveBackground&&l.push(i.background),"left"!=r.position&&l.push(i.mm(this.opts[n].position)),"back"!=r.zposition&&l.push(i.mm(this.opts[n].zposition)),o.$html.addClass(l.join(" ")),setTimeout(function(){t.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(i.opened)},e[t].prototype._openFinish=function(){var e=this;this.__transitionend(o.$page.first(),function(){e.trigger("open:finish")},this.conf.transitionDuration),this.trigger("open:start"),o.$html.addClass(i.opening)},e[t].prototype.close=function(){if(this.trigger("close:before"),this.vars.opened){var t=this;this.__transitionend(o.$page.first(),function(){t.$menu.removeClass(i.opened);var a=[i.opened,i.blocking,i.modal,i.background,i.mm(t.opts[n].position),i.mm(t.opts[n].zposition)];o.$html.removeClass(a.join(" ")),o.$page.each(function(){e(this).attr("style",e(this).data(s.style))}),t.vars.opened=!1,t.trigger("close:finish")},this.conf.transitionDuration),this.trigger("close:start"),o.$html.removeClass(i.opening),this.trigger("close:after")}},e[t].prototype.closeAllOthers=function(){o.$allMenus.not(this.$menu).each(function(){var n=e(this).data(t);n&&n.close&&n.close()})},e[t].prototype.setPage=function(t){this.trigger("setPage:before",t);var s=this,a=this.conf[n];t&&t.length||(t=o.$body.find(a.pageSelector),a.noPageSelector.length&&(t=t.not(a.noPageSelector.join(", "))),t.length>1&&a.wrapPageIfNeeded&&(t=t.wrapAll("<"+this.conf[n].pageNodetype+" />").parent())),t.each(function(){e(this).attr("id",e(this).attr("id")||s.__getUniqueId())}),t.addClass(i.page+" "+i.slideout),o.$page=t,this.trigger("setPage:after",t)},e[t].prototype["_initWindow_"+n]=function(){o.$wndw.off(a.keydown+"-"+n).on(a.keydown+"-"+n,function(e){if(o.$html.hasClass(i.opened)&&9==e.keyCode)return e.preventDefault(),!1});var e=0;o.$wndw.off(a.resize+"-"+n).on(a.resize+"-"+n,function(t,n){if(1==o.$page.length&&(n||o.$html.hasClass(i.opened))){var s=o.$wndw.height();(n||s!=e)&&(e=s,o.$page.css("minHeight",s))}})},e[t].prototype._initBlocker=function(){var t=this;this.opts[n].blockUI&&(o.$blck||(o.$blck=e('<div id="'+i.blocker+'" class="'+i.slideout+'" />')),o.$blck.appendTo(o.$body).off(a.touchstart+"-"+n+" "+a.touchmove+"-"+n).on(a.touchstart+"-"+n+" "+a.touchmove+"-"+n,function(e){e.preventDefault(),e.stopPropagation(),o.$blck.trigger(a.mousedown+"-"+n)}).off(a.mousedown+"-"+n).on(a.mousedown+"-"+n,function(e){e.preventDefault(),o.$html.hasClass(i.modal)||(t.closeAllOthers(),t.close())}))};var i,s,a,o}(jQuery),/*
 * jQuery mmenu scrollBugFix add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="scrollBugFix";e[t].addons[n]={setup:function(){var s=this.opts[n];this.conf[n];o=e[t].glbl,e[t].support.touch&&this.opts.offCanvas&&this.opts.offCanvas.blockUI&&("boolean"==typeof s&&(s={fix:s}),"object"!=typeof s&&(s={}),s=this.opts[n]=e.extend(!0,{},e[t].defaults[n],s),s.fix&&(this.bind("open:start",function(){this.$pnls.children("."+i.opened).scrollTop(0)}),this.bind("initMenu:after",function(){this["_initWindow_"+n]()})))},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e},clickAnchor:function(e,t){}},e[t].defaults[n]={fix:!0},e[t].prototype["_initWindow_"+n]=function(){var t=this;o.$docu.off(a.touchmove+"-"+n).on(a.touchmove+"-"+n,function(e){o.$html.hasClass(i.opened)&&e.preventDefault()});var s=!1;o.$body.off(a.touchstart+"-"+n).on(a.touchstart+"-"+n,"."+i.panels+"> ."+i.panel,function(e){o.$html.hasClass(i.opened)&&(s||(s=!0,0===e.currentTarget.scrollTop?e.currentTarget.scrollTop=1:e.currentTarget.scrollHeight===e.currentTarget.scrollTop+e.currentTarget.offsetHeight&&(e.currentTarget.scrollTop-=1),s=!1))}).off(a.touchmove+"-"+n).on(a.touchmove+"-"+n,"."+i.panels+"> ."+i.panel,function(t){o.$html.hasClass(i.opened)&&e(this)[0].scrollHeight>e(this).innerHeight()&&t.stopPropagation()}),o.$wndw.off(a.orientationchange+"-"+n).on(a.orientationchange+"-"+n,function(){t.$pnls.children("."+i.opened).scrollTop(0).css({"-webkit-overflow-scrolling":"auto"}).css({"-webkit-overflow-scrolling":"touch"})})};var i,s,a,o}(jQuery),/*
 * jQuery mmenu screenReader add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="screenReader";e[t].addons[n]={setup:function(){var a=this,r=this.opts[n],l=this.conf[n];o=e[t].glbl,"boolean"==typeof r&&(r={aria:r,text:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),r.aria&&(this.bind("initAddons:after",function(){this.bind("initMenu:after",function(){this.trigger("initMenu:after:sr-aria")}),this.bind("initNavbar:after",function(){this.trigger("initNavbar:after:sr-aria",arguments[0])}),this.bind("openPanel:start",function(){this.trigger("openPanel:start:sr-aria",arguments[0])}),this.bind("close:start",function(){this.trigger("close:start:sr-aria")}),this.bind("close:finish",function(){this.trigger("close:finish:sr-aria")}),this.bind("open:start",function(){this.trigger("open:start:sr-aria")}),this.bind("open:finish",function(){this.trigger("open:finish:sr-aria")})}),this.bind("updateListview",function(){this.$pnls.find("."+i.listview).children().each(function(){a.__sr_aria(e(this),"hidden",e(this).is("."+i.hidden))})}),this.bind("openPanel:start",function(e){var t=this.$menu.find("."+i.panel).not(e).not(e.parents("."+i.panel)),n=e.add(e.find("."+i.vertical+"."+i.opened).children("."+i.panel));this.__sr_aria(t,"hidden",!0),this.__sr_aria(n,"hidden",!1)}),this.bind("closePanel",function(e){this.__sr_aria(e,"hidden",!0)}),this.bind("initPanels:after",function(t){var n=t.find("."+i.prev+", ."+i.next).each(function(){a.__sr_aria(e(this),"owns",e(this).attr("href").replace("#",""))});this.__sr_aria(n,"haspopup",!0)}),this.bind("initNavbar:after",function(e){var t=e.children("."+i.navbar);this.__sr_aria(t,"hidden",!e.hasClass(i.hasnavbar))}),r.text&&(this.bind("initlistview:after",function(e){var t=e.find("."+i.listview).find("."+i.fullsubopen).parent().children("span");this.__sr_aria(t,"hidden",!0)}),"parent"==this.opts.navbar.titleLink&&this.bind("initNavbar:after",function(e){var t=e.children("."+i.navbar),n=!!t.children("."+i.prev).length;this.__sr_aria(t.children("."+i.title),"hidden",n)}))),r.text&&(this.bind("initAddons:after",function(){this.bind("setPage:after",function(){this.trigger("setPage:after:sr-text",arguments[0])})}),this.bind("initNavbar:after",function(n){var s=n.children("."+i.navbar),a=s.children("."+i.title).text(),o=e[t].i18n(l.text.closeSubmenu);a&&(o+=" ("+a+")"),s.children("."+i.prev).html(this.__sr_text(o))}),this.bind("initListview:after",function(n){var o=n.data(s.parent);if(o&&o.length){var r=o.children("."+i.next),d=r.nextAll("span, a").first().text(),c=e[t].i18n(l.text[r.parent().is("."+i.vertical)?"toggleSubmenu":"openSubmenu"]);d&&(c+=" ("+d+")"),r.html(a.__sr_text(c))}}))},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("sronly")},clickAnchor:function(e,t){}},e[t].defaults[n]={aria:!0,text:!0},e[t].configuration[n]={text:{closeMenu:"Close menu",closeSubmenu:"Close submenu",openSubmenu:"Open submenu",toggleSubmenu:"Toggle submenu"}},e[t].prototype.__sr_aria=function(e,t,n){e.prop("aria-"+t,n)[n?"attr":"removeAttr"]("aria-"+t,n)},e[t].prototype.__sr_text=function(e){return'<span class="'+i.sronly+'">'+e+"</span>"};var i,s,a,o}(jQuery),/*
 * jQuery mmenu autoHeight add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="autoHeight";e[t].addons[n]={setup:function(){var s=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof s&&s&&(s={height:"auto"}),"string"==typeof s&&(s={height:s}),"object"!=typeof s&&(s={}),s=this.opts[n]=e.extend(!0,{},e[t].defaults[n],s),"auto"==s.height||"highest"==s.height){this.bind("initMenu:after",function(){this.$menu.addClass(i.autoheight)});var a=function(t){if(!this.opts.offCanvas||this.vars.opened){var n=Math.max(parseInt(this.$pnls.css("top"),10),0)||0,a=Math.max(parseInt(this.$pnls.css("bottom"),10),0)||0,o=0;this.$menu.addClass(i.measureheight),"auto"==s.height?(t=t||this.$pnls.children("."+i.opened),t.is("."+i.vertical)&&(t=t.parents("."+i.panel).not("."+i.vertical)),t.length||(t=this.$pnls.children("."+i.panel)),o=t.first().outerHeight()):"highest"==s.height&&this.$pnls.children().each(function(){var t=e(this);t.is("."+i.vertical)&&(t=t.parents("."+i.panel).not("."+i.vertical).first()),o=Math.max(o,t.outerHeight())}),this.$menu.height(o+n+a).removeClass(i.measureheight)}};this.opts.offCanvas&&this.bind("open:start",a),"highest"==s.height&&this.bind("initPanels:after",a),"auto"==s.height&&(this.bind("updateListview",a),this.bind("openPanel:start",a),this.bind("closePanel",a))}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("autoheight measureheight"),a.add("resize")},clickAnchor:function(e,t){}},e[t].defaults[n]={height:"default"};var i,s,a,o}(jQuery),/*
 * jQuery mmenu backButton add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="backButton";e[t].addons[n]={setup:function(){if(this.opts.offCanvas){var s=this,a=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof a&&(a={close:a}),"object"!=typeof a&&(a={}),a=e.extend(!0,{},e[t].defaults[n],a),a.close){var r="#"+s.$menu.attr("id");this.bind("open:finish",function(e){location.hash!=r&&history.pushState(null,document.title,r)}),e(window).on("popstate",function(e){o.$html.hasClass(i.opened)?(e.stopPropagation(),s.close()):location.hash==r&&(e.stopPropagation(),s.open())})}}},add:function(){return window.history&&window.history.pushState?(i=e[t]._c,s=e[t]._d,void(a=e[t]._e)):void(e[t].addons[n].setup=function(){})},clickAnchor:function(e,t){}},e[t].defaults[n]={close:!1};var i,s,a,o}(jQuery),/*
 * jQuery mmenu columns add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="columns";e[t].addons[n]={setup:function(){var s=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof s&&(s={add:s}),"number"==typeof s&&(s={add:!0,visible:s}),"object"!=typeof s&&(s={}),"number"==typeof s.visible&&(s.visible={min:s.visible,max:s.visible}),s=this.opts[n]=e.extend(!0,{},e[t].defaults[n],s),s.add){s.visible.min=Math.max(1,Math.min(6,s.visible.min)),s.visible.max=Math.max(s.visible.min,Math.min(6,s.visible.max));for(var a=this.opts.offCanvas?this.$menu.add(o.$html):this.$menu,r="",l=0;l<=s.visible.max;l++)r+=" "+i.columns+"-"+l;r.length&&(r=r.slice(1));var d=function(e){var t=this.$pnls.children("."+i.subopened).length;e&&!e.hasClass(i.subopened)&&t++,t=Math.min(s.visible.max,Math.max(s.visible.min,t)),a.removeClass(r).addClass(i.columns+"-"+t)},c=function(t){t=t||this.$pnls.children("."+i.opened),this.$pnls.children("."+i.panel).removeClass(r).filter("."+i.subopened).add(t).slice(-s.visible.max).each(function(t){e(this).addClass(i.columns+"-"+t)})};this.bind("initMenu:after",function(){this.$menu.addClass(i.columns)}),this.bind("openPanel:start",d),this.bind("openPanel:start",c)}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("columns")},clickAnchor:function(t,s){if(!this.opts[n].add)return!1;if(s){var a=t.attr("href");if(a.length>1&&"#"==a.slice(0,1))try{var o=e(a,this.$menu);if(o.is("."+i.panel))for(var r=parseInt(t.closest("."+i.panel).attr("class").split(i.columns+"-")[1].split(" ")[0],10)+1;r>0;){var l=this.$pnls.children("."+i.columns+"-"+r);if(!l.length){r=-1;break}r++,l.removeClass(i.subopened).removeClass(i.opened).removeClass(i.highest).addClass(i.hidden)}}catch(d){}}}},e[t].defaults[n]={add:!1,visible:{min:1,max:3}};var i,s,a,o}(jQuery),/*
 * jQuery mmenu dividers add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="dividers";e[t].addons[n]={setup:function(){var s=this,r=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof r&&(r={add:r,fixed:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),this.bind("initListview:after",function(e){this.__refactorClass(e.find("li"),this.conf.classNames[n].collapsed,"collapsed")}),r.add&&this.bind("initListview:after",function(t){var n;switch(r.addTo){case"panels":n=t;break;default:n=t.filter(r.addTo)}n.length&&n.find("."+i.listview).find("."+i.divider).remove().end().each(function(){var t="";s.__filterListItems(e(this).children()).each(function(){var n=e.trim(e(this).children("a, span").text()).slice(0,1).toLowerCase();n!=t&&n.length&&(t=n,e('<li class="'+i.divider+'">'+n+"</li>").insertBefore(this))})})}),r.collapse&&this.bind("initListview:after",function(t){t.find("."+i.divider).each(function(){var t=e(this),n=t.nextUntil("."+i.divider,"."+i.collapsed);n.length&&(t.children("."+i.next).length||(t.wrapInner("<span />"),t.prepend('<a href="#" class="'+i.next+" "+i.fullsubopen+'" />')))})}),r.fixed){this.bind("initPanels:after",function(){"undefined"==typeof this.$fixeddivider&&(this.$fixeddivider=e('<ul class="'+i.listview+" "+i.fixeddivider+'"><li class="'+i.divider+'"></li></ul>').prependTo(this.$pnls).children())});var l=function(t){if(t=t||this.$pnls.children("."+i.opened),!t.is(":hidden")){var n=t.children("."+i.listview).children("."+i.divider).not("."+i.hidden),s=t.scrollTop()||0,a="";n.each(function(){e(this).position().top+s<s+1&&(a=e(this).text())}),this.$fixeddivider.text(a),this.$pnls[a.length?"addClass":"removeClass"](i.hasdividers)}};this.bind("open:start",l),this.bind("openPanel:start",l),this.bind("updateListview",l),this.bind("initPanel:after",function(e){e.off(a.scroll+"-"+n+" "+a.touchmove+"-"+n).on(a.scroll+"-"+n+" "+a.touchmove+"-"+n,function(t){l.call(s,e)})})}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("collapsed uncollapsed fixeddivider hasdividers"),a.add("scroll")},clickAnchor:function(e,t){if(this.opts[n].collapse&&t){var s=e.parent();if(s.is("."+i.divider)){var a=s.nextUntil("."+i.divider,"."+i.collapsed);return s.toggleClass(i.opened),a[s.hasClass(i.opened)?"addClass":"removeClass"](i.uncollapsed),!0}}return!1}},e[t].defaults[n]={add:!1,addTo:"panels",fixed:!1,collapse:!1},e[t].configuration.classNames[n]={collapsed:"Collapsed"};var i,s,a,o}(jQuery),/*
 * jQuery mmenu counters add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="counters";e[t].addons[n]={setup:function(){var a=this,r=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof r&&(r={add:r,update:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),this.bind("initListview:after",function(t){this.__refactorClass(e("em",t),this.conf.classNames[n].counter,"counter")}),r.add&&this.bind("initListview:after",function(t){var n;switch(r.addTo){case"panels":n=t;break;default:n=t.filter(r.addTo)}n.each(function(){var t=e(this).data(s.parent);t&&(t.children("em."+i.counter).length||t.prepend(e('<em class="'+i.counter+'" />')))})}),r.update){var l=function(t){t=t||this.$pnls.children("."+i.panel),t.each(function(){var t=e(this),n=t.data(s.parent);if(n){var o=n.children("em."+i.counter);o.length&&(t=t.children("."+i.listview),t.length&&o.html(a.__filterListItems(t.children()).length))}})};this.bind("initListview:after",l),this.bind("updateListview",l)}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("counter search noresultsmsg")},clickAnchor:function(e,t){}},e[t].defaults[n]={add:!1,addTo:"panels",count:!1},e[t].configuration.classNames[n]={counter:"Counter"};var i,s,a,o}(jQuery),/*
 * jQuery mmenu drag add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){function t(e,t,n){return e<t&&(e=t),e>n&&(e=n),e}function n(n,i,s){var r,l,d,c=this,h={events:"panleft panright",typeLower:"x",typeUpper:"X",open_dir:"right",close_dir:"left",negative:!1},f="width",u=h.open_dir,p=function(e){e<=n.maxStartPos&&(m=1)},v=function(){return e("."+o.slideout)},m=0,b=0,g=0;switch(this.opts.offCanvas.position){case"top":case"bottom":h.events="panup pandown",h.typeLower="y",h.typeUpper="Y",f="height"}switch(this.opts.offCanvas.position){case"right":case"bottom":h.negative=!0,p=function(e){e>=s.$wndw[f]()-n.maxStartPos&&(m=1)}}switch(this.opts.offCanvas.position){case"left":break;case"right":h.open_dir="left",h.close_dir="right";break;case"top":h.open_dir="down",h.close_dir="up";break;case"bottom":h.open_dir="up",h.close_dir="down"}switch(this.opts.offCanvas.zposition){case"front":v=function(){return this.$menu}}var _=this.__valueOrFn(n.node,this.$menu,s.$page);"string"==typeof _&&(_=e(_));var C=new Hammer(_[0],this.opts[a].vendors.hammer);C.on("panstart",function(e){p(e.center[h.typeLower]),s.$slideOutNodes=v(),u=h.open_dir}),C.on(h.events+" panend",function(e){m>0&&e.preventDefault()}),C.on(h.events,function(e){if(r=e["delta"+h.typeUpper],h.negative&&(r=-r),r!=b&&(u=r>=b?h.open_dir:h.close_dir),b=r,b>n.threshold&&1==m){if(s.$html.hasClass(o.opened))return;m=2,c._openSetup(),c.trigger("open:start"),s.$html.addClass(o.dragging),g=t(s.$wndw[f]()*i[f].perc,i[f].min,i[f].max)}2==m&&(l=t(b,10,g)-("front"==c.opts.offCanvas.zposition?g:0),h.negative&&(l=-l),d="translate"+h.typeUpper+"("+l+"px )",s.$slideOutNodes.css({"-webkit-transform":"-webkit-"+d,transform:d}))}),C.on("panend",function(e){2==m&&(s.$html.removeClass(o.dragging),s.$slideOutNodes.css("transform",""),c[u==h.open_dir?"_openFinish":"close"]()),m=0})}function i(e,t,n,i){var s=this,l=e.data(r.parent);if(l){l=l.closest("."+o.panel);var d=new Hammer(e[0],s.opts[a].vendors.hammer),c=null;d.on("panright",function(e){c||(s.openPanel(l),c=setTimeout(function(){clearTimeout(c),c=null},s.conf.openingInterval+s.conf.transitionDuration))})}}var s="mmenu",a="drag";e[s].addons[a]={setup:function(){if(this.opts.offCanvas){var t=this.opts[a],o=this.conf[a];d=e[s].glbl,"boolean"==typeof t&&(t={menu:t,panels:t}),"object"!=typeof t&&(t={}),"boolean"==typeof t.menu&&(t.menu={open:t.menu}),"object"!=typeof t.menu&&(t.menu={}),"boolean"==typeof t.panels&&(t.panels={close:t.panels}),"object"!=typeof t.panels&&(t.panels={}),t=this.opts[a]=e.extend(!0,{},e[s].defaults[a],t),t.menu.open&&this.bind("setPage:after",function(){n.call(this,t.menu,o.menu,d)}),t.panels.close&&this.bind("initPanel:after",function(e){i.call(this,e,t.panels,o.panels,d)})}},add:function(){return"function"!=typeof Hammer||Hammer.VERSION<2?(e[s].addons[a].add=function(){},void(e[s].addons[a].setup=function(){})):(o=e[s]._c,r=e[s]._d,l=e[s]._e,void o.add("dragging"))},clickAnchor:function(e,t){}},e[s].defaults[a]={menu:{open:!1,maxStartPos:100,threshold:50},panels:{close:!1},vendors:{hammer:{}}},e[s].configuration[a]={menu:{width:{perc:.8,min:140,max:440},height:{perc:.8,min:140,max:880}},panels:{}};var o,r,l,d}(jQuery),/*
 * jQuery mmenu dropdown add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="dropdown";e[t].addons[n]={setup:function(){if(this.opts.offCanvas){var r=this,l=this.opts[n],d=this.conf[n];if(o=e[t].glbl,"boolean"==typeof l&&l&&(l={drop:l}),"object"!=typeof l&&(l={}),"string"==typeof l.position&&(l.position={of:l.position}),l=this.opts[n]=e.extend(!0,{},e[t].defaults[n],l),l.drop){var c;this.bind("initMenu:after",function(){if(this.$menu.addClass(i.dropdown),l.tip&&this.$menu.addClass(i.tip),"string"!=typeof l.position.of){var t=this._getOriginalMenuId();t&&t.length&&(l.position.of='[href="#'+t+'"]')}"string"==typeof l.position.of&&(c=e(l.position.of),l.event=l.event.split(" "),1==l.event.length&&(l.event[1]=l.event[0]),"hover"==l.event[0]&&c.on(a.mouseenter+"-"+n,function(){r.open()}),"hover"==l.event[1]&&this.$menu.on(a.mouseleave+"-"+n,function(){r.close()}))}),this.bind("open:start",function(){this.$menu.data(s.style,this.$menu.attr("style")||""),o.$html.addClass(i.dropdown)}),this.bind("close:finish",function(){this.$menu.attr("style",this.$menu.data(s.style)),o.$html.removeClass(i.dropdown)});var h=function(e,t){var n=t[0],s=t[1],a="x"==e?"scrollLeft":"scrollTop",r="x"==e?"outerWidth":"outerHeight",h="x"==e?"left":"top",f="x"==e?"right":"bottom",u="x"==e?"width":"height",p="x"==e?"maxWidth":"maxHeight",v=null,m=o.$wndw[a](),b=c.offset()[h]-=m,g=b+c[r](),_=o.$wndw[u](),C=d.offset.button[e]+d.offset.viewport[e];if(l.position[e])switch(l.position[e]){case"left":case"bottom":v="after";break;case"right":case"top":v="before"}null===v&&(v=b+(g-b)/2<_/2?"after":"before");var y,w;return"after"==v?(y="x"==e?b:g,w=_-(y+C),n[h]=y+d.offset.button[e],n[f]="auto",s.push(i["x"==e?"tipleft":"tiptop"])):(y="x"==e?g:b,w=y-C,n[f]="calc( 100% - "+(y-d.offset.button[e])+"px )",n[h]="auto",s.push(i["x"==e?"tipright":"tipbottom"])),n[p]=Math.min(d[u].max,w),[n,s]},f=function(e){if(this.vars.opened){this.$menu.attr("style",this.$menu.data(s.style));var t=[{},[]];t=h.call(this,"y",t),t=h.call(this,"x",t),this.$menu.css(t[0]),l.tip&&this.$menu.removeClass(i.tipleft+" "+i.tipright+" "+i.tiptop+" "+i.tipbottom).addClass(t[1].join(" "))}};this.bind("open:start",f),o.$wndw.on(a.resize+"-"+n,function(e){f.call(r)}),this.opts.offCanvas.blockUI||o.$wndw.on(a.scroll+"-"+n,function(e){f.call(r)})}}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("dropdown tip tipleft tipright tiptop tipbottom"),a.add("mouseenter mouseleave resize scroll")},clickAnchor:function(e,t){}},e[t].defaults[n]={drop:!1,event:"click",position:{},tip:!0},e[t].configuration[n]={offset:{button:{x:-10,y:10},viewport:{x:20,y:20}},height:{max:880},width:{max:440}};var i,s,a,o}(jQuery),/*
 * jQuery mmenu fixedElements add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="fixedElements";e[t].addons[n]={setup:function(){if(this.opts.offCanvas){var i=this.opts[n],s=this.conf[n];o=e[t].glbl,i=this.opts[n]=e.extend(!0,{},e[t].defaults[n],i);var a=function(e){var t=this.conf.classNames[n].fixed;this.__refactorClass(e.find("."+t),t,"slideout")[s.elemInsertMethod](s.elemInsertSelector)};this.bind("setPage:after",a)}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("fixed")},clickAnchor:function(e,t){}},e[t].configuration[n]={elemInsertMethod:"appendTo",elemInsertSelector:"body"},e[t].configuration.classNames[n]={fixed:"Fixed"};var i,s,a,o}(jQuery),/*
 * jQuery mmenu iconPanels add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="iconPanels";e[t].addons[n]={setup:function(){var s=this,a=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof a&&(a={add:a}),"number"==typeof a&&(a={add:!0,visible:a}),"object"!=typeof a&&(a={}),a=this.opts[n]=e.extend(!0,{},e[t].defaults[n],a),a.visible++,a.add){for(var r="",l=0;l<=a.visible;l++)r+=" "+i.iconpanel+"-"+l;r.length&&(r=r.slice(1));var d=function(t){t.hasClass(i.vertical)||s.$pnls.children("."+i.panel).removeClass(r).filter("."+i.subopened).removeClass(i.hidden).add(t).not("."+i.vertical).slice(-a.visible).each(function(t){e(this).addClass(i.iconpanel+"-"+t)})};this.bind("initMenu:after",function(){this.$menu.addClass(i.iconpanel)}),this.bind("openPanel:start",d),this.bind("initPanels:after",function(e){d.call(s,s.$pnls.children("."+i.opened))}),this.bind("initListview:after",function(e){e.hasClass(i.vertical)||e.children("."+i.subblocker).length||e.prepend('<a href="#'+e.closest("."+i.panel).attr("id")+'" class="'+i.subblocker+'" />')})}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("iconpanel subblocker")},clickAnchor:function(e,t){}},e[t].defaults[n]={add:!1,visible:3};var i,s,a,o}(jQuery),/*
 * jQuery mmenu keyboardNavigation add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){function t(t,n){t=t||this.$pnls.children("."+a.opened);var i=e(),s=this.$menu.children("."+a.mm("navbars-top")+", ."+a.mm("navbars-bottom")).children("."+a.navbar);s.find(d).filter(":focus").length||("default"==n&&(i=t.children("."+a.listview).find("a[href]").not("."+a.hidden),i.length||(i=t.find(d).not("."+a.hidden)),i.length||(i=s.find(d).not("."+a.hidden))),i.length||(i=this.$menu.children("."+a.tabstart)),i.first().focus())}function n(e){e||(e=this.$pnls.children("."+a.opened));var t=this.$pnls.children("."+a.panel),n=t.not(e);n.find(d).attr("tabindex",-1),e.find(d).attr("tabindex",0),e.find("."+a.mm("toggle")+", ."+a.mm("check")).attr("tabindex",-1),e.children("."+a.navbar).children("."+a.title).attr("tabindex",-1)}var i="mmenu",s="keyboardNavigation";e[i].addons[s]={setup:function(){var o=this.opts[s];this.conf[s];if(l=e[i].glbl,"boolean"!=typeof o&&"string"!=typeof o||(o={enable:o}),"object"!=typeof o&&(o={}),o=this.opts[s]=e.extend(!0,{},e[i].defaults[s],o),o.enable){var r=e('<button class="'+a.tabstart+'" tabindex="0" type="button" />'),d=e('<button class="'+a.tabend+'" tabindex="0" type="button" />');this.bind("initMenu:after",function(){o.enhance&&this.$menu.addClass(a.keyboardfocus),this["_initWindow_"+s](o.enhance)}),this.bind("initOpened:before",function(){this.$menu.prepend(r).append(d).children("."+a.mm("navbars-top")+", ."+a.mm("navbars-bottom")).children("."+a.navbar).children("a."+a.title).attr("tabindex",-1)}),this.bind("open:start",function(){n.call(this)}),this.bind("open:finish",function(){t.call(this,null,o.enable)}),this.bind("openPanel:start",function(e){n.call(this,e)}),this.bind("openPanel:finish",function(e){t.call(this,e,o.enable)}),this.bind("initOpened:after",function(){this.__sr_aria(this.$menu.children("."+a.mm("tabstart")+", ."+a.mm("tabend")),"hidden",!0)})}},add:function(){a=e[i]._c,o=e[i]._d,r=e[i]._e,a.add("tabstart tabend keyboardfocus"),r.add("focusin keydown")},clickAnchor:function(e,t){}},e[i].defaults[s]={enable:!1,enhance:!1},e[i].configuration[s]={},e[i].prototype["_initWindow_"+s]=function(t){l.$wndw.off(r.keydown+"-offCanvas"),l.$wndw.off(r.focusin+"-"+s).on(r.focusin+"-"+s,function(t){if(l.$html.hasClass(a.opened)){var n=e(t.target);n.is("."+a.tabend)&&n.parent().find("."+a.tabstart).focus()}}),l.$wndw.off(r.keydown+"-"+s).on(r.keydown+"-"+s,function(t){var n=e(t.target),i=n.closest("."+a.menu);if(i.length){i.data("mmenu");if(n.is("input, textarea"));else switch(t.keyCode){case 13:(n.is(".mm-toggle")||n.is(".mm-check"))&&n.trigger(r.click);break;case 32:case 37:case 38:case 39:case 40:t.preventDefault()}}}),t&&l.$wndw.off(r.keydown+"-"+s).on(r.keydown+"-"+s,function(t){var n=e(t.target),i=n.closest("."+a.menu);if(i.length){var s=i.data("mmenu");if(n.is("input, textarea"))switch(t.keyCode){case 27:n.val("")}else switch(t.keyCode){case 8:var r=n.closest("."+a.panel).data(o.parent);r&&r.length&&s.openPanel(r.closest("."+a.panel));break;case 27:i.hasClass(a.offcanvas)&&s.close()}}})};var a,o,r,l,d="input, select, textarea, button, label, a[href]"}(jQuery),/*
 * jQuery mmenu lazySubmenus add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="lazySubmenus";e[t].addons[n]={setup:function(){var s=this.opts[n];this.conf[n];o=e[t].glbl,"boolean"==typeof s&&(s={load:s}),"object"!=typeof s&&(s={}),s=this.opts[n]=e.extend(!0,{},e[t].defaults[n],s),s.load&&(this.bind("initMenu:after",function(){this.$pnls.find("li").children(this.conf.panelNodetype).not("."+i.inset).not("."+i.nolistview).not("."+i.nopanel).addClass(i.lazysubmenu+" "+i.nolistview+" "+i.nopanel)}),this.bind("initPanels:before",function(e){e=e||this.$pnls.children(this.conf.panelNodetype),this.__findAddBack(e,"."+i.lazysubmenu).not("."+i.lazysubmenu+" ."+i.lazysubmenu).removeClass(i.lazysubmenu+" "+i.nolistview+" "+i.nopanel)}),this.bind("initOpened:before",function(){var e=this.$pnls.find("."+this.conf.classNames.selected).parents("."+i.lazysubmenu);e.length&&(e.removeClass(i.lazysubmenu+" "+i.nolistview+" "+i.nopanel),this.initPanels(e.last()))}),this.bind("openPanel:before",function(e){var t=this.__findAddBack(e,"."+i.lazysubmenu).not("."+i.lazysubmenu+" ."+i.lazysubmenu);t.length&&this.initPanels(t)}))},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("lazysubmenu"),s.add("lazysubmenu")},clickAnchor:function(e,t){}},e[t].defaults[n]={load:!1},e[t].configuration[n]={};var i,s,a,o}(jQuery),/*
 * jQuery mmenu navbar add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="navbars";e[t].addons[n]={setup:function(){var s=this,a=this.opts[n],r=this.conf[n];if(o=e[t].glbl,"undefined"!=typeof a){a instanceof Array||(a=[a]);var l={},d={};a.length&&(e.each(a,function(o){var c=a[o];"boolean"==typeof c&&c&&(c={}),"object"!=typeof c&&(c={}),"undefined"==typeof c.content&&(c.content=["prev","title"]),c.content instanceof Array||(c.content=[c.content]),c=e.extend(!0,{},s.opts.navbar,c);var h=e('<div class="'+i.navbar+'" />'),f=c.height;"number"!=typeof f&&(f=1),f=Math.min(4,Math.max(1,f)),h.addClass(i.navbar+"-size-"+f);var u=c.position;"bottom"!=u&&(u="top"),l[u]||(l[u]=0),l[u]+=f,d[u]||(d[u]=e('<div class="'+i.navbars+"-"+u+'" />')),d[u].append(h);for(var p=0,v=0,m=c.content.length;v<m;v++){var b=e[t].addons[n][c.content[v]]||!1;b?p+=b.call(s,h,c,r):(b=c.content[v],b instanceof e||(b=e(c.content[v])),h.append(b))}p+=Math.ceil(h.children().not("."+i.btn).length/f),p>1&&h.addClass(i.navbar+"-content-"+p),h.children("."+i.btn).length&&h.addClass(i.hasbtns)}),this.bind("initMenu:after",function(){for(var e in l)this.$menu.addClass(i.hasnavbar+"-"+e+"-"+l[e]),this.$menu["bottom"==e?"append":"prepend"](d[e])}))}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("navbars close hasbtns")},clickAnchor:function(e,t){}},e[t].configuration[n]={breadcrumbSeparator:"/"},e[t].configuration.classNames[n]={};var i,s,a,o}(jQuery),/*
 * jQuery mmenu navbar add-on breadcrumbs content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="navbars",i="breadcrumbs";e[t].addons[n][i]=function(n,i,s){var a=this,o=e[t]._c,r=e[t]._d;o.add("breadcrumbs separator");var l=e('<span class="'+o.breadcrumbs+'" />').appendTo(n);return this.bind("initNavbar:after",function(t){t.removeClass(o.hasnavbar);for(var n=[],i=e('<span class="'+o.breadcrumbs+'"></span>'),a=t,l=!0;a&&a.length;){if(a.is("."+o.panel)||(a=a.closest("."+o.panel)),!a.hasClass(o.vertical)){var d=a.children("."+o.navbar).children("."+o.title).text();n.unshift(l?"<span>"+d+"</span>":'<a href="#'+a.attr("id")+'">'+d+"</a>"),l=!1}a=a.data(r.parent)}i.append(n.join('<span class="'+o.separator+'">'+s.breadcrumbSeparator+"</span>")).appendTo(t.children("."+o.navbar))}),this.bind("openPanel:start",function(e){l.html(e.children("."+o.navbar).children("."+o.breadcrumbs).html()||"")}),this.bind("initNavbar:after:sr-aria",function(t){t.children("."+o.navbar).children("."+o.breadcrumbs).children("a").each(function(){a.__sr_aria(e(this),"owns",e(this).attr("href").slice(1))})}),0}}(jQuery),/*
 * jQuery mmenu navbar add-on close content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="navbars",i="close";e[t].addons[n][i]=function(n,i){var s=e[t]._c,a=(e[t].glbl,e('<a class="'+s.close+" "+s.btn+'" href="#" />').appendTo(n));return this.bind("setPage:after",function(e){a.attr("href","#"+e.attr("id"))}),this.bind("setPage:after:sr-text",function(n){a.html(this.__sr_text(e[t].i18n(this.conf.screenReader.text.closeMenu))),this.__sr_aria(a,"owns",a.attr("href").slice(1))}),-1}}(jQuery),/*
 * jQuery mmenu navbar add-on next content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="navbars",i="next";e[t].addons[n][i]=function(i,s){var a,o,r,l=e[t]._c,d=e('<a class="'+l.next+" "+l.btn+'" href="#" />').appendTo(i);return this.bind("openPanel:start",function(e){a=e.find("."+this.conf.classNames[n].panelNext),o=a.attr("href"),r=a.html(),o?d.attr("href",o):d.removeAttr("href"),d[o||r?"removeClass":"addClass"](l.hidden),d.html(r)}),this.bind("openPanel:start:sr-aria",function(e){this.__sr_aria(d,"hidden",d.hasClass(l.hidden)),this.__sr_aria(d,"owns",(d.attr("href")||"").slice(1))}),-1},e[t].configuration.classNames[n].panelNext="Next"}(jQuery),/*
 * jQuery mmenu navbar add-on prev content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="navbars",i="prev";e[t].addons[n][i]=function(i,s){var a=e[t]._c,o=e('<a class="'+a.prev+" "+a.btn+'" href="#" />').appendTo(i);this.bind("initNavbar:after",function(e){e.removeClass(a.hasnavbar)});var r,l,d;return this.bind("openPanel:start",function(e){e.hasClass(a.vertical)||(r=e.find("."+this.conf.classNames[n].panelPrev),r.length||(r=e.children("."+a.navbar).children("."+a.prev)),l=r.attr("href"),d=r.html(),l?o.attr("href",l):o.removeAttr("href"),o[l||d?"removeClass":"addClass"](a.hidden),o.html(d))}),this.bind("initNavbar:after:sr-aria",function(e){var t=e.children("."+a.navbar);this.__sr_aria(t,"hidden",!0)}),this.bind("openPanel:start:sr-aria",function(e){this.__sr_aria(o,"hidden",o.hasClass(a.hidden)),this.__sr_aria(o,"owns",(o.attr("href")||"").slice(1))}),-1},e[t].configuration.classNames[n].panelPrev="Prev"}(jQuery),/*
 * jQuery mmenu navbar add-on searchfield content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="navbars",i="searchfield";e[t].addons[n][i]=function(n,i){var s=e[t]._c,a=e('<div class="'+s.search+'" />').appendTo(n);return"object"!=typeof this.opts.searchfield&&(this.opts.searchfield={}),this.opts.searchfield.add=!0,this.opts.searchfield.addTo=a,0}}(jQuery),/*
 * jQuery mmenu navbar add-on title content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="navbars",i="title";e[t].addons[n][i]=function(i,s){var a,o,r,l=e[t]._c,d=e('<a class="'+l.title+'" />').appendTo(i);this.bind("openPanel:start",function(e){e.hasClass(l.vertical)||(r=e.find("."+this.conf.classNames[n].panelTitle),r.length||(r=e.children("."+l.navbar).children("."+l.title)),a=r.attr("href"),o=r.html()||s.title,a?d.attr("href",a):d.removeAttr("href"),d[a||o?"removeClass":"addClass"](l.hidden),d.html(o))});var c;return this.bind("openPanel:start:sr-aria",function(e){if(this.opts.screenReader.text&&(c||(c=this.$menu.children("."+l.navbars+"-top, ."+l.navbars+"-bottom").children("."+l.navbar).children("."+l.prev)),c.length)){var t=!0;"parent"==this.opts.navbar.titleLink&&(t=!c.hasClass(l.hidden)),this.__sr_aria(d,"hidden",t)}}),0},e[t].configuration.classNames[n].panelTitle="Title"}(jQuery),/*
 * jQuery mmenu pageScroll add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){function t(e){d&&d.length&&d.is(":visible")&&l.$html.add(l.$body).animate({scrollTop:d.offset().top+e}),d=!1}function n(e){try{return!("#"==e||"#"!=e.slice(0,1)||!l.$page.find(e).length)}catch(t){return!1}}var i="mmenu",s="pageScroll";e[i].addons[s]={setup:function(){var o=this,d=this.opts[s],c=this.conf[s];if(l=e[i].glbl,"boolean"==typeof d&&(d={scroll:d}),d=this.opts[s]=e.extend(!0,{},e[i].defaults[s],d),d.scroll&&this.bind("close:finish",function(){t(c.scrollOffset)}),d.update){var o=this,h=[],f=[];o.bind("initListview:after",function(t){o.__filterListItemAnchors(t.find("."+a.listview).children("li")).each(function(){var t=e(this).attr("href");n(t)&&h.push(t)}),f=h.reverse()});var u=-1;l.$wndw.on(r.scroll+"-"+s,function(t){for(var n=l.$wndw.scrollTop(),i=0;i<f.length;i++)if(e(f[i]).offset().top<n+c.updateOffset){u!==i&&(u=i,o.setSelected(o.__filterListItemAnchors(o.$pnls.children("."+a.opened).find("."+a.listview).children("li")).filter('[href="'+f[i]+'"]').parent()));break}})}},add:function(){a=e[i]._c,o=e[i]._d,r=e[i]._e},clickAnchor:function(i,o){if(d=!1,o&&this.opts[s].scroll&&this.opts.offCanvas&&l.$page&&l.$page.length){var r=i.attr("href");n(r)&&(d=e(r),l.$html.hasClass(a.mm("widescreen"))&&t(this.conf[s].scrollOffset))}}},e[i].defaults[s]={scroll:!1,update:!1},e[i].configuration[s]={scrollOffset:0,updateOffset:50};var a,o,r,l,d=!1}(jQuery),/*
 * jQuery mmenu searchfield add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){function t(e){switch(e){case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:return!0}return!1}var n="mmenu",i="searchfield";e[n].addons[i]={setup:function(){var l=this,d=this.opts[i],c=this.conf[i];r=e[n].glbl,"boolean"==typeof d&&(d={add:d}),"object"!=typeof d&&(d={}),"boolean"==typeof d.resultsPanel&&(d.resultsPanel={add:d.resultsPanel}),d=this.opts[i]=e.extend(!0,{},e[n].defaults[i],d),c=this.conf[i]=e.extend(!0,{},e[n].configuration[i],c),this.bind("close:start",function(){this.$menu.find("."+s.search).find("input").blur()}),this.bind("initPanels:after",function(r){if(d.add){var h;switch(d.addTo){case"panels":h=r;break;default:h=this.$menu.find(d.addTo)}if(h.each(function(){var t=e(this);if(!t.is("."+s.panel)||!t.is("."+s.vertical)){if(!t.children("."+s.search).length){var i=l.__valueOrFn(c.clear,t),a=l.__valueOrFn(c.form,t),r=l.__valueOrFn(c.input,t),h=l.__valueOrFn(c.submit,t),f=e("<"+(a?"form":"div")+' class="'+s.search+'" />'),u=e('<input placeholder="'+e[n].i18n(d.placeholder)+'" type="text" autocomplete="off" />');f.append(u);var p;if(r)for(p in r)u.attr(p,r[p]);if(i&&e('<a class="'+s.btn+" "+s.clear+'" href="#" />').appendTo(f).on(o.click+"-searchfield",function(e){e.preventDefault(),u.val("").trigger(o.keyup+"-searchfield")}),a){for(p in a)f.attr(p,a[p]);h&&!i&&e('<a class="'+s.btn+" "+s.next+'" href="#" />').appendTo(f).on(o.click+"-searchfield",function(e){e.preventDefault(),f.submit()})}t.hasClass(s.search)?t.replaceWith(f):t.prepend(f).addClass(s.hassearch)}if(d.noResults){var v=t.closest("."+s.panel).length;if(v||(t=l.$pnls.children("."+s.panel).first()),!t.children("."+s.noresultsmsg).length){var m=t.children("."+s.listview).first(),b=e('<div class="'+s.noresultsmsg+" "+s.hidden+'" />');b.append(e[n].i18n(d.noResults))[m.length?"insertAfter":"prependTo"](m.length?m:t)}}}}),d.search){if(d.resultsPanel.add){d.showSubPanels=!1;var f=this.$pnls.children("."+s.resultspanel);f.length||(f=e('<div class="'+s.resultspanel+" "+s.noanimation+" "+s.hidden+'" />').appendTo(this.$pnls).append('<div class="'+s.navbar+" "+s.hidden+'"><a class="'+s.title+'">'+e[n].i18n(d.resultsPanel.title)+"</a></div>").append('<ul class="'+s.listview+'" />').append(this.$pnls.find("."+s.noresultsmsg).first().clone()),this._initPanel(f))}this.$menu.find("."+s.search).each(function(){var n,r,c=e(this),h=c.closest("."+s.panel).length;h?(n=c.closest("."+s.panel),r=n):(n=e("."+s.panel,l.pnls),r=l.$menu),d.resultsPanel.add&&(n=n.not(f));var u=c.children("input"),p=l.__findAddBack(n,"."+s.listview).children("li"),v=p.filter("."+s.divider),m=l.__filterListItems(p),b="a",g=b+", span",_="",C=function(){var t=u.val().toLowerCase();if(t!=_){if(_=t,d.resultsPanel.add&&f.children("."+s.listview).empty(),n.scrollTop(0),m.add(v).addClass(s.hidden).find("."+s.fullsubopensearch).removeClass(s.fullsubopen+" "+s.fullsubopensearch),m.each(function(){var t=e(this),n=b;(d.showTextItems||d.showSubPanels&&t.find("."+s.next))&&(n=g);var i=t.data(a.searchtext)||t.children(n).not("."+s.next).text();i.toLowerCase().indexOf(_)>-1&&t.add(t.prevAll("."+s.divider).first()).removeClass(s.hidden)}),d.showSubPanels&&n.each(function(t){var n=e(this);l.__filterListItems(n.find("."+s.listview).children()).each(function(){var t=e(this),n=t.data(a.child);t.removeClass(s.nosubresults),n&&n.find("."+s.listview).children().removeClass(s.hidden)})}),d.resultsPanel.add)if(""===_)this.closeAllPanels(),this.openPanel(this.$pnls.children("."+s.subopened).last());else{var i=e();n.each(function(){var t=l.__filterListItems(e(this).find("."+s.listview).children()).not("."+s.hidden).clone(!0);t.length&&(d.resultsPanel.dividers&&(i=i.add('<li class="'+s.divider+'">'+e(this).children("."+s.navbar).children("."+s.title).text()+"</li>")),t.children("."+s.mm("toggle")+", ."+s.mm("check")).remove(),i=i.add(t))}),i.find("."+s.next).remove(),f.children("."+s.listview).append(i),this.openPanel(f)}else e(n.get().reverse()).each(function(t){var n=e(this),i=n.data(a.parent);i&&(l.__filterListItems(n.find("."+s.listview).children()).length?(i.hasClass(s.hidden)&&i.children("."+s.next).not("."+s.fullsubopen).addClass(s.fullsubopen).addClass(s.fullsubopensearch),i.removeClass(s.hidden).removeClass(s.nosubresults).prevAll("."+s.divider).first().removeClass(s.hidden)):h||(n.hasClass(s.opened)&&setTimeout(function(){l.openPanel(i.closest("."+s.panel))},(t+1)*(1.5*l.conf.openingInterval)),i.addClass(s.nosubresults)))});r.find("."+s.noresultsmsg)[m.not("."+s.hidden).length?"addClass":"removeClass"](s.hidden),this.trigger("updateListview")}};u.off(o.keyup+"-"+i+" "+o.change+"-"+i).on(o.keyup+"-"+i,function(e){t(e.keyCode)||C.call(l)}).on(o.change+"-"+i,function(e){C.call(l)});var y=c.children("."+s.btn);y.length&&u.on(o.keyup+"-"+i,function(e){y[u.val().length?"removeClass":"addClass"](s.hidden)}),u.trigger(o.keyup+"-"+i)})}}})},add:function(){s=e[n]._c,a=e[n]._d,o=e[n]._e,s.add("clear search hassearch resultspanel noresultsmsg noresults nosubresults fullsubopensearch"),a.add("searchtext"),o.add("change keyup")},clickAnchor:function(e,t){}},e[n].defaults[i]={add:!1,addTo:"panels",placeholder:"Search",noResults:"No results found.",resultsPanel:{add:!1,dividers:!0,title:"Search results"},search:!0,showTextItems:!1,showSubPanels:!0},e[n].configuration[i]={clear:!1,form:!1,input:!1,submit:!1};var s,a,o,r}(jQuery),/*
 * jQuery mmenu RTL add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="rtl";e[t].addons[n]={setup:function(){var s=this.opts[n];this.conf[n];o=e[t].glbl,"object"!=typeof s&&(s={use:s}),s=this.opts[n]=e.extend(!0,{},e[t].defaults[n],s),"boolean"!=typeof s.use&&(s.use="rtl"==(o.$html.attr("dir")||"").toLowerCase()),s.use&&this.bind("initMenu:after",function(){this.$menu.addClass(i.rtl)})},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("rtl")},clickAnchor:function(e,t){}},e[t].defaults[n]={use:"detect"};var i,s,a,o}(jQuery),/*
 * jQuery mmenu sectionIndexer add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="sectionIndexer";e[t].addons[n]={setup:function(){var s=this,r=this.opts[n];this.conf[n];o=e[t].glbl,"boolean"==typeof r&&(r={add:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),this.bind("initPanels:after",function(t){if(r.add){var o;switch(r.addTo){case"panels":o=t;break;default:o=e(r.addTo,this.$menu).filter("."+i.panel)}o.find("."+i.divider).closest("."+i.panel).addClass(i.hasindexer),this.$indexer||(this.$indexer=e('<div class="'+i.indexer+'" />').prependTo(this.$pnls).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'),this.$indexer.children().on(a.mouseover+"-"+n+" "+a.touchstart+"-"+n,function(t){var n=e(this).attr("href").slice(1),a=s.$pnls.children("."+i.opened),o=a.find("."+i.listview),r=-1,l=a.scrollTop();a.scrollTop(0),o.children("."+i.divider).not("."+i.hidden).each(function(){r<0&&n==e(this).text().slice(0,1).toLowerCase()&&(r=e(this).position().top)}),a.scrollTop(r>-1?r:l)}));var l=function(e){e=e||this.$pnls.children("."+i.opened),this.$menu[(e.hasClass(i.hasindexer)?"add":"remove")+"Class"](i.hasindexer)};this.bind("openPanel:start",l),this.bind("initPanels:after",l)}})},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("indexer hasindexer"),a.add("mouseover")},clickAnchor:function(e,t){if(e.parent().is("."+i.indexer))return!0}},e[t].defaults[n]={add:!1,addTo:"panels"};var i,s,a,o}(jQuery),/*
 * jQuery mmenu toggles add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="toggles";e[t].addons[n]={setup:function(){var s=this;this.opts[n],this.conf[n];o=e[t].glbl,this.bind("initListview:after",function(t){this.__refactorClass(t.find("input"),this.conf.classNames[n].toggle,"toggle"),this.__refactorClass(t.find("input"),this.conf.classNames[n].check,"check"),t.find("input."+i.toggle+", input."+i.check).each(function(){var t=e(this),n=t.closest("li"),a=t.hasClass(i.toggle)?"toggle":"check",o=t.attr("id")||s.__getUniqueId();n.children('label[for="'+o+'"]').length||(t.attr("id",o),n.prepend(t),e('<label for="'+o+'" class="'+i[a]+'"></label>').insertBefore(n.children("a, span").last()))})})},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("toggle check")},clickAnchor:function(e,t){}},e[t].configuration.classNames[n]={toggle:"Toggle",check:"Check"};var i,s,a,o}(jQuery),/*
 * jQuery mmenu setSelected add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="setSelected";e[t].addons[n]={setup:function(){var a=this,r=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof r&&(r={hover:r,parent:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),"detect"==r.current){var l=function(e){e=e.split("?")[0].split("#")[0];var t=a.$menu.find('a[href="'+e+'"], a[href="'+e+'/"]');t.length?a.setSelected(t.parent(),!0):(e=e.split("/").slice(0,-1),e.length&&l(e.join("/")))};this.bind("initMenu:after",function(){l(window.location.href)})}else r.current||this.bind("initListview:after",function(e){this.$pnls.find("."+i.listview).children("."+i.selected).removeClass(i.selected)});r.hover&&this.bind("initMenu:after",function(){this.$menu.addClass(i.hoverselected)}),r.parent&&(this.bind("openPanel:finish",function(e){this.$pnls.find("."+i.listview).find("."+i.next).removeClass(i.selected);for(var t=e.data(s.parent);t;)t.not("."+i.vertical).children("."+i.next).addClass(i.selected),t=t.closest("."+i.panel).data(s.parent)}),this.bind("initMenu:after",function(){this.$menu.addClass(i.parentselected)}))},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("hoverselected parentselected")},clickAnchor:function(e,t){}},e[t].defaults[n]={current:!0,hover:!1,parent:!1};var i,s,a,o}(jQuery);
return true;
}));


// MMenu Ends


// Layer Slider Starts

/*!
* LayerSlider is using TweenLite, TimeLineLite, EasePack & CSSPlugin
*/
;eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('!18(t,e){"4I 4J";1b i=t.5r=t.5r||t;1c(!i.3A){1b r,s,n,a,o,l=18(t){1b e,r=t.1t("."),s=i;1d(e=0;r.1f>e;e++)s[r[e]]=s=s[r[e]]||{};1a s},h=l("5p.5o"),u=1e-10,f=18(t){1b e,i=[],r=t.1f;1d(e=0;e!==r;i.24(t[e++]));1a i},p=18(){},19=18(){1b t=az.1A.a1,e=t.2h([]);1a 18(i){1a 1g!=i&&(i 2p 42||"4q"==1k i&&!!i.24&&t.2h(i)===e)}}(),c={},d=18(r,s,n,a){15.59=c[r]?c[r].59:[],c[r]=15,15.5C=1g,15.9D=n;1b o=[];15.6Q=18(h){1d(1b u,f,p,19,m=s.1f,g=m;--m>-1;)(u=c[s[m]]||1j d(s[m],[])).5C?(o[m]=u.5C,g--):h&&u.59.24(15);1c(0===g&&n)1d(f=("5p.5o."+r).1t("."),p=f.4K(),19=l(f.1I("."))[p]=15.5C=n.4i(n,o),a&&(i[p]=19,"18"==1k 3H&&3H.6R?3H((t.8U?t.8U+"/":"")+r.1t(".").4K(),[],18(){1a 19}):r===e&&"37"!=1k 2k&&2k.3n&&(2k.3n=19)),m=0;15.59.1f>m;m++)15.59[m].6Q()},15.6Q(!0)},m=t.3J=18(t,e,i,r){1a 1j d(t,e,i,r)},g=h.8z=18(t,e,i){1a e=e||18(){},m(t,[],18(){1a e},i),e};m.70=i;1b v=[0,0,1,1],x=[],y=g("2A.8A",18(t,e,i,r){15.7b=t,15.7C=i||0,15.7A=r||0,15.7a=e?v.4O(e):v},!0),T=y.8Y={},w=y.8y=18(t,e,i,r){1d(1b s,n,a,o,l=e.1t(","),u=l.1f,f=(i||"5G,6U,5A").1t(",");--u>-1;)1d(n=l[u],s=r?g("2A."+n,1g,!0):h.2A[n]||{},a=f.1f;--a>-1;)o=f[a],T[n+"."+o]=T[o+n]=s[o]=t.2C?t:t[o]||1j t};1d(n=y.1A,n.3T=!1,n.2C=18(t){1c(15.7b)1a 15.7a[0]=t,15.7b.4i(1g,15.7a);1b e=15.7C,i=15.7A,r=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);1a 1===i?r*=r:2===i?r*=r*r:3===i?r*=r*r*r:4===i&&(r*=r*r*r*r),1===e?1-r:2===e?r:.5>t?r/2:1-r/2},r=["9o","7T","bt","aW","aM,aP"],s=r.1f;--s>-1;)n=r[s]+",ba"+s,w(1j y(1g,1g,1,s),n,"6U",!0),w(1j y(1g,1g,2,s),n,"5G"+(0===s?",aH":"")),w(1j y(1g,1g,3,s),n,"5A");T.bz=h.2A.9o.5G,T.an=h.2A.7T.5A;1b b=g("8q.8p",18(t){15.4n={},15.7R=t||15});n=b.1A,n.9V=18(t,e,i,r,s){s=s||0;1b n,l,h=15.4n[t],u=0;1d(1g==h&&(15.4n[t]=h=[]),l=h.1f;--l>-1;)n=h[l],n.c===e&&n.s===i?h.3c(l,1):0===u&&s>n.2w&&(u=l+1);h.3c(u,0,{c:e,s:i,8Z:r,2w:s}),15!==a||o||a.3g()},n.bm=18(t,e){1b i,r=15.4n[t];1c(r)1d(i=r.1f;--i>-1;)1c(r[i].c===e)1a 2y r.3c(i,1)},n.8v=18(t){1b e,i,r,s=15.4n[t];1c(s)1d(e=s.1f,i=15.7R;--e>-1;)r=s[e],r&&(r.8Z?r.c.2h(r.s||i,{2f:t,2J:i}):r.c.2h(r.s||i))};1b P=t.aJ,O=t.aw,S=84.aN||18(){1a(1j 84).bs()},k=S();1d(r=["6a","bq","9U","o"],s=r.1f;--s>-1&&!P;)P=t[r[s]+"bp"],O=t[r[s]+"bk"]||t[r[s]+"a8"];g("6f",18(t,e){1b i,r,s,n,l,h=15,f=S(),19=e!==!1&&P,c=a5,d=33,m="6h",g=18(t){1b e,a,o=S()-k;o>c&&(f+=o-d),k+=o,h.3q=(k-f)/8l,e=h.3q-l,(!i||e>0||t===!0)&&(h.3C++,l+=e+(e>=n?.aF:n-e),a=!0),t!==!0&&(s=r(g)),a&&h.8v(m)};b.2h(h),h.3q=h.3C=0,h.6h=18(){g(!0)},h.7e=18(t,e){c=t||1/u,d=1i.aD(e,c,0)},h.67=18(){1g!=s&&(19&&O?O(s):ao(s),r=p,s=1g,h===a&&(o=!1))},h.3g=18(){1g!==s?h.67():h.3C>10&&(k=S()-c+5),r=0===i?p:19&&P?P:18(t){1a 6j(t,0|8l*(l-h.3q)+1)},h===a&&(o=!0),g(2)},h.6T=18(t){1a 2n.1f?(i=t,n=1/(i||60),l=15.3q+n,2y h.3g()):i},h.8j=18(t){1a 2n.1f?(h.67(),19=t,2y h.6T(i)):19},h.6T(t),6j(18(){19&&5>h.3C&&h.8j(!1)},aI)}),n=h.6f.1A=1j h.8q.8p,n.2V=h.6f;1b A=g("5N.93",18(t,e){1c(15.1w=e=e||{},15.1D=15.2i=t||0,15.2K=1P(e.4F)||0,15.1C=1,15.2l=e.1X===!0,15.1y=e.1y,15.2F=e.4y===!0,V){o||a.3g();1b i=15.1w.7l?j:V;i.1V(15,i.1p),15.1w.2W&&15.2W(!0)}});a=A.78=1j h.6f,n=A.1A,n.2z=n.1K=n.2u=n.1F=!1,n.1E=n.1p=0,n.1B=-1,n.1h=n.3i=n.3O=n.1r=n.26=1g,n.1F=!1;1b C=18(){o&&S()-k>8E&&a.3g(),6j(C,8E)};C(),n.7P=18(t,e){1a 1g!=t&&15.41(t,e),15.4y(!1).2W(!1)},n.7f=18(t,e){1a 1g!=t&&15.41(t,e),15.2W(!0)},n.aa=18(t,e){1a 1g!=t&&15.41(t,e),15.2W(!1)},n.41=18(t,e){1a 15.2R(1P(t),e!==!1)},n.ah=18(t,e){1a 15.4y(!1).2W(!1).2R(t?-15.2K:0,e!==!1,!0)},n.80=18(t,e){1a 1g!=t&&15.41(t||15.27(),e),15.4y(!0).2W(!1)},n.1G=18(){},n.4H=18(){1a 15.1p=15.1E=0,15.2u=15.1K=!1,15.1B=-1,(15.1K||!15.26)&&15.1H(!0),15},n.5c=18(){1b t,e=15.1r,i=15.1l;1a!e||!15.1K&&!15.1F&&e.5c()&&(t=e.4g())>=i&&i+15.27()/15.1C>t},n.1H=18(t,e){1a o||a.3g(),15.1K=!t,15.2l=15.5c(),e!==!0&&(t&&!15.26?15.1r.1V(15,15.1l-15.2K):!t&&15.26&&15.1r.40(15,!0)),!1},n.2s=18(){1a 15.1H(!1,!1)},n.3R=18(t,e){1a 15.2s(t,e),15},n.3m=18(t){1d(1b e=t?15:15.26;e;)e.2z=!0,e=e.26;1a 15},n.5R=18(t){1d(1b e=t.1f,i=t.4O();--e>-1;)"{5v}"===t[e]&&(i[e]=15);1a i},n.4j=18(t){1b e=15.1w;e[t].4i(e[t+"8h"]||e.5s||15,e[t+"8I"]||x)},n.ab=18(t,e,i,r){1c("bw"===(t||"").1u(0,2)){1b s=15.1w;1c(1===2n.1f)1a s[t];1g==e?4d s[t]:(s[t]=e,s[t+"8I"]=19(i)&&-1!==i.1I("").1m("{5v}")?15.5R(i):i,s[t+"8h"]=r),"4B"===t&&(15.3O=e)}1a 15},n.4F=18(t){1a 2n.1f?(15.1r.2r&&15.8M(15.1l+t-15.2K),15.2K=t,15):15.2K},n.2B=18(t){1a 2n.1f?(15.1D=15.2i=t,15.3m(!0),15.1r.2r&&15.1p>0&&15.1p<15.1D&&0!==t&&15.2R(15.1E*(t/15.1D),!0),15):(15.2z=!1,15.1D)},n.27=18(t){1a 15.2z=!1,2n.1f?15.2B(t):15.2i},n.3q=18(t,e){1a 2n.1f?(15.2z&&15.27(),15.2R(t>15.1D?15.1D:t,e)):15.1p},n.2R=18(t,e,i){1c(o||a.3g(),!2n.1f)1a 15.1E;1c(15.1r){1c(0>t&&!i&&(t+=15.27()),15.1r.2r){15.2z&&15.27();1b r=15.2i,s=15.1r;1c(t>r&&!i&&(t=r),15.1l=(15.1F?15.5g:s.1p)-(15.2F?r-t:t)/15.1C,s.2z||15.3m(!1),s.1r)1d(;s.1r;)s.1r.1p!==(s.1l+s.1E)/s.1C&&s.2R(s.1E,!0),s=s.1r}15.1K&&15.1H(!0,!1),(15.1E!==t||0===15.1D)&&(15.1G(t,e,!1),z.1f&&q())}1a 15},n.bv=n.br=18(t,e){1a 2n.1f?15.2R(15.2B()*t,e):15.1p/15.2B()},n.8M=18(t){1a 2n.1f?(t!==15.1l&&(15.1l=t,15.26&&15.26.4V&&15.26.1V(15,t-15.2K)),15):15.1l},n.aR=18(t){1a 15.1l+(0!=t?15.27():15.2B())/15.1C},n.6M=18(t){1c(!2n.1f)1a 15.1C;1c(t=t||u,15.1r&&15.1r.2r){1b e=15.5g,i=e||0===e?e:15.1r.2R();15.1l=i-(i-15.1l)*15.1C/t}1a 15.1C=t,15.3m(!1)},n.4y=18(t){1a 2n.1f?(t!=15.2F&&(15.2F=t,15.2R(15.1r&&!15.1r.2r?15.27()-15.1E:15.1E,!0)),15):15.2F},n.2W=18(t){1c(!2n.1f)1a 15.1F;1b e,i,r=15.1r;1a t!=15.1F&&r&&(o||t||a.3g(),e=r.4g(),i=e-15.5g,!t&&r.2r&&(15.1l+=i,15.3m(!1)),15.5g=t?e:1g,15.1F=t,15.2l=15.5c(),!t&&0!==i&&15.2u&&15.2B()&&15.1G(r.2r?15.1E:(e-15.1l)/15.1C,!0,!0)),15.1K&&!t&&15.1H(!0,!1),15};1b R=g("5N.95",18(t){A.2h(15,0,t),15.3N=15.2r=!0});n=R.1A=1j A,n.2V=R,n.3R().1K=!1,n.28=n.3i=n.4W=1g,n.4V=!1,n.1V=n.85=18(t,e){1b i,r;1c(t.1l=1P(e||0)+t.2K,t.1F&&15!==t.1r&&(t.5g=t.1l+(15.4g()-t.1l)/t.1C),t.26&&t.26.40(t,!0),t.26=t.1r=15,t.1K&&t.1H(!0,!0),i=15.3i,15.4V)1d(r=t.1l;i&&i.1l>r;)i=i.1n;1a i?(t.1h=i.1h,i.1h=t):(t.1h=15.28,15.28=t),t.1h?t.1h.1n=t:15.3i=t,t.1n=i,15.4W=t,15.1r&&15.3m(!0),15},n.40=18(t,e){1a t.26===15&&(e||t.1H(!1,!0),t.1n?t.1n.1h=t.1h:15.28===t&&(15.28=t.1h),t.1h?t.1h.1n=t.1n:15.3i===t&&(15.3i=t.1n),t.1h=t.1n=t.26=1g,t===15.4W&&(15.4W=15.3i),15.1r&&15.3m(!0)),15},n.1G=18(t,e,i){1b r,s=15.28;1d(15.1E=15.1p=15.1B=t;s;)r=s.1h,(s.2l||t>=s.1l&&!s.1F)&&(s.2F?s.1G((s.2z?s.27():s.2i)-(t-s.1l)*s.1C,e,i):s.1G((t-s.1l)*s.1C,e,i)),s=r},n.4g=18(){1a o||a.3g(),15.1E};1b M=g("3A",18(e,i,r){1c(A.2h(15,i,r),15.1G=M.1A.1G,1g==e)7g"7W 3V a 1g 2J.";15.2J=e="1O"!=1k e?e:M.48(e)||e;1b s,n,a,o=e.aQ||e.1f&&e!==t&&e[0]&&(e[0]===t||e[0].3S&&e[0].1v&&!e.3S),l=15.1w.5e;1c(15.7j=l=1g==l?B[M.7O]:"2E"==1k l?l>>0:B[l],(o||e 2p 42||e.24&&19(e))&&"2E"!=1k e[0])1d(15.2N=a=f(e),15.4a=[],15.3b=[],s=0;a.1f>s;s++)n=a[s],n?"1O"!=1k n?n.1f&&n!==t&&n[0]&&(n[0]===t||n[0].3S&&n[0].1v&&!n.3S)?(a.3c(s--,1),15.2N=a=a.4O(f(n))):(15.3b[s]=W(n,15,!1),1===l&&15.3b[s].1f>1&&G(n,15,1g,1,15.3b[s])):(n=a[s--]=M.48(n),"1O"==1k n&&a.3c(s+1,1)):a.3c(s--,1);1o 15.4a={},15.3b=W(e,15,!1),1===l&&15.3b.1f>1&&G(e,15,1g,1,15.3b);(15.1w.1X||0===i&&0===15.2K&&15.1w.1X!==!1)&&(15.1p=-u,15.1G(-15.2K))},!0),D=18(e){1a e&&e.1f&&e!==t&&e[0]&&(e[0]===t||e[0].3S&&e[0].1v&&!e.3S)},X=18(t,e){1b i,r={};1d(i 1x t)Y[i]||i 1x e&&"2Q"!==i&&"x"!==i&&"y"!==i&&"2D"!==i&&"3j"!==i&&"3M"!==i&&"4w"!==i||!(!N[i]||N[i]&&N[i].aX)||(r[i]=t[i],4d t[i]);t.57=r};n=M.1A=1j A,n.2V=M,n.3R().1K=!1,n.3x=0,n.1s=n.2N=n.3z=n.1Z=1g,n.56=n.3k=!1,M.4M="1.17.0",M.7B=n.2M=1j y(1g,1g,1,1),M.7O="2m",M.78=a,M.7y=9K,M.7e=18(t,e){a.7e(t,e)},M.48=t.$||t.7X||18(e){1b i=t.$||t.7X;1a i?(M.48=i,i(e)):"37"==1k 52?e:52.91?52.91(e):52.af("#"===e.1z(0)?e.1u(1):e)};1b z=[],F={},I=M.5f={9Y:19,9g:D,9Z:z},N=M.am={},E=I.a9={},L=0,Y=I.9C={4e:1,4F:1,5e:1,4E:1,6s:1,at:1,7l:1,5d:1,3o:1,4B:1,aY:1,b5:1,5h:1,b0:1,aZ:1,3Z:1,96:1,aS:1,by:1,bh:1,ac:1,69:1,aC:1,1X:1,5M:1,ar:1,1y:1,2W:1,4y:1,7n:1,2Z:1,5n:1,5s:1},B={3E:0,4A:1,2m:2,aK:3,au:4,av:5,"bo":1,"as":0},j=A.8n=1j R,V=A.ap=1j R,U=30,q=I.9P=18(){1b t,e=z.1f;1d(F={};--e>-1;)t=z[e],t&&t.3k!==!1&&(t.1G(t.3k[0],t.3k[1],!0),t.3k=!1);z.1f=0};V.1l=a.3q,j.1l=a.3C,V.2l=j.2l=!0,6j(q,1),A.8H=M.1G=18(){1b t,e,i;1c(z.1f&&q(),V.1G((a.3q-V.1l)*V.1C,!1,!1),j.1G((a.3C-j.1l)*j.1C,!1,!1),z.1f&&q(),a.3C>=U){U=a.3C+(3l(M.7y,10)||9K);1d(i 1x E){1d(e=E[i].3X,t=e.1f;--t>-1;)e[t].1K&&e.3c(t,1);0===e.1f&&4d E[i]}1c(i=V.28,(!i||i.1F)&&M.7y&&!j.28&&1===a.4n.6h.1f){1d(;i&&i.1F;)i=i.1h;i||a.67()}}},a.9V("6h",A.8H);1b W=18(t,e,i){1b r,s,n=t.6b;1c(E[n||(t.6b=n="t"+L++)]||(E[n]={2J:t,3X:[]}),e&&(r=E[n].3X,r[s=r.1f]=e,i))1d(;--s>-1;)r[s]===e&&r.3c(s,1);1a E[n].3X},Z=18(t,e,i,r){1b s,n,a=t.1w.5n;1a a&&(s=a(t,e,i,r)),a=M.5n,a&&(n=a(t,e,i,r)),s!==!1&&n!==!1},G=18(t,e,i,r,s){1b n,a,o,l;1c(1===r||r>=4){1d(l=s.1f,n=0;l>n;n++)1c((o=s[n])!==e)o.1K||o.2s(1g,t,e)&&(a=!0);1o 1c(5===r)8u;1a a}1b h,f=e.1l+u,p=[],19=0,c=0===e.1D;1d(n=s.1f;--n>-1;)(o=s[n])===e||o.1K||o.1F||(o.1r!==e.1r?(h=h||Q(e,0,c),0===Q(o,h,c)&&(p[19++]=o)):f>=o.1l&&o.1l+o.27()/o.1C>f&&((c||!o.2u)&&2e-10>=f-o.1l||(p[19++]=o)));1d(n=19;--n>-1;)1c(o=p[n],2===r&&o.2s(i,t,e)&&(a=!0),2!==r||!o.1s&&o.2u){1c(2!==r&&!Z(o,e))aV;o.1H(!1,!1)&&(a=!0)}1a a},Q=18(t,e,i){1d(1b r=t.1r,s=r.1C,n=t.1l;r.1r;){1c(n+=r.1l,s*=r.1C,r.1F)1a-1M;r=r.1r}1a n/=s,n>e?n-e:i&&n===e||!t.2u&&2*u>n-e?u:(n+=t.27()/t.1C/s)>e+u?0:n-e-u};n.7o=18(){1b t,e,i,r,s,n=15.1w,a=15.3z,o=15.1D,l=!!n.1X,h=n.4e;1c(n.3o){15.1Z&&(15.1Z.1G(-1,!0),15.1Z.3R()),s={};1d(r 1x n.3o)s[r]=n.3o[r];1c(s.5e=!1,s.1X=!0,s.2Z=l&&n.2Z!==!1,s.3o=s.4F=1g,15.1Z=M.4p(15.2J,0,s),l)1c(15.1p>0)15.1Z=1g;1o 1c(0!==o)1a}1o 1c(n.5d&&0!==o)1c(15.1Z)15.1Z.1G(-1,!0),15.1Z.3R(),15.1Z=1g;1o{0!==15.1p&&(l=!1),i={};1d(r 1x n)Y[r]&&"7n"!==r||(i[r]=n[r]);1c(i.5e=0,i.1y="82",i.2Z=l&&n.2Z!==!1,i.1X=l,15.1Z=M.4p(15.2J,0,i),l){1c(0===15.1p)1a}1o 15.1Z.7o(),15.1Z.1H(!1),15.1w.1X&&(15.1Z=1g)}1c(15.2M=h=h?h 2p y?h:"18"==1k h?1j y(h,n.69):T[h]||M.7B:M.7B,n.69 2p 42&&h.3y&&(15.2M=h.3y.4i(h,n.69)),15.7i=15.2M.7C,15.8r=15.2M.7A,15.1s=1g,15.2N)1d(t=15.2N.1f;--t>-1;)15.5m(15.2N[t],15.4a[t]={},15.3b[t],a?a[t]:1g)&&(e=!0);1o e=15.5m(15.2J,15.4a,15.3b,a);1c(e&&M.64("5S",15),a&&(15.1s||"18"!=1k 15.2J&&15.1H(!1,!1)),n.5d)1d(i=15.1s;i;)i.s+=i.c,i.c=-i.c,i=i.1h;15.3O=n.4B,15.2u=!0},n.5m=18(e,i,r,s){1b n,a,o,l,h,u;1c(1g==e)1a!1;F[e.6b]&&q(),15.1w.57||e.1v&&e!==t&&e.3S&&N.57&&15.1w.7n!==!1&&X(15.1w,e);1d(n 1x 15.1w){1c(u=15.1w[n],Y[n])u&&(u 2p 42||u.24&&19(u))&&-1!==u.1I("").1m("{5v}")&&(15.1w[n]=u=15.5R(u,15));1o 1c(N[n]&&(l=1j N[n]).72(e,15.1w[n],15)){1d(15.1s=h={1h:15.1s,t:l,p:"1Y",s:0,c:1,f:!0,n:n,5u:!0,2w:l.74},a=l.2P.1f;--a>-1;)i[l.2P[a]]=15.1s;(l.74||l.5S)&&(o=!0),(l.7x||l.9i)&&(15.56=!0)}1o 15.1s=i[n]=h={1h:15.1s,t:e,p:n,f:"18"==1k e[n],n:n,5u:!1,2w:0},h.s=h.f?e[n.1m("4Q")||"18"!=1k e["8P"+n.1u(3)]?n:"8P"+n.1u(3)]():1q(e[n]),h.c="1O"==1k u&&"="===u.1z(1)?3l(u.1z(0)+"1",10)*1P(u.1u(2)):1P(u)-h.s||0;h&&h.1h&&(h.1h.1n=h)}1a s&&15.2s(s,e)?15.5m(e,i,r,s):15.7j>1&&15.1s&&r.1f>1&&G(e,15,i,15.7j,r)?(15.2s(i,e),15.5m(e,i,r,s)):(15.1s&&(15.1w.2Z!==!1&&15.1D||15.1w.2Z&&!15.1D)&&(F[e.6b]=!0),o)},n.1G=18(t,e,i){1b r,s,n,a,o=15.1p,l=15.1D,h=15.1B;1c(t>=l)15.1E=15.1p=l,15.3x=15.2M.3T?15.2M.2C(1):1,15.2F||(r=!0,s="4E",i=i||15.1r.3N),0===l&&(15.2u||!15.1w.2Z||i)&&(15.1l===15.1r.1D&&(t=0),(0===t||0>h||h===u&&"5B"!==15.1y)&&h!==t&&(i=!0,h>u&&(s="3Z")),15.1B=a=!e||t||h===t?t:u);1o 1c(1e-7>t)15.1E=15.1p=0,15.3x=15.2M.3T?15.2M.2C(0):0,(0!==o||0===l&&h>0)&&(s="3Z",r=15.2F),0>t&&(15.2l=!1,0===l&&(15.2u||!15.1w.2Z||i)&&(h>=0&&(h!==u||"5B"!==15.1y)&&(i=!0),15.1B=a=!e||t||h===t?t:u)),15.2u||(i=!0);1o 1c(15.1E=15.1p=t,15.7i){1b f=t/l,p=15.7i,19=15.8r;(1===p||3===p&&f>=.5)&&(f=1-f),3===p&&(f*=2),1===19?f*=f:2===19?f*=f*f:3===19?f*=f*f*f:4===19&&(f*=f*f*f*f),15.3x=1===p?1-f:2===p?f:.5>t/l?f/2:1-f/2}1o 15.3x=15.2M.2C(t/l);1c(15.1p!==o||i){1c(!15.2u){1c(15.7o(),!15.2u||15.1K)1a;1c(!i&&15.1s&&(15.1w.2Z!==!1&&15.1D||15.1w.2Z&&!15.1D))1a 15.1p=15.1E=o,15.1B=h,z.24(15),2y(15.3k=[t,e]);15.1p&&!r?15.3x=15.2M.2C(15.1p/l):r&&15.2M.3T&&(15.3x=15.2M.2C(0===15.1p?0:1))}1d(15.3k!==!1&&(15.3k=!1),15.2l||!15.1F&&15.1p!==o&&t>=0&&(15.2l=!0),0===o&&(15.1Z&&(t>=0?15.1Z.1G(t,e,i):s||(s="bA")),15.1w.5h&&(0!==15.1p||0===l)&&(e||15.4j("5h"))),n=15.1s;n;)n.f?n.t[n.p](n.c*15.3x+n.s):n.t[n.p]=n.c*15.3x+n.s,n=n.1h;15.3O&&(0>t&&15.1Z&&t!==-1e-4&&15.1Z.1G(t,e,i),e||(15.1p!==o||r)&&15.4j("4B")),s&&(!15.1K||i)&&(0>t&&15.1Z&&!15.3O&&t!==-1e-4&&15.1Z.1G(t,e,i),r&&(15.1r.3N&&15.1H(!1,!1),15.2l=!1),!e&&15.1w[s]&&15.4j(s),0===l&&15.1B===u&&a!==u&&(15.1B=0))}},n.2s=18(t,e,i){1c("4A"===t&&(t=1g),1g==t&&(1g==e||e===15.2J))1a 15.3k=!1,15.1H(!1,!1);e="1O"!=1k e?e||15.2N||15.2J:M.48(e)||e;1b r,s,n,a,o,l,h,u,f,p=i&&15.1p&&i.1l===15.1l&&15.1r===i.1r;1c((19(e)||D(e))&&"2E"!=1k e[0])1d(r=e.1f;--r>-1;)15.2s(t,e[r],i)&&(l=!0);1o{1c(15.2N){1d(r=15.2N.1f;--r>-1;)1c(e===15.2N[r]){o=15.4a[r]||{},15.3z=15.3z||[],s=15.3z[r]=t?15.3z[r]||{}:"4A";8u}}1o{1c(e!==15.2J)1a!1;o=15.4a,s=15.3z=t?15.3z||{}:"4A"}1c(o){1c(h=t||o,u=t!==s&&"4A"!==s&&t!==o&&("4q"!=1k t||!t.aA),i&&(M.5n||15.1w.5n)){1d(n 1x h)o[n]&&(f||(f=[]),f.24(n));1c((f||!t)&&!Z(15,i,e,f))1a!1}1d(n 1x h)(a=o[n])&&(p&&(a.f?a.t[a.p](a.s):a.t[a.p]=a.s,l=!0),a.5u&&a.t.2s(h)&&(l=!0),a.5u&&0!==a.t.2P.1f||(a.1n?a.1n.1h=a.1h:a===15.1s&&(15.1s=a.1h),a.1h&&(a.1h.1n=a.1n),a.1h=a.1n=1g),4d o[n]),u&&(s[n]=1);!15.1s&&15.2u&&15.1H(!1,!1)}}1a l},n.4H=18(){1a 15.56&&M.64("7x",15),15.1s=15.3z=15.1Z=15.3O=1g,15.56=15.2l=15.3k=!1,15.4a=15.2N?{}:[],A.1A.4H.2h(15),15.1w.1X&&(15.1p=-u,15.1G(-15.2K)),15},n.1H=18(t,e){1c(o||a.3g(),t&&15.1K){1b i,r=15.2N;1c(r)1d(i=r.1f;--i>-1;)15.3b[i]=W(r[i],15,!0);1o 15.3b=W(15.2J,15,!0)}1a A.1A.1H.2h(15,t,e),15.56&&15.1s?M.64(t?"9i":"7x",15):!1},M.4p=18(t,e,i){1a 1j M(t,e,i)},M.6q=18(t,e,i){1a i.5d=!0,i.1X=0!=i.1X,1j M(t,e,i)},M.5Z=18(t,e,i,r){1a r.3o=i,r.1X=0!=r.1X&&0!=i.1X,1j M(t,e,r)},M.4v=18(t,e,i,r,s){1a 1j M(e,0,{4F:t,4E:e,6s:i,5s:r,3Z:e,96:i,1X:!1,2Z:!1,7l:s,5e:0})},M.4Q=18(t,e){1a 1j M(t,0,e)},M.4C=18(t,e){1c(1g==t)1a[];t="1O"!=1k t?t:M.48(t)||t;1b i,r,s,n;1c((19(t)||D(t))&&"2E"!=1k t[0]){1d(i=t.1f,r=[];--i>-1;)r=r.4O(M.4C(t[i],e));1d(i=r.1f;--i>-1;)1d(n=r[i],s=i;--s>-1;)n===r[s]&&r.3c(i,1)}1o 1d(r=W(t).4O(),i=r.1f;--i>-1;)(r[i].1K||e&&!r[i].5c())&&r.3c(i,1);1a r},M.aj=M.aq=18(t,e,i){"4q"==1k e&&(i=e,e=!1);1d(1b r=M.4C(t,e),s=r.1f;--s>-1;)r[s].2s(i,t)};1b $=g("5q.8O",18(t,e){15.2P=(t||"").1t(","),15.5t=15.2P[0],15.74=e||0,15.a3=$.1A},!0);1c(n=$.1A,$.4M="1.10.1",$.49=2,n.1s=1g,n.a6=18(t,e,i,r,s,n){1b a,o;1a 1g!=r&&(a="2E"==1k r||"="!==r.1z(1)?1P(r)-1P(i):3l(r.1z(0)+"1",10)*1P(r.1u(2)))?(15.1s=o={1h:15.1s,t:t,p:e,s:i,c:a,f:"18"==1k t[e],n:s||e,r:n},o.1h&&(o.1h.1n=o),o):2y 0},n.1Y=18(t){1d(1b e,i=15.1s,r=1e-6;i;)e=i.c*t+i.s,i.r?e=1i.3P(e):r>e&&e>-r&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i.1h},n.2s=18(t){1b e,i=15.2P,r=15.1s;1c(1g!=t[15.5t])15.2P=[];1o 1d(e=i.1f;--e>-1;)1g!=t[i[e]]&&i.3c(e,1);1d(;r;)1g!=t[r.n]&&(r.1h&&(r.1h.1n=r.1n),r.1n?(r.1n.1h=r.1h,r.1n=1g):15.1s===r&&(15.1s=r.1h)),r=r.1h;1a!1},n.9G=18(t,e){1d(1b i=15.1s;i;)(t[15.5t]||1g!=i.n&&t[i.n.1t(15.5t+"19").1I("")])&&(i.r=e),i=i.1h},M.64=18(t,e){1b i,r,s,n,a,o=e.1s;1c("5S"===t){1d(;o;){1d(a=o.1h,r=s;r&&r.2w>o.2w;)r=r.1h;(o.1n=r?r.1n:n)?o.1n.1h=o:s=o,(o.1h=r)?r.1n=o:n=o,o=a}o=e.1s=s}1d(;o;)o.5u&&"18"==1k o.t[t]&&o.t[t]()&&(i=!0),o=o.1h;1a i},$.6O=18(t){1d(1b e=t.1f;--e>-1;)t[e].49===$.49&&(N[(1j t[e]).5t]=t[e]);1a!0},m.2L=18(t){1c(!(t&&t.9J&&t.9H&&t.49))7g"ay 2L a4.";1b e,i=t.9J,r=t.6n||0,s=t.al,n={9H:"72",4Q:"1Y",3R:"2s",3P:"9G",aE:"5S"},a=g("5q."+i.1z(0).5Q()+i.1u(1)+"9Q",18(){$.2h(15,i,r),15.2P=s||[]},t.3G===!0),o=a.1A=1j $(i);o.2V=a,a.49=t.49;1d(e 1x n)"18"==1k t[e]&&(o[n[e]]=t[e]);1a a.4M=t.4M,$.6O([a]),a},r=t.3t){1d(s=0;r.1f>s;s++)r[s]();1d(n 1x c)c[n].9D||t.7d.7Q("bl aL bj bf: 5p.5o."+n)}o=!1}}("37"!=1k 2k&&2k.3n&&"37"!=1k 3G?3G:15||43,"3A");1b 1J="37"!=1k 2k&&2k.3n&&"37"!=1k 3G?3G:15||43;(1J.3t||(1J.3t=[])).24(18(){"4I 4J";1J.3J("8s",["5N.93","5N.95","3A"],18(t,e,i){1b r=18(t){e.2h(15,t),15.2U={},15.3N=15.1w.3N===!0,15.2r=15.1w.2r===!0,15.4V=!0,15.3O=15.1w.4B;1b i,r,s=15.1w;1d(r 1x s)i=s[r],l(i)&&-1!==i.1I("").1m("{5v}")&&(s[r]=15.5R(i));l(s.3X)&&15.1V(s.3X,0,s.b8,s.b1)},s=1e-10,n=i.5f,a=r.5f={},o=n.9g,l=n.9Y,h=n.9Z,u=n.9P,f=[],p=1J.3J.70,19=18(t){1b e,i={};1d(e 1x t)i[e]=t[e];1a i},c=a.aO=18(t,e,i,r){1b n,a=t.1r,o=a.1E,l=t.1l,h=0>t.1B||0===t.1B&&a.2F,u=h?0:s,p=h?s:0;1c(e||!15.58){1d(a.7f(l),n=t.1n;n&&n.1l===l;)n.1B=p,n=n.1n;1d(n=t.1h;n&&n.1l===l;)n.1B=u,n=n.1h;e&&e.4i(r||a.1w.5s||a,i||f),(15.58||!a.1F)&&a.41(o)}},d=18(t){1b e,i=[],r=t.1f;1d(e=0;e!==r;i.24(t[e++]));1a i},m=r.1A=1j e;1a r.4M="1.17.0",m.2V=r,m.3R().1K=m.58=!1,m.4p=18(t,e,r,s){1b n=r.5M&&p.7h||i;1a e?15.1V(1j n(t,e,r),s):15.4Q(t,r,s)},m.6q=18(t,e,r,s){1a 15.1V((r.5M&&p.7h||i).6q(t,e,r),s)},m.5Z=18(t,e,r,s,n){1b a=s.5M&&p.7h||i;1a e?15.1V(a.5Z(t,e,r,s),n):15.4Q(t,s,n)},m.6G=18(t,e,s,n,a,l,h,u){1b f,p=1j r({4E:l,6s:h,5s:u,2r:15.2r});1d("1O"==1k t&&(t=i.48(t)||t),t=t||[],o(t)&&(t=d(t)),n=n||0,0>n&&(t=d(t),t.80(),n*=-1),f=0;t.1f>f;f++)s.3o&&(s.3o=19(s.3o)),p.4p(t[f],e,19(s),f*n);1a 15.1V(p,a)},m.ax=18(t,e,i,r,s,n,a,o){1a i.1X=0!=i.1X,i.5d=!0,15.6G(t,e,i,r,s,n,a,o)},m.aB=18(t,e,i,r,s,n,a,o,l){1a r.3o=i,r.1X=0!=r.1X&&0!=i.1X,15.6G(t,e,r,s,n,a,o,l)},m.2h=18(t,e,r,s){1a 15.1V(i.4v(0,t,e,r),s)},m.4Q=18(t,e,r){1a r=15.3F(r,0,!0),1g==e.1X&&(e.1X=r===15.1p&&!15.1F),15.1V(1j i(t,0,e),r)},r.a0=18(t,e){t=t||{},1g==t.2r&&(t.2r=!0);1b s,n,a=1j r(t),o=a.1r;1d(1g==e&&(e=!0),o.40(a,!0),a.1l=0,a.1B=a.1p=a.1E=o.1p,s=o.28;s;)n=s.1h,e&&s 2p i&&s.2J===s.1w.4E||a.1V(s,s.1l-s.2K),s=n;1a o.1V(a,0),a},m.1V=18(s,n,a,o){1b h,u,f,p,19,c;1c("2E"!=1k n&&(n=15.3F(n,0,!0,s)),!(s 2p t)){1c(s 2p 42||s&&s.24&&l(s)){1d(a=a||"a2",o=o||0,h=n,u=s.1f,f=0;u>f;f++)l(p=s[f])&&(p=1j r({3X:p})),15.1V(p,h),"1O"!=1k p&&"18"!=1k p&&("ak"===a?h=p.1l+p.27()/p.1C:"ag"===a&&(p.1l-=p.4F())),h+=o;1a 15.3m(!0)}1c("1O"==1k s)1a 15.87(s,n);1c("18"!=1k s)7g"7W 1V "+s+" bi bd 26; bc bg 9h a 3V, 26, 18, bx 1O.";s=i.4v(0,s)}1c(e.1A.1V.2h(15,s,n),(15.1K||15.1p===15.1D)&&!15.1F&&15.1D<15.2B())1d(19=15,c=19.4g()>s.1l;19.1r;)c&&19.1r.2r?19.2R(19.1E,!0):19.1K&&19.1H(!0,!1),19=19.1r;1a 15},m.61=18(e){1c(e 2p t)1a 15.40(e,!1);1c(e 2p 42||e&&e.24&&l(e)){1d(1b i=e.1f;--i>-1;)15.61(e[i]);1a 15}1a"1O"==1k e?15.8g(e):15.3R(1g,e)},m.40=18(t,i){e.1A.40.2h(15,t,i);1b r=15.3i;1a r?15.1p>r.1l+r.2i/r.1C&&(15.1p=15.2B(),15.1E=15.2i):15.1p=15.1E=15.1D=15.2i=0,15},m.bb=18(t,e){1a 15.1V(t,15.3F(1g,e,!0,t))},m.85=m.aU=18(t,e,i,r){1a 15.1V(t,e||0,i,r)},m.b6=18(t,e,i,r){1a 15.1V(t,15.3F(1g,e,!0,t),i,r)},m.87=18(t,e){1a 15.2U[t]=15.3F(e),15},m.b3=18(t,e,r,s){1b n=i.4v(0,c,["{5v}",e,r,s],15);1a n.1y="5B",15.1V(n,t)},m.8g=18(t){1a 4d 15.2U[t],15},m.b2=18(t){1a 1g!=15.2U[t]?15.2U[t]:-1},m.3F=18(e,i,r,s){1b n;1c(s 2p t&&s.26===15)15.61(s);1o 1c(s&&(s 2p 42||s.24&&l(s)))1d(n=s.1f;--n>-1;)s[n]2p t&&s[n].26===15&&15.61(s[n]);1c("1O"==1k i)1a 15.3F(i,r&&"2E"==1k e&&1g==15.2U[i]?e-15.2B():0,r);1c(i=i||0,"1O"!=1k e||!76(e)&&1g==15.2U[e])1g==e&&(e=15.2B());1o{1c(n=e.1m("="),-1===n)1a 1g==15.2U[e]?r?15.2U[e]=15.2B()+i:i:15.2U[e]+i;i=3l(e.1z(n-1)+"1",10)*1P(e.1u(n+1)),e=n>1?15.3F(e.1u(0,n-1),0,r):15.2B()}1a 1P(e)+i},m.41=18(t,e){1a 15.2R("2E"==1k t?t:15.3F(t),e!==!1)},m.b4=18(){1a 15.2W(!0)},m.b9=18(t,e){1a 15.7P(t,e)},m.b7=18(t,e){1a 15.7f(t,e)},m.1G=18(t,e,i){15.1K&&15.1H(!0,!1);1b r,n,a,o,l,f=15.2z?15.27():15.2i,p=15.1p,19=15.1l,c=15.1C,d=15.1F;1c(t>=f)15.1E=15.1p=f,15.2F||15.7c()||(n=!0,o="4E",l=!!15.1r.3N,0===15.1D&&(0===t||0>15.1B||15.1B===s)&&15.1B!==t&&15.28&&(l=!0,15.1B>s&&(o="3Z"))),15.1B=15.1D||!e||t||15.1B===t?t:s,t=f+1e-4;1o 1c(1e-7>t)1c(15.1E=15.1p=0,(0!==p||0===15.1D&&15.1B!==s&&(15.1B>0||0>t&&15.1B>=0))&&(o="3Z",n=15.2F),0>t)15.2l=!1,15.1r.3N&&15.2F?(l=n=!0,o="3Z"):15.1B>=0&&15.28&&(l=!0),15.1B=t;1o{1c(15.1B=15.1D||!e||t||15.1B===t?t:s,0===t&&n)1d(r=15.28;r&&0===r.1l;)r.1D||(n=!1),r=r.1h;t=0,15.2u||(l=!0)}1o 15.1E=15.1p=15.1B=t;1c(15.1p!==p&&15.28||i||l){1c(15.2u||(15.2u=!0),15.2l||!15.1F&&15.1p!==p&&t>0&&(15.2l=!0),0===p&&15.1w.5h&&0!==15.1p&&(e||15.4j("5h")),15.1p>=p)1d(r=15.28;r&&(a=r.1h,!15.1F||d);)(r.2l||r.1l<=15.1p&&!r.1F&&!r.1K)&&(r.2F?r.1G((r.2z?r.27():r.2i)-(t-r.1l)*r.1C,e,i):r.1G((t-r.1l)*r.1C,e,i)),r=a;1o 1d(r=15.3i;r&&(a=r.1n,!15.1F||d);)(r.2l||p>=r.1l&&!r.1F&&!r.1K)&&(r.2F?r.1G((r.2z?r.27():r.2i)-(t-r.1l)*r.1C,e,i):r.1G((t-r.1l)*r.1C,e,i)),r=a;15.3O&&(e||(h.1f&&u(),15.4j("4B"))),o&&(15.1K||(19===15.1l||c!==15.1C)&&(0===15.1p||f>=15.27())&&(n&&(h.1f&&u(),15.1r.3N&&15.1H(!1,!1),15.2l=!1),!e&&15.1w[o]&&15.4j(o)))}},m.7c=18(){1d(1b t=15.28;t;){1c(t.1F||t 2p r&&t.7c())1a!0;t=t.1h}1a!1},m.5X=18(t,e,r,s){s=s||-5K;1d(1b n=[],a=15.28,o=0;a;)s>a.1l||(a 2p i?e!==!1&&(n[o++]=a):(r!==!1&&(n[o++]=a),t!==!1&&(n=n.4O(a.5X(!0,e,r)),o=n.1f))),a=a.1h;1a n},m.4C=18(t,e){1b r,s,n=15.1K,a=[],o=0;1d(n&&15.1H(!0,!0),r=i.4C(t),s=r.1f;--s>-1;)(r[s].26===15||e&&15.8J(r[s]))&&(a[o++]=r[s]);1a n&&15.1H(!1,!0),a},m.aT=18(){1a 15.4W},m.8J=18(t){1d(1b e=t.26;e;){1c(e===15)1a!0;e=e.26}1a!1},m.8T=18(t,e,i){i=i||0;1d(1b r,s=15.28,n=15.2U;s;)s.1l>=i&&(s.1l+=t),s=s.1h;1c(e)1d(r 1x n)n[r]>=i&&(n[r]+=t);1a 15.3m(!0)},m.2s=18(t,e){1c(!t&&!e)1a 15.1H(!1,!1);1d(1b i=e?15.4C(e):15.5X(!0,!0,!1),r=i.1f,s=!1;--r>-1;)i[r].2s(t,e)&&(s=!0);1a s},m.bu=18(t){1b e=15.5X(!1,!0,!0),i=e.1f;1d(15.1p=15.1E=0;--i>-1;)e[i].1H(!1,!1);1a t!==!1&&(15.2U={}),15.3m(!0)},m.4H=18(){1d(1b e=15.28;e;)e.4H(),e=e.1h;1a t.1A.4H.2h(15)},m.1H=18(t,i){1c(t===15.1K)1d(1b r=15.28;r;)r.1H(t,!0),r=r.1h;1a e.1A.1H.2h(15,t,i)},m.2R=18(){15.58=!0;1b e=t.1A.2R.4i(15,2n);1a 15.58=!1,e},m.2B=18(t){1a 2n.1f?(0!==15.2B()&&0!==t&&15.6M(15.1D/t),15):(15.2z&&15.27(),15.1D)},m.27=18(t){1c(!2n.1f){1c(15.2z){1d(1b e,i,r=0,s=15.3i,n=ad;s;)e=s.1n,s.2z&&s.27(),s.1l>n&&15.4V&&!s.1F?15.1V(s,s.1l-s.2K):n=s.1l,0>s.1l&&!s.1F&&(r-=s.1l,15.1r.2r&&(15.1l+=s.1l/15.1C),15.8T(-s.1l,!1,-5K),n=0),i=s.1l+s.2i/s.1C,i>r&&(r=i),s=e;15.1D=15.2i=r,15.2z=!1}1a 15.2i}1a 0!==15.27()&&0!==t&&15.6M(15.2i/t),15},m.2W=18(e){1c(!e)1d(1b i=15.28,r=15.1p;i;)i.1l===r&&"5B"===i.1y&&(i.1B=0),i=i.1h;1a t.1A.2W.4i(15,2n)},m.ai=18(){1d(1b e=15.1r;e.1r;)e=e.1r;1a e===t.8n},m.4g=18(){1a 15.1F?15.1E:(15.1r.4g()-15.1l)*15.1C},r},!0)}),1J.3J&&1J.3t.4K()(),18(t){"4I 4J";1b e=18(){1a(1J.5r||1J)[t]};"18"==1k 3H&&3H.6R?3H(["3A"],e):"37"!=1k 2k&&2k.3n&&(8i("./3A.6V"),2k.3n=e())}("8s");1b 1J="37"!=1k 2k&&2k.3n&&"37"!=1k 3G?3G:15||43;(1J.3t||(1J.3t=[])).24(18(){"4I 4J";1J.3J("2A.8x",["2A.8A"],18(t){1b e,i,r,s=1J.5r||1J,n=s.5p.5o,a=2*1i.4S,o=1i.4S/2,l=n.8z,h=18(e,i){1b r=l("2A."+e,18(){},!0),s=r.1A=1j t;1a s.2V=r,s.2C=i,r},u=t.8y||18(){},f=18(t,e,i,r){1b s=l("2A."+t,{6U:1j e,5G:1j i,5A:1j r},!0);1a u(s,t),s},p=18(t,e,i){15.t=t,15.v=e,i&&(15.5E=i,i.5D=15,15.c=i.v-e,15.8k=i.t-t)},19=18(e,i){1b r=l("2A."+e,18(t){15.23=t||0===t?t:1.aG,15.2o=1.a7*15.23},!0),s=r.1A=1j t;1a s.2V=r,s.2C=i,s.3y=18(t){1a 1j r(t)},r},c=f("8x",19("bn",18(t){1a(t-=1)*t*((15.23+1)*t+15.23)+1}),19("bC",18(t){1a t*t*((15.23+1)*t-15.23)}),19("ek",18(t){1a 1>(t*=2)?.5*t*t*((15.2o+1)*t-15.2o):.5*((t-=2)*t*((15.2o+1)*t+15.2o)+2)})),d=l("2A.6P",18(t,e,i){e=e||0===e?e:.7,1g==t?t=.7:t>1&&(t=1),15.8w=1!==t?e:0,15.23=(1-t)/2,15.2o=t,15.3K=15.23+15.2o,15.3T=i===!0},!0),m=d.1A=1j t;1a m.2V=d,m.2C=18(t){1b e=t+(.5-t)*15.8w;1a 15.23>t?15.3T?1-(t=1-t/15.23)*t:e-(t=1-t/15.23)*t*t*t*e:t>15.3K?15.3T?1-(t=(t-15.3K)/15.23)*t:e+(t-e)*(t=(t-15.3K)/15.23)*t*t*t:15.3T?1:e},d.4e=1j d(.7,.7),m.3y=d.3y=18(t,e,i){1a 1j d(t,e,i)},e=l("2A.8W",18(t){t=t||1,15.23=1/t,15.2o=t+1},!0),m=e.1A=1j t,m.2V=e,m.2C=18(t){1a 0>t?t=0:t>=1&&(t=.dX),(15.2o*t>>0)*15.23},m.3y=e.3y=18(t){1a 1j e(t)},i=l("2A.8X",18(e){e=e||{};1d(1b i,r,s,n,a,o,l=e.dp||"3E",h=[],u=0,f=0|(e.do||20),19=f,c=e.dz!==!1,d=e.dA===!0,m=e.8C 2p t?e.8C:1g,g="2E"==1k e.8B?.4*e.8B:.4;--19>-1;)i=c?1i.8t():1/f*19,r=m?m.2C(i):i,"3E"===l?s=g:"dE"===l?(n=1-i,s=n*n*g):"1x"===l?s=i*i*g:.5>i?(n=2*i,s=.5*n*n*g):(n=2*(1-i),s=.5*n*n*g),c?r+=1i.8t()*s-.5*s:19%2?r+=.5*s:r-=.5*s,d&&(r>1?r=1:0>r&&(r=0)),h[u++]={x:i,y:r};1d(h.dF(18(t,e){1a t.x-e.x}),o=1j p(1,1,1g),19=f;--19>-1;)a=h[19],o=1j p(a.x,a.y,o);15.1n=1j p(0,0,0!==o.t?o:o.5E)},!0),m=i.1A=1j t,m.2V=i,m.2C=18(t){1b e=15.1n;1c(t>e.t){1d(;e.5E&&t>=e.t;)e=e.5E;e=e.5D}1o 1d(;e.5D&&e.t>=t;)e=e.5D;1a 15.1n=e,e.v+(t-e.t)/e.8k*e.c},m.3y=18(t){1a 1j i(t)},i.4e=1j i,f("dG",h("dH",18(t){1a 1/2.75>t?7.2X*t*t:2/2.75>t?7.2X*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.2X*(t-=2.25/2.75)*t+.6W:7.2X*(t-=2.6Y/2.75)*t+.6X}),h("dI",18(t){1a 1/2.75>(t=1-t)?1-7.2X*t*t:2/2.75>t?1-(7.2X*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.2X*(t-=2.25/2.75)*t+.6W):1-(7.2X*(t-=2.6Y/2.75)*t+.6X)}),h("dJ",18(t){1b e=.5>t;1a t=e?1-2*t:2*t-1,t=1/2.75>t?7.2X*t*t:2/2.75>t?7.2X*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.2X*(t-=2.25/2.75)*t+.6W:7.2X*(t-=2.6Y/2.75)*t+.6X,e?.5*(1-t):.5*t+.5})),f("dB",h("dC",18(t){1a 1i.3f(1-(t-=1)*t)}),h("dD",18(t){1a-(1i.3f(1-t*t)-1)}),h("dK",18(t){1a 1>(t*=2)?-.5*(1i.3f(1-t*t)-1):.5*(1i.3f(1-(t-=2)*t)+1)})),r=18(e,i,r){1b s=l("2A."+e,18(t,e){15.23=t>=1?t:1,15.2o=(e||r)/(1>t?t:1),15.3K=15.2o/a*(1i.dL(1/15.23)||0),15.2o=a/15.2o},!0),n=s.1A=1j t;1a n.2V=s,n.2C=i,n.3y=18(t,e){1a 1j s(t,e)},s},f("dT",r("dU",18(t){1a 15.23*1i.3L(2,-10*t)*1i.2t((t-15.3K)*15.2o)+1},.3),r("dV",18(t){1a-(15.23*1i.3L(2,10*(t-=1))*1i.2t((t-15.3K)*15.2o))},.3),r("dW",18(t){1a 1>(t*=2)?-.5*15.23*1i.3L(2,10*(t-=1))*1i.2t((t-15.3K)*15.2o):.5*15.23*1i.3L(2,-10*(t-=1))*1i.2t((t-15.3K)*15.2o)+1},.45)),f("dS",h("dR",18(t){1a 1-1i.3L(2,-10*t)}),h("dN",18(t){1a 1i.3L(2,10*(t-1))-.6w}),h("dM",18(t){1a 1>(t*=2)?.5*1i.3L(2,10*(t-1)):.5*(2-1i.3L(2,-10*(t-1)))})),f("dO",h("dP",18(t){1a 1i.2t(t*o)}),h("dQ",18(t){1a-1i.2S(t*o)+1}),h("dy",18(t){1a-.5*(1i.2S(1i.4S*t)-1)})),l("2A.dx",{dg:18(e){1a t.8Y[e]}},!0),u(s.6P,"6P","4e,"),u(i,"8X","4e,"),u(e,"8W","4e,"),c},!0)}),1J.3J&&1J.3t.4K()();1b 1J="37"!=1k 2k&&2k.3n&&"37"!=1k 3G?3G:15||43;(1J.3t||(1J.3t=[])).24(18(){"4I 4J";1J.3J("5q.9L",["5q.8O","3A"],18(t,e){1b i,r,s,n,a=18(){t.2h(15,"57"),15.2P.1f=0,15.1Y=a.1A.1Y},o=1J.3J.70,l={},h=a.1A=1j t("57");h.2V=a,a.4M="1.17.0",a.49=2,a.6H=0,a.8G="di",a.9b=!0,h="2j",a.79={4T:h,8e:h,8d:h,51:h,2D:h,3j:h,dj:h,7q:h,7H:h,3a:h,df:""};1b u,f,p,19,c,d,m=/(?:\\d|\\-\\d|\\.\\d|\\-\\.\\d)+/g,g=/(?:\\d|\\-\\d|\\.\\d|\\-\\.\\d|\\+=\\d|\\-=\\d|\\+=.\\d|\\-=\\.\\d)+/g,v=/(?:\\+=|\\-=|\\-|\\b)[\\d\\-\\.]+[a-dd-d9-9]*(?:%|\\b)/3Q,x=/(?![+-]?\\d*\\.?\\d+|[+-]|e[+-]\\d+)[^0-9]/g,y=/(?:\\d|\\-|\\+|=|#|\\.)*/g,T=/2a *= *([^)]*)/i,w=/2a:([^;]*)/i,b=/3U\\(2a *=.+?\\)/i,P=/^(6e|6r)/,O=/([A-Z])/g,S=/-([a-z])/3Q,k=/(^(?:8F\\(\\"|8F\\())|(?:(\\"\\))$|\\)$)/3Q,A=18(t,e){1a e.5Q()},C=/(?:6K|86|8f)/i,R=/(9t|9s|9r|9q)=[\\d\\-\\.e]+/3Q,M=/9A\\:6z\\.6B\\.6A\\(.+?\\)/i,D=/,(?=[^\\)]*(?:\\(|$))/3Q,X=1i.4S/3D,z=3D/1i.4S,F={},I=52,N=18(t){1a I.5I?I.5I("9m://9l.9k.9d/d8/da",t):I.db(t)},E=N("dc"),L=N("dk"),Y=a.5f={dl:l},B=dt.du,j=18(){1b t=B.1m("94"),e=N("a");1a p=-1!==B.1m("dv")&&-1===B.1m("dw")&&(-1===t||1P(B.1u(t+8,1))>3),c=p&&6>1P(B.1u(B.1m("ds/")+8,1)),19=-1!==B.1m("dr"),(/dn ([0-9]{1,}[\\.0-9]{0,})/.7S(B)||/dm\\/.*dY:([0-9]{1,}[\\.0-9]{0,})/.7S(B))&&(d=1q(4D.$1)),e?(e.1v.3B="4T:dq;2a:.55;",/^0.55/.35(e.1v.2a)):!1}(),V=18(t){1a T.35("1O"==1k t?t:(t.3e?t.3e.2x:t.1v.2x)||"")?1q(4D.$1)/1M:1},U=18(t){43.7d&&7d.7Q(t)},q="",W="",Z=18(t,e){e=e||E;1b i,r,s=e.1v;1c(2y 0!==s[t])1a t;1d(t=t.1z(0).5Q()+t.1u(1),i=["O","ev","6a","eu","ej"],r=5;--r>-1&&2y 0===s[i[r]+t];);1a r>=0?(W=3===r?"6a":i[r],q="-"+W.6i()+"-",W+t):1g},G=I.7N?I.7N.e5:18(){},Q=a.e3=18(t,e,i,r,s){1b n;1a j||"2a"!==e?(!r&&t.1v[e]?n=t.1v[e]:(i=i||G(t))?n=i[e]||i.4o(e)||i.4o(e.1N(O,"-$1").6i()):t.3e&&(n=t.3e[e]),1g==s||n&&"3E"!==n&&"2m"!==n&&"2m 2m"!==n?n:s):V(t)},$=Y.e1=18(t,i,r,s,n){1c("2j"===s||!s)1a r;1c("2m"===s||!r)1a 0;1b o,l,h,u=C.35(i),f=t,p=E.1v,19=0>r;1c(19&&(r=-r),"%"===s&&-1!==i.1m("4w"))o=r/1M*(u?t.ef:t.eb);1o{1c(p.3B="4w:0 6k 83;4z:"+Q(t,"4z")+";ei-3j:0;","%"!==s&&f.65)p[u?"92":"6C"]=r+s;1o{1c(f=t.5J||I.7D,l=f.71,h=e.78.3C,l&&u&&l.3q===h)1a l.2D*r/1M;p[u?"2D":"3j"]=r+s}f.65(E),o=1q(E[u?"4X":"4Y"]),f.7F(E),u&&"%"===s&&a.ea!==!1&&(l=f.71=f.71||{},l.3q=h,l.2D=1M*(o/r)),0!==o||n||(o=$(t,i,r,s,!0))}1a 19?-o:o},H=Y.e9=18(t,e,i){1c("7J"!==Q(t,"4z",i))1a 0;1b r="51"===e?"6K":"8a",s=Q(t,"7H"+r,i);1a t["ec"+r]-($(t,e,1q(s),s.1N(y,""))||0)},K=18(t,e){1b i,r,s,n={};1c(e=e||G(t,1g))1c(i=e.1f)1d(;--i>-1;)s=e[i],(-1===s.1m("-2Q")||6v===s)&&(n[s.1N(S,A)]=e.4o(s));1o 1d(i 1x e)(-1===i.1m("9j")||be===i)&&(n[i]=e[i]);1o 1c(e=t.3e||t.1v)1d(i 1x e)"1O"==1k i&&2y 0===n[i]&&(n[i.1N(S,A)]=e[i]);1a j||(n.2a=V(t)),r=4N(t,e,!1),n.1W=r.1W,n.21=r.21,n.2q=r.2q,n.2G=r.2G,n.x=r.x,n.y=r.y,34&&(n.z=r.z,n.22=r.22,n.29=r.29,n.36=r.36),n.88&&4d n.88,n},J=18(t,e,i,r,s){1b n,a,o,l={},h=t.1v;1d(a 1x i)"3B"!==a&&"1f"!==a&&76(a)&&(e[a]!==(n=i[a])||s&&s[a])&&-1===a.1m("ed")&&("2E"==1k n||"1O"==1k n)&&(l[a]="2m"!==n||"51"!==a&&"4T"!==a?""!==n&&"2m"!==n&&"3E"!==n||"1O"!=1k e[a]||""===e[a].1N(x,"")?n:0:H(t,a),2y 0!==h[a]&&(o=1j 62(h,a,h[a],o)));1c(r)1d(a 1x r)"3M"!==a&&(l[a]=r[a]);1a{5O:l,4R:o}},8b={2D:["6K","86"],3j:["8a","eh"]},ee=["9p","9f","9X","98"],8R=18(t,e,i){1b r=1q("2D"===e?t.4X:t.4Y),s=8b[e],n=s.1f;1d(i=i||G(t,1g);--n>-1;)r-=1q(Q(t,"7q"+s[n],i,!0))||0,r-=1q(Q(t,"4w"+s[n]+"8f",i,!0))||0;1a r},4r=18(t,e){(1g==t||""===t||"2m"===t||"2m 2m"===t)&&(t="0 0");1b i=t.1t(" "),r=-1!==t.1m("51")?"0%":-1!==t.1m("8e")?"1M%":i[0],s=-1!==t.1m("4T")?"0%":-1!==t.1m("8d")?"1M%":i[1];1a 1g==s?s="77"===r?"50%":"0":"77"===s&&(s="50%"),("77"===r||76(1q(r))&&-1===(r+"").1m("="))&&(r="50%"),t=r+" "+s+(i.1f>2?" "+i[2]:""),e&&(e.9u=-1!==r.1m("%"),e.9v=-1!==s.1m("%"),e.eg="="===r.1z(1),e.e8="="===s.1z(1),e.63=1q(r.1N(x,"")),e.6y=1q(s.1N(x,"")),e.v=t),e||t},6u=18(t,e){1a"1O"==1k t&&"="===t.1z(1)?3l(t.1z(0)+"1",10)*1q(t.1u(2)):1q(t)-1q(e)},2H=18(t,e){1a 1g==t?e:"1O"==1k t&&"="===t.1z(1)?3l(t.1z(0)+"1",10)*1q(t.1u(2))+e:1q(t)},ae=18(t,e,i,r){1b s,n,a,o,l,h=1e-6;1a 1g==t?o=e:"2E"==1k t?o=t:(s=6m,n=t.1t("19"),l="="===t.1z(1),a=(l?3l(t.1z(0)+"1",10)*1q(n[0].1u(2)):1q(n[0]))*(-1===t.1m("e7")?1:z)-(l?0:e),n.1f&&(r&&(r[i]=e+a),-1!==t.1m("e0")&&(a%=s,a!==a%(s/2)&&(a=0>a?a+s:a-s)),-1!==t.1m("dZ")&&0>a?a=(a+5K*s)%s-(0|a/s)*s:-1!==t.1m("e2")&&a>0&&(a=(a-5K*s)%s-(0|a/s)*s)),o=e+a),h>o&&o>-h&&(o=0),o},44={e6:[0,1R,1R],e4:[0,1R,0],el:[5Y,5Y,5Y],9W:[0,0,0],et:[2Y,0,0],ew:[0,2Y,2Y],er:[0,0,1R],es:[0,0,2Y],en:[1R,1R,1R],eo:[1R,0,1R],eq:[2Y,2Y,0],ep:[1R,1R,0],dh:[1R,d6,0],c6:[2Y,2Y,2Y],c7:[2Y,0,2Y],c8:[0,2Y,0],83:[1R,0,0],c9:[1R,5Y,c5],c4:[0,1R,1R],4L:[1R,1R,1R,0]},5H=18(t,e,i){1a t=0>t?t+1:t>1?t-1:t,0|1R*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},6d=a.c0=18(t){1b e,i,r,s,n,a;1a t&&""!==t?"2E"==1k t?[t>>16,1R&t>>8,1R&t]:(","===t.1z(t.1f-1)&&(t=t.1u(0,t.1f-1)),44[t]?44[t]:"#"===t.1z(0)?(4===t.1f&&(e=t.1z(1),i=t.1z(2),r=t.1z(3),t="#"+e+e+i+i+r+r),t=3l(t.1u(1),16),[t>>16,1R&t>>8,1R&t]):"6r"===t.1u(0,3)?(t=t.2O(m),s=1P(t[0])%6m/6m,n=1P(t[1])/1M,a=1P(t[2])/1M,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.1f>3&&(t[3]=1P(t[3])),t[0]=5H(s+1/3,e,i),t[1]=5H(s,e,i),t[2]=5H(s-1/3,e,i),t):(t=t.2O(m)||44.4L,t[0]=1P(t[0]),t[1]=1P(t[1]),t[2]=1P(t[2]),t.1f>3&&(t[3]=1P(t[3])),t)):44.9W},3W="(?:\\\\b(?:(?:6e|6Z|6r|c1)\\\\(.+?\\\\))|\\\\B#.+?\\\\b";1d(h 1x 44)3W+="|"+h+"\\\\b";3W=4D(3W+")","3Q");1b 7k=18(t,e,i,r){1c(1g==t)1a 18(t){1a t};1b s,n=e?(t.2O(3W)||[""])[0]:"",a=t.1t(n).1I("").2O(v)||[],o=t.1u(0,t.1m(a[0])),l=")"===t.1z(t.1f-1)?")":"",h=-1!==t.1m(" ")?" ":",",u=a.1f,f=u>0?a[0].1N(m,""):"";1a u?s=e?18(t){1b e,p,19,c;1c("2E"==1k t)t+=f;1o 1c(r&&D.35(t)){1d(c=t.1N(D,"|").1t("|"),19=0;c.1f>19;19++)c[19]=s(c[19]);1a c.1I(",")}1c(e=(t.2O(3W)||[n])[0],p=t.1t(e).1I("").2O(v)||[],19=p.1f,u>19--)1d(;u>++19;)p[19]=i?p[0|(19-1)/2]:a[19];1a o+p.1I(h)+h+e+l+(-1!==t.1m("7I")?" 7I":"")}:18(t){1b e,n,p;1c("2E"==1k t)t+=f;1o 1c(r&&D.35(t)){1d(n=t.1N(D,"|").1t("|"),p=0;n.1f>p;p++)n[p]=s(n[p]);1a n.1I(",")}1c(e=t.2O(v)||[],p=e.1f,u>p--)1d(;u>++p;)e[p]=i?e[0|(p-1)/2]:a[p];1a o+e.1I(h)+l}:18(t){1a t}},68=18(t){1a t=t.1t(","),18(e,i,r,s,n,a,o){1b l,h=(i+"").1t(" ");1d(o={},l=0;4>l;l++)o[t[l]]=h[l]=h[l]||h[(l-1)/2>>0];1a s.31(e,o,n,a)}},62=(Y.c2=18(t){15.2L.1Y(t);1d(1b e,i,r,s,n=15.1y,a=n.9T,o=n.4R,l=1e-6;o;)e=a[o.v],o.r?e=1i.3P(e):l>e&&e>-l&&(e=0),o.t[o.p]=e,o=o.1h;1c(n.9S&&(n.9S.1W=a.1W),1===t)1d(o=n.4R;o;){1c(i=o.t,i.2f){1c(1===i.2f){1d(s=i.1U+i.s+i.4h,r=1;i.l>r;r++)s+=i["3r"+r]+i["38"+(r+1)];i.e=s}}1o i.e=i.s+i.1U;o=o.1h}},18(t,e,i,r,s){15.t=t,15.p=e,15.v=i,15.r=s,r&&(r.1n=15,15.1h=r)}),ce=(Y.c3=18(t,e,i,r,s,n){1b a,o,l,h,u,f=r,p={},19={},c=i.3I,d=F;1d(i.3I=1g,F=e,r=u=i.31(t,e,r,s),F=d,n&&(i.3I=c,f&&(f.1n=1g,f.1n&&(f.1n.1h=1g)));r&&r!==f;){1c(1>=r.2f&&(o=r.p,19[o]=r.s+r.c,p[o]=r.s,n||(h=1j 62(r,"s",o,h,r.r),r.c=0),1===r.2f))1d(a=r.l;--a>0;)l="3r"+a,o=r.p+"19"+l,19[o]=r.1y[l],p[o]=r[l],n||(h=1j 62(r,l,o,h,r.5P[l]));r=r.1h}1a{9T:p,ca:19,4R:h,cb:u}},Y.cj=18(t,e,r,s,a,o,l,h,u,f,p){15.t=t,15.p=e,15.s=r,15.c=s,15.n=l||e,t 2p ce||n.24(15.n),15.r=h,15.2f=o||0,u&&(15.2w=u,i=!0),15.b=2y 0===f?r:f,15.e=2y 0===p?r+s:p,a&&(15.1h=a,a.1n=15)}),de=18(t,e,i,r,s,n){1b a=1j ce(t,e,i,r-i,s,-1,n);1a a.b=i,a.e=a.1U=r,a},5l=a.4u=18(t,e,i,r,s,n,a,o,l,h){i=i||n||"",a=1j ce(t,e,0,0,a,h?2:1,1g,!1,o,i,r),r+="";1b f,p,19,c,d,v,x,y,T,w,b,O,S=i.1t(", ").1I(",").1t(" "),k=r.1t(", ").1I(",").1t(" "),A=S.1f,C=u!==!1;1d((-1!==r.1m(",")||-1!==i.1m(","))&&(S=S.1I(" ").1N(D,", ").1t(" "),k=k.1I(" ").1N(D,", ").1t(" "),A=S.1f),A!==k.1f&&(S=(n||"").1t(" "),A=S.1f),a.2L=l,a.1Y=h,f=0;A>f;f++)1c(c=S[f],d=k[f],y=1q(c),y||0===y)a.4f("",y,6u(d,y),d.1N(g,""),C&&-1!==d.1m("2j"),!0);1o 1c(s&&("#"===c.1z(0)||44[c]||P.35(c)))O=","===d.1z(d.1f-1)?"),":")",c=6d(c),d=6d(d),T=c.1f+d.1f>6,T&&!j&&0===d[3]?(a["38"+a.l]+=a.l?" 4L":"4L",a.e=a.e.1t(k[f]).1I("4L")):(j||(T=!1),a.4f(T?"6Z(":"6e(",c[0],d[0]-c[0],",",!0,!0).4f("",c[1],d[1]-c[1],",",!0).4f("",c[2],d[2]-c[2],T?",":O,!0),T&&(c=4>c.1f?1:c[3],a.4f("",c,(4>d.1f?1:d[3])-c,O,!1)));1o 1c(v=c.2O(m)){1c(x=d.2O(g),!x||x.1f!==v.1f)1a a;1d(19=0,p=0;v.1f>p;p++)b=v[p],w=c.1m(b,19),a.4f(c.1u(19,w-19),1P(b),6u(x[p],b),"",C&&"2j"===c.1u(w+b.1f,2),0===p),19=w+b.1f;a["38"+a.l]+=c.1u(19)}1o a["38"+a.l]+=a.l?" "+c:c;1c(-1!==r.1m("=")&&a.1y){1d(O=a.1U+a.1y.s,f=1;a.l>f;f++)O+=a["38"+f]+a.1y["3r"+f];a.e=O+a["38"+f]}1a a.l||(a.2f=-1,a.1U=a.e),a.46||a},2b=9;1d(h=ce.1A,h.l=h.2w=0;--2b>0;)h["3r"+2b]=0,h["38"+2b]="";h.1U="",h.1h=h.1n=h.46=h.1y=h.2L=h.1Y=h.5P=1g,h.4f=18(t,e,i,r,s,n){1b a=15,o=a.l;1a a["38"+o]+=n&&o?" "+t:t||"",i||0===o||a.2L?(a.l++,a.2f=a.1Y?2:1,a["38"+a.l]=r||"",o>0?(a.1y["3r"+o]=e+i,a.5P["3r"+o]=s,a["3r"+o]=e,a.2L||(a.46=1j ce(a,"3r"+o,e,i,a.46||a,0,a.n,s,a.2w),a.46.1U=0),a):(a.1y={s:e+i},a.5P={},a.s=e,a.c=i,a.r=s,a)):(a["38"+o]+=e+(r||""),a)};1b 6o=18(t,e){e=e||{},15.p=e.39?Z(t)||t:t,l[t]=l[15.p]=15,15.3d=e.5w||7k(e.2I,e.4G,e.ck,e.4m),e.2g&&(15.31=e.2g),15.9e=e.4G,15.4m=e.4m,15.5z=e.5z,15.4t=e.2I,15.2w=e.6n||0},1Q=Y.cl=18(t,e,i){"4q"!=1k e&&(e={2g:i});1b r,s,n=t.1t(","),a=e.2I;1d(i=i||[a],r=0;n.1f>r;r++)e.39=0===r&&e.39,e.2I=i[r]||a,s=1j 6o(n[r],e)},89=18(t){1c(!l[t]){1b e=t.1z(0).5Q()+t.1u(1)+"9Q";1Q(t,{2g:18(t,i,r,s,n,a,h){1b u=o.5p.5o.5q[e];1a u?(u.ci(),l[r].31(t,i,r,s,n,a,h)):(U("ch: "+e+" 6V bB 9h cc."),n)}})}};h=6o.1A,h.4u=18(t,e,i,r,s,n){1b a,o,l,h,u,f,p=15.5z;1c(15.4m&&(D.35(i)||D.35(e)?(o=e.1N(D,"|").1t("|"),l=i.1N(D,"|").1t("|")):p&&(o=[e],l=[i])),l){1d(h=l.1f>o.1f?l.1f:o.1f,a=0;h>a;a++)e=o[a]=o[a]||15.4t,i=l[a]=l[a]||15.4t,p&&(u=e.1m(p),f=i.1m(p),u!==f&&(-1===f?o[a]=o[a].1t(p).1I(""):-1===u&&(o[a]+=" "+p)));e=o.1I(", "),i=l.1I(", ")}1a 5l(t,15.p,e,i,15.9e,15.4t,r,15.2w,s,n)},h.31=18(t,e,i,r,n,a){1a 15.4u(t.1v,15.3d(Q(t,15.p,s,!1,15.4t)),15.3d(e),n,a)},a.cd=18(t,e,i){1Q(t,{2g:18(t,r,s,n,a,o){1b l=1j ce(t,s,0,0,a,2,s,!1,i);1a l.2L=o,l.1Y=e(t,r,n.3u,s),l},6n:i})},a.9F=p||19;1b 3p,7u="2q,2G,36,x,y,z,21,2T,1W,22,29,3a,1T,1S".1t(","),be=Z("2Q"),6v=q+"2Q",4P=Z("5x"),34=1g!==Z("3a"),5a=Y.9j=18(){15.3a=1q(a.6H)||0,15.47=a.9n!==!1&&34?a.9n||"2m":!1},9a=43.cf,6F=18(t,e,i){1b r,s=I.5I("9m://9l.9k.9d/cg/2v",t),n=/([a-z])([A-Z])/g;1d(r 1x i)s.bZ(1g,r.1N(n,"$1-$2").6i(),i[r]);1a e.65(s),s},6E=I.bY,9E=18(){1b t,e,i,r=d||/94/i.35(B)&&!43.bI;1a I.5I&&!r&&(t=6F("2v",6E),e=6F("7G",t,{2D:1M,3j:50,x:1M}),i=e.9M().2D,e.1v[4P]="50% 50%",e.1v[be]="2q(0.5)",r=i===e.9M().2D&&!(19&&34),6E.7F(t)),r}(),7z=18(t,e,i,r,s){1b n,o,l,h,u,f,p,19,c,d,m,g,v,x,y=t.3w,T=6D(t,!0);y&&(v=y.2d,x=y.2c),(!r||2>(n=r.1t(" ")).1f)&&(p=t.4s(),e=4r(e).1t(" "),n=[(-1!==e[0].1m("%")?1q(e[0])/1M*p.2D:1q(e[0]))+p.x,(-1!==e[1].1m("%")?1q(e[1])/1M*p.3j:1q(e[1]))+p.y]),i.2d=h=1q(n[0]),i.2c=u=1q(n[1]),r&&T!==5L&&(f=T[0],p=T[1],19=T[2],c=T[3],d=T[4],m=T[5],g=f*c-p*19,o=h*(c/g)+u*(-19/g)+(19*m-c*d)/g,l=h*(-p/g)+u*(f/g)-(f*m-p*d)/g,h=i.2d=n[0]=o,u=i.2c=n[1]=l),y&&(s||s!==!1&&a.9b!==!1?(o=h-v,l=u-x,y.3h+=o*T[0]+l*T[2]-o,y.3s+=o*T[1]+l*T[3]-l):y.3h=y.3s=0),t.4b("1y-2v-6p",n.1I(" "))},6I=18(t){1a!!(9a&&"18"==1k t.4s&&t.99&&(!t.5J||t.5J.4s&&t.5J.99))},5L=[1,0,0,1,0,0],6D=18(t,e){1b i,r,s,n,a,o=t.3w||1j 5a,l=5V;1c(be?r=Q(t,6v,1g,!0):t.3e&&(r=t.3e.2x.2O(R),r=r&&4===r.1f?[r[0].1u(4),1P(r[2].1u(4)),1P(r[1].1u(4)),r[3].1u(4),o.x||0,o.y||0].1I(","):""),i=!r||"3E"===r||"3v(1, 0, 0, 1, 0, 0)"===r,(o.2v||t.4s&&6I(t))&&(i&&-1!==(t.1v[be]+"").1m("3v")&&(r=t.1v[be],i=0),s=t.4U("2Q"),i&&s&&(-1!==s.1m("3v")?(r=s,i=0):-1!==s.1m("5b")&&(r="3v(1,0,0,1,"+s.2O(/(?:\\-|\\b)[\\d\\-\\.e]+\\b/3Q).1I(",")+")",i=0))),i)1a 5L;1d(s=(r||"").2O(/(?:\\-|\\b)[\\d\\-\\.e]+\\b/3Q)||[],2b=s.1f;--2b>-1;)n=1P(s[2b]),s[2b]=(a=n-(n|=0))?(0|a*l+(0>a?-.5:.5))/l+n:n;1a e&&s.1f>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s},4N=Y.bJ=18(t,i,r,n){1c(t.3w&&r&&!n)1a t.3w;1b o,l,h,u,f,p,19=r?t.3w||1j 5a:1j 5a,c=0>19.2q,d=2e-5,m=5V,g=34?1q(Q(t,4P,i,!1,"0 0 0").1t(" ")[2])||19.32||0:0,v=1q(a.6H)||0;1c(19.2v=!(!t.4s||!6I(t)),19.2v&&(7z(t,Q(t,4P,s,!1,"50% 50%")+"",19,t.4U("1y-2v-6p")),3p=a.9F||9E),o=6D(t),o!==5L){1c(16===o.1f){1b x,y,T,w,b,P=o[0],O=o[1],S=o[2],k=o[3],A=o[4],C=o[5],R=o[6],M=o[7],D=o[8],X=o[9],F=o[10],I=o[12],N=o[13],E=o[14],L=o[11],Y=1i.5k(R,F);19.32&&(E=-19.32,I=D*E-o[12],N=X*E-o[13],E=F*E+19.32-o[14]),19.22=Y*z,Y&&(w=1i.2S(-Y),b=1i.2t(-Y),x=A*w+D*b,y=C*w+X*b,T=R*w+F*b,D=A*-b+D*w,X=C*-b+X*w,F=R*-b+F*w,L=M*-b+L*w,A=x,C=y,R=T),Y=1i.5k(D,F),19.29=Y*z,Y&&(w=1i.2S(-Y),b=1i.2t(-Y),x=P*w-D*b,y=O*w-X*b,T=S*w-F*b,X=O*b+X*w,F=S*b+F*w,L=k*b+L*w,P=x,O=y,S=T),Y=1i.5k(O,P),19.1W=Y*z,Y&&(w=1i.2S(-Y),b=1i.2t(-Y),P=P*w+A*b,y=O*w+C*b,C=O*-b+C*w,R=S*-b+R*w,O=y),19.22&&1i.5T(19.22)+1i.5T(19.1W)>bK.9&&(19.22=19.1W=0,19.29+=3D),19.2q=(0|1i.3f(P*P+O*O)*m+.5)/m,19.2G=(0|1i.3f(C*C+X*X)*m+.5)/m,19.36=(0|1i.3f(R*R+F*F)*m+.5)/m,19.21=0,19.3a=L?1/(0>L?-L:L):0,19.x=I,19.y=N,19.z=E,19.2v&&(19.x-=19.2d-(19.2d*P-19.2c*A),19.y-=19.2c-(19.2c*O-19.2d*C))}1o 1c(!(34&&!n&&o.1f&&19.x===o[4]&&19.y===o[5]&&(19.22||19.29)||2y 0!==19.x&&"3E"===Q(t,"6S",i))){1b B=o.1f>=6,j=B?o[0]:1,V=o[1]||0,U=o[2]||0,q=B?o[3]:1;19.x=o[4]||0,19.y=o[5]||0,h=1i.3f(j*j+V*V),u=1i.3f(q*q+U*U),f=j||V?1i.5k(V,j)*z:19.1W||0,p=U||q?1i.5k(U,q)*z+f:19.21||0,1i.5T(p)>90&&bL>1i.5T(p)&&(c?(h*=-1,p+=0>=f?3D:-3D,f+=0>=f?3D:-3D):(u*=-1,p+=0>=p?3D:-3D)),19.2q=h,19.2G=u,19.1W=f,19.21=p,34&&(19.22=19.29=19.z=0,19.3a=v,19.36=1),19.2v&&(19.x-=19.2d-(19.2d*j+19.2c*U),19.y-=19.2c-(19.2d*V+19.2c*q))}19.32=g;1d(l 1x 19)d>19[l]&&19[l]>-d&&(19[l]=0)}1a r&&(t.3w=19,19.2v&&(3p&&t.1v[be]?e.4v(.6w,18(){4Z(t.1v,be)}):!3p&&t.4U("2Q")&&e.4v(.6w,18(){t.5i("2Q")}))),19},8K=18(t){1b e,i,r=15.1y,s=-r.1W*X,n=s+r.21*X,a=5V,o=(0|1i.2S(s)*r.2q*a)/a,l=(0|1i.2t(s)*r.2q*a)/a,h=(0|1i.2t(n)*-r.2G*a)/a,u=(0|1i.2S(n)*r.2G*a)/a,f=15.t.1v,p=15.t.3e;1c(p){i=l,l=-h,h=-i,e=p.2x,f.2x="";1b 19,c,m=15.t.4X,g=15.t.4Y,v="7J"!==p.4z,x="9A:6z.6B.6A(9t="+o+", 9s="+l+", 9r="+h+", 9q="+u,w=r.x+m*r.1T/1M,b=r.y+g*r.1S/1M;1c(1g!=r.63&&(19=(r.9u?.5W*m*r.63:r.63)-m/2,c=(r.9v?.5W*g*r.6y:r.6y)-g/2,w+=19-(19*o+c*l),b+=c-(19*h+c*u)),v?(19=m/2,c=g/2,x+=", 9y="+(19-(19*o+c*l)+w)+", 9x="+(c-(19*h+c*u)+b)+")"):x+=", bH=\'2m bG\')",f.2x=-1!==e.1m("6z.6B.6A(")?e.1N(M,x):x+" "+e,(0===t||1===t)&&1===o&&0===l&&0===h&&1===u&&(v&&-1===x.1m("9y=0, 9x=0")||T.35(e)&&1M!==1q(4D.$1)||-1===e.1m("d7("&&e.1m("bD"))&&f.5i("2x")),!v){1b P,O,S,k=8>d?1:-1;1d(19=r.5U||0,c=r.66||0,r.5U=1i.3P((m-((0>o?-o:o)*m+(0>l?-l:l)*g))/2+w),r.66=1i.3P((g-((0>u?-u:u)*g+(0>h?-h:h)*m))/2+b),2b=0;4>2b;2b++)O=ee[2b],P=p[O],i=-1!==P.1m("2j")?1q(P):$(15.t,O,1q(P),P.1N(y,""))||0,S=i!==r[O]?2>2b?-r.5U:-r.66:2>2b?19-r.5U:c-r.66,f[O]=(r[O]=1i.3P(i-S*(0===2b||2===2b?1:k)))+"2j"}}},8N=Y.bE=Y.bF=18(t){1b e,i,r,s,n,a,o,l,h,u,f,p,c,d,m,g,v,x,y,T,w,b,P,O=15.1y,S=15.t.1v,k=O.1W,A=O.22,C=O.29,R=O.2q,M=O.2G,D=O.36,z=O.x,F=O.y,I=O.z,N=O.2v,E=O.3a,L=O.47;1c(!((1!==t&&0!==t||"2m"!==L||15.3V.1E!==15.3V.2i&&15.3V.1E)&&L||I||E||C||A)||3p&&N||!34)1a 2y(k||O.21||N?(k*=X,b=O.21*X,P=5V,e=1i.2S(k)*R,s=1i.2t(k)*R,i=1i.2t(k-b)*-M,n=1i.2S(k-b)*M,b&&"9z"===O.4x&&(v=1i.9B(b),v=1i.3f(1+v*v),i*=v,n*=v,O.2T&&(e*=v,s*=v)),N&&(z+=O.2d-(O.2d*e+O.2c*i)+O.3h,F+=O.2c-(O.2d*s+O.2c*n)+O.3s,3p&&(O.1T||O.1S)&&(d=15.t.4s(),z+=.5W*O.1T*d.2D,F+=.5W*O.1S*d.3j),d=1e-6,d>z&&z>-d&&(z=0),d>F&&F>-d&&(F=0)),y=(0|e*P)/P+","+(0|s*P)/P+","+(0|i*P)/P+","+(0|n*P)/P+","+z+","+F+")",N&&3p?15.t.4b("2Q","3v("+y):S[be]=(O.1T||O.1S?"5b("+O.1T+"%,"+O.1S+"%) 3v(":"3v(")+y):S[be]=(O.1T||O.1S?"5b("+O.1T+"%,"+O.1S+"%) 3v(":"3v(")+R+",0,0,"+M+","+z+","+F+")");1c(19&&(d=1e-4,d>R&&R>-d&&(R=D=2e-5),d>M&&M>-d&&(M=D=2e-5),!E||O.z||O.22||O.29||(E=0)),k||O.21)k*=X,m=e=1i.2S(k),g=s=1i.2t(k),O.21&&(k-=O.21*X,m=1i.2S(k),g=1i.2t(k),"9z"===O.4x&&(v=1i.9B(O.21*X),v=1i.3f(1+v*v),m*=v,g*=v,O.2T&&(e*=v,s*=v))),i=-g,n=m;1o{1c(!(C||A||1!==D||E||N))1a 2y(S[be]=(O.1T||O.1S?"5b("+O.1T+"%,"+O.1S+"%) 9I(":"9I(")+z+"2j,"+F+"2j,"+I+"2j)"+(1!==R||1!==M?" 5j("+R+","+M+")":""));e=n=1,i=s=0}h=1,r=a=o=l=u=f=0,p=E?-1/E:0,c=O.32,d=1e-6,T=",",w="0",k=C*X,k&&(m=1i.2S(k),g=1i.2t(k),o=-g,u=p*-g,r=e*g,a=s*g,h=m,p*=m,e*=m,s*=m),k=A*X,k&&(m=1i.2S(k),g=1i.2t(k),v=i*m+r*g,x=n*m+a*g,l=h*g,f=p*g,r=i*-g+r*m,a=n*-g+a*m,h*=m,p*=m,i=v,n=x),1!==D&&(r*=D,a*=D,h*=D,p*=D),1!==M&&(i*=M,n*=M,l*=M,f*=M),1!==R&&(e*=R,s*=R,o*=R,u*=R),(c||N)&&(c&&(z+=r*-c,F+=a*-c,I+=h*-c+c),N&&(z+=O.2d-(O.2d*e+O.2c*i)+O.3h,F+=O.2c-(O.2d*s+O.2c*n)+O.3s),d>z&&z>-d&&(z=w),d>F&&F>-d&&(F=w),d>I&&I>-d&&(I=0)),y=O.1T||O.1S?"5b("+O.1T+"%,"+O.1S+"%) 97(":"97(",y+=(d>e&&e>-d?w:e)+T+(d>s&&s>-d?w:s)+T+(d>o&&o>-d?w:o),y+=T+(d>u&&u>-d?w:u)+T+(d>i&&i>-d?w:i)+T+(d>n&&n>-d?w:n),A||C?(y+=T+(d>l&&l>-d?w:l)+T+(d>f&&f>-d?w:f)+T+(d>r&&r>-d?w:r),y+=T+(d>a&&a>-d?w:a)+T+(d>h&&h>-d?w:h)+T+(d>p&&p>-d?w:p)+T):y+=",0,0,0,0,1,0,",y+=z+T+F+T+I+T+(E?1+-I/E:1)+")",S[be]=y};h=5a.1A,h.x=h.y=h.z=h.21=h.2T=h.1W=h.22=h.29=h.32=h.1T=h.1S=h.3h=h.3s=0,h.2q=h.2G=h.36=1,1Q("2Q,5j,2q,2G,36,x,y,z,1W,22,29,7s,21,2T,7t,7v,7m,bM,5x,7w,7Y,7V,9R,47,4x,1T,1S,8S",{2g:18(t,e,i,r,n,o,l){1c(r.73===l)1a n;r.73=l;1b h,u,f,p,19,c,d,m,g,v=t.3w,x=r.3I=4N(t,s,!0,l.9R),y=t.1v,T=1e-6,w=7u.1f,b=l,P={},O="5x";1c("1O"==1k b.2Q&&be)f=E.1v,f[be]=b.2Q,f.6S="bN",f.4z="7J",I.7D.65(E),h=4N(E,1g,!1),I.7D.7F(E),1g!=b.1T&&(h.1T=2H(b.1T,x.1T)),1g!=b.1S&&(h.1S=2H(b.1S,x.1S));1o 1c("4q"==1k b){1c(h={2q:2H(1g!=b.2q?b.2q:b.5j,x.2q),2G:2H(1g!=b.2G?b.2G:b.5j,x.2G),36:2H(b.36,x.36),x:2H(b.x,x.x),y:2H(b.y,x.y),z:2H(b.z,x.z),1T:2H(b.1T,x.1T),1S:2H(b.1S,x.1S),3a:2H(b.7Y,x.3a)},d=b.7V,1g!=d)1c("4q"==1k d)1d(f 1x d)b[f]=d[f];1o b.1W=d;"1O"==1k b.x&&-1!==b.x.1m("%")&&(h.x=0,h.1T=2H(b.x,x.1T)),"1O"==1k b.y&&-1!==b.y.1m("%")&&(h.y=0,h.1S=2H(b.y,x.1S)),h.1W=ae("1W"1x b?b.1W:"7t"1x b?b.7t+"7p":"7s"1x b?b.7s:x.1W,x.1W,"1W",P),34&&(h.22=ae("22"1x b?b.22:"7v"1x b?b.7v+"7p":x.22||0,x.22,"22",P),h.29=ae("29"1x b?b.29:"7m"1x b?b.7m+"7p":x.29||0,x.29,"29",P)),h.21=1g==b.21?x.21:ae(b.21,x.21),h.2T=1g==b.2T?x.2T:ae(b.2T,x.2T),(u=h.2T-x.2T)&&(h.21+=u,h.1W+=u)}1d(34&&1g!=b.47&&(x.47=b.47,c=!0),x.4x=b.4x||x.4x||a.8G,19=x.47||x.z||x.22||x.29||h.z||h.22||h.29||h.3a,19||1g==b.5j||(h.36=1);--w>-1;)i=7u[w],p=h[i]-x[i],(p>T||-T>p||1g!=b[i]||1g!=F[i])&&(c=!0,n=1j ce(x,i,x[i],p,n),i 1x P&&(n.e=P[i]),n.1U=0,n.2L=o,r.2P.24(n.n));1a p=b.5x,x.2v&&(p||b.7w)&&(m=x.3h,g=x.3s,7z(t,4r(p),h,b.7w,b.8S),n=de(x,"2d",(v?x:h).2d,h.2d,n,O),n=de(x,"2c",(v?x:h).2c,h.2c,n,O),(m!==x.3h||g!==x.3s)&&(n=de(x,"3h",v?m:x.3h,x.3h,n,O),n=de(x,"3s",v?g:x.3s,x.3s,n,O)),p=3p?1g:"1L 1L"),(p||34&&19&&x.32)&&(be?(c=!0,i=4P,p=(p||Q(t,i,s,!1,"50% 50%"))+"",n=1j ce(y,i,0,0,n,-1,O),n.b=y[i],n.2L=o,34?(f=x.32,p=p.1t(" "),x.32=(p.1f>2&&(0===f||"1L"!==p[2])?1q(p[2]):f)||0,n.1U=n.e=p[0]+" "+(p[1]||"50%")+" 1L",n=1j ce(x,"32",0,0,n,-1,n.n),n.b=f,n.1U=n.e=x.32):n.1U=n.e=p):4r(p+"",x)),c&&(r.4k=x.2v&&3p||!19&&3!==15.4k?2:3),n},39:!0}),1Q("bU",{2I:"1L 1L 1L 1L #9w",39:!0,4G:!0,4m:!0,5z:"7I"}),1Q("bV",{2I:"1L",2g:18(t,e,i,n,a){e=15.3d(e);1b o,l,h,u,f,p,19,c,d,m,g,v,x,y,T,w,b=["bW","bX","bT","bS"],P=t.1v;1d(d=1q(t.4X),m=1q(t.4Y),o=e.1t(" "),l=0;b.1f>l;l++)15.p.1m("4w")&&(b[l]=Z(b[l])),f=u=Q(t,b[l],s,!1,"1L"),-1!==f.1m(" ")&&(u=f.1t(" "),f=u[0],u=u[1]),p=h=o[l],19=1q(f),v=f.1u((19+"").1f),x="="===p.1z(1),x?(c=3l(p.1z(0)+"1",10),p=p.1u(2),c*=1q(p),g=p.1u((c+"").1f-(0>c?1:0))||""):(c=1q(p),g=p.1u((c+"").1f)),""===g&&(g=r[i]||v),g!==v&&(y=$(t,"8o",19,v),T=$(t,"bO",19,v),"%"===g?(f=1M*(y/d)+"%",u=1M*(T/m)+"%"):"em"===g?(w=$(t,"8o",1,"em"),f=y/w+"em",u=T/w+"em"):(f=y+"2j",u=T+"2j"),x&&(p=1q(f)+c+g,h=1q(u)+c+g)),a=5l(P,b[l],f+" "+u,p+" "+h,!1,"1L",a);1a a},39:!0,5w:7k("1L 1L 1L 1L",!1,!0)}),1Q("bP",{2I:"0 0",2g:18(t,e,i,r,n,a){1b o,l,h,u,f,p,19="bQ-4z",c=s||G(t,1g),m=15.3d((c?d?c.4o(19+"-x")+" "+c.4o(19+"-y"):c.4o(19):t.3e.bR+" "+t.3e.cm)||"0 0"),g=15.3d(e);1c(-1!==m.1m("%")!=(-1!==g.1m("%"))&&(p=Q(t,"cn").1N(k,""),p&&"3E"!==p)){1d(o=m.1t(" "),l=g.1t(" "),L.4b("cR",p),h=2;--h>-1;)m=o[h],u=-1!==m.1m("%"),u!==(-1!==l[h].1m("%"))&&(f=0===h?t.4X-L.2D:t.4Y-L.3j,o[h]=u?1q(m)/1M*f+"2j":1M*(1q(m)/f)+"%");m=o.1I(" ")}1a 15.4u(t.1v,m,g,n,a)},5w:4r}),1Q("cS",{2I:"0 0",5w:4r}),1Q("3a",{2I:"1L",39:!0}),1Q("cT",{2I:"50% 50%",39:!0}),1Q("cU",{39:!0}),1Q("cQ",{39:!0}),1Q("cP",{39:!0}),1Q("7H",{2g:68("9X,9f,98,9p")}),1Q("7q",{2g:68("cL,cM,cN,cO")}),1Q("cV",{2I:"7G(1L,1L,1L,1L)",2g:18(t,e,i,r,n,a){1b o,l,h;1a 9>d?(l=t.3e,h=8>d?" ":",",o="7G("+l.cW+h+l.d3+h+l.d4+h+l.d5+")",e=15.3d(e).1t(",").1I(h)):(o=15.3d(Q(t,15.p,s,!1,15.4t)),e=15.3d(e)),15.4u(t.1v,o,e,n,a)}}),1Q("d2",{2I:"1L 1L 1L #9w",4G:!0,4m:!0}),1Q("7M,8D",{2g:18(t,e,i,r,s){1a s}}),1Q("4w",{2I:"1L 6k #6x",2g:18(t,e,i,r,n,a){1a 15.4u(t.1v,15.3d(Q(t,"6C",s,!1,"1L")+" "+Q(t,"d1",s,!1,"6k")+" "+Q(t,"cX",s,!1,"#6x")),15.3d(e),n,a)},4G:!0,5w:18(t){1b e=t.1t(" ");1a e[0]+" "+(e[1]||"6k")+" "+(t.2O(3W)||["#6x"])[0]}}),1Q("cY",{2g:68("6C,cZ,d0,92")}),1Q("cK,6J,9c",{2g:18(t,e,i,r,s){1b n=t.1v,a="6J"1x n?"6J":"9c";1a 1j ce(n,a,0,0,s,-1,i,!1,0,n[a],e)}});1b 9O=18(t){1b e,i=15.t,r=i.2x||Q(15.1y,"2x")||"",s=0|15.s+15.c*t;1M===s&&(-1===r.1m("cJ(")&&-1===r.1m("cu(")&&-1===r.1m("cv(")?(i.5i("2x"),e=!Q(15.1y,"2x")):(i.2x=r.1N(b,""),e=!0)),e||(15.3Y&&(i.2x=r=r||"3U(2a="+s+")"),-1===r.1m("cw")?0===s&&15.3Y||(i.2x=r+" 3U(2a="+s+")"):i.2x=r.1N(T,"2a="+s))};1Q("2a,3U,5F",{2I:"1",2g:18(t,e,i,r,n,a){1b o=1q(Q(t,"2a",s,!1,"1")),l=t.1v,h="5F"===i;1a"1O"==1k e&&"="===e.1z(1)&&(e=("-"===e.1z(0)?-1:1)*1q(e.1u(2))+o),h&&1===o&&"6c"===Q(t,"7r",s)&&0!==e&&(o=0),j?n=1j ce(l,"2a",o,e-o,n):(n=1j ce(l,"2a",1M*o,1M*(e-o),n),n.3Y=h?1:0,l.8L=1,n.2f=2,n.b="3U(2a="+n.s+")",n.e="3U(2a="+(n.s+n.c)+")",n.1y=t,n.2L=a,n.1Y=9O),h&&(n=1j ce(l,"7r",0,0,n,-1,1g,!1,0,0!==o?"6t":"6c",0===e?"6c":"6t"),n.1U="6t",r.2P.24(n.n),r.2P.24(i)),n}});1b 4Z=18(t,e){e&&(t.9N?(("6a"===e.1u(0,2)||"9U"===e.1u(0,6))&&(e="-"+e),t.9N(e.1N(O,"-$1").6i())):t.5i(e))},81=18(t){1c(15.t.54=15,1===t||0===t){15.t.4b("4l",0===t?15.b:15.e);1d(1b e=15.1y,i=15.t.1v;e;)e.v?i[e.p]=e.v:4Z(i,e.p),e=e.1h;1===t&&15.t.54===15&&(15.t.54=1g)}1o 15.t.4U("4l")!==15.e&&15.t.4b("4l",15.e)};1Q("3M",{2g:18(t,e,r,n,a,o,l){1b h,u,f,p,19,c=t.4U("4l")||"",d=t.1v.3B;1c(a=n.7E=1j ce(t,r,0,0,a,2),a.1Y=81,a.2w=-11,i=!0,a.b=c,u=K(t,s),f=t.54){1d(p={},19=f.1y;19;)p[19.p]=1,19=19.1h;f.1Y(1)}1a t.54=a,a.e="="!==e.1z(1)?e:c.1N(4D("\\\\s*\\\\b"+e.1u(2)+"\\\\b"),"")+("+"===e.1z(0)?" "+e.1u(2):""),t.4b("4l",a.e),h=J(t,u,K(t),l,p),t.4b("4l",c),a.1y=h.4R,t.1v.3B=d,a=a.46=n.31(t,h.5O,a,o)}});1b 7U=18(t){1c((1===t||0===t)&&15.1y.1E===15.1y.2i&&"82"!==15.1y.1y){1b e,i,r,s,n,a=15.t.1v,o=l.2Q.31;1c("4A"===15.e)a.3B="",s=!0;1o 1d(e=15.e.1t(" ").1I("").1t(","),r=e.1f;--r>-1;)i=e[r],l[i]&&(l[i].31===o?s=!0:i="5x"===i?4P:l[i].p),4Z(a,i);s&&(4Z(a,be),n=15.t.3w,n&&(n.2v&&15.t.5i("1y-2v-6p"),4d 15.t.3w))}};1d(1Q("cx",{2g:18(t,e,r,s,n){1a n=1j ce(t,r,0,0,n,2),n.1Y=7U,n.e=e,n.2w=-10,n.1y=s.3u,i=!0,n}}),h="ct,cs,co,cp".1t(","),2b=h.1f;2b--;)89(h[2b]);h=a.1A,h.1s=h.73=h.3I=1g,h.72=18(t,e,o){1c(!t.3S)1a!1;15.7Z=t,15.3u=o,15.7K=e,u=e.7M,i=!1,r=e.79||a.79,s=G(t,""),n=15.2P;1b h,19,d,m,g,v,x,y,T,b=t.1v;1c(f&&""===b.4c&&(h=Q(t,"4c",s),("2m"===h||""===h)&&15.6l(b,"4c",0)),"1O"==1k e&&(m=b.3B,h=K(t,s),b.3B=m+";"+e,h=J(t,h,K(t)).5O,!j&&w.35(e)&&(h.2a=1q(4D.$1)),e=h,b.3B=m),15.1s=19=e.3M?l.3M.31(t,e.3M,"3M",15,1g,1g,e):15.31(t,e,1g),15.4k){1d(T=3===15.4k,be?p&&(f=!0,""===b.4c&&(x=Q(t,"4c",s),("2m"===x||""===x)&&15.6l(b,"4c",0)),c&&15.6l(b,"7L",15.7K.7L||(T?"cq":"6c"))):b.8L=1,d=19;d&&d.1h;)d=d.1h;y=1j ce(t,"2Q",0,0,1g,2),15.5y(y,1g,d),y.1Y=be?8N:8K,y.1y=15.3I||4N(t,s,!0),y.3V=o,y.2w=-1,n.4K()}1c(i){1d(;19;){1d(v=19.1h,d=m;d&&d.2w>19.2w;)d=d.1h;(19.1n=d?d.1n:g)?19.1n.1h=19:m=19,(19.1h=d)?d.1n=19:g=19,19=v}15.1s=m}1a!0},h.31=18(t,e,i,n){1b a,o,h,f,p,19,c,d,m,g,v=t.1v;1d(a 1x e)19=e[a],o=l[a],o?i=o.31(t,19,a,15,i,n,e):(p=Q(t,a,s)+"",m="1O"==1k 19,"4G"===a||"cr"===a||"cy"===a||-1!==a.1m("cz")||m&&P.35(19)?(m||(19=6d(19),19=(19.1f>3?"6Z(":"6e(")+19.1I(",")+")"),i=5l(v,a,p,19,!0,"4L",i,0,n)):!m||-1===19.1m(" ")&&-1===19.1m(",")?(h=1q(p),c=h||0===h?p.1u((h+"").1f):"",(""===p||"2m"===p)&&("2D"===a||"3j"===a?(h=8R(t,a,s),c="2j"):"51"===a||"4T"===a?(h=H(t,a,s),c="2j"):(h="2a"!==a?0:1,c="")),g=m&&"="===19.1z(1),g?(f=3l(19.1z(0)+"1",10),19=19.1u(2),f*=1q(19),d=19.1N(y,"")):(f=1q(19),d=m?19.1N(y,""):""),""===d&&(d=a 1x r?r[a]:c),19=f||0===f?(g?f+h:f)+d:e[a],c!==d&&""!==d&&(f||0===f)&&h&&(h=$(t,a,h,c),"%"===d?(h/=$(t,a,1M,"%")/1M,e.8D!==!0&&(p=h+"%")):"em"===d?h/=$(t,a,1,"em"):"2j"!==d&&(f=$(t,a,f,d),d="2j"),g&&(f||0===f)&&(19=f+h+d)),g&&(f+=h),!h&&0!==h||!f&&0!==f?2y 0!==v[a]&&(19||"cG"!=19+""&&1g!=19)?(i=1j ce(v,a,f||h||0,0,i,-1,a,!1,0,p,19),i.1U="3E"!==19||"6S"!==a&&-1===a.1m("cH")?19:p):U("cI "+a+" 3V cF: "+e[a]):(i=1j ce(v,a,h,f-h,i,0,a,u!==!1&&("2j"===d||"4c"===a),0,p,19),i.1U=d)):i=5l(v,a,p,19,!0,1g,i,0,n)),n&&i&&!i.2L&&(i.2L=n);1a i},h.1Y=18(t){1b e,i,r,s=15.1s,n=1e-6;1c(1!==t||15.3u.1p!==15.3u.1D&&0!==15.3u.1p)1c(t||15.3u.1p!==15.3u.1D&&0!==15.3u.1p||15.3u.1B===-1e-6)1d(;s;){1c(e=s.c*t+s.s,s.r?e=1i.3P(e):n>e&&e>-n&&(e=0),s.2f)1c(1===s.2f)1c(r=s.l,2===r)s.t[s.p]=s.1U+e+s.4h+s.3Y+s.6g;1o 1c(3===r)s.t[s.p]=s.1U+e+s.4h+s.3Y+s.6g+s.6L+s.6N;1o 1c(4===r)s.t[s.p]=s.1U+e+s.4h+s.3Y+s.6g+s.6L+s.6N+s.8Q+s.8V;1o 1c(5===r)s.t[s.p]=s.1U+e+s.4h+s.3Y+s.6g+s.6L+s.6N+s.8Q+s.8V+s.cE+s.cA;1o{1d(i=s.1U+e+s.4h,r=1;s.l>r;r++)i+=s["3r"+r]+s["38"+(r+1)];s.t[s.p]=i}1o-1===s.2f?s.t[s.p]=s.1U:s.1Y&&s.1Y(t);1o s.t[s.p]=e+s.1U;s=s.1h}1o 1d(;s;)2!==s.2f?s.t[s.p]=s.b:s.1Y(t),s=s.1h;1o 1d(;s;){1c(2!==s.2f)1c(s.r&&-1!==s.2f)1c(e=1i.3P(s.s+s.c),s.2f){1c(1===s.2f){1d(r=s.l,i=s.1U+e+s.4h,r=1;s.l>r;r++)i+=s["3r"+r]+s["38"+(r+1)];s.t[s.p]=i}}1o s.t[s.p]=e+s.1U;1o s.t[s.p]=s.e;1o s.1Y(t);s=s.1h}},h.cB=18(t){15.3I=15.3I||4N(15.7Z,s,!0),15.4k=15.3I.2v&&3p||!t&&3!==15.4k?2:3};1b 8m=18(){15.t[15.p]=15.e,15.1y.5y(15,15.1h,1g,!0)};h.6l=18(t,e,i){1b r=15.1s=1j ce(t,e,0,0,15.1s,2);r.e=i,r.1Y=8m,r.1y=15},h.5y=18(t,e,i,r){1a t&&(e&&(e.1n=t),t.1h&&(t.1h.1n=t.1n),t.1n?t.1n.1h=t.1h:15.1s===t&&(15.1s=t.1h,r=!0),i?i.1h=t:r||1g!==15.1s||(15.1s=t),t.1h=e,t.1n=i),t},h.2s=18(e){1b i,r,s,n=e;1c(e.5F||e.3U){n={};1d(r 1x e)n[r]=e[r];n.2a=1,n.5F&&(n.7r=1)}1a e.3M&&(i=15.7E)&&(s=i.46,s&&s.1n?15.5y(s.1n,i.1h,s.1n.1n):s===15.1s&&(15.1s=i.1h),i.1h&&15.5y(i.1h,i.1h.1h,s.1n),15.7E=1g),t.1A.2s.2h(15,n)};1b 53=18(t,e,i){1b r,s,n,a;1c(t.cC)1d(s=t.1f;--s>-1;)53(t[s],e,i);1o 1d(r=t.8c,s=r.1f;--s>-1;)n=r[s],a=n.2f,n.1v&&(e.24(K(n)),i&&i.24(n)),1!==a&&9!==a&&11!==a||!n.8c.1f||53(n,e,i)};1a a.cD=18(t,i,r){1b s,n,a,o,l=e.4p(t,i,r),h=[l],u=[],f=[],p=[],19=e.5f.9C;1d(t=l.2N||l.2J,53(t,u,p),l.1G(i,!0,!0),53(t,f),l.1G(0,!0,!0),l.1H(!0),s=p.1f;--s>-1;)1c(n=J(p[s],u[s],f[s]),n.4R){n=n.5O;1d(a 1x r)19[a]&&(n[a]=r[a]);o={};1d(a 1x n)o[a]=u[s][a];h.24(e.5Z(p[s],i,o,n))}1a h},t.6O([a]),a},!0)}),1J.3J&&1J.3t.4K()(),18(t){"4I 4J";1b e=18(){1a(1J.5r||1J)[t]};"18"==1k 3H&&3H.6R?3H(["3A"],e):"37"!=1k 2k&&2k.3n&&(8i("../3A.6V"),2k.3n=e())}("9L");',62,901,'|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||this|||function|_|return|var|if|for||length|null|_next|Math|new|typeof|_startTime|indexOf|_prev|else|_time|parseFloat|_timeline|_firstPT|split|substr|style|vars|in|data|charAt|prototype|_rawPrevTime|_timeScale|_duration|_totalTime|_paused|render|_enabled|join|_gsScope|_gc|0px|100|replace|string|Number|xe|255|yPercent|xPercent|xs0|add|rotation|immediateRender|setRatio|_startAt||skewX|rotationX|_p1|push||timeline|totalDuration|_first|rotationY|opacity|ge|yOrigin|xOrigin||type|parser|call|_totalDuration|px|module|_active|auto|arguments|_p2|instanceof|scaleX|smoothChildTiming|_kill|sin|_initted|svg|pr|filter|void|_dirty|easing|duration|getRatio|width|number|_reversed|scaleY|ne|defaultValue|target|_delay|plugin|_ease|_targets|match|_overwriteProps|transform|totalTime|cos|skewY|_labels|constructor|paused|5625|128|lazy||parse|zOrigin||Se|test|scaleZ|undefined|xs|prefix|perspective|_siblings|splice|format|currentStyle|sqrt|wake|xOffset|_last|height|_lazy|parseInt|_uncache|exports|startAt|Te|time|xn|yOffset|_gsQueue|_tween|matrix|_gsTransform|ratio|config|_overwrittenProps|TweenLite|cssText|frame|180|none|_parseTimeOrLabel|global|define|_transform|_gsDefine|_p3|pow|className|autoRemoveChildren|_onUpdate|round|gi|kill|nodeType|_calcEnd|alpha|tween|ue|tweens|xn1|onReverseComplete|_remove|seek|Array|window|oe||xfirst|force3D|selector|API|_propLookup|setAttribute|zIndex|delete|ease|appendXtra|rawTime|xs1|apply|_callback|_transformType|class|multi|_listeners|getPropertyValue|to|object|re|getBBox|dflt|parseComplex|delayedCall|border|skewType|reversed|position|all|onUpdate|getTweensOf|RegExp|onComplete|delay|color|invalidate|use|strict|pop|transparent|version|Ie|concat|Oe|set|firstMPT|PI|top|getAttribute|_sortChildren|_recent|offsetWidth|offsetHeight|Ye||left|document|Ue|_gsClassPT||_notifyPluginsOfEnabled|css|_forcingPlayhead|sc|ke|translate|isActive|runBackwards|overwrite|_internals|_pauseTime|onStart|removeAttribute|scale|atan2|me|_initProps|onOverwrite|greensock|com|plugins|GreenSockGlobals|callbackScope|_propName|pg|self|formatter|transformOrigin|_linkCSSP|keyword|easeInOut|isPause|gsClass|prev|next|autoAlpha|easeIn|le|createElementNS|parentNode|9999999999|ze|repeat|core|difs|rxp|toUpperCase|_swapSelfInParams|_onInitAllProps|abs|ieOffsetX|1e5|01|getChildren|192|fromTo||remove|_e|ox|_onPluginEvent|appendChild|ieOffsetY|sleep|pe|easeParams|ms|_gsTweenID|hidden|he|rgb|Ticker|xs2|tick|toLowerCase|setTimeout|solid|_addLazySet|360|priority|ve|origin|from|hsl|onCompleteParams|inherit|se|Pe|001|000|oy|DXImageTransform|Matrix|Microsoft|borderTopWidth|Fe|Re|Ce|staggerTo|defaultTransformPerspective|Xe|cssFloat|Left|xn2|timeScale|xs3|activate|SlowMo|check|amd|display|fps|easeOut|js|9375|984375|625|rgba|globals|_gsCache|_onInitTween|_lastParsedTransform|_priority||isNaN|center|ticker|suffixMap|_params|_func|_hasPausedChild|console|lagSmoothing|pause|throw|TweenMax|_easeType|_overwrite|fe|useFrames|shortRotationY|autoCSS|_init|_short|padding|visibility|rotationZ|shortRotation|we|shortRotationX|svgOrigin|_onDisable|autoSleep|De|_power|defaultEase|_type|body|_classNamePT|removeChild|rect|margin|inset|absolute|_vars|WebkitBackfaceVisibility|autoRound|defaultView|defaultOverwrite|play|log|_eventTarget|exec|Quad|je|directionalRotation|Cannot|jQuery|transformPerspective|_target|reverse|Be|isFromStart|red|Date|insert|Right|addLabel|filters|ye|Top|te|childNodes|bottom|right|Width|removeLabel|Scope|require|useRAF|gap|1e3|Ve|_rootFramesTimeline|borderLeft|EventDispatcher|events|_easePower|TimelineLite|random|break|dispatchEvent|_p|Back|register|_class|Ease|strength|template|strictUnits|2e3|url|defaultSkewType|_updateRoot|Params|_contains|Ne|zoom|startTime|Ee|TweenPlugin|get|xn3|ie|smoothOrigin|shiftChildren|GreenSockAMDPath|xs4|SteppedEase|RoughEase|map|up||querySelectorAll|borderLeftWidth|Animation|Android|SimpleTimeline|onReverseCompleteParams|matrix3d|marginBottom|getCTM|Ae|defaultSmoothOrigin|styleFloat|org|clrs|marginRight|isSelector|not|_onEnable|Transform|w3|www|http|defaultForce3D|Linear|marginLeft|M22|M21|M12|M11|oxp|oyp|999|Dy|Dx|simple|progid|tan|reservedProps|func|Me|useSVGTransformAttr|_roundProps|init|translate3d|propName|120|CSSPlugin|getBoundingClientRect|removeProperty|Le|lazyRender|Plugin|parseTransform|autoRotate|proxy|webkit|addEventListener|black|marginTop|isArray|lazyTweens|exportRoot|toString|normal|_super|definition|500|_addTween|525|CancelRequestAnimationFrame|tweenLookup|resume|eventCallback|onRepeatScope|999999999999||getElementById|start|restart|usesFrames|killTweensOf|sequence|overwriteProps|_plugins|swing|clearTimeout|_rootTimeline|killDelayedCallsTo|repeatDelay|false|onCompleteScope|allOnStart|preexisting|cancelAnimationFrame|staggerFrom|illegal|Object|_tempKill|staggerFromTo|yoyo|min|initAll|004|70158|easeNone|1500|requestAnimationFrame|concurrent|encountered|Quint|now|pauseCallback|Strong|jquery|endTime|onReverseCompleteScope|recent|insertMultiple|continue|Quart|_autoCSS|onUpdateParams|onStartScope|onStartParams|stagger|getLabelTime|addPause|stop|onUpdateScope|appendMultiple|gotoAndStop|align|gotoAndPlay|Power|append|it|the||dependency|is|onRepeatParams|into|missing|CancelAnimationFrame|GSAP|removeEventListener|BackOut|true|RequestAnimationFrame|moz|totalProgress|getTime|Cubic|clear|progress|on|or|onRepeat|linear|_dummyGS|file|BackIn|Alpha|set3DTransformRatio|setTransformRatio|expand|sizingMethod|chrome|getTransform|359|270|shortRotationZ|block|borderTop|backgroundPosition|background|backgroundPositionX|borderBottomLeftRadius|borderBottomRightRadius|boxShadow|borderRadius|borderTopLeftRadius|borderTopRightRadius|documentElement|setAttributeNS|parseColor|hsla|_setPluginRatio|_parseToProxy|cyan|203|gray|purple|green|pink|end|pt|loaded|registerSpecialProp||SVGElement|2000|Error|_cssRegister|CSSPropTween|collapsible|_registerComplexSpecialProp|backgroundPositionY|backgroundImage|physicsProps|physics2D|visible|fill|throwProps|bezier|radient|oader|pacity|clearProps|stroke|Color|xs5|_enableTransforms|slice|cascadeTo|xn4|value|NaN|Style|invalid|atrix|float|paddingTop|paddingRight|paddingBottom|paddingLeft|userSelect|backfaceVisibility|src|backgroundSize|perspectiveOrigin|transformStyle|clip|clipTop|borderTopColor|borderWidth|borderRightWidth|borderBottomWidth|borderTopStyle|textShadow|clipRight|clipBottom|clipLeft|165|gradient|1999|Z0|xhtml|createElement|div|zA||lineHeight|find|orange|compensated|fontSize|img|_specialProps|Trident|MSIE|points|taper|1px|Firefox|Version|navigator|userAgent|Safari|Chrome|EaseLookup|SineInOut|randomize|clamp|Circ|CircOut|CircIn|out|sort|Bounce|BounceOut|BounceIn|BounceInOut|CircInOut|asin|ExpoInOut|ExpoIn|Sine|SineOut|SineIn|ExpoOut|Expo|Elastic|ElasticOut|ElasticIn|ElasticInOut|999999999|rv|_cw|short|convertToPixels|ccw|getStyle|lime|getComputedStyle|aqua|rad|oyr|calculateOffset|cacheWidths|clientHeight|offset|Origin||clientWidth|oxr|Bottom|line|Webkit|BackInOut|silver||white|fuchsia|yellow|olive|blue|navy|maroon|Ms|Moz|teal'.split('|'),0,{}));
/*
	* 2D & 3D Transitions for LayerSlider
*/
;eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('20 1Z={27:[{j:"13 N E",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"1e",a:G,h:"r"}},{j:"13 N r",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"1e",a:G,h:"E"}},{j:"13 N L",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"1e",a:G,h:"J"}},{j:"13 N J",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"1e",a:G,h:"L"}},{j:"26",d:1,g:1,f:{e:0,i:"o"},c:{n:"14",b:"1e",a:G,h:"r"}},{j:"Z R o",d:[2,4],g:[4,7],f:{e:1k,i:"o"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"Z R D",d:[2,4],g:[4,7],f:{e:1k,i:"D"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"Z R 1j-o",d:[2,4],g:[4,7],f:{e:1k,i:"1j-o"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"Z R 1j-D",d:[2,4],g:[4,7],f:{e:1k,i:"1j-D"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"Z R (k)",d:[2,4],g:[4,7],f:{e:1k,i:"k"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"1y 1H N E",d:1,g:1s,f:{e:25,i:"D"},c:{n:"14",b:"1X",a:V,h:"r"}},{j:"1y 1H N r",d:1,g:1s,f:{e:25,i:"o"},c:{n:"14",b:"w",a:V,h:"r"}},{j:"1y 1H N L",d:1s,g:1,f:{e:25,i:"1j-D"},c:{n:"14",b:"w",a:V,h:"r"}},{j:"1y 1H N J",d:1s,g:1,f:{e:25,i:"1j-o"},c:{n:"14",b:"w",a:V,h:"r"}},{j:"1y Y N E",d:1,g:25,f:{e:1k,i:"D"},c:{n:"W",b:"w",a:1g,h:"r"}},{j:"1y Y N r",d:1,g:25,f:{e:1k,i:"o"},c:{n:"W",b:"w",a:1g,h:"E"}},{j:"1y 1W N L",d:25,g:1,f:{e:1k,i:"1j-D"},c:{n:"W",b:"w",a:1g,h:"J"}},{j:"1y Y N J",d:25,g:1,f:{e:1k,i:"1j-o"},c:{n:"W",b:"w",a:1g,h:"L"}},{j:"13 R m E (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"E"}},{j:"13 R m r (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"r"}},{j:"13 R m L (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"L"}},{j:"13 R m J (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"J"}},{j:"13 k R m k 1S",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"k"}},{j:"13 d m E (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 d m E (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 d m E (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 d m r (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"13 d m r (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"13 d m r (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"13 d N J m L (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 d N J m L (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 d N L m J (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 d N L m J (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 P m L (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 P m L (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 P m L (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 P m J (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 P m J (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 P m J (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 P N r m E (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 P N r m E (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 P N E m r (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"13 P N E m r (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"Z v Y R m E (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"E"}},{j:"Z v Y R m r (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"r"}},{j:"Z v Y R m L (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"L"}},{j:"Z v Y R m J (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"J"}},{j:"Z v Y k R m k 1S",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"k"}},{j:"Z v Y R N J-r (o)",d:[2,4],g:[4,7],f:{e:1f,i:"o"},c:{n:"Q",b:"z",a:1m,h:"1V"}},{j:"Z v Y R N L-E (D)",d:[2,4],g:[4,7],f:{e:1f,i:"D"},c:{n:"Q",b:"z",a:1m,h:"21"}},{j:"Z v Y R N J-E (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"1T"}},{j:"Z v Y R N L-r (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"1U"}},{j:"Z v Y d m E (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y d m E (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y d m E (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y d m r (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"Z v Y d m r (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"Z v Y d m r (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"Z v Y d N J m L (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y d N J m L (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y d N L m J (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y d N L m J (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y P m L (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y P m L (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y P m L (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y P m J (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y P m J (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y P m J (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y P N r m E (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y P N r m E (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y P N E m r (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"Z v Y P N E m r (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"1u",d:1,g:1,f:{e:0,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5}},{j:"1u d",d:4,g:1,f:{e:1f,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5}},{j:"1u g",d:1,g:4,f:{e:1f,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5}},{j:"1u R A",d:3,g:4,f:{e:1s,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5,y:x}},{j:"1u R F",d:3,g:4,f:{e:1s,i:"o"},c:{n:"Q",b:"1e",a:V,h:"J",1h:.5,u:-x}},{j:"1u-1I R A",d:3,g:4,f:{e:15,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5,y:x}},{j:"1u-1I R F",d:3,g:4,f:{e:15,i:"o"},c:{n:"Q",b:"1e",a:V,h:"J",1h:.5,u:-x}},{j:"1u 1I d",d:4,g:1,f:{e:1f,i:"o"},c:{n:"Q",b:"1e",a:V,h:"E",1h:.5}},{j:"1u 1I g",d:1,g:4,f:{e:1f,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5}},{j:"1c f N r",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"z",a:V,h:"E",y:x}},{j:"1c f N E",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"z",a:V,h:"r",y:-x}},{j:"1c f N J",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"z",a:V,h:"L",u:-x}},{j:"1c f N L",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"z",a:V,h:"J",u:x}},{j:"1c R N r",d:[3,4],g:[3,4],f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",y:x}},{j:"1c R N E",d:[3,4],g:[3,4],f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",y:-x}},{j:"1c R N J",d:[3,4],g:[3,4],f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",u:-x}},{j:"1c R N L",d:[3,4],g:[3,4],f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",u:x}},{j:"1c d N J",d:[6,12],g:1,f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",u:x}},{j:"1c d N L",d:[6,12],g:1,f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",u:-x}},{j:"1c g N r",d:1,g:[6,12],f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",y:-x}},{j:"1c g N E",d:1,g:[6,12],f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",y:x}},{j:"1v d N r",d:[3,10],g:1,f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",y:x}},{j:"1v d N E",d:[3,10],g:1,f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",y:-x}},{j:"1v g N J",d:1,g:[3,10],f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",u:-x}},{j:"1v g N L",d:1,g:[3,10],f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",u:x}},{j:"1v v 1z f N r",d:1,g:1,f:{e:q,i:"o"},c:{n:"Q",b:"z",a:V,h:"E",1h:.1,1r:-x,y:x}},{j:"1v v 1z f N E",d:1,g:1,f:{e:q,i:"o"},c:{n:"Q",b:"z",a:V,h:"r",1h:.1,1r:x,y:-x}},{j:"1v v 1z R N r",d:[3,4],g:[3,4],f:{e:19,i:"o"},c:{n:"Q",b:"z",a:V,h:"E",1r:-1w}},{j:"1v v 1z R N E",d:[3,4],g:[3,4],f:{e:19,i:"o"},c:{n:"Q",b:"z",a:V,h:"r",1r:-1w}},{j:"1v v 1z R N k",d:[3,4],g:[3,4],f:{e:19,i:"k"},c:{n:"Q",b:"z",a:V,h:"k",1r:-1w}},{j:"B f 1O",d:1,g:1,f:{e:0,i:"o"},c:{n:"14",b:"z",a:1a,h:"r",1h:.8}},{j:"B f N 1L",d:1,g:1,f:{e:0,i:"o"},c:{n:"14",b:"w",a:1a,h:"r",1h:1.2}},{j:"B R k",d:[3,4],g:[3,4],f:{e:1s,i:"k"},c:{n:"14",b:"z",a:V,h:"r",1h:.1}},{j:"B R N 1L k",d:[3,4],g:[3,4],f:{e:1s,i:"k"},c:{n:"14",b:"z",a:V,h:"r",1h:2}},{j:"B 1O v 1z R k",d:[3,4],g:[3,4],f:{e:1s,i:"k"},c:{n:"14",b:"z",a:V,h:"r",1h:.1,1r:x}},{j:"B v 1z R N 1L k",d:[3,4],g:[3,4],f:{e:1s,i:"k"},c:{n:"14",b:"z",a:V,h:"r",1h:2,1r:-x}},{j:"1D-Y R 24",d:3,g:4,f:{e:15,i:"o"},c:{n:"W",b:"w",a:1Y,h:"1T"}},{j:"1D-Y d A",d:6,g:1,f:{e:0,i:"o"},c:{n:"Q",b:"z",a:V,h:"r"}},{j:"1D-Y d F",d:6,g:1,f:{e:0,i:"o"},c:{n:"Q",b:"z",a:V,h:"J"}},{j:"1D-Y g A",d:1,g:8,f:{e:0,i:"o"},c:{n:"Q",b:"z",a:V,h:"r"}},{j:"1D-Y g F",d:1,g:8,f:{e:0,i:"o"},c:{n:"Q",b:"z",a:V,h:"J"}}],23:[{j:"1b f m E (l&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{y:1E},b:"1F",a:G,h:"A"},C:{c:{y:l},b:"z",a:G,h:"A"}},{j:"1b f m r (l&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{y:-1E},b:"1F",a:G,h:"A"},C:{c:{y:-l},b:"z",a:G,h:"A"}},{j:"1b f m L (l&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{u:-1E},b:"1F",a:1x,h:"F"},C:{c:{u:-l},b:"z",a:1x,h:"F"}},{j:"1b f m J (l&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{u:1E},b:"1F",a:1x,h:"F"},C:{c:{u:l},b:"z",a:1x,h:"F"}},{j:"1b R m E (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"o"},s:{c:{y:l},b:"w",a:G,h:"A"}},{j:"1b R m r (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"D"},s:{c:{y:-l},b:"w",a:G,h:"A"}},{j:"1b R m L (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-o"},s:{c:{u:-l},b:"w",a:G,h:"F"}},{j:"1b R m J (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-D"},s:{c:{u:l},b:"w",a:G,h:"F"}},{j:"1B S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},s:{c:{y:l},b:"w",a:1G,h:"A"}},{j:"1C S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},s:{c:{u:l},b:"w",a:1G,h:"F"}},{j:"B v S R m E (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"o"},M:{c:{I:.1A},a:1l,b:"18"},s:{c:{y:l},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v S R m r (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"D"},M:{c:{I:.1A},a:1l,b:"18"},s:{c:{y:-l},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v S R m L (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-o"},M:{c:{I:.1A},a:1l,b:"18"},s:{c:{u:-l},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v S R m J (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-D"},M:{c:{I:.1A},a:1l,b:"18"},s:{c:{u:l},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v A S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},M:{c:{I:.1A,u:1k},a:1l,b:"18"},s:{c:{y:l,u:-1k},b:"H",a:1G,h:"A"},C:{c:{u:0},a:1g,b:"H"}},{j:"B v F S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},M:{c:{I:.1A,y:-15},a:1l,b:"18"},s:{c:{u:l,y:15},b:"H",a:1G,h:"F"},C:{c:{y:0},a:1g,b:"H"}},{j:"1b d m E (l&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1b d m r (l&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{y:-l},b:"w",a:1a,h:"A"}},{j:"1b d m L (l&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{u:-l},b:"w",a:G,h:"F"}},{j:"1b d m J (l&#t;)",d:[5,9],g:1,f:{e:q,i:"D"},s:{c:{u:l},b:"w",a:G,h:"F"}},{j:"1B S d k (l&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1C S d k (l&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},s:{c:{u:-l},b:"w",a:1a,h:"F"}},{j:"1C S d k (1J&#t;)",d:[3,7],g:1,f:{e:1Q,i:"k"},s:{c:{u:-1J},b:"w",a:1R,h:"F"}},{j:"B v S d m E (l&#t;)",d:[5,9],g:1,f:{e:19,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:1p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v S d m r (l&#t;)",d:[5,9],g:1,f:{e:19,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:-l},b:"H",a:1p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v S d m L (l&#t;)",d:[5,9],g:1,f:{e:19,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"w",a:p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v S d m J (l&#t;)",d:[5,9],g:1,f:{e:19,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:l},b:"w",a:p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v A S d k (l&#t;)",d:[5,9],g:1,f:{e:19,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:1p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v F S d k (l&#t;)",d:[5,9],g:1,f:{e:19,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"1b P m E (l&#t;)",d:1,g:[5,9],f:{e:q,i:"o"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1b P m r (l&#t;)",d:1,g:[5,9],f:{e:q,i:"o"},s:{c:{y:-l},b:"w",a:1a,h:"A"}},{j:"1b P m L (l&#t;)",d:1,g:[5,9],f:{e:q,i:"o"},s:{c:{u:-l},b:"w",a:G,h:"F"}},{j:"1b P m J (l&#t;)",d:1,g:[5,9],f:{e:q,i:"D"},s:{c:{u:l},b:"w",a:G,h:"F"}},{j:"1B S P k (l&#t;)",d:1,g:[5,9],f:{e:q,i:"k"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1C S P k (l&#t;)",d:1,g:[5,9],f:{e:q,i:"k"},s:{c:{u:-l},b:"w",a:1a,h:"F"}},{j:"1B S P k (1J&#t;)",d:1,g:[4,9],f:{e:1Q,i:"k"},s:{c:{y:1J},b:"w",a:1R,h:"A"}},{j:"B v S P m E (l&#t;)",d:1,g:[7,11],f:{e:19,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"w",a:p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v S P m r (l&#t;)",d:1,g:[7,11],f:{e:19,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:-l},b:"w",a:p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v S P m L (l&#t;)",d:1,g:[7,11],f:{e:19,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:1p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v S P m J (l&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:l},b:"H",a:1p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v A S P k (l&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v F S P k (l&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:1p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"1N 1P 1M v S m E (l&#t;)",d:1,g:[7,11],f:{e:q,i:"o"},M:{c:{I:.O,u:-1k},a:p,b:"z"},s:{c:{u:-1k,y:l},b:"w",a:G,h:"A"},C:{c:{u:0,e:X},b:"z",a:p}},{j:"1N 1P 1M v S m r (l&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},M:{c:{I:.O,u:-1k},a:p,b:"z"},s:{c:{u:1k,y:-l},b:"w",a:G,h:"A"},C:{c:{u:0,e:X},b:"z",a:p}},{j:"1c 1t m E (x&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{y:x},b:"w",a:1a,h:"A"}},{j:"1c 1t m r (x&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{y:-x},b:"w",a:1a,h:"A"}},{j:"1c 1t m L (x&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{u:-x},b:"w",a:1a,h:"F"}},{j:"1c 1t m J (x&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{u:x},b:"w",a:1a,h:"F"}},{j:"B v 17 1t m E (x&#t;)",d:1,g:1,f:{e:q,i:"k"},s:{c:{I:.8,1r:7,u:10,y:1w},b:"1e",a:1x,h:"A"},C:{c:{1r:0,u:0,y:x},a:1x,b:"1e"}},{j:"B v 17 1t m r (x&#t;)",d:1,g:1,f:{e:q,i:"k"},s:{c:{I:.8,1r:-7,u:10,y:-1w},b:"1e",a:1x,h:"A"},C:{c:{1r:0,u:0,y:-x},a:1x,b:"1e"}},{j:"B v 17 1n m E (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"o"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{y:x},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v 17 1n m r (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"D"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{y:-x},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v 17 1n m L (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-o"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v 17 1n m J (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-D"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{u:x},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v A 17 1n k (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},M:{c:{I:.1i,u:-15},a:1o,b:"18"},s:{c:{y:q,u:15},b:"H",a:1o,h:"A"},C:{c:{y:x,u:0},a:1o,b:"H"}},{j:"B v F 17 1n k (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},M:{c:{I:.1i,y:15},a:1o,b:"18"},s:{c:{u:q,y:-15},b:"H",a:1o,h:"F"},C:{c:{u:x,y:0},a:1o,b:"H"}},{j:"1c d m E (x&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{y:x},b:"w",a:1a,h:"A"}},{j:"1c d m r (x&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{y:-x},b:"w",a:1a,h:"A"}},{j:"1B 17 d k (x&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},s:{c:{y:x},b:"w",a:1a,h:"A"}},{j:"B v 17 d m E (x&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:22,u:0},b:"H",a:G,h:"A"},C:{c:{e:X,y:x},b:"K",a:p}},{j:"B v 17 d m r (x&#t;)",d:[5,9],g:1,f:{e:q,i:"D"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:-x,u:0},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 d m L (x&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 d m J (x&#t;)",d:[5,9],g:1,f:{e:q,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v A 17 d k (x&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:x,u:0},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v F 17 d k (x&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v A 17 1K d m E (x&#t;)",d:[7,11],g:1,f:{e:q,i:"o"},s:{c:{I:.O,u:5,y:1w},b:"18",a:G,h:"A"},C:{c:{u:0,y:x},b:"18",a:G}},{j:"B v A 17 1K d m r (x&#t;)",d:[7,11],g:1,f:{e:q,i:"D"},s:{c:{I:.O,u:5,y:-1w},b:"18",a:G,h:"A"},C:{c:{u:0,y:-x},b:"18",a:G}},{j:"1c P m L (x&#t;)",d:1,g:[5,9],f:{e:q,i:"o"},s:{c:{u:-x},b:"w",a:G,h:"F"}},{j:"1c P m J (x&#t;)",d:1,g:[5,9],f:{e:q,i:"D"},s:{c:{u:x},b:"w",a:G,h:"F"}},{j:"1C 17 P k (x&#t;)",d:1,g:[5,9],f:{e:q,i:"k"},s:{c:{u:-x},b:"w",a:G,h:"F"}},{j:"B v 17 P m L (x&#t;)",d:1,g:[7,11],f:{e:q,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 P m J (x&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 P m E (x&#t;)",d:1,g:[7,11],f:{e:q,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:x},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 P m r (x&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:-x},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v A 17 P k (x&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:x},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v F 17 P k (x&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v F 17 1K P m E (x&#t;)",d:1,g:[7,11],f:{e:q,i:"o"},s:{c:{I:.O,u:1w,y:-5},b:"18",a:G,h:"F"},C:{c:{u:x,y:0},b:"18",a:G}},{j:"B v F 17 1K P m r (x&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},s:{c:{I:.O,u:-1w,y:-5},b:"18",a:G,h:"F"},C:{c:{u:-x,y:0},b:"18",a:G}},{j:"1b 1t m E (l&#t;, T U)",d:1,g:1,f:{e:q,i:"o",U:"T"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1b 1t m r (l&#t;, T U)",d:1,g:1,f:{e:q,i:"o",U:"T"},s:{c:{y:-l},b:"w",a:1a,h:"A"}},{j:"1b 1t m L (l&#t;, T U)",d:1,g:1,f:{e:q,i:"o",U:"T"},s:{c:{u:-l},b:"w",a:1a,h:"F"}},{j:"1b 1t m J (l&#t;, T U)",d:1,g:1,f:{e:q,i:"o",U:"T"},s:{c:{u:l},b:"w",a:1a,h:"F"}},{j:"B v S 1n m E (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"o",U:"T"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{y:l},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v S 1n m r (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"D",U:"T"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{y:-l},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v S 1n m L (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"1j-o",U:"T"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{u:-l},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v S 1n m J (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"1j-D",U:"T"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{u:l},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v A S 1n k (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"k",U:"T"},M:{c:{I:.1i},a:1o,b:"18"},s:{c:{y:l},b:"H",a:1o,h:"A"},C:{a:1o,b:"H"}},{j:"B v F S 1n k (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"k",U:"T"},M:{c:{I:.1i},a:1o,b:"18"},s:{c:{u:l},b:"H",a:1o,h:"F"},C:{a:1o,b:"H"}},{j:"B v S d m E (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"o",U:"T"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:l,u:-3},b:"w",a:1p,h:"A"},C:{c:{e:X,u:0},b:"z",a:1q}},{j:"B v S d m r (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"D",U:"T"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:-l,u:-3},b:"w",a:1p,h:"A"},C:{c:{e:X,u:0},b:"z",a:1q}},{j:"B v S d m L (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"o",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:G,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S d m J (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"D",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:l},b:"H",a:G,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v A S d k (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"k",U:"T"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:l,u:-3},b:"w",a:1p,h:"A"},C:{c:{e:X,u:0},b:"z",a:1q}},{j:"B v F S d k (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"k",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:G,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S P m L (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"o",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"w",a:1p,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S P m J (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"D",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:l},b:"w",a:1p,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S P m E (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"o",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:G,h:"A"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S P m r (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"D",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:-l},b:"H",a:G,h:"A"},C:{c:{e:X},b:"z",a:1q}},{j:"B v A S P k (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"k",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:G,h:"A"},C:{c:{e:X},b:"z",a:1q}},{j:"B v F S P k (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"k",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"w",a:1p,h:"F"},C:{c:{e:X},b:"z",a:1q}}]}',62,132,'||||||||||duration|easing|transition|rows|delay|tile|cols|direction|sequence|name|random|180|to|type|forward|600|75|left|animation|176|rotateX|and|easeInOutQuart|90|rotateY|easeOutQuart|horizontal|Scaling|after|reverse|right|vertical|1e3|easeInOutBack|scale3d|top|easeOutBack|bottom|before|from|85|columns|mixed|tiles|spinning|large|depth|750|slide|200|sliding|Fading||||Sliding|fade|||turning|easeInOutQuint|55|1500|Spinning|Turning|100|easeInOutQuad|50|350|scale|65|col|30|450|500|cuboids|700|1200|400|rotate|35|cuboid|Carousel|Flying|45|800|Smooth|rotating|95|Horizontal|Vertical|Mirror|91|easeInQuart|1300|fading|mirror|540|drunk|out|scaling|Drunk|in|colums|150|2e3|directions|topright|bottomleft|topleft|sliging|linear|850|layerSliderTransitions|var|bottomright|87|t3d|diagonal||Crossfading|t2d'.split('|')));
/*
	* LayerSlider
	* (c) 2011-2015 George Krupa, John Gera & Kreatura Media
*/
;eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('16 ab(t,e,i){17 a;"5O"==1O t?a=3K("#"+t):"ad"==1O t&&(a=t);17 s,o;2q(e){1i"ac":s="c4 3K b2",o=\'b1 b0 4M bF bX aG 4K 4P er ed an dX dY 31 22 3K aQ e4 e6 23 2K 2k aJ 4P ex. <as>4R eO 3Y 4P 5T eV eZ 2k 22 eX eP 31 2K 5p eE 22 "eC eF eG 2k 4X" eM eN 22 eL & dW db 3L.</as>\';1p;1i"9M":s="65 3K b2",o="b1 b0 4M dU dS dR an 65 3M ("+i+\') 31 22 3K aQ. 2K dQ at dF 3M 1.7.0 4K dv. 4R aM 3K 2k 1.10.x 4K dw. dt: 4R do 2R dq 22 3K dr aG 3Y 5T 5p do 2R aM 2k 2.x 3M 31 3K dz 5V 3t 2R b8 dB dC dE 4M dD 7 & 8. <a 2E="5P://ds.du.3J/dG/4/69-23-dP/#dT-13&dO-60">dN dH dK dM dp d0 3K by d2 d3.</a>\'}a.1l("12-42"),a.43(\'<p 1s="12-d4">!</p>\'),a.43(\'<p 1s="12-42-cY">2K: \'+s+"</p>"),a.43(\'<p 1s="12-42-8J">\'+o+"</p>")}!16(t){1c("2G"!=1O 7r)23(17 e 3E 7r)14[e]=7r[e];t.ah.3g=16(e){17 a="1.7.0",s=t.ah.ac,o=t(14),r=16(t,e){23(17 i=t.1K("."),a=e.1K("."),s=0;s<i.1h;++s){1c(a.1h==s)21!1;1c(1b(i[s])!=1b(a[s]))21 1b(i[s])>1b(a[s])?!1:!0}21 i.1h!=a.1h?!0:!0};1c(r("1.8.0",s)||o.1l("12-bv"),r(a,s)){1c((1O e).3I("ad|2G"))21 14.1M(16(){1E i(14,e)});1c("11"===e){17 n=t(14).11("2K").g;1c(n)21 n}1w 1c("cR"===e){17 d=t(14).11("2K").o;1c(d)21 d}1w{1c("cV"!==e)21 14.1M(16(){17 i=t(14).11("2K");1c(i){1c(!i.g.2P&&!i.g.4t)1c("3V"==1O e)e>0&&e<i.g.2w+1&&e!=i.g.1Z&&i.4N(e);1w 2q(e){1i"1T":i.o.6V(i.g),i.1T("6F");1p;1i"1Y":i.o.7c(i.g),i.1Y("6F");1p;1i"27":i.g.2A||(i.o.bt(i.g),i.g.2x=!0,i.27())}"dm"===e&&i.2g(),(i.g.2A||!i.g.2A&&i.g.2x)&&"1t"==e&&(i.o.b3(i.g),i.g.2x=!1,i.g.1I.18(\'1R[1e*="3q.3J"], 1R[1e*="5m.be"], 1R[1e*="5Z.3Q"]\').1M(16(){2i(t(14).11("8Z"))}),i.1t()),"d8"==e&&i.99()}});17 d=t(14).11("2K").8G;1c(d)21 d}}1w ab(o,"9M",s)};17 i=16(e,d){17 l=14;l.$el=t(e).1l("12-2b"),l.$el.11("2K",l),l.3R=16(){1c(l.8G=i.9Z,l.o=t.4Q({},l.8G,d),l.g=t.4Q({},i.72),l.1v=t.4Q({},i.9p),l.bi=t.4Q({},i.9Q),l.g.bz=t(e).2o("12-bv")?!1:!0,l.g.dI=t(e).4n(),l.g.2p&&(l.o.4J=!1),"bZ"===l.o.2C&&(l.o.2C=!0),"aI"===l.o.2C&&(l.o.2C=!1),"2G"!=1O aN&&(l.t=t.4Q({},aN)),"2G"!=1O aO&&(l.ct=t.4Q({},aO)),!l.g.aP)1c(l.g.aP=!0,t("4n").18(\'aK[8I*="5T"]\').1h&&(l.g.c2=t("4n").18(\'aK[8I*="5T"]\').1g("8I").1K("5T")[1]),t("4n").18(\'6o[1e*="69"]\').1h&&-1!=t("4n").18(\'6o[1e*="69"]\').1g("1e").1f("?")&&(l.g.bS=t("4n").18(\'6o[1e*="69"]\').1g("1e").1K("?")[1].1K("=")[1]),l.o.3p&&""!=l.o.3p&&l.o.3D&&""!=l.o.3D){t(e).1l("12-"+l.o.3p);17 a=l.o.3D+l.o.3p+"/3p.19",s=t("8E");1c(t("8E").1h||(s=t("4X")),t(\'6h[2E="\'+a+\'"]\').1h)o=t(\'6h[2E="\'+a+\'"]\'),l.g.33||(l.g.33=!0,l.g.9a=2h(16(){l.2V()},8w));1w 1c(4Z.aF){4Z.aF(a);17 o=t(\'6h[2E="\'+a+\'"]\')}1w 17 o=t(\'<6h 5a="bE" 2E="\'+a+\'" 4s="8J/19" />\').1C(s);o.3R(16(){l.g.33||(l.g.33=!0,l.g.96=2h(16(){l.2V()},8w))}),t(1W).3R(16(){l.g.33||(l.g.33=!0,l.g.97=2h(16(){l.2V()},8w))}),l.g.9o=2h(16(){l.g.33||(l.g.33=!0,l.2V())},1Q)}1w l.2V()},l.2V=16(){t(e).4S(t(l.o.4S)),t("4n").1g("5Y")?t("4X").1g("5Y")||t("4X").1g("5Y","12-72"):t("4n").1g("5Y","12-72"),l.g.7f()===!0&&l.o.7K===!0&&(t(e).1l("12-4l"),t(e).3y(".12-3b-2W-2b").1l("12-4l"));17 i=16(){l.o.7K===!0&&l.g.7f()===!0?(t(e).1l("12-4l"),t(e).3y(".12-3b-2W-2b").1l("12-4l"),l.o.49=!1):t(1W).1a()<l.o.b5||t(1W).1a()>l.o.bc?(t(e).1l("12-4l"),t(e).3y(".12-3b-2W-2b").1l("12-4l")):(t(e).2n("12-4l"),t(e).3y(".12-3b-2W-2b").2n("12-4l"))};1c(t(1W).2g(16(){i()}),i(),l.g.1y=16(){21 t(e).1a()},l.g.1F=16(){21 t(e).1d()},t(e).18(".12-3A").2n("12-3A").1l("12-1q"),t(e).18(\'.12-1q > *[1s*="12-s"]\').1M(16(){17 e=t(14).1g("1s").1K("12-s")[1].1K(" ")[0];t(14).2n("12-s"+e).1l("12-l"+e)}),l.o.aH&&(l.o.2U=l.o.aH),l.o.bD===!1&&(l.o.4V=!1),1==t(e).18(".12-1q").1h&&(l.o.49=!1,l.o.8Y=!1,l.o.7b=!1,l.o.7e=!1,l.o.4v=0,l.o.79=!1,l.o.2C=!0,l.o.2U=1,l.o.38="aI"),t(e).1V().2o("12-3b-2W-6N")&&0!==l.o.41&&(t(e)[0].1L.1a="1D%"),l.g.9R=l.g.2l=l.o.1a?""+l.o.1a:t(e)[0].1L.1a,l.g.3N=l.o.1d?""+l.o.1d:t(e)[0].1L.1d,-1==l.g.2l.1f("%")&&-1==l.g.2l.1f("1B")&&(l.g.2l+="1B"),-1==l.g.3N.1f("%")&&-1==l.g.3N.1f("1B")&&(l.g.3N+="1B"),l.g.4a=l.o.a4&&-1!=l.g.2l.1f("1B")&&-1!=l.g.3N.1f("1B")?!0:!1,l.o.7J===!0&&(l.o.41=0,l.g.4a=!0,-1!=l.g.2l.1f("%")&&(l.g.2l=1b(l.g.2l)+"1B"),-1!=l.g.3N.1f("%")&&(l.g.3N=1b(l.g.3N)+"1B")),t(e).18(\'*[1s*="12-l"], *[1s*="12-bg"]\').1M(16(){t(14).1V().2o("12-1q")||t(14).bH(t(14).1V())}),t(e).18(".12-1q").1M(16(){t(14).11("5d",t(14).5d()+1).1l("12-1q-"+(t(14).5d()+1)),t(14).2X(\':2R([1s*="12-"])\').1M(16(){t(14).bw()});17 e=t("<1k>").1l("12-bQ");t(14).18(".12-bg").1h?e.bM(t(14).18(".12-bg").eq("0")):e.4S(t(14))}),t(e).18(\'.12-1q, *[1s*="12-l"]\').1M(16(){1c(t(14).11("12")||t(14).1g("5a")||t(14).1g("1L")){1c(t(14).11("12"))17 e=t(14).11("12").24().1K(";");1w 1c(t(14).1g("5a")&&-1!=t(14).1g("5a").1f(":")&&-1!=t(14).1g("5a").1f(";"))17 e=t(14).1g("5a").24().1K(";");1w 17 e=t(14).1g("1L").24().1K(";");23(x=0;x<e.1h;x++){3H=e[x].1K(":"),-1!=3H[0].1f("4O")&&(3H[1]=l.9f(3H[1]));17 i="";3H[2]&&(i=":"+t.5Q(3H[2]))," "!=3H[0]&&""!=3H[0]&&t(14).11(t.5Q(3H[0]),t.5Q(3H[1])+i)}}l.o.7N===!0&&l.o.49===!0&&(l.o.49=!1,l.g.8v=!0);17 a=t(14);a.11("4j",a[0].1L.1j),a.11("4u",a[0].1L.1n),t(14).3t("a")&&t(14).2X().1h>0&&(a=t(14).2X());17 s=a.1a(),o=a.1d();a[0].1L.1a&&-1!=a[0].1L.1a.1f("%")&&(s=a[0].1L.1a),a[0].1L.1d&&-1!=a[0].1L.1d.1f("%")&&(o=a[0].1L.1d),a.11("2S",s),a.11("2T",o),a.11("8V",a.19("2c-1j")),a.11("93",a.19("2c-1G")),a.11("83",a.19("2c-1n")),a.11("7O",a.19("2c-1m"));17 r="3V"==1O 3j(a.19("36"))?1A.cb(1D*3j(a.19("36")))/1D:1;t(14).11("75",r),-1==a.19("4k-1j-1a").1f("1B")?a.11("6J",a[0].1L.a5):a.11("6J",a.19("4k-1j-1a")),-1==a.19("4k-1G-1a").1f("1B")?a.11("6j",a[0].1L.a8):a.11("6j",a.19("4k-1G-1a")),-1==a.19("4k-1n-1a").1f("1B")?a.11("6g",a[0].1L.a7):a.11("6g",a.19("4k-1n-1a")),-1==a.19("4k-1m-1a").1f("1B")?a.11("6M",a[0].1L.a6):a.11("6M",a.19("4k-1m-1a")),a.11("a3",a.19("9q-a1")),a.11("a2",a.19("a0-1d"))}),4Z.4b.aY)23(17 a=0;a<t(e).18(".12-1q").1h;a++)t(e).18(".12-1q").eq(a).11("cE")==4Z.4b.aY.1K("#")[1]&&(l.o.2U=a+1);t(e).18(\'*[1s*="12-92-"]\').1M(16(){23(17 i=t(14).1g("1s").1K(" "),a=0;a<i.1h;a++)1c(-1!=i[a].1f("12-92-")){17 s=1b(i[a].1K("12-92-")[1]);t(14).19({cy:"cH"}).2s(16(i){i.3u(),t(e).3g(s)})}}),l.g.2w=t(e).18(".12-1q").1h,l.o.77&&l.g.2w>2?("2e"==l.o.2U,l.o.8h=!1):l.o.77=!1,"2e"==l.o.2U&&(l.o.2U=1A.26(1A.2e()*l.g.2w+1)),l.o.57=l.o.57<l.g.2w+1?l.o.57:1,l.o.57=l.o.57<1?1:l.o.57,l.g.4i=1,l.o.4V&&(l.g.4i=0),l.4F.3q.2V(),l.4F.3Q.2V(),l.4F.6K.2V(),l.o.4V&&(l.o.2U=l.o.2U-1===0?l.g.2w:l.o.2U-1),l.g.1Z=l.o.2U,l.g.1I=t(e).18(".12-1q:eq("+(l.g.1Z-1)+")"),t(e).18(".12-1q").cL(\'<1k 1s="12-52"></1k>\'),l.g.i=t(e).18(".12-52"),l.o.9v&&(l.g.3n=t("<1k>").1l("12-cJ-5z").1C(l.g.i)),l.o.9r&&!l.g.2p&&(l.g.34=t("<1k>").1l("12-cx-5z").1C(l.g.i),l.g.34.43(t(\'<1k 1s="12-ct-1j"><1k 1s="12-ct-3m"><1k 1s="12-ct-aW"><1k 1s="12-ct-aE"></1k></1k></1k></1k><1k 1s="12-ct-1G"><1k 1s="12-ct-3m"><1k 1s="12-ct-aW"><1k 1s="12-ct-aE"></1k></1k></1k></1k><1k 1s="12-ct-cj"></1k>\'))),l.g.5s=t("<1k>").19({ck:-1,1J:"1P"}).1l("12-aD-2b").1C(t(e)),t("<1k>").1l("12-aD-cg").1C(l.g.5s),"ce"==t(e).19("3F")&&t(e).19("3F","ag"),l.g.i.19(l.o.7a?{cf:"64("+l.o.7a+")"}:{cl:l.o.8Q}),"8O"==l.o.8Q&&0==l.o.7a&&l.g.i.19({3w:"1P 8O !cm"}),t(e).18(".12-1q 28").1M(16(){1c(t(14).61("1a").61("1d"),l.o.3S===!0&&l.o.4J===!0){1c("5O"!=1O t(14).11("1e")){t(14).11("1e",t(14).1g("1e"));17 e=l.o.3D+"../19/cv.cr";t(14).1g("1e",e)}}1w"5O"==1O t(14).11("1e")&&(t(14).1g("1e",t(14).11("1e")),t(14).61("11-1e"))});17 s=t([]);1c(t(e).18("*:2R(.12-bg)").1M(16(){"2G"!=1O t(14).11("6I")&&0!==1b(t(14).11("6I"))&&(s=s.8z(t(14)))}),l.g.i.3Y("cq",16(e){l.g.am=e.84-t(14).1V().4q().1j,l.g.b4=e.af-t(14).1V().4q().1n}),l.g.i.3Y("aq",16(e){17 i=t(14).1V().4q().1j+l.g.am,a=t(14).1V().4q().1n+l.g.b4,o=e.84-i,r=e.af-a;s.1M(16(){t(14).19({3G:-o/1D*1b(t(14).11("6I")),44:-r/1D*1b(t(14).11("6I"))})})}),l.g.i.3Y("bO",16(){s.1M(16(){2Z.2k(14,.4,{19:{3G:0,44:0}})})}),l.o.8Y&&(t(\'<a 1s="12-1o-1T" 2E="#" />\').2s(16(i){i.3u(),t(e).3g("1T")}).1C(t(e)),t(\'<a 1s="12-1o-1Y" 2E="#" />\').2s(16(i){i.3u(),t(e).3g("1Y")}).1C(t(e)),l.o.9w&&(t(e).18(".12-1o-1T, .12-1o-1Y").19({1J:"1P"}),t(e).1S(16(){l.g.7X||(l.g.2p?t(e).18(".12-1o-1T, .12-1o-1Y").19("1J","2f"):t(e).18(".12-1o-1T, .12-1o-1Y").1t(!0,!0).2y(2z))},16(){l.g.2p?t(e).18(".12-1o-1T, .12-1o-1Y").19("1J","1P"):t(e).18(".12-1o-1T, .12-1o-1Y").1t(!0,!0).3B(2z)}))),l.o.7b||l.o.7e){17 o=t(\'<1k 1s="12-1m-1o-2H" />\').1C(t(e));1c(l.g.3k=o,"4I"==l.o.38&&o.1l("12-ar-5h"),l.o.7e&&"4I"!=l.o.38){1c(t(\'<5C 1s="12-1m-4U" />\').1C(t(e).18(".12-1m-1o-2H")),"1S"==l.o.38)17 r=t(\'<1k 1s="12-1H-1S"><1k 1s="12-1H-1S-52"><1k 1s="12-1H-1S-bg"></1k><1k 1s="12-1H-1S-28"><28></1k><5C></5C></1k></1k>\').1C(t(e).18(".12-1m-4U"));23(x=1;x<l.g.2w+1;x++){17 n=t(\'<a 2E="#" />\').1C(t(e).18(".12-1m-4U")).2s(16(i){i.3u(),t(e).3g(t(14).5d()+1)});1c("1S"==l.o.38){t(e).18(".12-1H-1S, .12-1H-1S-28").19({1a:l.o.8k,1d:l.o.5N});17 d=t(e).18(".12-1H-1S"),g=d.18("28").19({1d:l.o.5N}),h=t(e).18(".12-1H-1S-52").19({29:"2D",1J:"2f"});n.1S(16(){17 i,a=t(e).18(".12-1q").eq(t(14).5d());i=l.o.3S===!0&&l.o.4J===!0?a.18(".12-4w").1h?a.18(".12-4w").11("1e"):a.18(".12-32").1h?a.18(".12-32").1g("1e"):a.18(".12-bg").1h?a.18(".12-bg").11("1e"):l.o.3D+l.o.3p+"/6E.4H":a.18(".12-4w").1h?a.18(".12-4w").1g("1e"):a.18(".12-32").1h?a.18(".12-32").1g("1e"):a.18(".12-bg").1h?a.18(".12-bg").1g("1e"):l.o.3D+l.o.3p+"/6E.4H",t(e).18(".12-1H-1S-28").19({1j:1b(d.19("2c-1j")),1n:1b(d.19("2c-1n"))}),g.3R(16(){g.19(0==t(14).1a()?{3F:"ag",47:"0 1X",1j:"1X"}:{3F:"cF",3G:-t(14).1a()/2,1j:"50%"})}).1g("1e",i),d.19({1J:"2f"}).1t().4m({1j:t(14).3F().1j+(t(14).1a()-d.3r())/2},88),h.19({1J:"1P",29:"2O"}).1t().2y(88)},16(){h.1t().3B(88,16(){d.19({29:"2D",1J:"2f"})})})}}"1S"==l.o.38&&r.1C(t(e).18(".12-1m-4U")),t(e).18(".12-1m-4U a:eq("+(l.o.2U-1)+")").1l("12-1o-1U")}1c(l.o.7b)17 c=t(\'<a 1s="12-1o-27" 2E="#" />\').2s(16(i){i.3u(),t(e).3g("27")}).4S(t(e).18(".12-1m-1o-2H")),u=t(\'<a 1s="12-1o-1t" 2E="#" />\').2s(16(i){i.3u(),t(e).3g("1t")}).1C(t(e).18(".12-1m-1o-2H"));1w"4I"!=l.o.38&&(t(\'<5C 1s="12-1o-ap 12-1o-cC" />\').4S(t(e).18(".12-1m-1o-2H")),t(\'<5C 1s="12-1o-ap 12-1o-cu" />\').1C(t(e).18(".12-1m-1o-2H")));l.o.74&&"4I"!=l.o.38&&(o.19({1J:"1P"}),t(e).1S(16(){l.g.7X||(l.g.2p?o.19("1J","2f"):o.1t(!0,!0).2y(2z))},16(){l.g.2p?o.19("1J","1P"):o.1t(!0,!0).3B(2z)}))}1c("4I"==l.o.38){l.g.3Z=t(\'<1k 1s="12-1H-2H"></1k>\').1C(t(e));17 r=t(\'<1k 1s="12-1H"><1k 1s="12-1H-52"><1k 1s="12-1H-1q-2b"><1k 1s="12-1H-1q"></1k></1k></1k></1k>\').1C(l.g.3Z);1c(l.g.5h=t(e).18(".12-1H-1q-2b"),"6n"3E 1W?l.g.5h.1l("12-cs"):l.g.5h.1S(16(){t(14).1l("12-1H-1q-1S")},16(){t(14).2n("12-1H-1q-1S"),l.7T()}).aq(16(e){17 i=1b(e.84-t(14).4q().1j)/t(14).1a()*(t(14).1a()-t(14).18(".12-1H-1q").1a());t(14).18(".12-1H-1q").1t().19({3G:i})}),t(e).18(".12-1q").1M(16(){17 i,a=t(14).5d()+1;i=l.o.3S===!0&&l.o.4J===!0?t(14).18(".12-4w").1h?t(14).18(".12-4w").11("1e"):t(14).18(".12-32").1h?t(14).18(".12-32").1g("1e"):t(14).18(".12-bg").1h?t(14).18(".12-bg").11("1e"):l.o.3D+l.o.3p+"/6E.4H":t(14).18(".12-4w").1h?t(14).18(".12-4w").1g("1e"):t(14).18(".12-32").1h?t(14).18(".12-32").1g("1e"):t(14).18(".12-bg").1h?t(14).18(".12-bg").1g("1e"):l.o.3D+l.o.3p+"/6E.4H";17 s=t(\'<a 2E="#" 1s="12-4p-\'+a+\'"><28 1e="\'+i+\'"></a>\');s.1C(t(e).18(".12-1H-1q")),"6n"3E 1W||s.1S(16(){t(14).2X().1t().6f(2z,l.o.8l/1D)},16(){t(14).2X().2o("12-4p-1U")||t(14).2X().1t().6f(2z,l.o.8n/1D)}),s.2s(16(i){i.3u(),t(e).3g(a)})}),c&&u){17 f=l.g.3k=t(\'<1k 1s="12-1m-1o-2H 12-cD-5h"></1k>\').1C(t(e));c.8t().2s(16(i){i.3u(),t(e).3g("27")}).1C(f),u.8t().2s(16(i){i.3u(),t(e).3g("1t")}).1C(f)}l.o.74&&(l.g.3Z.19("1J","1P"),f&&(l.g.3k="2f"==f.19("1J")?f:t(e).18(".12-ar-5h"),l.g.3k.19("1J","1P")),t(e).1S(16(){t(e).1l("12-1S"),l.g.7X||(l.g.2p?(l.g.3Z.19("1J","2f"),l.g.3k&&l.g.3k.19("1J","2f")):(l.g.3Z.1t(!0,!0).2y(2z),l.g.3k&&l.g.3k.1t(!0,!0).2y(2z)))},16(){t(e).2n("12-1S"),l.g.2p?(l.g.3Z.19("1J","1P"),l.g.3k&&l.g.3k.19("1J","1P")):(l.g.3Z.1t(!0,!0).3B(2z),l.g.3k&&l.g.3k.1t(!0,!0).3B(2z))}))}l.g.4c=t(\'<1k 1s="12-4c"></1k>\').1C(t(e)),"2f"!=l.g.4c.19("1J")||l.g.4c.18("28").1h||(l.g.6H=16(){l.g.4c.19({1J:"1P",29:"2O"}).2y(4e,16(){l.g.6H=!1})},l.g.5o=t("<28>").1g("1e",l.o.3D+l.o.3p+"/4c.4H").1C(l.g.4c),l.g.9Y="3V"==1O 1b(t(e).19("2c-1m"))?1b(t(e).19("2c-1m")):0),l.7y(),l.o.9z&&t(e).18(".12-1q").1h>1&&t("4X").6L("bT",16(t){l.g.2P||l.g.4t||(37==t.bx?(l.o.6V(l.g),l.1T("6F")):39==t.bx&&(l.o.7c(l.g),l.1Y("6F")))}),"6n"3E 1W&&t(e).18(".12-1q").1h>1&&l.o.9A&&(l.g.i.6L("ci",16(t){17 e=t.5g?t.5g:t.bp.5g;1==e.1h&&(l.g.6P=l.g.5q=e[0].bb)}),l.g.i.6L("cd",16(t){17 e=t.5g?t.5g:t.bp.5g;1==e.1h&&(l.g.5q=e[0].bb),1A.4o(l.g.6P-l.g.5q)>45&&t.3u()}),l.g.i.6L("cp",16(){1A.4o(l.g.6P-l.g.5q)>45&&(l.g.6P-l.g.5q>0?(l.o.7c(l.g),t(e).3g("1Y")):(l.o.6V(l.g),t(e).3g("1T")))})),1==l.o.9N&&t(e).18(".12-1q").1h>1&&l.g.i.1S(16(){l.o.aw(l.g),l.g.2A&&(l.g.2N=!0,l.1t(),l.g.3n&&l.g.3n.1t(),l.g.34&&l.g.2F&&l.g.2F.62(),l.g.3U=(1E 56).5j())},16(){1==l.g.2N&&(l.27(),l.g.2N=!1)}),l.89(),l.o.1u&&(l.g.1u=t("<28>").1l("12-cw").1C(t(e)).1g("1L",l.o.9J).19({29:"2D",1J:"bK"}).3R(16(){17 i=0;l.g.1u||(i=1Q),2h(16(){l.g.1u.11("2S",l.g.1u.1a()),l.g.1u.11("2T",l.g.1u.1d()),"1X"!=l.g.1u.19("1j")&&l.g.1u.11("4j",l.g.1u[0].1L.1j),"1X"!=l.g.1u.19("1G")&&l.g.1u.11("5G",l.g.1u[0].1L.1G),"1X"!=l.g.1u.19("1n")&&l.g.1u.11("4u",l.g.1u[0].1L.1n),"1X"!=l.g.1u.19("1m")&&l.g.1u.11("5L",l.g.1u[0].1L.1m),0!=l.o.8D&&t("<a>").1C(t(e)).1g("2E",l.o.8D).1g("9G",l.o.9E).19({bJ:"1P",bR:"1P"}).43(l.g.1u),l.g.1u.19({1J:"1P",29:"2O"}),l.7S()},i)}).1g("1e",l.o.1u)),t(1W).2g(16(){l.2g()}),t(1W).3Y("c3",16(){t(1W).2g()}),l.g.9y=!0,1==l.o.4V?(l.o.49?(l.g.2A=!0,t(e).18(".12-1o-27").1l("12-1o-27-1U")):t(e).18(".12-1o-1t").1l("12-1o-1t-1U"),l.1Y()):"2G"!=1O l.g.1I[0]&&l.3S(l.g.1I,16(){l.g.1I.2y(l.o.7E,16(){l.g.4t=!1,t(14).1l("12-1U"),l.o.5I&&t(14).1N(t(14).11("5b")+25).ca(16(){t(14).18(".12-32").2s(),t(14).18("2t, 6G").1M(16(){0!==1O t(14)[0].6R&&(t(14)[0].6R=0),t(14).2s()}),t(14).7t()}),l.g.1I.18(\' > *[1s*="12-l"]\').1M(16(){17 e=t(14);(!e.2o("12-2t-3A")||e.2o("12-2t-3A")&&l.o.5I===!1)&&e.11("4A")>0&&e.11("46",2h(16(){l.8x(e)},e.11("4A")))})}),l.7x(l.g.1Z),l.o.49?(l.g.4t=!1,l.27()):t(e).18(".12-1o-1t").1l("12-1o-1t-1U")}),l.o.ba(t(e))},l.2g=16(){l.g.2g=!0,l.g.2P||(l.3x(l.g.1I,16(){l.g.2u&&l.g.2u.63(),l.g.2g=!1}),l.g.1u&&l.7S())},l.27=16(){l.g.2A?"1T"==l.g.2m&&l.o.8h?l.1T():l.1Y():(l.g.2A=!0,l.g.2P||l.g.4t||l.5z()),t(e).18(".12-1o-27").1l("12-1o-27-1U"),t(e).18(".12-1o-1t").2n("12-1o-1t-1U")},l.5z=16(){1c(t(e).18(".12-1U").11("12"))17 i=l.bi.7d;1w 17 i=l.o.7d;17 a=t(e).18(".12-1U").11("5X")?1b(t(e).18(".12-1U").11("5X")):i;1c(!l.o.4V&&!t(e).18(".12-1U").11("5X")){17 s=t(e).18(".12-1q:eq("+(l.o.2U-1)+")").11("5X");a=s?s:i}1c(2i(l.g.4f),l.g.3U?(l.g.4h||(l.g.4h=(1E 56).5j()),l.g.4h>l.g.3U&&(l.g.3U=(1E 56).5j()),l.g.3s||(l.g.3s=a),l.g.3s-=l.g.3U-l.g.4h,l.g.3U=!1,l.g.4h=(1E 56).5j()):(l.g.3s=a,l.g.4h=(1E 56).5j()),l.g.3s=1b(l.g.3s),l.g.4f=2h(16(){l.g.4h=l.g.3U=l.g.3s=!1,l.27()},l.g.3s),l.g.3n&&l.g.3n.4m({1a:l.g.1y()},l.g.3s,"8X",16(){t(14).19({1a:0})}),l.g.34){17 o=l.g.34.18(".12-ct-1G .12-ct-3m"),r=l.g.34.18(".12-ct-1j .12-ct-3m");"1P"==l.g.34.19("1J")&&(o.19({3m:0}),r.19({3m:0}),l.g.34.2y(8M)),l.g.2F?l.g.2F.c1():(l.g.2F=1E al,l.g.2F.8z(2Z.6w(o[0],a/bj,{3a:0},{3W:95.94,3a:6e,bV:16(){l.g.2F=!1}})),l.g.2F.8z(2Z.6w(r[0],a/bj,{3a:0},{3W:95.94,3a:6e})))}},l.1t=16(){l.g.3U=(1E 56).5j(),l.g.3n&&l.g.3n.1t(),l.g.34&&l.g.2F&&l.g.2F.62(),l.g.2N||l.g.2x||(t(e).18(".12-1o-1t").1l("12-1o-1t-1U"),t(e).18(".12-1o-27").2n("12-1o-27-1U")),2i(l.g.4f),l.g.2A=!1},l.99=16(){2i(l.g.4f),l.g.2A=!1,2i(l.g.9a),2i(l.g.96),2i(l.g.97),2i(l.g.9o),2i(l.g.aL),l.g.3n&&l.g.3n.1t(),l.g.34&&l.g.2F&&l.g.2F.62(),t(e).18("*").1t(!0,!1).7t(),t(e).18(".12-1q >").1M(16(){t(14).11("3C")&&t(14).11("3C").62()}),l.g.2N||l.g.2x||(t(e).18(".12-1o-1t").1l("12-1o-1t-1U"),t(e).18(".12-1o-27").2n("12-1o-27-1U"))},l.bG=16(){t(e).18("*").1t(),2i(l.g.4f),l.4N(l.g.1Z,l.g.2m)},l.9f=16(e){21"aX"==t.5Q(e.24())||"8X"==t.5Q(e.24())?e.24():e.2j("8W","aT").2j("8P","ak").2j("8T","aV").2j("cA","cO").2j("cz","cB").2j("ch","cM").2j("bN","cn").2j("c8","cK").2j("cI","cN").2j("cG","bL").2j("bP","bI").2j("5y","bB").2j("bA","bC")},l.1T=16(t){1c(l.g.1Z<2&&(l.g.4i+=1),l.g.4i>l.o.4v&&l.o.4v>0&&!t)l.g.4i=0,l.1t(),0==l.o.79&&(l.o.4v=0);1w{17 e=l.g.1Z<2?l.g.2w:l.g.1Z-1;l.g.2m="1T",l.4N(e,l.g.2m)}},l.1Y=16(t){1c(l.o.77)1c(t){1c(t){17 e=l.g.1Z<l.g.2w?l.g.1Z+1:1;l.g.2m="1Y",l.4N(e,l.g.2m)}}1w{17 e=l.g.1Z,i=16(){e=1A.26(1A.2e()*l.g.2w)+1,e==l.g.1Z?i():(l.g.2m="1Y",l.4N(e,l.g.2m))};i()}1w 1c(l.g.1Z<l.g.2w||(l.g.4i+=1),l.g.4i>l.o.4v&&l.o.4v>0&&!t)l.g.4i=0,l.1t(),0==l.o.79&&(l.o.4v=0);1w{17 e=l.g.1Z<l.g.2w?l.g.1Z+1:1;l.g.2m="1Y",l.4N(e,l.g.2m)}},l.4F={3q:{2V:16(){17 i=-1===4Z.4b.2E.1f("9H:")?"":"5P:",a=t(e).18(\'1R[1e*="3q.3J"], 1R[1e*="5m.be"]\');1c(a.1h){t("<6o>").1g({1e:i+"//c6.3q.3J/c7",4s:"8J/c9"}).1C("8E");{a.1h}1W.bU=16(){a.1M(16(){1c(t(14).1V().1l("12-2t-3A"),t(14).1V(\'[1s*="12-l"]\')){17 e=i,a=t("<1k>").1l("12-54").1C(t(14).1V());t("<28>").1C(a).1l("12-32").1g("9I","9L 2t").1g("1e",e+"//28.3q.3J/bW/"+t(14).1g("1e").1K("c0/")[1].1K("?")[0]+"/"+l.o.9s),t("<1k>").1C(a).1l("12-9K"),t(14).1V().19({1a:t(14).1a(),1d:t(14).1d()}).2s(16(){17 e=t(14).18("1R");1c(e.19("1J","2f"),t(14).11("4A")>0&&t(14).11("46")&&2i(t(14).11("46")),l.g.4d||(l.g.2P=!0,l.g.2N?(0!=l.o.2C&&(l.g.2N=!1),l.g.2x=!0):l.g.2x=l.g.2A,0!=l.o.2C&&l.1t(),l.g.4d=!0),"2G"==1O e.11("6p")){e.1g("1e",s);17 i=16(t){0===t.11&&(l.g.7B+=1,"1X"==l.o.2C&&1==l.g.2x&&l.g.7B==l.g.1I.18(\'1R[1e*="3q.3J"], 1R[1e*="5m.be"]\').1h&&(l.g.3s=1,l.27()))},a=16(t){t.9G.9F()};e.11("6p",1E bY.cc(e[0],{de:{ek:a,em:i}}))}1w e.11("6p").9F();t(14).18(".12-54").1N(l.g.v.d).3B(l.g.v.91,16(){l.g.2P=!1,1==l.g.2g&&l.3x(l.g.1I,16(){l.g.2g=!1})})}),e=-1===t(14).1g("1e").1f("5P")?i:"";17 s=e+t(14).1g("1e"),o="&";-1==s.1f("?")&&(o="?"),-1==s.1f("4D")?s+=o:s.2j("4D=1","4D=0"),s+="&9B=9u&6K=1&ej=1&3M=3",t(14).11("5n",s),t(14).11("2S",t(14).1g("1a")),t(14).11("2T",t(14).1g("1d")),t(14).1g("1e","")}})}}},6v:16(){},1t:16(t){t.1V().18(".12-54").2y(l.g.v.78,16(){t.1V().18("1R").11("6p").ei(),t.1V().18("1R").19("1J","1P")})}},3Q:{2V:16(){17 i=-1===4Z.4b.2E.1f("9H:")?"":"5P:";t(e).18(\'1R[1e*="5Z.3Q"]\').1M(16(){1c(t(14).1V().1l("12-2t-3A"),t(14).1V(\'[1s*="12-l"]\')){17 e=t(14),a=i,s=t("<1k>").1l("12-54").1C(t(14).1V());t.ef(a+"//3Q.3J/eg/eh/2t/"+t(14).1g("1e").1K("2t/")[1].1K("?")[0]+".en?eo=?",16(i){t("<28>").1C(s).1l("12-32").1g("9I","9L 2t").1g("1e",i[0].eu),e.11("9C",1Q*1b(i[0].2r)),t("<1k>").1C(s).1l("12-9K")}),t(14).1V().19({1a:t(14).1a(),1d:t(14).1d()}).2s(16(){t(14).11("4A")>0&&t(14).11("46")&&2i(t(14).11("46")),l.g.2P=!0,l.g.2N?(0!=l.o.2C&&(l.g.2N=!1),l.g.2x=!0):l.g.2x=l.g.2A,0!=l.o.2C&&l.1t(),l.g.4d=!0,a=-1===t(14).18("1R").11("5n").1f("5P")?i:"",t(14).18("1R").1g("1e",a+t(14).18("1R").11("5n")),t(14).18(".12-54").1N(l.g.v.d).3B(l.g.v.91,16(){1c("1X"==l.o.2C&&1==l.g.2x){17 t=2h(16(){l.27()},e.11("9C")-l.g.v.d);e.11("8Z",t)}l.g.2P=!1,1==l.g.2g&&l.3x(l.g.1I,16(){l.g.2g=!1})})});17 o="&";-1==t(14).1g("1e").1f("?")&&(o="?");17 r="&9B=9u";-1==t(14).1g("1e").1f("4D")?t(14).11("5n",t(14).1g("1e")+o+"4D=1"+r):t(14).11("5n",t(14).1g("1e").2j("4D=0","4D=1")+r),t(14).11("2S",t(14).1g("1a")),t(14).11("2T",t(14).1g("1d")),t(14).1g("1e","")}})},6v:16(){},1t:16(t){t.1V().18(".12-54").2y(l.g.v.78,16(){t.1V().18("1R").1g("1e","")})}},6K:{2V:16(){t(e).18("2t, 6G").1M(16(){17 e="2G"!=1O t(14).1g("1a")?t(14).1g("1a"):"es",i="2G"!=1O t(14).1g("1d")?t(14).1g("1d"):""+t(14).1d();-1===e.1f("%")&&(e=1b(e)),-1===i.1f("%")&&(i=1b(i)),"1D%"!==e||0!==i&&"0"!==i&&"1D%"!==i||(t(14).1g("1d","1D%"),i="1X"),t(14).1V().1l("12-2t-3A").19({1a:e,1d:i}).11({2S:e,2T:i});t(14);t(14).3Y("ep",16(){"1X"===l.o.2C&&l.g.2x===!0&&l.27()}),t(14).61("1a").61("1d").19({1a:"1D%",1d:"1D%"}).2s(16(t){l.g.4d||(14.2N&&t.3u(),14.6v(),l.g.2P=!0,l.g.2N?(l.o.2C!==!1&&(l.g.2N=!1),l.g.2x=!0):l.g.2x=l.g.2A,l.o.2C!==!1&&l.1t(),l.g.4d=!0,l.g.2P=!1,l.g.2g===!0&&l.3x(l.g.1I,16(){l.g.2g=!1}))})})},6v:16(){},1t:16(t){t[0].62()}}},l.4N=16(i,a){l.g.4h=l.g.3U=l.g.3s=!1,l.g.3n&&l.g.3n.1t().1N(2z).4m({1a:0},ec),l.g.34&&(l.g.34.3B(4e),l.g.2F&&l.g.2F.5t().2r(.35)),1==l.g.4d&&(l.g.4d=!1,l.g.2A=l.g.2x,l.g.1I.18(\'1R[1e*="3q.3J"], 1R[1e*="5m.be"]\').1M(16(){l.4F.3q.1t(t(14))}),l.g.1I.18(\'1R[1e*="5Z.3Q"]\').1M(16(){l.4F.3Q.1t(t(14))}),l.g.1I.18("2t, 6G").1M(16(){l.4F.6K.1t(t(14))})),t(e).18(\'1R[1e*="3q.3J"], 1R[1e*="5m.be"], 1R[1e*="5Z.3Q"]\').1M(16(){2i(t(14).11("8Z"))}),2i(l.g.4f),l.g.66=i,l.g.1r=t(e).18(".12-1q:eq("+(l.g.66-1)+")"),a||(l.g.2m=l.g.1Z<l.g.66?"1Y":"1T");17 s=0;t(e).18(\'1R[1e*="3q.3J"], 1R[1e*="5m.be"], 1R[1e*="5Z.3Q"]\').1h>0&&(s=l.g.v.78),"2G"!=1O l.g.1r[0]&&l.3S(l.g.1r,16(){l.4m()})},l.3S=16(i,a){1c(l.g.4t=!0,l.g.9y&&t(e).19({29:"2O"}),l.o.3S){17 s=[],o=0;1c("1P"!=i.19("3w-2I")&&-1!=i.19("3w-2I").1f("64")&&!i.2o("12-3z")&&!i.2o("12-2R-3z")){17 r=i.19("3w-2I");r=r.3I(/64\\((.*)\\)/)[1].2j(/"/9x,""),s[s.1h]=[r,i]}1c(i.18("28:2R(.12-3z, .12-2R-3z)").1M(16(){l.o.4J===!0&&t(14).1g("1e",t(14).11("1e")),s[s.1h]=[t(14).1g("1e"),t(14)]}),i.18("*").1M(16(){1c("1P"!=t(14).19("3w-2I")&&-1!=t(14).19("3w-2I").1f("64")&&!t(14).2o("12-3z")&&!t(14).2o("12-2R-3z")){17 e=t(14).19("3w-2I");e=e.3I(/64\\((.*)\\)/)[1].2j(/"/9x,""),s[s.1h]=[e,t(14)]}}),0==s.1h)t(".12-1H-2H, .12-1o-1Y, .12-1o-1T, .12-1m-1o-2H").19({29:"2O"}),l.3x(i,a);1w{l.g.2p?l.g.5s.19("1J","2f"):l.g.5s.1N(9P).2y(2z);17 n=16(){l.g.5s.1t(!0,!0).19({1J:"1P"}),t(".12-1H-2H, .12-1o-1Y, .12-1o-1T, .12-1m-1o-2H").19({29:"2O"}),-1!==40.3X.1f("e1/7")||l.g.2p?2h(16(){l.3x(i,a)},50):l.3x(i,a)};23(x=0;x<s.1h;x++)t("<28>").11("el",s[x]).3R(16(){t(14).11("el")[1].1l("12-3z"),++o==s.1h&&n()}).42(16(){17 e=t(14).11("el")[0].9j(t(14).11("el")[0].9m("/")+1,t(14).11("el")[0].1h);1W.6u?6u.e0(\'2K 42:\\r\\n\\r\\6A 6B 4M 22 6y 31 22 2I 4K 3w 2I "\'+e+\'" 3t 6S 2k a 6m 4b 5p 5V 6z be 33. 4R 6D 22 6Q 31 4T 4P 6l 6i 3E 22 6c.\'):9b(\'2K 42:\\r\\n\\r\\6A 6B 4M 22 6y 31 22 2I 4K 3w 2I "\'+e+\'" 3t 6S 2k a 6m 4b 5p 5V 6z be 33. 4R 6D 22 6Q 31 4T 4P 6l 6i 3E 22 6c.\'),t(14).1l("12-2R-3z"),++o==s.1h&&n()}).1g("1e",s[x][0])}}1w t(".12-1H-2H, .12-1o-1Y, .12-1o-1T, .12-1m-1o-2H").19({29:"2O"}),l.3x(i,a)},l.3x=16(e,i){e.19({29:"2D",1J:"2f"}),l.g.6H&&l.g.6H(),l.89(),"4I"==l.o.38&&l.9O();17 a=e.2X();a.1M(16(){17 e=t(14),i=e.11("4j")?e.11("4j"):"0",a=e.11("4u")?e.11("4u"):"0";e.3t("a")&&e.2X().1h>0&&(e.19({1J:"2f"}),e=e.2X());17 s="1X",o="1X";e.11("2S")&&("3V"==1O e.11("2S")?s=1b(e.11("2S"))*l.g.1x:-1!=e.11("2S").1f("%")&&(s=e.11("2S"))),e.11("2T")&&("3V"==1O e.11("2T")?o=1b(e.11("2T"))*l.g.1x:-1!=e.11("2T").1f("%")&&(o=e.11("2T")));17 r=e.11("8V")?1b(e.11("8V"))*l.g.1x:0,n=e.11("93")?1b(e.11("93"))*l.g.1x:0,d=e.11("83")?1b(e.11("83"))*l.g.1x:0,g=e.11("7O")?1b(e.11("7O"))*l.g.1x:0,h=e.11("6J")?1b(e.11("6J"))*l.g.1x:0,c=e.11("6j")?1b(e.11("6j"))*l.g.1x:0,u=e.11("6g")?1b(e.11("6g"))*l.g.1x:0,f=e.11("6M")?1b(e.11("6M"))*l.g.1x:0,p=e.11("a3"),m=e.11("a2");1c(l.g.4a||l.o.41>0){1c(e.3t("28")&&!e.2o("12-bg")&&e.1g("1e")&&(e.19({1a:"1X",1d:"1X"}),0!=s&&"1X"!=s||"3V"!=1O o||0==o||(s=o/e.1d()*e.1a()),0!=o&&"1X"!=o||"3V"!=1O s||0==s||(o=s/e.1a()*e.1d()),"1X"==s&&(s=e.1a()*l.g.1x),"1X"==o&&(o=e.1d()*l.g.1x),e.19({1a:s,1d:o})),e.3t("28")||e.19({1a:s,1d:o,"9q-a1":1b(p)*l.g.1x+"1B","a0-1d":1b(m)*l.g.1x+"1B"}),e.3t("1k")&&e.18("1R").11("5n")){17 v=e.18("1R");v.1g("1a",1b(v.11("2S"))*l.g.1x).1g("1d",1b(v.11("2T"))*l.g.1x),e.19({1a:1b(v.11("2S"))*l.g.1x,1d:1b(v.11("2T"))*l.g.1x})}e.19({2c:d+"1B "+n+"1B "+g+"1B "+r+"1B ",a5:h+"1B",a8:c+"1B",a7:u+"1B",a6:f+"1B"})}1c(e.2o("12-bg")){17 y=l.g.i;e.19({1a:"1X",1d:"1X"}),s=e.1a(),o=e.1d();17 b=l.g.1x;-1!=l.g.2l.1f("%")&&(l.g.1y()>s?(b=l.g.1y()/s,l.g.1F()>o*b&&(b=l.g.1F()/o)):l.g.1F()>o&&(b=l.g.1F()/o,l.g.1y()>s*b&&(b=l.g.1y()/s))),e.19({1a:s*b,1d:o*b,3G:y.1a()/2-s*b/2,44:y.1d()/2-o*b/2})}1w{17 w=e;e.1V().3t("a")&&(e=e.1V());17 x=0;l.o.76?x=l.o.76>0?(l.g.1y()-l.o.76)/2:0:l.o.7p&&(x=l.o.7p>0?(l.g.1y()-l.o.7p)/2:0),x=0>x?0:x,-1!=i.1f("%")?e.19({1j:l.g.1y()/1D*1b(i)-w.1a()/2-r-h}):(x>0||l.g.4a||l.o.41>0)&&e.19({1j:x+1b(i)*l.g.1x}),-1!=a.1f("%")?e.19({1n:l.g.1F()/1D*1b(a)-w.1d()/2-d-u}):(l.g.4a||l.o.41>0)&&e.19({1n:1b(a)*l.g.1x})}}),e.19({1J:"1P",29:"2O"}),l.7y(),i(),t(14).7t()},l.7y=16(){1c(l.g.5o){17 t=16(){l.g.5o.1d()>0?l.g.4c.19(l.g.9Y>0?{1d:l.g.5o.1d()/2}:{1d:l.g.5o.1d(),44:-l.g.5o.1d()/2}):2h(16(){t()},50)};t()}},l.89=16(){1c(l.o.41>0&&(t(1W).1a()<l.o.41?(l.g.4a=!0,l.g.2l=l.o.41+"1B"):(l.g.4a=!1,l.g.2l=l.g.9R,l.g.1x=1)),t(e).3y(".12-3b-2W-2b").1h&&t(e).3y(".12-3b-2W-6N").19({1a:t(1W).1a()}),l.g.4a){17 i=t(e).1V();l.o.7J===!0?t(e).19({1a:"1D%",1d:t(1W).1d()}):(t(e).19({1a:i.1a()-1b(t(e).19("2c-1j"))-1b(t(e).19("2c-1G"))}),l.g.1x=t(e).1a()/1b(l.g.2l),t(e).19({1d:l.g.1x*1b(l.g.3N)}))}1w l.g.1x=1,t(e).19({1a:l.g.2l,1d:l.g.3N});1c(t(e).3y(".12-3b-2W-2b").1h&&(t(e).3y(".12-3b-2W-6N").19({1d:t(e).3l(!0)}),t(e).3y(".12-3b-2W-2b").19({1d:t(e).3l(!0)}),t(e).3y(".12-3b-2W-6N").19({1a:t(1W).1a(),1j:-t(e).3y(".12-3b-2W-2b").4q().1j}),-1!=l.g.2l.1f("%"))){17 a=1b(l.g.2l),s=t("4X").1a()/1D*a-(t(e).3r()-t(e).1a());t(e).1a(s)}t(e).18(".12-52, .12-1v-2b").19({1a:l.g.1y(),1d:l.g.1F()}),l.g.1I&&l.g.1r?(l.g.1I.19({1a:l.g.1y(),1d:l.g.1F()}),l.g.1r.19({1a:l.g.1y(),1d:l.g.1F()})):t(e).18(".12-1q").19({1a:l.g.1y(),1d:l.g.1F()})},l.7S=16(){l.g.1u.19({1a:l.g.1u.11("2S")*l.g.1x,1d:l.g.1u.11("2T")*l.g.1x}),l.g.2p?l.g.1u.19("1J","2f"):l.g.1u.2y(2z);17 i=7Z=87=7Y="1X";i=l.g.1u.11("4j")&&-1!=l.g.1u.11("4j").1f("%")?l.g.1y()/1D*1b(l.g.1u.11("4j"))-l.g.1u.1a()/2+1b(t(e).19("2c-1j")):1b(l.g.1u.11("4j"))*l.g.1x,7Z=l.g.1u.11("5G")&&-1!=l.g.1u.11("5G").1f("%")?l.g.1y()/1D*1b(l.g.1u.11("5G"))-l.g.1u.1a()/2+1b(t(e).19("2c-1G")):1b(l.g.1u.11("5G"))*l.g.1x,87=l.g.1u.11("4u")&&-1!=l.g.1u.11("4u").1f("%")?l.g.1F()/1D*1b(l.g.1u.11("4u"))-l.g.1u.1d()/2+1b(t(e).19("2c-1n")):1b(l.g.1u.11("4u"))*l.g.1x,7Y=l.g.1u.11("5L")&&-1!=l.g.1u.11("5L").1f("%")?l.g.1F()/1D*1b(l.g.1u.11("5L"))-l.g.1u.1d()/2+1b(t(e).19("2c-1m")):1b(l.g.1u.11("5L"))*l.g.1x,l.g.1u.19({1j:i,1G:7Z,1n:87,1m:7Y})},l.9O=16(){l.7M("3Y");17 i=-1==l.g.2l.1f("%")?1b(l.g.2l):l.g.1y();t(e).18(".12-1H-1q a").19({1a:1b(l.o.8k*l.g.1x),1d:1b(l.o.5N*l.g.1x)}),t(e).18(".12-1H-1q a:7v").19({47:0}),t(e).18(".12-1H-1q").19({1d:1b(l.o.5N*l.g.1x)});17 a=t(e).18(".12-1H"),s=1b(-1==l.o.6X.1f("%")?l.o.6X:i/1D*1b(l.o.6X));a.19({1a:s*1A.26(1D*l.g.1x)/1D}),a.1a()>t(e).18(".12-1H-1q").1a()&&a.19({1a:t(e).18(".12-1H-1q").1a()}),l.7M("9V")},l.7x=16(i){17 a=i?i:l.g.66;t(e).18(".12-1H-1q a:2R(.12-4p-"+a+")").2X().1M(16(){t(14).2n("12-4p-1U").1t().6f(8S,l.o.8n/1D)}),t(e).18(".12-1H-1q a.12-4p-"+a).2X().1l("12-4p-1U").1t().6f(8S,l.o.8l/1D)},l.7T=16(){1c(!t(e).18(".12-1H-1q-2b").2o("12-1H-1q-1S")){17 i=t(e).18(".12-4p-1U").1h?t(e).18(".12-4p-1U").1V():!1;1c(i){17 a=i.3F().1j+i.1a()/2,s=t(e).18(".12-1H-1q-2b").1a()/2-a;s=s<t(e).18(".12-1H-1q-2b").1a()-t(e).18(".12-1H-1q").1a()?t(e).18(".12-1H-1q-2b").1a()-t(e).18(".12-1H-1q").1a():s,s=s>0?0:s,t(e).18(".12-1H-1q").4m({3G:s},cQ)}}},l.7M=16(i){1c(l.o.74&&!t(e).2o("12-1S"))2q(i){1i"3Y":l.g.3Z.19({29:"2D",1J:"2f"});1p;1i"9V":l.g.3Z.19({29:"2O",1J:"1P"})}},l.4m=16(){l.g.7B=0,t(e).18(".12-1q").1h>1&&(l.g.2P=!0),l.g.4t=!1,2i(l.g.4f),2i(l.g.e5),l.g.9e=l.g.1I,l.o.aB(l.g),"4I"==l.o.38&&(l.7x(),"6n"3E 1W||l.7T()),l.g.1r.1l("12-bh");17 i=7P=6s=8g=6t=7q=6q=7A=6O=ea=6C=eb="1X",d=7w=l.g.1y(),g=7o=l.g.1F(),h="1T"==l.g.2m?l.g.1I:l.g.1r,c=h.11("3o")?h.11("3o"):l.o.8K,u=l.g.8m[l.g.2m][c];2q(("1j"==u||"1G"==u)&&(d=6s=7w=6q=0,6C=0),("1n"==u||"1m"==u)&&(g=i=7o=6t=0,6O=0),u){1i"1j":7P=6t=0,6O=-l.g.1y();1p;1i"1G":i=7q=0,6O=l.g.1y();1p;1i"1n":8g=6q=0,6C=-l.g.1F();1p;1i"1m":6s=7A=0,6C=l.g.1F()}l.g.1I.19({1j:i,1G:7P,1n:6s,1m:8g}),l.g.1r.19({1a:7w,1d:7o,1j:6t,1G:7q,1n:6q,1m:7A});17 f=l.g.1I.11("5S")?1b(l.g.1I.11("5S")):l.o.71,p=l.g.1I.11("4E")?1b(l.g.1I.11("4E")):l.o.4y,m=l.g.1I.11("4L")?l.g.1I.11("4L"):l.o.4x,v=l.g.1r.11("5b")?1b(l.g.1r.11("5b")):l.o.5J,y=l.g.1r.11("68")?1b(l.g.1r.11("68")):l.o.5w;0===y&&(y=1);17 b=l.g.1r.11("67")?l.g.1r.11("67"):l.o.5x,w=16(){l.g.1I.1N(f+p/15).4m({1a:d,1d:g},p,m,16(){x()})},x=16(){1c(l.g.9e.18(\' > *[1s*="12-l"]\').1M(16(){t(14).11("3C")&&t(14).11("3C").7I(),t(14).19({e9:"1P"})}),l.g.1I=l.g.1r,l.g.e8=l.g.1Z,l.g.1Z=l.g.66,l.o.7U(l.g),l.o.3S&&l.o.4J){17 i=l.g.1Z==l.g.2w?1:l.g.1Z+1;t(e).18(".12-1q").eq(i-1).18("28:2R(.12-3z)").1M(16(){t(14).3R(16(){t(14).1l("12-3z")}).42(16(){17 e=t(14).11("1e").9j(t(14).11("1e").9m("/")+1,t(14).11("1e").1h);1W.6u?6u(\'2K 42:\\r\\n\\r\\6A 6B 4M 22 6y 31 22 2I 4K 3w 2I "\'+e+\'" 3t 6S 2k a 6m 4b 5p 5V 6z be 33. 4R 6D 22 6Q 31 4T 4P 6l 6i 3E 22 6c.\'):9b(\'2K 42:\\r\\n\\r\\6A 6B 4M 22 6y 31 22 2I 4K 3w 2I "\'+e+\'" 3t 6S 2k a 6m 4b 5p 5V 6z be 33. 4R 6D 22 6Q 31 4T 4P 6l 6i 3E 22 6c.\'),t(14).1l("12-2R-3z")}).1g("1e",t(14).11("1e"))})}t(e).18(".12-1q").2n("12-1U"),t(e).18(".12-1q:eq("+(l.g.1Z-1)+")").1l("12-1U").2n("12-bh"),t(e).18(".12-1m-4U a").2n("12-1o-1U"),t(e).18(".12-1m-4U a:eq("+(l.g.1Z-1)+")").1l("12-1o-1U"),l.g.2A&&l.5z(),l.g.2P=!1,1==l.g.2g&&l.3x(l.g.1I,16(){l.g.2g=!1})},S=16(e){17 i=l.g.1I.18(\' > *[1s*="12-l"]\');i.1M(16(){1c("2G"==1O t(14).11("8q")||"2G"!=1O t(14).11("8q")&&t(14).11("8q")!==l.g.1Z){t(14).11("2B")||l.5r(t(14)),t(14).2n("12-8y");17 i,s,o=t(14).11("3o")?t(14).11("3o"):u;2q(o){1i"1j":i=-l.g.1y(),s=0;1p;1i"1G":i=l.g.1y(),s=0;1p;1i"1n":s=-l.g.1F(),i=0;1p;1i"1m":s=l.g.1F(),i=0;1p;1i"3v":s=0,i=0}1c("1E"===t(14).11("2B"))17 r="1E";1w 17 r=t(14).11("5u")?t(14).11("5u"):!1;2q(r){1i"1j":i=l.g.1y(),s=0;1p;1i"1G":i=-l.g.1y(),s=0;1p;1i"1n":s=l.g.1F(),i=0;1p;1i"1m":s=-l.g.1F(),i=0;1p;1i"3v":s=0,i=0;1p;1i"1E":i=t(14).11("3h")?"1j"===t(14).11("3h")?l.g.1y():"1G"===t(14).11("3h")?-l.g.1y():-1b(t(14).11("3h")):-l.1v.7R,s=t(14).11("3e")?"1n"===t(14).11("3e")?l.g.1F():"1m"===t(14).11("3e")?-l.g.1F():-1b(t(14).11("3e")):-l.1v.7W}17 n=5e=5i=4r=4W=4Y=3f=3c="1P";n=t(14).11("5M")?t(14).11("5M"):l.1v.81,5e=t(14).11("7l")?t(14).11("7l"):l.1v.82,5i=t(14).11("7k")?t(14).11("7k"):l.1v.7V,4r=t(14).11("5K")?t(14).11("5K"):l.1v.7Q,4W=t(14).11("7j")?t(14).11("7j"):l.1v.8f,4Y=t(14).11("7n")?t(14).11("7n"):l.1v.8b,1===4r?(3f=t(14).11("7h")?t(14).11("7h"):l.1v.8d,3c=t(14).11("7i")?t(14).11("7i"):l.1v.8e):3f=3c=4r;23(17 d=t(14).11("7m")?t(14).11("7m").1K(" "):l.1v.8a,g=0;g<d.1h;g++)-1===d[g].1f("%")&&-1!==d[g].1f("1j")&&-1!==d[g].1f("1G")&&-1!==d[g].1f("1n")&&-1!==d[g].1f("1m")&&(d[g]=""+1b(d[g])*l.g.1x+"1B");17 h=d.8H(" "),c=t(14).11("70")?t(14).11("70"):l.1v.86,f=1b(t(14).19("1j")),p=1b(t(14).19("1n")),m=1b(t(14).1g("1s").1K("12-l")[1]),v=t(14).3r()>t(14).3l()?t(14).3r():t(14).3l(),y=0===1b(n)?t(14).3r():v,b=0===1b(n)?t(14).3l():v;1c(-1===m&&"1E"!==r||"1j"===t(14).11("3h")||"1G"===t(14).11("3h")?0>i?i=-(l.g.1y()-f+(3f/2-.5)*y+1D):i>0&&(i=f+(3f/2+.5)*y+1D):i*=l.g.1x,-1===m&&"1E"!==r||"1n"===t(14).11("3e")||"1m"===t(14).11("3e")?0>s?s=-(l.g.1F()-p+(3c/2-.5)*b+1D):s>0&&(s=p+(3c/2+.5)*b+1D):s*=l.g.1x,-1===m||"1E"===r)17 w=1;1w 17 x=l.g.1I.11("6Z")?1b(l.g.1I.11("6Z")):l.o.8o,w=m*x;1c("1E"===t(14).11("2B"))17 S=l.1v.71,L=l.1v.4y,T=l.1v.4x;1w 17 S=l.o.71,L=l.o.4y,T=l.o.4x;17 I=t(14).11("5S")?1b(t(14).11("5S")):S,k=t(14).11("4E")?1b(t(14).11("4E")):L;0===k&&(k=1);17 O=t(14).11("4L")?t(14).11("4L"):T;e&&(I=0,k=e),t(14).11("46")&&2i(t(14).11("46"));17 C={29:"2D"},W=t(14),X={3a:n,4B:5e,4C:5i,6W:4W,7g:4Y,5l:3f,5k:3c,x:-i*w,y:-s*w,1N:I/1Q,3W:a(O),8i:16(){W.19(C)}};("3v"==r||!r&&"3v"===o||"8p"!==t(14).11("aR")&&"1E"===t(14).11("2B"))&&(X.36=0,C.36=t(14).11("75")),t(14).11("3C")&&t(14).11("3C").7I(),2Z.8L(t(14)[0],{8r:h,8s:c}),t(14).11("3C",2Z.2k(t(14)[0],k/1Q,X))}})},L=16(){l.g.1r.1N(f+v).4m({1a:l.g.1y(),1d:l.g.1F()},y,b)},T=16(){l.g.3i&&(f=0),"16"==1O l.o.aa&&l.o.aa(l.g,f+v),l.g.1r.18(\' > *[1s*="12-l"]\').1M(16(){1c(t(14).11("2B")||l.5r(t(14)),"1E"===t(14).11("2B"))17 e="1E";1w 17 e=t(14).11("3o")?t(14).11("3o"):u;17 i,s;2q(e){1i"1j":i=-l.g.1y(),s=0;1p;1i"1G":i=l.g.1y(),s=0;1p;1i"1n":s=-l.g.1F(),i=0;1p;1i"1m":s=l.g.1F(),i=0;1p;1i"3v":s=0,i=0;1p;1i"1E":i=t(14).11("59")?"1j"===t(14).11("59")?-l.g.1y():"1G"===t(14).11("59")?l.g.1y():1b(t(14).11("59")):l.1v.9i,s=t(14).11("5c")?"1n"===t(14).11("5c")?-l.g.1F():"1m"===t(14).11("5c")?l.g.1F():1b(t(14).11("5c")):l.1v.9d}17 o=8U=7F=6b=7s=7H=51=53="1P";o=t(14).11("8A")?t(14).11("8A"):l.1v.9g,8U=t(14).11("bo")?t(14).11("bo"):l.1v.9h,7F=t(14).11("bn")?t(14).11("bn"):l.1v.9c,6b=t(14).11("8C")?t(14).11("8C"):l.1v.9l,7s=t(14).11("bm")?t(14).11("bm"):l.1v.9U,7H=t(14).11("bf")?t(14).11("bf"):l.1v.9W,1===6b?(51=t(14).11("bd")?t(14).11("bd"):l.1v.98,53=t(14).11("bq")?t(14).11("bq"):l.1v.a9):51=53=6b;23(17 r=t(14).11("b7")?t(14).11("b7").1K(" "):l.1v.9T,n=0;n<r.1h;n++)-1===r[n].1f("%")&&-1!==r[n].1f("1j")&&-1!==r[n].1f("1G")&&-1!==r[n].1f("1n")&&-1!==r[n].1f("1m")&&(r[n]=""+1b(r[n])*l.g.1x+"1B");17 d=r.8H(" "),g=t(14).11("b6")?t(14).11("b6"):l.1v.9S,h=1b(t(14).19("1j")),c=1b(t(14).19("1n")),f=1b(t(14).1g("1s").1K("12-l")[1]);-1!==t(14)[0].1L.1a.1f("%")&&t(14).19({1a:l.g.1y()/1D*1b(t(14)[0].1L.1a)});17 p=t(14).3r()>t(14).3l()?t(14).3r():t(14).3l(),m=0===1b(o)?t(14).3r():p,v=0===1b(o)?t(14).3l():p;1c(-1===f&&"1E"!==e||"1j"===t(14).11("59")||"1G"===t(14).11("59")?0>i?i=-(h+(51/2+.5)*m+1D):i>0&&(i=l.g.1y()-h+(51/2-.5)*m+1D):i*=l.g.1x,-1===f&&"1E"!==e||"1n"===t(14).11("5c")||"1m"===t(14).11("5c")?0>s?s=-(c+(53/2+.5)*v+1D):s>0&&(s=l.g.1F()-c+(53/2-.5)*v+1D):s*=l.g.1x,-1===f||"1E"===e)17 y=1;1w 17 b=l.g.1r.11("b9")?1b(l.g.1r.11("b9")):l.o.aZ,y=f*b;1c("1E"===t(14).11("2B"))17 w=l.1v.5J,x=l.1v.5w,S=l.1v.5x;1w 17 w=l.o.5J,x=l.o.5w,S=l.o.5x;17 L=t(14).11("5b")?1b(t(14).11("5b")):w,T=t(14).11("68")?1b(t(14).11("68")):x,I=t(14).11("67")?t(14).11("67"):S,k=t(14),O=16(){k.2o("12-2t-3A")&&k.1l("12-8y"),1==l.o.5I&&(k.18(".12-32").2s(),k.18("2t, 6G").1M(16(){0!==1O t(14)[0].6R&&(t(14)[0].6R=0),t(14).2s()})),(!k.2o("12-2t-3A")||k.2o("12-2t-3A")&&l.o.5I===!1)&&k.11("4A")>0&&k.11("46",2h(16(){l.8x(k)},k.11("4A")))};t(14).19({3G:0,44:0});17 C={5l:51,5k:53,6W:7s,7g:7H,3a:o,4B:8U,4C:7F,29:"2O",x:i*y,y:s*y},W={3a:0,4B:0,4C:0,6W:0,7g:0,5l:1,5k:1,3W:a(I),1N:L/1Q,x:0,y:0,8i:16(){O()}};(-1!=e.1f("3v")||"8p"!==t(14).11("eK")&&"1E"===t(14).11("2B"))&&(C.36=0,W.36=t(14).11("75")),t(14).11("3C")&&t(14).11("3C").7I(),2Z.8L(t(14)[0],{8s:g,8r:d}),t(14).11("3C",2Z.6w(t(14)[0],T/1Q,C,W))})},I=16(){1c(o(t(e))&&(l.g.1r.11("58")||l.g.1r.11("5E")))1c(l.g.1r.11("58")&&l.g.1r.11("5E")){17 i=1A.26(2*1A.2e()),a=[["3d",l.g.1r.11("58")],["bs",l.g.1r.11("5E")]];O(a[i][0],a[i][1])}1w l.g.1r.11("58")?O("3d",l.g.1r.11("58")):O("bs",l.g.1r.11("5E"));1w 1c(l.g.1r.11("5D")&&l.g.1r.11("5F")){17 i=1A.26(2*1A.2e()),a=[["2d",l.g.1r.11("5D")],["br",l.g.1r.11("5F")]];O(a[i][0],a[i][1])}1w l.g.1r.11("5D")?O("2d",l.g.1r.11("5D")):l.g.1r.11("5F")?O("br",l.g.1r.11("5F")):O("2d","1")},k=16(){o(t(e))&&-1!=5W.1f("3d")?O("3d",5W.1K(":")[1]):-1!=5W.1f("3d")?O("2d","4T"):O("2d",5W.1K(":")[1])},O=16(t,e){17 i,a,s=-1==t.1f("eI")?l.t:l.ct,o="3d";1c(-1!=t.1f("2d")&&(o="2d"),-1!=e.1f("7v"))a=s["t"+o].1h-1,i="7v";1w 1c(-1!=e.1f("4T"))a=1A.26(1A.2e()*n(s["t"+o])),i="2e bu 4T";1w{17 r=e.1K(","),d=r.1h;a=1b(r[1A.26(1A.2e()*d)])-1,i="2e bu e7"}C(o,s["t"+o][a])},C=16(e,i){17 o=l.g.i,n=l.g.1I.18(\'*[1s*="12-l"]\').1h>0?1Q:0,d=-1==i.6x.24().1f("dV")?!1:!0,g=-1==i.6x.24().1f("dd")?!1:!0,h=1O i.48,c=1O i.4g;2q(h){1i"3V":h=i.48;1p;1i"5O":h=1A.26(1A.2e()*(1b(i.48.1K(",")[1])-1b(i.48.1K(",")[0])+1))+1b(i.48.1K(",")[0]);1p;av:h=1A.26(1A.2e()*(i.48[1]-i.48[0]+1))+i.48[0]}2q(c){1i"3V":c=i.4g;1p;1i"5O":c=1A.26(1A.2e()*(1b(i.4g.1K(",")[1])-1b(i.4g.1K(",")[0])+1))+1b(i.4g.1K(",")[0]);1p;av:c=1A.26(1A.2e()*(i.4g[1]-i.4g[0]+1))+i.4g[0]}(1==l.g.7f()&&1==l.o.9t||l.g.2p&&1==l.o.9n)&&(h>=15?h=7:h>=5?h=4:h>=4?h=3:h>2&&(h=2),c>=15?c=7:c>=5?c=4:c>=4?c=3:c>2&&(c=2),c>2&&h>2&&(c=2,h>4&&(h=4)));17 u=l.g.i.1a()/h,f=l.g.i.1d()/c;l.g.2u?l.g.2u.1t(!0,!0).63().19({1J:"2f",1a:o.1a(),1d:o.1d()}):l.g.2u=t("<1k>").1l("12-1v-2b").1l("12-4G-2D").19({1a:o.1a(),1d:o.1d()}).4S(o);17 p=o.1a()-1A.26(u)*h,m=o.1d()-1A.26(f)*c,v=[];v.aC=16(){17 t,e,i,a=14.1h;1c(0==a)21!1;23(;--a;)t=1A.26(1A.2e()*(a+1)),e=14[a],i=14[t],14[a]=i,14[t]=e;21 14};23(17 y=0;h*c>y;y++)v.8c(y);2q(i.3P.d9){1i"5t":v.5t();1p;1i"ax-85":v=r(c,h,"85");1p;1i"ax-5t":v=r(c,h,"5t");1p;1i"2e":v.aC()}17 b=l.g.1I.18(".12-bg"),w=l.g.1r.18(".12-bg");1c(0==b.1h&&0==w.1h&&(e="2d",i=t.4Q(!0,{},l.t.df[0]),i.1z.2r=1,i.3P.1N=0),"3d"==e){l.g.3i=(h*c-1)*i.3P.1N;17 L=0;i.2J&&i.2J.2r&&(L+=i.2J.2r),i.2a&&i.2a.2r&&(L+=i.2a.2r),i.2v&&i.2v.2r&&(L+=i.2v.2r),l.g.3i+=L;17 I=0;i.2J&&i.2J.1N&&(I+=i.2J.1N),i.2a&&i.2a.1N&&(I+=i.2a.1N),i.2v&&i.2v.1N&&(I+=i.2v.1N),l.g.3i+=I}1w l.g.3i=(h*c-1)*i.3P.1N+i.1z.2r,l.g.5U=t("<1k>").1l("12-dg").1C(l.g.2u),l.g.8N=t("<1k>").1l("12-dl").1C(l.g.2u);23(17 k=l.g.2m,O=0;h*c>O;O++){17 C,W,X=O%h==0?p:0,Y=O>(c-1)*h-1?m:0,H=t("<1k>").1l("12-1v-3P").19({1a:1A.26(u)+X,1d:1A.26(f)+Y}).1C(l.g.2u);1c("3d"==e){H.1l("12-3d-2b");17 P,M=1A.26(u)+X,N=1A.26(f)+Y;P="ao"==i.2a.5R?1A.4o(i.2a.1z.30)>90&&"aA"!=i.3P.az?1A.26(M/7)+X:M:1A.4o(i.2a.1z.2L)>90&&"aA"!=i.3P.az?1A.26(N/7)+Y:N;17 B=M/2,R=N/2,A=P/2,z=16(e,i,a,s,o,r,n,d,l){t("<1k>").1l(e).19({1a:a,1d:s,"-o-3T":"5A("+o+"1B, "+r+"1B, "+n+"1B) 2L("+d+"3O) 30("+l+"3O) 5B(5v) 4z(1, 1, 1)","-dk-3T":"5A("+o+"1B, "+r+"1B, "+n+"1B) 2L("+d+"3O) 30("+l+"3O) 5B(5v) 4z(1, 1, 1)","-dj-3T":"5A("+o+"1B, "+r+"1B, "+n+"1B) 2L("+d+"3O) 30("+l+"3O) 5B(5v) 4z(1, 1, 1)","-6U-3T":"5A("+o+"1B, "+r+"1B, "+n+"1B) 2L("+d+"3O) 30("+l+"3O) 5B(5v) 4z(1, 1, 1)",3T:"5A("+o+"1B, "+r+"1B, "+n+"1B) 2L("+d+"3O) 30("+l+"3O) 5B(5v) 4z(1, 1, 1)"}).1C(i)};z("12-3d-3L",H,0,0,0,0,-A,0,0);"cW"==i.2a.5R&&1A.4o(i.2a.1z.2L)>90?z("12-3d-5y",H.18(".12-3d-3L"),M,N,-B,-R,-A,6e,0):z("12-3d-5y",H.18(".12-3d-3L"),M,N,-B,-R,-A,0,6e),z("12-3d-1m",H.18(".12-3d-3L"),M,P,-B,R-A,0,-90,0),z("12-3d-1n",H.18(".12-3d-3L"),M,P,-B,-R-A,0,90,0),z("12-3d-ai",H.18(".12-3d-3L"),M,N,-B,-R,A,0,0),z("12-3d-1j",H.18(".12-3d-3L"),P,N,-B-A,-R,0,0,-90),z("12-3d-1G",H.18(".12-3d-3L"),P,N,B-A,-R,0,0,90),C=H.18(".12-3d-ai"),W=H.18("ao"==i.2a.5R?1A.4o(i.2a.1z.30)>90?".12-3d-5y":".12-3d-1j, .12-3d-1G":1A.4o(i.2a.1z.2L)>90?".12-3d-5y":".12-3d-1n, .12-3d-1m");17 D=v[O]*i.3P.1N,U=l.g.2u.18(".12-3d-2b:eq("+O+") .12-3d-3L"),F=1E al;i.2J&&i.2J.1z?(i.2J.1z.1N=i.2J.1z.1N?(i.2J.1z.1N+D)/1Q:D/1Q,F.2k(U[0],i.2J.2r/1Q,s(i.2J.1z,i.2J.4O))):i.2a.1z.1N=i.2a.1z.1N?(i.2a.1z.1N+D)/1Q:D/1Q,F.2k(U[0],i.2a.2r/1Q,s(i.2a.1z,i.2a.4O)),i.2v&&(i.2v.1z||(i.2v.1z={}),F.2k(U[0],i.2v.2r/1Q,s(i.2v.1z,i.2v.4O,"2v")))}1w{17 q=2Y=2Q=2M="1X",j=6T=1;1c("2e"==i.1z.5R)17 V=["1n","1m","1G","1j"],Q=V[1A.26(1A.2e()*V.1h)];1w 17 Q=i.1z.5R;1c(-1!=i.6x.24().1f("aS")&&O%2==0&&(k="1T"==k?"1Y":"1T"),"1T"==k)2q(Q){1i"1n":Q="1m";1p;1i"1m":Q="1n";1p;1i"1j":Q="1G";1p;1i"1G":Q="1j";1p;1i"7D":Q="7z";1p;1i"7L":Q="7u";1p;1i"7u":Q="7L";1p;1i"7z":Q="7D"}2q(Q){1i"1n":q=2Q=-H.1d(),2Y=2M=0;1p;1i"1m":q=2Q=H.1d(),2Y=2M=0;1p;1i"1j":q=2Q=0,2Y=2M=-H.1a();1p;1i"1G":q=2Q=0,2Y=2M=H.1a();1p;1i"7D":q=H.1d(),2Q=0,2Y=H.1a(),2M=0;1p;1i"7L":q=H.1d(),2Q=0,2Y=-H.1a(),2M=0;1p;1i"7u":q=-H.1d(),2Q=0,2Y=H.1a(),2M=0;1p;1i"7z":q=-H.1d(),2Q=0,2Y=-H.1a(),2M=0}2q(l.g.55=i.1z.6a?i.1z.6a:1,1==d&&1!=l.g.55&&(q/=2,2Q/=2,2Y/=2,2M/=2),i.1z.4s){1i"3v":q=2Q=2Y=2M=0,j=0,6T=1;1p;1i"d1":j=0,6T=1,1==l.g.55&&(2Q=2M=0)}1c(H.19((i.1z.3m||i.1z.2L||i.1z.30||1!=l.g.55)&&!l.g.2p&&"1q"!=i.1z.4s?{4G:"2O"}:{4G:"2D"}),l.g.5U.19(1==d?{4G:"2O"}:{4G:"2D"}),1==g||"1q"==i.1z.4s||1==d){17 E=H.1C(l.g.5U),G=H.8t().1C(l.g.8N);C=t("<1k>").1l("12-dn").1C(E)}1w 17 G=H.1C(l.g.8N);W=t("<1k>").1l("12-dL").1C(G).19({1n:-q,1j:-2Y,dJ:"2f",36:j});17 Z=v[O]*i.3P.1N,5f=i.1z.3m?i.1z.3m:0,J=i.1z.2L?i.1z.2L:0,$=i.1z.30?i.1z.30:0;1c("1T"==k&&(5f=-5f,J=-J,$=-$),2Z.6w(W[0],i.1z.2r/1Q,{3a:5f,4B:J,4C:$,6a:l.g.55},{1N:Z/1Q,1n:0,1j:0,36:6T,3a:0,4B:0,4C:0,6a:1,3W:a(i.1z.4O)}),1==g&&(w.1h<1||w.1h>0&&(-1!=w.1g("1e").24().1f("4H")||w.1a()<l.g.1y()||w.1d()<l.g.1F()))&&2Z.2k(C[0],i.1z.2r/1Q,{1N:Z/1Q,36:0,3W:a(i.1z.4O)}),("1q"==i.1z.4s||1==d)&&-1==i.6x.24().1f("aS")){17 K=0;0!=5f&&(K=-5f),2Z.2k(C[0],i.1z.2r/1Q,{1N:Z/1Q,1n:2Q,1j:2M,3a:K,6a:l.g.55,36:j,3W:a(i.1z.4O)})}}b.1h&&("3d"==e||"2d"==e&&(1==g||"1q"==i.1z.4s||1==d)?C.43(t("<28>").1g("1e",b.1g("1e")).19({1a:b[0].1L.1a,1d:b[0].1L.1d,3G:3j(b.19("47-1j"))-3j(H.3F().1j),44:3j(b.19("47-1n"))-3j(H.3F().1n)})):0==l.g.5U.2X().1h&&l.g.5U.43(t("<28>").1g("1e",b.1g("1e")).19({1a:b[0].1L.1a,1d:b[0].1L.1d,3G:3j(b.19("47-1j")),44:3j(b.19("47-1n"))}))),w.1h&&W.43(t("<28>").1g("1e",w.1g("1e")).19({1a:w[0].1L.1a,1d:w[0].1L.1d,3G:3j(w.19("47-1j"))-3j(H.3F().1j),44:3j(w.19("47-1n"))-3j(H.3F().1n)}))}17 6r=l.g.1I,ee=l.g.1r;2h(16(){6r.18(".12-bg").19({29:"2D"})},50),ee.18(".12-bg").19({29:"2D"}),l.g.2u.2n("12-4G-2D"),S(n),0===n&&(n=10),2h(16(){6r.19({1a:0})},n);17 8j=1b(ee.11("6d"))?1b(ee.11("6d")):0,ae=l.g.3i+8j>0?l.g.3i+8j:0;2h(16(){1==l.g.2g&&(l.g.2u.63(),6r.2n("12-1U"),l.3x(ee,16(){l.g.2g=!1})),T(),(ee.18(".12-bg").1h<1||ee.18(".12-bg").1h>0&&-1!=ee.18(".12-bg").1g("1e").24().1f("4H"))&&l.g.2u.1N(8M).3B(2z,16(){t(14).63().aJ()}),ee.19({1a:l.g.1y(),1d:l.g.1F()})},ae),l.g.3i<2z&&(l.g.3i=1Q),2h(16(){l.g.2u.1l("12-4G-2D"),ee.18(".12-bg").1h?(ee.18(".12-bg").19({1J:"1P",29:"2O"}),l.g.2p?(ee.18(".12-bg").19("1J","2f"),2h(16(){x()},4e)):ee.18(".12-bg").2y(4e,16(){x()})):x()},l.g.3i)},W=16(){l.g.1r.18(\' > *[1s*="12-l"]\').1M(16(){t(14).19({29:"2D"})}),l.g.8F=t(e).4q().1n,t(1W).3R(16(){2h(16(){l.g.8F=t(e).4q().1n},20)});17 i=16(){t(1W).dx()+t(1W).1d()-l.g.1F()/2>l.g.8F&&(l.g.6k=!0,l.g.8v===!0&&(l.o.49=!0,l.27()),T())};t(1W).dy(16(){l.g.6k||i()}),i()},X=(l.g.1r.11("58")||l.g.1r.11("5D"))&&l.t||(l.g.1r.11("5E")||l.g.1r.11("5F"))&&l.ct?"1E":"65";1c(l.g.1r.11("2B")||l.5r(l.g.1r),"1E"===l.g.1r.11("2B")&&(X="1E"),l.o.8B&&(X="9X"),l.o.4V&&!l.g.6k){1c(1==l.g.2w){17 f=0;l.o.7U(l.g)}1w{17 Y=1b(l.g.1r.11("6d"))?1b(l.g.1r.11("6d")):0,H="1E"==X?0:p;l.g.aL=2h(16(){x()},H+1A.4o(Y))}l.g.3i=!0,l.o.7N===!0?W():(l.g.6k=!0,T()),l.g.1r.19({1a:l.g.1y(),1d:l.g.1F()}),l.g.2p||l.g.1r.18(".12-bg").19({1J:"1P"}).2y(l.o.7E),l.g.4t=!1}1w 2q(X){1i"65":l.g.3i=!1,l.g.2u&&l.g.2u.63(),w(),S(),L(),T();1p;1i"1E":"2G"!=1O 5W?k():I();1p;1i"9X":C(l.o.8B.4s,l.o.8B.dA)}},l.5r=16(t){17 e=!t.11("12")&&(t.11("12")||t.11("5X")||t.11("3o")||t.11("5u")||t.11("5b")||t.11("5S")||t.11("68")||t.11("4E")||t.11("4A")||t.11("67")||t.11("4L")||t.11("8C")||t.11("5K")||t.11("8A")||t.11("5M"))?"65":"1E";t.11("2B",e)},l.8x=16(t){t.11("2B")||l.5r(t),t.2n("12-8y");17 e=l.g.1I;"1T"!=l.g.2m&&l.g.1r&&(e=l.g.1r);17 i,s,o=e.11("3o")?e.11("3o"):l.o.8K,r=l.g.8m[l.g.2m][o],n=t.11("3o")?t.11("3o"):r;2q(n){1i"1j":i=-l.g.1y(),s=0;1p;1i"1G":i=l.g.1y(),s=0;1p;1i"1n":s=-l.g.1F(),i=0;1p;1i"1m":s=l.g.1F(),i=0;1p;1i"3v":s=0,i=0}1c("1E"===t.11("2B"))17 d="1E";1w 17 d=t.11("5u")?t.11("5u"):!1;2q(d){1i"1j":i=l.g.1y(),s=0;1p;1i"1G":i=-l.g.1y(),s=0;1p;1i"1n":s=l.g.1F(),i=0;1p;1i"1m":s=-l.g.1F(),i=0;1p;1i"3v":s=0,i=0;1p;1i"1E":i=t.11("3h")?"1j"===t.11("3h")?l.g.1y():"1G"===t.11("3h")?-l.g.1y():-1b(t.11("3h")):-l.1v.7R,s=t.11("3e")?"1n"===t.11("3e")?l.g.1F():"1m"===t.11("3e")?-l.g.1F():-1b(t.11("3e")):-l.1v.7W}17 g=5e=5i=4r=4W=4Y=3f=3c="1P";g=t.11("5M")?t.11("5M"):l.1v.81,5e=t.11("7l")?t.11("7l"):l.1v.82,5i=t.11("7k")?t.11("7k"):l.1v.7V,4r=t.11("5K")?t.11("5K"):l.1v.7Q,4W=t.11("7j")?t.11("7j"):l.1v.8f,4Y=t.11("7n")?t.11("7n"):l.1v.8b,1===4r?(3f=t.11("7h")?t.11("7h"):l.1v.8d,3c=t.11("7i")?t.11("7i"):l.1v.8e):3f=3c=4r;23(17 h=t.11("7m")?t.11("7m").1K(" "):l.1v.8a,c=0;c<h.1h;c++)-1===h[c].1f("%")&&-1!==h[c].1f("1j")&&-1!==h[c].1f("1G")&&-1!==h[c].1f("1n")&&-1!==h[c].1f("1m")&&(h[c]=""+1b(h[c])*l.g.1x+"1B");17 u=h.8H(" "),f=t.11("70")?t.11("70"):l.1v.86,p=1b(t.19("1j")),m=1b(t.19("1n")),v=1b(t.1g("1s").1K("12-l")[1]),y=t.3r()>t.3l()?t.3r():t.3l(),b=0===1b(g)?t.3r():y,w=0===1b(g)?t.3l():y;1c(-1===v&&"1E"!==d||"1j"===t.11("3h")||"1G"===t.11("3h")?0>i?i=-(l.g.1y()-p+(3f/2-.5)*b+1D):i>0&&(i=p+(3f/2+.5)*b+1D):i*=l.g.1x,-1===v&&"1E"!==d||"1n"===t.11("3e")||"1m"===t.11("3e")?0>s?s=-(l.g.1F()-m+(3c/2-.5)*w+1D):s>0&&(s=m+(3c/2+.5)*w+1D):s*=l.g.1x,-1===v||"1E"===d)17 x=1;1w 17 S=l.g.1I.11("6Z")?1b(l.g.1I.11("6Z")):l.o.8o,x=v*S;1c("1E"===t.11("2B"))17 L=l.1v.4y,T=l.1v.4x;1w 17 L=l.o.4y,T=l.o.4x;17 I=t.11("4E")?1b(t.11("4E")):L;0===I&&(I=1);17 k=t.11("4L")?t.11("4L"):T,O={29:"2D"},C={3a:g,4B:5e,4C:5i,6W:4W,7g:4Y,5l:3f,5k:3c,x:-i*x,y:-s*x,3W:a(k),8i:16(){t.19(O)}};("3v"==d||!d&&"3v"==n||"8p"!==t.11("aR")&&"1E"===t.11("2B"))&&(C.36=0,O.36=t.11("75")),2Z.8L(t[0],{8s:f,8r:u}),2Z.2k(t[0],I/1Q,C)},l.3R()},a=16(t){17 e;1c(-1!==t.24().1f("aX")||-1!==t.24().1f("8X"))e=95.94;1w 1c(-1!==t.24().1f("8W")){17 i=t.24().1K("8W")[1];e=1W[i.8R(0).7G()+i.7C(1)].aT}1w 1c(-1!==t.24().1f("8T")){17 i=t.24().1K("8T")[1];e=1W[i.8R(0).7G()+i.7C(1)].aV}1w 1c(-1!==t.24().1f("8P")){17 i=t.24().1K("8P")[1];e=1W[i.8R(0).7G()+i.7C(1)].ak}21 e},s=16(t,e,i,s){1c("2G"==1O e)17 e="d5";17 o={};21 t.3m!==s&&(o.3a=t.3m),t.30!==s&&(o.4C=t.30),t.2L!==s&&(o.4B=t.2L),"2v"===i?o.5l=o.5k=o.aj=1:t.4z!==s&&(o.5l=o.5k=o.aj=t.4z),t.1N&&(o.1N="2v"===i?t.1N/1Q:t.1N),o.3W=a(e),o},o=16(e){17 i=t("<1k>"),a=!1,s=!1,o=["cZ","cT","cS","cU","cX"];3T=["d6","d7","di","dh","da"];23(17 r=o.1h-1;r>=0;r--)a=a?a:au 0!=i[0].1L[o[r]];23(17 r=3T.1h-1;r>=0;r--)i.19("3T-1L","ay-3d"),s=s?s:"ay-3d"==i[0].1L[3T[r]];21 a&&au 0!=i[0].1L[o[4]]&&(i.1g("5Y","12-dc").1C(e),a=3===i[0].eJ&&9===i[0].eH,i.bw()),a&&s},r=16(t,e,i){17 a=[];1c("85"==i)23(17 s=0;t>s;s++)23(17 o=0;e>o;o++)a.8c(s+o*t);1w 23(17 s=t-1;s>-1;s--)23(17 o=e-1;o>-1;o--)a.8c(s+o*t);21 a},n=16(t){17 e=0;23(17 i 3E t)t.eA(i)&&++e;21 e},d=16(){bl=16(t){t=t.24();17 e=/(bk)[ \\/]([\\w.]+)/.5H(t)||/(6U)[ \\/]([\\w.]+)/.5H(t)||/(ez)(?:.*3M|)[ \\/]([\\w.]+)/.5H(t)||/(9k) ([\\w.]+)/.5H(t)||t.1f("b8")<0&&/(ey)(?:.*? eB:([\\w.]+)|)/.5H(t)||[];21{8u:e[1]||"",3M:e[2]||"0"}};17 t=bl(40.3X),e={};21 t.8u&&(e[t.8u]=!0,e.3M=t.3M),e.bk?e.6U=!0:e.6U&&(e.eD=!0),e};i.72={3M:"5.6.0",7f:16(){21 40.3X.3I(/f0/i)||40.3X.3I(/f1/i)||40.3X.3I(/f2/i)||40.3X.3I(/eY/i)||40.3X.3I(/eS/i)||40.3X.3I(/eR/i)||40.3X.3I(/eQ eT/i)?!0:!1},eU:16(t){21"1X"==t.19("2c-1m")||"1P"==t.19("2c-1m")||0==t.19("2c-1m")||"eW"==t.19("2c-1m")?!0:!1},2p:d().9k&&d().3M<9?!0:!1,8v:!1,2N:!1,4d:!1,2A:!1,2P:!1,2w:6Y,2m:"1Y",4f:6Y,1y:6Y,1F:6Y,ew:0,8m:{1T:{1j:"1G",1G:"1j",1n:"1m",1m:"1n"},1Y:{1j:"1j",1G:"1G",1n:"1n",1m:"1m"}},v:{d:4e,91:8S,78:4e}},i.9p={9i:80,9d:0,5w:1Q,5J:0,5x:"73",2y:!0,9g:0,9h:0,9c:0,9l:1,98:1,a9:1,9U:0,9W:0,9T:["50%","50%","0"],9S:4e,7R:-80,7W:0,4y:9P,dZ:0,4x:"73",3B:!0,81:0,82:0,7V:0,7Q:1,8d:1,8e:1,8f:0,8b:0,8a:["50%","50%","0"],86:4e},i.9Q={7d:aU},i.9Z={a4:!0,41:0,76:0,7J:!1,4S:"",49:!0,7N:!0,9N:!0,2U:1,4V:!0,7E:8M,4v:0,79:!0,8h:!1,77:!1,3p:"e3",3D:"/69/e2/",8Q:"8O",7a:!1,8Y:!0,7b:!0,7e:!0,9z:!0,9A:!0,9w:!0,74:!1,9v:!1,9r:!0,38:"1S",6X:"60%",8k:1D,5N:60,8l:35,8n:1D,5I:!0,2C:"1X",9s:"et.ev",3S:!0,4J:!0,1u:!1,9J:"1j: -9D; 1n: -9D;",8D:!1,9E:"c5",9t:!0,9n:!0,7K:!1,b5:0,bc:co,cP:"",ba:16(){},bt:16(){},b3:16(){},aw:16(){},aB:16(){},7U:16(){},6V:16(){},7c:16(){},7d:aU,8K:"1G",aZ:.45,8o:.45,5w:1Q,4y:1Q,5x:"73",4x:"73",5J:0,71:0}}(3K);',62,933,'|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||data|ls||this||function|var|find|css|width|parseInt|if|height|src|indexOf|attr|length|case|left|div|addClass|bottom|top|nav|break|slide|nextLayer|class|stop|yourLogo|lt|else|ratio|sliderWidth|transition|Math|px|appendTo|100|new|sliderHeight|right|thumbnail|curLayer|display|split|style|each|delay|typeof|none|1e3|iframe|hover|prev|active|parent|window|auto|next|curLayerIndex||return|the|for|toLowerCase||floor|start|img|visibility|animation|container|padding||random|block|resize|setTimeout|clearTimeout|replace|to|sliderOriginalWidth|prevNext|removeClass|hasClass|ie78|switch|duration|click|video|ltContainer|after|layersNum|originalAutoSlideshow|fadeIn|300|autoSlideshow|transitiontype|autoPauseSlideshow|hidden|href|cttl|undefined|wrapper|image|before|LayerSlider|rotateX|L2|paused|visible|isAnimating|T2|not|originalWidth|originalHeight|firstSlide|init|fullwidth|children|L1|TweenLite|rotateY|of|videopreview|loaded|circleTimer||opacity||thumbnailNavigation||rotation|wp|curSubScaleY||offsetyout|curSubScaleX|layerSlider|offsetxout|totalDuration|parseFloat|bottomWrapper|outerHeight|rotate|barTimer|slidedirection|skin|youtube|outerWidth|curSlideTime|is|preventDefault|fade|background|makeResponsive|closest|preloaded|layer|fadeOut|tr|skinsPath|in|position|marginLeft|param|match|com|jQuery|box|version|sliderOriginalHeight|deg|tile|vimeo|load|imgPreload|transform|pausedSlideTime|number|ease|userAgent|on|thumbsWrapper|navigator|responsiveUnder|error|append|marginTop||showUntilTimer|margin|cols|autoStart|responsiveMode|location|shadow|pausedByVideo|500|slideTimer|rows|startSlideTime|nextLoop|originalLeft|border|forcehide|animate|html|abs|thumb|offset|curSubScale|type|isLoading|originalTop|loops|tn|easingOut|durationOut|scale3d|showuntil|rotationX|rotationY|autoplay|durationout|media|overflow|png|always|lazyLoad|or|easingout|like|change|easing|your|extend|Please|prependTo|all|slidebuttons|animateFirstSlide|curSubSkewX|body|curSubSkewY|document||nextSubScaleX|inner|nextSubScaleY|vpcontainer|scale2D|Date|fisrtSlide|transition3d|offsetxin|rel|delayin|offsetyin|index|curSubRotateX|_|touches|thumbnails|curSubRotateY|getTime|scaleY|scaleX|youtu|videoSrc|shadowImg|and|touchEndX|transitionType|li|reverse|slideoutdirection|0deg|durationIn|easingIn|back|timer|translate3d|rotateZ|span|transition2d|customtransition3d|customtransition2d|originalRight|exec|autoPlayVideos|delayIn|scaleout|originalBottom|rotateout|tnHeight|string|http|trim|direction|delayout|WordPress|curTiles|it|LSCustomTransition|slidedelay|id|player||removeAttr|pause|empty|url|old|nextLayerIndex|easingin|durationin|layerslider|scale|nextSubScale|slider|timeshift|180|fadeTo|originalBorderTop|link|used|originalBorderRight|firstSlideAnimated|images|wrong|ontouchstart|script|ytplayer|nextLayerTop|te|curLayerTop|nextLayerLeft|console|play|fromTo|name|URL|cannot|nIt|seems|layerMarginTop|check|nothumb|clicked|audio|showShadow|parallaxlevel|originalBorderLeft|html5|bind|originalBorderBottom|helper|layerMarginLeft|touchStartX|URLs|currentTime|pointing|O2|webkit|cbPrev|skewX|tnContainerWidth|null|parallaxout|perspectiveout|delayOut|global|easeInOutQuint|hoverBottomNav|originalOpacity|layersContainer|randomSlideshow|fi|forceLoopNum|globalBGImage|navStartStop|cbNext|slideDelay|navButtons|isMobile|skewY|scalexout|scaleyout|skewxout|rotateyout|rotatexout|transformoriginout|skewyout|nextLayerHeight|sublayerContainer|nextLayerRight|kmGS|nextSubSkewX|dequeue|bottomleft|last|nextLayerWidth|changeThumb|resizeShadow|bottomright|nextLayerBottom|numYouTubeCurSlide|slice|topleft|sliderFadeInDuration|nextSubRotateY|toUpperCase|nextSubSkewY|kill|fullScreen|hideOnMobile|topright|bottomNavSizeHelper|startInViewport|originalPaddingBottom|curLayerRight|scaleOut|offsetXOut|resizeYourLogo|scrollThumb|cbAnimStop|rotateYOut|offsetYOut|forceHideControls|oB|oR||rotateOut|rotateXOut|originalPaddingTop|pageX|forward|perspectiveOut|oT|250|resizeSlider|transformOriginOut|skewYOut|push|scaleXOut|scaleYOut|skewXOut|curLayerBottom|twoWaySlideshow|onComplete|ie|tnWidth|tnActiveOpacity|slideDirections|tnInactiveOpacity|parallaxOut|false|originalSlide|transformOrigin|transformPerspective|clone|browser|originalAutoStart|150|sublayerShowUntil|videohack|add|rotatein|slideTransition|scalein|yourLogoLink|head|sliderTop|defaults|join|content|text|slideDirection|set|350|nextTiles|transparent|easein|globalBGColor|charAt|750|easeout|nextSubRotateX|originalPaddingLeft|easeinout|linear|navPrevNext|videoTimer||fo|linkto|originalPaddingRight|easeNone|Linear|t2|t3|scaleXIn|forcestop|t1|alert|rotateYIn|offsetYIn|stopLayer|ieEasing|rotateIn|rotateXIn|offsetXIn|substring|msie|scaleIn|lastIndexOf|optimizeForIE78|t4|layerTransitions|font|showCircleTimer|youtubePreview|optimizeForMobile|opaque|showBarTimer|hoverPrevNext|gi|showSlider|keybNav|touchNav|wmode|videoDuration|10px|yourLogoTarget|playVideo|target|file|alt|yourLogoStyle|playvideo|Play|oldjquery|pauseOnHover|resizeThumb|400|slideTransitions|sliderOriginalWidthRU|perspectiveIn|transformOriginIn|skewXIn|off|skewYIn|forced|shadowBtmMod|options|line|size|originalLineHeight|originalFontSize|responsive|borderLeftWidth|borderBottomWidth|borderTopWidth|borderRightWidth|scaleYIn|cbTimeLineStart|lsShowNotice|jquery|object||pageY|relative|fn|front|scaleZ|easeIn|TimelineLite|parallaxStartX||horizontal|sides|mousemove|above|strong||void|default|cbPause|col|preserve|depth|large|cbAnimStart|randomize|loading|half|createStyleSheet|plugin|firstLayer|disabled|show|meta|t5|update|layerSliderTransitions|layerSliderCustomTransitions|initialized|library|fadeout|mirror|easeInOut|4e3|easeOut|hider|swing|hash|parallaxIn|looks|It|issue|cbStop|parallaxStartY|hideUnder|perspectivein|transformoriginin|compatible|parallaxin|cbInit|clientX|hideOver|scalexin||skewyin||animating|st|2e3|chrome|uaMatch|skewxin|rotateyin|rotatexin|originalEvent|scaleyin|custom2d|custom3d|cbStart|from|norotate|remove|which||enableCSS3|bounce|Back|Bounce|animateFirstLayer|stylesheet|that|restart|insertBefore|Elastic|textDecoration|bock|Circ|insertAfter|quint|mouseleave|elastic|gpuhack|outline|lswpVersion|keydown|onYouTubeIframeAPIReady|onReverseComplete|vi|another|YT|enabled|embed|resume|wpVersion|orientationchange|multiple|_self|www|iframe_api|sine|javascript|queue|round|Player|touchmove|static|backgroundImage|indicator|cubic|touchstart|center|zIndex|backgroundColor|important|Quint|1e6|touchend|mouseenter|gif|touchscroll||sideright|blank|yourlogo|circle|cursor|quart|quad|Quart|sideleft|below|deeplink|absolute|circ|pointer|expo|bar|Sine|wrapAll|Cubic|Expo|Quad|staticImage|600|userInitData|msPerspective|OPerspective|MozPerspective|defaultInitData|vertical|WebkitPerspective|title|perspective|updating|mixed|clicking|here|exclam|easeInOutQuart|transformStyle|OTransformStyle|forceStop|sequence|WebkitTransformStyle|Settings|test3d|crossfad|events|t2d|curtiles|MozTransformStyle|msTransformStyle|moz|ms|nexttiles|redraw|curtile||about|use|Updater|support|Important|kreaturamedia|newer|higher|scrollTop|scroll|because|obj|with|older|IE|browsers|least|faq|can|originalMarkup|dispay|read|nexttile|more|You|entry|wordpress|requires|using|are|group|you|carousel|Advanced|extra|copy|showUntil|log|Trident|skins|v5|causing|changeTimer|problems|specified|prevLayerIndex|filter|layerMarginRight|layerMarginBottom|450|loads||getJSON|api|v2|stopVideo|enablejsapi|onReady||onStateChange|json|callback|ended||theme|640|maxresdefault|thumbnail_large|jpg|numYouTubeCurslide|sliders|mozilla|opera|hasOwnProperty|rv|Put|safari|enable|JS|includes|offsetLeft|custom|offsetHeight|fadein|Troubleshooting|option|within|navigate|page|Windows|BlackBerry|iPod|Phone|isHideOn3D|admin|0px|main|iPad|area|Android|webOS|iPhone'.split('|'),0,{}));

// Layer Slider Ends

// Owl Carousel

/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
/**
 * Owl carousel
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	var drag, state, e;

	/**
	 * Template for status information about drag and touch events.
	 * @private
	 */
	drag = {
		start: 0,
		startX: 0,
		startY: 0,
		current: 0,
		currentX: 0,
		currentY: 0,
		offsetX: 0,
		offsetY: 0,
		distance: null,
		startTime: 0,
		endTime: 0,
		updatedX: 0,
		targetEl: null
	};

	/**
	 * Template for some status informations.
	 * @private
	 */
	state = {
		isTouch: false,
		isScrolling: false,
		isSwiping: false,
		direction: false,
		inMotion: false
	};

	/**
	 * Event functions references.
	 * @private
	 */
	e = {
		_onDragStart: null,
		_onDragMove: null,
		_onDragEnd: null,
		_transitionEnd: null,
		_resizer: null,
		_responsiveCall: null,
		_goToLoop: null,
		_checkVisibile: null
	};

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Caches informations about drag and touch events.
		 */
		this.drag = $.extend({}, drag);

		/**
		 * Caches some status informations.
		 * @protected
		 */
		this.state = $.extend({}, state);

		/**
		 * @protected
		 * @todo Must be documented
		 */
		this.e = $.extend({}, e);

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from beeing retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key[0].toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Pipe, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,
		responsiveClass: false,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		// Classes and Names
		themeClass: 'owl-theme',
		baseClass: 'owl-carousel',
		itemClass: 'owl-item',
		centerClass: 'center',
		activeClass: 'active'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * Update pipe.
	 */
	Owl.Pipe = [ {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var cached = this._clones,
				clones = this.$stage.children('.cloned');

			if (clones.length !== cached.length || (!this.settings.loop && cached.length > 0)) {
				this.$stage.children('.cloned').remove();
				this._clones = [];
			}
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var i, n,
				clones = this._clones,
				items = this._items,
				delta = this.settings.loop ? clones.length - Math.max(this.settings.items * 2, 4) : 0;

			for (i = 0, n = Math.abs(delta / 2); i < n; i++) {
				if (delta > 0) {
					this.$stage.children().eq(items.length + clones.length - 1).remove();
					clones.pop();
					this.$stage.children().eq(0).remove();
					clones.pop();
				} else {
					clones.push(clones.length / 2);
					this.$stage.append(items[clones[clones.length - 1]].clone().addClass('cloned'));
					clones.push(items.length - 1 - (clones.length - 1) / 2);
					this.$stage.prepend(items[clones[clones.length - 1]].clone().addClass('cloned'));
				}
			}
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = (this.settings.rtl ? 1 : -1),
				width = (this.width() / this.settings.items).toFixed(3),
				coordinate = 0, merge, i, n;

			this._coordinates = [];
			for (i = 0, n = this._clones.length + this._items.length; i < n; i++) {
				merge = this._mergers[this.relative(i)];
				merge = (this.settings.mergeFit && Math.min(merge, this.settings.items)) || merge;
				coordinate += (this.settings.autoWidth ? this._items[this.relative(i)].width() + this.settings.margin : width * merge) * rtl;

				this._coordinates.push(coordinate);
			}
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var i, n, width = (this.width() / this.settings.items).toFixed(3), css = {
				'width': Math.abs(this._coordinates[this._coordinates.length - 1]) + this.settings.stagePadding * 2,
				'padding-left': this.settings.stagePadding || '',
				'padding-right': this.settings.stagePadding || ''
			};

			this.$stage.css(css);

			css = { 'width': this.settings.autoWidth ? 'auto' : width - this.settings.margin };
			css[this.settings.rtl ? 'margin-left' : 'margin-right'] = this.settings.margin;

			if (!this.settings.autoWidth && $.grep(this._mergers, function(v) { return v > 1 }).length > 0) {
				for (i = 0, n = this._coordinates.length; i < n; i++) {
					css.width = Math.abs(this._coordinates[i]) - Math.abs(this._coordinates[i - 1] || 0) - this.settings.margin;
					this.$stage.children().eq(i).css(css);
				}
			} else {
				this.$stage.children().css(css);
			}
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current && this.reset(this.$stage.children().index(cache.current));
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.' + this.settings.activeClass).removeClass(this.settings.activeClass);
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass(this.settings.activeClass);

			if (this.settings.center) {
				this.$stage.children('.' + this.settings.centerClass).removeClass(this.settings.centerClass);
				this.$stage.children().eq(this.current()).addClass(this.settings.centerClass);
			}
		}
	} ];

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.trigger('initialize');

		this.$element
			.addClass(this.settings.baseClass)
			.addClass(this.settings.themeClass)
			.toggleClass('owl-rtl', this.settings.rtl);

		// check support
		this.browserSupport();

		if (this.settings.autoWidth && this.state.imagesLoaded !== true) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
				return false;
			}
		}

		this.$element.addClass('owl-loading');

		// create stage
		this.$stage = $('<' + this.settings.stageElement + ' class="owl-stage"/>')
			.wrap('<div class="owl-stage-outer">');

		// append stage
		this.$element.append(this.$stage.parent());

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// set view width
		this._width = this.$element.width();

		// update view
		this.refresh();

		this.$element.removeClass('owl-loading').addClass('owl-loaded');

		// attach generic events
		this.eventsCall();

		// attach generic events
		this.internalEvents();

		// attach custom control events
		this.addTriggerableEvents();

		this.trigger('initialized');
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class', function(i, c) {
					return c.replace(/\b owl-responsive-\S+/g, '');
				}).addClass('owl-responsive-' + match);
			}
		}

		if (this.settings === null || this._breakpoint !== match) {
			this.trigger('change', { property: { name: 'settings', value: settings } });
			this._breakpoint = match;
			this.settings = settings;
			this.invalidate('settings');
			this.trigger('changed', { property: { name: 'settings', value: this.settings } });
		}
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		// Toggle Center class
		this.$element.toggleClass('owl-center', this.settings.center);

		// if items number is less than in body
		if (this.settings.loop && this._items.length < this.settings.items) {
			this.settings.loop = false;
		}

		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.settings.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		if (this._items.length === 0) {
			return false;
		}

		var start = new Date().getTime();

		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		// hide and show methods helps here to set a proper widths,
		// this prevents scrollbar to be calculated in stage width
		this.$stage.addClass('owl-refresh');

		this.update();

		this.$stage.removeClass('owl-refresh');

		this.state.orientation = window.orientation;

		this.watchVisibility();

		this.trigger('refreshed');
	};

	/**
	 * Save internal event references and add event based functions.
	 * @protected
	 */
	Owl.prototype.eventsCall = function() {
		// Save events references
		this.e._onDragStart = $.proxy(function(e) {
			this.onDragStart(e);
		}, this);
		this.e._onDragMove = $.proxy(function(e) {
			this.onDragMove(e);
		}, this);
		this.e._onDragEnd = $.proxy(function(e) {
			this.onDragEnd(e);
		}, this);
		this.e._onResize = $.proxy(function(e) {
			this.onResize(e);
		}, this);
		this.e._transitionEnd = $.proxy(function(e) {
			this.transitionEnd(e);
		}, this);
		this.e._preventClick = $.proxy(function(e) {
			this.preventClick(e);
		}, this);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (this.trigger('resize').isDefaultPrevented()) {
			return false;
		}

		this._width = this.$element.width();

		this.invalidate('width');

		this.refresh();

		this.trigger('resized');
	};

	/**
	 * Checks for touch/mouse drag event type and add run event handlers.
	 * @protected
	 */
	Owl.prototype.eventsRouter = function(event) {
		var type = event.type;

		if (type === "mousedown" || type === "touchstart") {
			this.onDragStart(event);
		} else if (type === "mousemove" || type === "touchmove") {
			this.onDragMove(event);
		} else if (type === "mouseup" || type === "touchend") {
			this.onDragEnd(event);
		} else if (type === "touchcancel") {
			this.onDragEnd(event);
		}
	};

	/**
	 * Checks for touch/mouse drag options and add necessery event handlers.
	 * @protected
	 */
	Owl.prototype.internalEvents = function() {
		var isTouch = isTouchSupport(),
			isTouchIE = isTouchSupportIE();

		if (this.settings.mouseDrag){
			this.$stage.on('mousedown', $.proxy(function(event) { this.eventsRouter(event) }, this));
			this.$stage.on('dragstart', function() { return false });
			this.$stage.get(0).onselectstart = function() { return false };
		} else {
			this.$element.addClass('owl-text-select-on');
		}

		if (this.settings.touchDrag && !isTouchIE){
			this.$stage.on('touchstart touchcancel', $.proxy(function(event) { this.eventsRouter(event) }, this));
		}

		// catch transitionEnd event
		if (this.transitionEndVendor) {
			this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, false);
		}

		// responsive
		if (this.settings.responsive !== false) {
			this.on(window, 'resize', $.proxy(this.onThrottledResize, this));
		}
	};

	/**
	 * Handles touchstart/mousedown event.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var ev, isTouchEvent, pageX, pageY, animatedPos;

		ev = event.originalEvent || event || window.event;

		// prevent right click
		if (ev.which === 3 || this.state.isTouch) {
			return false;
		}

		if (ev.type === 'mousedown') {
			this.$stage.addClass('owl-grab');
		}

		this.trigger('drag');
		this.drag.startTime = new Date().getTime();
		this.speed(0);
		this.state.isTouch = true;
		this.state.isScrolling = false;
		this.state.isSwiping = false;
		this.drag.distance = 0;

		pageX = getTouches(ev).x;
		pageY = getTouches(ev).y;

		// get stage position left
		this.drag.offsetX = this.$stage.position().left;
		this.drag.offsetY = this.$stage.position().top;

		if (this.settings.rtl) {
			this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width()
				+ this.settings.margin;
		}

		// catch position // ie to fix
		if (this.state.inMotion && this.support3d) {
			animatedPos = this.getTransformProperty();
			this.drag.offsetX = animatedPos;
			this.animate(animatedPos);
			this.state.inMotion = true;
		} else if (this.state.inMotion && !this.support3d) {
			this.state.inMotion = false;
			return false;
		}

		this.drag.startX = pageX - this.drag.offsetX;
		this.drag.startY = pageY - this.drag.offsetY;

		this.drag.start = pageX - this.drag.startX;
		this.drag.targetEl = ev.target || ev.srcElement;
		this.drag.updatedX = this.drag.start;

		// to do/check
		// prevent links and images dragging;
		if (this.drag.targetEl.tagName === "IMG" || this.drag.targetEl.tagName === "A") {
			this.drag.targetEl.draggable = false;
		}

		$(document).on('mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents', $.proxy(function(event) {this.eventsRouter(event)},this));
	};

	/**
	 * Handles the touchmove/mousemove events.
	 * @todo Simplify
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var ev, isTouchEvent, pageX, pageY, minValue, maxValue, pull;

		if (!this.state.isTouch) {
			return;
		}

		if (this.state.isScrolling) {
			return;
		}

		ev = event.originalEvent || event || window.event;

		pageX = getTouches(ev).x;
		pageY = getTouches(ev).y;

		// Drag Direction
		this.drag.currentX = pageX - this.drag.startX;
		this.drag.currentY = pageY - this.drag.startY;
		this.drag.distance = this.drag.currentX - this.drag.offsetX;

		// Check move direction
		if (this.drag.distance < 0) {
			this.state.direction = this.settings.rtl ? 'right' : 'left';
		} else if (this.drag.distance > 0) {
			this.state.direction = this.settings.rtl ? 'left' : 'right';
		}
		// Loop
		if (this.settings.loop) {
			if (this.op(this.drag.currentX, '>', this.coordinates(this.minimum())) && this.state.direction === 'right') {
				this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
			} else if (this.op(this.drag.currentX, '<', this.coordinates(this.maximum())) && this.state.direction === 'left') {
				this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
			}
		} else {
			// pull
			minValue = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maxValue = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? this.drag.distance / 5 : 0;
			this.drag.currentX = Math.max(Math.min(this.drag.currentX, minValue + pull), maxValue + pull);
		}

		// Lock browser if swiping horizontal

		if ((this.drag.distance > 8 || this.drag.distance < -8)) {
			if (ev.preventDefault !== undefined) {
				ev.preventDefault();
			} else {
				ev.returnValue = false;
			}
			this.state.isSwiping = true;
		}

		this.drag.updatedX = this.drag.currentX;

		// Lock Owl if scrolling
		if ((this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === false) {
			this.state.isScrolling = true;
			this.drag.updatedX = this.drag.start;
		}

		this.animate(this.drag.updatedX);
	};

	/**
	 * Handles the touchend/mouseup events.
	 * @protected
	 */
	Owl.prototype.onDragEnd = function(event) {
		var compareTimes, distanceAbs, closest;

		if (!this.state.isTouch) {
			return;
		}

		if (event.type === 'mouseup') {
			this.$stage.removeClass('owl-grab');
		}

		this.trigger('dragged');

		// prevent links and images dragging;
		this.drag.targetEl.removeAttribute("draggable");

		// remove drag event listeners

		this.state.isTouch = false;
		this.state.isScrolling = false;
		this.state.isSwiping = false;

		// to check
		if (this.drag.distance === 0 && this.state.inMotion !== true) {
			this.state.inMotion = false;
			return false;
		}

		// prevent clicks while scrolling

		this.drag.endTime = new Date().getTime();
		compareTimes = this.drag.endTime - this.drag.startTime;
		distanceAbs = Math.abs(this.drag.distance);

		// to test
		if (distanceAbs > 3 || compareTimes > 300) {
			this.removeClick(this.drag.targetEl);
		}

		closest = this.closest(this.drag.updatedX);

		this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
		this.current(closest);
		this.invalidate('position');
		this.update();

		// if pullDrag is off then fire transitionEnd event manually when stick
		// to border
		if (!this.settings.pullDrag && this.drag.updatedX === this.coordinates(closest)) {
			this.transitionEnd();
		}

		this.drag.distance = 0;

		$(document).off('.owl.dragEvents');
	};

	/**
	 * Attaches `preventClick` to disable link while swipping.
	 * @protected
	 * @param {HTMLElement} [target] - The target of the `click` event.
	 */
	Owl.prototype.removeClick = function(target) {
		this.drag.targetEl = target;
		$(target).on('click.preventClick', this.e._preventClick);
		// to make sure click is removed:
		window.setTimeout(function() {
			$(target).off('click.preventClick');
		}, 300);
	};

	/**
	 * Suppresses click event.
	 * @protected
	 * @param {Event} ev - The event arguments.
	 */
	Owl.prototype.preventClick = function(ev) {
		if (ev.preventDefault) {
			ev.preventDefault();
		} else {
			ev.returnValue = false;
		}
		if (ev.stopPropagation) {
			ev.stopPropagation();
		}
		$(ev.target).off('click.preventClick');
	};

	/**
	 * Catches stage position while animate (only CSS3).
	 * @protected
	 * @returns
	 */
	Owl.prototype.getTransformProperty = function() {
		var transform, matrix3d;

		transform = window.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + 'transform');
		// var transform = this.$stage.css(this.vendorName + 'transform')
		transform = transform.replace(/matrix(3d)?\(|\)/g, '').split(',');
		matrix3d = transform.length === 16;

		return matrix3d !== true ? transform[4] : transform[12];
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate) {
		var position = -1, pull = 30, width = this.width(), coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				if (coordinate > value - pull && coordinate < value + pull) {
					position = index;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = this.state.direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		this.trigger('translate');
		this.state.inMotion = this.speed() > 0;

		if (this.support3d) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px' + ',0px, 0px)',
				transition: (this.speed() / 1000) + 's'
			});
		} else if (this.state.isTouch) {
			this.$stage.css({
				left: coordinate + 'px'
			});
		} else {
			this.$stage.animate({
				left: coordinate
			}, this.speed() / 1000, this.settings.fallbackEasing, $.proxy(function() {
				if (this.state.inMotion) {
					this.transitionEnd();
				}
			}, this));
		}
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} part - The part to invalidate.
	 */
	Owl.prototype.invalidate = function(part) {
		this._invalidated[part] = true;
	}

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position for an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = (relative ? this._items.length : this._items.length + this._clones.length);

		if (!$.isNumeric(position) || n < 1) {
			return undefined;
		}

		if (this._clones.length) {
			position = ((position % n) + n) % n;
		} else {
			position = Math.max(this.minimum(relative), Math.min(this.maximum(relative), position));
		}

		return position;
	};

	/**
	 * Converts an absolute position for an item into a relative position.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position = this.normalize(position);
		position = position - this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for an item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var maximum, width, i = 0, coordinate,
			settings = this.settings;

		if (relative) {
			return this._items.length - 1;
		}

		if (!settings.loop && settings.center) {
			maximum = this._items.length - 1;
		} else if (!settings.loop && !settings.center) {
			maximum = this._items.length - settings.items;
		} else if (settings.loop || settings.center) {
			maximum = this._items.length + settings.items;
		} else if (settings.autoWidth || settings.merge) {
			revert = settings.rtl ? 1 : -1;
			width = this.$stage.width() - this.$element.width();
			while (coordinate = this.coordinates(i)) {
				if (coordinate * revert >= width) {
					break;
				}
				maximum = ++i;
			}
		} else {
			throw 'Can not detect maximum absolute position.'
		}

		return maximum;
	};

	/**
	 * Gets the minimum position for an item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		if (relative) {
			return 0;
		}

		return this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var coordinate = null;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[position - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1);
		} else {
			coordinate = this._coordinates[position - 1] || 0;
		}

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		if (this.settings.loop) {
			var distance = position - this.relative(this.current()),
				revert = this.current(),
				before = this.current(),
				after = this.current() + distance,
				direction = before - after < 0 ? true : false,
				items = this._clones.length + this._items.length;

			if (after < this.settings.items && direction === false) {
				revert = before + this._items.length;
				this.reset(revert);
			} else if (after >= items - this.settings.items && direction === true) {
				revert = before - this._items.length;
				this.reset(revert);
			}
			window.clearTimeout(this.e._goToLoop);
			this.e._goToLoop = window.setTimeout($.proxy(function() {
				this.speed(this.duration(this.current(), revert + distance, speed));
				this.current(revert + distance);
				this.update();
			}, this), 30);
		} else {
			this.speed(this.duration(this.current(), position, speed));
			this.current(position);
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.transitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.state.inMotion = false;
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			throw 'Can not detect viewport width.';
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset($.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		position = position === undefined ? this._items.length : this.normalize(position, true);

		this.trigger('add', { content: content, position: position });

		if (this._items.length === 0 || position === this._items.length) {
			this.$stage.append(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Adds triggerable events.
	 * @protected
	 */
	Owl.prototype.addTriggerableEvents = function() {
		var handler = $.proxy(function(callback, event) {
			return $.proxy(function(e) {
				if (e.relatedTarget !== this) {
					this.suppress([ event ]);
					callback.apply(this, [].slice.call(arguments, 1));
					this.release([ event ]);
				}
			}, this);
		}, this);

		$.each({
			'next': this.next,
			'prev': this.prev,
			'to': this.to,
			'destroy': this.destroy,
			'refresh': this.refresh,
			'replace': this.replace,
			'add': this.add,
			'remove': this.remove
		}, $.proxy(function(event, callback) {
			this.$element.on(event + '.owl.carousel', handler(callback, event + '.owl.carousel'));
		}, this));

	};

	/**
	 * Watches the visibility of the carousel element.
	 * @protected
	 */
	Owl.prototype.watchVisibility = function() {

		// test on zepto
		if (!isElVisible(this.$element.get(0))) {
			this.$element.addClass('owl-hidden');
			window.clearInterval(this.e._checkVisibile);
			this.e._checkVisibile = window.setInterval($.proxy(checkVisible, this), 500);
		}

		function isElVisible(el) {
			return el.offsetWidth > 0 && el.offsetHeight > 0;
		}

		function checkVisible() {
			if (isElVisible(this.$element.get(0))) {
				this.$element.removeClass('owl-hidden');
				this.refresh();
				window.clearInterval(this.e._checkVisibile);
			}
		}
	};

	/**
	 * Preloads images with auto width.
	 * @protected
	 * @todo Still to test
	 */
	Owl.prototype.preloadAutoWidthImages = function(imgs) {
		var loaded, that, $el, img;

		loaded = 0;
		that = this;
		imgs.each(function(i, el) {
			$el = $(el);
			img = new Image();

			img.onload = function() {
				loaded++;
				$el.attr('src', img.src);
				$el.css('opacity', 1);
				if (loaded >= imgs.length) {
					that.state.imagesLoaded = true;
					that.initialize();
				}
			};

			img.src = $el.attr('src') || $el.attr('data-src') || $el.attr('data-src-retina');
		});
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		if (this.$element.hasClass(this.settings.themeClass)) {
			this.$element.removeClass(this.settings.themeClass);
		}

		if (this.settings.responsive !== false) {
			$(window).off('resize.owl.carousel');
		}

		if (this.transitionEndVendor) {
			this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
		}

		for ( var i in this._plugins) {
			this._plugins[i].destroy();
		}

		if (this.settings.mouseDrag || this.settings.touchDrag) {
			this.$stage.off('mousedown touchstart touchcancel');
			$(document).off('.owl.dragEvents');
			this.$stage.get(0).onselectstart = function() {};
			this.$stage.off('dragstart', function() { return false });
		}

		// remove event handlers in the ".owl.carousel" namespace
		this.$element.off('.owl');

		this.$stage.children('.cloned').remove();
		this.e = null;
		this.$element.removeData('owlCarousel');

		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.unwrap();
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers an public event.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=.owl.carousel] - The event namespace.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].apply(this, event);
			}
		}

		return event;
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	}

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	}

	/**
	 * Checks the availability of some browser features.
	 * @protected
	 */
	Owl.prototype.browserSupport = function() {
		this.support3d = isPerspective();

		if (this.support3d) {
			this.transformVendor = isTransform();

			// take transitionend event name by detecting transition
			var endVendors = [ 'transitionend', 'webkitTransitionEnd', 'transitionend', 'oTransitionEnd' ];
			this.transitionEndVendor = endVendors[isTransition()];

			// take vendor name from transform name
			this.vendorName = this.transformVendor.replace(/Transform/i, '');
			this.vendorName = this.vendorName !== '' ? '-' + this.vendorName.toLowerCase() + '-' : '';
		}

		this.state.orientation = window.orientation;
	};

	/**
	 * Get touch/drag coordinats.
	 * @private
	 * @param {event} - mousedown/touchstart event
	 * @returns {object} - Contains X and Y of current mouse/touch position
	 */

	function getTouches(event) {
		if (event.touches !== undefined) {
			return {
				x: event.touches[0].pageX,
				y: event.touches[0].pageY
			};
		}

		if (event.touches === undefined) {
			if (event.pageX !== undefined) {
				return {
					x: event.pageX,
					y: event.pageY
				};
			}

		if (event.pageX === undefined) {
			return {
					x: event.clientX,
					y: event.clientY
				};
			}
		}
	}

	/**
	 * Checks for CSS support.
	 * @private
	 * @param {Array} array - The CSS properties to check for.
	 * @returns {Array} - Contains the supported CSS property name and its index or `false`.
	 */
	function isStyleSupported(array) {
		var p, s, fake = document.createElement('div'), list = array;
		for (p in list) {
			s = list[p];
			if (typeof fake.style[s] !== 'undefined') {
				fake = null;
				return [ s, p ];
			}
		}
		return [ false ];
	}

	/**
	 * Checks for CSS transition support.
	 * @private
	 * @todo Realy bad design
	 * @returns {Number}
	 */
	function isTransition() {
		return isStyleSupported([ 'transition', 'WebkitTransition', 'MozTransition', 'OTransition' ])[1];
	}

	/**
	 * Checks for CSS transform support.
	 * @private
	 * @returns {String} The supported property name or false.
	 */
	function isTransform() {
		return isStyleSupported([ 'transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform' ])[0];
	}

	/**
	 * Checks for CSS perspective support.
	 * @private
	 * @returns {String} The supported property name or false.
	 */
	function isPerspective() {
		return isStyleSupported([ 'perspective', 'webkitPerspective', 'MozPerspective', 'OPerspective', 'MsPerspective' ])[0];
	}

	/**
	 * Checks wether touch is supported or not.
	 * @private
	 * @returns {Boolean}
	 */
	function isTouchSupport() {
		return 'ontouchstart' in window || !!(navigator.msMaxTouchPoints);
	}

	/**
	 * Checks wether touch is supported or not for IE.
	 * @private
	 * @returns {Boolean}
	 */
	function isTouchSupportIE() {
		return window.navigator.msPointerEnabled;
	}

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @public
	 */
	$.fn.owlCarousel = function(options) {
		return this.each(function() {
			if (!$(this).data('owlCarousel')) {
				$(this).data('owlCarousel', new Owl(this, options));
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = ((e.property && e.property.value) || this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position++)), load);
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	}

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	}

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url(' + url + ')',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	}

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function() {
				if (this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.autoHeight && e.property.name == 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass)
					=== this._core.$stage.children().eq(this._core.current())) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		this._core.$stage.parent()
			.height(this._core.$stage.children().eq(this._core.current()).height())
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * Whether this is in fullscreen or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._fullscreen = false;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'resize.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.video && !this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refresh.owl.carousel changed.owl.carousel': $.proxy(function(e) {
				if (this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				var $element = $(e.content).find('.owl-video');
				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {

		var type = target.attr('data-vimeo-id') ? 'vimeo' : 'youtube',
			id = target.attr('data-vimeo-id') || target.attr('data-youtube-id'),
			width = target.attr('data-width') || this._core.settings.videoWidth,
			height = target.attr('data-height') || this._core.settings.videoHeight,
			url = target.attr('href');

		if (url) {
			id = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {

		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "http://img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: 'http://vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} ev - The event arguments.
	 */
	Video.prototype.play = function(ev) {
		this._core.trigger('play', null, 'video');

		if (this._playing) {
			this.stop();
		}

		var target = $(ev.target || ev.srcElement),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html, wrap;

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/'
				+ video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="http://player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width
				+ '" height="' + height
				+ '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		}

		item.addClass('owl-video-playing');
		this._playing = item;

		wrap = $('<div style="height:' + height + 'px; width:' + width + 'px" class="owl-video-frame">'
			+ html + '</div>');
		target.after(wrap);
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {

		// if Vimeo Fullscreen mode
		var element = document.fullscreenElement || document.mozFullScreenElement
			|| document.webkitFullscreenElement;

		if (element && $(element).parent().hasClass('owl-video-frame')) {
			this._core.speed(0);
			this._fullscreen = true;
		}

		if (element && this._fullscreen && this._playing) {
			return false;
		}

		// comming back from fullscreen
		if (this._fullscreen) {
			this._fullscreen = false;
			return false;
		}

		// check full screen mode and window orientation
		if (this._playing) {
			if (this._core.state.orientation !== window.orientation) {
				this._core.state.orientation = window.orientation;
				return false;
			}
		}

		return true;
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				this.swapping = e.type == 'translated';
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1 || !this.core.support3d) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing)
				.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
		}

		if (incoming) {
			next.addClass('animated owl-animated-in')
				.addClass(incoming)
				.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.transitionEnd();
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Autoplay.Defaults, this.core.options);

		this.handlers = {
			'translated.owl.carousel refreshed.owl.carousel': $.proxy(function() {
				this.autoplay();
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				this.play(t, s);
			}, this),
			'stop.owl.autoplay': $.proxy(function() {
				this.stop();
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this.core.settings.autoplayHoverPause) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this.core.settings.autoplayHoverPause) {
					this.autoplay();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * @protected
	 * @todo Must be documented.
	 */
	Autoplay.prototype.autoplay = function() {
		if (this.core.settings.autoplay && !this.core.state.videoPlay) {
			window.clearInterval(this.interval);

			this.interval = window.setInterval($.proxy(function() {
				this.play();
			}, this), this.core.settings.autoplayTimeout);
		} else {
			window.clearInterval(this.interval);
		}
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - ...
	 * @param {Number} [speed] - ...
	 * @returns {Boolean|undefined} - ...
	 * @todo Must be documented.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		// if tab is inactive - doesnt work in <IE10
		if (document.hidden === true) {
			return;
		}

		if (this.core.state.isTouch || this.core.state.isScrolling
			|| this.core.state.isSwiping || this.core.state.inMotion) {
			return;
		}

		if (this.core.settings.autoplay === false) {
			window.clearInterval(this.interval);
			return;
		}

		this.core.next(this.core.settings.autoplaySpeed);
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		window.clearInterval(this.interval);
	};

	/**
	 * Pauses the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		window.clearInterval(this.interval);
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this.interval);

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.0.0
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.dotsData) {
					this._templates.push($(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
				}
			}, this),
			'add.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, $(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
				}
			}, this),
			'remove.owl.carousel prepared.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'change.owl.carousel': $.proxy(function(e) {
				if (e.property.name == 'position') {
					if (!this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
						var current = this._core.current(),
							maximum = this._core.maximum(),
							minimum = this._core.minimum();
						e.data = e.property.value > maximum
							? current >= maximum ? minimum : maximum
							: e.property.value < minimum ? maximum : e.property.value;
					}
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function() {
				if (!this._initialized) {
					this.initialize();
					this._initialized = true;
				}
				this._core.trigger('refresh', null, 'navigation');
				this.update();
				this.draw();
				this._core.trigger('refreshed', null, 'navigation');
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	}

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navRewind: true,
		navText: [ 'prev', 'next' ],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [ 'owl-prev', 'owl-next' ],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotData: false,
		dotsSpeed: false,
		dotsContainer: false,
		controlsClass: 'owl-controls'
	}

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var $container, override,
			options = this._core.settings;

		// create the indicator template
		if (!options.dotsData) {
			this._templates = [ $('<div>')
				.addClass(options.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		// create controls container if needed
		if (!options.navContainer || !options.dotsContainer) {
			this._controls.$container = $('<div>')
				.addClass(options.controlsClass)
				.appendTo(this.$element);
		}

		// create DOM structure for absolute navigation
		this._controls.$indicators = options.dotsContainer ? $(options.dotsContainer)
			: $('<div>').hide().addClass(options.dotsClass).appendTo(this._controls.$container);

		this._controls.$indicators.on('click', 'div', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$indicators)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, options.dotsSpeed);
		}, this));

		// create DOM structure for relative navigation
		$container = options.navContainer ? $(options.navContainer)
			: $('<div>').addClass(options.navContainerClass).prependTo(this._controls.$container);

		this._controls.$next = $('<' + options.navElement + '>');
		this._controls.$previous = this._controls.$next.clone();

		this._controls.$previous
			.addClass(options.navClass[0])
			.html(options.navText[0])
			.hide()
			.prependTo($container)
			.on('click', $.proxy(function(e) {
				this.prev(options.navSpeed);
			}, this));
		this._controls.$next
			.addClass(options.navClass[1])
			.html(options.navText[1])
			.hide()
			.appendTo($container)
			.on('click', $.proxy(function(e) {
				this.next(options.navSpeed);
			}, this));

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	}

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			this._controls[control].remove();
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	}

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			options = this._core.settings,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			size = options.center || options.autoWidth || options.dotData
				? 1 : options.dotsEach || options.items;

		if (options.slideBy !== 'page') {
			options.slideBy = Math.min(options.slideBy, options.items);
		}

		if (options.dots || options.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: i - lower,
						end: i - lower + size - 1
					});
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	}

	/**
	 * Draws the user interface.
	 * @todo The option `dotData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference, i, html = '',
			options = this._core.settings,
			$items = this._core.$stage.children(),
			index = this._core.relative(this._core.current());

		if (options.nav && !options.loop && !options.navRewind) {
			this._controls.$previous.toggleClass('disabled', index <= 0);
			this._controls.$next.toggleClass('disabled', index >= this._core.maximum());
		}

		this._controls.$previous.toggle(options.nav);
		this._controls.$next.toggle(options.nav);

		if (options.dots) {
			difference = this._pages.length - this._controls.$indicators.children().length;

			if (options.dotData && difference !== 0) {
				for (i = 0; i < this._controls.$indicators.children().length; i++) {
					html += this._templates[this._core.relative(i)];
				}
				this._controls.$indicators.html(html);
			} else if (difference > 0) {
				html = new Array(difference + 1).join(this._templates[0]);
				this._controls.$indicators.append(html);
			} else if (difference < 0) {
				this._controls.$indicators.children().slice(difference).remove();
			}

			this._controls.$indicators.find('.active').removeClass('active');
			this._controls.$indicators.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}

		this._controls.$indicators.toggle(options.dots);
	}

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotData
				? 1 : settings.dotsEach || settings.items)
		};
	}

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var index = this._core.relative(this._core.current());
		return $.grep(this._pages, function(o) {
			return o.start <= index && o.end >= index;
		}).pop();
	}

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			options = this._core.settings;

		if (options.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += options.slideBy : position -= options.slideBy;
		}
		return position;
	}

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	}

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	}

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	}

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.0.0
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash table for the hashes.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function() {
				if (this._core.settings.startPosition == 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				var hash = $(e.content).find('[data-hash]').andSelf('[data-hash]').attr('data-hash');
				this._hashes[hash] = e.content;
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function() {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]) || 0;

			if (!hash) {
				return false;
			}

			this._core.to(position, false, true);
		}, this));
	}

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	}

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);