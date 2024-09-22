// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, array) => {
  return {
    specimenNum: num,
    dna: array,
    mutate: function() {
      const dnaLen = this.dna.length-1;
      const r = Math.floor(Math.random()*dnaLen);
      const temp = this.dna[r];
      while (this.dna[r] === temp) {
        this.dna[r] = returnRandBase();
      };
    }, 
    compareDna: function(pAeuqor) {
      const currentDna = this.dna;
      const otherDna = pAeuqor.dna;
      let sameBases = 0;
      for (let i in currentDna) {
        if (currentDna[i] === otherDna[i]){
          sameBases ++;
        }
      }
      const similarity = Math.floor((sameBases/15)*100);
      console.log(`specimen ${this.specimenNum} and specimen ${pAeuqor.specimenNum} have ${similarity}% DNA in common`);
    },
    willLikelySurvive: function() {
      let survivalBases = 0;
      this.dna.forEach((base) => {
        if (base === 'C' || base === 'G') {
          survivalBases ++;
        };
      });
      const survivalChance = Math.floor((survivalBases/15)*100);
      console.log(survivalChance);
      if (survivalChance >= 60) {
        return true;
      } else {
        return false;
      };
    }
  };
};

// First method testing
/*
dna1 = mockUpStrand();
specimen1 = pAequorFactory(1, dna1);
console.log(specimen1);
specimen1.mutate();
console.log(specimen1);
*/

// compareDna testing
/*
dna2 = mockUpStrand();
specimen2 = pAequorFactory(2, dna2);
dna3 = mockUpStrand();
specimen3 = pAequorFactory(3, dna3);
specimen2.compareDna(specimen3);
*/

// willLikelySurvive testing
/*
dna4 = mockUpStrand();
specimen4 = pAequorFactory(4, dna4);
surived4 = specimen4.willLikelySurvive();
console.log(surived4);
*/

// 30 survivors testing
/*
let survivors30 = [];
let counter = 1;
while (survivors30.length < 30) {
  dnaSample = mockUpStrand()
  specimenSample = pAequorFactory(counter, dnaSample);
  if (specimenSample.willLikelySurvive) {
    survivors30.push(specimenSample);
    counter ++;
  };
}
console.log(surivors30); */