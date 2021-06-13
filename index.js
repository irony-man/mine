$(".galanot button").click(function () {
 $(".galanot").hide("slow")
});
var img, cur;
$(".popimg").hide();
$(".galastars p").click(function () {
 $(".galanot").hide();
 img = document.getElementById("imgpop");
 cur= this.id;
 img.src = "./img/galaxy/" + cur + ".jpg";
 $(".popimg").show();
});


$(".popclose").click(function () {
 $(".popimg").hide();
 img.src = "";
});