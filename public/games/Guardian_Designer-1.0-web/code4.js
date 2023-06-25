gdjs.VictoryCode = {};
gdjs.VictoryCode.GDPlayerObjects1= [];
gdjs.VictoryCode.GDPlayerObjects2= [];
gdjs.VictoryCode.GDCollisionObjects1= [];
gdjs.VictoryCode.GDCollisionObjects2= [];
gdjs.VictoryCode.GDNewPanelSpriteObjects1= [];
gdjs.VictoryCode.GDNewPanelSpriteObjects2= [];
gdjs.VictoryCode.GDNewBBTextObjects1= [];
gdjs.VictoryCode.GDNewBBTextObjects2= [];
gdjs.VictoryCode.GDNewSpriteObjects1= [];
gdjs.VictoryCode.GDNewSpriteObjects2= [];


gdjs.VictoryCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Wait");
}{gdjs.evtTools.sound.playMusic(runtimeScene, "victory.mp3", false, 50, 1);
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

gdjs.VictoryCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.VictoryCode.GDPlayerObjects1.length = 0;
gdjs.VictoryCode.GDPlayerObjects2.length = 0;
gdjs.VictoryCode.GDCollisionObjects1.length = 0;
gdjs.VictoryCode.GDCollisionObjects2.length = 0;
gdjs.VictoryCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.VictoryCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.VictoryCode.GDNewBBTextObjects1.length = 0;
gdjs.VictoryCode.GDNewBBTextObjects2.length = 0;
gdjs.VictoryCode.GDNewSpriteObjects1.length = 0;
gdjs.VictoryCode.GDNewSpriteObjects2.length = 0;

gdjs.VictoryCode.eventsList0(runtimeScene);

return;

}

gdjs['VictoryCode'] = gdjs.VictoryCode;
