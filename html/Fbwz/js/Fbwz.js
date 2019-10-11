$(function(){
    //获取用户名
    var userName=window.sessionStorage.getItem("username");
    
    $("a.user").html("您好"+userName+"欢迎您登陆");
    //点击退出清除内容
    $("a.tc").click(function(){
        window.sessionStorage.clear();
    });
    //页面打开根据id发请求
    window.location.search;
    console.log(window.location.search.split("?")[1].split("&"));
    var id=window.location.search.split("?")[1].split("=")[1];
    // console.log(id);

    //加粗
    $("span.jiac").click(function(){
        // $("input.")
    });
    
    var aid=id,articleId,sortId,title,
    intro,authorImg=null,author,copyfrom,
    inputer=null,httpUrl,keyword=null,hits=null,
    postNum=null,ontop=null,iselite=null,deleted=null,
    addTime=null,updateTime=getNowFormatDate(),createTime=null,
    lastPost=null,ownerTag=null,ownerRemark=null,htmlPath=null,
    filesPath=null,tempPath=null,thumb,htmlStatus=null,
    articleStatus=null,tableName=null,content;
    
    //获取对应文章内容
    $.ajax({
        
        type:"post",
        url:"http://192.168.0.171:8080/WSHD/jiekou6/selectById",
        dataType:"JSON",
        data:{
            id:id
        },
        success:function(res){
            if(res.code==200){
                console.log(res);
                $("input.wzbt").val(res.data.title);
                editor.html(res.data.content);
                if(res.data.thumb){
                    $("input.lj").val(res.data.thumb);
                }else{
                    $("input.lj").val("");
                }
            }else{
                console.log("出错啦");
            }
            //点击发布普通文章
            if(!$("input.lj").val()){
                console.log($("input.lj").val());
                $("button.fb").click(function(){
                    alert("请先选择图片")
                })
            }else{
                console.log($("input.lj").val());
                $("button.fb").click(function(){
                    thumb=res.data.thumb;
                    console.log(thumb);
                    title=$("input.wzbt").val(),
                    articleId=res.data.articleId,sortId=res.data.sortId,intro=res.data.intro,author=res.data.author,copyfrom=res.data.copyfrom,
                    httpUrl=res.data.httpUrl,content=editor.html();

                    var record=JSON.stringify({
                        aid,articleId,sortId,title,intro,authorImg,author,copyfrom,inputer,httpUrl,keyword,hits,postNum,ontop,iselite,deleted,addTime,updateTime,createTime,
                        lastPost,ownerTag,ownerRemark,htmlPath,filesPath,tempPath,thumb,htmlStatus,articleStatus,tableName,content
                    });
                    $.ajax({
                        type:"post",
                        url:"http://192.168.0.171:8080/WSHD/jiekou6/Update",
                        dataType:"json",
                        contentType:"application/json;charset=UTF-8",
                        data:record,
                        success:function(res){
                            alert("发布成功");
                            // window.location.href="../Wzlb/Wzlb.html"
                        }
                    })
                })
            }

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
                var foldeWjj=$(this).attr("data-cls");

                function loadData(page) {
                    $.ajax({
                        type: "post",
                        url: "http://192.168.0.171:8080/WSHD/jiekou7/selectImage2",
                        data: {
                            folder:foldeWjj,
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
                                        html+="<span data-cls="+res.data[i].imageUrl+" class="+res.data[i].folderName+" data-id="+res.data[i].iid+"></span>";
                                        html+="<span data-cls="+res.data[i].imageUrl+" class="+res.data[i].folderName+" data-id="+res.data[i].iid+">"+res.data[i].imageName+"</span>";
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
                                //点击空白处隐藏图片预览
                                // $(document).click(function(event){
                                //     var _con = $(".zNrto");  // 设置失效目标区域
                                //     if(!_con.is(event.target) && _con.has(event.target).length === 0){
                                //         $("div.yulan").removeClass("xs");
                                //     }
                                // });
                                
                            });
                            $(".shixiao").click(function(event){
                                $(this).parent().removeClass("xs");
                                
                            });
                            

                            //点击对勾选中对应图片
                            var foldeDg,filename;
                            $(".c .mainR .zn .zNr .zNro table tbody tr td:first-child input").click(function(){
                                if($(this).parent().parent().hasClass("ac")){
                                    $(this).parent().parent().removeClass("ac");
                                    $(this).attr('checked',false)
                                }else{
                                    $(this).parent().parent().addClass("ac");
                                    $(this).attr('checked',true)
                                };
                                foldeDg=$(".c .mainR .zn .zNr .zNro table tbody tr.ac td:nth-child(2) span:first-child").attr("class");
                                filename=$(".c .mainR .zn .zNr .zNro table tbody tr.ac td:nth-child(2) span:last-child").html();


                                //点击发布普通文章
                                $("button.fb").click(function(){
                                    thumb=$(".c .mainR .zn .zNr .zNro table tbody tr.ac td:nth-child(2) span").attr("data-cls");
                                    console.log(thumb);
                                    title=$("input.wzbt").val(),
                                    articleId=res.data.articleId,sortId=res.data.sortId,intro=res.data.intro,author=res.data.author,copyfrom=res.data.copyfrom,
                                    httpUrl=res.data.httpUrl,content=editor.html();

                                    var record=JSON.stringify({
                                        aid,articleId,sortId,title,intro,authorImg,author,copyfrom,inputer,httpUrl,keyword,hits,postNum,ontop,iselite,deleted,addTime,updateTime,createTime,
                                        lastPost,ownerTag,ownerRemark,htmlPath,filesPath,tempPath,thumb,htmlStatus,articleStatus,tableName,content
                                    });
                                    $.ajax({
                                        type:"post",
                                        url:"http://192.168.0.171:8080/WSHD/jiekou6/Update",
                                        dataType:"json",
                                        contentType:"application/json;charset=UTF-8",
                                        data:record,
                                        success:function(res){
                                            alert("发布成功");
                                            window.location.href="../Wzlb/Wzlb.html"
                                        }
                                    })

                                });

                            });
            
                            //点击删除图片
                            $("span.shanc").click(function(){
                                $(".c .mainR .zn .zNr .zNro table tbody tr.ac").css("display","none");
                                console.log(foldeDg+filename);
                                if(filename){
                                    $.ajax({
                                        type:"post",
                                        url:"http://192.168.0.171:8080/WSHD/jiekou7/deleteImage1",
                                        dataType:"JSON",
                                        data:{
                                            folder:foldeDg,
                                            filename:filename
                                        },
                                        success:function(){
                                            alert("删除图片成功");
                                        }
                                    });
                                }else{
                                    alert("请选择图片");
                                }
                            });
                            // 点击上传图片
                            $("span.shangch").click(function(){
                                thum=$(".c .mainR .zn .zNr .zNro table tbody tr.ac td:nth-child(2) span").attr("data-cls");
                                shangcid=$(".c .mainR .zn .zNr .zNro table tbody tr.ac td:nth-child(2) span").attr("data-id");
                                var ac=$(".c .mainR .zn .zNr .zNro table tbody tr.ac td:first-child input").is(":checked");
                                console.log(ac+thum+shangcid);
                                if(ac){
                                    $(this).addClass("ac");
                                    $(this).html("上传成功");
                                    $(".c .mainR .zn .zNr .zNro table tbody tr.ac").css("display","none");
                                }else{
                                    alert("请选择图片");
                                };

                                $.ajax({
                                    type:"post",
                                    url:"http://192.168.0.171:8080/WSHD/jiekou7/selectImage1",
                                    dataType:"JSON",
                                    data:{
                                        id:shangcid
                                    },
                                    success:function(){
                                        
                                    }
                                });



                            });
                            //分页第二页开始
                            $('.M-box11').pagination({
                                totalData: res.sum,
                                showData: res.data.length,
                                current:page,
                                pageCount: 1,
                                callback:function (res){
                                    
                                    console.log(res.getCurrent())
                                    $.ajax({
                                        type: "post",
                                        url: "http://192.168.0.171:8080/WSHD/jiekou7/selectImage2",
                                        data: {
                                            folder:foldeWjj,
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
                                            var foldeDg,filename;
                                            $(".c .mainR .zn .zNr .zNro table tbody tr td:first-child input").click(function(){
                                                if($(this).parent().parent().hasClass("ac")){
                                                    $(this).parent().parent().removeClass("ac");
                                                    $(this).attr('checked',false)
                                                }else{
                                                    $(this).parent().parent().addClass("ac");
                                                    $(this).attr('checked',true)
                                                };
                                                foldeDg=$(".c .mainR .zn .zNr .zNro table tbody tr.ac td:nth-child(2) span:first-child").attr("class");
                                                filename=$(".c .mainR .zn .zNr .zNro table tbody tr.ac td:nth-child(2) span:last-child").html();

                                                //点击发布普通文章
                                                $("button.fb").click(function(){
                                                    thumb=$(".c .mainR .zn .zNr .zNro table tbody tr.ac td:nth-child(2) span").attr("data-cls");
                                                    console.log(thumb);             
                                                    title=$("input.wzbt").val(),
                                                    articleId=res.data.articleId,sortId=res.data.sortId,intro=res.data.intro,author=res.data.author,copyfrom=res.data.copyfrom,
                                                    httpUrl=res.data.httpUrl,content=editor.html();

                                                var record=JSON.stringify({
                                                    aid,articleId,sortId,title,intro,authorImg,author,copyfrom,inputer,httpUrl,keyword,hits,postNum,ontop,iselite,deleted,addTime,updateTime,createTime,
                                                    lastPost,ownerTag,ownerRemark,htmlPath,filesPath,tempPath,thumb,htmlStatus,articleStatus,tableName,content
                                                })
                                                    $.ajax({
                                                        type:"post",
                                                        url:"http://192.168.0.171:8080/WSHD/jiekou6/Update",
                                                        dataType:"json",
                                                        contentType:"application/json;charset=UTF-8",
                                                        data:record,
                                                        success:function(res){
                                                            alert("发布成功");
                                                            window.location.href="../Wzlb/Wzlb.html"
                                                        }
                                                    })

                                                });


                                            });
                                            //点击删除图片
                                            $("span.shanc").click(function(){
                                                $(".c .mainR .zn .zNr .zNro table tbody tr.ac").css("display","none");
                                                console.log(folde+filename);
                                                if(filename){
                                                    $.ajax({
                                                        type:"post",
                                                        url:"http://192.168.0.171:8080/WSHD/jiekou7/deleteImage1",
                                                        dataType:"JSON",
                                                        data:{
                                                            folder:foldeDg,
                                                            filename:filename
                                                        },
                                                        success:function(){
                                                            alert("删除图片成功")
                                                        }
                                                    });
                                                }else{
                                                    alert("请选择图片")
                                                }
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
                                
                var foldXj=$("input.wjjsc").val().trim();
                if(foldXj){
                    $.ajax({
                        type:"post",
                        url:"http://192.168.0.171:8080/WSHD/jiekou7/insertFolder",
                        dataType:"JSON",
                        data:{
                            newFile:foldXj
                        },
                        success:function(res){
                            if(res.code==200){
                                alert(res.data);
                                $("input.wjjsc").val("");
                            }else{
                                alert("请输入文件夹名称");
                                $("input.wjjsc").val("");
                            }
                            
                        }
                    })
                }else{
                    alert("请输入正确的文件夹名称")
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
    var style,style_id,sarticleId;
    //点击选取具体主栏目
    $("div.zlb>div span").click(function(){
        
        style=$(this).attr("data-ia");
        console.log(style);
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
        style_id=$(this).attr("data-ib");
        console.log(style_id);
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
        // $("div.yulan").html("");
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
        var foldYd=$("div.zNlt ul li.gg span").attr("data-cls");
        // var foldYd=2;
        // console.log(foldYd);
        if(foldYd){
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
                            folder:foldYd,
                            image:img.src
                        },
                        success:function(res){
                            console.log("上传成功！！！！！！！！！");
                        
                        }
                    });//请求结束



                    break;
                    }
                });
        }else{
         alert("请先选择需要上传到的目录")   
        }
            
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
        console.log(getNowFormatDate());
        $("span.shij").html(getNowFormatDate());
        

    //点击发布幻灯文章
    $("button.fbHD").click(function(){
        // console.log(style+style_id+id)
        if(style&&style_id){
            $.ajax({
                type:"post",
                url:"http://192.168.0.171:8080/WSHD/jiekou7/huanDengImage",
                dataType:"JSON",
                data:{
                    style:style,
                    id:style_id,
                    articleId:id
                },
                success:function(res){
                    // if(style!=NaN&&style_id!=NaN&&id){
                        if(res.code==200){
                            console.log(res)
                            alert("发布成功");
                            window.location.href="../Wzlb/Wzlb.html";
                        }else{
                            alert("发布失败，请检查输入选项")
                        }
                    
                    
                }
            })
        }else{
            alert("请选择幻灯所属栏目和位置")
        }
    });
        



})