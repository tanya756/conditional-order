// ========= vue版  function ==============================================================================================================================
var Function = {
    data() {
        return {
            Options: {
				slidesToShow: 4,
				slidesToScroll: 4,
                autoplay: true,
                pauseOnHover: false,
                // dots: true,
                infinite: true,
                autoplaySpeed: 5000,
				speed: 500,
				adaptiveHeight: true,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
				],
            },
        };
    },
    methods: {
        next() {
            this.$refs..next();
        },

        prev() {
            this.$refs..prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs..re();
            });
        },

        // Events listeners
        handleAfterChange(event, , currentSlide) {
            // console.log('handleAfterChange', event, , currentSlide);
        },
        handleBeforeChange(event, , currentSlide, nextSlide) {
            // console.log('handleBeforeChange', event, , currentSlide, nextSlide);
        },
        handleBreakpoint(event, , breakpoint) {
            // console.log('handleBreakpoint', event, , breakpoint);
        },
        handleDestroy(event, ) {
            // console.log('handleDestroy', event, );
        },
        handleEdge(event, , direction) {
            // console.log('handleEdge', event, , direction);
        },
        handleInit(event, ) {
            // console.log('handleInit', event, );
        },
        handleReInit(event, ) {
            // console.log('handleReInit', event, );
        },
        handleSetPosition(event, ) {
            // console.log('handleSetPosition', event, );
        },
        handleSwipe(event, , direction) {
            // console.log('handleSwipe', event, , direction);
        },
        handleLazyLoaded(event, , image, imageSource) {
            // console.log('handleLazyLoaded', event, , image, imageSource);
        },
        handleLazeLoadError(event, , image, imageSource) {
            // console.log('handleLazeLoadError', event, , image, imageSource);
        },
    },
};

// ========= app ==============================================================================================================================
const app = Vue.createApp({
    mixins: [Function],
    data(){
        return{
            name: "凱基證券",
            screenWidth: document.body.clientWidth,
            screenHeight: document.body.clientHeight,
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            thisPath: location.protocol + "//" + location.host,
            menuBtnActive: false,
            navbarShow: false,
            activeNumber: 0
        };
    },
    components: {
        // fund: httpVueLoader(
        //     "js/fund.vue"
        // ),
    },
    mounted() {
        this.signature();
        this.addNoOpener();
        // this.useJq();
        this.showTarget();
        this.topBtn();
        // this.scrollMagic();
        this.getQueryStringToNext();

        // this.sameHeight("notSureWhatItIs2-item-bg");
        // setTimeout(() => {
        //     this.sameHeight('notSureWhatItIs2-item-bg');
        // }, 1000);

        $(window).resize(() => {
            this.windowWidth = $(window).innerWidth();
            this.windowHeight = $(window).innerHeight();

            // this.sameHeight('notSureWhatItIs2-item-bg');
        });

        // this.countToNumber1($('.assets1Num'), 1.5, '', 2500);
        // this.countToNumber2($('.assets2Num'), 1500000000000, '', 2500);
        // this.getPosSetCountToNumber();

        // window.addEventListener('mousemove', e => {
        //     this.setMoneyPos();
        // });
        // window.addEventListener('deviceorientation', e => {
        //     this.setMoneyPos2();
        // });

        // setInterval(() => {
        //     this.tab1.push('tab1')
        // }, 2000)

        // this.countUp();

        // AOS
        this.$nextTick(function () {
            AOS.init({
                duration: 1000,
                offset: this.windowWidth > 768 ? 400 : 200,
                delay: 100,
            });
        });

        window.addEventListener("scroll",()=> {
            if(this.windowWidth > 0){
                this.scrollspy();
            }
        });
    },
    methods:{
        signature() {
            console.log(
                "%cMade by Captain%c2024/01%cVue3",
                "color: #fff; border-radius: 5px; background: #1a4f9c; padding: 2px 10px; font-weight: bold;",
                "color: #000; border-radius: 5px; background: #ffde00; padding: 2px 10px; margin: 0px 5px;",
                "color: #fff; border-radius: 5px; background: #42b883; padding: 2px 10px; margin: 0px 5px;"
            );
        },
        toggleModal(name) {
            this.$refs[name].toggle = !this.$refs[name].toggle;
        },
        sameHeight(name) {
            let item = $("." + name),
                itemLeight = item.length,
                giftItemHeight = [];

            item.removeAttr("style");

            for (let n = 0; n < itemLeight; n++) {
                giftItemHeight[n] = item.eq(n).innerHeight();
            }
            let height = Math.max.apply(null, giftItemHeight);
            item.css("height", height);
        },
        addNoOpener() {
            // 資安用  target="_blank" 加 rel="nofollow me noopener noreferrer"
            var _linkHasTargetBlank = $('a[target="_blank"]');
            for (var n = 0; n < _linkHasTargetBlank.length; n++) {
                // 如果要連的網址跟這網站網域不同  加[rel="nofollow me noopener noreferrer"]
                _linkHasTargetBlank.eq(n).attr("href").indexOf(this.thisPath)
                    ? _linkHasTargetBlank
                          .eq(n)
                          .attr("rel", "nofollow me noopener noreferrer")
                    : "";
            }
        },
        showTarget() {
            // 抓網址參數判斷要馬上顯示的區塊
            var url = location.href,
                i,
                openInfo = "";

            if (url.indexOf("?") != -1) {
                // 抓取網址參數判斷 --- Start
                function getUrlParams(url) {
                    // 回傳網址參數Object
                    var params = {};
                    (url + "?")
                        .split("?")[1]
                        .split("&")
                        .forEach(function (pair) {
                            pair = (pair + "=")
                                .split("=")
                                .map(decodeURIComponent);
                            if (pair[0].length) {
                                params[pair[0]] = pair[1];
                            }
                        });
                    return params;
                }

                var obj = getUrlParams(location.href);
                // 因為#hash會直接串在最後一個參數後面, 故需要取代處理
                if (Object.keys(obj).length && obj.hasOwnProperty("openInfo"))
                    openInfo =
                        obj.openInfo.indexOf("#") > -1
                            ? obj.openInfo.replace(location.hash, "")
                            : obj.openInfo;
                // 抓取網址參數判斷 --- End

                // 2020-11-26 Jeffery 修正openInfo空值在jQuery的錯誤
                if (openInfo && $("#" + openInfo).length > 0) {
                    setTimeout(() => {
                        var targetOffset = $("#" + openInfo).offset().top;
                        window.scrollTo(0, targetOffset);
                        console.log(openInfo, targetOffset);
                    }, 500);
                    // setTimeout(()=>{
                    // 	this.$scrollTo('#' + openInfo);
                    // }, 500)
                }
                /*
                    例 /index.html?openInfo=q1
                */
            }
        },
        topBtn() {
            $(window)
                .bind("scroll resize", function () {
                    var $this = $(this);
                    var $this_Top = $this.scrollTop();

                    //當高度小於100時，關閉區塊
                    if ($this_Top < 100) {
                        $(".topBtn").stop().css({
                            transform: "matrix(1, 0, 0, 1, 0, 400)",
                            opacity: 0,
                        });
                    }
                    if ($this_Top > 100) {
                        $(".topBtn").stop().css({
                            transform: "matrix(1, 0, 0, 1, 0, 0)",
                            opacity: 1,
                        });
                    }
                })
                .scroll();
        },
        toThousands(num) {
            // 錢加逗號
            return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, `$1,`);
        },
        delHtmlTag(info) {
            // 剔除htmlCode 只留文字
            String.prototype.stripHTML = function () {
                var reTag = /<(?:.|\s)*?>/g;
                return this.replace(reTag, "");
            };
            return info.stripHTML();
        },
        countUp() {
            // 數字遞增動畫
            let domPos = document.getElementById("crownArea").offsetTop;

            var options={
                useEasing: true,  // 過渡動畫效果，默認ture
                useGrouping: true,  // 千分位效果，例：1000->1,000。默認true
                separator: ',',   // 使用千分位時分割符號
                decimal: '.',   // 小數位分割符號
                prefix: '',    // 前置符號
                suffix: ''    // 後置符號，可漢字
            }

            // dom節點, 初始值,  結束值, 小數位數, 過渡幾秒 , 初始參數
            var num1 = new CountUp('num1', 0, 1.4, 1, 5, options);
            var num2 = new CountUp('num2', 0, 75, 0, 5, options);
            var num3 = new CountUp('num3', 0, 284, 0, 5, options);

            $(window).scroll(function () {
                var scrollVal = $(this).scrollTop();
                if (scrollVal >= domPos) {
                    num1.start();
                    num2.start();
                    num3.start();
                }
            });
        },

        //-------------------------------------網頁載入後將網址後的參數加到href中，如果href本來就有參數，就把參數也加上去
        getQueryStringToNext() {
            window.onload = function() {
                var query = window.location.search.slice(1);
                var links = document.querySelectorAll("a:not(.dontAddString)");
            
                if(query != '') {
                    for (var i = 0; i < links.length; i++) {
                        var hrefValue = links[i].getAttribute("href");
                
                        if (hrefValue && !hrefValue.startsWith("#") && !hrefValue.startsWith("javascript:")) {
                            if (hrefValue.includes("?")) {
                                // 如果 href 包含問號，將問號後的參數合併到目前網頁的參數後面
                                var hrefParts = hrefValue.split("?");
                                links[i].setAttribute(String.fromCharCode(104, 114, 101, 102), hrefParts[0] + "?" + query + "&" + hrefParts[1]);
                                // console.log('1');
                            }else {
                                links[i].setAttribute(String.fromCharCode(104, 114, 101, 102), hrefValue + "?" + query);
                                // console.log('3');
                            }
                        }
                    }
                }
            };
        },

        //-------------------------------------navbar
        toggleMobileNavbar() {
            this.menuBtnActive === false
                ? (this.menuBtnActive = true)
                : (this.menuBtnActive = false);
            this.navbarShow === false
                ? (this.navbarShow = true)
                : (this.navbarShow = false);
        },
        hideMobileNavbar() {
            this.menuBtnActive = false;
            this.navbarShow = false;
        },
        navClick(no, hashName) {
            this.navbarShow = false;
        },

        //-------------------------------------使用jq區塊
        useJq() {
            
        },

        //-------------------------------------scrollMagic
        scrollMagic() {
            // // init controller
            // let controller = new ScrollMagic.Controller(),
            //     bannerTit = new TimelineMax();
            // // howToPickTimeLine = new TimelineMax(),

            // new ScrollMagic.Scene({
            //     triggerElement: ".banner",
            //     duration: 400,
            //     // offset: 0,
            // })
            //     .setTween(bannerTit)
            //     // .addIndicators({name: "1 (duration: 0)"})
            //     .addTo(controller);

            // bannerTit.add(
            //     TweenMax.from(".banner-tit-sTit", 5, {
            //         x: 50,
            //         y: -80,
            //     })
            // );
            TweenMax.from(".banner-kv", 1, {
                // rotationY: '180deg',
                opacity: 0,
                rotationZ: '-720deg',
                scale: 0
            });
            TweenMax.from(".banner-tit img", 1, {
                opacity: 0,
                rotationX: '270deg',
                // x: -200,
                scale: 0,
                delay: 0.4
            });
        },

        //-------------------------------------滑動滾軸選單scrollspy
        scrollspy() {
            window.addEventListener("scroll", function () {
                // const activeListItem = document.querySelector('.scrollspy-nav > li.active');
                // if (activeListItem) {
                //     activeListItem.classList.remove('active');
                // };

                // document.querySelector('.scrollspy-nav').scrollTo({
                //     top: 0,
                // });

                const sections = document.querySelectorAll(".item");
                const navbarLinks = document.querySelectorAll(".scrollspy-nav a");

                let currentSection = "";

                sections.forEach(function (section) {
                    const sectionTop = section.offsetTop;
                    // const sectionHeight = section.clientHeight;
                    const screenHeight = window.innerHeight;

                    // if (scrollY >= sectionTop - screenHeight / 3) {
                    if (scrollY >= sectionTop - 200) {
                        currentSection = section.getAttribute("id");
                    }
                });

                navbarLinks.forEach(function (link) {
                    link.parentElement.classList.remove("active");
                    if (link.getAttribute("href").slice(1) === currentSection) {
                        link.parentElement.classList.add("active");
                    }
                });


                //滾輪滑到.mainfunction才出現.scrollspy-nav。呼叫時慢慢顯現 
                const scrollspyNav = document.querySelector('.scrollspy-nav');
                const mainfunction = document.querySelector('.mainfunction');
                if (window.innerWidth >= 991 && mainfunction.getBoundingClientRect().top <= 0) {
                    scrollspyNav.classList.add('active'); // 添加active類
                    setTimeout(function() {
                        scrollspyNav.classList.add('show'); // 慢慢顯現
                    }, 100);
                } else if (window.innerWidth <= 991 && mainfunction.getBoundingClientRect().top <= 0) {
                    //scrollspyNav.style.display = 'flex'; // 顯示導覽欄
                    //crollspyNav.classList.add('active', 'show'); // 添加active和show類
                    scrollspyNav.classList.add('active'); // 添加active類
                    setTimeout(function() {
                        scrollspyNav.classList.add('show'); // 慢慢顯現
                    }, 100);
                } else {
                    scrollspyNav.classList.remove('active', 'show'); // 移除active和show類
                }



                const activeElement = document.querySelector('.scrollspy-nav >  li.active');
                const element = document.querySelector('.scrollspy-nav');
                if (activeElement) {
                    const topOffset = activeElement.getBoundingClientRect().top + element.scrollTop;
                
                    // 使用滾動動畫，以平滑滾動到頂部
                    setTimeout(()=>{
                        element.scrollTo({
                            top: topOffset - 30,
                            // behavior: 'smooth'
                        });
                    }, 1000)
                    // console.log(topOffset)
                };

            });

        },

        
    },
    watch: {
        screenWidth(val) {
            this.screenWidth = val;
        },
        screenHeight(val) {
            this.screenHeight = val;
        },
        windowWidth(val) {
            this.windowWidth = val;
        },
        windowHeight(val) {
            this.windowHeight = val;
        },
    },
});

// ========= 燈箱 ==============================================================================================================================
app.component("modal", {
    props: ["canClose"],
    data: function () {
        return {
            toggle: false,
            isFixedHeight: false,
        };
    },
    template: ` <transition name="modal">
					<div class="modal" v-if="toggle">
						<div class="modal-bg" @click="closeModal()" v-if="canClose == true"></div>
						<div class="modal-bg" v-if="canClose == false"></div>
						<div class="modal-container" :class="{fixedHeight: isFixedHeight}" ref="modalContainer" id="modalContainer">
							<div class="modal-close closeBtn" @click="closeModal()" v-if="canClose == true">
								<i class="fa fa-times" aria-hidden="true"></i>
							</div>
							<div class="modal-container-infoArea">
								<slot name="info"></slot>
							</div>
						</div>
					</div>
				</transition>`,
    methods: {
        closeModal() {
            this.toggle = false;
        },
    },
});

// ========= vue版  ==============================================================================================================================
app.component("", {
    props: {
        options: {
            type: Object,
            default: function () {
                return {};
            },
        },
    },
    mounted() {
        this.create();
    },
    destroyed: function () {
        $(this.$el).("un");
    },
    methods: {
        create: function () {
            const $ = $(this.$el);
            $.on("after-change", this.onAfterChange);
            $.on("before-change", this.onBeforeChange);
            $.on("breakpoint", this.onBreakpoint);
            $.on("destroy", this.onDestroy);
            $.on("edge", this.onEdge);
            $.on("init", this.onInit);
            $.on("reInit", this.onReInit);
            $.on("set-position", this.onSetPosition);
            $.on("swipe", this.onSwipe);
            $.on("lazyLoaded", this.onLazyLoaded);
            $.on("lazyLoadError", this.onLazyLoadError);
            $.(this.options);
        },
        destroy: function () {
            const $ = $(this.$el);
            $.off("after-change", this.onAfterChange);
            $.off("before-change", this.onBeforeChange);
            $.off("breakpoint", this.onBreakpoint);
            $.off("destroy", this.onDestroy);
            $.off("edge", this.onEdge);
            $.off("init", this.onInit);
            $.off("reInit", this.onReInit);
            $.off("set-position", this.onSetPosition);
            $.off("swipe", this.onSwipe);
            $.off("lazyLoaded", this.onLazyLoaded);
            $.off("lazyLoadError", this.onLazyLoadError);
            $(this.$el).("un");
        },
        re: function () {
            this.destroy();
            this.create();
        },
        next: function () {
            $(this.$el).("Next");
        },
        prev: function () {
            $(this.$el).("Prev");
        },
        pause: function () {
            $(this.$el).("Pause");
        },
        play: function () {
            $(this.$el).("Play");
        },
        goTo: function (index, dontAnimate) {
            $(this.$el).("GoTo", index, dontAnimate);
        },
        currentSlide: function () {
            return $(this.$el).("CurrentSlide");
        },
        add: function (element, index, addBefore) {
            $(this.$el).("Add", element, index, addBefore);
        },
        remove: function (index, removeBefore) {
            $(this.$el).("Remove", index, removeBefore);
        },
        filter: function (filterData) {
            $(this.$el).("Filter", filterData);
        },
        unfilter: function () {
            $(this.$el).("Unfilter");
        },
        getOption: function (option) {
            $(this.$el).("GetOption", option);
        },
        setOption: function (option, value, refresh) {
            $(this.$el).("SetOption", option, value, refresh);
        },
        setPosition: function () {
            $(this.$el).("set-position");
        },
        // Events
        onAfterChange: function (event, , currentSlide) {
            this.$emit("after-change", event, , currentSlide);
        },
        onBeforeChange: function (event, , currentSlide, nextSlide) {
            this.$emit("before-change", event, , currentSlide, nextSlide);
        },
        onBreakpoint: function (event, , breakpoint) {
            this.$emit("breakpoint", event, , breakpoint);
        },
        onDestroy: function (event, ) {
            this.$emit("destroy", event, );
        },
        onEdge: function (event, , direction) {
            this.$emit("edge", event, , direction);
        },
        onInit: function (event, ) {
            this.$emit("init", event, );
        },
        onReInit: function (event, ) {
            this.$emit("reInit", event, );
        },
        onSetPosition: function (event, ) {
            this.$emit("set-position", event, );
        },
        onSwipe: function (event, , direction) {
            this.$emit("swipe", event, , direction);
        },
        onLazyLoaded: function (event, , image, imageSource) {
            this.$emit("lazyLoaded", event, , image, imageSource);
        },
        onLazyLoadError: function (event, , image, imageSource) {
            this.$emit("lazyLoadError", event, , image, imageSource);
        },
    },
    template: ` <div>
                    <slot></slot>
                </div>`,
});

// ========= 社群分享 ==============================================================================================================================
app.component('shareLink', {
    data: function () {
        return {
            pageUrl: window.location.href,
            pageTitle: document.title,
        };
    },
    template: ` <div class="shareLink">
                    <ul class="shareLink-list">
                        <li>
                            分享<span v-if="$root.windowWidth < 992">：</span>
                        </li>
                        <li>
                            <a href="javascript:void(0)" title="複製網址" @click="copyUrl()">
                                <i class="fas fa-link"></i>
                            </a>
                        </li>
                        <li>
                            <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + pageUrl" title="分享到Facebook" target="_blank" class="dontAddString">
                                <i class="fab fa-facebook-square"></i>
                            </a>
                        </li>
                        <li>
                            <a :href="'http://line.naver.jp/R/msg/text/?' + pageTitle + ' ' + pageUrl" title="分享到LINE" target="_blank" class="dontAddString">
                                <i class="fab fa-line"></i>
                            </a>
                        </li>
                    </ul>
                    
                </div>`,
    methods: {
        //-------------------------------------複製網址
        copyUrl() {
            var temp = $('<input>'); // 建立input物件
            $('body').append(temp); // 將input物件增加到body
            var url = window.location.href; // 取得要複製的連結
            temp.val(url).select(); // 將連結加到input物件value
            document.execCommand('copy'); // 複製
            temp.remove(); // 移除input物件

            this.$root.toggleModal('copyUrlSuccess');
        }
    },
});

app.mount('#app');