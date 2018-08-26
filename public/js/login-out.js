$(document).ready(function() {
    // $("input[value='check-cod']").click(function() {
    //     $("#cod").show("slow");
    //     $("#credit").hide("fast");
    // })
    // $("input[value='check-credit']").click(function() {
    //     $("#cod").hide("fast");
    //     $("#credit").show("slow");
    // })
    $("#visa").click(function() {
        $("#infor-visa").show("500");
        $("#infor-bank-acount").hide("fast");
        $("#infor-bank-pw").hide("fast");
    });
    $("#vpbank").click(function() {
        $("#infor-visa").hide("fast");
        $("#infor-bank-acount").show("500");
        $("#infor-bank-pw").show("500");
    });
    $("img").click(function() {
        $("img").removeClass("active");
        $(this).addClass("active");
    });
    if (screen.width < 768) {
        var element = document.getElementsByClassName("col");
        element.classList.add("col-md-3");
    }
    $("#signin").click(function() {
        $("#myRegister").modal();
    });
    $("#login").click(function() {
        $("#myLogin").modal();
    });
})