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
        var id=$(this).children().eq(0).attr("id");
        console.log(id);
    });
    //点击空白处隐藏下拉菜单
    $(document).click(function(event){
        var _con = $(".lxC");  // 设置失效目标区域
        if(!_con.is(event.target) && _con.has(event.target).length === 0){
            $("div.lxCt").css("display","none");
        }

    });

    // 点击选中和取消选中
    $("span.quanx").click(function(){
        $("div.mRto table tbody tr td:first-child input").prop("checked",true);
        $("div.mRto table tbody tr").addClass("ac");
    });
    $("span.qux").click(function(){
        $("div.mRto table tbody tr td:first-child input").prop("checked",false);
        $("div.mRto table tbody tr").removeClass("ac");
    });
    
    
    
    // 分页数据
    $('.M-box11').pagination(
        {mode: 'fixed'});
    function loadData(page) {
        $.ajax({
            type: "post",
            url: "http://192.168.0.171:8080/WSHD/jiekou6/select",
            data: {
                page: page,
                num: 18
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


                $("div.mRto table tbody").html(html);

                //点击删除增加
                $("div.mRto table tbody tr td input").click(function(){
                    console.log($(this).attr("data-cls"));
                    if($(this).parent().parent().hasClass("ac")){
                        $(this).parent().parent().removeClass("ac");
                    }else{
                        $(this).parent().parent().addClass("ac");
                    }
                    var id=$(this).attr("data-cls");
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

                });
                $("span.schu").click(function(){

                    $("div.mRto table tbody tr.ac").remove();
                });

            }
                // $('.main_content').html()
                $('.M-box11').pagination({
                    totalData: res.count,
                    showData: res.data.length,
                    current:page,
                    pageCount: 2,
                    callback:function (res){
                        $.ajax({
                            type: "post",
                            url: "http://192.168.0.171:8080/WSHD/jiekou6/select",
                            data: {
                                page:res.getCurrent(),
                                num:18
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
                    
                    
                                    $("div.mRto table tbody").html(html);
                    
                                    //点击删除增加
                                    $("div.mRto table tbody tr td input").click(function(){
                                        console.log($(this).attr("data-cls"));
                                        if($(this).parent().parent().hasClass("ac")){
                                            $(this).parent().parent().removeClass("ac");
                                        }else{
                                            $(this).parent().parent().addClass("ac");
                                        }
                                        var id=$(this).attr("data-cls");
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
                    
                                    });
                                    $("span.schu").click(function(){
                    
                                        $("div.mRto table tbody tr.ac").remove();
                                    });
                    
                                }
                            }
                        });
                    }
                })

            }
        });
    }
    loadData(1);
    //分页结束
















})