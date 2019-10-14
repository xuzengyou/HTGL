$(function(){
    //获取用户名
    var username=window.sessionStorage.getItem("username");
    console.log(username);
    $("a.user").html("您好"+username+"欢迎您登陆");
    //点击退出清除内容
    $("a.tc").click(function(){
        window.sessionStorage.clear();
    });
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
    
    var image_id,style;
    // 财经首页
    // 单张上传照片  删除照片
    $(" .fileinput1").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".csoo"));
        image_id=$(this).attr("data-id");
        style=$(this).attr("data-cls");
    });

    var on =document.querySelector(".csoo");
    //    需要把阅读的文件传进来file element是把读取到的内容放入的容器


    // 财经宏观
    // 单张上传照片  删除照片
    $(" .fileinput2").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".chgoo"));
        image_id=$(this).attr("data-id");
        style=$(this).attr("data-cls");
    });

    var on =document.querySelector(".chgoo");
    //    需要把阅读的文件传进来file element是把读取到的内容放入的容器

    // 财经基金
    // 单张上传照片  删除照片
    $(" .fileinput3").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".cjjoo"));
        image_id=$(this).attr("data-id");
        style=$(this).attr("data-cls");
    });

    var on =document.querySelector(".cjjoo");
    //    需要把阅读的文件传进来file element是把读取到的内容放入的容器
    
    // 财经科创板
    // 单张上传照片  删除照片
    $(" .fileinput4").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".ckcoo"));
        image_id=$(this).attr("data-id");
        style=$(this).attr("data-cls");
    });
    var on =document.querySelector(".ckcoo");
    //    需要把阅读的文件传进来file element是把读取到的内容放入的容器

    // 财经石油
    // 单张上传照片  删除照片
    $(" .fileinput5").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".csyoo"));
        image_id=$(this).attr("data-id");
        style=$(this).attr("data-cls");
    });
    var on =document.querySelector(".csyoo");

    // 财经黄金
    // 单张上传照片  删除照片
    $(" .fileinput6").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".chjoo"));
        image_id=$(this).attr("data-id");
        style=$(this).attr("data-cls");
    });
    var on =document.querySelector(".chjoo");

    // 财经新三板
    // 单张上传照片  删除照片
    $(" .fileinput7").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".cxsoo"));
        image_id=$(this).attr("data-id");
        style=$(this).attr("data-cls");
    });
    var on =document.querySelector(".cxsoo");

    // 财经新股
    // 单张上传照片  删除照片
    $(" .fileinput8").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".cxgoo"));
        image_id=$(this).attr("data-id");
        style=$(this).attr("data-cls");
    });
    var on =document.querySelector(".cxgoo");

    // 财经新闻
    // 单张上传照片  删除照片
    $(" .fileinput9").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".cxwoo"));
        image_id=$(this).attr("data-id");
        style=$(this).attr("data-cls");
    });
    var on =document.querySelector(".cxwoo");

    // 财经财经资讯
    // 单张上传照片  删除照片
    $(" .fileinput10").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".czxoo"));
        image_id=$(this).attr("data-id");
        style=$(this).attr("data-cls");
    });
    var on =document.querySelector(".czxoo");

    // 财经外汇
    $(" .fileinput11").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".cwhoo"));
        image_id=$(this).attr("data-id");
        style=$(this).attr("data-cls");
    });
    var on =document.querySelector(".cwhoo");

    // 财经更多股票
    $(" .fileinput12").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".cgpoo"));
        image_id=$(this).attr("data-id");
        style=$(this).attr("data-cls");
    });
    var on =document.querySelector(".cgpoo");

    // 财经更多石油
    $(" .fileinput13").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".cgssoo"));
        image_id=$(this).attr("data-id");
        style=$(this).attr("data-cls");
    });
    var on =document.querySelector(".cgssoo");

    // 财经更多黄金
    $(" .fileinput14").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".cghjoo"));
        image_id=$(this).attr("data-id");
        style=$(this).attr("data-cls");
    });
    var on =document.querySelector(".cghjoo");




    // 股票首页
    $(" .fileinput14").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".gsoo"));
        image_id=$(this).attr("data-id");
        style=$(this).attr("data-cls");
    });
    var on =document.querySelector(".gsoo");

    // 股票更多
    $(" .fileggd").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".ggdoo"));
        image_id=$(this).attr("data-id");
        style=$(this).attr("data-cls");
    });
    var on =document.querySelector(".ggdoo");


    // 股票个股资讯
    $(" .fileinput15").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".gzxoo"));
        image_id=$(this).attr("data-id");
        style=$(this).attr("data-cls");
    });
    var on =document.querySelector(".gzxoo");

    // 股票大盘评述
    $(" .fileinput16").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".gdpoo"));
        image_id=$(this).attr("data-id");
        style=$(this).attr("data-cls");
    });
    var on =document.querySelector(".gdpoo");

    // 股票市场数据
    // 单张上传照片  删除照片
    $(" .fileinput17").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".gscoo"));
        image_id=$(this).attr("data-id");
        style=$(this).attr("data-cls");
    });
    var on =document.querySelector(".gscoo");


    // 外汇首页
    // 单张上传照片  删除照片
    $(" .fileinput18").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".wsoo"));
        image_id=$(this).attr("data-id");
        style=$(this).attr("data-cls");
    });
    var on =document.querySelector(".wsoo");

    // 外汇要闻
    $(" .fileinput19").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".wywoo"));
        image_id=$(this).attr("data-id");
        style=$(this).attr("data-cls");
    });
    var on =document.querySelector(".wywoo");

    // 外汇EIA库存
    $(" .fileinput20").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".wkcoo"));
        image_id=$(this).attr("data-id");
        style=$(this).attr("data-cls");
    });
    var on =document.querySelector(".wkcoo");

    // 外汇财经日历
    $(" .fileinput21").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".cjrloo"));
        image_id=$(this).attr("data-id");
        style=$(this).attr("data-cls");
    });
    var on =document.querySelector(".cjrloo");

    // 最终页面正文
    // 单张上传照片  删除照片
    $(" .fileinput13").change(function () {
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".azwoo"));
        image_id=$(this).attr("data-id");
        style=$(this).attr("data-cls");
    });
    var on =document.querySelector(".azwoo");

    //发请求开始
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
        //        当文件阅读结束后执行的方法
        
        reader.addEventListener('load',function () {
            //         如果说让读取的文件显示的话 还是需要通过文件的类型创建不同的标签
            switch (file.type){
                case 'image/jpg':
                case 'image/png':
                case 'image/jpeg':
                case 'image/gif':
                var img = document.createElement('img');
                img.src = reader.result;
                
                element.append(img);
                
                console.log(style+image_id+img.src);
                element.show();
               
                    $.ajax({
                        type:"post",
                        url:"http://192.168.0.171:8080/WSHD/jiekou7/ADImage",
                        dataType:"json",
                        data:{
                            image:img.src,
                            style:style,
                            id:image_id
                        },
                        success:function(res){
                            console.log("上传成功！！！！！！！！！");
                        
                        }
                    });//请求结束
                
                break;
                }
            });
            
        };//readFile函数结束
    

     


})