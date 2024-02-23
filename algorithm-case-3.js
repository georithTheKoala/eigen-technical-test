const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

const OUTPUT = [];

let indexI = 0;
while(indexI < QUERY.length){
  let indexJ = 0;
  let equal = 0;
  while(indexJ < INPUT.length){
    if(QUERY[indexI] === INPUT[indexJ]) equal+= 1;
    indexJ++;
  }
  OUTPUT.push(equal);
  indexI++;
}

console.log(`
OUTPUT = [${OUTPUT}] 
karena kata ${QUERY[0]} ${QUERY[0] < 1 ? "tidak ada pada INPUT" : `terdapat ${OUTPUT[0]} pada INPUT`}, 
kata ${QUERY[1]} ${QUERY[1] < 1 ? "tidak ada pada INPUT" : `terdapat ${OUTPUT[1]} pada INPUT`}, 
kata ${QUERY[2]} ${QUERY[2] < 1 ? "tidak ada pada INPUT" : `terdapat ${OUTPUT[2]} pada INPUT`}`);