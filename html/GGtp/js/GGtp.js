$(function(){
    // 点击控制菜单隐藏显示--
    $("div.mLoo span").click(function(){
        // console.log(123)
        $("div.mLot").toggle();
        if($("div.mLoo span:nth-child(1)").hasClass("ac")){
            $("div.mLoo span:nth-child(1)").removeClass("ac");
        }else{
            $("div.mLoo span:nth-child(1)").addClass("ac");
        }
    });
    $("div.mLto span").click(function(){
        console.log(123)
        $("div.mLtt").toggle();
        if($("div.mLto span:nth-child(1)").hasClass("ac")){
            $("div.mLto span:nth-child(1)").removeClass("ac");
        }else{
            $("div.mLto span:nth-child(1)").addClass("ac");
        }
    });
    //点击切换股票外汇财经等
    $("div.mRto span").click(function(){
        $(this).addClass("ac").siblings().removeClass("ac");
        var id=$(this).attr("data-id");
        $(id).addClass("ac").siblings().removeClass("ac");
    });
    

    // 财经首页
    // 单张上传照片  删除照片
    $(" .fileinput1").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".csoo"));
        // console.log($("input.fileinput1").val());
    });

    var on =document.querySelector(".csoo");
    //    需要把阅读的文件传进来file element是把读取到的内容放入的容器

    // 财经宏观
    // 单张上传照片  删除照片
    $(" .fileinput2").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".chgoo"));
        // console.log($("input.fileinput2").val());
    });

    var on =document.querySelector(".chgoo");
    //    需要把阅读的文件传进来file element是把读取到的内容放入的容器

    // 财经基金
    // 单张上传照片  删除照片
    $(" .fileinput3").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".cjjoo"));
        // console.log($("input.fileinput3").val());
    });

    var on =document.querySelector(".cjjoo");
    //    需要把阅读的文件传进来file element是把读取到的内容放入的容器
    
    // 财经科创板
    // 单张上传照片  删除照片
    $(" .fileinput4").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".ckcoo"));
        // console.log($("input.fileinput4").val());
    });
    var on =document.querySelector(".ckcoo");
    //    需要把阅读的文件传进来file element是把读取到的内容放入的容器

    // 财经石油
    // 单张上传照片  删除照片
    $(" .fileinput5").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".csyoo"));
        // console.log($("input.fileinput4").val());
    });
    var on =document.querySelector(".csyoo");

    // 财经黄金
    // 单张上传照片  删除照片
    $(" .fileinput6").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".chjoo"));
        // console.log($("input.fileinput4").val());
    });
    var on =document.querySelector(".chjoo");

    // 财经新三板
    // 单张上传照片  删除照片
    $(" .fileinput7").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".cxsoo"));
        // console.log($("input.fileinput4").val());
    });
    var on =document.querySelector(".cxsoo");

    // 财经新股
    // 单张上传照片  删除照片
    $(" .fileinput8").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".cxgoo"));
        // console.log($("input.fileinput4").val());
    });
    var on =document.querySelector(".cxgoo");

    // 财经新闻
    // 单张上传照片  删除照片
    $(" .fileinput9").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".cxwoo"));
        // console.log($("input.fileinput4").val());
    });
    var on =document.querySelector(".cxwoo");

    // 财经财经资讯
    // 单张上传照片  删除照片
    $(" .fileinput10").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".czxoo"));
        // console.log($("input.fileinput4").val());
    });
    var on =document.querySelector(".czxoo");

    // 财经外汇
    // 单张上传照片  删除照片
    $(" .fileinput11").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".cwhoo"));
        // console.log($("input.fileinput4").val());
    });
    var on =document.querySelector(".cwhoo");

    // 财经股票
    // 单张上传照片  删除照片
    $(" .fileinput12").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".cgpoo"));
        // console.log($("input.fileinput4").val());
    });
    var on =document.querySelector(".cgpoo");

    // 最终页面正文
    // 单张上传照片  删除照片
    $(" .fileinput13").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".azwoo"));
        // console.log($("input.fileinput4").val());
    });
    var on =document.querySelector(".azwoo");

    // 股票首页
    // 单张上传照片  删除照片
    $(" .fileinput14").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".gsoo"));
        // console.log($("input.fileinput4").val());
    });
    var on =document.querySelector(".gsoo");

    // 股票个股资讯
    // 单张上传照片  删除照片
    $(" .fileinput15").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".gzxoo"));
        // console.log($("input.fileinput4").val());
    });
    var on =document.querySelector(".gzxoo");

    // 股票大盘评述
    // 单张上传照片  删除照片
    $(" .fileinput16").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".gdpoo"));
        // console.log($("input.fileinput4").val());
    });
    var on =document.querySelector(".gdpoo");

    // 股票市场数据
    // 单张上传照片  删除照片
    $(" .fileinput17").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".gscoo"));
        // console.log($("input.fileinput4").val());
    });
    var on =document.querySelector(".gscoo");

    // 外汇首页
    // 单张上传照片  删除照片
    $(" .fileinput18").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".wsoo"));
        // console.log($("input.fileinput4").val());
    });
    var on =document.querySelector(".wsoo");

    // 外汇要闻
    // 单张上传照片  删除照片
    $(" .fileinput19").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".wywoo"));
        // console.log($("input.fileinput4").val());
    });
    var on =document.querySelector(".wywoo");

    // 外汇EIA库存
    // 单张上传照片  删除照片
    $(" .fileinput20").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".wkcoo"));
        // console.log($("input.fileinput4").val());
    });
    var on =document.querySelector(".wkcoo");




    


    function readFile(file,element) {
        //        新建阅读器
        var reader = new FileReader();
        //        根据文件类型选择阅读方式
        switch (file.type){
            case 'image/jpg':
            case 'image/png':
            case 'image/jpeg':
            case 'image/gif':
            reader.readAsDataURL(file);
            break;
        };

        //  console.log(reader.readAsDataURL(file))
        //        当文件阅读结束后执行的方法
        var jijin="jijin";
        reader.addEventListener('load',function () {
            //         如果说让读取的文件显示的话 还是需要通过文件的类型创建不同的标签
            switch (file.type){
                case 'image/jpg':
                case 'image/png':
                case 'image/jpeg':
                case 'image/gif':
                var img = document.createElement('img');
                img.src = reader.result;
                console.log(img.src);
                element.append(img);
                // element.siblings(".addhao").hide();
                element.show();
                $.ajax({
                    type:"post",
                    url:"http://192.168.0.171:8080/WSHD/jiekou7/Image",
                    dataType:"json",
                    data:{
                        image:img.src,
                        folder:jijin
                    },
                    success:function(res){
                        console.log("上传成功！！！！！！！！！");
                    
                    }
                });//请求结束

                break;
                }
            });
        };//readFile函数结束

        
        //获取用户名
        var userName=window.sessionStorage.getItem("userName");
        console.log(userName);
        $("a.user").html("您好"+userName+"欢迎您登陆");
        //点击退出清除内容
        $("a.tc").click(function(){
            window.sessionStorage.clear();
        });


})