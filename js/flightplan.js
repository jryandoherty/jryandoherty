require(['jquery'], function($) {

    /****************
     **** SCROLLED HEADER ****
     ****************/
    window.onresize = function () {
        adjustContent();
    };
    window.onscroll = function () {
        scrolledHeader();
    };
    window.scrolledHeader = function() {
        currentScroll = window.scrollY;

        if (currentScroll >= 1) {
            $('header').addClass('scrolled');
        }
        else {
            $('header').removeClass('scrolled');
        }
    }

    /****************
     **** HEADER ****
     ****************/

    window.menuStatusBDC = 0;

    window.menuVisibilityBDC = function() {
        if(window.menuStatusBDC == 0) {
            $('.button-drawer').addClass('active');
            $('#slideout').css("visibility", "visible");
            $( 'main' ).animate({ left: "290px" }, 320, "swing", function() { });
            $( 'header' ).animate({ left: "290px" }, 320, "swing", function() { });
            $( '.header-nav' ).animate({ left: "290px" }, 320, "swing", function() { });
            $( '.header-mobile-sections' ).animate({ left: "290px" }, 320, "swing", function() { });
            window.menuStatusBDC = 1;
        }
        else {
            $('.button-drawer').removeClass('active');
            $('#slideout').css("visibility", "hidden");
            $( 'main' ).animate({ left: "0px" }, 320, "swing", function() { });
            $( 'header' ).animate({ left: "0px" }, 320, "swing", function() { });
            $( '.header-nav' ).animate({ left: "0px" }, 320, "swing", function() { });
            $( '.header-mobile-sections' ).animate({ left: "0px" }, 320, "swing", function() { });
            window.menuStatusBDC = 0;
        }
    }

    /****************
     **** SEARCH BAR ****
     ****************/

    window.searchStatus = 0;

    window.searchVisibility = function() {
        if (searchStatus == 0) {
            closeAll();
            document.getElementById("search-box").style.height = "70px";
            document.getElementById("button-search-close").style.width = "44px";
            document.getElementById("button-search-close").style.height = "64px";
            document.getElementById("button-search-open").style.width = "0px";
            document.getElementById("button-search-open").style.height = "0px";
            searchStatus = 1;
        }
        else {
            closeAll();
        }
    }


    /****************
     **** MENU DRAWER ****
     ****************/

    window.menuStatus = 0;

    window.menuVisibility = function() {
        if (menuStatus == 0) {
            $('.button-drawer').addClass('active');
            $('main').animate({left: "290px"}, 320, "swing", function () {
            });
            menuStatus = 1;
        }
        else {
            $('.button-drawer').removeClass('active');
            $('main').animate({left: "0px"}, 320, "swing", function () {
            });
            menuStatus = 0;
        }
    }


    /****************
     **** DELAYED HEADER SLIDEDOWN ****
     ****************/

    window.delayedHeader = function() {
        currentScroll = window.scrollY;
        if (currentScroll >= 100) {
            $('header.delayed').addClass('active');
        }
        else {
            $('header.delayed').removeClass('active');
        }
    }


    /****************
     **** MENU IN-DRAWER ACCORDION ****
     ****************/

    window.AccordionSet;
    window.AccordionActive = 0;
    window.AccordionHeight = 0;

    window.slideAccordion = function(AccordionSet) {
        if (AccordionActive != AccordionSet) {
            $('#menu-section-' + AccordionSet + ' li').each(function () {
                var ThisHeight = $(this).height();
                AccordionHeight += ThisHeight;
            });
            $('#menu-section-' + AccordionSet + ' .menu-section-title').addClass('active');
            $('.menu-section.accordion ul').animate({height: "0px"}, 160, function () {
            });
            $('#menu-section-' + AccordionSet + ' ul').animate({height: AccordionHeight + 'px'}, 300, function () {
            });
            AccordionActive = AccordionSet;
            AccordionHeight = 0;
        }
        else {
            $('.menu-section.accordion ul').animate({height: "0px"}, 160, function () {
            });
            AccordionActive = 0;
            $('.menu-section-title').removeClass('active');
        }

    }


    /****************
     **** GLOBAL ADJUSTMENTS ****
     ****************/

    window.kineticWidth = 0;
    window.tileSliderWidth = 0;
    window.subMenuWidth = 0;

    window.adjustContent = function() {
        $('.content-menu-container li').each(function () {
            var ThisWidth = $(this).width();
            kineticWidth += ThisWidth;
        });
        kineticWidth += 44;
        $('.content-menu-container ul').css('width', kineticWidth + 'px');
        kineticWidth = 0;
        $('.tile-slider-item').each(function () {
            ThisWidth = $(this).width();
            tileSliderWidth += ThisWidth + 16;
        });
        $('.tile-slider-container ul').css('width', tileSliderWidth + 'px');
        tileSliderWidth = 0;
        $('.sub-menu-item').each(function () {
            ThisWidth = $(this).width();
            subMenuWidth += ThisWidth + 16;
        });
        $('.sub-menu-container ul').css('width', subMenuWidth + 'px');
        subMenuWidth = 0;
        contentMenuArrows();
    }

    /****************
     **** MASTER CLOSE EVERYTHING ****
     ****************/

    window.closeAll = function() {
        searchStatus = 0;
        menuStatus = 0;
        $('#categories-slidedown').removeClass('active');
        $('.categories-slidedown-button').removeClass('active');
        tileSliderStatus = 0;
    }


    /****************
     **** CONTENT MENU & TILE SLIDER ARROWS ****
     ****************/

    window.contentMenuArrows = function() {
        var contentMenu = $('.content-menu-kinetic').width();
        var contentMenuBox = $('.content-menu-container ul').width();
        var subMenu = $('.sub-menu-kinetic').width();
        var subMenuBox = $('.sub-menu-container ul').width();
        var tileSlider = $('.tile-slider-container').width();
        var tileSliderBox = $('.tile-slider-container ul').width();
        if (contentMenu >= contentMenuBox) {
            $('.content-menu-left').css('display', 'none');
            $('.content-menu-right').css('display', 'none');
            $('.content-menu-kinetic').scrollLeft('0');
            /** $('.rewards-menu-item.highlighted').css('position', 'absolute'); **/
            /** $('.rewards-menu-item.highlighted').css('right', '20px'); **/
            $('.content-menu-kinetic').kinetic('detach');
        }
        else {
            $('.content-menu-right').css('display', 'inherit');
            $('.content-menu-kinetic').scrollLeft('0');
            $('.rewards-menu-item.highlighted').css('position', 'inherit');
            $('.content-menu-kinetic').kinetic('attach');
        }
        if (tileSlider >= tileSliderBox) {
            $('.tile-slider-left').css('display', 'none');
            $('.tile-slider-right').css('display', 'none');
            $('.tile-slider-kinetic').scrollLeft('0');
            $('.tile-slider-kinetic').kinetic('detach');
        }
        else {
            $('.tile-slider-right').css('display', 'inherit');
            $('.tile-slider-kinetic').scrollLeft('0');
            $('.tile-slider-kinetic').kinetic('attach');
        }
        if (subMenu >= subMenuBox) {
            $('.sub-menu-left').css('display', 'none');
            $('.sub-menu-right').css('display', 'none');
            $('.sub-menu-kinetic').scrollLeft('0');
            $('.sub-menu-item.highlighted').css('position', 'absolute');
            $('.sub-menu-item.highlighted').css('right', '20px');
            $('.sub-menu-kinetic').kinetic('detach');
        }
        else {
            $('.sub-menu-right').css('display', 'inherit');
            $('.sub-menu-kinetic').scrollLeft('0');
            $('.sub-menu-kinetic').kinetic('attach');
            $('.sub-menu-item.highlighted').css('position', 'inherit');
        }
    }


    /****************
     **** CONTENT MENU & TILE SLIDER ARROWS AFTER SCROLL ****
     ****************/

    window.contentMenuArrowsAction = function() {
        var currentMenuPos = $('.content-menu-kinetic').scrollLeft();
        var currentMenuWidth = $('.content-menu-kinetic').width();
        var currentMaxScroll = $('.content-menu ul').width();
        var newMaxScroll = currentMaxScroll - 25;
        var newMenuPos = currentMenuWidth + currentMenuPos;
        if (currentMenuPos < 10) {
            $('.content-menu-left').css('display', 'none');
        }
        else {
            $('.content-menu-left').css('display', 'inherit');
        }
        if (newMenuPos > newMaxScroll) {
            $('.content-menu-right').css('display', 'none');
            currentMaxScroll = 0;
            currentMenuPos = 0;
            currentMenuWidth = 0;
        }
        else {
            $('.content-menu-right').css('display', 'inherit');
            currentMaxScroll = 0;
            currentMenuPos = 0;
            currentMenuWidth = 0;
        }
        var currentTilePos = $('.tile-slider-kinetic').scrollLeft();
        var currentTileWidth = $('.tile-slider-kinetic').width();
        var currentTileMaxScroll = $('.tile-slider ul').width();
        var newMaxTileScroll = currentTileMaxScroll - 100;
        var newTilePos = currentTileWidth + currentTilePos;
        if (currentTilePos < 10) {
            $('.tile-slider-left').css('display', 'none');
        }
        else {
            $('.tile-slider-left').css('display', 'inherit');
        }
        if (newTilePos > newMaxTileScroll) {
            $('.tile-slider-right').css('display', 'none');
            currentTileMaxScroll = 0;
            currentMenuPos = 0;
            currentMenuWidth = 0;
        }
        else {
            $('.tile-slider-right').css('display', 'inherit');
            currentTileMaxScroll = 0;
            currentMenuPos = 0;
            currentMenuWidth = 0;
        }
        var currentSubPos = $('.sub-menu-kinetic').scrollLeft();
        var currentSubWidth = $('.sub-menu-kinetic').width();
        var currentSubMaxScroll = $('.sub-menu ul').width();
        var newSubMaxScroll = currentSubMaxScroll - 100;
        var newSubPos = currentSubWidth + currentSubPos;
        if (currentSubPos < 10) {
            $('.sub-menu-left').css('display', 'none');
        }
        else {
            $('.sub-menu-left').css('display', 'inherit');
        }
        if (newSubPos > newSubMaxScroll) {
            $('.sub-menu-right').css('display', 'none');
            currentSubMaxScroll = 0;
            currentSubPos = 0;
            currentSubWidth = 0;
        }
        else {
            $('.sub-menu-right').css('display', 'inherit');
            currentSubMaxScroll = 0;
            currentSubPos = 0;
            currentSubWidth = 0;
        }
    }


    /****************
     **** CATEGORY TILE SLIDER SHOW AND HIDE ****
     ****************/

    window.tileSliderStatus = 0;

    window.categoriesVisibility = function() {
        if (tileSliderStatus == 0) {
            $('#categories-slidedown').addClass('active');
            $('.categories-slidedown-button').addClass('active');
            tileSliderStatus = 1;
        }
        else {
            $('#categories-slidedown').removeClass('active');
            $('.categories-slidedown-button').removeClass('active');
            tileSliderStatus = 0;
        }
        $('.content-menu-container li').each(function () {
            var ThisWidth = $(this).width();
            kineticWidth += ThisWidth;
        });
        kineticWidth += 44;
        $('.content-menu-container ul').css('width', kineticWidth + 'px');
        kineticWidth = 0;
        $('.tile-slider-item').each(function () {
            ThisWidth = $(this).width();
            tileSliderWidth += ThisWidth + 16;
        });
        $('.tile-slider-container ul').css('width', tileSliderWidth + 'px');
        tileSliderWidth = 0;
        contentMenuArrows();
    }


    /****************
     **** CONTENT MENU SHIFT ****
     ****************/

    window.contentMoveDirection;
    window.contentMenuPos = 1;
    window.contentMenuScroll = 0;
    window.contentMenuLeft = 0;
    window.contentMenuItems = 0;

    window.contentMenuMove = function(contentMoveDirection) {
        $('.content-menu-container li').each(function () {
            var ThisWidth = $(this).width();
            contentMenuItems += 1;
        });
        contentMenuScroll = $('.content-menu-kinetic').scrollLeft();
        if (contentMenuScroll > 20) {
            contentMenuScroll += 20;
        }
        var currentMenuBox = $('#content-menu').width();
        var currentMenuWidth = $('.content-menu-container').width();
        var remainingScrollAmount = currentMenuBox - currentMenuWidth - contentMenuScroll;
        if (contentMoveDirection == 'right') {
            var contentMenuItemWidth = $('.content-menu-kinetic li:nth-child(' + contentMenuPos + ')').width();
            contentMenuItemWidth += 16;
            if (remainingScrollAmount < contentMenuItemWidth) {
                contentMenuScroll += remainingScrollAmount;
                $('.content-menu-kinetic').animate({scrollLeft: contentMenuScroll}, 240, function () {
                });
                $('.content-menu-right').css('display', 'none');
                $('.content-menu-left').css('display', 'inherit');
            }
            else {
                contentMenuScroll += contentMenuItemWidth;
                contentMenuScroll -= 20;
                $('.content-menu-kinetic').animate({scrollLeft: contentMenuScroll}, 240, function () {
                });
                $('.content-menu-left').css('display', 'inherit');
                $('.content-menu-right').css('display', 'inherit');
            }
            contentMenuPos += 1;
            contentMenuItems = 0;
        }
        else {
            contentMenuPos -= 1;
            var contentMenuItemWidth = $('.content-menu-kinetic li:nth-child(' + contentMenuPos + ')').width();
            contentMenuItemWidth += 16;
            if (contentMenuScroll < contentMenuItemWidth) {
                $('.content-menu-kinetic').animate({scrollLeft: "0"}, 240, function () {
                });
                $('.content-menu-left').css('display', 'none');
                $('.content-menu-right').css('display', 'inherit');
            }
            else {
                contentMenuScroll -= contentMenuItemWidth;
                contentMenuScroll -= 20;
                $('.content-menu-kinetic').animate({scrollLeft: contentMenuScroll}, 240, function () {
                });
                contentMenuScroll += 20;
                $('.content-menu-left').css('display', 'inherit');
                $('.content-menu-right').css('display', 'inherit');
            }
            if (contentMenuScroll < 10) {
                $('.content-menu-left').css('display', 'none');
            }
            contentMenuItems = 0;
        }
    }


    /****************
     **** TILE SLIDER SHIFT ****
     ****************/

    window.tileSliderMoveDirection;
    window.tileSliderPos = 1;
    window.tileSliderScroll = 0;
    window.tileSliderLeft = 0;
    window.tileSliderItems = 0;

    window.tileSliderMove = function(tileSliderMoveDirection) {
        $('.tile-slider-container li').each(function () {
            var ThisWidth = $(this).width();
            tileSliderItems += 1;
        });
        tileSliderScroll = $('.tile-slider-kinetic').scrollLeft();
        if (tileSliderScroll > 20) {
            tileSliderScroll += 20;
        }
        var currentMenuBox = $('.tile-slider-container').width();
        var currentMenuWidth = $('.tile-slider-container ul').width();
        var remainingScrollAmount = currentMenuWidth - currentMenuBox - tileSliderScroll;
        if (tileSliderMoveDirection == 'right') {
            var tileSliderItemWidth = $('.tile-slider-kinetic li:nth-child(' + tileSliderPos + ')').width();
            tileSliderItemWidth += 16;
            if (remainingScrollAmount < tileSliderItemWidth) {
                tileSliderScroll += remainingScrollAmount;
                $('.tile-slider-kinetic').animate({scrollLeft: tileSliderScroll}, 240, function () {
                });
                $('.tile-slider-right').css('display', 'none');
                $('.tile-slider-left').css('display', 'inherit');
            }
            else {
                tileSliderScroll += tileSliderItemWidth;
                tileSliderScroll -= 20;
                $('.tile-slider-kinetic').animate({scrollLeft: tileSliderScroll}, 240, function () {
                });
                $('.tile-slider-left').css('display', 'inherit');
                $('.tile-slider-right').css('display', 'inherit');
            }
            tileSliderPos += 1;
            tileSliderItems = 0;
        }
        else {
            tileSliderPos -= 1;
            var tileSliderItemWidth = $('.tile-slider-kinetic li:nth-child(' + tileSliderPos + ')').width();
            tileSliderItemWidth += 16;
            if (tileSliderScroll < tileSliderItemWidth) {
                $('.tile-slider-kinetic').animate({scrollLeft: "0"}, 240, function () {
                });
                $('.tile-slider-left').css('display', 'none');
                $('.tile-slider-right').css('display', 'inherit');
            }
            else {
                tileSliderScroll -= tileSliderItemWidth;
                tileSliderScroll -= 20;
                $('.tile-slider-kinetic').animate({scrollLeft: tileSliderScroll}, 240, function () {
                });
                tileSliderScroll += 20;
                $('.tile-slider-left').css('display', 'inherit');
                $('.tile-slider-right').css('display', 'inherit');
            }
            if (tileSliderScroll < 10) {
                $('.tile-slider-left').css('display', 'none');
            }
            tileSliderItems = 0;
        }
    }


    /****************
     **** KINETIC SLIDING MENU ****
     ****************/

    (function ($) {
        'use strict';

        var ACTIVE_CLASS = 'kinetic-active';

        if (!window.requestAnimationFrame) {

            window.requestAnimationFrame = ( function () {

                return window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function (/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
                        window.setTimeout(callback, 1000 / 60);
                    };

            }());

        }

        $.support = $.support || {};
        $.extend($.support, {
            touch: 'ontouchend' in document
        });

        var Kinetic = function (element, settings) {
            this.settings = settings;
            this.el = element;
            this.$el = $(element);

            this._initElements();

            return this;
        };

        Kinetic.DATA_KEY = 'kinetic';
        Kinetic.DEFAULTS = {
            cursor: 'move',
            decelerate: true,
            triggerHardware: false,
            threshold: 0,
            y: true,
            x: true,
            slowdown: 0.9,
            maxvelocity: 40,
            throttleFPS: 60,
            invert: false,
            movingClass: {
                up: 'kinetic-moving-up',
                down: 'kinetic-moving-down',
                left: 'kinetic-moving-left',
                right: 'kinetic-moving-right'
            },
            deceleratingClass: {
                up: 'kinetic-decelerating-up',
                down: 'kinetic-decelerating-down',
                left: 'kinetic-decelerating-left',
                right: 'kinetic-decelerating-right'
            }
        };

        Kinetic.prototype.start = function (options) {
            this.settings = $.extend(this.settings, options);
            this.velocity = options.velocity || this.velocity;
            this.velocityY = options.velocityY || this.velocityY;
            this.settings.decelerate = false;
            this._move();
        };

        Kinetic.prototype.end = function () {
            this.settings.decelerate = true;
        };

        Kinetic.prototype.stop = function () {
            contentMenuArrowsAction();
            this.velocity = 0;
            this.velocityY = 0;
            this.settings.decelerate = true;
            if ($.isFunction(this.settings.stopped)) {
                this.settings.stopped.call(this);
            }
        };

        Kinetic.prototype.detach = function () {
            this._detachListeners();
            this.$el
                .removeClass(ACTIVE_CLASS)
                .css('cursor', '');
        };

        Kinetic.prototype.attach = function () {
            if (this.$el.hasClass(ACTIVE_CLASS)) {
                return;
            }
            this._attachListeners(this.$el);
            this.$el
                .addClass(ACTIVE_CLASS)
                .css('cursor', this.settings.cursor);
        };


        // Internal functions

        Kinetic.prototype._initElements = function () {
            this.$el.addClass(ACTIVE_CLASS);

            $.extend(this, {
                xpos: null,
                prevXPos: false,
                ypos: null,
                prevYPos: false,
                mouseDown: false,
                throttleTimeout: 1000 / this.settings.throttleFPS,
                lastMove: null,
                elementFocused: null
            });

            this.velocity = 0;
            this.velocityY = 0;

            // make sure we reset everything when mouse up
            $(document)
                .mouseup($.proxy(this._resetMouse, this))
                .click($.proxy(this._resetMouse, this));

            this._initEvents();

            this.$el.css('cursor', this.settings.cursor);

            if (this.settings.triggerHardware) {
                this.$el.css({
                    '-webkit-transform': 'translate3d(0,0,0)',
                    '-webkit-perspective': '1000',
                    '-webkit-backface-visibility': 'hidden'
                });
            }
        };

        Kinetic.prototype._initEvents = function () {
            var self = this;
            this.settings.events = {
                touchStart: function (e) {
                    var touch;
                    if (self._useTarget(e.target, e)) {
                        touch = e.originalEvent.touches[0];
                        self.threshold = self._threshold(e.target, e);
                        self._start(touch.clientX, touch.clientY);
                        e.stopPropagation();
                    }
                },
                touchMove: function (e) {
                    var touch;
                    if (self.mouseDown) {
                        touch = e.originalEvent.touches[0];
                        self._inputmove(touch.clientX, touch.clientY);
                        if (e.preventDefault) {
                            e.preventDefault();
                        }
                    }
                },
                inputDown: function (e) {
                    if (self._useTarget(e.target, e)) {
                        self.threshold = self._threshold(e.target, e);
                        self._start(e.clientX, e.clientY);
                        self.elementFocused = e.target;
                        if (e.target.nodeName === 'IMG') {
                            e.preventDefault();
                        }
                        e.stopPropagation();
                    }
                },
                inputEnd: function (e) {
                    if (self._useTarget(e.target, e)) {
                        self._end();
                        self.elementFocused = null;
                        if (e.preventDefault) {
                            e.preventDefault();
                        }
                    }
                },
                inputMove: function (e) {
                    if (self.mouseDown) {
                        self._inputmove(e.clientX, e.clientY);
                        if (e.preventDefault) {
                            e.preventDefault();
                        }
                    }
                },
                scroll: function (e) {
                    if ($.isFunction(self.settings.moved)) {
                        self.settings.moved.call(self, self.settings);
                    }
                    if (e.preventDefault) {
                        e.preventDefault();
                    }
                },
                inputClick: function (e) {
                    if (Math.abs(self.velocity) > 0) {
                        e.preventDefault();
                        return false;
                    }
                },
                // prevent drag and drop images in ie
                dragStart: function (e) {
                    if (self._useTarget(e.target, e) && self.elementFocused) {
                        return false;
                    }
                },
                // prevent selection when dragging
                selectStart: function (e) {
                    if ($.isFunction(self.settings.selectStart)) {
                        return self.settings.selectStart.apply(self, arguments);
                    } else if (self._useTarget(e.target, e)) {
                        return false;
                    }
                }
            };

            this._attachListeners(this.$el, this.settings);

        };

        Kinetic.prototype._inputmove = function (clientX, clientY) {
            var $this = this.$el;
            var el = this.el;

            if (!this.lastMove || new Date() > new Date(this.lastMove.getTime() + this.throttleTimeout)) {
                this.lastMove = new Date();

                if (this.mouseDown && (this.xpos || this.ypos)) {
                    var movedX = (clientX - this.xpos);
                    var movedY = (clientY - this.ypos);
                    if (this.settings.invert) {
                        movedX *= -1;
                        movedY *= -1;
                    }
                    if (this.threshold > 0) {
                        var moved = Math.sqrt(movedX * movedX + movedY * movedY);
                        if (this.threshold > moved) {
                            return;
                        } else {
                            this.threshold = 0;
                        }
                    }
                    if (this.elementFocused) {
                        $(this.elementFocused).blur();
                        this.elementFocused = null;
                        $this.focus();
                    }

                    this.settings.decelerate = false;
                    this.velocity = this.velocityY = 0;

                    var scrollLeft = this.scrollLeft();
                    var scrollTop = this.scrollTop();

                    this.scrollLeft(this.settings.x ? scrollLeft - movedX : scrollLeft);
                    this.scrollTop(this.settings.y ? scrollTop - movedY : scrollTop);

                    this.prevXPos = this.xpos;
                    this.prevYPos = this.ypos;
                    this.xpos = clientX;
                    this.ypos = clientY;

                    this._calculateVelocities();
                    this._setMoveClasses(this.settings.movingClass);

                    if ($.isFunction(this.settings.moved)) {
                        this.settings.moved.call(this, this.settings);
                    }
                }
            }
        };

        Kinetic.prototype._calculateVelocities = function () {
            this.velocity = this._capVelocity(this.prevXPos - this.xpos, this.settings.maxvelocity);
            this.velocityY = this._capVelocity(this.prevYPos - this.ypos, this.settings.maxvelocity);
            if (this.settings.invert) {
                this.velocity *= -1;
                this.velocityY *= -1;
            }
        };

        Kinetic.prototype._end = function () {
            if (this.xpos && this.prevXPos && this.settings.decelerate === false) {
                this.settings.decelerate = true;
                this._calculateVelocities();
                this.xpos = this.prevXPos = this.mouseDown = false;
                this._move();
            }
        };

        Kinetic.prototype._useTarget = function (target, event) {
            if ($.isFunction(this.settings.filterTarget)) {
                return this.settings.filterTarget.call(this, target, event) !== false;
            }
            return true;
        };

        Kinetic.prototype._threshold = function (target, event) {
            if ($.isFunction(this.settings.threshold)) {
                return this.settings.threshold.call(this, target, event);
            }
            return this.settings.threshold;
        };

        Kinetic.prototype._start = function (clientX, clientY) {
            this.mouseDown = true;
            this.velocity = this.prevXPos = 0;
            this.velocityY = this.prevYPos = 0;
            this.xpos = clientX;
            this.ypos = clientY;
        };

        Kinetic.prototype._resetMouse = function () {
            this.xpos = false;
            this.ypos = false;
            this.mouseDown = false;
        };

        Kinetic.prototype._decelerateVelocity = function (velocity, slowdown) {
            return Math.floor(Math.abs(velocity)) === 0 ? 0 // is velocity less than 1?
                : velocity * slowdown; // reduce slowdown
        };

        Kinetic.prototype._capVelocity = function (velocity, max) {
            var newVelocity = velocity;
            if (velocity > 0) {
                if (velocity > max) {
                    newVelocity = max;
                }
            } else {
                if (velocity < (0 - max)) {
                    newVelocity = (0 - max);
                }
            }
            return newVelocity;
        };

        Kinetic.prototype._setMoveClasses = function (classes) {
            var settings = this.settings;
            var $this = this.$el;

            $this.removeClass(settings.movingClass.up)
                .removeClass(settings.movingClass.down)
                .removeClass(settings.movingClass.left)
                .removeClass(settings.movingClass.right)
                .removeClass(settings.deceleratingClass.up)
                .removeClass(settings.deceleratingClass.down)
                .removeClass(settings.deceleratingClass.left)
                .removeClass(settings.deceleratingClass.right);

            if (this.velocity > 0) {
                $this.addClass(classes.right);
            }
            if (this.velocity < 0) {
                $this.addClass(classes.left);
            }
            if (this.velocityY > 0) {
                $this.addClass(classes.down);
            }
            if (this.velocityY < 0) {
                $this.addClass(classes.up);
            }

        };


        Kinetic.prototype._move = function () {
            var $scroller = this._getScroller();
            var scroller = $scroller[0];
            var self = this;
            var settings = self.settings;

            if (settings.x && scroller.scrollWidth > 0) {
                this.scrollLeft(this.scrollLeft() + this.velocity);
                if (Math.abs(this.velocity) > 0) {
                    this.velocity = settings.decelerate ?
                        self._decelerateVelocity(this.velocity, settings.slowdown) : this.velocity;
                }
            } else {
                this.velocity = 0;
            }

            if (settings.y && scroller.scrollHeight > 0) {
                this.scrollTop(this.scrollTop() + this.velocityY);
                if (Math.abs(this.velocityY) > 0) {
                    this.velocityY = settings.decelerate ?
                        self._decelerateVelocity(this.velocityY, settings.slowdown) : this.velocityY;
                }
            } else {
                this.velocityY = 0;
            }

            self._setMoveClasses(settings.deceleratingClass);

            if ($.isFunction(settings.moved)) {
                settings.moved.call(this, settings);
            }

            if (Math.abs(this.velocity) > 0 || Math.abs(this.velocityY) > 0) {
                if (!this.moving) {
                    this.moving = true;
                    // tick for next movement
                    window.requestAnimationFrame(function () {
                        self.moving = false;
                        self._move();
                    });
                }
            } else {
                self.stop();
            }
        };

        Kinetic.prototype._getScroller = function () {
            var $scroller = this.$el;
            if (this.$el.is('body') || this.$el.is('html')) {
                $scroller = $(window);
            }
            return $scroller;
        };

        Kinetic.prototype.scrollLeft = function (left) {
            var $scroller = this._getScroller();
            if (typeof left === 'number') {
                $scroller.scrollLeft(left);
                this.settings.scrollLeft = left;
            } else {
                return $scroller.scrollLeft();
            }
        };
        Kinetic.prototype.scrollTop = function (top) {
            var $scroller = this._getScroller();
            if (typeof top === 'number') {
                $scroller.scrollTop(top);
                this.settings.scrollTop = top;
            } else {
                return $scroller.scrollTop();
            }
        };

        Kinetic.prototype._attachListeners = function () {
            var $this = this.$el;
            var settings = this.settings;

            if ($.support.touch) {
                $this
                    .bind('touchstart', settings.events.touchStart)
                    .bind('touchend', settings.events.inputEnd)
                    .bind('touchmove', settings.events.touchMove);
            }

            $this
                .mousedown(settings.events.inputDown)
                .mouseup(settings.events.inputEnd)
                .mousemove(settings.events.inputMove);

            $this
                .click(settings.events.inputClick)
                .scroll(settings.events.scroll)
                .bind('selectstart', settings.events.selectStart)
                .bind('dragstart', settings.events.dragStart);
        };

        Kinetic.prototype._detachListeners = function () {
            var $this = this.$el;
            var settings = this.settings;
            if ($.support.touch) {
                $this
                    .unbind('touchstart', settings.events.touchStart)
                    .unbind('touchend', settings.events.inputEnd)
                    .unbind('touchmove', settings.events.touchMove);
            }

            $this
                .unbind('mousedown', settings.events.inputDown)
                .unbind('mouseup', settings.events.inputEnd)
                .unbind('mousemove', settings.events.inputMove);

            $this
                .unbind('click', settings.events.inputClick)
                .unbind('scroll', settings.events.scroll)
                .unbind('selectstart', settings.events.selectStart)
                .unbind('dragstart', settings.events.dragStart);
        };

        $.Kinetic = Kinetic;

        $.fn.kinetic = function (option, callOptions) {
            return this.each(function () {
                var $this = $(this);
                var instance = $this.data(Kinetic.DATA_KEY);
                var options = $.extend({}, Kinetic.DEFAULTS, $this.data(), typeof option === 'object' && option);

                if (!instance) {
                    $this.data(Kinetic.DATA_KEY, (instance = new Kinetic(this, options)));
                }

                if (typeof option === 'string') {
                    instance[option](callOptions);
                }

            });
        };

    }(window.jQuery || window.Zepto));


    /****************
     **** NIVO GALLERY SLIDER ****
     ****************/

    (function (e) {
        var t = function (t, n) {
            var r = e.extend({}, e.fn.nivoSlider.defaults, n);
            var i = {
                currentSlide: 0,
                currentImage: "",
                totalSlides: 0,
                running: false,
                paused: false,
                stop: false,
                controlNavEl: false
            };
            var s = e(t);
            s.data("nivo:vars", i).addClass("nivoSlider");
            var o = s.children();
            o.each(function () {
                var t = e(this);
                var n = "";
                if (!t.is("img")) {
                    if (t.is("a")) {
                        t.addClass("nivo-imageLink");
                        n = t
                    }
                    t = t.find("img:first")
                }
                var r = r === 0 ? t.attr("width") : t.width(), s = s === 0 ? t.attr("height") : t.height();
                if (n !== "") {
                    n.css("display", "none")
                }
                t.css("display", "none");
                i.totalSlides++
            });
            if (r.randomStart) {
                r.startSlide = Math.floor(Math.random() * i.totalSlides)
            }
            if (r.startSlide > 0) {
                if (r.startSlide >= i.totalSlides) {
                    r.startSlide = i.totalSlides - 1
                }
                i.currentSlide = r.startSlide
            }
            if (e(o[i.currentSlide]).is("img")) {
                i.currentImage = e(o[i.currentSlide])
            } else {
                i.currentImage = e(o[i.currentSlide]).find("img:first")
            }
            if (e(o[i.currentSlide]).is("a")) {
                e(o[i.currentSlide]).css("display", "block")
            }
            var u = e("<img/>").addClass("nivo-main-image");
            u.attr("src", i.currentImage.attr("src")).show();
            s.append(u);
            e(window).resize(function () {
                s.children("img").width(s.width());
                u.attr("src", i.currentImage.attr("src"));
                u.stop().height("auto");
                e(".nivo-slice").remove();
                e(".nivo-box").remove()
            });
            s.append(e('<div class="nivo-caption"></div>'));
            var a = function (t) {
                var n = e(".nivo-caption", s);
                if (i.currentImage.attr("title") != "" && i.currentImage.attr("title") != undefined) {
                    var r = i.currentImage.attr("title");
                    if (r.substr(0, 1) == "#")r = e(r).html();
                    if (n.css("display") == "block") {
                        setTimeout(function () {
                            n.html(r)
                        }, t.animSpeed)
                    } else {
                        n.html(r);
                        n.stop().fadeIn(t.animSpeed)
                    }
                } else {
                    n.stop().fadeOut(t.animSpeed)
                }
            };
            a(r);
            var f = 0;
            if (!r.manualAdvance && o.length > 1) {
                f = setInterval(function () {
                    d(s, o, r, false)
                }, r.pauseTime)
            }
            if (r.directionNav) {
                s.append('<div class="nivo-directionNav"><a class="nivo-prevNav">' + r.prevText + '</a><a class="nivo-nextNav">' + r.nextText + "</a></div>");
                e(s).on("click", "a.nivo-prevNav", function () {
                    if (i.running) {
                        return false
                    }
                    clearInterval(f);
                    f = "";
                    i.currentSlide -= 2;
                    d(s, o, r, "prev")
                });
                e(s).on("click", "a.nivo-nextNav", function () {
                    if (i.running) {
                        return false
                    }
                    clearInterval(f);
                    f = "";
                    d(s, o, r, "next")
                })
            }
            if (r.controlNav) {
                i.controlNavEl = e('<div class="nivo-controlNav"></div>');
                s.after(i.controlNavEl);
                for (var l = 0; l < o.length; l++) {
                    if (r.controlNavThumbs) {
                        i.controlNavEl.addClass("nivo-thumbs-enabled");
                        var c = o.eq(l);
                        if (!c.is("img")) {
                            c = c.find("img:first")
                        }
                        if (c.attr("data-thumb"))i.controlNavEl.append('<a class="nivo-control" rel="' + l + '"><img src="' + c.attr("data-thumb") + '" alt="" /></a>')
                    } else {
                        i.controlNavEl.append('<a class="nivo-control" rel="' + l + '">' + (l + 1) + "</a>")
                    }
                }
                e("a:eq(" + i.currentSlide + ")", i.controlNavEl).addClass("active");
                e("a", i.controlNavEl).bind("click", function () {
                    if (i.running)return false;
                    if (e(this).hasClass("active"))return false;
                    clearInterval(f);
                    f = "";
                    u.attr("src", i.currentImage.attr("src"));
                    i.currentSlide = e(this).attr("rel") - 1;
                    d(s, o, r, "control")
                })
            }
            if (r.pauseOnHover) {
                s.hover(function () {
                    i.paused = true;
                    clearInterval(f);
                    f = ""
                }, function () {
                    i.paused = false;
                    if (f === "" && !r.manualAdvance) {
                        f = setInterval(function () {
                            d(s, o, r, false)
                        }, r.pauseTime)
                    }
                })
            }
            s.bind("nivo:animFinished", function () {
                u.attr("src", i.currentImage.attr("src"));
                i.running = false;
                e(o).each(function () {
                    if (e(this).is("a")) {
                        e(this).css("display", "none")
                    }
                });
                if (e(o[i.currentSlide]).is("a")) {
                    e(o[i.currentSlide]).css("display", "block")
                }
                if (f === "" && !i.paused && !r.manualAdvance) {
                    f = setInterval(function () {
                        d(s, o, r, false)
                    }, r.pauseTime)
                }
                r.afterChange.call(this)
            });
            var h = function (t, n, r) {
                if (e(r.currentImage).parent().is("a"))e(r.currentImage).parent().css("display", "block");
                e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility", "hidden").show();
                var i = e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").parent().is("a") ? e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").parent().height() : e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").height();
                for (var s = 0; s < n.slices; s++) {
                    var o = Math.round(t.width() / n.slices);
                    if (s === n.slices - 1) {
                        t.append(e('<div class="nivo-slice" name="' + s + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block !important; top:0; left:-" + (o + s * o - o) + 'px;" /></div>').css({
                            left: o * s + "px",
                            width: t.width() - o * s + "px",
                            height: i + "px",
                            opacity: "0",
                            overflow: "hidden"
                        }))
                    } else {
                        t.append(e('<div class="nivo-slice" name="' + s + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block !important; top:0; left:-" + (o + s * o - o) + 'px;" /></div>').css({
                            left: o * s + "px",
                            width: o + "px",
                            height: i + "px",
                            opacity: "0",
                            overflow: "hidden"
                        }))
                    }
                }
                e(".nivo-slice", t).height(i);
                u.stop().animate({height: e(r.currentImage).height()}, n.animSpeed)
            };
            var p = function (t, n, r) {
                if (e(r.currentImage).parent().is("a"))e(r.currentImage).parent().css("display", "block");
                e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility", "hidden").show();
                var i = Math.round(t.width() / n.boxCols), s = Math.round(e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").height() / n.boxRows);
                for (var o = 0; o < n.boxRows; o++) {
                    for (var a = 0; a < n.boxCols; a++) {
                        if (a === n.boxCols - 1) {
                            t.append(e('<div class="nivo-box" name="' + a + '" rel="' + o + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block; top:-" + s * o + "px; left:-" + i * a + 'px;" /></div>').css({
                                opacity: 0,
                                left: i * a + "px",
                                top: s * o + "px",
                                width: t.width() - i * a + "px"
                            }));
                            e('.nivo-box[name="' + a + '"]', t).height(e('.nivo-box[name="' + a + '"] img', t).height() + "px")
                        } else {
                            t.append(e('<div class="nivo-box" name="' + a + '" rel="' + o + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block; top:-" + s * o + "px; left:-" + i * a + 'px;" /></div>').css({
                                opacity: 0,
                                left: i * a + "px",
                                top: s * o + "px",
                                width: i + "px"
                            }));
                            e('.nivo-box[name="' + a + '"]', t).height(e('.nivo-box[name="' + a + '"] img', t).height() + "px")
                        }
                    }
                }
                u.stop().animate({height: e(r.currentImage).height()}, n.animSpeed)
            };
            var d = function (t, n, r, i) {
                var s = t.data("nivo:vars");
                if (s && s.currentSlide === s.totalSlides - 1) {
                    r.lastSlide.call(this)
                }
                if ((!s || s.stop) && !i) {
                    return false
                }
                r.beforeChange.call(this);
                if (!i) {
                    u.attr("src", s.currentImage.attr("src"))
                } else {
                    if (i === "prev") {
                        u.attr("src", s.currentImage.attr("src"))
                    }
                    if (i === "next") {
                        u.attr("src", s.currentImage.attr("src"))
                    }
                }
                s.currentSlide++;
                if (s.currentSlide === s.totalSlides) {
                    s.currentSlide = 0;
                    r.slideshowEnd.call(this)
                }
                if (s.currentSlide < 0) {
                    s.currentSlide = s.totalSlides - 1
                }
                if (e(n[s.currentSlide]).is("img")) {
                    s.currentImage = e(n[s.currentSlide])
                } else {
                    s.currentImage = e(n[s.currentSlide]).find("img:first")
                }
                if (r.controlNav) {
                    e("a", s.controlNavEl).removeClass("active");
                    e("a:eq(" + s.currentSlide + ")", s.controlNavEl).addClass("active")
                }
                a(r);
                e(".nivo-slice", t).remove();
                e(".nivo-box", t).remove();
                var o = r.effect, f = "";
                if (r.effect === "random") {
                    f = new Array("sliceDownRight", "sliceDownLeft", "sliceUpRight", "sliceUpLeft", "sliceUpDown", "sliceUpDownLeft", "fold", "fade", "boxRandom", "boxRain", "boxRainReverse", "boxRainGrow", "boxRainGrowReverse");
                    o = f[Math.floor(Math.random() * (f.length + 1))];
                    if (o === undefined) {
                        o = "fade"
                    }
                }
                if (r.effect.indexOf(",") !== -1) {
                    f = r.effect.split(",");
                    o = f[Math.floor(Math.random() * f.length)];
                    if (o === undefined) {
                        o = "fade"
                    }
                }
                if (s.currentImage.attr("data-transition")) {
                    o = s.currentImage.attr("data-transition")
                }
                s.running = true;
                var l = 0, c = 0, d = "", m = "", g = "", y = "";
                if (o === "sliceDown" || o === "sliceDownRight" || o === "sliceDownLeft") {
                    h(t, r, s);
                    l = 0;
                    c = 0;
                    d = e(".nivo-slice", t);
                    if (o === "sliceDownLeft") {
                        d = e(".nivo-slice", t)._reverse()
                    }
                    d.each(function () {
                        var n = e(this);
                        n.css({top: "0px"});
                        if (c === r.slices - 1) {
                            setTimeout(function () {
                                n.animate({opacity: "1.0"}, r.animSpeed, "", function () {
                                    t.trigger("nivo:animFinished")
                                })
                            }, 100 + l)
                        } else {
                            setTimeout(function () {
                                n.animate({opacity: "1.0"}, r.animSpeed)
                            }, 100 + l)
                        }
                        l += 50;
                        c++
                    })
                } else if (o === "sliceUp" || o === "sliceUpRight" || o === "sliceUpLeft") {
                    h(t, r, s);
                    l = 0;
                    c = 0;
                    d = e(".nivo-slice", t);
                    if (o === "sliceUpLeft") {
                        d = e(".nivo-slice", t)._reverse()
                    }
                    d.each(function () {
                        var n = e(this);
                        n.css({bottom: "0px"});
                        if (c === r.slices - 1) {
                            setTimeout(function () {
                                n.animate({opacity: "1.0"}, r.animSpeed, "", function () {
                                    t.trigger("nivo:animFinished")
                                })
                            }, 100 + l)
                        } else {
                            setTimeout(function () {
                                n.animate({opacity: "1.0"}, r.animSpeed)
                            }, 100 + l)
                        }
                        l += 50;
                        c++
                    })
                } else if (o === "sliceUpDown" || o === "sliceUpDownRight" || o === "sliceUpDownLeft") {
                    h(t, r, s);
                    l = 0;
                    c = 0;
                    var b = 0;
                    d = e(".nivo-slice", t);
                    if (o === "sliceUpDownLeft") {
                        d = e(".nivo-slice", t)._reverse()
                    }
                    d.each(function () {
                        var n = e(this);
                        if (c === 0) {
                            n.css("top", "0px");
                            c++
                        } else {
                            n.css("bottom", "0px");
                            c = 0
                        }
                        if (b === r.slices - 1) {
                            setTimeout(function () {
                                n.animate({opacity: "1.0"}, r.animSpeed, "", function () {
                                    t.trigger("nivo:animFinished")
                                })
                            }, 100 + l)
                        } else {
                            setTimeout(function () {
                                n.animate({opacity: "1.0"}, r.animSpeed)
                            }, 100 + l)
                        }
                        l += 50;
                        b++
                    })
                } else if (o === "fold") {
                    h(t, r, s);
                    l = 0;
                    c = 0;
                    e(".nivo-slice", t).each(function () {
                        var n = e(this);
                        var i = n.width();
                        n.css({top: "0px", width: "0px"});
                        if (c === r.slices - 1) {
                            setTimeout(function () {
                                n.animate({width: i, opacity: "1.0"}, r.animSpeed, "", function () {
                                    t.trigger("nivo:animFinished")
                                })
                            }, 100 + l)
                        } else {
                            setTimeout(function () {
                                n.animate({width: i, opacity: "1.0"}, r.animSpeed)
                            }, 100 + l)
                        }
                        l += 50;
                        c++
                    })
                } else if (o === "fade") {
                    h(t, r, s);
                    m = e(".nivo-slice:first", t);
                    m.css({width: t.width() + "px"});
                    m.animate({opacity: "1.0"}, r.animSpeed * 2, "", function () {
                        t.trigger("nivo:animFinished")
                    })
                } else if (o === "slideInRight") {
                    h(t, r, s);
                    m = e(".nivo-slice:first", t);
                    m.css({width: "0px", opacity: "1"});
                    m.animate({width: t.width() + "px"}, r.animSpeed * 2, "", function () {
                        t.trigger("nivo:animFinished")
                    })
                } else if (o === "slideInLeft") {
                    h(t, r, s);
                    m = e(".nivo-slice:first", t);
                    m.css({width: "0px", opacity: "1", left: "", right: "0px"});
                    m.animate({width: t.width() + "px"}, r.animSpeed * 2, "", function () {
                        m.css({left: "0px", right: ""});
                        t.trigger("nivo:animFinished")
                    })
                } else if (o === "boxRandom") {
                    p(t, r, s);
                    g = r.boxCols * r.boxRows;
                    c = 0;
                    l = 0;
                    y = v(e(".nivo-box", t));
                    y.each(function () {
                        var n = e(this);
                        if (c === g - 1) {
                            setTimeout(function () {
                                n.animate({opacity: "1"}, r.animSpeed, "", function () {
                                    t.trigger("nivo:animFinished")
                                })
                            }, 100 + l)
                        } else {
                            setTimeout(function () {
                                n.animate({opacity: "1"}, r.animSpeed)
                            }, 100 + l)
                        }
                        l += 20;
                        c++
                    })
                } else if (o === "boxRain" || o === "boxRainReverse" || o === "boxRainGrow" || o === "boxRainGrowReverse") {
                    p(t, r, s);
                    g = r.boxCols * r.boxRows;
                    c = 0;
                    l = 0;
                    var w = 0;
                    var E = 0;
                    var S = [];
                    S[w] = [];
                    y = e(".nivo-box", t);
                    if (o === "boxRainReverse" || o === "boxRainGrowReverse") {
                        y = e(".nivo-box", t)._reverse()
                    }
                    y.each(function () {
                        S[w][E] = e(this);
                        E++;
                        if (E === r.boxCols) {
                            w++;
                            E = 0;
                            S[w] = []
                        }
                    });
                    for (var x = 0; x < r.boxCols * 2; x++) {
                        var T = x;
                        for (var N = 0; N < r.boxRows; N++) {
                            if (T >= 0 && T < r.boxCols) {
                                (function (n, i, s, u, a) {
                                    var f = e(S[n][i]);
                                    var l = f.width();
                                    var c = f.height();
                                    if (o === "boxRainGrow" || o === "boxRainGrowReverse") {
                                        f.width(0).height(0)
                                    }
                                    if (u === a - 1) {
                                        setTimeout(function () {
                                            f.animate({
                                                opacity: "1",
                                                width: l,
                                                height: c
                                            }, r.animSpeed / 1.3, "", function () {
                                                t.trigger("nivo:animFinished")
                                            })
                                        }, 100 + s)
                                    } else {
                                        setTimeout(function () {
                                            f.animate({opacity: "1", width: l, height: c}, r.animSpeed / 1.3)
                                        }, 100 + s)
                                    }
                                })(N, T, l, c, g);
                                c++
                            }
                            T--
                        }
                        l += 100
                    }
                }
            };
            var v = function (e) {
                for (var t, n, r = e.length; r; t = parseInt(Math.random() * r, 10), n = e[--r], e[r] = e[t], e[t] = n);
                return e
            };
            var m = function (e) {
                if (this.console && typeof console.log !== "undefined") {
                    console.log(e)
                }
            };
            this.stop = function () {
                if (!e(t).data("nivo:vars").stop) {
                    e(t).data("nivo:vars").stop = true;
                    m("Stop Slider")
                }
            };
            this.start = function () {
                if (e(t).data("nivo:vars").stop) {
                    e(t).data("nivo:vars").stop = false;
                    m("Start Slider")
                }
            };
            r.afterLoad.call(this);
            return this
        };
        e.fn.nivoSlider = function (n) {
            return this.each(function (r, i) {
                var s = e(this);
                if (s.data("nivoslider")) {
                    return s.data("nivoslider")
                }
                var o = new t(this, n);
                s.data("nivoslider", o)
            })
        };
        e.fn.nivoSlider.defaults = {
            effect: "random",
            slices: 15,
            boxCols: 8,
            boxRows: 4,
            animSpeed: 500,
            pauseTime: 3e3,
            startSlide: 0,
            directionNav: true,
            controlNav: true,
            controlNavThumbs: false,
            pauseOnHover: true,
            manualAdvance: false,
            prevText: "Prev",
            nextText: "Next",
            randomStart: false,
            beforeChange: function () {
            },
            afterChange: function () {
            },
            slideshowEnd: function () {
            },
            lastSlide: function () {
            },
            afterLoad: function () {
            }
        };
        e.fn._reverse = [].reverse
    })(jQuery);
});
