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
        // console.log(123)
        $("div.mLtt").toggle();
        if($("div.mLto span:nth-child(1)").hasClass("ac")){
            $("div.mLto span:nth-child(1)").removeClass("ac");
        }else{
            $("div.mLto span:nth-child(1)").addClass("ac");
        }
    });
    //点击控制财经股票外汇
    $("div.lxCo").click(function(){
        // console.log(123)
        $("div.lxCt").toggle();
    });
    //点击控制财经股票外汇
    $("div.lxCto").click(function(e){
        var ht=$(this).children().eq(0).html();
        $("div.lxCo span:first-child").html(ht);
        $("div.lxCt").css("display","none");
        var id=$(this).children().eq(0).attr("data-id");
        console.log(id);
        $(id).addClass("ac").siblings().removeClass("ac");
    });
    //点击空白处隐藏下拉菜单
    $(document).click(function(event){
        var _con = $(".lxC");  // 设置失效目标区域
        if(!_con.is(event.target) && _con.has(event.target).length === 0){
            $("div.lxCt").css("display","none");
        }

    });

    // 页面打开全部文章分页数据
    $('.M-box11').pagination(
        {mode: 'fixed'});
    function loadData0(page) {
        $.ajax({
            type: "post",
            url: "http://192.168.0.171:8080/WSHD/jiekou6/select",
            data: {
                page: page,
                num: 21
            },
            dataType: "JSON",
            success: function (res) {

            console.log(res)
            var html="";
            for(var i in res.data){
                var url=res.data[i].httpUrl,id=res.data[i].articleId,tb=res.data[i].tableName,href=url+'?id='+id+'&tb='+tb;
                var href1="../XFbwz/XFbwz.html";
                html+="<tr>";
                    html+="<td>";
                        html+="<input type=checkbox data-cls="+res.data[i].articleId+">";
                    html+="</td>";
                    html+="<td>";
                        html+="<span>"+res.data[i].title+"</span>";
                    html+="</td>";
                    html+="<td>"+res.data[i].addTime+"</td>";
                    html+="<td>"+res.data[i].sortId+"</td>";
                    html+="<td>"+res.data[i].author+"</td>";
                    html+="<td>";
                        html+="<a href=../Fbwz/Fbwz.html?id="+res.data[i].articleId+"></a>";
                        html+="<a href=../Fbwz/Fbwz.html?id="+res.data[i].articleId+">编辑&nbsp;&nbsp;</a>";
                        html+="<a href="+href+"></an>";
                        html+="<a href="+href+">预览</a>";
                    html+="</td>";
                html+="</tr>";


                $("#zz table tbody").html(html);

                //点击删除
                $("#zz table tbody tr td input").click(function(){
                    console.log($(this).attr("data-cls"));
                    if($(this).parent().parent().hasClass("ac")){
                        $(this).parent().parent().removeClass("ac");
                    }else{
                        $(this).parent().parent().addClass("ac");
                    }
                    var id=$(this).attr("data-cls");
                    $("span.schu").click(function(){
                        $.ajax({
                            type:"post",
                            url:"http://192.168.0.171:8080/WSHD/jiekou6/Delete",
                            dataType:"JSON",
                            data:{
                                id:id
                            },
                            success:function(res){
                                console.log(res)
                            }
    
                        });
                        $("table tbody tr.acc").remove();
                    });
                    

                });
                // 点击选中和取消选中
                $("span.quanx").click(function(){
                    $("#zz table tbody tr td:first-child input").prop("checked",true);
                    $("#zz table tbody tr").addClass("ac");
                });
                $("span.qux").click(function(){
                    $("#zz table tbody tr td:first-child input").prop("checked",false);
                    $("#zz table tbody tr").removeClass("ac");
                });

            }
                // $('.main_content').html()
                $('.M-box11').pagination({
                    totalData: res.sum,
                    showData: res.data.length,
                    current:page,
                    pageCount: 2,
                    callback:function (res){
                        $.ajax({
                            type: "post",
                            url: "http://192.168.0.171:8080/WSHD/jiekou6/select",
                            data: {
                                page:res.getCurrent(),
                                num:21
                            },
                            dataType: "JSON",
                            success: function (res) {
                                console.log(res)
                                var html="";
                                for(var i in res.data){
                                    var url=res.data[i].httpUrl,id=res.data[i].articleId,tb=res.data[i].tableName,href=url+'?id='+id+'&tb='+tb;
                                    var href1="../XFbwz/XFbwz.html";
                                    html+="<tr>";
                                        html+="<td>";
                                            html+="<input type=checkbox data-cls="+res.data[i].articleId+">";
                                        html+="</td>";
                                        html+="<td>";
                                            html+="<span>"+res.data[i].title+"</span>";
                                        html+="</td>";
                                        html+="<td>"+res.data[i].addTime+"</td>";
                                        html+="<td>"+res.data[i].sortId+"</td>";
                                        html+="<td>"+res.data[i].author+"</td>";
                                        html+="<td>";
                                            html+="<a href=../Fbwz/Fbwz.html?id="+res.data[i].articleId+"></a>";
                                            html+="<a href=../Fbwz/Fbwz.html?id="+res.data[i].articleId+">编辑&nbsp;&nbsp;</a>";
                                            html+="<a href="+href+"></an>";
                                            html+="<a href="+href+">预览</a>";
                                        html+="</td>";
                                    html+="</tr>";
                    
                    
                                    $("#zz table tbody").html(html);
                    
                                    //点击删除
                                    $("#zz table tbody tr td input").click(function(){
                                        console.log($(this).attr("data-cls"));
                                        if($(this).parent().parent().hasClass("ac")){
                                            $(this).parent().parent().removeClass("ac");
                                        }else{
                                            $(this).parent().parent().addClass("ac");
                                        }
                                        var id=$(this).attr("data-cls");
                                        $("span.schu").click(function(){
                                            $.ajax({
                                                type:"post",
                                                url:"http://192.168.0.171:8080/WSHD/jiekou6/Delete",
                                                dataType:"JSON",
                                                data:{
                                                    id:id
                                                },
                                                success:function(res){
                                                    console.log(res)
                                                }
                        
                                            });
                                            $("table tbody tr.acc").remove();
                                        });
                                        

                                    });
                                    // 点击选中和取消选中
                                    $("span.quanx").click(function(){
                                        $("#zz table tbody tr td:first-child input").prop("checked",true);
                                        $("#zz table tbody tr").addClass("ac");
                                    });
                                    $("span.qux").click(function(){
                                        $("#zz table tbody tr td:first-child input").prop("checked",false);
                                        $("#zz table tbody tr").removeClass("ac");
                                    });
                    
                                }
                            }
                        });
                    }
                })

            }
        });
    }
    loadData0(1);

// 页面打开财经文章分页数据
$('.M-box12').pagination(
    {mode: 'fixed'});
    $("#oneo table tbody").html("");
function loadData1(page) {
    $.ajax({
        type: "post",
        url: "http://192.168.0.171:8080/WSHD/jiekou6/selectByType",
        data: {
            style:1,
            page: page,
            num: 21
        },
        dataType: "JSON",
        success: function (res) {

        console.log(res)
        var html="";
        for(var i in res.data){
            var url=res.data[i].httpUrl,id=res.data[i].articleId,tb=res.data[i].tableName,href=url+'?id='+id+'&tb='+tb;
            var href1="../XFbwz/XFbwz.html";
            html+="<tr>";
                html+="<td>";
                    html+="<input type=checkbox data-cls="+res.data[i].articleId+">";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].title+"</span>";
                html+="</td>";
                html+="<td>"+res.data[i].addTime+"</td>";
                html+="<td>"+res.data[i].sortId+"</td>";
                html+="<td>"+res.data[i].author+"</td>";
                html+="<td>";
                    html+="<a href=../Fbwz/Fbwz.html?id="+res.data[i].articleId+"></a>";
                    html+="<a href=../Fbwz/Fbwz.html?id="+res.data[i].articleId+">编辑&nbsp;&nbsp;</a>";
                    html+="<a href="+href+"></an>";
                    html+="<a href="+href+">预览</a>";
                html+="</td>";
            html+="</tr>";


            $("#oneo table tbody").html(html);

            //点击删除
            $("table tbody tr td input").click(function(){
                console.log($(this).attr("data-cls"));
                if($(this).parent().parent().hasClass("ac")){
                    $(this).parent().parent().removeClass("ac");
                }else{
                    $(this).parent().parent().addClass("ac");
                }
                var id=$(this).attr("data-cls");
                $("span.schu").click(function(){
                    $.ajax({
                        type:"post",
                        url:"http://192.168.0.171:8080/WSHD/jiekou6/Delete",
                        dataType:"JSON",
                        data:{
                            id:id
                        },
                        success:function(res){
                            console.log(res)
                        }
    
                    });
                    $("table tbody tr.ac").remove();
                });
                

            });
            // 点击选中和取消选中
            $("span.quanxcj").click(function(){
                $("#oneo table tbody tr td:first-child input").prop("checked",true);
                $("#oneo table tbody tr").addClass("ac");
            });
            $("span.quxcj").click(function(){
                $("#oneo table tbody tr td:first-child input").prop("checked",false);
                $("#oneo table tbody tr").removeClass("ac");
            });
            

        }
            // $('.main_content').html()
            $('.M-box12').pagination({
                totalData: res.sum,
                showData: res.data.length,
                current:page,
                pageCount: 2,
                callback:function (res){
                    $.ajax({
                        type: "post",
                        url: "http://192.168.0.171:8080/WSHD/jiekou6/selectByType",
                        data: {
                            style:1,
                            page: page,
                            num: 21
                        },
                        dataType: "JSON",
                        success: function (res) {
                            console.log(res)
                            var html="";
                            for(var i in res.data){
                                var url=res.data[i].httpUrl,id=res.data[i].articleId,tb=res.data[i].tableName,href=url+'?id='+id+'&tb='+tb;
                                var href1="../XFbwz/XFbwz.html";
                                html+="<tr>";
                                    html+="<td>";
                                        html+="<input type=checkbox data-cls="+res.data[i].articleId+">";
                                    html+="</td>";
                                    html+="<td>";
                                        html+="<span>"+res.data[i].title+"</span>";
                                    html+="</td>";
                                    html+="<td>"+res.data[i].addTime+"</td>";
                                    html+="<td>"+res.data[i].sortId+"</td>";
                                    html+="<td>"+res.data[i].author+"</td>";
                                    html+="<td>";
                                        html+="<a href=../Fbwz/Fbwz.html?id="+res.data[i].articleId+"></a>";
                                        html+="<a href=../Fbwz/Fbwz.html?id="+res.data[i].articleId+">编辑&nbsp;&nbsp;</a>";
                                        html+="<a href="+href+"></an>";
                                        html+="<a href="+href+">预览</a>";
                                    html+="</td>";
                                html+="</tr>";
                
                
                                $("#oneo table tbody").html(html);
                
                                //点击删除增加
                                $("table tbody tr td input").click(function(){
                                    console.log($(this).attr("data-cls"));
                                    if($(this).parent().parent().hasClass("ac")){
                                        $(this).parent().parent().removeClass("ac");
                                    }else{
                                        $(this).parent().parent().addClass("ac");
                                    }
                                    var id=$(this).attr("data-cls");
                                    $("span.schu").click(function(){
                                        $.ajax({
                                            type:"post",
                                            url:"http://192.168.0.171:8080/WSHD/jiekou6/Delete",
                                            dataType:"JSON",
                                            data:{
                                                id:id
                                            },
                                            success:function(res){
                                                console.log(res)
                                            }
                    
                                        });
                                        $("table tbody tr.ac").remove();
                                    });
                                    
                
                                });
                                
                                // 点击选中和取消选中
                                $("span.quanxcj").click(function(){
                                    $("#oneo table tbody tr td:first-child input").prop("checked",true);
                                    $("#oneo table tbody tr").addClass("ac");
                                });
                                $("span.quxcj").click(function(){
                                    $("#oneo table tbody tr td:first-child input").prop("checked",false);
                                    $("#oneo table tbody tr").removeClass("ac");
                                });
                
                            }
                        }
                    });
                }
            })

        }
    });
}
loadData1(1);

// 页面打开股票文章分页数据
$('.M-box13').pagination(
    {mode: 'fixed'});
    $("#twot table tbody").html("");
function loadData2(page) {
    $.ajax({
        type: "post",
        url: "http://192.168.0.171:8080/WSHD/jiekou6/selectByType",
        data: {
            style:2,
            page: page,
            num: 21
        },
        dataType: "JSON",
        success: function (res) {

        console.log(res)
        var html="";
        for(var i in res.data){
            var url=res.data[i].httpUrl,id=res.data[i].articleId,tb=res.data[i].tableName,href=url+'?id='+id+'&tb='+tb;
            var href1="../XFbwz/XFbwz.html";
            html+="<tr>";
                html+="<td>";
                    html+="<input type=checkbox data-cls="+res.data[i].articleId+">";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].title+"</span>";
                html+="</td>";
                html+="<td>"+res.data[i].addTime+"</td>";
                html+="<td>"+res.data[i].sortId+"</td>";
                html+="<td>"+res.data[i].author+"</td>";
                html+="<td>";
                    html+="<a href=../Fbwz/Fbwz.html?id="+res.data[i].articleId+"></a>";
                    html+="<a href=../Fbwz/Fbwz.html?id="+res.data[i].articleId+">编辑&nbsp;&nbsp;</a>";
                    html+="<a href="+href+"></an>";
                    html+="<a href="+href+">预览</a>";
                html+="</td>";
            html+="</tr>";


            $("#twot table tbody").html(html);

            //点击删除
            $("table tbody tr td input").click(function(){
                console.log($(this).attr("data-cls"));
                if($(this).parent().parent().hasClass("ac")){
                    $(this).parent().parent().removeClass("ac");
                }else{
                    $(this).parent().parent().addClass("ac");
                }
                var id=$(this).attr("data-cls");
                $("span.schu").click(function(){
                    $.ajax({
                        type:"post",
                        url:"http://192.168.0.171:8080/WSHD/jiekou6/Delete",
                        dataType:"JSON",
                        data:{
                            id:id
                        },
                        success:function(res){
                            console.log(res)
                        }

                    });
                    $("table tbody tr.ac").remove();
                });
                

            });//点击删除结束
            // 点击选中和取消选中
            $("span.quanxgp").click(function(){
                $("#twot table tbody tr td:first-child input").prop("checked",true);
                $("#twot table tbody tr").addClass("ac");
            });
            $("span.quxgp").click(function(){
                $("#twot table tbody tr td:first-child input").prop("checked",false);
                $("#twot table tbody tr").removeClass("ac");
            });

        }
            // $('.main_content').html()
            $('.M-box13').pagination({
                totalData: res.sum,
                showData: res.data.length,
                current:page,
                pageCount: 2,
                callback:function (res){
                    $.ajax({
                        type: "post",
                        url: "http://192.168.0.171:8080/WSHD/jiekou6/selectByType",
                        data: {
                            style:2,
                            page: page,
                            num: 21
                        },
                        dataType: "JSON",
                        success: function (res) {
                            console.log(res)
                            var html="";
                            for(var i in res.data){
                                var url=res.data[i].httpUrl,id=res.data[i].articleId,tb=res.data[i].tableName,href=url+'?id='+id+'&tb='+tb;
                                var href1="../XFbwz/XFbwz.html";
                                html+="<tr>";
                                    html+="<td>";
                                        html+="<input type=checkbox data-cls="+res.data[i].articleId+">";
                                    html+="</td>";
                                    html+="<td>";
                                        html+="<span>"+res.data[i].title+"</span>";
                                    html+="</td>";
                                    html+="<td>"+res.data[i].addTime+"</td>";
                                    html+="<td>"+res.data[i].sortId+"</td>";
                                    html+="<td>"+res.data[i].author+"</td>";
                                    html+="<td>";
                                        html+="<a href=../Fbwz/Fbwz.html?id="+res.data[i].articleId+"></a>";
                                        html+="<a href=../Fbwz/Fbwz.html?id="+res.data[i].articleId+">编辑&nbsp;&nbsp;</a>";
                                        html+="<a href="+href+"></an>";
                                        html+="<a href="+href+">预览</a>";
                                    html+="</td>";
                                html+="</tr>";
                
                
                                $("#twot table tbody").html(html);
                
                                //点击删除
                                $("table tbody tr td input").click(function(){
                                    console.log($(this).attr("data-cls"));
                                    if($(this).parent().parent().hasClass("ac")){
                                        $(this).parent().parent().removeClass("ac");
                                    }else{
                                        $(this).parent().parent().addClass("ac");
                                    }
                                    var id=$(this).attr("data-cls");
                                    $("span.schu").click(function(){
                                        $.ajax({
                                            type:"post",
                                            url:"http://192.168.0.171:8080/WSHD/jiekou6/Delete",
                                            dataType:"JSON",
                                            data:{
                                                id:id
                                            },
                                            success:function(res){
                                                console.log(res)
                                            }
                    
                                        });
                                        $("table tbody tr.ac").remove();
                                    });
                                    
                
                                });//点击删除结束
                                // 点击选中和取消选中
                                $("span.quanxgp").click(function(){
                                    $("#twot table tbody tr td:first-child input").prop("checked",true);
                                    $("#twot table tbody tr").addClass("ac");
                                });
                                $("span.quxgp").click(function(){
                                    $("#twot table tbody tr td:first-child input").prop("checked",false);
                                    $("#twot table tbody tr").removeClass("ac");
                                });
                
                            }
                        }
                    });
                }
            })

        }
    });
}
loadData2(1);

// 页面打开外汇文章分页数据
$('.M-box14').pagination(
    {mode: 'fixed'});
function loadData3(page) {
    $.ajax({
        type: "post",
        url: "http://192.168.0.171:8080/WSHD/jiekou6/selectByType",
        data: {
            style:3,
            page: page,
            num: 21
        },
        dataType: "JSON",
        success: function (res) {

        console.log(res)
        var html="";
        for(var i in res.data){
            var url=res.data[i].httpUrl,id=res.data[i].articleId,tb=res.data[i].tableName,href=url+'?id='+id+'&tb='+tb;
            var href1="../XFbwz/XFbwz.html";
            html+="<tr>";
                html+="<td>";
                    html+="<input type=checkbox data-cls="+res.data[i].articleId+">";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].title+"</span>";
                html+="</td>";
                html+="<td>"+res.data[i].addTime+"</td>";
                html+="<td>"+res.data[i].sortId+"</td>";
                html+="<td>"+res.data[i].author+"</td>";
                html+="<td>";
                    html+="<a href=../Fbwz/Fbwz.html?id="+res.data[i].articleId+"></a>";
                    html+="<a href=../Fbwz/Fbwz.html?id="+res.data[i].articleId+">编辑&nbsp;&nbsp;</a>";
                    html+="<a href="+href+"></an>";
                    html+="<a href="+href+">预览</a>";
                html+="</td>";
            html+="</tr>";


            $("#threeth table tbody").html(html);

            //点击删除
            $("table tbody tr td input").click(function(){
                console.log($(this).attr("data-cls"));
                if($(this).parent().parent().hasClass("ac")){
                    $(this).parent().parent().removeClass("ac");
                }else{
                    $(this).parent().parent().addClass("ac");
                }
                var id=$(this).attr("data-cls");
                $("span.schu").click(function(){
                    $.ajax({
                        type:"post",
                        url:"http://192.168.0.171:8080/WSHD/jiekou6/Delete",
                        dataType:"JSON",
                        data:{
                            id:id
                        },
                        success:function(res){
                            console.log(res)
                        }

                    });
                    $("table tbody tr.ac").remove();
                });
                

            });//点击删除结束
            // 点击选中和取消选中
            $("span.quanxwh").click(function(){
                $("#threeth table tbody tr td:first-child input").prop("checked",true);
                $("#threeth table tbody tr").addClass("ac");
            });
            $("span.quxwh").click(function(){
                $("#threeth table tbody tr td:first-child input").prop("checked",false);
                $("#threeth table tbody tr").removeClass("ac");
            });

        }
            // $('.main_content').html()
            $('.M-box14').pagination({
                totalData: res.sum,
                showData: res.data.length,
                current:page,
                pageCount: 2,
                callback:function (res){
                    $.ajax({
                        type: "post",
                        url: "http://192.168.0.171:8080/WSHD/jiekou6/selectByType",
                        data: {
                            style:3,
                            page: page,
                            num: 21
                        },
                        dataType: "JSON",
                        success: function (res) {
                            console.log(res)
                            var html="";
                            for(var i in res.data){
                                var url=res.data[i].httpUrl,id=res.data[i].articleId,tb=res.data[i].tableName,href=url+'?id='+id+'&tb='+tb;
                                var href1="../XFbwz/XFbwz.html";
                                html+="<tr>";
                                    html+="<td>";
                                        html+="<input type=checkbox data-cls="+res.data[i].articleId+">";
                                    html+="</td>";
                                    html+="<td>";
                                        html+="<span>"+res.data[i].title+"</span>";
                                    html+="</td>";
                                    html+="<td>"+res.data[i].addTime+"</td>";
                                    html+="<td>"+res.data[i].sortId+"</td>";
                                    html+="<td>"+res.data[i].author+"</td>";
                                    html+="<td>";
                                        html+="<a href=../Fbwz/Fbwz.html?id="+res.data[i].articleId+"></a>";
                                        html+="<a href=../Fbwz/Fbwz.html?id="+res.data[i].articleId+">编辑&nbsp;&nbsp;</a>";
                                        html+="<a href="+href+"></an>";
                                        html+="<a href="+href+">预览</a>";
                                    html+="</td>";
                                html+="</tr>";
                
                
                                $("#threeth table tbody").html(html);
                
                                //点击删除
                                $("table tbody tr td input").click(function(){
                                    console.log($(this).attr("data-cls"));
                                    if($(this).parent().parent().hasClass("ac")){
                                        $(this).parent().parent().removeClass("ac");
                                    }else{
                                        $(this).parent().parent().addClass("ac");
                                    }
                                    var id=$(this).attr("data-cls");
                                    $("span.schu").click(function(){
                                        $.ajax({
                                            type:"post",
                                            url:"http://192.168.0.171:8080/WSHD/jiekou6/Delete",
                                            dataType:"JSON",
                                            data:{
                                                id:id
                                            },
                                            success:function(res){
                                                console.log(res)
                                            }
                    
                                        });
                                        $("table tbody tr.ac").remove();
                                    });
                                    
                
                                });//点击删除结束
                                // 点击选中和取消选中
                                $("span.quanxwh").click(function(){
                                    $("#threeth table tbody tr td:first-child input").prop("checked",true);
                                    $("#threeth table tbody tr").addClass("ac");
                                });
                                $("span.quxwh").click(function(){
                                    $("#threeth table tbody tr td:first-child input").prop("checked",false);
                                    $("#threeth table tbody tr").removeClass("ac");
                                });
                
                            }
                        }
                    });
                }
            })

        }
    });
}
loadData3(1);

// 页面打开幻灯文章分页数据
$('.M-box15').pagination(
    {mode: 'fixed'});
    $("#fourf table tbody").html("");
function loadData4(page) {
    $.ajax({
        type: "post",
        url: "http://192.168.0.171:8080/WSHD/jiekou7/getHDarticle",
        data: {
            page: page,
            num: 15
        },
        dataType: "JSON",
        success: function (res) {

        console.log(res)
        var html="";
        for(var i in res.data){
            var url=res.data[i].httpUrl,id=res.data[i].aid,tb=res.data[i].tableName,href=url+'?id='+id+'&tb='+tb;
            
            html+="<tr>";
                html+="<td>";
                    html+="<input type=checkbox data-cls="+res.data[i].aid+">";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].articleTitle+"</span>";
                html+="</td>";
                html+="<td></td>";
                html+="<td></td>";
                html+="<td></td>";
                html+="<td></td>";
            html+="</tr>";


            $("#fourf table tbody").html(html);

            //点击删除
            $("#fourf table tbody tr td input").click(function(){
                console.log($(this).attr("data-cls"));
                if($(this).parent().parent().hasClass("ac")){
                    $(this).parent().parent().removeClass("ac");
                }else{
                    $(this).parent().parent().addClass("ac");
                }
                var id=$(this).attr("data-cls");
                
                $("span.schu").click(function(){
                    $.ajax({
                        type:"post",
                        url:"http://192.168.0.171:8080/WSHD/jiekou7/delHDarticle",
                        dataType:"JSON",
                        data:{
                            id:id
                        },
                        success:function(res){
                            console.log(res)
                        }
    
                    });
                    $("table tbody tr.ac").remove();
                    // window.location.reload();
                });
                

            });//删除结束
            // 点击选中和取消选中
            $("span.quanxhd").click(function(){
                $("#fourf table tbody tr td:first-child input").prop("checked",true);
                $("#fourf table tbody tr").addClass("ac");
            });
            $("span.quxhd").click(function(){
                $("#fourf table tbody tr td:first-child input").prop("checked",false);
                $("#fourf table tbody tr").removeClass("ac");
            });
            

        }
            // $('.main_content').html()
            $('.M-box15').pagination({
                showData: res.data.length,
                current:page,
                pageCount: 1,
                callback:function (res){
                    $.ajax({
                        type: "post",
                        url: "http://192.168.0.171:8080/WSHD/jiekou7/getHDarticle",
                        data: {
                            page: page,
                            num: 15
                        },
                        dataType: "JSON",
                        success: function (res) {
                            console.log(res)
                            var html="";
                            for(var i in res.data){
                                var url=res.data[i].httpUrl,id=res.data[i].aid,tb=res.data[i].tableName,href=url+'?id='+id+'&tb='+tb;
                               
                                html+="<tr>";
                                    html+="<td>";
                                        html+="<input type=checkbox data-cls="+res.data[i].aid+">";
                                    html+="</td>";
                                    html+="<td>";
                                        html+="<span>"+res.data[i].articleTitle+"</span>";
                                    html+="</td>";
                                    html+="<td></td>";
                                    html+="<td></td>";
                                    html+="<td></td>";
                                    html+="<td></td>";
                                html+="</tr>";
                
                
                                $("#fourf table tbody").html(html);
                                    //点击删除
                                $("#fourf table tbody tr td input").click(function(){
                                    console.log($(this).attr("data-cls"));
                                    if($(this).parent().parent().hasClass("ac")){
                                        $(this).parent().parent().removeClass("ac");
                                    }else{
                                        $(this).parent().parent().addClass("ac");
                                    }
                                    var id=$(this).attr("data-cls");
                                    
                                    $("span.schu").click(function(){
                                        $.ajax({
                                            type:"post",
                                            url:"http://192.168.0.171:8080/WSHD/jiekou7/delHDarticle",
                                            dataType:"JSON",
                                            data:{
                                                id:id
                                            },
                                            success:function(res){
                                                console.log(res)
                                            }
                        
                                        });
                                        $("table tbody tr.ac").remove();
                                    });
                                    

                                });//点击删除结束
                                // 点击选中和取消选中
                                $("span.quanxhd").click(function(){
                                    $("#fourf table tbody tr td:first-child input").prop("checked",true);
                                    $("#fourf table tbody tr").addClass("ac");
                                });
                                $("span.quxhd").click(function(){
                                    $("#fourf table tbody tr td:first-child input").prop("checked",false);
                                    $("#fourf table tbody tr").removeClass("ac");
                                });
                
                            }
                        }
                    });
                }
            })

        }
    });
}
loadData4(0);

    //分页结束
// 页面打开新手学习文章分页数据
$('.M-box16').pagination(
    {mode: 'fixed'});
    $("#fif table tbody").html("");
function loadData5(page) {
    $.ajax({
        type: "post",
        url: "http://192.168.0.171:8080/WSHD/jiekou6/selectByType",
        data: {
            style:5,
            page: page,
            num: 21
        },
        dataType: "JSON",
        success: function (res) {

        console.log(res)
        var html="";
        for(var i in res.data){
            var url=res.data[i].httpUrl,id=res.data[i].articleId,tb=res.data[i].tableName,href=url+'?id='+id+'&tb='+tb;
            var href1="../XFbwz/XFbwz.html";
            html+="<tr>";
                html+="<td>";
                    html+="<input type=checkbox data-cls="+res.data[i].articleId+">";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].title+"</span>";
                html+="</td>";
                html+="<td>"+res.data[i].addTime+"</td>";
                html+="<td>"+res.data[i].sortId+"</td>";
                html+="<td>"+res.data[i].author+"</td>";
                html+="<td>";
                    html+="<a href=../Fbwz/Fbwz.html?id="+res.data[i].articleId+"></a>";
                    html+="<a href=../Fbwz/Fbwz.html?id="+res.data[i].articleId+">编辑&nbsp;&nbsp;</a>";
                    html+="<a href="+href+"></an>";
                    html+="<a href="+href+">预览</a>";
                html+="</td>";
            html+="</tr>";


            $("#fif table tbody").html(html);

            //点击删除
            $("table tbody tr td input").click(function(){
                console.log($(this).attr("data-cls"));
                if($(this).parent().parent().hasClass("ac")){
                    $(this).parent().parent().removeClass("ac");
                }else{
                    $(this).parent().parent().addClass("ac");
                }
                var id=$(this).attr("data-cls");
                $("span.schu").click(function(){
                    $.ajax({
                        type:"post",
                        url:"http://192.168.0.171:8080/WSHD/jiekou6/Delete",
                        dataType:"JSON",
                        data:{
                            id:id
                        },
                        success:function(res){
                            console.log(res)
                        }

                    });
                    $("table tbody tr.ac").remove();
                });
                

            });//点击删除结束
            // 点击选中和取消选中
            $("span.quanxgp").click(function(){
                $("#twot table tbody tr td:first-child input").prop("checked",true);
                $("#twot table tbody tr").addClass("ac");
            });
            $("span.quxgp").click(function(){
                $("#twot table tbody tr td:first-child input").prop("checked",false);
                $("#twot table tbody tr").removeClass("ac");
            });

        }
            // $('.main_content').html()
            $('.M-box16').pagination({
                totalData: res.sum,
                showData: res.data.length,
                current:page,
                pageCount: 2,
                callback:function (res){
                    $.ajax({
                        type: "post",
                        url: "http://192.168.0.171:8080/WSHD/jiekou6/selectByType",
                        data: {
                            style:5,
                            page: page,
                            num: 21
                        },
                        dataType: "JSON",
                        success: function (res) {
                            console.log(res)
                            var html="";
                            for(var i in res.data){
                                var url=res.data[i].httpUrl,id=res.data[i].articleId,tb=res.data[i].tableName,href=url+'?id='+id+'&tb='+tb;
                                var href1="../XFbwz/XFbwz.html";
                                html+="<tr>";
                                    html+="<td>";
                                        html+="<input type=checkbox data-cls="+res.data[i].articleId+">";
                                    html+="</td>";
                                    html+="<td>";
                                        html+="<span>"+res.data[i].title+"</span>";
                                    html+="</td>";
                                    html+="<td>"+res.data[i].addTime+"</td>";
                                    html+="<td>"+res.data[i].sortId+"</td>";
                                    html+="<td>"+res.data[i].author+"</td>";
                                    html+="<td>";
                                        html+="<a href=../Fbwz/Fbwz.html?id="+res.data[i].articleId+"></a>";
                                        html+="<a href=../Fbwz/Fbwz.html?id="+res.data[i].articleId+">编辑&nbsp;&nbsp;</a>";
                                        html+="<a href="+href+"></an>";
                                        html+="<a href="+href+">预览</a>";
                                    html+="</td>";
                                html+="</tr>";
                
                
                                $("#fif table tbody").html(html);
                
                                //点击删除
                                $("table tbody tr td input").click(function(){
                                    console.log($(this).attr("data-cls"));
                                    if($(this).parent().parent().hasClass("ac")){
                                        $(this).parent().parent().removeClass("ac");
                                    }else{
                                        $(this).parent().parent().addClass("ac");
                                    }
                                    var id=$(this).attr("data-cls");
                                    $("span.schu").click(function(){
                                        $.ajax({
                                            type:"post",
                                            url:"http://192.168.0.171:8080/WSHD/jiekou6/Delete",
                                            dataType:"JSON",
                                            data:{
                                                id:id
                                            },
                                            success:function(res){
                                                console.log(res)
                                            }
                    
                                        });
                                        $("table tbody tr.ac").remove();
                                    });
                                    
                
                                });//点击删除结束
                                // 点击选中和取消选中
                                $("span.quanxgp").click(function(){
                                    $("#twot table tbody tr td:first-child input").prop("checked",true);
                                    $("#twot table tbody tr").addClass("ac");
                                });
                                $("span.quxgp").click(function(){
                                    $("#twot table tbody tr td:first-child input").prop("checked",false);
                                    $("#twot table tbody tr").removeClass("ac");
                                });
                
                            }
                        }
                    });
                }
            })

        }
    });
}
loadData5(0);




})