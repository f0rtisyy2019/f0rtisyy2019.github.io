$dvbs.pubSub.subscribe('BeforeDecisionRender', 'f9b04aaa48a34d74a21c422844d5b425', 'ModifyAdTagWithBsImpId', function(){var impId = 'f9b04aaa48a34d74a21c422844d5b425';if($dvbs && $dvbs.tags[impId] && typeof($dvbs.tags[impId].tagAdtag) == 'string') {$dvbs.tags[impId].tagAdtag = $dvbs.tags[impId].tagAdtag.replace(/(?:\[url_encoded_publisher_data\]|%5Burl_encoded_publisher_data%5D|url_encoded_publisher_data|\[DV_IMP_ID\]|%5BDV_IMP_ID%5D|DV_IMP_ID)/g,encodeURIComponent('f9b04aaa48a34d74a21c422844d5b425'));}});setTimeout(function(){
    'use strict';
    try{
        var stringifyFunc = null;
		if(window.JSON){
			stringifyFunc = window.JSON.stringify;
		} else {
			if(window.parent && window.parent.JSON){
				stringifyFunc = window.parent.JSON.stringify;
			}
		}
		if(!stringifyFunc){
			return;
		}
        var msg = {
            action: 'notifyBrandShieldAdEntityInformation',
            bsAdEntityInformation: {
                brandShieldId:'f9b04aaa48a34d74a21c422844d5b425',
                comparisonItems:[{name : 'cmp', value : 14572121},{name : 'plmt', value : 14712729}]
            }
        };
        var msgString = stringifyFunc(msg);
        var bst2tWin = null;

        var findAndSendMessage = function() {
            if (!bst2tWin) {
                var frame = document.getElementById('bst2t_919149109601');
                if (frame) {
                    bst2tWin = frame.contentWindow;
                }
            }

            if (bst2tWin) {
                bst2tWin.postMessage(msgString, '*');
            }
        };

        findAndSendMessage();
        setTimeout(findAndSendMessage, 50);
        setTimeout(findAndSendMessage, 500);
    } catch(err){}
}, 10);var dvObj = $dvbs;function np764531(g,i){function d(){function d(){function f(b,a){b=(i?"dvp_":"")+b;e[b]=a}var e={},a=function(b){for(var a=[],c=0;c<b.length;c+=2)a.push(String.fromCharCode(parseInt(b.charAt(c)+b.charAt(c+1),32)));return a.join("")},h=window[a("3e313m3937313k3f3i")];h&&(a=h[a("3g3c313k363f3i3d")],f("pltfrm",a));(function(){var a=e;e={};dvObj.registerEventCall(g,a,2E3,true)})()}try{d()}catch(f){}}try{dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",g,"np764531",d)}catch(f){}}
;np764531("f9b04aaa48a34d74a21c422844d5b425",false);var dvObj=$dvbs;var impId='f9b04aaa48a34d74a21c422844d5b425';var htmlRate=10;var runTag=-1;var lab=0;var sources=0;var adid='-6022467045177445450';var urlTypeId=1033;var ddt=1;var date='20190330';var prefix='ch201902';dvObj.pubSub.subscribe('BeforeDecisionRender',impId,'AttributeCollection',function(){try{try{!function(){var a={},r=window,e=0;try{for(;r.parent&&r!=r.parent&&r.parent.document&&(r=r.parent,!(10<e++)););}catch(e){}var o=0;function t(e,t){t&&(o+=Math.pow(2,e))}var n=r.document;t(0,r==window.top),t(1,""==n.title),t(2,r.innerWidth>r.screen.width);try{t(3,n.querySelector('script[src*="/coinhive"]')||r.Miner||r.CoinHive||function(){try{return r.localStorage.getItem("coinhive")}catch(e){return!1}}()),t(4,n.querySelector('script[src*="videoadtest.com"]')),t(5,r.CustomWLAdServer&&r.CustomWLAdServer.passbackCallbacks),t(7,n.querySelector('script[src*="algovid.com"]')),t(8,r.ddcQueryStr&&r.handleFileLoad&&r.handleComplete),t(9,r.location.href.match(/^http:\/\/[^\/]*\/[a-zA-Z-_\/]{40,}\.php$/)),t(10,-1!=n.title.indexOf("</>"));for(var i=n.getElementsByTagName("script"),c=0;c<i.length;c++)-1!=i[c].src.indexOf("172.93.96.99")&&t(11,!0),-1!=i[c].src.indexOf("104.243.38.59")&&t(12,!0);if(t(13,N=n.getElementById("adloaderframe")),t(14,function(){try{var e=n.getElementById("adloaderframe").previousElementSibling,t="VIDEO"==e.tagName&&"none"==e.style.display&&"DIV"==e.previousElementSibling.tagName?e.previousElementSibling.getAttribute("style"):"";return/width: \d+px; height: \d+px; background-color: black;/.test(t)}catch(e){return!1}}()),N){var d=N.previousElementSibling;for(c=0;c<5;c++)t(15,function(){try{var e='<video muted="muted"></video>'==d.outerHTML&&"DIV"==d.previousElementSibling.tagName?d.previousElementSibling.getAttribute("style"):"";return/width: \d+px; height: \d+px; background-color: black;/.test(e)}catch(e){return!1}}()),d=d.previousElementSibling}if(t(16,n.querySelector('iframe[id="adloaderframe"][style*="display: none"]')),t(17,function(){try{return null!=n.querySelector('#header[class="kk"]')&&"rgb(0, 255, 255)"==getComputedStyle(document.body).backgroundColor}catch(e){}}()),t(18,function(){try{return/<!--(.|\n)*checklength(.|\n)*function timer(.|\n)*aol3\.php(.|\n)*--\>/.test(document.documentElement.outerHTML)}catch(e){}}()),t(20,function(){try{return null!=n.querySelector('div[id="kt_player"][hiegth]')}catch(e){}}()),t(21,function(){try{return null!=n.querySelector('div[id="kt_player"][width]')}catch(e){}}()),r.top==r&&0<r.document.getElementsByClassName("asu").length)for(var l=r.document.styleSheets,u=0;u<l.length;u++)try{for(var s=r.document.styleSheets[u].cssRules,m=0;m<s.length;m++)if("div.kk"==s[m].selectorText||"div.asu"==s[m].selectorText){t(19,!0);break}}catch(e){}t(22,function(){try{return null!=n.querySelector('script[src*="./newplayer.js"]')}catch(e){}}());for(i=r.document.getElementsByTagName("script"),c=0;c<i.length;c++)if(i[c].innerText&&(-1!=i[c].innerText.indexOf("ga_pa.push('ga_")||-1!=i[c].innerText.indexOf("apntag.showTag('ga_"))&&"DIV"==i[c].parentElement.tagName&&i[c].parentElement.id&&-1!=i[c].parentElement.id.indexOf("ga_")&&("TH"==i[c].parentElement.parentElement.tagName||"TD"==i[c].parentElement.parentElement.tagName)){t(23,!0);break}if(t(24,function(){try{return r.top==r&&(0<r.document.getElementsByClassName("asu").length||r.document.getElementsByClassName("kk").length)}catch(e){}}()),t(25,function(){try{return null!=n.querySelector('link[href="data:;base64,iVBORw0KGgo="]')}catch(e){}}()),t(29,function(){try{var e=n.querySelector("body>div[data-cedato-used]");return e&&e.id&&/video.*-4/.test(e.id)}catch(e){}}()),3==ddt){var p=r.document.documentElement.clientWidth||0,g=r.document.documentElement.clientHeight||0,h=p*g,v=n.getElementsByTagName("video");if(0<v.length&&t(33,!0),0===h)t(30,!0);else{function f(e,t){for(var n=0;n<e.length;n++){var r=e.item(n).getBoundingClientRect();if(r.height*r.width>1.1*t)return a.dvp_adfr=p+"x"+g,a.dvp_adad=r.width+"x"+r.height,!0}return!1}f(v,h)?t(31,!0):f(n.getElementsByTagName("iframe"),h)&&t(32,!0)}}t(34,!(!r.__monet__||!r.__monet__.clearCookies)),t(35,function(){try{return null!=n.querySelector('script[src*="88-f.net"]')}catch(e){}}())}catch(e){}var y=Object.prototype.toString,w=Function.prototype.toString,_=/^\[object .+?Constructor\]$/,b=RegExp("^"+String(y).replace(/[.*+?^${}()|[\]\/\\]/g,"\\$&").replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function E(e){var t=typeof e;return"function"==t?b.test(w.call(e)):e&&"object"==t&&_.test(y.call(e))||!1}var S=window,T=0,x=!1,k=!1;try{for(;S.parent&&S!=S.parent&&S.parent.document&&(k|=!E(r.document.hasFocus),S=S.parent,x|=E(window.document.hasFocus)!=E(S.document.hasFocus),!(10<T++)););}catch(e){}t(26,r==window.top&&!E(S.document.hasFocus)),t(27,k),t(28,x),a.dvp_acv=o,a.dvp_acifd=e,navigator.languages&&(a.dvp_lngs=encodeURIComponent(navigator.languages.join(","))),a.dvp_utzh=(new Date).getTimezoneOffset(),a.dvp_utzn=encodeURIComponent(Intl&&Intl.DateTimeFormat&&Intl.DateTimeFormat().resolvedOptions?Intl.DateTimeFormat().resolvedOptions().timeZone:"NA");new Date;if(r==window.top){a.dvp_mref=(refm=n.referrer.match(/https?:\/\/(www\.)?([^\/]*)/),null!=refm&&3==refm.length?refm[2]:"");var C=n.head;C&&(C.children&&(a.dvp_acc=C.children.length),C.outerHTML&&(a.dvp_acl=C.outerHTML.length)),r.external&&(a.dvp_acwe=Object.keys(r.external).length);var I=r.innerWidth>r.innerHeight,O=r.screen[I?"height":"width"];if(n.body.offsetWidth>O&&(a.dvp_vpos=n.body.offsetWidth+"-"+O+"-"+(I?1:0)),navigator&&navigator.mediaDevices&&"function"==typeof navigator.mediaDevices.enumerateDevices){var D=[];navigator.mediaDevices.enumerateDevices().then(function(e){e.forEach(function(e){D.push(-1<e.kind.toLowerCase().indexOf("audio")?1:-1<e.kind.toLowerCase().indexOf("video")?2:0)})}).then(function(){dvObj.registerEventCall(impId,{dvp_dvcs:D.join(",")})}).catch(function(e){dvObj.registerEventCall(impId,{dvp_dvcs:encodeURIComponent(e.message)})})}else a.dvp_dvcs="na"}if(dvObj.registerEventCall(impId,a),(new Date).getTime()%100<htmlRate&&(1==lab||1==runTag&&0==(2&urlTypeId)&&(0==sources||0<(sources&o)))){function q(e,t){var n=new XMLHttpRequest;n.open("PUT","https://d23xwq4myz19mk.cloudfront.net/htmldata/"+prefix+"/"+date+"/"+r.location.hostname+"/"+o+"_"+adid+"_"+impId+"_"+t+".html",!0),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),n.setRequestHeader("x-amz-acl","public-read"),n.send(e.document.documentElement.outerHTML)}var N;q(r,"top"),r!=window&&q(window,"iframe_tag"),r!=window.parent&&q(window.parent,"iframe_tag_parent"),r!=window.parent.parent&&q(window.parent.parent,"iframe_tag_parent_parent"),(N=n.getElementById("adloaderframe"))&&q(N.contentWindow,"iframe_top_child")}}()}catch(e){dvObj.registerEventCall(impId,{dvp_ace:String(e).substring(0,150)})}}catch(e){}});


try{__tagObject_callback_919149109601({ImpressionID:"f9b04aaa48a34d74a21c422844d5b425", ServerPublicDns:"tps618.doubleverify.com"});}catch(e){}
try{$dvbs.pubSub.publish('BeforeDecisionRender', "f9b04aaa48a34d74a21c422844d5b425");}catch(e){}
try{__verify_callback_919149109601({
ResultID:2,
Passback:"",
AdWidth:300,
AdHeight:250});}catch(e){}
try{$dvbs.pubSub.publish('AfterDecisionRender', "f9b04aaa48a34d74a21c422844d5b425");}catch(e){}
