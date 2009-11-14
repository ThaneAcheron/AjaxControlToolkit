// (c) Copyright Microsoft Corporation.
// This source is subject to the Microsoft Public License.
// See http://www.microsoft.com/opensource/licenses.mspx#Ms-PL.
// All other rights reserved.
Type.registerNamespace("Sys.Extended.UI");Sys.Extended.UI.RepeatDirection=function(){throw Error.invalidOperation();};Sys.Extended.UI.RepeatDirection.prototype={Vertical:0,Horizontal:1};Sys.Extended.UI.RepeatDirection.registerEnum("Sys.Extended.UI.RepeatDirection");Sys.Extended.UI.DragDropList=function(c){var b=null,a=this;Sys.Extended.UI.DragDropList.initializeBase(a,[c]);a._acceptedDataTypes=[];a._isDragging=b;a._dataType=b;a._dragMode=Sys.Extended.UI.DragMode.Move;a._dragVisual=b;a._direction=Sys.Extended.UI.RepeatDirection.Vertical;a._emptyTemplate=b;a._emptyTemplateInstance=b;a._dropCueTemplate=b;a._dropCueTemplateInstance=b;a._floatContainerInstance=b;a._originalParent=b;a._originalNextSibling=b;a._originalZIndex=b;a._currentContext=b;a._data=b};Sys.Extended.UI.DragDropList.IsValidDataType=function(a){if(a&&typeof a=="string"&&a.length>=4)return a.substring(0,4)==="HTML";return false};Sys.Extended.UI.DragDropList.prototype={get_data:function(){return this._data},set_data:function(a){this._data=a},initialize:function(){var a=this;Sys.Extended.UI.DragDropList.callBaseMethod(a,"initialize");a.get_element().__dragDropList=a;Sys.Extended.UI.DragDropManager.registerDropTarget(a)},startDragDrop:function(d,c,b){var a=this;if(!a._isDragging){a._isDragging=true;a._currentContext=c;if(!b)b=a.createDragVisual(d);else a._dragVisual=b;Sys.Extended.UI.DragDropManager.startDragDrop(a,b,c,!(Sys.Browser.agent==Sys.Browser.InternetExplorer&&Sys.Browser.version>7&&Sys.Browser.documentMode!=0))}},createDragVisual:function(b){var a=this;if(a._dragMode===Sys.Extended.UI.DragMode.Copy)a._dragVisual=b.cloneNode(true);else a._dragVisual=b;var e=Sys.Extended.UI.DragDropManager._getInstance().getScrollOffset(b,true);a._dragVisual.preDragWidth=a._dragVisual.style.width;a._dragVisual.preDragHeight=a._dragVisual.style.height;a._dragVisual.style.width=b.offsetWidth+"px";a._dragVisual.style.height=b.offsetHeight+"px";a._dragVisual.style.opacity="0.4";a._dragVisual.style.filter="progid:DXImageTransform.Microsoft.BasicImage(opacity=0.4);";a._originalZIndex=a._dragVisual.style.zIndex;a._dragVisual.style.zIndex=99999;a._originalParent=a._dragVisual.parentNode;a._originalNextSibling=Sys.Extended.UI.DragDropManager._getInstance().getNextSibling(a._dragVisual);var f=$common.getLocation(b),c=a._getFloatContainer();$common.setLocation(c,f);Sys.Extended.UI.DragDropManager._getInstance().hasParent(a._dragVisual)&&a._dragVisual.parentNode.removeChild(a._dragVisual);c.appendChild(a._dragVisual);var d=Sys.Extended.UI.DragDropManager._getInstance().getScrollOffset(b,true);if(e.x!==d.x||e.y!==d.y){var h=Sys.Extended.UI.DragDropManager._getInstance().subtractPoints(e,d),g=Sys.Extended.UI.DragDropManager._getInstance().subtractPoints(f,h);$common.setLocation(c,g)}return c},get_emptyTemplate:function(){return this._emptyTemplate},set_emptyTemplate:function(a){this._emptyTemplate=a},get_dragDataType:function(){return this._dataType},set_dragDataType:function(a){this._dataType=a},getDragData:function(a){return a},get_dragMode:function(){return this._dragMode},set_dragMode:function(a){this._dragMode=a},dispose:function(){Sys.Extended.UI.DragDropManager.unregisterDropTarget(this);this.get_element().__dragDropList=null;Sys.Extended.UI.DragDropList.callBaseMethod(this,"dispose")},onDragStart:function(){this._validate()},onDrag:function(){},onDragEnd:function(c){var b=null,a=this;if(a._floatContainerInstance){if(a._dragMode===Sys.Extended.UI.DragMode.Copy)a._floatContainerInstance.removeChild(a._dragVisual);else{a._dragVisual.style.opacity="0.999";a._dragVisual.style.filter="";a._dragVisual.style.zIndex=a._originalZIndex?a._originalZIndex:0;if(a._dragVisual.preDragWidth!=b){a._dragVisual.style.width=a._dragVisual.preDragWidth;a._dragVisual.preDragWidth=b}if(a._dragVisual.preDragHeight!=b){a._dragVisual.style.height=a._dragVisual.preDragHeight;a._dragVisual.preDragHeight=b}if(c){a._dragVisual.parentNode.removeChild(a._dragVisual);if(a._originalNextSibling!=b)a._originalParent.insertBefore(a._dragVisual,a._originalNextSibling);else a._originalParent.appendChild(a._dragVisual)}else a._dragVisual.parentNode===a._floatContainerInstance&&a._dragVisual.parentNode.removeChild(a._dragVisual)}document.body.removeChild(a._floatContainerInstance)}else a._dragVisual.parentNode.removeChild(a._dragVisual);if(!c&&a._data&&a._dragMode===Sys.Extended.UI.DragMode.Move){var d=a.getDragData(a._currentContext);a._data&&d&&Array.remove(a._data,d)}a._isDragging=false;a._validate()},get_direction:function(){return this._direction},set_direction:function(a){this._direction=a},get_acceptedDataTypes:function(){return this._acceptedDataTypes},set_acceptedDataTypes:function(a){if(typeof a=="string")this._acceptedDataTypes=a.split(",");else this._acceptedDataTypes=a},get_dropCueTemplate:function(){return this._dropCueTemplate},set_dropCueTemplate:function(a){this._dropCueTemplate=a},get_dropTargetElement:function(){return this.get_element()},canDrop:function(c,b){for(var a=0;a<this._acceptedDataTypes.length;a++)if(this._acceptedDataTypes[a]===b)return true;return false},drop:function(d,c,e){var a=this;if(Sys.Extended.UI.DragDropList.IsValidDataType(c)&&d===Sys.Extended.UI.DragMode.Move){dragVisual=e;var b=a._findPotentialNextSibling(dragVisual);a._setDropCueVisible(false,dragVisual);dragVisual.parentNode.removeChild(dragVisual);if(b)a.get_element().insertBefore(dragVisual,b);else a.get_element().appendChild(dragVisual)}else a._setDropCueVisible(false)},onDragEnterTarget:function(c,a,b){if(Sys.Extended.UI.DragDropList.IsValidDataType(a)){this._setDropCueVisible(true,b);this._validate()}},onDragLeaveTarget:function(b,a){if(Sys.Extended.UI.DragDropList.IsValidDataType(a)){this._setDropCueVisible(false);this._validate()}},onDragInTarget:function(c,a,b){Sys.Extended.UI.DragDropList.IsValidDataType(a)&&this._setDropCueVisible(true,b)},_setDropCueVisible:function(d,c){var a=this;if(a._dropCueTemplate)if(d){if(!a._dropCueTemplateInstance){var e=document.createDocumentFragment();a._dropCueTemplateInstance=a._dropCueTemplate.cloneNode(true)}var b=a._findPotentialNextSibling(c);if(!Sys.Extended.UI.DragDropManager._getInstance().hasParent(a._dropCueTemplateInstance)){if(b)a.get_element().insertBefore(a._dropCueTemplateInstance,b);else a.get_element().appendChild(a._dropCueTemplateInstance);a._dropCueTemplateInstance.style.width=c.offsetWidth+"px";a._dropCueTemplateInstance.style.height=c.offsetHeight+"px"}else if(Sys.Extended.UI.DragDropManager._getInstance().getNextSibling(a._dropCueTemplateInstance)!==b){a.get_element().removeChild(a._dropCueTemplateInstance);if(b)a.get_element().insertBefore(a._dropCueTemplateInstance,b);else a.get_element().appendChild(a._dropCueTemplateInstance)}}else a._dropCueTemplateInstance&&Sys.Extended.UI.DragDropManager._getInstance().hasParent(a._dropCueTemplateInstance)&&a.get_element().removeChild(a._dropCueTemplateInstance)},_findPotentialNextSibling:function(f){var b=this;for(var d=$common.getBounds(f),e=b._direction===0,c,a=b.get_element().firstChild;a!==null;a=a.nextSibling)if(a.innerHTML&&a!==b._dropCueTemplateInstance&&a!==b._emptyTemplateInstance){c=$common.getBounds(a);if(!e&&d.x<=c.x||e&&d.y<=c.y)return a}return null},_validate:function(){var a=this;for(var c=a._dropCueTemplateInstance==null||!Sys.Extended.UI.DragDropManager._getInstance().hasParent(a._dropCueTemplateInstance),d=0,b=a.get_element().firstChild;b!==null;b=b.nextSibling)if(b.innerHTML&&b!==a._emptyTemplateInstance&&b!==a._dropCueTemplateInstance)d++;if(d>0)c=false;a._setEmptyTemplateVisible(c)},_setEmptyTemplateVisible:function(b){var a=this;if(a._emptyTemplate)if(b)if(!a._emptyTemplateInstance)a._emptyTemplateInstance=a._emptyTemplate.createInstance(a.get_element()).instanceElement;else!Sys.Extended.UI.DragDropManager._getInstance().hasParent(a._emptyTemplateInstance)&&a.get_element().appendChild(a._emptyTemplateInstance);else a._emptyTemplateInstance&&Sys.Extended.UI.DragDropManager._getInstance().hasParent(a._emptyTemplateInstance)&&a.get_element().removeChild(a._emptyTemplateInstance)},_getFloatContainer:function(){var a=this;if(!a._floatContainerInstance){a._floatContainerInstance=document.createElement(a.get_element().tagName);var b="0px 0px 0px 0px";a._floatContainerInstance.style.position="absolute";a._floatContainerInstance.style.padding=b;a._floatContainerInstance.style.margin=b;a._floatContainerInstance.className="dragVisualContainer";document.body.appendChild(a._floatContainerInstance)}else!Sys.Extended.UI.DragDropManager._getInstance().hasParent(a._floatContainerInstance)&&document.body.appendChild(a._floatContainerInstance);return a._floatContainerInstance}};Sys.Extended.UI.DragDropList.registerClass("Sys.Extended.UI.DragDropList",Sys.Extended.UI.BehaviorBase,Sys.Extended.UI.IDragSource,Sys.Extended.UI.IDropTarget,Sys.IDisposable);function callbackSuccessStub(c,d){var a=d.split(":"),e=a[0],b=$find(e);b&&b._onCallbackSuccess(c,a[1])}function callbackErrorStub(c,d){var a=d.split(":"),e=a[0],b=$find(e);alert("error");b&&b._onCallbackError(c,a[1])}Sys.Extended.UI.DragDropWatcher=function(c){var b=null,a=this;Sys.Extended.UI.DragDropWatcher.initializeBase(a,[c]);a._childList=[];a._inProgressDrops={};a._postbackCode=b;a._callbackCssStyle=b;a._argReplaceString=b;a._argContextString=b;a._argErrorString=b;a._argSuccessString=b};Sys.Extended.UI.DragDropWatcher.prototype={dispose:function(){Sys.Extended.UI.DragDropWatcher.callBaseMethod(this,"dispose")},initialize:function(){Sys.Extended.UI.DragDropWatcher.callBaseMethod(this,"initialize");this._saveChildOrder()},add_reorderComplete:function(a){this.get_events().addHandler("reorderComplete",a)},remove_reorderComplete:function(a){this.get_events().removeHandler("reorderComplete",a)},raiseReorderComplete:function(){var a=this.get_events().getHandler("reorderComplete");a&&a(this,Sys.EventArgs.Empty)},findChild:function(f,e){for(var c=0,d=f.childNodes,b=0;b<d.length;b++){var a=d[b];if(a!=null&&a.nodeName=="LI"){if(a.id==e)return c;c++}}return -1},canDrop:function(i,h,f){var b=this;if(b._inProgressDrops&&b._inProgressDrops.length>0)return false;var d=Sys.Extended.UI.DragDropWatcher.callBaseMethod(b,"canDrop",[i,h,f]);if(d){for(var g=$common.getBounds(f),e,c=false,j=b.get_element(),a=j.firstChild;a!=null&&!c;a=a.nextSibling){if(!a.id)continue;e=$common.getBounds(a);if(g.y<=e.y)break;c=a.id.lastIndexOf("Insert",a.id.length-6)!=-1}d=!c}return d},drop:function(g,f,e){var a=this;Sys.Extended.UI.DragDropWatcher.callBaseMethod(a,"drop",[g,f,e]);var b=e.id;if(!a._postbackCode||!b)return;var c=a.findChild(a.get_element(),b);Sys.Debug.assert(c!=-1,String.format(Sys.Extended.UI.Resources.ReorderList_DropWatcherBehavior_NoChild,b));var d=a._getSavedChildIndex(b);if(c!=-1&&c!=d){a._saveChildOrder();a.doPostBack(b,c,d)}},_setupDropState:function(a,c,d){if(a){var b=$get(a);this._inProgressDrops[a]={oldCss:b.className,newIndex:c,oldIndex:d};if(this._callbackCssStyle)b.className=this._callbackCssStyle}},_onDropCallback:function(a){var b=this;if(a){b.set_ClientState("true");var c=b._inProgressDrops[a];if(c){var d=$get(a);if(b._callbackCssStyle)d.className=c.oldCss;delete b._inProgressDrops[a]}return c}},doPostBack:function(c,d,e){var a=this,g=a._inProgressDrops[c];if(g)return;var f="reorder:"+c+":"+e.toString()+":"+d.toString(),b=a._postbackCode.replace(a._argReplaceString,f);if(a._argSuccessString)b=b.replace(a._argSuccessString,"callbackSuccessStub");if(a._argErrorString)b=b.replace(a._argErrorString,"callbackErrorStub");if(a._argContextString)b=b.replace(a._argContextString,a.get_id()+":"+c);a._setupDropState(c,d,e);window.setTimeout(b,0)},_onCallbackSuccess:function(a,b){if(a&&a.length>0)this._onCallbackError(a,b);else{this._onDropCallback(b);this.raiseReorderComplete()}},_onCallbackError:function(b,c){var a=this._onDropCallback(c);if(a.oldIndex||a.newIndex){this._saveChildOrder();this.doReorder(a.newIndex,a.oldIndex,true)}alert(String.format(Sys.Extended.UI.Resources.ReorderList_DropWatcherBehavior_CallbackError,b))},doReorder:function(b,a,h){var c=this,f=c.get_element(),e=c._childList;if(b>=0&&e.length>b&&b!=a){var d=$get(e[b]),j=c._inProgressDrops[d.id];if(j)return;if(d){if(a>b)a++;var i=a>=e.length;try{f.removeChild(d)}catch(k){}if(i)f.appendChild(d);else{var g=$get(e[a]);f.insertBefore(d,g)}if(!h)c.doPostBack(d.id,a,b);else{c._saveChildOrder();c.raiseReorderComplete()}}}},getItem:function(a){!this._childList&&this._saveChildOrder();return this._childList[a]},_getSavedChildIndex:function(b){if(this._childList&&b)for(var a=0;a<this._childList.length;a++)if(b==this._childList[a])return a;return -1},_saveChildOrder:function(){var c=this.get_element();if(!c)return;var b=c.childNodes;this._childList=[];for(var d=0,a=0;a<b.length;a++)if(b[a]&&b[a].parentNode===c&&b[a].tagName&&b[a].tagName.toLowerCase()=="li")this._childList[d++]=b[a].id},get_argReplaceString:function(){return this._argReplaceString},set_argReplaceString:function(a){if(this._argReplaceString!=a){this._argReplaceString=a;this.raisePropertyChanged("argReplaceString")}},get_argContextString:function(){return this._argContextString},set_argContextString:function(a){if(this._argContextString!=a){this._argContextString=a;this.raisePropertyChanged("argContextString")}},get_argErrorString:function(){return this._argErrorString},set_argErrorString:function(a){if(this._argErrorString!=a){this._argErrorString=a;this.raisePropertyChanged("argErrorString")}},get_argSuccessString:function(){return this._argSuccessString},set_argSuccessString:function(a){if(this._argSuccessString!=a){this._argSuccessString=a;this.raisePropertyChanged("argSuccessString")}},get_postbackCode:function(){return this._postbackCode},set_postbackCode:function(a){if(this._postbackCode!=a){this._postbackCode=a;this.raisePropertyChanged("postbackCode")}},get_callbackCssStyle:function(){return this._callbackCssStyle},set_callbackCssStyle:function(a){if(this._callbackCssStyle!=a){this._callbackCssStyle=a;this.raisePropertyChanged("callbackCssStyle")}}};Sys.Extended.UI.DragDropWatcher.registerClass("Sys.Extended.UI.DragDropWatcher",Sys.Extended.UI.DragDropList);