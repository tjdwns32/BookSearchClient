
    function search() {
        // 입력칸에 키가 하나 입력되면 무조건 호출
        if( event.keyCode == 13 ) {
            // 만약 enterkey가 입력되면 여기를 수행
            // AJAX 호출( JSONP 방식으로 호출 )
            $.ajax({
                url : "http://localhost:8080/book/keywordSearch",
                type : "GET",
                dataType : "jsonp",
                jsonp : "callback",
                data : {
                    keyword : $("#keyword").val()
                },
                success : function(result) {
                    $("tbody").empty();
                    /*
                    * <tr>
                         <td>
                            <img src="~~">
                         </td>
                         <td>Lorem</td>
                         <td>ipsum</td>
                         <td>dolor</td>
                     </tr>
                    * */
                    for(var i =0 ;i<result.length;i++) {
                        var tr = $("<tr></tr>");
                        var img = $("<img />").attr("src", result[i].img);
                        var imgtd = $("<td></td>").append(img);
                        var titletd = $("<td></td>").text(result[i].title);
                        var authortd = $("<td></td>").text(result[i].author);
                        var pricetd = $("<td></td>").text(result[i].price);
                        tr.append(imgtd);
                        tr.append(titletd);
                        tr.append(authortd);
                        tr.append(pricetd);
                        $("tbody").append(tr);
                    }

                },
                error : function() {
                    alert("먼가 이상해요!!");
                }
            });
        }
    }

