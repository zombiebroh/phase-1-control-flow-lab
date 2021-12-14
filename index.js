function scuberGreetingForFeet(distance){
  let result = "No can do."
  if (distance <= 400) {
    result = "This one is on me!"
  } else if (distance > 2000 && distance <= 2500) {
    result = 'I will gladly take your thirty bucks.'
  } else if (distance > 2500) { 
    result
  }
  return result;
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : 'No go.'
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous":
      return "Thank you so much."
    case "not as generous":
      return 'Thank you.'
    default: 
    return "Bye."
  }
}