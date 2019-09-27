$(function(){
    //获取用户名
    var username=window.sessionStorage.getItem("username");
    // console.log(userName);
    $("a.user").html("您好"+username+"欢迎您登陆");
    //点击退出清除内容
    $("a.tc").click(function(){
        window.sessionStorage.clear();
    });


    //加粗
    $("span.jiac").click(function(){
        // $("input.")
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
    var sslm;
    //点击选取具体主栏目
    $("div.zlb>div span").click(function(){
        $(this).addClass("acc");
        $(this).parent().siblings().children().removeClass("acc");
        sslm=$(this).attr("data-id");
        console.log(sslm);
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







    //内容不为空后发布文章
    var aid=null,articleId,title,
    intro,authorImg=null,author=username,copyfrom,
    inputer=null,httpUrl,keyword=null,hits=null,
    postNum=null,ontop=null,iselite=null,deleted=null,
    addTime=getNowFormatDate(),updateTime=getNowFormatDate(),createTime=null,
    lastPost=null,ownerTag=null,ownerRemark=null,htmlPath=null,
    filesPath=null,tempPath=null,thumb,htmlStatus=null,
    articleStatus=null,tableName=null,content;
    
           
    //点击发布文章
    $("button.fb").click(function(){
        var sortId=$("span.acc").attr("data-id");
        console.log(username+getNowFormatDate()+sortId);
        // if(sortId){

            title=$("input.wzbt").val(),
            articleId=null,intro=null,copyfrom=null,
            httpUrl=null,content=editor.html();
        
            var record=JSON.stringify({
                aid,articleId,sortId,title,intro,authorImg,author,copyfrom,inputer,httpUrl,keyword,hits,postNum,ontop,iselite,deleted,addTime,updateTime,createTime,
                lastPost,ownerTag,ownerRemark,htmlPath,filesPath,tempPath,thumb,htmlStatus,articleStatus,tableName,content
            });
            console.log(record)
            if(title&&sortId){
                $.ajax({
                    type:"post",
                    url:"http://192.168.0.171:8080/WSHD/jiekou6/Create",
                    dataType:"json",
                    contentType:"application/json;charset=UTF-8",
                    data:record,
                    success:function(res){
                        alert("发布成功");
                        window.location.href="../Wzlb/Wzlb.html";
                    }
                })
            }else{
                    alert("文章标题、文章所属栏目不能为空");
                }

    });
    
           
    



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
            };

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
                                        html+="<span data-cls="+res.data[i].imageUrl+" class="+res.data[i].folderName+"></span>";
                                        html+="<span data-cls="+res.data[i].imageUrl+" class="+res.data[i].folderName+">"+res.data[i].imageName+"</span>";
                                    html+="</td>";
                                    html+="<td>"+res.data[i].imageSize+"k"+"</td>";
                                    html+="<td>"+res.data[i].imageTime+"</td>";
                                html+="</tr>";
                            }
                            $("div.zNro table tbody").html(html);

                            //点击图片预览`消失
                            $(".c .mainR .zn .zNr .zNro table tbody tr td:nth-child(2) span").click(function(){
                                $("div.yulan").addClass("xs");
                                $(".shixiao").attr("src",$(this).attr("data-cls"));
                                
                            });
                            $(".shixiao").click(function(event){
                                $(this).parent().removeClass("xs")
                            });

                            //点击对勾选中对应图片
                            var folde,filename;
                            $(".c .mainR .zn .zNr .zNro table tbody tr td:first-child input").click(function(){
                                if($(this).parent().parent().hasClass("ac")){
                                    $(this).parent().parent().removeClass("ac");
                                    $(this).attr('checked',false)
                                }else{
                                    $(this).parent().parent().addClass("ac");
                                    $(this).attr('checked',true)
                                };
                                folde=$(".c .mainR .zn .zNr .zNro table tbody tr.ac td:nth-child(2) span:first-child").attr("class");
                                filename=$(".c .mainR .zn .zNr .zNro table tbody tr.ac td:nth-child(2) span:last-child").html();
                            });
            
                            //点击删除图片
                            $("span.shanc").click(function(){
                                $(".c .mainR .zn .zNr .zNro table tbody tr.ac").css("display","none");
                                console.log(folde+filename);
                                $.ajax({
                                    type:"post",
                                    url:"http://192.168.0.171:8080/WSHD/jiekou7/deleteImage1",
                                    dataType:"JSON",
                                    data:{
                                        folder:folde,
                                        filename:filename
                                    },
                                    success:function(){
                                        alert("删除图片成功")
                                    }
                                });
                            });
                            // 点击上传图片
                            $("span.shangch").click(function(){
                                thumb=$(".c .mainR .zn .zNr .zNro table tbody tr.ac td:nth-child(2) span").attr("data-cls");
                                
                                var ac=$(".c .mainR .zn .zNr .zNro table tbody tr.ac td:first-child input").is(":checked");
                                console.log(ac)
                                if(ac){
                                    $(this).addClass("ac");
                                    $(this).html("上传成功");
                                    $(".c .mainR .zn .zNr .zNro table tbody tr.ac").css("display","none");
                                }else{
                                    alert("请选择图片")
                                }
                            });
                            //分页第二页开始
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
                                                        html+="<span data-cls="+res.data[i].imageUrl+" class="+res.data[i].folderName+"></span>";
                                                        html+="<span data-cls="+res.data[i].imageUrl+" class="+res.data[i].folderName+">"+res.data[i].imageName+"</span>";
                                                    html+="</td>";
                                                    html+="<td>"+res.data[i].imageSize+"k"+"</td>";
                                                    html+="<td>"+res.data[i].imageTime+"</td>";
                                                html+="</tr>";
                                            }
                                            $("div.zNro table tbody").html(html);
                                            //点击图片预览`消失
                                            $(".c .mainR .zn .zNr .zNro table tbody tr td:nth-child(2) span").click(function(){
                                                $("div.yulan").addClass("xs");
                                                $(".shixiao").attr("src",$(this).attr("data-cls"));
                                                
                                            });
                                            $(".shixiao").click(function(event){
                                                $(this).parent().removeClass("xs")
                                            });
                                            //点击对勾选中对应图片
                                            var folde,filename;
                                            $(".c .mainR .zn .zNr .zNro table tbody tr td:first-child input").click(function(){
                                                if($(this).parent().parent().hasClass("ac")){
                                                    $(this).parent().parent().removeClass("ac");
                                                    $(this).attr('checked',false)
                                                }else{
                                                    $(this).parent().parent().addClass("ac");
                                                    $(this).attr('checked',true)
                                                };
                                                folde=$(".c .mainR .zn .zNr .zNro table tbody tr.ac td:nth-child(2) span:first-child").attr("class");
                                                filename=$(".c .mainR .zn .zNr .zNro table tbody tr.ac td:nth-child(2) span:last-child").html();
                                            });
                                            //点击删除图片
                                            $("span.shanc").click(function(){
                                                $(".c .mainR .zn .zNr .zNro table tbody tr.ac").css("display","none");
                                                console.log(folde+filename);
                                                $.ajax({
                                                    type:"post",
                                                    url:"http://192.168.0.171:8080/WSHD/jiekou7/deleteImage1",
                                                    dataType:"JSON",
                                                    data:{
                                                        folder:folde,
                                                        filename:filename
                                                    },
                                                    success:function(){
                                                        alert("删除图片成功")
                                                    }
                                                });
                                            });
                                            // 点击上传图片
                                            $("span.shangch").click(function(){
                                                thumb=$(".c .mainR .zn .zNr .zNro table tbody tr.ac td:nth-child(2) span").attr("data-cls");
                                                
                                                var ac=$(".c .mainR .zn .zNr .zNro table tbody tr.ac td:first-child input").is(":checked");
                                                console.log(ac)
                                                if(ac){
                                                    $(this).addClass("ac");
                                                    $(this).html("上传成功");
                                                    $(".c .mainR .zn .zNr .zNro table tbody tr.ac").css("display","none");
                                                }else{
                                                    alert("请选择图片")
                                                }
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
            //点击新建文件夹
            $("span.New").click(function(){
                                
                var fold=$("input.wjjsc").val().trim();
                if(fold){
                    $.ajax({
                        type:"post",
                        url:"http://192.168.0.171:8080/WSHD/jiekou7/insertFolder",
                        dataType:"JSON",
                        data:{
                            newFile:fold
                        },
                        success:function(res){
                            alert(res.data);
                            $("input.wjjsc").val("");
                        }
                    })
                }
            });
            //点击删除文件夹
            $("span.Dle").click(function(){
                var newFile=$("input.wjjsc").val().trim();

                $.ajax({
                    type:"post",
                    url:"http://192.168.0.171:8080/WSHD/jiekou7/deleteFolder",
                    dataType:"JSON",
                    data:{
                        folder:newFile
                    },
                    success:function(res){
                        if(res.code==200){
                            alert("删除成功");
                            $("input.wjjsc").val("");
                        }else{
                            alert("删除失败,请输入正确的文件夹名称");
                            $("input.wjjsc").val("");
                        }
                    }
                })

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

        
        



})