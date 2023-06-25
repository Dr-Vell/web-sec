gdjs.IntroCode = {};
gdjs.IntroCode.GDPlayerObjects1= [];
gdjs.IntroCode.GDPlayerObjects2= [];
gdjs.IntroCode.GDCollisionObjects1= [];
gdjs.IntroCode.GDCollisionObjects2= [];
gdjs.IntroCode.GDNewPanelSpriteObjects1= [];
gdjs.IntroCode.GDNewPanelSpriteObjects2= [];
gdjs.IntroCode.GDNewPanelSprite2Objects1= [];
gdjs.IntroCode.GDNewPanelSprite2Objects2= [];
gdjs.IntroCode.GDEntranceObjects1= [];
gdjs.IntroCode.GDEntranceObjects2= [];
gdjs.IntroCode.GDGuideArea1Objects1= [];
gdjs.IntroCode.GDGuideArea1Objects2= [];
gdjs.IntroCode.GDGuideArea2Objects1= [];
gdjs.IntroCode.GDGuideArea2Objects2= [];
gdjs.IntroCode.GDGuideArea3Objects1= [];
gdjs.IntroCode.GDGuideArea3Objects2= [];
gdjs.IntroCode.GDGuideBox1Objects1= [];
gdjs.IntroCode.GDGuideBox1Objects2= [];
gdjs.IntroCode.GDGuideBox2Objects1= [];
gdjs.IntroCode.GDGuideBox2Objects2= [];
gdjs.IntroCode.GDGuideText01Objects1= [];
gdjs.IntroCode.GDGuideText01Objects2= [];
gdjs.IntroCode.GDGuideText02Objects1= [];
gdjs.IntroCode.GDGuideText02Objects2= [];
gdjs.IntroCode.GDGuiteTitle01Objects1= [];
gdjs.IntroCode.GDGuiteTitle01Objects2= [];


gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDEntranceObjects1Objects = Hashtable.newFrom({"Entrance": gdjs.IntroCode.GDEntranceObjects1});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.IntroCode.GDPlayerObjects1});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDGuideArea1Objects1Objects = Hashtable.newFrom({"GuideArea1": gdjs.IntroCode.GDGuideArea1Objects1});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.IntroCode.GDPlayerObjects1});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDGuideArea2Objects1Objects = Hashtable.newFrom({"GuideArea2": gdjs.IntroCode.GDGuideArea2Objects1});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.IntroCode.GDPlayerObjects1});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDGuideArea3Objects1Objects = Hashtable.newFrom({"GuideArea3": gdjs.IntroCode.GDGuideArea3Objects1});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.IntroCode.GDPlayerObjects1});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDGuideArea1Objects1Objects = Hashtable.newFrom({"GuideArea1": gdjs.IntroCode.GDGuideArea1Objects1});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.IntroCode.GDPlayerObjects1});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDGuideArea2Objects1Objects = Hashtable.newFrom({"GuideArea2": gdjs.IntroCode.GDGuideArea2Objects1});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.IntroCode.GDPlayerObjects1});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDGuideArea3Objects1Objects = Hashtable.newFrom({"GuideArea3": gdjs.IntroCode.GDGuideArea3Objects1});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.IntroCode.GDPlayerObjects1});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDCollisionObjects1Objects = Hashtable.newFrom({"Collision": gdjs.IntroCode.GDCollisionObjects1});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.IntroCode.GDPlayerObjects1});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDCollisionObjects1Objects = Hashtable.newFrom({"Collision": gdjs.IntroCode.GDCollisionObjects1});
gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "dungeon-air.mp3", true, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Entrance"), gdjs.IntroCode.GDEntranceObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.IntroCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDEntranceObjects1Objects, gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Battle", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GuideArea1"), gdjs.IntroCode.GDGuideArea1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.IntroCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDGuideArea1Objects1Objects, gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GuideBox1"), gdjs.IntroCode.GDGuideBox1Objects1);
gdjs.copyArray(runtimeScene.getObjects("GuideBox2"), gdjs.IntroCode.GDGuideBox2Objects1);
gdjs.copyArray(runtimeScene.getObjects("GuideText01"), gdjs.IntroCode.GDGuideText01Objects1);
gdjs.copyArray(runtimeScene.getObjects("GuideText02"), gdjs.IntroCode.GDGuideText02Objects1);
gdjs.copyArray(runtimeScene.getObjects("GuiteTitle01"), gdjs.IntroCode.GDGuiteTitle01Objects1);
{for(var i = 0, len = gdjs.IntroCode.GDGuiteTitle01Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDGuiteTitle01Objects1[i].setString("INTRO");
}
}{for(var i = 0, len = gdjs.IntroCode.GDGuideText01Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDGuideText01Objects1[i].setString("The concept of insecure design encompasses various vulnerabilities referred to as missing or ineffective control design. It is crucial to prioritize application security right from the initial design phase when developing a web application.\n\n\nA secure design approach involves a culture and methodology that consistently assesses potential threats and ensures that the code is meticulously designed and tested to mitigate known attack techniques.\n\n\nDeveloping secure software necessitates implementing a secure development lifecycle, incorporating secure design patterns, following a paved road methodology, utilizing a secured component library, employing appropriate tools, and conducting threat modeling.\n");
}
}{for(var i = 0, len = gdjs.IntroCode.GDGuideText02Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDGuideText02Objects1[i].setString("What impact can this have on my company?\n\n- Exposure and potential modification of data by a cybercriminal. \n\n - Unauthorized access to the server/application by a cybercriminal with administrator or user privileges.");
}
}{for(var i = 0, len = gdjs.IntroCode.GDGuideBox1Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDGuideBox1Objects1[i].setZOrder(99);
}
for(var i = 0, len = gdjs.IntroCode.GDGuideBox2Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDGuideBox2Objects1[i].setZOrder(99);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GuideArea2"), gdjs.IntroCode.GDGuideArea2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.IntroCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDGuideArea2Objects1Objects, gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GuideBox1"), gdjs.IntroCode.GDGuideBox1Objects1);
gdjs.copyArray(runtimeScene.getObjects("GuideBox2"), gdjs.IntroCode.GDGuideBox2Objects1);
gdjs.copyArray(runtimeScene.getObjects("GuideText01"), gdjs.IntroCode.GDGuideText01Objects1);
gdjs.copyArray(runtimeScene.getObjects("GuideText02"), gdjs.IntroCode.GDGuideText02Objects1);
gdjs.copyArray(runtimeScene.getObjects("GuiteTitle01"), gdjs.IntroCode.GDGuiteTitle01Objects1);
{for(var i = 0, len = gdjs.IntroCode.GDGuiteTitle01Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDGuiteTitle01Objects1[i].setString("ATTACK");
}
}{for(var i = 0, len = gdjs.IntroCode.GDGuideText01Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDGuideText01Objects1[i].setString("Scenario #1:  When it comes to the development of a web application, it is crucial to avoid using a questions and answers credential recovery workflow. This approach is prohibited by NIST 800-63b, the OWASP ASVS, and the OWASP Top 10 due to its inherent security risks. Since multiple individuals can know the answers, questions and answers cannot be relied upon as evidence of identity. Therefore, it is necessary to eliminate such code and implement a more secure design.\n\nScenario #2:  A cinema chain offers group booking discounts, but there is a requirement of a deposit if the number of attendees exceeds fifteen. In this scenario, attackers could potentially exploit this flow by attempting to book six hundred seats across all cinemas with just a few requests. This could lead to a significant loss of income. It is essential to consider the potential threat and thoroughly test the system to prevent such attacks");
}
}{for(var i = 0, len = gdjs.IntroCode.GDGuideText02Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDGuideText02Objects1[i].setString("Scenario #3: A retail chain’s e-commerce website does not have protection against bots run by scalpers buying high-end video cards to resell auction websites. This creates terrible publicity for the video card makers and retail chain owners and enduring bad blood with enthusiasts who cannot obtain these cards at any price. Careful anti-bot design and domain logic rules, such as purchases made within a few seconds of availability, might identify inauthentic purchases and rejected such transactions.");
}
}{for(var i = 0, len = gdjs.IntroCode.GDGuideBox1Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDGuideBox1Objects1[i].setZOrder(99);
}
for(var i = 0, len = gdjs.IntroCode.GDGuideBox2Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDGuideBox2Objects1[i].setZOrder(99);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GuideArea3"), gdjs.IntroCode.GDGuideArea3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.IntroCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDGuideArea3Objects1Objects, gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GuideBox1"), gdjs.IntroCode.GDGuideBox1Objects1);
gdjs.copyArray(runtimeScene.getObjects("GuideBox2"), gdjs.IntroCode.GDGuideBox2Objects1);
gdjs.copyArray(runtimeScene.getObjects("GuideText01"), gdjs.IntroCode.GDGuideText01Objects1);
gdjs.copyArray(runtimeScene.getObjects("GuideText02"), gdjs.IntroCode.GDGuideText02Objects1);
gdjs.copyArray(runtimeScene.getObjects("GuiteTitle01"), gdjs.IntroCode.GDGuiteTitle01Objects1);
{for(var i = 0, len = gdjs.IntroCode.GDGuiteTitle01Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDGuiteTitle01Objects1[i].setString("DEFENSE");
}
}{for(var i = 0, len = gdjs.IntroCode.GDGuideText01Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDGuideText01Objects1[i].setString("Here's a list of ideas to prevent this vulnerability:\n\n - Implement and follow a secure development lifecycle by collaborating with application security professionals who can assist in evaluating and designing security and privacy controls.\n\n - Establish and utilize a library of secure design patterns or ready-to-use components to ensure a more secure development process.\n\n - Utilize threat modeling to identify potential vulnerabilities and risks in critical areas such as authentication, access control, business logic, and key workflows.\n\n - Incorporate security language and controls into user stories to ensure that security considerations are integrated throughout the development process.");
}
}{for(var i = 0, len = gdjs.IntroCode.GDGuideText02Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDGuideText02Objects1[i].setString(" - Implement plausibility checks at each tier of your application, ranging from the frontend to the backend, to validate the integrity and security of the system.\n\n - Create unit and integration tests to validate that critical workflows are resistant to potential threats outlined in the threat model. Compile use-cases and misuse-cases for each tier of the application.\n\n - Segregate different layers of the system and network based on their exposure and protection requirements to enhance security.\n\n - Implement robust segregation of tenants across all tiers to ensure secure multi-tenancy.\n\n - Enforce limitations on resource consumption by users or services to prevent excessive utilization.");
}
}{for(var i = 0, len = gdjs.IntroCode.GDGuideBox1Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDGuideBox1Objects1[i].setZOrder(99);
}
for(var i = 0, len = gdjs.IntroCode.GDGuideBox2Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDGuideBox2Objects1[i].setZOrder(99);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GuideArea1"), gdjs.IntroCode.GDGuideArea1Objects1);
gdjs.copyArray(runtimeScene.getObjects("GuideArea2"), gdjs.IntroCode.GDGuideArea2Objects1);
gdjs.copyArray(runtimeScene.getObjects("GuideArea3"), gdjs.IntroCode.GDGuideArea3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.IntroCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDGuideArea1Objects1Objects, gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayerObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDGuideArea2Objects1Objects, gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayerObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDGuideArea3Objects1Objects, gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayerObjects1Objects, true, runtimeScene, false);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GuideBox1"), gdjs.IntroCode.GDGuideBox1Objects1);
gdjs.copyArray(runtimeScene.getObjects("GuideBox2"), gdjs.IntroCode.GDGuideBox2Objects1);
{for(var i = 0, len = gdjs.IntroCode.GDGuideBox1Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDGuideBox1Objects1[i].setZOrder(-(10));
}
for(var i = 0, len = gdjs.IntroCode.GDGuideBox2Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDGuideBox2Objects1[i].setZOrder(-(10));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.IntroCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.IntroCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDPlayerObjects1[k] = gdjs.IntroCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateUpKey();
}
}{for(var i = 0, len = gdjs.IntroCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.IntroCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.IntroCode.GDPlayerObjects1[i].getVariables().getFromIndex(1), true) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDPlayerObjects1[k] = gdjs.IntroCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateUpKey();
}
}{for(var i = 0, len = gdjs.IntroCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayerObjects1[i].setAnimation(3);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.IntroCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.IntroCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayerObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.IntroCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayerObjects1[i].setVariableBoolean(gdjs.IntroCode.GDPlayerObjects1[i].getVariables().getFromIndex(1), true);
}
}{for(var i = 0, len = gdjs.IntroCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayerObjects1[i].setVariableBoolean(gdjs.IntroCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.IntroCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.IntroCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDPlayerObjects1[k] = gdjs.IntroCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}{for(var i = 0, len = gdjs.IntroCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.IntroCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.IntroCode.GDPlayerObjects1[i].getVariables().getFromIndex(1), true) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDPlayerObjects1[k] = gdjs.IntroCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}{for(var i = 0, len = gdjs.IntroCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayerObjects1[i].setAnimation(3);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.IntroCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}{for(var i = 0, len = gdjs.IntroCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayerObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.IntroCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayerObjects1[i].setVariableBoolean(gdjs.IntroCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), true);
}
}{for(var i = 0, len = gdjs.IntroCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayerObjects1[i].setVariableBoolean(gdjs.IntroCode.GDPlayerObjects1[i].getVariables().getFromIndex(1), false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.IntroCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.IntroCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDPlayerObjects1[k] = gdjs.IntroCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.IntroCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDPlayerObjects1[k] = gdjs.IntroCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.IntroCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.IntroCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDPlayerObjects1[k] = gdjs.IntroCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.IntroCode.GDPlayerObjects1[i].getVariables().getFromIndex(1), true) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDPlayerObjects1[k] = gdjs.IntroCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Collision"), gdjs.IntroCode.GDCollisionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.IntroCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDCollisionObjects1Objects, gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDCollisionObjects1 */
/* Reuse gdjs.IntroCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDCollisionObjects1Objects, false);
}
}}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDPlayerObjects1.length = 0;
gdjs.IntroCode.GDPlayerObjects2.length = 0;
gdjs.IntroCode.GDCollisionObjects1.length = 0;
gdjs.IntroCode.GDCollisionObjects2.length = 0;
gdjs.IntroCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.IntroCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.IntroCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.IntroCode.GDNewPanelSprite2Objects2.length = 0;
gdjs.IntroCode.GDEntranceObjects1.length = 0;
gdjs.IntroCode.GDEntranceObjects2.length = 0;
gdjs.IntroCode.GDGuideArea1Objects1.length = 0;
gdjs.IntroCode.GDGuideArea1Objects2.length = 0;
gdjs.IntroCode.GDGuideArea2Objects1.length = 0;
gdjs.IntroCode.GDGuideArea2Objects2.length = 0;
gdjs.IntroCode.GDGuideArea3Objects1.length = 0;
gdjs.IntroCode.GDGuideArea3Objects2.length = 0;
gdjs.IntroCode.GDGuideBox1Objects1.length = 0;
gdjs.IntroCode.GDGuideBox1Objects2.length = 0;
gdjs.IntroCode.GDGuideBox2Objects1.length = 0;
gdjs.IntroCode.GDGuideBox2Objects2.length = 0;
gdjs.IntroCode.GDGuideText01Objects1.length = 0;
gdjs.IntroCode.GDGuideText01Objects2.length = 0;
gdjs.IntroCode.GDGuideText02Objects1.length = 0;
gdjs.IntroCode.GDGuideText02Objects2.length = 0;
gdjs.IntroCode.GDGuiteTitle01Objects1.length = 0;
gdjs.IntroCode.GDGuiteTitle01Objects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);

return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
