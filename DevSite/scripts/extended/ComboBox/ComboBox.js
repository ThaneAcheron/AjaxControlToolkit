// (c) Copyright Microsoft Corporation.
// This source is subject to the Microsoft Public License.
// See http://www.microsoft.com/opensource/licenses.mspx#Ms-PL.
// All other rights reserved.
Type.registerNamespace("Sys.Extended.UI");Sys.Extended.UI.ComboBoxAutoCompleteMode=function(){};Sys.Extended.UI.ComboBoxAutoCompleteMode.prototype={None:0,Append:1,Suggest:2,SuggestAppend:3};Sys.Extended.UI.ComboBoxAutoCompleteMode.registerEnum("Sys.Extended.UI.ComboBoxAutoCompleteMode",false);Sys.Extended.UI.ComboBoxStyle=function(){};Sys.Extended.UI.ComboBoxStyle.prototype={DropDownList:0,DropDown:1,Simple:2};Sys.Extended.UI.ComboBoxStyle.registerEnum("Sys.Extended.UI.ComboBoxStyle",false);Sys.Extended.UI.ComboBoxTextSelectionStrategy=function(){};Sys.Extended.UI.ComboBoxTextSelectionStrategy.prototype={Unknown:0,Microsoft:1,"W3C":2};Sys.Extended.UI.ComboBoxTextSelectionStrategy.registerEnum("Sys.Extended.UI.ComboBoxTextSelectionStrategy",false);Sys.Extended.UI.ComboBox=function(d){var c=false,b=null,a=this;Sys.Extended.UI.ComboBox.initializeBase(a,[d]);a._comboTableControl=b;a._textBoxControl=b;a._optionListControl=b;a._buttonControl=b;a._hiddenFieldControl=b;a._autoPostBack=c;a._autoCompleteMode=b;a._dropDownStyle=b;a._caseSensitive=c;a._originalSelectedIndex=b;a._listItemHoverCssClass=b;a._popupBehavior=b;a._supressFocusHide=true;a._doingPostBack=c;a._textSelectionStrategy=b;a._highlightSuggestedItem=c;a._highlightedIndex=b;a._optionListItems=b;a._optionListItemHeight=b;a._optionListHeight=b;a._optionListWidth=b;a.clearDelegates()};Sys.Extended.UI.ComboBox.prototype={initialize:function(){var a=this;Sys.Extended.UI.ComboBox.callBaseMethod(a,"initialize");a.createDelegates();a.initializeTextBox();a.initializeButton();a.initializeOptionList();a.addHandlers()},dispose:function(){var a=this;if(a._popupBehavior){a._popupBehavior.remove_showing(a._popupShowingHandler);a._popupBehavior.remove_shown(a._popupShownHandler);a._popupBehavior.remove_hiding(a._popupHidingHandler);a._popupBehavior.dispose();a._popupBehavior=null}a.clearHandlers();a.clearDelegates();Sys.Extended.UI.ComboBox.callBaseMethod(a,"dispose")},createDelegates:function(){var a=this;a._listMouseOverHandler=Function.createDelegate(a,a._onListMouseOver);a._listMouseOutHandler=Function.createDelegate(a,a._onListMouseOut);a._listMouseDownHandler=Function.createDelegate(a,a._onListMouseDown);a._listClickHandler=Function.createDelegate(a,a._onListClick);a._listDragHandler=Function.createDelegate(a,a._onListDrag);a._listSelectStartHandler=Function.createDelegate(a,a._onListSelectStart);a._listMouseWheelHandler=Function.createDelegate(a,a._onListMouseWheel);a._textBoxClickHandler=Function.createDelegate(a,a._onTextBoxClick);a._textBoxFocusHandler=Function.createDelegate(a,a._onTextBoxFocus);a._textBoxBlurHandler=Function.createDelegate(a,a._onTextBoxBlur);a._textBoxKeyPressHandler=Function.createDelegate(a,a._onTextBoxKeyPress);a._textBoxKeyDownHandler=Function.createDelegate(a,a._onTextBoxKeyDown);a._buttonClickHandler=Function.createDelegate(a,a._onButtonClick);a._buttonBlurHandler=Function.createDelegate(a,a._onButtonBlur);a._buttonKeyDownHandler=Function.createDelegate(a,a._onButtonKeyDown);a._buttonKeyPressHandler=Function.createDelegate(a,a._onButtonKeyPress);a._documentClickHandler=Function.createDelegate(a,a._onDocumentClick);a._documentMouseWheelHandler=Function.createDelegate(a,a._onDocumentMouseWheel);a._popupShowingHandler=Function.createDelegate(a,a._popupShowing);a._popupShownHandler=Function.createDelegate(a,a._popupShown);a._popupHidingHandler=Function.createDelegate(a,a._popupHiding)},clearDelegates:function(){var a=null,b=this;b._listMouseOverHandler=a;b._listMouseOutHandler=a;b._listMouseDownHandler=a;b._listClickHandler=a;b._listDragHandler=a;b._listSelectStartHandler=a;b._listMouseWheelHandler=a;b._textBoxClickHandler=a;b._textBoxFocusHandler=a;b._textBoxBlurHandler=a;b._textBoxKeyPressHandler=a;b._textBoxKeyDownHandler=a;b._buttonClickHandler=a;b._buttonBlurHandler=a;b._buttonKeyDownHandler=a;b._buttonKeyPressHandler=a;b._documentClickHandler=a;b._documentMouseWheelHandler=a;b._popupShowingHandler=a;b._popupShownHandler=a;b._popupHidingHandler=a},addHandlers:function(){var c="DOMMouseScroll",b="undefined",a=this;$addHandlers(a.get_optionListControl(),{mouseover:a._listMouseOverHandler,mouseout:a._listMouseOutHandler,mousedown:a._listMouseDownHandler,click:a._listClickHandler,drag:a._listDragHandler,selectstart:a._listSelectStartHandler,mousewheel:a._listMouseWheelHandler},a);$addHandlers(a.get_textBoxControl(),{click:a._textBoxClickHandler,focus:a._textBoxFocusHandler,blur:a._textBoxBlurHandler,keypress:a._textBoxKeyPressHandler},a);(Sys.Browser.agent==Sys.Browser.InternetExplorer||Sys.Browser.agent===Sys.Browser.Safari||Sys.Browser.agent===Sys.Browser.WebKit)&&$addHandler(a.get_textBoxControl(),"keydown",a._textBoxKeyDownHandler);$addHandlers(a.get_buttonControl(),{click:a._buttonClickHandler,blur:a._buttonBlurHandler,keydown:a._buttonKeyDownHandler,keypress:a._buttonKeyPressHandler},a);$addHandlers(document,{click:a._documentClickHandler,mousewheel:a._documentMouseWheelHandler},a);if(typeof a.get_optionListControl().onmousewheel===b){a.get_optionListControl()._thisPrototype=a;if(typeof document.ajax__combobox_prototypes===b)document.ajax__combobox_prototypes=[];Array.add(document.ajax__combobox_prototypes,a);a.get_optionListControl().addEventListener(c,a._onListMouseWheel,false);document.addEventListener(c,a._onDocumentMouseWheel,false)}},clearHandlers:function(){$clearHandlers(this.get_optionListControl());$clearHandlers(this.get_textBoxControl());$clearHandlers(this.get_buttonControl());$clearHandlers(document)},initializeTextBox:function(){var a=this.get_textBoxControl().style;if(a.margin=="")a.margin="0px"},initializeButton:function(){var b=this,a=b.get_buttonControl().style;if(a.height==""&&b.get_textBoxControl().offsetHeight>=0)a.height=b.get_textBoxControl().offsetHeight+"px";if(a.width=="")a.width=a.height;if(a.margin=="")a.margin="0px";if(a.padding=="")a.padding="0px";b._buttonControl.style.visibility="visible"},initializeOptionList:function(){var a=this;if(a.get_optionListControl()==null){var j=document.createElement("ul");a.get_element().appendChild(j);a.set_optionListControl(j)}if(Sys.Browser.agent===Sys.Browser.Safari||Sys.Browser.agent===Sys.Browser.WebKit){a.get_element().removeChild(a.get_optionListControl());var f=a.get_element().parentNode;while(typeof f!=typeof document.forms[0])f=f.parentNode;var i=document.createElement("div");i.className=a.get_element().className;i.appendChild(a.get_optionListControl());f.appendChild(i)}var g=a.get_optionListControl().style;g.display="block";g.zIndex="10000";a._optionListItems=[];for(var k=a.get_optionListControl().childNodes,h=0;h<k.length;h++){var c=k[h];if(c.tagName==undefined||c.tagName.toUpperCase()!="LI"){a.get_optionListControl().removeChild(c);h--;continue}var l={},b=c.innerHTML.trim(),d=b.indexOf("\r");while(d>=0){b=b.substring(0,d).trim()+" "+b.substring(d+1,b.length).trim();d=b.indexOf("\r")}var e=b.indexOf("\n");while(e>=0){b=b.substring(0,e).trim()+" "+b.substring(e+1,b.length).trim();e=b.indexOf("\n")}b=b.replace("&amp;","&").replace("&quot;",'"').replace("&gt;",">").replace("&lt;","<");l.text=b.trim();Array.add(a._optionListItems,l);a.initializeOptionListItem(c)}g.width=a._getOptionListBounds().width+"px";g.width="0px";a._popupBehavior=$create(Sys.Extended.UI.PopupBehavior,{id:a.get_id()+"_PopupBehavior",parentElement:a.get_textBoxControl(),positioningMode:Sys.Extended.UI.PositioningMode.BottomLeft},null,null,a.get_optionListControl());a._popupBehavior.add_showing(a._popupShowingHandler);a._popupBehavior.add_shown(a._popupShownHandler);a._popupBehavior.add_hiding(a._popupHidingHandler);if(a.get_selectedIndex()>=0){a._highlightListItem(a.get_selectedIndex());a.get_textBoxControl().value=a._optionListItems[a.get_selectedIndex()].text}else a.get_textBoxControl().text="";a._popupShowing();a.get_optionListControl().style.display="none"},initializeOptionListItem:function(a){a._textIsEmpty=false;if(a.innerHTML.length<1){a.innerHTML="&nbsp;";a._textIsEmpty=true}},_popupShowing:function(){var l="hidden",c=this,d=c._getWindowBounds(),e=Sys.UI.DomElement.getBounds(c.get_comboTableControl()),k=c._getOptionListBounds(),o=30,u=d.y+d.height/2,t=e.y+e.height,s=d.x+d.width/2,r=e.x+e.width/2,b=e.y-d.y,j="Top";if(t<=u){j="Bottom";b=d.height-e.height-b}var m=c._getOptionListItemHeight();if(b>=k.height)b=k.height;else b=m*(Math.floor(b/m)-2);var q=b/m,n=q<c._optionListItems.length,p=20;if(j=="Top"&&b<d.height-e.y)j="Bottom";var a=e.x-d.x,i="Left";if(r<=s)a=d.width-a;else{i="Right";a=e.width+a}a-=o;var f=k.width;if(n){f+=p;if(a>=f)a=f}else if(a>=f)a=f;if(i=="Right"&&a<d.width-e.x)i="Left";if(b<0)b=0;if(a<0)a=0;var g=c.get_optionListControl().style;g.height=b+"px";g.width=a+"px";if(n){g.overflow="auto";g.overflowX=l}else g.overflow=l;var h=j+i;if(h=="BottomLeft")c._popupBehavior.set_positioningMode(Sys.Extended.UI.PositioningMode.BottomLeft);else if(h=="BottomRight")c._popupBehavior.set_positioningMode(Sys.Extended.UI.PositioningMode.BottomRight);else if(h=="TopLeft")c._popupBehavior.set_positioningMode(Sys.Extended.UI.PositioningMode.TopLeft);else h=="TopRight"&&c._popupBehavior.set_positioningMode(Sys.Extended.UI.PositioningMode.TopRight);c.get_optionListControl().style.visibility=l},_popupShown:function(){var a=this;a.get_optionListControl().style.display="block";var f=Sys.UI.DomElement.getBounds(a.get_comboTableControl()),d=Sys.UI.DomElement.getBounds(a.get_optionListControl()),b=Sys.UI.DomElement.getBounds(a.get_textBoxControl()),e=d.y,c;if(a._popupBehavior.get_positioningMode()===Sys.Extended.UI.PositioningMode.BottomLeft||a._popupBehavior.get_positioningMode()===Sys.Extended.UI.PositioningMode.TopLeft)c=b.x;else if(a._popupBehavior.get_positioningMode()===Sys.Extended.UI.PositioningMode.BottomRight||a._popupBehavior.get_positioningMode()===Sys.Extended.UI.PositioningMode.TopRight)c=b.x-(d.width-b.width);Sys.UI.DomElement.setLocation(a.get_optionListControl(),c,e);a._ensureHighlightedIndex();a._ensureScrollTop();a.get_optionListControl().style.visibility="visible"},_popupHiding:function(){this._highlightSuggestedItem=false;this.get_optionListControl().style.display="none";this.get_optionListControl().style.visibility="hidden"},_onButtonClick:function(b){var a=this;if(a.get_dropDownStyle()==Sys.Extended.UI.ComboBoxStyle.Simple)a._popupBehavior.show();else if(a._popupBehavior._visible)a._popupBehavior.hide();else a._popupBehavior.show();b.preventDefault();b.stopPropagation();return false},_onButtonBlur:function(){var a=this;if(a.get_autoPostBack()==true&&!a._doingPostBack&&a._originalSelectedIndex!=a.get_selectedIndex()){a._doingPostBack=true;__doPostBack(a.get_element().id,"")}},_onButtonKeyDown:function(a){var b=this;if(a.keyCode==Sys.UI.Key.tab||a.keyCode==16)return true;if(!b._popupBehavior._visible&&(a.keyCode==Sys.UI.Key.enter||a.keyCode==Sys.UI.Key.down))b._popupBehavior.show();else b._popupBehavior._visible&&(a.keyCode==Sys.UI.Key.enter||a.keyCode==Sys.UI.Key.up)&&b._popupBehavior.hide();a.stopPropagation();a.preventDefault();var c=b.get_textBoxControl().id;setTimeout(function(){document.getElementById(c).focus()},0);return false},_onButtonKeyPress:function(a){if(a.charCode==Sys.UI.Key.tab||a.charCode==16)return true;a.stopPropagation();a.preventDefault();return false},_onListMouseWheel:function(b){var d="undefined",a=this._thisPrototype;if(typeof a===d)a=this;var c;if(typeof this._thisPrototype===d)c=b.rawEvent.wheelDelta>1?-1:1;else c=b.detail>=1?1:-1;var f=a._getOptionListItemHeight()*c,e=a.get_optionListControl().scrollTop+f;a.get_optionListControl().scrollTop=e;b.stopPropagation();b.preventDefault();return false},_onListMouseOver:function(c){if(c.target!==this.get_optionListControl())for(var d=c.target,b=this.get_optionListControl().childNodes,a=0;a<b.length;++a)if(d===b[a]){this._highlightListItem(a,true);break}},_onListMouseOut:function(){var a=this;a._popupBehavior._visible&&a.get_autoCompleteMode()==Sys.Extended.UI.ComboBoxAutoCompleteMode.SuggestAppend&&a._highlightListItem(a._highlightedIndex,false)},_onListMouseDown:function(b){var a=this;if(b.target==a.get_optionListControl()||b.target.tagName=="scrollbar")return true;if(b.target!==a.get_optionListControl()){var d=a.get_optionListControl().childNodes[a._highlightedIndex],c=a._optionListItems[a._highlightedIndex].text;a.get_textBoxControl().value=c;a.set_selectedIndex(a._highlightedIndex);a._supressFocusHide=false;a._handleTextBoxFocus(null)}else return true;b.preventDefault();b.stopPropagation();return false},_onListClick:function(a){if(a.target==this.get_optionListControl())return true;a.preventDefault();a.stopPropagation();return false},_onListDrag:function(a){a.preventDefault();a.stopPropagation();return false},_onListSelectStart:function(a){a.preventDefault();a.stopPropagation();return false},_onTextBoxClick:function(a){this.get_dropDownStyle()==Sys.Extended.UI.ComboBoxStyle.Simple&&this._popupBehavior.show();a.preventDefault();a.stopPropagation();return false},_onTextBoxFocus:function(a){this._handleTextBoxFocus(a)},_onTextBoxBlur:function(){var a=this;for(var d=a.get_textBoxControl().value.trim(),b=-3,c=0;c<a._optionListItems.length;c++){var e=a._optionListItems[c];if(a._isExactMatch(e.text,d)){b=c;break}}if(a._highlightSuggestedItem==true&&a._highlightedIndex!=null&&a._highlightedIndex>=0){a.set_selectedIndex(a._highlightedIndex);a.get_textBoxControl().value=a._optionListItems[a.get_selectedIndex()].text}else if(b==-3&&d.length>0&&a.get_dropDownStyle()!=Sys.Extended.UI.ComboBoxStyle.DropDownList)a.set_selectedIndex(-2);else if(a._optionListItems.length<1&&(d==""||a.get_dropDownStyle()==Sys.Extended.UI.ComboBoxStyle.DropDownList)){a.set_selectedIndex(-1);a.get_textBoxControl().value=""}else if(a._optionListItems.length>=0&&b==-3&&a.get_dropDownStyle()==Sys.Extended.UI.ComboBoxStyle.DropDownList){a.set_selectedIndex(0);a.get_textBoxControl().value=a._optionListItems[0].text}else if(b>=0){a.set_selectedIndex(b);a.get_textBoxControl().value=a._optionListItems[b].text}a._popupBehavior.hide();if(a.get_autoPostBack()==true&&!a._doingPostBack&&a._originalSelectedIndex!=a.get_selectedIndex()){a._doingPostBack=true;__doPostBack(a.get_element().id,"")}},_onTextBoxKeyDown:function(a){var c=this._handleEnterKey(a);if(c!=null)return c;this._handleArrowKey(a);var b=this._handleErasureKeys(a);if(b!=null)return b;return true},_onTextBoxKeyPress:function(c){var g=null,a=this,l=a._handleEnterKey(c);if(l!=g)return l;var k=a._handleArrowKey(c);if(k!=g)return k;var i=a._handleNonCharacterKey(c);if(i!=g)return i;a.get_dropDownStyle()==Sys.Extended.UI.ComboBoxStyle.Simple&&!a._popupBehavior._visible&&a._popupBehavior.show();if(a.get_selectedIndex()==-1&&a.get_dropDownStyle()==Sys.Extended.UI.ComboBoxStyle.DropDownList){a.get_textBoxControl().value="";c.preventDefault();c.stopPropagation();return false}var b=a._getTextSelectionInfo(a.get_textBoxControl(),c),e=b.selectionStart,f=b.selectionEnd,m=b.selectionPrefix+b.typedCharacter+b.selectionText.substring(1)+b.selectionSuffix,d=b.selectionPrefix+b.typedCharacter,h=a._suggestIndex(m,d);if(a.get_autoCompleteMode()==Sys.Extended.UI.ComboBoxAutoCompleteMode.Suggest||a.get_autoCompleteMode()==Sys.Extended.UI.ComboBoxAutoCompleteMode.SuggestAppend){a._highlightSuggestedItem=true;!a._popupBehavior._visible&&a._popupBehavior.show()}if(h>=0)if(a.get_autoCompleteMode()==Sys.Extended.UI.ComboBoxAutoCompleteMode.Append||a.get_autoCompleteMode()==Sys.Extended.UI.ComboBoxAutoCompleteMode.SuggestAppend){a.get_textBoxControl().value=a._optionListItems[h].text;e=b.selectionStart+1;f=a.get_textBoxControl().value.length}else{a.get_textBoxControl().value=a._optionListItems[h].text.substring(0,d.length);e=a.get_textBoxControl().value.length;f=a.get_textBoxControl().value.length}else if(a.get_dropDownStyle()==Sys.Extended.UI.ComboBoxStyle.Simple||a.get_dropDownStyle()==Sys.Extended.UI.ComboBoxStyle.DropDown){a.get_textBoxControl().value=d;e=d.length;f=d.length}var j=a._handleErasureKeys(c);if(j!=g)return j;a._ensureHighlightedIndex();a._ensureScrollTop();a._setTextSelectionRange(a.get_textBoxControl(),e,f);c.preventDefault();c.stopPropagation();return false},_onDocumentClick:function(){this._popupBehavior._visible&&this._popupBehavior.hide()},_onDocumentMouseWheel:function(){var c="undefined",a=this,d=a.ajax__combobox_prototypes;if(typeof d===c)d=a;if(typeof a.ajax__combobox_prototypes===c)a._popupBehavior.hide();else for(var b=0;b<a.ajax__combobox_prototypes.length;b++)a.ajax__combobox_prototypes[b]._popupBehavior.hide();return true},_handleTextBoxFocus:function(b){var a=this;if(!a._supressFocusHide&&a._popupBehavior._visible){a._popupBehavior.hide();a._supressFocusHide=true;if(a.get_autoPostBack()&&!a._doingPostBack&&a._originalSelectedIndex!=a.get_selectedIndex()){a._doingPostBack=true;__doPostBack(a.get_element().id,"")}}a.get_dropDownStyle()==Sys.Extended.UI.ComboBoxStyle.Simple&&a._popupBehavior.show();a._setTextSelectionRange(a.get_textBoxControl(),0,a.get_textBoxControl().value.length);if(b!=null){b.preventDefault();b.stopPropagation()}},_highlightListItem:function(b,d){var a=this;if(b==undefined||b<0){a._highlightedIndex!=undefined&&a._highlightedIndex>=0&&a._highlightListItem(a._highlightedIndex,false);return}var e=a.get_optionListControl().childNodes,c=e[b];if(d==true){if(a._highlightedIndex==b)return;if(b>=0)if(a.get_listItemHoverCssClass()==undefined||a.get_listItemHoverCssClass()==""){c.style.backgroundColor="Highlight";c.style.color="HighlightText"}else c.className=a.get_listItemHoverCssClass;a._highlightedIndex!=null&&a._highlightedIndex!=b&&a._highlightedIndex>=0&&a._highlightListItem(a._highlightedIndex,false);a._highlightedIndex=b}else{if(a.get_listItemHoverCssClass()==undefined||a.get_listItemHoverCssClass()==""){c.style.backgroundColor="";c.style.color=""}else c.className="";if(b==a._highlightedIndex)a._highlightedIndex=-1}},_suggestIndex:function(g,d){var e=this;for(var f=-1,a=false,c=false,b=0;b<e._optionListItems.length;b++){itemText=e._optionListItems[b].text;if(itemText.length<1)continue;if(itemText.substring(0,1).toLowerCase()!=d.substring(0,1).toLowerCase())continue;var i=itemText.substring(0,g.length);c=i==g;if(!c&&!e.get_caseSensitive())c=i.toLowerCase()==g.toLowerCase();if(c){f=b;break}else if(!a){var h=itemText.substring(0,d.length);a=h==d;if(!a&&!e.get_caseSensitive())a=h.toLowerCase()==d.toLowerCase();if(a)f=b}}return f},_getKeyboardCode:function(a){if(a.type=="keypress")return a.charCode;else if(a.type=="keydown")return a.keyCode;return undefined},_handleArrowKey:function(b){var a=this;if(b.shiftKey==true)return null;var e=a._getKeyboardCode(b);if(e==Sys.UI.Key.up||e==Sys.UI.Key.down){if(a._popupBehavior._visible){var d=e-39;if(d==-1&&a._highlightedIndex>0||d==1&&a._highlightedIndex<a._optionListItems.length-1){var c=a._highlightedIndex+d;a.get_textBoxControl().value=a._optionListItems[c].text;a._highlightListItem(c,true);a.set_selectedIndex(c);a._ensureScrollTop()}}else a._popupBehavior.show();if(b.type=="keypress"){b.preventDefault();b.stopPropagation();return false}return true}return null},_handleEnterKey:function(b){var a=this,c=a._getKeyboardCode(b);if(c==Sys.UI.Key.enter){if(a._popupBehavior._visible){if(a._highlightedIndex>=0){a.get_textBoxControl().value=a._optionListItems[a._highlightedIndex].text;a.set_selectedIndex(a._highlightedIndex)}a._popupBehavior.hide();b.preventDefault();b.stopPropagation();return false}else if(a.get_dropDownStyle()==Sys.Extended.UI.ComboBoxStyle.Simple||a.get_dropDownStyle()==Sys.Extended.UI.ComboBoxStyle.DropDown)return true;else if(a._highlightedIndex==a.get_selectedIndex())return true;b.preventDefault();b.stopPropagation();return false}return null},_handleErasureKeys:function(d){var b=this,j=b._getKeyboardCode(d),h=j==Sys.UI.Key.backspace,g=j==Sys.UI.Key.del;if(typeof window.event==="undefined"&&d.type=="keypress")g=d.rawEvent.keyCode==46;if(h||g){var a=b._getTextSelectionInfo(b.get_textBoxControl(),d),e,f;if(a.selectionStart<a.selectionEnd){b.get_textBoxControl().value=a.selectionPrefix+a.selectionSuffix;e=a.selectionStart;f=a.selectionStart}else if(a.selectionStart==a.selectionEnd){var c;if(h&&a.selectionStart>0){var i=1;if(a.selectionPrefix.charCodeAt(a.selectionPrefix.length-1)==8)i=2;c=a.selectionPrefix.substr(0,a.selectionPrefix.length-i);c+=a.selectionSuffix;b.get_textBoxControl().value=c;e=a.selectionStart-1;f=a.selectionStart-1}else if(g&&a.selectionStart<a.textBoxValue.length){c=a.selectionSuffix;c=a.selectionPrefix+c.substr(1,a.selectionSuffix.length-1);b.get_textBoxControl().value=c;e=a.selectionStart;f=a.selectionStart;b._setTextSelectionRange(b.get_textBoxControl(),a.selectionStart,a.selectionStart)}}b._ensureHighlightedIndex();b._ensureScrollTop();b._setTextSelectionRange(b.get_textBoxControl(),e,f);if((b.get_dropDownStyle()==Sys.Extended.UI.ComboBoxStyle.Simple||b.get_dropDownStyle()==Sys.Extended.UI.ComboBoxStyle.DropDown)&&(b.get_autoCompleteMode()==Sys.Extended.UI.ComboBoxAutoCompleteMode.Suggest||b.get_autoCompleteMode()==Sys.Extended.UI.ComboBoxAutoCompleteMode.SuggestAppend)&&b._highlightedIndex>=0){var k=b._isExactMatch(b._optionListItems[b._highlightedIndex].text,b.get_textBoxControl().value);!k&&b._highlightListItem(b._highlightedIndex,false)}d.preventDefault();d.stopPropagation();return false}return null},_handleNonCharacterKey:function(a){var b=this,c=b._getKeyboardCode(a),e=c==Sys.UI.Key.backspace,d=c==Sys.UI.Key.del;if(a.type=="keypress")d=c==46;if(e||d)return null;if(b._isNonCharacterKey(a)){if(c==Sys.UI.Key.esc){b._popupBehavior.hide();b.get_textBoxControl().blur();a.preventDefault();a.stopPropagation();return false}return true}return null},_isNonCharacterKey:function(c){var b=true,a=this._getKeyboardCode(c);if(a==Sys.UI.Key.enter||a==Sys.UI.Key.esc)return b;else if(Sys.Browser.agent==Sys.Browser.Safari&&Sys.Browser.version<500){if(a==8||a==9||a==63272||a==63276||a==63277||a==63275||a==63273||a==63234||a==63235||a>=63236&&a<=63243||a==63248)return b}else if(Sys.Browser.agent==Sys.Browser.WebKit){if(a==8||a==9||a==19||a==33||a==34||a==35||a==36||a==37||a==39||a==45||a==46||a==91||a==92||a==93||a==113||a==115||a==118||a==119||a==120||a==122||a==145)return b}else if(Sys.Browser.agent!=Sys.Browser.InternetExplorer)if(a==8||a==9||a==33||a==34||a==35||a==36||a==37||a==39||a==45||a==46){if(!c.shiftKey)return b}else if(a==145)return b;else if(a==19)return b;else if(Sys.Browser.agent==Sys.Browser.Opera){if(a==0||a==16||a==17)return b}else if(Sys.Browser.agent==Sys.Browser.Firefox)if(a==91||a==92||a==93)return b;return false},_ensureScrollTop:function(){var a=this;if(a._highlightedIndex>=0){var b=a._getOptionListItemHeight(),c=b*a._highlightedIndex,d=a.get_optionListControl().scrollTop+a.get_optionListControl().clientHeight;if(c<=a.get_optionListControl().scrollTop||c>=d)a.get_optionListControl().scrollTop=a._highlightedIndex*b}},_ensureSelectedIndex:function(){var a=this,b=a.get_hiddenFieldControl().value;if(b==""){b=a._optionListItems.length>0?0:-1;a.get_hiddenFieldControl().value=b.toString()}if(a._originalSelectedIndex==null)a._originalSelectedIndex=parseInt(b)},_ensureHighlightedIndex:function(){var a=this,c=a.get_textBoxControl().value;if(a._highlightedIndex!=null&&a._highlightedIndex>=0&&a._isExactMatch(a._optionListItems[a._highlightedIndex].text,c))return;for(var d=-1,f=false,b=0;b<a._optionListItems.length;b++){var e=a._optionListItems[b].text;if(a._isExactMatch(e,c)){a._highlightListItem(b,true);f=true;break}else if(d<0&&a._highlightSuggestedItem)if(a._isPrefixMatch(e,c))d=b}!f&&a._highlightListItem(d,true)},_isExactMatch:function(b,c){var a=b==c;if(!a&&!this.get_caseSensitive())a=b.toLowerCase()==c.toLowerCase();return a},_isPrefixMatch:function(b,a){return this._isExactMatch(b.substring(0,a.length),a)},_setTextSelectionRange:function(d,b,c){var e="character",f=this._getTextSelectionStrategy();if(f==Sys.Extended.UI.ComboBoxTextSelectionStrategy.Microsoft){var a=d.createTextRange();a.collapse(true);a.moveEnd(e,c);a.moveStart(e,b);a.select();Sys.Browser.agent==Sys.Browser.Opera&&d.setSelectionRange(b,c)}else f==Sys.Extended.UI.ComboBoxTextSelectionStrategy.W3C&&d.setSelectionRange(b,c)},_getTextSelectionStrategy:function(){var a=this;if(a._textSelectionStrategy==null)if(a.get_textBoxControl().createTextRange)a._textSelectionStrategy=Sys.Extended.UI.ComboBoxTextSelectionStrategy.Microsoft;else if(a.get_textBoxControl().setSelectionRange)a._textSelectionStrategy=Sys.Extended.UI.ComboBoxTextSelectionStrategy.W3C;else a._textSelectionStrategy=Sys.Extended.UI.ComboBoxTextSelectionStrategy.Unknown;return a._textSelectionStrategy},_getTextSelectionInfo:function(b,e){var c="character",a={};a.strategy=this._getTextSelectionStrategy();if(a.strategy==Sys.Extended.UI.ComboBoxTextSelectionStrategy.Microsoft){var d=document.selection.createRange();a.selectionStart=0;a.selectionEnd=b.value.length;while(d.moveStart(c,-1)!=0)a.selectionStart++;while(d.moveEnd(c,1)!=0)a.selectionEnd--}else if(a.strategy==Sys.Extended.UI.ComboBoxTextSelectionStrategy.W3C){a.selectionStart=b.selectionStart;a.selectionEnd=b.selectionEnd}a.typedCharacter=String.fromCharCode(e.charCode);a.textBoxValue=b.value;a.selectionPrefix=a.textBoxValue.length>=a.selectionStart?a.textBoxValue.substring(0,a.selectionStart):"";a.selectionText=a.textBoxValue.length>=a.selectionEnd?a.textBoxValue.substring(a.selectionStart,a.selectionEnd):"";a.selectionSuffix=a.textBoxValue.length>=a.selectionEnd?a.textBoxValue.substring(a.selectionEnd,a.textBoxValue.length):"";a.selectionTextFirst=a.selectionText.substring(0,1);return a},_getOptionListItemHeight:function(){var a=this;if(a._optionListItemHeight==null&&a.get_optionListControl().scrollHeight>0)a._optionListItemHeight=Math.round(a.get_optionListControl().scrollHeight/a._optionListItems.length);else if(Sys.Browser.agent===Sys.Browser.InternetExplorer&&Sys.Browser.version<7&&Math.round(a.get_optionListControl().scrollHeight/a._optionListItems.length)<a._optionListItemHeight)a._optionListItemHeight=Math.round(a.get_optionListControl().scrollHeight/a._optionListItems.length);return a._optionListItemHeight},_getOptionListBounds:function(){var a={width:this._getOptionListWidth(),height:this._getOptionListHeight()};return a},_getOptionListHeight:function(){var a=this;if(a._optionListHeight==null||a._getOptionListItemHeight()*a._optionListItems.length<a._optionListHeight)a._optionListHeight=a._getOptionListItemHeight()*a._optionListItems.length;if(a._optionListHeight<0)a._optionListHeight=0;return a._optionListHeight},_getOptionListWidth:function(){var a=this;if(a._optionListWidth==null){var h=1,g=1,f=0,e=0,c=a.get_optionListControl().style;c.overflow="auto";var b=a.get_comboTableControl().offsetWidth;b-=h+g;if(b<0)b=0;var d=c.width;c.width=b+"px";if(a.get_comboTableControl().offsetWidth<a.get_optionListControl().scrollWidth)b=a.get_optionListControl().scrollWidth+e+f;c.overflow="hidden";c.width=d;a._optionListWidth=b}if(a._optionListWidth<0)a._optionListWidth=0;return a._optionListWidth},_getWindowBounds:function(){var a=this,b={x:a._getScrollLeft(),y:a._getScrollTop(),width:a._getWindowWidth(),height:a._getWindowHeight()};return b},_getWindowHeight:function(){var a=0;if(typeof window.innerHeight=="number")a=window.innerHeight;else if(document.documentElement&&document.documentElement.clientHeight)a=document.documentElement.clientHeight;else if(document.body&&document.body.clientHeight)a=document.body.clientHeight;return a},_getWindowWidth:function(){var a=0;if(typeof window.innerWidth=="number")a=window.innerWidth;else if(document.documentElement&&document.documentElement.clientWidth)a=document.documentElement.clientWidth;else if(document.body&&document.body.clientWidth)a=document.body.clientWidth;return a},_getScrollTop:function(){var a=0;if(typeof window.pageYOffset=="number")a=window.pageYOffset;if(document.body&&document.body.scrollTop)a=document.body.scrollTop;else if(document.documentElement&&document.documentElement.scrollTop)a=document.documentElement.scrollTop;return a},_getScrollLeft:function(){var a=0;if(typeof window.pageXOffset=="number")a=window.pageXOffset;else if(document.body&&document.body.scrollLeft)a=document.body.scrollLeft;else if(document.documentElement&&document.documentElement.scrollLeft)a=document.documentElement.scrollLeft;return a},set_comboTableControl:function(a){if(this._comboTableControl!==a){this._comboTableControl=a;this.raisePropertyChanged("comboTableControl")}},get_comboTableControl:function(){return this._comboTableControl},set_textBoxControl:function(a){if(this._textBoxControl!==a){this._textBoxControl=a;this.raisePropertyChanged("textBoxControl")}},get_textBoxControl:function(){return this._textBoxControl},set_buttonControl:function(a){if(this._buttonControl!==a){this._buttonControl=a;this.raisePropertyChanged("buttonControl")}},get_buttonControl:function(){return this._buttonControl},set_optionListControl:function(a){if(this._optionListControl!==a){this._optionListControl=a;this.raisePropertyChanged("optionListControl")}},get_optionListControl:function(){return this._optionListControl},set_hiddenFieldControl:function(a){if(this._hiddenFieldControl!==a){this._hiddenFieldControl=a;this.raisePropertyChanged("hiddenFieldControl")}},get_hiddenFieldControl:function(){return this._hiddenFieldControl},set_selectedIndex:function(b){var a=this;if(a.get_hiddenFieldControl().value!==b.toString()){a.get_hiddenFieldControl().value=b.toString();a._ensureSelectedIndex();a.raisePropertyChanged("selectedIndex")}},get_selectedIndex:function(){this._ensureSelectedIndex();var a=this.get_hiddenFieldControl().value;return parseInt(a)},set_autoPostBack:function(a){if(this._autoPostBack!==a){this._autoPostBack=a;this.raisePropertyChanged("autoPostBack")}},get_autoPostBack:function(){return this._autoPostBack},set_autoCompleteMode:function(a){if(this._autoCompleteMode!==a){this._autoCompleteMode=a;this.raisePropertyChanged("autoCompleteMode")}},get_autoCompleteMode:function(){return this._autoCompleteMode},set_dropDownStyle:function(a){if(this._dropDownStyle!==a){this._dropDownStyle=a;this.raisePropertyChanged("dropDownStyle")}},get_dropDownStyle:function(){return this._dropDownStyle},set_caseSensitive:function(a){if(this._caseSensitive!==a){this._caseSensitive=a;this.raisePropertyChanged("caseSensitive")}},get_caseSensitive:function(){return this._caseSensitive},set_listItemHoverCssClass:function(a){if(this._listItemHoverCssClass!==a){this._listItemHoverCssClass=a;this.raisePropertyChanged("listItemHoverCssClass")}},get_listItemHoverCssClass:function(){return this._listItemHoverCssClass}};Sys.Extended.UI.ComboBox.registerClass("Sys.Extended.UI.ComboBox",Sys.UI.Control);