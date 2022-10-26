//import debug from '../debug'

function nextRandomNumber(){
  var hi = this.seed / this.Q;
  var lo = this.seed % this.Q;
  var test = this.A * lo - this.R * hi;
  if(test > 0){
    this.seed = test;
  } else {
    this.seed = test + this.M;
  }
  return (this.seed * this.oneOverM);
}
function RandomNumberGenerator(seed){
  this.seed = 2345678901 + (seed * 0xFFFFFF);
  this.A = 48271;
  this.M = 2147483647;
  this.Q = this.M / this.A;
  this.R = this.M % this.A;
  this.oneOverM = 1.0 / this.M;
  this.next = nextRandomNumber;
  return this;
}

export const terrain=[
  {type:"water2",goods:"whale0",goodsType:9,color:"#0467b8"},
  {type:"water2",goods:"fish0",goodsType:1,color:"#0467b8"},
  {type:"water2",goods:"fish0",goodsType:1,color:"#0467b8"},
  {type:"water1",goods:"fish0",goodsType:1,color:"#1f8ae0"},
  {type:"water1",goods:"fish0",goodsType:1,color:"#1f8ae0"},
  {type:"water0",goods:"fish0",goodsType:1,color:"#66b8fa"},
  {type:"water0",goods:"fish0",goodsType:1,color:"#66b8fa"},
  {type:"sand0",goods:"grape0",goodsType:3,color:"#f5dba4"},
  {type:"sand0",goods:"stone0",goodsType:2,color:"#f5dba4"},
  {type:"grass0",goods:"grape0",goodsType:3,color:"#81de7c"},
  {type:"grass0",goods:"pig0",goodsType:4,color:"#81de7c"},
  {type:"forest0",goods:"wood0",goodsType:5,color:"#61b35d"},
  {type:"forest0",goods:"wood0",goodsType:5,color:"#61b35d"},
  {type:"forest2",goods:"deer0",goodsType:6,color:"#3b8038"},
  {type:"forest2",goods:"pig0",goodsType:4,color:"#3b8038"},
  {type:"mountains1",goods:"marble0",goodsType:8,color:"#286326"},
  {type:"mountains1",goods:"marble0",goodsType:8,color:"#286326"},
  {type:"mountains2",goods:"iron0",goodsType:7,color:"#113810"},
  {type:"mountains2",goods:"gold0",goodsType:10,color:"#113810"},
  {type:"mountains2",goods:"diamond0",goodsType:11,color:"#113810"},
  {type:"mountains2",goods:"diamond0",goodsType:11,color:"#113810"}
]

const maxGoods=[
  0,
  50,
  50,
  50,
  50,
  50,
  50,
  50,
  50,
  50,
  5,
  1
]

export const goods=[
  "empty",
  "fish0",
  "stone0",
  "grape0",
  "pig0",
  "wood0",
  "deer0",
  "iron0",
  "marble0",
  "whale0",
  "gold0",
  "diamond0"
]

export const cityNamesEN=['Level Up','Sparta','Athens','Troy','Ithaka','Delphi','Riodes',
          'Thebes','Syracuse','Aegina','Milet','City 1','City 2','City 3','City 4','City 5',
          'City 6','City 7','City 8','City 9','City 10'];

export const cityNamesPL=['Podniesienie poziomu','Sparta', 'Ateny', 'Troja', 'Itaka', 'Delfy', 'Riodes','Teby','Syrakuzy','Egina','Milet','Miasto 1','Miasto 2','Miasto 3', 'Miasto 4','Miasto 5','Miasto 6', 'Miasto 7', 'Miasto 8', 'Miasto 9', 'Miasto 10'];

export const teamNamesEN=['Spectator','Achaeans','Boeots','Cypriots','Dorians', 'Eols','Ions', 'Thessals','Arcadians','Tribe 2 ','Tribe 3 ','Tribe 4 ','Tribe 5 ','Tribe 6 ','Tribe 7 ','Tribe 8 ','Tribe 9 ','Tribe 10 ','Tribe 11 ','Tribe 12 ','Tribe 13 '];

export const teamNamesPL=['Obserwator','Achajowie','Beoci','Cypryjczycy','Dorowie','Eolowie','Jonowie', 'Tessalowie','Arkadyjczycy','Dzieci Achillesa','Dzieci Adonisa','Bracia Charona','Plemię 5','Plemię 6','Plemię 7','Plemię 8','Plemię 9','Plemię 10','Plemię 11','Plemię 12','Plemię 13'];

const playerNames=[
  "Achilles",
  "Adonis",
  "Agamemnon",
  "Ajax",
  "Alcibiades",
  "Alexander",
  "Andromeda",
  "Apollo",
  "Archimedes",
  "Ares",
  "Argus",
  "Arion",
  "Aristide",
  "Aster",
  "Athos",
  "Atlas",
  "Basil",
  "Caesar",
  "Callistus",
  "Castor",
  "Centaurus",
  "Charon"]

export const playerName=(playerId)=>
  (playerId<playerNames.length)?playerNames[playerId]:'Zeus'+playerId

export const treasure=[
  {type:"deep",color:"#ff0000"}
]

const terrainUp9x9=(map,px,py)=>{
  for (let x=((px-4>0)?px-4:0);x<((px+5<128)?px+5:128);x++)
    for (let y=((py-4>0)?py-4:0);y<((py+5<128)?py+5:128);y++){
      map[x+128*y].terrain++
    }
  for (let x=((px-2>0)?px-2:0);x<((px+3<128)?px+3:128);x++)
    for (let y=((py-2>0)?py-2:0);y<((py+3<128)?py+3:128);y++){
      map[x+128*y].terrain++
    }
  for (let x=((px-1>0)?px-1:0);x<((px+2<128)?px+2:128);x++)
    for (let y=((py-1>0)?py-1:0);y<((py+2<128)?py+2:128);y++){
      map[x+128*y].terrain++
    }
  //map[px+128*py].terrain++
  return map
}


const placeGoods=(map,px,py,radius,rand)=>{
  for (let x=((px-radius>0)?px-radius:0);x<((px+radius<127)?px+radius:127);x++)
    for (let y=((py-radius>0)?py-radius:0);y<((py+radius<127)?py+radius:127);y++){
      if(map[px+128*py].terrain===map[x+128*y].terrain)
        if(map[x+128*y].goods===0 && maxGoods[terrain[map[x+128*y].terrain].goodsType]>0 && (rand.next()<0.4)){
          map[x+128*y].goods=1
          maxGoods[terrain[map[x+128*y].terrain].goodsType]-=1
          //map[x+128*y].showGoods=1
        }
    }
  return map
}


const terrainFlat3x3=(map,px,py)=>{
  for (let x=((px-1>0)?px-1:0);x<((px+2<127)?px+2:127);x++)
    for (let y=((py-1>0)?py-1:0);y<((py+2<127)?py+2:127);y++){
      map[x+128*y].terrain=map[px+128*py].terrain
    }
  return map
}

const placeTreasure=(map,px,py,number)=>{
  map[px+128*py].treasure=number+1
  map[px+128*py].goods=0
  map[px+128*py].showGoods=0
  return map
}


const roundCorners=(map,px,py,curve=1)=>{
  let bg=[0,0,0,0,0,0,0,0,0] //surroundings
  let s=['','','','','','','','',''] //surroundings

  let ii=1
  for (let x=((px-1>0)?px-1:0);x<((px+2<128)?px+2:128);x++)
    for (let y=((py-1>0)?py-1:0);y<((py+2<128)?py+2:128);y++){
      s[ii]=terrain[map[x+128*y].terrain].type
      bg[ii]=map[x+128*y].terrain
      ii++
    }

  if(s[4]!==s[5] && s[2]!==s[5]){
    map[px+128*py].c0=curve
    map[px+128*py].bg=Math.max(bg[4],bg[2])
  }

  if(s[4]!==s[5] && s[8]!==s[5] && s[7]!==s[5]){
    map[px+128*py].c1=curve
    map[px+128*py].bg=Math.max(bg[4],bg[8])
  }

  if(s[8]!==s[5] && s[6]!==s[5]){
    map[px+128*py].c2=curve
    map[px+128*py].bg=Math.max(bg[8],bg[6])
  }

  if(s[2]!==s[5] && s[6]!==s[5] && s[3]!==s[5]){
    map[px+128*py].c3=curve
    map[px+128*py].bg=Math.max(bg[2],bg[6])
  }

  return map
}

export const mapGen=(seed)=>{
  const rand = new RandomNumberGenerator(seed);
  let map=[]
  for (let x=0;x<128;x++)
    for (let y=0;y<128;y++){
      map[x+128*y]={terrain:0,treasure:0,x:x,y:y,c0:0,c1:0,c2:0,c3:0,bg:0,goods:0,showGoods:0}
    }
  let x,y,dx,dy,r
  dx=1
  dy=0
  x=0+Math.round(rand.next()*127);
  y=0+Math.round(rand.next()*127);
  for(let i=0;i<100000;i++){
    if(rand.next()<0.5) dx=Math.round(4*rand.next())-2;
    if(rand.next()<0.5) dy=Math.round(4*rand.next())-2;
    x+=dx
    y+=dy
    if(x>126 || y>126 || x<1 || y<1){
      x=0+Math.round(rand.next()*127);
      y=0+Math.round(rand.next()*127);
    }
    map=terrainUp9x9(map,x,y)
  }

  let max=1
  for (let x=0;x<128;x++)
    for (let y=0;y<128;y++){
      if(max<map[x+128*y].terrain)
        max=map[x+128*y].terrain
    }
  for (let x=0;x<128;x++)
    for (let y=0;y<128;y++){
      map[x+128*y].terrain=Math.floor(map[x+128*y].terrain/max*(terrain.length-1))
    }


  for (let x=0;x<128;x++)
    for (let y=0;y<128;y++)
      if(rand.next()<0.004){
        placeGoods(map,x,y,2,rand)
      }

  for (let x=127;x>0;x--)
    for (let y=127;y>0;y--)
      if(rand.next()<0.006){
        placeGoods(map,x,y,2,rand)
      }

  for (let x=0;x<128;x++)
    for (let y=0;y<128;y++)
      if(rand.next()<0.004){
        placeGoods(map,x,y,6,rand)
      }

  for(let i=0;i<50;i++){
    x=0+Math.round(rand.next()*127);
    y=0+Math.round(rand.next()*127);
    placeTreasure(map,x,y,i)
  }

  /*
  for(let i=0;i<150;i++){
    x=0+Math.round(rand.next()*127);
    y=0+Math.round(rand.next()*127);
    placeGoods(map,x,y,7)
  }


  for (let x=0;x<128;x++)
    for (let y=0;y<128;y++){
    if(map[x+128*y].goods===2){
      if(x+128*y>0 && x+128*y<127*127){
        map[x+128*y].goods=1
        map[x+128*y].showGoods=(rand.next()<0.02)?1:0
  }}}
  */

  for (let x=0;x<128;x++)
    for (let y=0;y<128;y++){
      map=roundCorners(map,x,y,0.5)
    }



  return map
}
