gdjs.BattleCode = {};
gdjs.BattleCode.GDPlayerObjects1= [];
gdjs.BattleCode.GDPlayerObjects2= [];
gdjs.BattleCode.GDPlayerObjects3= [];
gdjs.BattleCode.GDCollisionObjects1= [];
gdjs.BattleCode.GDCollisionObjects2= [];
gdjs.BattleCode.GDCollisionObjects3= [];
gdjs.BattleCode.GDMapObjects1= [];
gdjs.BattleCode.GDMapObjects2= [];
gdjs.BattleCode.GDMapObjects3= [];
gdjs.BattleCode.GDGunObjects1= [];
gdjs.BattleCode.GDGunObjects2= [];
gdjs.BattleCode.GDGunObjects3= [];
gdjs.BattleCode.GDBulletObjects1= [];
gdjs.BattleCode.GDBulletObjects2= [];
gdjs.BattleCode.GDBulletObjects3= [];
gdjs.BattleCode.GDBlackBGObjects1= [];
gdjs.BattleCode.GDBlackBGObjects2= [];
gdjs.BattleCode.GDBlackBGObjects3= [];
gdjs.BattleCode.GDEnemyObjects1= [];
gdjs.BattleCode.GDEnemyObjects2= [];
gdjs.BattleCode.GDEnemyObjects3= [];
gdjs.BattleCode.GDEnemySpawnObjects1= [];
gdjs.BattleCode.GDEnemySpawnObjects2= [];
gdjs.BattleCode.GDEnemySpawnObjects3= [];
gdjs.BattleCode.GDcursorObjects1= [];
gdjs.BattleCode.GDcursorObjects2= [];
gdjs.BattleCode.GDcursorObjects3= [];
gdjs.BattleCode.GDCopperRedBarObjects1= [];
gdjs.BattleCode.GDCopperRedBarObjects2= [];
gdjs.BattleCode.GDCopperRedBarObjects3= [];
gdjs.BattleCode.GDPauseBGObjects1= [];
gdjs.BattleCode.GDPauseBGObjects2= [];
gdjs.BattleCode.GDPauseBGObjects3= [];
gdjs.BattleCode.GDButtonAObjects1= [];
gdjs.BattleCode.GDButtonAObjects2= [];
gdjs.BattleCode.GDButtonAObjects3= [];
gdjs.BattleCode.GDButtonBObjects1= [];
gdjs.BattleCode.GDButtonBObjects2= [];
gdjs.BattleCode.GDButtonBObjects3= [];
gdjs.BattleCode.GDButtonCObjects1= [];
gdjs.BattleCode.GDButtonCObjects2= [];
gdjs.BattleCode.GDButtonCObjects3= [];
gdjs.BattleCode.GDXPObjects1= [];
gdjs.BattleCode.GDXPObjects2= [];
gdjs.BattleCode.GDXPObjects3= [];
gdjs.BattleCode.GDQuestionsObjects1= [];
gdjs.BattleCode.GDQuestionsObjects2= [];
gdjs.BattleCode.GDQuestionsObjects3= [];
gdjs.BattleCode.GDBoostsObjects1= [];
gdjs.BattleCode.GDBoostsObjects2= [];
gdjs.BattleCode.GDBoostsObjects3= [];
gdjs.BattleCode.GDBoostsShadowObjects1= [];
gdjs.BattleCode.GDBoostsShadowObjects2= [];
gdjs.BattleCode.GDBoostsShadowObjects3= [];


gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.BattleCode.GDcursorObjects1});
gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.BattleCode.GDBulletObjects2});
gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.BattleCode.GDBulletObjects2});
gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.BattleCode.GDBulletObjects2});
gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.BattleCode.GDBulletObjects2});
gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.BattleCode.GDBulletObjects1});
gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.BattleCode.GDBulletObjects1});
gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.BattleCode.GDBulletObjects1});
gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.BattleCode.GDBulletObjects1});
gdjs.BattleCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(4)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.BattleCode.GDGunObjects2);
gdjs.BattleCode.GDBulletObjects2.length = 0;

{for(var i = 0, len = gdjs.BattleCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects2[i].getBehavior("FireBullet").Fire((gdjs.BattleCode.GDGunObjects2[i].getPointX("Bullet")), (gdjs.BattleCode.GDGunObjects2[i].getPointY("Bullet")), gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDBulletObjects2Objects, (gdjs.BattleCode.GDGunObjects2[i].getAngle()), 400, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(4)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.BattleCode.GDGunObjects2);
gdjs.BattleCode.GDBulletObjects2.length = 0;

{for(var i = 0, len = gdjs.BattleCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects2[i].getBehavior("FireBullet").Fire((gdjs.BattleCode.GDGunObjects2[i].getPointX("Bullet")), (gdjs.BattleCode.GDGunObjects2[i].getPointY("Bullet")), gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDBulletObjects2Objects, (gdjs.BattleCode.GDGunObjects2[i].getAngle()), 400, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects2[i].getBehavior("FireBullet").Fire((gdjs.BattleCode.GDGunObjects2[i].getPointX("Bullet")), (gdjs.BattleCode.GDGunObjects2[i].getPointY("Bullet")), gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDBulletObjects2Objects, (gdjs.BattleCode.GDGunObjects2[i].getAngle()) + 10, 400, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects2[i].getBehavior("FireBullet").Fire((gdjs.BattleCode.GDGunObjects2[i].getPointX("Bullet")), (gdjs.BattleCode.GDGunObjects2[i].getPointY("Bullet")), gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDBulletObjects2Objects, (gdjs.BattleCode.GDGunObjects2[i].getAngle()) - 10, 400, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects1[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects1[i].getVariables().getFromIndex(4)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects1[k] = gdjs.BattleCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.BattleCode.GDGunObjects1);
gdjs.BattleCode.GDBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.BattleCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects1[i].getBehavior("FireBullet").Fire((gdjs.BattleCode.GDGunObjects1[i].getPointX("Bullet")), (gdjs.BattleCode.GDGunObjects1[i].getPointY("Bullet")), gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDBulletObjects1Objects, (gdjs.BattleCode.GDGunObjects1[i].getAngle()) + 5, 400, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects1[i].getBehavior("FireBullet").Fire((gdjs.BattleCode.GDGunObjects1[i].getPointX("Bullet")), (gdjs.BattleCode.GDGunObjects1[i].getPointY("Bullet")), gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDBulletObjects1Objects, (gdjs.BattleCode.GDGunObjects1[i].getAngle()) + 15, 400, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects1[i].getBehavior("FireBullet").Fire((gdjs.BattleCode.GDGunObjects1[i].getPointX("Bullet")), (gdjs.BattleCode.GDGunObjects1[i].getPointY("Bullet")), gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDBulletObjects1Objects, (gdjs.BattleCode.GDGunObjects1[i].getAngle()) - 15, 400, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects1[i].getBehavior("FireBullet").Fire((gdjs.BattleCode.GDGunObjects1[i].getPointX("Bullet")), (gdjs.BattleCode.GDGunObjects1[i].getPointY("Bullet")), gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDBulletObjects1Objects, (gdjs.BattleCode.GDGunObjects1[i].getAngle()) - 5, 400, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.BattleCode.GDBulletObjects1});
gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDCollisionObjects1Objects = Hashtable.newFrom({"Collision": gdjs.BattleCode.GDCollisionObjects1});
gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.BattleCode.GDBulletObjects1});
gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.BattleCode.GDEnemyObjects1});
gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDEnemySpawnObjects1Objects = Hashtable.newFrom({"EnemySpawn": gdjs.BattleCode.GDEnemySpawnObjects1});
gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.BattleCode.GDEnemyObjects1});
gdjs.BattleCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.BattleCode.GDEnemySpawnObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDEnemySpawnObjects1Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDEnemySpawnObjects1 */
gdjs.BattleCode.GDEnemyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDEnemyObjects1Objects, (( gdjs.BattleCode.GDEnemySpawnObjects1.length === 0 ) ? 0 :gdjs.BattleCode.GDEnemySpawnObjects1[0].getPointX("")), (( gdjs.BattleCode.GDEnemySpawnObjects1.length === 0 ) ? 0 :gdjs.BattleCode.GDEnemySpawnObjects1[0].getPointY("")), "");
}}

}


};gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.BattleCode.GDEnemyObjects1});
gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.BattleCode.GDEnemyObjects1});
gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.BattleCode.GDPlayerObjects1});
gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDCollisionObjects1Objects = Hashtable.newFrom({"Collision": gdjs.BattleCode.GDCollisionObjects1});
gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.BattleCode.GDPlayerObjects1});
gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDCollisionObjects1Objects = Hashtable.newFrom({"Collision": gdjs.BattleCode.GDCollisionObjects1});
gdjs.BattleCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 9 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Victory", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12256028);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Boosts"), gdjs.BattleCode.GDBoostsObjects1);
gdjs.copyArray(runtimeScene.getObjects("BoostsShadow"), gdjs.BattleCode.GDBoostsShadowObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonA"), gdjs.BattleCode.GDButtonAObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonB"), gdjs.BattleCode.GDButtonBObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonC"), gdjs.BattleCode.GDButtonCObjects1);
gdjs.copyArray(runtimeScene.getObjects("Map"), gdjs.BattleCode.GDMapObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDMapObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDMapObjects1[i].returnVariable(gdjs.BattleCode.GDMapObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonAObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonAObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonBObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonBObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonCObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonCObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDBoostsObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDBoostsObjects1[i].setString("+ WRONG!");
}
}{for(var i = 0, len = gdjs.BattleCode.GDBoostsShadowObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDBoostsShadowObjects1[i].setString("+ WRONG!");
}
}}

}


};gdjs.BattleCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Boosts"), gdjs.BattleCode.GDBoostsObjects2);
gdjs.copyArray(runtimeScene.getObjects("BoostsShadow"), gdjs.BattleCode.GDBoostsShadowObjects2);
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.BattleCode.GDGunObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects2[i].getBehavior("FireBullet").SetCooldownOp(0.8, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(1);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(20, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDBoostsObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDBoostsObjects2[i].setString("+ Fire rate!");
}
}{for(var i = 0, len = gdjs.BattleCode.GDBoostsShadowObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDBoostsShadowObjects2[i].setString("+ Fire rate!");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0.8);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(25, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Boosts"), gdjs.BattleCode.GDBoostsObjects2);
gdjs.copyArray(runtimeScene.getObjects("BoostsShadow"), gdjs.BattleCode.GDBoostsShadowObjects2);
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.BattleCode.GDGunObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.BattleCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects2[i].getBehavior("FireBullet").SetCooldownOp(0.6, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(4)).setNumber(1);
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0.6);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(30, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDBoostsObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDBoostsObjects2[i].setString("SHOTGUN!");
}
}{for(var i = 0, len = gdjs.BattleCode.GDBoostsShadowObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDBoostsShadowObjects2[i].setString("SHOTGUN!");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0.4);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(35, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0.3);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(40, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0.25);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(45, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0.2);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(50, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Boosts"), gdjs.BattleCode.GDBoostsObjects2);
gdjs.copyArray(runtimeScene.getObjects("BoostsShadow"), gdjs.BattleCode.GDBoostsShadowObjects2);
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.BattleCode.GDGunObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects2[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.BattleCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects2[i].getBehavior("FireBullet").SetCooldownOp(0.05, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0.15);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(55, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(4)).setNumber(0);
}
}{for(var i = 0, len = gdjs.BattleCode.GDBoostsObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDBoostsObjects2[i].setString("+ Fire rate!");
}
}{for(var i = 0, len = gdjs.BattleCode.GDBoostsShadowObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDBoostsShadowObjects2[i].setString("+ Fire rate!");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0.1);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.BattleCode.GDButtonAObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ButtonB"), gdjs.BattleCode.GDButtonBObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonC"), gdjs.BattleCode.GDButtonCObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects1[i].returnVariable(gdjs.BattleCode.GDPlayerObjects1[i].getVariables().getFromIndex(2)).add(1);
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonAObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonAObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonBObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonBObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonCObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonCObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.BattleCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(1);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(20, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0.8);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(25, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0.6);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(30, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Boosts"), gdjs.BattleCode.GDBoostsObjects2);
gdjs.copyArray(runtimeScene.getObjects("BoostsShadow"), gdjs.BattleCode.GDBoostsShadowObjects2);
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.BattleCode.GDGunObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.BattleCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects2[i].getBehavior("FireBullet").SetCooldownOp(0.4, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(4)).setNumber(1);
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0.4);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(35, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDBoostsObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDBoostsObjects2[i].setString("+ Fire rate!");
}
}{for(var i = 0, len = gdjs.BattleCode.GDBoostsShadowObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDBoostsShadowObjects2[i].setString("+ Fire rate!");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0.3);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(40, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Boosts"), gdjs.BattleCode.GDBoostsObjects2);
gdjs.copyArray(runtimeScene.getObjects("BoostsShadow"), gdjs.BattleCode.GDBoostsShadowObjects2);
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.BattleCode.GDGunObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects2[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.BattleCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects2[i].getBehavior("FireBullet").SetCooldownOp(0.15, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0.25);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(45, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(4)).setNumber(0);
}
}{for(var i = 0, len = gdjs.BattleCode.GDBoostsObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDBoostsObjects2[i].setString("AK-47!");
}
}{for(var i = 0, len = gdjs.BattleCode.GDBoostsShadowObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDBoostsShadowObjects2[i].setString("AK-47!");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Boosts"), gdjs.BattleCode.GDBoostsObjects2);
gdjs.copyArray(runtimeScene.getObjects("BoostsShadow"), gdjs.BattleCode.GDBoostsShadowObjects2);
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.BattleCode.GDGunObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects2[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.BattleCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects2[i].getBehavior("FireBullet").SetCooldownOp(0.1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0.2);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(50, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(4)).setNumber(0);
}
}{for(var i = 0, len = gdjs.BattleCode.GDBoostsObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDBoostsObjects2[i].setString("+ Fire rate!");
}
}{for(var i = 0, len = gdjs.BattleCode.GDBoostsShadowObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDBoostsShadowObjects2[i].setString("+ Fire rate!");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0.15);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(55, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0.1);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ButtonA"), gdjs.BattleCode.GDButtonAObjects1);
/* Reuse gdjs.BattleCode.GDButtonBObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ButtonC"), gdjs.BattleCode.GDButtonCObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects1[i].returnVariable(gdjs.BattleCode.GDPlayerObjects1[i].getVariables().getFromIndex(2)).add(1);
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonAObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonAObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonBObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonBObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonCObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonCObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.BattleCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(1);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(20, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Boosts"), gdjs.BattleCode.GDBoostsObjects2);
gdjs.copyArray(runtimeScene.getObjects("BoostsShadow"), gdjs.BattleCode.GDBoostsShadowObjects2);
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.BattleCode.GDGunObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects2[i].getBehavior("FireBullet").SetCooldownOp(0.6, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0.8);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(25, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDBoostsObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDBoostsObjects2[i].setString("+ Fire rate!");
}
}{for(var i = 0, len = gdjs.BattleCode.GDBoostsShadowObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDBoostsShadowObjects2[i].setString("+ Fire rate!");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0.6);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(30, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0.4);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(35, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Boosts"), gdjs.BattleCode.GDBoostsObjects2);
gdjs.copyArray(runtimeScene.getObjects("BoostsShadow"), gdjs.BattleCode.GDBoostsShadowObjects2);
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.BattleCode.GDGunObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.BattleCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects2[i].getBehavior("FireBullet").SetCooldownOp(0.3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(4)).setNumber(2);
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0.3);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(40, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDBoostsObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDBoostsObjects2[i].setString("+ 1 bullet!");
}
}{for(var i = 0, len = gdjs.BattleCode.GDBoostsShadowObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDBoostsShadowObjects2[i].setString("+ 1 bullet!");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0.25);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(45, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0.2);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(50, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0.15);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(55, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Boosts"), gdjs.BattleCode.GDBoostsObjects2);
gdjs.copyArray(runtimeScene.getObjects("BoostsShadow"), gdjs.BattleCode.GDBoostsShadowObjects2);
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.BattleCode.GDGunObjects2);
/* Reuse gdjs.BattleCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects2[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.BattleCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects2[i].getBehavior("FireBullet").SetCooldownOp(0.01, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0.1);
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects2[i].SetMaxValue(200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].returnVariable(gdjs.BattleCode.GDPlayerObjects2[i].getVariables().getFromIndex(4)).setNumber(0);
}
}{for(var i = 0, len = gdjs.BattleCode.GDBoostsObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDBoostsObjects2[i].setString("MINIGUN!");
}
}{for(var i = 0, len = gdjs.BattleCode.GDBoostsShadowObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDBoostsShadowObjects2[i].setString("MINIGUN!");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ButtonA"), gdjs.BattleCode.GDButtonAObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonB"), gdjs.BattleCode.GDButtonBObjects1);
/* Reuse gdjs.BattleCode.GDButtonCObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects1[i].returnVariable(gdjs.BattleCode.GDPlayerObjects1[i].getVariables().getFromIndex(2)).add(1);
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonAObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonAObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonBObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonBObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonCObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonCObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.BattleCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.BattleCode.GDGunObjects1, gdjs.BattleCode.GDGunObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDGunObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDGunObjects2[i].getAnimation() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDGunObjects2[k] = gdjs.BattleCode.GDGunObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDGunObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "pistol.mp3", false, 20, 1);
}}

}


{

gdjs.copyArray(gdjs.BattleCode.GDGunObjects1, gdjs.BattleCode.GDGunObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDGunObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDGunObjects2[i].getAnimation() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDGunObjects2[k] = gdjs.BattleCode.GDGunObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDGunObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "shotgun.mp3", false, 20, 1);
}}

}


{

gdjs.copyArray(gdjs.BattleCode.GDGunObjects1, gdjs.BattleCode.GDGunObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDGunObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDGunObjects2[i].getAnimation() == 2 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDGunObjects2[k] = gdjs.BattleCode.GDGunObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDGunObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ak47.mp3", false, 20, 1);
}}

}


{

/* Reuse gdjs.BattleCode.GDGunObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDGunObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDGunObjects1[i].getAnimation() == 3 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDGunObjects1[k] = gdjs.BattleCode.GDGunObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDGunObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "minigun.mp3", false, 20, 1);
}}

}


};gdjs.BattleCode.eventsList7 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonA"), gdjs.BattleCode.GDButtonAObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonB"), gdjs.BattleCode.GDButtonBObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonC"), gdjs.BattleCode.GDButtonCObjects1);
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemySpawn"), gdjs.BattleCode.GDEnemySpawnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.BattleCode.GDGunObjects1);
gdjs.copyArray(runtimeScene.getObjects("Map"), gdjs.BattleCode.GDMapObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);
gdjs.BattleCode.GDcursorObjects1.length = 0;

{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.25, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.BattleCode.GDMapObjects1.length !== 0 ? gdjs.BattleCode.GDMapObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.BattleCode.GDEnemySpawnObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDEnemySpawnObjects1[i].resetTimer("EnemyTimer");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDcursorObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}{for(var i = 0, len = gdjs.BattleCode.GDMapObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDMapObjects1[i].returnVariable(gdjs.BattleCode.GDMapObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects1[i].returnVariable(gdjs.BattleCode.GDPlayerObjects1[i].getVariables().getFromIndex(2)).setNumber(0);
}
}{for(var i = 0, len = gdjs.BattleCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects1[i].getBehavior("FireBullet").SetCooldownOp(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonAObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonAObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonBObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonBObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonCObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonCObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects1[i].SetMaxValue(15, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects1[i].returnVariable(gdjs.BattleCode.GDPlayerObjects1[i].getVariables().get("DMGperBullet")).setNumber(1);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("Battle"), true);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "battle.mp3", true, 40, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.BattleCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.BattleCode.GDEnemyObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDBulletObjects1[i].setScale(5);
}
}{for(var i = 0, len = gdjs.BattleCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDEnemyObjects1[i].setScale(5);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.BattleCode.GDGunObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects1[i].setPosition((( gdjs.BattleCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.BattleCode.GDPlayerObjects1[0].getPointX("Gun")),(( gdjs.BattleCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.BattleCode.GDPlayerObjects1[0].getPointY("Gun")));
}
}{for(var i = 0, len = gdjs.BattleCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.BattleCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.BattleCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDcursorObjects1[i].setZOrder(999);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.BattleCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects1[k] = gdjs.BattleCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateUpKey();
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.BattleCode.GDPlayerObjects1[i].getVariables().getFromIndex(1), true) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects1[k] = gdjs.BattleCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateUpKey();
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects1[i].setAnimation(3);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects1[i].setVariableBoolean(gdjs.BattleCode.GDPlayerObjects1[i].getVariables().getFromIndex(1), true);
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects1[i].setVariableBoolean(gdjs.BattleCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.BattleCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects1[k] = gdjs.BattleCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.BattleCode.GDPlayerObjects1[i].getVariables().getFromIndex(1), true) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects1[k] = gdjs.BattleCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects1[i].setAnimation(3);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects1[i].setVariableBoolean(gdjs.BattleCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), true);
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects1[i].setVariableBoolean(gdjs.BattleCode.GDPlayerObjects1[i].getVariables().getFromIndex(1), false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.BattleCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects1[k] = gdjs.BattleCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.BattleCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects1[k] = gdjs.BattleCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.BattleCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects1[k] = gdjs.BattleCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.BattleCode.GDPlayerObjects1[i].getVariables().getFromIndex(1), true) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects1[k] = gdjs.BattleCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects1[i].getX() < gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects1[k] = gdjs.BattleCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.BattleCode.GDGunObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects1[i].flipY(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects1[i].getX() > gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects1[k] = gdjs.BattleCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.BattleCode.GDGunObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDGunObjects1[i].flipY(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.BattleCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Collision"), gdjs.BattleCode.GDCollisionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDBulletObjects1Objects, gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDCollisionObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDBulletObjects1 */
{for(var i = 0, len = gdjs.BattleCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.BattleCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.BattleCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDBulletObjects1Objects, gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDEnemyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDBulletObjects1 */
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects1);
/* Reuse gdjs.BattleCode.GDEnemyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.BattleCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDEnemyObjects1[i].getBehavior("Health").Hit((gdjs.RuntimeObject.getVariableNumber(((gdjs.BattleCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BattleCode.GDPlayerObjects1[0].getVariables()).get("DMGperBullet"))), true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects1[i].SetValue(gdjs.BattleCode.GDCopperRedBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.BattleCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDEnemyObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDEnemyObjects1[k] = gdjs.BattleCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.BattleCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnemySpawn"), gdjs.BattleCode.GDEnemySpawnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDEnemySpawnObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDEnemySpawnObjects1[i].getTimerElapsedTimeInSecondsOrNaN("EnemyTimer") >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.BattleCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BattleCode.GDPlayerObjects1[0].getVariables()).getFromIndex(3))) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDEnemySpawnObjects1[k] = gdjs.BattleCode.GDEnemySpawnObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDEnemySpawnObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDEnemySpawnObjects1 */
{for(var i = 0, len = gdjs.BattleCode.GDEnemySpawnObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDEnemySpawnObjects1[i].resetTimer("EnemyTimer");
}
}
{ //Subevents
gdjs.BattleCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.BattleCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDEnemyObjects1Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDEnemyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDEnemyObjects1[i].addForceTowardObject((gdjs.BattleCode.GDPlayerObjects1.length !== 0 ? gdjs.BattleCode.GDPlayerObjects1[0] : null), 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.BattleCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDEnemyObjects1Objects, gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Collision"), gdjs.BattleCode.GDCollisionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDCollisionObjects1Objects, gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDCollisionObjects1 */
/* Reuse gdjs.BattleCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.BattleCode.mapOfGDgdjs_46BattleCode_46GDCollisionObjects1Objects, false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects1[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects1[i].getVariables().getFromIndex(2)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects1[k] = gdjs.BattleCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonA"), gdjs.BattleCode.GDButtonAObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonB"), gdjs.BattleCode.GDButtonBObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonC"), gdjs.BattleCode.GDButtonCObjects1);
gdjs.copyArray(runtimeScene.getObjects("Questions"), gdjs.BattleCode.GDQuestionsObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDQuestionsObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestionsObjects1[i].setString("What does Insecure Design in web application development refer to?");
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonAObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonAObjects1[i].SetLabelText("Missing or ineffective control design resulting in vulnerabilities", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonBObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonBObjects1[i].SetLabelText("Effective control design and vulnerability mitigation", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonCObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonCObjects1[i].SetLabelText("Prioritizing application security during the initial design phase", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects1[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects1[i].getVariables().getFromIndex(2)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects1[k] = gdjs.BattleCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonA"), gdjs.BattleCode.GDButtonAObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonB"), gdjs.BattleCode.GDButtonBObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonC"), gdjs.BattleCode.GDButtonCObjects1);
gdjs.copyArray(runtimeScene.getObjects("Questions"), gdjs.BattleCode.GDQuestionsObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDQuestionsObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestionsObjects1[i].setString("What are some measures for developing secure software?");
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonAObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonAObjects1[i].SetLabelText("Implementing an insecure development lifecycle", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonBObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonBObjects1[i].SetLabelText("Avoiding threat modeling and secure design patterns", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonCObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonCObjects1[i].SetLabelText("Employing a secure development lifecycle, secure design patterns, and threat modeling", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects1[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects1[i].getVariables().getFromIndex(2)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects1[k] = gdjs.BattleCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonA"), gdjs.BattleCode.GDButtonAObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonB"), gdjs.BattleCode.GDButtonBObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonC"), gdjs.BattleCode.GDButtonCObjects1);
gdjs.copyArray(runtimeScene.getObjects("Questions"), gdjs.BattleCode.GDQuestionsObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDQuestionsObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestionsObjects1[i].setString("What is a potential impact of insecure design on a company?");
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonAObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonAObjects1[i].SetLabelText("Exposure and potential modification of data by cybercriminals", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonBObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonBObjects1[i].SetLabelText("Improved data protection and security measures", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonCObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonCObjects1[i].SetLabelText("Increased efficiency and productivity in application development", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects1[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects1[i].getVariables().getFromIndex(2)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects1[k] = gdjs.BattleCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonA"), gdjs.BattleCode.GDButtonAObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonB"), gdjs.BattleCode.GDButtonBObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonC"), gdjs.BattleCode.GDButtonCObjects1);
gdjs.copyArray(runtimeScene.getObjects("Questions"), gdjs.BattleCode.GDQuestionsObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDQuestionsObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestionsObjects1[i].setString("Why is it crucial to avoid using a questions and answers credential recovery workflow in web application development?");
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonAObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonAObjects1[i].SetLabelText("It improves user experience.", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonBObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonBObjects1[i].SetLabelText("It violates NIST 800-63b guidelines.", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonCObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonCObjects1[i].SetLabelText("It is more cost-effective.", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects1[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects1[i].getVariables().getFromIndex(2)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects1[k] = gdjs.BattleCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonA"), gdjs.BattleCode.GDButtonAObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonB"), gdjs.BattleCode.GDButtonBObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonC"), gdjs.BattleCode.GDButtonCObjects1);
gdjs.copyArray(runtimeScene.getObjects("Questions"), gdjs.BattleCode.GDQuestionsObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDQuestionsObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestionsObjects1[i].setString("What is the potential consequence of attackers exploiting the group booking flow without a deposit requirement?");
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonAObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonAObjects1[i].SetLabelText("Increased attendance at cinemas.", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonBObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonBObjects1[i].SetLabelText("Improved customer satisfaction.", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonCObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonCObjects1[i].SetLabelText("Loss of income for the cinema chain.", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects1[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects1[i].getVariables().getFromIndex(2)) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects1[k] = gdjs.BattleCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonA"), gdjs.BattleCode.GDButtonAObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonB"), gdjs.BattleCode.GDButtonBObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonC"), gdjs.BattleCode.GDButtonCObjects1);
gdjs.copyArray(runtimeScene.getObjects("Questions"), gdjs.BattleCode.GDQuestionsObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDQuestionsObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestionsObjects1[i].setString("How can careful anti-bot design and domain logic rules help mitigate the issue of scalpers buying high-end video cards on the retail chain's e-commerce website?");
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonAObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonAObjects1[i].SetLabelText("By increasing publicity for video card makers.", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonBObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonBObjects1[i].SetLabelText("By identifying and rejecting inauthentic purchases.", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonCObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonCObjects1[i].SetLabelText("By reducing bad blood with enthusiasts.", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects1[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects1[i].getVariables().getFromIndex(2)) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects1[k] = gdjs.BattleCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonA"), gdjs.BattleCode.GDButtonAObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonB"), gdjs.BattleCode.GDButtonBObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonC"), gdjs.BattleCode.GDButtonCObjects1);
gdjs.copyArray(runtimeScene.getObjects("Questions"), gdjs.BattleCode.GDQuestionsObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDQuestionsObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestionsObjects1[i].setString("What should be done to identify potential vulnerabilities and risks in critical areas during the development process?");
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonAObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonAObjects1[i].SetLabelText("Implement plausibility checks at each tier of the application", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonBObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonBObjects1[i].SetLabelText("Utilize threat modeling", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonCObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonCObjects1[i].SetLabelText("Create unit and integration tests", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects1[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects1[i].getVariables().getFromIndex(2)) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects1[k] = gdjs.BattleCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonA"), gdjs.BattleCode.GDButtonAObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonB"), gdjs.BattleCode.GDButtonBObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonC"), gdjs.BattleCode.GDButtonCObjects1);
gdjs.copyArray(runtimeScene.getObjects("Questions"), gdjs.BattleCode.GDQuestionsObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDQuestionsObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestionsObjects1[i].setString("How can security considerations be integrated throughout the development process?");
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonAObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonAObjects1[i].SetLabelText("Incorporate security language and controls into user stories", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonBObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonBObjects1[i].SetLabelText("Establish and utilize a library of secure design patterns", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonCObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonCObjects1[i].SetLabelText("Enforce limitations on resource consumption", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects1[i].getVariableNumber(gdjs.BattleCode.GDPlayerObjects1[i].getVariables().getFromIndex(2)) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayerObjects1[k] = gdjs.BattleCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonA"), gdjs.BattleCode.GDButtonAObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonB"), gdjs.BattleCode.GDButtonBObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonC"), gdjs.BattleCode.GDButtonCObjects1);
gdjs.copyArray(runtimeScene.getObjects("Questions"), gdjs.BattleCode.GDQuestionsObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDQuestionsObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestionsObjects1[i].setString("What is the recommended approach to enhance security in a multi-tenant environment?");
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonAObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonAObjects1[i].SetLabelText("Utilize threat modeling to identify vulnerabilities", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonBObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonBObjects1[i].SetLabelText("Establish and follow a secure development lifecycle", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDButtonCObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonCObjects1[i].SetLabelText("Implement robust segregation of tenants across all tiers", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDCopperRedBarObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDCopperRedBarObjects1[i].IsFull((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDCopperRedBarObjects1[k] = gdjs.BattleCode.GDCopperRedBarObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDCopperRedBarObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Map"), gdjs.BattleCode.GDMapObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDMapObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDMapObjects1[i].getVariableNumber(gdjs.BattleCode.GDMapObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDMapObjects1[k] = gdjs.BattleCode.GDMapObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDMapObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonA"), gdjs.BattleCode.GDButtonAObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonB"), gdjs.BattleCode.GDButtonBObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonC"), gdjs.BattleCode.GDButtonCObjects1);
gdjs.copyArray(runtimeScene.getObjects("PauseBG"), gdjs.BattleCode.GDPauseBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("Questions"), gdjs.BattleCode.GDQuestionsObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDPauseBGObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPauseBGObjects1[i].setZOrder(99);
}
for(var i = 0, len = gdjs.BattleCode.GDButtonAObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonAObjects1[i].setZOrder(99);
}
for(var i = 0, len = gdjs.BattleCode.GDButtonBObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonBObjects1[i].setZOrder(99);
}
for(var i = 0, len = gdjs.BattleCode.GDButtonCObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonCObjects1[i].setZOrder(99);
}
for(var i = 0, len = gdjs.BattleCode.GDQuestionsObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestionsObjects1[i].setZOrder(99);
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonA"), gdjs.BattleCode.GDButtonAObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDButtonAObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDButtonAObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDButtonAObjects1[k] = gdjs.BattleCode.GDButtonAObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDButtonAObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Map"), gdjs.BattleCode.GDMapObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDMapObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDMapObjects1[i].returnVariable(gdjs.BattleCode.GDMapObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}
{ //Subevents
gdjs.BattleCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonB"), gdjs.BattleCode.GDButtonBObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDButtonBObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDButtonBObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDButtonBObjects1[k] = gdjs.BattleCode.GDButtonBObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDButtonBObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Map"), gdjs.BattleCode.GDMapObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDMapObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDMapObjects1[i].returnVariable(gdjs.BattleCode.GDMapObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}
{ //Subevents
gdjs.BattleCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonC"), gdjs.BattleCode.GDButtonCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDButtonCObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDButtonCObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDButtonCObjects1[k] = gdjs.BattleCode.GDButtonCObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDButtonCObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Map"), gdjs.BattleCode.GDMapObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDMapObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDMapObjects1[i].returnVariable(gdjs.BattleCode.GDMapObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}
{ //Subevents
gdjs.BattleCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Map"), gdjs.BattleCode.GDMapObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDMapObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDMapObjects1[i].getVariableNumber(gdjs.BattleCode.GDMapObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDMapObjects1[k] = gdjs.BattleCode.GDMapObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDMapObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Boosts"), gdjs.BattleCode.GDBoostsObjects1);
gdjs.copyArray(runtimeScene.getObjects("BoostsShadow"), gdjs.BattleCode.GDBoostsShadowObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonA"), gdjs.BattleCode.GDButtonAObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonB"), gdjs.BattleCode.GDButtonBObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonC"), gdjs.BattleCode.GDButtonCObjects1);
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BattleCode.GDCopperRedBarObjects1);
/* Reuse gdjs.BattleCode.GDMapObjects1 */
gdjs.copyArray(runtimeScene.getObjects("PauseBG"), gdjs.BattleCode.GDPauseBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("Questions"), gdjs.BattleCode.GDQuestionsObjects1);
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}{for(var i = 0, len = gdjs.BattleCode.GDMapObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDMapObjects1[i].returnVariable(gdjs.BattleCode.GDMapObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.BattleCode.GDPauseBGObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPauseBGObjects1[i].setZOrder(-(10));
}
for(var i = 0, len = gdjs.BattleCode.GDButtonAObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonAObjects1[i].setZOrder(-(10));
}
for(var i = 0, len = gdjs.BattleCode.GDButtonBObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonBObjects1[i].setZOrder(-(10));
}
for(var i = 0, len = gdjs.BattleCode.GDButtonCObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDButtonCObjects1[i].setZOrder(-(10));
}
for(var i = 0, len = gdjs.BattleCode.GDQuestionsObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestionsObjects1[i].setZOrder(-(10));
}
}{for(var i = 0, len = gdjs.BattleCode.GDCopperRedBarObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDCopperRedBarObjects1[i].SetValue(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Boost");
}{for(var i = 0, len = gdjs.BattleCode.GDBoostsObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDBoostsObjects1[i].setZOrder(105);
}
}{for(var i = 0, len = gdjs.BattleCode.GDBoostsShadowObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDBoostsShadowObjects1[i].setZOrder(104);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Boost") >= 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Boosts"), gdjs.BattleCode.GDBoostsObjects1);
gdjs.copyArray(runtimeScene.getObjects("BoostsShadow"), gdjs.BattleCode.GDBoostsShadowObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDBoostsObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDBoostsObjects1[i].setZOrder(-(99));
}
}{for(var i = 0, len = gdjs.BattleCode.GDBoostsShadowObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDBoostsShadowObjects1[i].setZOrder(-(99));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.BattleCode.GDGunObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDGunObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDGunObjects1[i].getBehavior("FireBullet").HasJustFired((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDGunObjects1[k] = gdjs.BattleCode.GDGunObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDGunObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList6(runtimeScene);} //End of subevents
}

}


};

gdjs.BattleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BattleCode.GDPlayerObjects1.length = 0;
gdjs.BattleCode.GDPlayerObjects2.length = 0;
gdjs.BattleCode.GDPlayerObjects3.length = 0;
gdjs.BattleCode.GDCollisionObjects1.length = 0;
gdjs.BattleCode.GDCollisionObjects2.length = 0;
gdjs.BattleCode.GDCollisionObjects3.length = 0;
gdjs.BattleCode.GDMapObjects1.length = 0;
gdjs.BattleCode.GDMapObjects2.length = 0;
gdjs.BattleCode.GDMapObjects3.length = 0;
gdjs.BattleCode.GDGunObjects1.length = 0;
gdjs.BattleCode.GDGunObjects2.length = 0;
gdjs.BattleCode.GDGunObjects3.length = 0;
gdjs.BattleCode.GDBulletObjects1.length = 0;
gdjs.BattleCode.GDBulletObjects2.length = 0;
gdjs.BattleCode.GDBulletObjects3.length = 0;
gdjs.BattleCode.GDBlackBGObjects1.length = 0;
gdjs.BattleCode.GDBlackBGObjects2.length = 0;
gdjs.BattleCode.GDBlackBGObjects3.length = 0;
gdjs.BattleCode.GDEnemyObjects1.length = 0;
gdjs.BattleCode.GDEnemyObjects2.length = 0;
gdjs.BattleCode.GDEnemyObjects3.length = 0;
gdjs.BattleCode.GDEnemySpawnObjects1.length = 0;
gdjs.BattleCode.GDEnemySpawnObjects2.length = 0;
gdjs.BattleCode.GDEnemySpawnObjects3.length = 0;
gdjs.BattleCode.GDcursorObjects1.length = 0;
gdjs.BattleCode.GDcursorObjects2.length = 0;
gdjs.BattleCode.GDcursorObjects3.length = 0;
gdjs.BattleCode.GDCopperRedBarObjects1.length = 0;
gdjs.BattleCode.GDCopperRedBarObjects2.length = 0;
gdjs.BattleCode.GDCopperRedBarObjects3.length = 0;
gdjs.BattleCode.GDPauseBGObjects1.length = 0;
gdjs.BattleCode.GDPauseBGObjects2.length = 0;
gdjs.BattleCode.GDPauseBGObjects3.length = 0;
gdjs.BattleCode.GDButtonAObjects1.length = 0;
gdjs.BattleCode.GDButtonAObjects2.length = 0;
gdjs.BattleCode.GDButtonAObjects3.length = 0;
gdjs.BattleCode.GDButtonBObjects1.length = 0;
gdjs.BattleCode.GDButtonBObjects2.length = 0;
gdjs.BattleCode.GDButtonBObjects3.length = 0;
gdjs.BattleCode.GDButtonCObjects1.length = 0;
gdjs.BattleCode.GDButtonCObjects2.length = 0;
gdjs.BattleCode.GDButtonCObjects3.length = 0;
gdjs.BattleCode.GDXPObjects1.length = 0;
gdjs.BattleCode.GDXPObjects2.length = 0;
gdjs.BattleCode.GDXPObjects3.length = 0;
gdjs.BattleCode.GDQuestionsObjects1.length = 0;
gdjs.BattleCode.GDQuestionsObjects2.length = 0;
gdjs.BattleCode.GDQuestionsObjects3.length = 0;
gdjs.BattleCode.GDBoostsObjects1.length = 0;
gdjs.BattleCode.GDBoostsObjects2.length = 0;
gdjs.BattleCode.GDBoostsObjects3.length = 0;
gdjs.BattleCode.GDBoostsShadowObjects1.length = 0;
gdjs.BattleCode.GDBoostsShadowObjects2.length = 0;
gdjs.BattleCode.GDBoostsShadowObjects3.length = 0;

gdjs.BattleCode.eventsList7(runtimeScene);

return;

}

gdjs['BattleCode'] = gdjs.BattleCode;
