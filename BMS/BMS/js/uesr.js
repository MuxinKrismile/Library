/*-----------------------------------/
  /*	DROPDOWN
  /*----------------------------------*/

$(document).ready(function () {
    $(document).off('click.bs.dropdowwn.data-api') ;
    dropdownOpen() ;
}) ;
function dropdownOpen() {

    $("li.dropdown").mouseover(function () {
        $(this).addClass('open') ;
    }) ;
    $("li.dropdown").mouseout(function () {
        $(this).removeClass('open') ;
    });
}

/*-----------------------------------/
  /*	MAIN
  /*----------------------------------*/

function adaptiveHeight(obj) {
    var mainheight = $(obj).contents().find("body").height()+50 ;
    $(obj).height(mainheight) ;
}

/*-----------------------------------/
  /*	WEST
  /*----------------------------------*/
$(document).ready(function()
{
    $(".account").click(function()
    {
        var X=$(this).attr('id');

        if(X==1)
        {
            $(".submenu").hide();
            $(this).attr('id', '0');
        }
        else
        {

            $(".submenu").show();
            $(this).attr('id', '1');
        }

    });

//Mouseup textarea false
    $(".submenu").mouseup(function()
    {
        return false
    });
    $(".account").mouseup(function()
    {
        return false
    });


//Textarea without editing.
    $(document).mouseup(function()
    {
        $(".submenu").hide();
        $(".account").attr('id', '');
    });

});

/*改变动态*/
    // function change_div(id){
    //     if (id == 'dynamicall' )
    //     {
    //         document.getElementById("dynamicall").style.display = 'block' ;
    //         document.getElementById("collection").style.display = 'none' ;
    //         document.getElementById("experience").style.display = 'none' ;
    //         document.getElementById("readingNotes").style.display = 'none' ;
    //         document.getElementById("myAttention").style.display = 'none' ;
    //         document.getElementById("myFeedback").style.display = 'none' ;
    //     }
    //     else if(id == 'collection')
    //     {
    //         document.getElementById("collection").style.display = 'block' ;
    //         document.getElementById("dynamicall").style.display = 'none' ;
    //         document.getElementById("experience").style.display = 'none' ;
    //         document.getElementById("readingNotes").style.display = 'none' ;
    //         document.getElementById("myAttention").style.display = 'none' ;
    //         document.getElementById("myFeedback").style.display = 'none' ;
    //     } else if(id == 'experience')
    //     {
    //         document.getElementById("experience").style.display = 'block' ;
    //         document.getElementById("collection").style.display = 'none' ;
    //         document.getElementById("dynamicall").style.display = 'none' ;
    //         document.getElementById("readingNotes").style.display = 'none' ;
    //         document.getElementById("myAttention").style.display = 'none' ;
    //         document.getElementById("myFeedback").style.display = 'none' ;
    //     } else if(id == 'readingNotes')
    //     {
    //         document.getElementById("readingNotes").style.display = 'block' ;
    //         document.getElementById("collection").style.display = 'none' ;
    //         document.getElementById("experience").style.display = 'none' ;
    //         document.getElementById("dynamicall").style.display = 'none' ;
    //         document.getElementById("myAttention").style.display = 'none' ;
    //         document.getElementById("myFeedback").style.display = 'none' ;
    //     } else if(id == 'myAttention')
    //     {
    //         document.getElementById("myAttention").style.display = 'block' ;
    //         document.getElementById("collection").style.display = 'none' ;
    //         document.getElementById("experience").style.display = 'none' ;
    //         document.getElementById("readingNotes").style.display = 'none' ;
    //         document.getElementById("dynamicall").style.display = 'none' ;
    //         document.getElementById("myFeedback").style.display = 'none' ;
    //     } else if(id == 'myFeedback')
    //     {
    //         document.getElementById("myFeedback").style.display = 'block' ;
    //         document.getElementById("collection").style.display = 'none' ;
    //         document.getElementById("experience").style.display = 'none' ;
    //         document.getElementById("readingNotes").style.display = 'none' ;
    //         document.getElementById("myAttention").style.display = 'none' ;
    //         document.getElementById("dynamicall").style.display = 'none' ;
    //     }
    // }