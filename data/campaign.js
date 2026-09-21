window.CAMPAIGN_DATA={campaign:{name:"Mobile Test Campaign"},characters:[
{id:"executioner",name:"Executioner",type:"PC",class:"Fighter",level:6,ac:18,hp:68,maxHp:68,speed:30,initiative:2,conditions:[],items:["Greatsword"],resources:{Second_Wind:"1/1",Action_Surge:"1/1"},actions:[
{id:"greatsword",name:"Greatsword",kind:"Action",summary:"Melee weapon attack · 2d6 slashing"},
{id:"second-wind",name:"Second Wind",kind:"Bonus Action",summary:"Regain 1d10 + fighter level HP",cost:{resource:"Second_Wind",amount:1}},
{id:"action-surge",name:"Action Surge",kind:"Free",summary:"Gain one additional action this turn",cost:{resource:"Action_Surge",amount:1},effects:[{name:"Action Surge",target:"self",duration:"turn",note:"One additional action"}]}
],notes:""},
{id:"cleric",name:"Cleric",type:"PC",class:"Cleric",level:6,ac:18,hp:48,maxHp:48,speed:30,initiative:1,conditions:[],items:[],spellSlots:{1:"4/4",2:"3/3",3:"3/3"},actions:[
{id:"bless",name:"Bless",kind:"Action · Spell",summary:"Up to 3 creatures add 1d4 to attacks and saves · Concentration",cost:{spellSlot:1,selectSlot:true},target:{mode:"multi",max:3},concentration:true,effects:[{name:"Bless",target:"selected",duration:"concentration",attackBonus:"1d4",saveBonus:"1d4",note:"+1d4 attacks & saves"}]},
{id:"healing-word",name:"Healing Word",kind:"Bonus Action · Spell",summary:"Ranged healing · choose spell slot",cost:{spellSlot:1,selectSlot:true},target:{mode:"single"}}
],notes:""},
{id:"druid",name:"Druid",type:"PC",class:"Druid",level:6,ac:15,hp:45,maxHp:45,speed:30,initiative:2,conditions:[],items:[],spellSlots:{1:"4/4",2:"3/3",3:"3/3"},resources:{Wild_Shape:"2/2"},actions:[
{id:"wild-shape",name:"Wild Shape",kind:"Action",summary:"Assume a beast form",cost:{resource:"Wild_Shape",amount:1},effects:[{name:"Wild Shape",target:"self",duration:"until removed",note:"Alternate form active"}]},
{id:"entangle",name:"Entangle",kind:"Action · Spell",summary:"Restraining plants · Concentration",cost:{spellSlot:1,selectSlot:false},concentration:true,effects:[{name:"Entangle",target:"selected",duration:"concentration",condition:"Restrained",note:"On failed save"}]}
],notes:""},
{id:"sorcerer",name:"Sorcerer",type:"PC",class:"Sorcerer",level:6,ac:14,hp:40,maxHp:40,speed:30,initiative:3,conditions:[],items:[],spellSlots:{1:"4/4",2:"3/3",3:"3/3"},resources:{Sorcery_Points:"6/6"},actions:[
{id:"shield",name:"Shield",kind:"Reaction · Spell",summary:"+5 AC until start of your next turn",cost:{spellSlot:1},effects:[{name:"Shield",target:"self",duration:"start-next-turn",ac:5,note:"+5 AC"}]},
{id:"lightning",name:"Lightning Spell",kind:"Action · Spell",summary:"Placeholder lightning spell · choose slot",cost:{spellSlot:1,selectSlot:true}}
],notes:""},
{id:"rogue",name:"Rogue / Assassin",type:"PC",class:"Rogue",level:6,ac:16,hp:46,maxHp:46,speed:30,initiative:4,conditions:[],items:["Shadow dagger"],resources:{Sneak_Attack:"3d6"},actions:[
{id:"shadow-dagger",name:"Shadow Dagger",kind:"Action",summary:"Melee/ranged weapon attack"},
{id:"cunning-action",name:"Cunning Action",kind:"Bonus Action",summary:"Dash, Disengage or Hide"}
],notes:""}]};