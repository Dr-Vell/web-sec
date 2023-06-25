gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDPlayerObjects1= [];
gdjs.Game_32OverCode.GDPlayerObjects2= [];
gdjs.Game_32OverCode.GDCollisionObjects1= [];
gdjs.Game_32OverCode.GDCollisionObjects2= [];
gdjs.Game_32OverCode.GDNewPanelSpriteObjects1= [];
gdjs.Game_32OverCode.GDNewPanelSpriteObjects2= [];
gdjs.Game_32OverCode.GDNewPanelSprite2Objects1= [];
gdjs.Game_32OverCode.GDNewPanelSprite2Objects2= [];
gdjs.Game_32OverCode.GDGameOverObjects1= [];
gdjs.Game_32OverCode.GDGameOverObjects2= [];


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Wait");
}{gdjs.evtTools.sound.playMusic(runtimeScene, "gameover.mp3", false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Wait") >= 5;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDPlayerObjects1.length = 0;
gdjs.Game_32OverCode.GDPlayerObjects2.length = 0;
gdjs.Game_32OverCode.GDCollisionObjects1.length = 0;
gdjs.Game_32OverCode.GDCollisionObjects2.length = 0;
gdjs.Game_32OverCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Game_32OverCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Game_32OverCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.Game_32OverCode.GDNewPanelSprite2Objects2.length = 0;
gdjs.Game_32OverCode.GDGameOverObjects1.length = 0;
gdjs.Game_32OverCode.GDGameOverObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);

return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
