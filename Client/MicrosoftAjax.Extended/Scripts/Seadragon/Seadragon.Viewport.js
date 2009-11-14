Type.registerNamespace("Sys.Extended.UI.Seadragon");Sys.Extended.UI.Seadragon.Viewport=function(c,b,d){var a=this;a.zoomPoint=null;a.config=d;a._containerSize=c;a._contentSize=b;a._contentAspect=b.x/b.y;a._contentHeight=b.y/b.x;a._centerSpringX=new Seadragon.Spring(0,a.config);a._centerSpringY=new Seadragon.Spring(0,a.config);a._zoomSpring=new Seadragon.Spring(1,a.config);a._homeBounds=new Sys.Extended.UI.Seadragon.Rect(0,0,1,a._contentHeight);a.goHome(true);a.update()};Sys.Extended.UI.Seadragon.Viewport.prototype={_getHomeZoom:function(){var a=this._contentAspect/this.getAspectRatio();return a>=1?1:a},_getMinZoom:function(){var a=this,b=a._getHomeZoom();if(a.config.minZoomDimension)var c=a._contentSize.x<=a._contentSize.y?a.config.minZoomDimension/a._containerSize.x:a.config.minZoomDimension/(a._containerSize.x*a._contentHeight);else var c=a.config.minZoomImageRatio*b;return Math.min(c,b)},_getMaxZoom:function(){var a=this,b=a._contentSize.x*a.config.maxZoomPixelRatio/a._containerSize.x;return Math.max(b,a._getHomeZoom())},getAspectRatio:function(){return this._containerSize.x/this._containerSize.y},getContainerSize:function(){return new Sys.Extended.UI.Seadragon.Point(this._containerSize.x,this._containerSize.y)},getBounds:function(b){var c=this.getCenter(b),a=1/this.getZoom(b),d=a/this.getAspectRatio();return new Sys.Extended.UI.Seadragon.Rect(c.x-a/2,c.y-d/2,a,d)},getCenter:function(l){var a=this,b=new Sys.Extended.UI.Seadragon.Point(a._centerSpringX.getCurrent(),a._centerSpringY.getCurrent()),d=new Sys.Extended.UI.Seadragon.Point(a._centerSpringX.getTarget(),a._centerSpringY.getTarget());if(l)return b;else if(!a.zoomPoint)return d;var k=a.pixelFromPoint(a.zoomPoint,true),g=a.getZoom(),c=1/g,f=c/a.getAspectRatio(),e=new Sys.Extended.UI.Seadragon.Rect(b.x-c/2,b.y-f/2,c,f),j=a.zoomPoint.minus(e.getTopLeft()).times(a._containerSize.x/e.width),h=j.minus(k),i=h.divide(a._containerSize.x*g);return d.plus(i)},getZoom:function(a){if(a)return this._zoomSpring.getCurrent();else return this._zoomSpring.getTarget()},applyConstraints:function(i){var b=this,j=b.getZoom(),g=Math.max(Math.min(j,b._getMaxZoom()),b._getMinZoom());j!=g&&b.zoomTo(g,b.zoomPoint,i);var a=b.getBounds(),h=b.config.visibilityRatio,c=h*a.width,d=h*a.height,m=a.x+a.width,l=1-a.x,n=a.y+a.height,k=b._contentHeight-a.y,e=0;if(!b.config.wrapHorizontal)if(m<c)e=c-m;else if(l<c)e=l-c;var f=0;if(!b.config.wrapVertical)if(n<d)f=d-n;else if(k<d)f=k-d;if(e||f){a.x+=e;a.y+=f;b.fitBounds(a,i)}},ensureVisible:function(a){this.applyConstraints(a)},fitBounds:function(c,h){var d=true,a=this,f=a.getAspectRatio(),g=c.getCenter(),b=new Sys.Extended.UI.Seadragon.Rect(c.x,c.y,c.width,c.height);if(b.getAspectRatio()>=f){b.height=c.width/f;b.y=g.y-b.height/2}else{b.width=c.height*f;b.x=g.x-b.width/2}a.panTo(a.getCenter(d),d);a.zoomTo(a.getZoom(d),null,d);var e=a.getBounds(),k=a.getZoom(),i=1/b.width;if(i==k||b.width==e.width){a.panTo(g,h);return}var j=e.getTopLeft().times(a._containerSize.x/e.width).minus(b.getTopLeft().times(a._containerSize.x/b.width)).divide(a._containerSize.x/e.width-a._containerSize.x/b.width);a.zoomTo(i,j,h)},goHome:function(c){var a=this,b=a.getCenter();if(a.config.wrapHorizontal){b.x=(1+b.x%1)%1;a._centerSpringX.resetTo(b.x);a._centerSpringX.update()}if(a.config.wrapVertical){b.y=(a._contentHeight+b.y%a._contentHeight)%a._contentHeight;a._centerSpringY.resetTo(b.y);a._centerSpringY.update()}a.fitBounds(a._homeBounds,c)},panBy:function(c,a){var b=new Sys.Extended.UI.Seadragon.Point(this._centerSpringX.getTarget(),this._centerSpringY.getTarget());this.panTo(b.plus(c),a)},panTo:function(a,c){var b=this;if(c){b._centerSpringX.resetTo(a.x);b._centerSpringY.resetTo(a.y)}else{b._centerSpringX.springTo(a.x);b._centerSpringY.springTo(a.y)}},zoomBy:function(c,b,a){this.zoomTo(this._zoomSpring.getTarget()*c,b,a)},zoomTo:function(b,a,c){if(c)this._zoomSpring.resetTo(b);else this._zoomSpring.springTo(b);this.zoomPoint=a instanceof Sys.Extended.UI.Seadragon.Point?a:null},resize:function(c,f){var a=this,d=a.getBounds(),b=d,e=c.x/a._containerSize.x;a._containerSize=new Sys.Extended.UI.Seadragon.Point(c.x,c.y);if(f){b.width=d.width*e;b.height=b.width/a.getAspectRatio()}a.fitBounds(b,true)},update:function(){var a=this,g=a._centerSpringX.getCurrent(),h=a._centerSpringY.getCurrent(),c=a._zoomSpring.getCurrent();if(a.zoomPoint)var f=a.pixelFromPoint(a.zoomPoint,true);a._zoomSpring.update();if(a.zoomPoint&&a._zoomSpring.getCurrent()!=c){var e=a.pixelFromPoint(a.zoomPoint,true),d=e.minus(f),b=a.deltaPointsFromPixels(d,true);a._centerSpringX.shiftBy(b.x);a._centerSpringY.shiftBy(b.y)}else a.zoomPoint=null;a._centerSpringX.update();a._centerSpringY.update();return a._centerSpringX.getCurrent()!=g||a._centerSpringY.getCurrent()!=h||a._zoomSpring.getCurrent()!=c},deltaPixelsFromPoints:function(a,b){return a.times(this._containerSize.x*this.getZoom(b))},deltaPointsFromPixels:function(a,b){return a.divide(this._containerSize.x*this.getZoom(b))},pixelFromPoint:function(c,b){var a=this.getBounds(b);return c.minus(a.getTopLeft()).times(this._containerSize.x/a.width)},pointFromPixel:function(c,b){var a=this.getBounds(b);return c.divide(this._containerSize.x/a.width).plus(a.getTopLeft())}};Sys.Extended.UI.Seadragon.Viewport.registerClass("Sys.Extended.UI.Seadragon.Viewport",null,Sys.IDisposable);