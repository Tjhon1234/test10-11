// ---------------------------------------------1---------------------------------------
// const student = {
//     stack: ['HTML'],
//     level: 1,
//     improveLevel: function() {
//       this.level++;
//       if (this.level === 2) {
//         this.stack.push('CSS');
//       } else if (this.level === 3) {
//         this.stack.push('JavaScript');
//       } else if (this.level === 4) {
//         this.stack.push('React');
//       } else if (this.level === 5) {
//         this.stack.push('NodeJS');
//       }
//       if (this.level > 5) {
//         alert('Студент выучил все технологии!');
//       }
//       return this;
//     }
//   };

//   student.improveLevel().improveLevel().improveLevel().improveLevel().improveLevel();


// ---------------------------------------2--------------------------------------------
// const dog = {
//   name: "Чарли",
//   type: "Собака",
//   makeSound() {
//     return "Гав-Гав";
//   },
// };

// const bird = {
//   name: "Петя",
//   type: "Воробей",
//   makeSound() {
//     return "Чик-чирик";
//   },
// };

// function makeDomestic(isDomestic) {
//     console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
//     return {
//       ...this,
//       isDomestic
//     };
//   }
  
//   const boundMakeDomestic = makeDomestic.bind(dog);
//   const boundResult = boundMakeDomestic(true);
//   console.log(boundResult);
  
//   const calledResult = makeDomestic.call(bird, true);
//   console.log(calledResult);
  
//   const appliedResult = makeDomestic.apply(bird, [true]);
//   console.log(appliedResult);

// -----------------------------------------------3--------------------------------------
const footballer = {
    fullName: "Cristiano Ronaldo",
    attack: function() {
      console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
    },
    scoreGoal: function(sound) {
      console.log(`${this.fullName} забил гол! Вот это да!`);
      this.celebrate(sound);
    },
    celebrate: function(sound) {
      console.log(sound);
    },
    goToSubstitution: function(newPlayer) {
      console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
    }
  };
  
  const attack = footballer.attack.bind(footballer);
  const score = footballer.scoreGoal;
  const substitute = footballer.goToSubstitution;
  
  attack();
  score.call(footballer, "Сиииии");
  substitute.apply(footballer, ["Paulo Dibala"]);
  