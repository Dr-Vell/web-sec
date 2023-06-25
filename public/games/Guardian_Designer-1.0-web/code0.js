gdjs.MenuCode = {};
gdjs.MenuCode.GDPlayerObjects1= [];
gdjs.MenuCode.GDPlayerObjects2= [];
gdjs.MenuCode.GDCollisionObjects1= [];
gdjs.MenuCode.GDCollisionObjects2= [];
gdjs.MenuCode.GDNewPanelSpriteObjects1= [];
gdjs.MenuCode.GDNewPanelSpriteObjects2= [];
gdjs.MenuCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.MenuCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.MenuCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.MenuCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial", false);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDPlayerObjects1.length = 0;
gdjs.MenuCode.GDPlayerObjects2.length = 0;
gdjs.MenuCode.GDCollisionObjects1.length = 0;
gdjs.MenuCode.GDCollisionObjects2.length = 0;
gdjs.MenuCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.MenuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.MenuCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
