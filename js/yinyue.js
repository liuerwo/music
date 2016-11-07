$(function () {

    var database = [
        {
            id: "0",
            songs: "幸福的错觉",
            name: "任重",
            src: "mp3/幸福的错觉.mp3",
            alltime: "4:36",
            photo: "img/t1.jpg",
            lei: "t1",
            lyrics: "祝福明天</br>我不该就这样走远</br>假设了千万遍</br>又如何能改变</br>我们的这些天</br>我回想你的脸怎么说再见<br><br>画面冻结在一瞬间<br>时间留下了无解的思念<br>回忆敌不过<br>距离的遥远<br>那些往昔<br>如童话般美丽的记忆<br>如今却已散落一地<br>怎样才可以<br>说服了我自己<br>我们拥有的曾经<br>并不算爱情<br>为什么忽然间<br>我差一点相信<br>完美的结局<br>属于我和你<br>怎样才可以<br>说服了我自己<br>彻底把过去<br>在心底抹去<br>如果说那幸福<br>不过都是错觉<br>为何有微笑<br>留在照片里<br>时间留下了无解的思念<br>回忆敌不过<br>距离的遥远<br>那些往昔<br>如童话般美丽的记忆<br>如今却已散落一地<br>怎样才可以<br>说服了我自己<br>我们拥有的曾经<br>并不算爱情<br>为什么忽然间<br>我差一点相信<br>完美的结局<br>属于我和你<br>怎样才可以<br>说服了我自己<br>彻底把过去<br>在心底抹去<br>如果说那幸福<br>不过都是错觉<br>为何有微笑<br>留在照片里"
        },
        {
            id: "1",
            songs: "阴天",
            name: "莫文蔚",
            src: "mp3/阴天.mp3",
            alltime: "4:02",
            photo: "img/t2.jpg",
            lei: "t2",
            lyrics: "阴天在不开灯的房间<br>当所有思绪都一点一点沉淀<br>爱情究竟是精神鸦片<br>还是世纪末的无聊消遣<br>香烟 氲成一滩光圈<br>和他的照片就摆在手边<br>傻傻两个人　笑的多甜<br>开始总是分分钟都妙不可言<br>谁都以为热情它永不会减<br>除了激情褪去后的那一点点倦<br>也许像谁说过的贪得无厌<br>活该应了谁说过的不知检点<br>总之那几年 感性赢了理性的那一面 <br>阴天 在不开灯的房间<br>当所有思绪都一点一点沉淀<br>爱恨情欲里的疑点<br>盲点 呼之欲出　那么明<br>女孩 通通让到一<br>这歌里的细微末节就算都体验<br>若想真明白　真要好几年<br>回想那一天 <br>喧闹的喜宴<br>耳边响起的究竟是序曲或完结篇<br>感情不就是你情我愿<br>最好爱恨扯平两不相欠<br>感情说穿了 <br>一人挣脱的 <br>一人去捡<br>男人大可不必百口莫辩<br>女人实在无须楚楚可怜<br>总之那几年 <br>你们两个没有缘<br>阴天&nbsp在不开灯的房间<br>当所有思绪都一点一点沉淀<br>爱情究竟是精神鸦片<br>还是世纪末的无聊消遣<br>香烟氲成一滩光圈<br>和他的照片就摆在手边<br>傻傻两个人&nbsp笑的多甜<br>傻傻两个人&nbsp笑的多甜"
        },
        {
            id: "2",
            songs: "背影",
            name: "林宥嘉",
            src: "mp3/背影.mp3",
            alltime: "5:54",
            photo: "img/t3.jpg",
            lei: "t3",
            lyrics: "三公分阳光<br>三公分空气<br>堵在眼前像一面<br>玻璃<br> 挡住了你表情<br>剩下<br>只有脚印<br>一直向前走<br>走不完距离<br>一直想后退不出回忆<br>很高兴有心事 帮我困住自己 <br>你头发上淡淡青草香<br>变成了风才能和我相<br>你的目光 蒸发成<br>再下成雨我才能够靠近 <br>感谢我不可以 住进你的眼睛<br>所以才能 拥抱你的背影<br>有再多的遗憾 用来牢牢记住<br>不完美 的所有美丽<br>感谢我不可以 拥抱你的背影<br>所以才能 变成你的背影<br>躲在安静角落 不用你回头看<br>不用珍惜 <br>我怀里所有温暖的空<br>变成风也不敢和你相<br>我的心事 蒸发成<br>再下成雨却舍不得淋湿你 <br>感谢我不可以 住进你的眼睛<br>所以才能 拥抱你背影<br>有再多的遗憾 用来牢牢记住<br>不完美 的所有美丽<br>感谢我不可以 拥抱你的背影<br>所以才能 变成你的背影<br>躲在安静角落 不用你回头看<br>不用珍惜 <br>感谢我不可以 拥抱你的背<br>所以才能 变成你的背<br>躲在安静角落 如果你回头<br>不用在意"
        },
        {
            id: "3",
            songs: "红玫瑰",
            name: "陈奕迅",
            src: "mp3/红玫瑰.mp3",
            alltime: "4:00",
            photo: "img/t4.jpg",
            lei: "t4",
            lyrics: "梦里梦到醒不来的梦<br>红线里被软禁的红<br>所有刺激剩下疲乏的痛<br>再无动于衷<br>从背后抱你的时候<br>期待的却是她的面容<br>说来实在嘲讽<br>我不太懂 <br>偏渴望你懂<br>是否幸福轻得太沉重<br>过度使用不痒不痛<br>烂熟透红空洞了的瞳孔<br>终于掏空<br>终于有始无终<br>     得不到的永远在骚动<br>被偏爱的<br>都有恃无恐<br>玫瑰的红<br>容易受伤的梦"
        },
        {
            id: "4",
            songs: "初爱",
            name: "杨宗纬",
            src: "mp3/初爱.mp3",
            alltime: "3:53",
            photo: "img/t2.jpg",
            lei: "t5",
            lyrics: "作曲木村充利<br>作词黄婷<br>永远感激<br> 你狂奔过操场<br>来到我眼前<br>阳光灿烂<br>烫红了你双颊<br>温暖你笑靥<br>那时节<br>黄澄澄的落叶<br>铺满整条街<br>下课钟声<br>荡过悠悠岁月<br>长大后<br>世界像一张网<br>网住我们的翅膀<br>回忆<br>沉甸甸在心上<br>偶尔<br>轻声独唱<br>是否能找回消失的力量<br>想起了初爱<br>想起最初的梦已不在"
        }
    ];
    //绘制列表
    var index;
    var geici = function () {
        $(database).each(function (i, v) {
            $('<li><div class=id>' + v.id + '</div><div class=songs>' + v.songs + '</div><div class=name>' + v.name + '</div><div class=alltime>' + v.alltime + '</div><div class="shouc"></div></li>').appendTo('.liebiao .list')
        });
        index = 0;
    };
    geici();

    var audio = $('audio').get(0);
    var bofang = $('.bofang');
    var yinbiao = $('.yinbiao');
    //点击暂停点击播放
    $('.bofang').on('click', function () {
        if (audio.paused) {
            audio.play();
            $('.gecibox').addClass('dong');
            $('.touxiang').addClass('zhuan');
            bofang.removeClass('fang').addClass('ting');
        } else {
            audio.pause();
            $('.gecibox').removeClass('dong');
            $('.touxiang').removeClass('zhuan');
            bofang.removeClass('ting').addClass('fang');
        }
    })
    //点击静音
    var liang
    yinbiao.on('click', function () {
        if (audio.volume) {
            liang = audio.volume;
            audio.volume = 0;
            $('.yinbiao').addClass('jing')
        } else {
            audio.volume = liang;
            $('.yinbiao').removeClass('jing')
        }
    });
    //定义函数转换时长
    var format = function (v) {
        var m = parseInt(v / 60);
        var s = parseInt(v % 60) > 9 ? parseInt(v % 60) : "0" + parseInt(v % 60);
        return m + ":" + s;
    };
    //歌曲在播放过程中会一直调用这个函数改变已经播放时长，变色条长度。
    $(audio).on('timeupdate', function () {
        $('.zongshichang').text(format(audio.duration));
        $('.bofangshichang').text(format(audio.currentTime));
    
        $('.jindu .jindutiao .yuan').css('left', (audio.currentTime / audio.duration) * $('.jindu .jindutiao').width() - 8);
        $('.jindu .jindutiao .biansetiao').css('width', (audio.currentTime / audio.duration) * $('.jindu .jindutiao').width() - 8)
    });
//当音量改变时调用这个函数
    $(audio).on('volumechange', function () {
        $('.yinliang .jindutiao .yuan').css('left', (audio.volume * $('.yinliang .jindutiao').width() - 8));
        $('.yinliang .jindutiao .biansetiao').css('width', (audio.volume * $('.yinliang .jindutiao').width() - 8));
    });

    $('.jindu .jindutiao').on('click', function (e) {
        //audio.currentTime = audio.duration *( e.offsetX/$(this).width())调试
        audio.currentTime = audio.duration * ((e.offsetX - $(this).find('.yuan').width() / 2) / $(this).width());
        $('.jindu .jindutiao .yuan').css({
            left: audio.currentTime / audio.duration * $('.jindu .jindutiao').width()
        })
    });
    $('.yinliang .jindutiao').on('click', function (e) {
        audio.volume = 1 * ((e.offsetX - $(this).find('.yuan').width() / 2) / $(this).width());
        $('.yinliang .jindutiao .yuan').css({
            left: audio.currentTime / audio.duration * $('.yinliang .jindutiao').width()
        })
    });
    
    
    // 圆点移动
    $(document).on('mousedown',false);
    $(".jindu .jindutiao .yuan").on("mousedown",function(e){
        var px=$(this).offsetParent().offset().left;
        var w=e.offsetX;
        // console.log(w)
        console.log(px);
        $(document).on("mousemove",function(e){
            var ow=e.clientX;
            console.log(ow);
            if( (ow-px-w) >$(".jindu .jindutiao").width() ){
                return
            }
            audio.currentTime =audio.duration* (( ow-px-w )/$(".jindu .jindutiao").width());
            $(document).on("mouseup",function(){
                $(document).off("mousemove");   //移除事件处理函数mousemove
                $(document).off("mouseup");   //移除事件处理函数mouseup
            })
        })
    });
    
    
    
    //循环变成单曲
    $('.xunhuan').on('click', function () {
        $(this).toggleClass('dan');

        $(audio).on('ended', function () {
            index++;
            index--;
            audio.src = database[index].src;
            audio.play();
            $('h1').text(database[index].songs);
            $('.touxiang').removeClass('t1').removeClass('t2').removeClass('t3').removeClass('t4').removeClass('t5').addClass(database[index].lei);
            $('.gecibox').addClass('dong');
            $('.gecibox').html("<h1>" + database[index].songs + "</h1>" + database[index].lyrics);
            $('.touxiang').addClass('zhuan');
            bofang.removeClass('fang').addClass('ting');
        })

    });
    //点击弹出歌词和列表
    $('.liebiaobtn').on('click', function () {
        $('.liebiao').toggleClass('yin');
        $('.geci').addClass('yin')
    });
    $('.ci').on('click', function () {
        $('.geci').toggleClass('yin');
        $('.liebiao').addClass('yin');
    });
    //点击收藏
    $('.shouc').on('click', function () {
        $(this).toggleClass('hover')
    });
    // ........点击上一首，下一首。。。。。
    $('.xiayishou').on('click', function () {
        index++;
        if (index == database.length) {
            index = 0;
        }
        audio.src = database[index].src;
        audio.play();
        $('h1').text(database[index].songs);
        $('.touxiang').removeClass('t1').removeClass('t2').removeClass('t3').removeClass('t4').removeClass('t5').addClass(database[index].lei);
        $('.gecibox').addClass('dong');
        $('.gecibox').html("<h1>" + database[index].songs + "</h1>" + database[index].lyrics);
        $('.touxiang').addClass('zhuan');
        bofang.removeClass('fang').addClass('ting');
        console.log(index);
    });
    $('.shangyishou').on('click', function () {
        index--;
        if (index < 0) {
            index = database.length - 1
        }
        audio.src = database[index].src;
        // $('h1').text(database[index].songs);
        $('.touxiang').removeClass('t1').removeClass('t2').removeClass('t3').removeClass('t4').removeClass('t5').addClass(database[index].lei);
        audio.play();
        $('.gecibox').html("<h1>" + database[index].songs + "</h1>" + database[index].lyrics);
        $('.gecibox').addClass('dong');
        $('.touxiang').addClass('zhuan');
        bofang.removeClass('fang').addClass('ting');
        console.log(index);
    })
    //一首完后播放下一首
    $(audio).on('ended', function () {
        index++;
        if (index == database.length) {
            index = 0;
        }
        audio.src = database[index].src;
        audio.play();
        $('h1').text(database[index].songs);
        $('.touxiang').removeClass('t1').removeClass('t2').removeClass('t3').removeClass('t4').removeClass('t5').addClass(database[index].lei);
        $('.gecibox').addClass('dong');
        $('.gecibox').html("<h1>" + database[index].songs + "</h1>" + database[index].lyrics);
        $('.touxiang').addClass('zhuan');
        bofang.removeClass('fang').addClass('ting');
    })
});