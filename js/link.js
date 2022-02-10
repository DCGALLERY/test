
function loadLink(){
    $.getJSON("app.json", function(data){
        var domain = data["domain"];
        var link_page = data["link-page"];
        $(".js-href-home").prop("href", domain+link_page["home"]);
        $(".js-href-blog").prop("href", domain+link_page["blog"]);
        $(".js-href-portfolio").prop("href", domain+link_page["portfolio"]);
        $(".js-href-about").prop("href", domain+link_page["about"]);
        var link_social = data["link-social"];
        $(".js-href-facebook").prop("href", domain+link_social["facebook"]);
        $(".js-href-twitter").prop("href", domain+link_social["twitter"]);
        $(".js-href-instagram").prop("href", domain+link_social["instagram"]);
        $(".js-href-github").prop("href", domain+link_social["github"]);
        $(".js-href-500px").prop("href", domain+link_social["500px"]);
        var info = data["info"];
        $(".js-info-email").prop("href", "mailto:"+info["email"]);
        $(".js-info-email").html(info["email"]);
        $(".js-info-phone").html(info["phone"]);
        $(".js-info-address").html(info["address"]["stress"]+`<br/>`+info["address"]["city"]+`, `+info["address"]["country"]+`<br/>`+info["address"]["zip-code"]);
    });
}
loadLink();
