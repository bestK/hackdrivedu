// ==UserScript==
// @name          车学堂自动提交人脸验证
// @namespace    kk
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://learn.drivedu.com.cn/course/index/*
// @grant        none
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...


    $('body').removeAttr("onblur");

    console.log('车学堂 hack 加载成功...')
    first();
    hook();
    var onAuth = true
    var t ="start";
    var e =1;
    var str = location.href;
    var index = str .lastIndexOf("\/");
    str  = str .substring(index + 1, str .length);
    var a = str.split('.')[0];
    // 人脸识别图片数据 base64 编码
    var s = "imgData"


    function first(){
        scaleImg('请手动配置你自己的 base64 编码的头像，并删除此处代码')
    }

    function collect_take_snapshot(t, e, a) {

        $.ajax({
            url: "/verify/authVerify",
            type: "POST",
            dataType: "json",
            async: !1,
            data: {
                mydata: s,
                type: 'start',
                val: 1,
                course_id: a
            },
            success: function (e) {
                if(e.code ===0){
                    scaleImg('已为您自动提交了人脸认证')
                    setTimeout(function(){$('.close').click()},2500)

                }else{
                    scaleImg(e.msg)

                }

            }
        })
    }


    function hook() {
        var f = onStart;         // 保存旧函数
        onStart = function() {   // 定义新函数
            collect_take_snapshot(t, e, a)
        }
    }


})();
