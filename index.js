$(".btn").on("click", function(){
    let storedId = this.id;

    $("p").not("#txt" + storedId).removeClass("visible");
    $("img").not("#img" + storedId).removeClass("rotate");

    $("#txt" + storedId).toggleClass("visible")
    $("#img" + storedId).toggleClass("rotate")
})