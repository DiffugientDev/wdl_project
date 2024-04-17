s1 = parseInt(sessionStorage.getItem('ieScore'));
s2 = parseInt(sessionStorage.getItem('opScore'));

sc1 = (Math.abs(s1)+10)*5;
sc2 = (Math.abs(s2)+10)*5;

score1 = document.getElementById("ieScore");
score2 = document.getElementById("opScore");

score1.style = "width: " + sc1 + "%";
score1.innerHTML = sc1 + "%";
score2.style = "width: " + sc2 + "%";
score2.innerHTML = sc2 + "%";

console.log(s1,s2);

if(s1>0)
{
  document.getElementById("your_type").innerHTML = "Extroverted ";
  document.getElementById("para1").innerHTML = "<u>Extrovert</u><br>Extroverted individuals are often outgoing, sociable, and energized by interactions with others. They thrive in social settings, enjoying the company of diverse groups and easily initiating conversations. Extroverts tend to be assertive, adventurous, and comfortable expressing themselves openly, making them natural leaders and collaborators in various social and professional environments.";
  document.getElementById("sc1").innerHTML = "Extrovert Percentage:";
}
else
{
  document.getElementById("your_type").innerHTML = "Introverted ";
  document.getElementById("para1").innerHTML = "<u>Introvert: </u>Introverted individuals tend to be reflective and reserved, drawing energy from solitude rather than social interaction. They often prefer deep conversations over small talk and may excel in tasks requiring focus and introspection. While they may appear quiet, introverts often possess rich inner worlds and strong interpersonal connections.";
  document.getElementById("sc1").innerHTML = "Introvert Percentage:";
}
 
if(s2>0)
{
  document.getElementById("your_type").innerHTML += "Optimist";
  document.getElementById("para2").innerHTML += "<u>Optimist: </u>An optimistic personality tends to view life with positivity, expecting favorable outcomes even in challenging situations. Optimists often exhibit resilience, seeing setbacks as temporary and opportunities for growth. Their hopeful outlook can inspire others and lead to greater perseverance and achievement in the face of adversity.";
  document.getElementById("sc2").innerHTML = "Optimist Percentage:";
}
else
{
  document.getElementById("your_type").innerHTML += "Pessimist";
  document.getElementById("para2").innerHTML += "<u>Pessimist: </u>Pessimistic personalities often perceive the world through a negative lens, expecting unfavorable outcomes and dwelling on potential problems. They may display skepticism, anticipate failure, and struggle to see the brighter side of situations. Pessimists may find it challenging to maintain hope or optimism in various aspects of life.";
  document.getElementById("sc2").innerHTML = "Pessimist Percentage:";
}


