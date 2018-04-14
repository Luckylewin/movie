var random = {
	ad_num : 1,
	init : function(){
		n = (Math.floor(Math.random()*random.ad_num+1));
		switch(n){
			case 1:
                        document.writeln("1");
                                ;(function(){
                                	var m=document.createElement("script");
                                        m.src=""
                                	//m.src="http://iiiiii.tjshuimu.com:88/m/575/"+Math.round(Math.random()*10000);
                                	var s=document.getElementsByTagName("script")[0];
                                	//s.parentNode.insertBefore(m,s)
                                })();
                        break;
		}
	}
}
random.init();
