// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  const wrapAdjective = function(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  };
  
  
  
  
  console.log(saturdayFun()); //=> "This Saturday, I want to roller-skate!"
  console.log(saturdayFun("play soccer")); //=> "This Saturday, I want to play soccer!"
  
  console.log(mondayWork()); //=> "This Monday, I will go to the office."
  console.log(mondayWork("work from home")); //=> "This Monday, I will work from home."
  
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("awesome")); //=> "You are !!!awesome!!!"
  console.log(wrapAdjective("%")("a dedicated programmer")); //=> "You are %a dedicated programmer%!"
  
  
  