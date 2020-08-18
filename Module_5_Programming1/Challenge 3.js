//---------- Challenge 3---------------//

var quote = "Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh's cab, or Montero Jeep I can't call it, the beats make me falling asleep I keep falling, but never falling six feet deep I'm out for presidents to represent me, I'm out for presidents to represent me, I'm out for dead presidents to represent me, "
    //converting the small letter s to $
var sconv = quote.replace(/s/g, "$");
//converting the capital letter S to $
var Sconv = sconv.replace(/S/g, "$");
console.log(Sconv);
//result: Wipe the $weat off my dome, $pit the phlegm on the $treet$ $uede Timb$ on my feet$ make$ my cipher complete Whether crui$ing in a $ikh'$ cab, or Montero Jeep I can't call it, the beat$ make me falling a$leep I keep falling, but never falling $ix feet deep I'm out for pre$ident$ to repre$ent me, I'm out for pre$ident$ to repre$ent me, I'm out for dead pre$ident$ to repre$ent me,