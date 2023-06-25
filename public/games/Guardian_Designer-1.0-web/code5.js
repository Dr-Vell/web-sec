gdjs.TutorialCode = {};
gdjs.TutorialCode.GDPlayerObjects1= [];
gdjs.TutorialCode.GDPlayerObjects2= [];
gdjs.TutorialCode.GDCollisionObjects1= [];
gdjs.TutorialCode.GDCollisionObjects2= [];
gdjs.TutorialCode.GDNewPanelSpriteObjects1= [];
gdjs.TutorialCode.GDNewPanelSpriteObjects2= [];


gdjs.TutorialCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Wait");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Wait") >= 5;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}}

}


};

gdjs.TutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TutorialCode.GDPlayerObjects1.length = 0;
gdjs.TutorialCode.GDPlayerObjects2.length = 0;
gdjs.TutorialCode.GDCollisionObjects1.length = 0;
gdjs.TutorialCode.GDCollisionObjects2.length = 0;
gdjs.TutorialCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.TutorialCode.GDNewPanelSpriteObjects2.length = 0;

gdjs.TutorialCode.eventsList0(runtimeScene);

return;

}

gdjs['TutorialCode'] = gdjs.TutorialCode;
