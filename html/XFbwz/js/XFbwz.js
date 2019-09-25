$(function(){
    



    // 分页数据
    $('.M-box11').pagination(
        {mode: 'fixed'});

    //打开页面获取站内上传文件夹和相应图片
    $.ajax({
        
        type:"post",
        url:"http://192.168.0.171:8080/WSHD/jiekou7/selectFolder",
        dataType:"JSON",
        data:{},
        success:function(res){
            if(res.code==200){
                console.log(res);
                var html="";
                
                for(var i in res.data){
                    var cls=res.data[i].folderName;
                    html+="<li>";
                        html+="<span data-cls="+cls+"></span><span data-cls="+cls+">"+res.data[i].folderName+"</span>";
                    html+="</li>";
                    $("div.zNlt ul").html(html);
                }
            }else{
                console.log("出错啦")
            }
            //点击文件夹获取相应图片
            $("div.zNlt ul li span").click(function(){
                $("div.zNr").addClass("ac");
                $(this).parent().addClass("gg");
                $(this).parent().siblings().removeClass("gg")
                console.log($(this).attr("data-cls"));
                var folder=$(this).attr("data-cls");

                function loadData(page) {
                    $.ajax({
                        type: "post",
                        url: "http://192.168.0.171:8080/WSHD/jiekou7/selectImage2",
                        data: {
                            folder:folder,
                            page: page,
                            num: 7
                        },
                        dataType: "JSON",
                        success: function (res) {
            
                            console.log(res)
                            var html="";
                            for(var i in res.data){
                                html+="<tr>";
                                    html+="<td>";
                                        html+="<input type=checkbox>";
                                    html+="</td>";
                                    html+="<td>";
                                        html+="<span data-cls="+res.data[i].imageUrl+"></span>";
                                        html+="<span>"+res.data[i].imageName+"</span>";
                                    html+="</td>";
                                    html+="<td>"+res.data[i].imageSize+"k"+"</td>";
                                    html+="<td>"+res.data[i].imageTime+"</td>";
                                html+="</tr>";
                            }
                            $("div.zNro table tbody").html(html);
                            //点击图片预览`消失
                            $(".c .mainR .zn .zNr .zNro table tbody tr td:nth-child(2) span:first-child").click(function(){
                                $("div.yulan").addClass("xs");
                                $(".shixiao").attr("src",$(this).attr("data-cls"));
                                // console.log($(this).attr("data-cls"))
                            });
                            $(".shixiao").click(function(event){
                                $(this).parent().removeClass("xs")
                            });
                            console.log(res.sum)
                            $('.M-box11').pagination({
                                totalData: res.sum,
                                showData: res.data.length,
                                current:page,
                                pageCount: 5,
                                callback:function (res){
                                    
                                    console.log(res.getCurrent())
                                    $.ajax({
                                        type: "post",
                                        url: "http://192.168.0.171:8080/WSHD/jiekou7/selectImage2",
                                        data: {
                                            folder:folder,
                                            page:res.getCurrent(),
                                            num:7
                                        },
                                        dataType: "JSON",
                                        success: function (res) {
                                            console.log(res)
                                            var html="";
                                            for(var i in res.data){
                                                html+="<tr>";
                                                    html+="<td>";
                                                        html+="<input type=checkbox>";
                                                    html+="</td>";
                                                    html+="<td>";
                                                        html+="<span data-cls="+res.data[i].imageUrl+"></span>";
                                                        html+="<span>"+res.data[i].imageName+"</span>";
                                                    html+="</td>";
                                                    html+="<td>"+res.data[i].imageSize+"k"+"</td>";
                                                    html+="<td>"+res.data[i].imageTime+"</td>";
                                                html+="</tr>";
                                            }
                                            $("div.zNro table tbody").html(html);
                                            //点击图片预览`消失
                                            $(".c .mainR .zn .zNr .zNro table tbody tr td:nth-child(2) span:first-child").click(function(){
                                                $("div.yulan").addClass("xs");
                                                $(".shixiao").attr("src",$(this).attr("data-cls"));
                                                // alert(132)
                                                // console.log($(this).attr("data-cls"))
                                            });
                                            $(".shixiao").click(function(event){
                                                $(this).parent().removeClass("xs")
                                            });

                                        }
                                    });
                                }
                            })
            
                        }
                    });
                }
                loadData(1);



            });
            

        }
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
    //自定义属性--首页
    $(".c .mainR .mRo .mRoth .mRotht .mRothto span:first-child").click(function(){
        if($(this).hasClass("ac")){
            $(this).removeClass("ac");
            $(this).siblings().removeClass("ab");
        }else{
            $(this).addClass("ac");
            $(this).siblings().addClass("ab");
        }
    });
    //自定义属性--加粗
    $(".c .mainR .mRo .mRoth .mRotht .mRothtt span:first-child").click(function(){
        if($(this).hasClass("ac")){
            $(this).removeClass("ac");
            $(this).siblings().removeClass("ab");
        }else{
            $(this).addClass("ac");
            $(this).siblings().addClass("ab");
        }
    });
    //自定义属性--图片
    $(".c .mainR .mRo .mRoth .mRotht .mRothtth span:first-child").click(function(){
        if($(this).hasClass("ac")){
            $(this).removeClass("ac");
            $(this).siblings().removeClass("ab");
        }else{
            $(this).addClass("ac");
            $(this).siblings().addClass("ab");
        }
    });
    //自定义属性--视频
    $(".c .mainR .mRo .mRoth .mRotht .mRothtf span:first-child").click(function(){
        if($(this).hasClass("ac")){
            $(this).removeClass("ac");
            $(this).siblings().removeClass("ab");
        }else{
            $(this).addClass("ac");
            $(this).siblings().addClass("ab");
        }
    });
    //点击选取文章主栏目副栏目
    $("div.mRofit").click(function(){
        $("div.zlb").toggle();
        // $("span.zsj").addClass("ac")
        if($("span.zsj").hasClass("ac")){
            $("span.zsj").removeClass("ac");
        }else{
            $("span.zsj").addClass("ac");
        }
    });
    $("div.mRofith").click(function(){
        $("div.flb").toggle();
        if($("span.flm").hasClass("ac")){
            $("span.flm").removeClass("ac");
        }else{
            $("span.flm").addClass("ac");
        }
    });
    //点击空白处隐藏主栏目下拉菜单
    $(document).click(function(event){
        var _con = $(".mRofit");  // 设置失效目标区域
        if(!_con.is(event.target) && _con.has(event.target).length === 0){
            $("div.zlb").css("display","none");
        }
    });
    //点击空白处隐藏副栏目下拉菜单
    $(document).click(function(event){
        var _con = $(".mRofith");  // 设置失效目标区域
        if(!_con.is(event.target) && _con.has(event.target).length === 0){
            $("div.flb").css("display","none");
        }
    });
    //点击选取具体主栏目
    $("div.zlb>div span").click(function(){
        // console.log(132);
        $("div.mRofit").children().eq(0).html($(this).html());
        $("div.zlb").toggle();
        if($("span.zsj").hasClass("ac")){
            $("span.zsj").removeClass("ac");
        }else{
            $("span.zsj").addClass("ac");
        }
    });
    //点击选取具体副栏目
    $("div.flb>div span").click(function(){
        // console.log(132);
        $("div.mRofith").children().eq(0).html($(this).html());
        $("div.flb").toggle();
        if($("span.flm").hasClass("ac")){
            $("span.flm").removeClass("ac");
        }else{
            $("span.flm").addClass("ac");
        }
    });
    

    //本地图片上传
    // 单张上传照片  删除照片
    $(" .bdsc").change(function () {
        $("div.yulan").html("");
        var file = this.files[0];
        readFile(file,$(this).parent().siblings(".slt"));
        // console.log($("input.fileinput4").val());
    });
    //站内本地上传
    $(" .shangc").change(function () {
        $("div.yulan").html("");
        console.log($("div.yulan").html(""))
        var file = this.files[0];
        readFile(file,$("div.slt"));
        // console.log($("input.fileinput4").val());
    });

    var on =document.querySelector(".slt");

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
        var folder=$("div.zNlt ul li.gg span").attr("data-cls");
        console.log(folder);
        reader.addEventListener('load',function () {
            //         如果说让读取的文件显示的话 还是需要通过文件的类型创建不同的标签
            switch (file.type){
                case 'image/jpg':
                case 'image/png':
                case 'image/jpeg':
                case 'image/gif':
                var img = document.createElement('img');
                img.src = reader.result;
                // console.log(img.src);
                element.append(img);
                element.show();
                $("input.lj").val(img.src);
                $.ajax({
                    type:"post",
                    url:"http://192.168.0.171:8080/WSHD/jiekou7/Image",
                    dataType:"json",
                    data:{
                        folder:folder,
                        image:img.src
                    },
                    success:function(res){
                        console.log("上传成功！！！！！！！！！");
                    
                    }
                });//请求结束



                break;
                }
            });
            
        };//readFile函数结束

        // 站内选择
        $("a.znxz").click(function(){
            if($("div.zn").hasClass("ac")){
                $("div.zn").removeClass("ac");
            }else{
                $("div.zn").addClass("ac");
            }

        })
        //点击删除增加
        $("div.zNro table tbody tr td input").click(function(){
            console.log(999);
            
            $(this).parent().parent().addClass("ac");
        });
        $("span.shanc").click(function(){

            $("div.zNro table tbody tr.ac").remove();
        });
        //点击图片预览`消失
        $(".c .mainR .zn .zNr .zNro table tbody tr td:nth-child(2) span:first-child").click(function(){
            $("div.yulan").addClass("xs");

        })
        $(".shixiao").click(function(event){
            $(this).parent().removeClass("xs")
        });






        //获取当前时间
        function getNowFormatDate(){
            var date = new Date();
            var seperator1 = "-";
            
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var hour = date.getHours();
            var minutes = date.getMinutes() ;
            var seconds = date.getSeconds();
            var strDate = date.getDate();
            
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = year + seperator1 + month + seperator1 + strDate+"  "+hour+":" +minutes+":" +seconds;
            
            return currentdate;
        };
        getNowFormatDate();
        console.log(getNowFormatDate())
        $("span.shij").html(getNowFormatDate());

        //获取用户名
        var userName=window.sessionStorage.getItem("userName");
        // console.log(userName);
        $("a.user").html("您好"+userName+"欢迎您登陆");
        //点击退出清除内容
        $("a.tc").click(function(){
            window.sessionStorage.clear();
        });




})