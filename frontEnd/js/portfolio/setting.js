jQuery(document).ready(function(a){if(jQuery().quicksand){var l=a(".portfolio").clone();a(".filter li").click(function(t){a(".filter li").removeClass("active");var i=a(this).attr("class").split(" ").slice(-1)[0];if("all"==i)var e=l.find(".item-thumbs");else e=l.find(".item-thumbs[data-type="+i+"]");return a(".portfolio").quicksand(e,{duration:600,adjustHeight:"auto"},function(){a(".fancybox").fancybox({padding:0,beforeShow:function(){this.title=a(this.element).attr("title"),this.title="<h4>"+this.title+"</h4><p>"+a(this.element).parent().find("img").attr("alt")+"</p>"},helpers:{title:{type:"inside"}}})}),a(this).addClass("active"),!1})}});
