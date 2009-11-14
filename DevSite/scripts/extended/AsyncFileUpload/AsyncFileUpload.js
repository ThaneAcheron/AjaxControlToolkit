// (c) Copyright Microsoft Corporation.
// This source is subject to the Microsoft Public License.
// See http://www.microsoft.com/opensource/licenses.mspx#Ms-PL.
// All other rights reserved.
Type.registerNamespace("Sys.Extended.UI");Sys.Extended.UI.AsyncFileUpload=function(c){var b=null,a=this;Sys.Extended.UI.AsyncFileUpload.initializeBase(a,[c]);a._hiddenField=b;a._inputFile=b;a._innerTB=b;a._postBackUrl="";a._formName="";a._iframe=b;a._waitTimer=b;a._completeBackColor="";a._uploadingBackColor="";a._errorBackColor="";a._throbber=b;a._onchange$delegate=b;a._onload$delegate=b;a._app_onload$delegate=Function.createDelegate(a,a._app_onload);a._onmouseup$delegate=b};Sys.Extended.UI.AsyncFileUpload.prototype={get_throbber:function(){return this._throbber},set_throbber:function(a){this._throbber=a},get_completeBackColor:function(){return this._completeBackColor},set_completeBackColor:function(a){this._completeBackColor=a},get_errorBackColor:function(){return this._errorBackColor},set_errorBackColor:function(a){this._errorBackColor=a},get_uploadingBackColor:function(){return this._uploadingBackColor},set_uploadingBackColor:function(a){this._uploadingBackColor=a},get_inputFile:function(){return this._inputFile},set_inputFile:function(a){this._inputFile=a},get_hiddenField:function(){return this._hiddenField},set_hiddenField:function(a){this._hiddenField=a},get_innerTB:function(){return this._innerTB},set_innerTB:function(a){this._innerTB=a},get_postBackUrl:function(){return this._postBackUrl},set_postBackUrl:function(a){this._postBackUrl=a},get_formName:function(){return this._formName},set_formName:function(a){this._formName=a},add_uploadStarted:function(a){this.get_events().addHandler("uploadStarted",a)},remove_uploadStarted:function(a){this.get_events().removeHandler("uploadStarted",a)},raiseUploadStarted:function(b){var a=this.get_events().getHandler("uploadStarted");if(a)return a(this,b);return true},add_uploadComplete:function(a){this.get_events().addHandler("uploadComplete",a)},remove_uploadComplete:function(a){this.get_events().removeHandler("uploadComplete",a)},raiseUploadComplete:function(b){var a=this.get_events().getHandler("uploadComplete");a&&a(this,b)},add_uploadError:function(a){this.get_events().addHandler("uploadError",a)},remove_uploadError:function(a){this.get_events().removeHandler("uploadError",a)},raiseUploadError:function(b){var a=this.get_events().getHandler("uploadError");if(a){a(this,b);return true}return false},setThrobber:function(a){if(this.get_throbber()!=null)this.get_throbber().style.display=a?"":"none"},_onStart:function(b){var a=this.raiseUploadStarted(new Sys.Extended.UI.AsyncFileUploadEventArgs(b,null,null,null));if(typeof a=="undefined")a=true;return a},initialize:function(){var a=this;Sys.Extended.UI.AsyncFileUpload.callBaseMethod(a,"initialize");Sys.Application.add_load(a._app_onload$delegate);a._iframeName=a.get_element()+"_iframe";a.setThrobber(false)},dispose:function(){var b=null,a=this;Sys.Application.remove_load(a._app_onload$delegate);if(a._onchange$delegate!=b){$common.removeHandlers(a._inputFile,{change:a._onchange$delegate});a._onchange$delegate=b}if(a._onmouseup$delegate!=b){$common.removeHandlers(a._inputFile,{mouseup:a._onmouseup$delegate});a._onmouseup$delegate=b}a._removeIframe();Sys.Extended.UI.AsyncFileUpload.callBaseMethod(a,"dispose")},_onmouseup:function(){var a=this._inputFile;setTimeout(function(){a.blur()},0);return true},_app_onload:function(){var a=this;a.setThrobber(false);if(a._inputFile!=null){if(a._onchange$delegate==null){a._onchange$delegate=Function.createDelegate(a,a._onchange);$addHandlers(a._inputFile,{change:a._onchange$delegate})}if(Sys.Browser.agent==Sys.Browser.Firefox){a._inputFile.size=0;var c=a._inputFile.offsetWidth;a._inputFile.style.width="";while(a._inputFile.offsetWidth<c)a._inputFile.size++}if(a._innerTB!=null){a._inputFile.blur();var b=a._inputFile;setTimeout(function(){b.blur()},0);a._innerTB.style.width=a._inputFile.offsetWidth-107+"px";a._inputFile.parentNode.style.width=a._inputFile.offsetWidth+"px";if(Sys.Browser.agent==Sys.Browser.InternetExplorer){a._onmouseup$delegate=Function.createDelegate(a,a._onmouseup);$addHandlers(a._inputFile,{mouseup:a._onmouseup$delegate})}}}},_removeIframe:function(){var b=null,a=this;a._removeTimer();if(a._iframe!=b){if(a._onload$delegate!=b){$common.removeHandlers(a._iframe,{load:a._onload$delegate});a._onload$delegate=b}document.body.removeChild(a._iframe);a._iframe=b}},_removeTimer:function(){if(this._waitTimer!=null){window.clearTimeout(this._waitTimer);this._waitTimer=null}},_onError:function(b){var a=this,c=Sys.Extended.UI.Resources.AsyncFileUpload_UnhandledException;a.setThrobber(false);if(a.get_errorBackColor()!="")if(a._innerTB!=null)a._innerTB.style.backgroundColor=a.get_errorBackColor();else a._inputFile.style.backgroundColor=a.get_errorBackColor();!a.raiseUploadError(new Sys.Extended.UI.AsyncFileUploadEventArgs(a._inputFile.value,null,null,b))&&alert(c+": "+b)},_onchange:function(){var a=this,c=a._inputFile.value;if(c=="")return;if(a._innerTB!=null)a._innerTB.value=c;if(a._hiddenField!=null)a._hiddenField.value=c;try{if(a._iframe==null){a._onload$delegate=Function.createDelegate(a,a._onload);var b=document.createElement("IFRAME");b.width="0";b.height="0";b.style.display="none";b.src="about:blank";b.id=a._iframeName;b.name=a._iframeName;$addHandlers(b,{load:a._onload$delegate});a._iframe=b;document.body.appendChild(a._iframe);b.contentWindow.name=a._iframeName}else{a._removeIframe();var d=Sys.Extended.UI.Resources.AsyncFileUpload_InternalErrorMessage;a._onError(d)}}catch(f){a._onError(f.message)}},_stopLoad:function(f){var a=this,d=document.getElementById(a._formName);a._removeTimer();a.setThrobber(false);d.target="_top";d.action=a._postBackUrl;var e,c="",b=f.split("------");if(b.length>0){if(b[0]=="error"){a._onError(b[1]);return}e=parseInt(b[0])}if(b.length>1)c=b[1];if(a.get_completeBackColor()!="")if(a._innerTB!=null)a._innerTB.style.backgroundColor=a.get_completeBackColor();else a._inputFile.style.backgroundColor=a.get_completeBackColor();a.raiseUploadComplete(new Sys.Extended.UI.AsyncFileUploadEventArgs(a._inputFile.value,e,c,null))},_onload:function(h){var d=null,f=true,a=this,l=f,g=a,c=document.getElementById(a._formName);try{var b=a._iframe.contentWindow.document;if(b==d||b.location==d){var h={message:Sys.Extended.UI.Resources.AsyncFileUpload_UploadingProblem};throw h;}else if(b.location.href=="about:blank"){a._removeTimer();if(a.get_uploadingBackColor()!="")if(a._innerTB!=d)a._innerTB.style.backgroundColor=a.get_uploadingBackColor();else a._inputFile.style.backgroundColor=a.get_uploadingBackColor();var r=a._onStart(a._inputFile.value);if(r){c.action=a._postBackUrl+"?AsyncFileUploadID="+a.get_element().id+"&rnd="+Math.random().toString().replace(/\./g,"");c.target=a._iframeName;l=false;a.setThrobber(f);setTimeout(function(){c.submit();g._waitTimer=setTimeout(function(){g._wait()},100)},0);return f}}else{if(b.body.innerHTML=="")return f;var p=b.getElementById(a.get_element().id),n,i="";if(p!=d){var e=p.innerHTML.split("------");if(e.length>0){if(e[0]=="error"){var h={message:e[1]};throw h;}n=parseInt(e[0])}if(e.length>1)i=e[1]}else{var j=Sys.Extended.UI.Resources.AsyncFileUpload_UnknownServerError;function q(b,a){j=a;return ""}b.body.innerHTML.replace(/Exception\]:([^\n\r]+)[\n\r]/,q);var k=Sys.Extended.UI.Resources.AsyncFileUpload_ServerResponseError+": '"+j+"'",s=confirm(k+"\n\n"+Sys.Extended.UI.Resources.AsyncFileUpload_ConfirmToSeeErrorPage);if(s){var m=window.open("","NotFoundInAnswer","toolbar=0,status=1,scrollbars=1,resizable=1,width=600,height=400");function o(){try{!m.document&&setTimeout(o,100)}catch(c){return}var a=m.document;a.open();a.write("<body>"+b.body.innerHTML+"</body>");a.close()}setTimeout(o,0)}var h={message:k};throw h;}a._removeTimer();c.target="_top";c.action=a._postBackUrl;if(a.get_completeBackColor()!="")if(a._innerTB!=d)a._innerTB.style.backgroundColor=a.get_completeBackColor();else a._inputFile.style.backgroundColor=a.get_completeBackColor();a.setThrobber(false);a.raiseUploadComplete(new Sys.Extended.UI.AsyncFileUploadEventArgs(a._inputFile.value,n,i,d))}}catch(t){a._removeTimer();c.target="_top";c.action=a._postBackUrl;a._onError(t.message)}finally{l&&setTimeout(function(){g._removeIframe()},100)}},_wait:function(){var a=this;if(a._waitTimer==null)return;var b=a;try{var c=a._iframe.contentWindow.document,d=c.location,e=d.href;a._waitTimer=setTimeout(function(){b._wait()},100)}catch(f){setTimeout(function(){b._removeIframe()},100);setTimeout(function(){b._onError(Sys.Extended.UI.Resources.AsyncFileUpload_UploadingProblem)},0);a._waitTimer=null}}};Sys.Extended.UI.AsyncFileUpload.registerClass("Sys.Extended.UI.AsyncFileUpload",Sys.Extended.UI.ControlBase);Sys.Extended.UI.AsyncFileUploadEventArgs=function(d,e,c,b){var a=this;if(arguments.length!=4)throw Error.parameterCount();Sys.Extended.UI.AsyncFileUploadEventArgs.initializeBase(a);a._fileName=d;a._length=e;a._contentType=c;a._errorMessage=b};Sys.Extended.UI.AsyncFileUploadEventArgs.prototype={get_fileName:function(){var b=this._fileName.lastIndexOf("/"),a=this._fileName.lastIndexOf("\\"),c=this._fileName.substr((b>a?b:a)+1);return c},get_path:function(){return this._fileName},get_length:function(){return this._length},get_contentType:function(){return this._contentType},get_errorMessage:function(){return this._errorMessage}};Sys.Extended.UI.AsyncFileUploadEventArgs.registerClass("Sys.Extended.UI.AsyncFileUploadEventArgs",Sys.EventArgs);