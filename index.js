$(".galanot button").click(function () {
 $(".galanot").hide("slow")
});
var img, cur;
var imgid;
$(".popimg").hide()
$(".galastars p").click(function () {
 $(".galanot").hide();
 img = document.getElementById("imgpop");
 popup(parseInt(this.id));
});

function popup(cur){
 console.log(cur);
 img.src = "./img/galaxy/" + cur + ".jpg";
 $(".popimg").show();
}


$(".popclose").click(function () {
 $(".popimg").hide();
 img.src = "";
});