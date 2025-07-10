const home =[
"✅ Cannon Icon Only: The kit features the Cannon logo instead of the full club crest — first time since 1989-90."
,"🎨 Classic Look: Traditional red body with white sleeves, accented by navy Adidas stripes and navy side panels."
,"📅 Launch Date: Released on 16 May 2024, worn by both men's and women’s teams in their final home matches.",
"  💨 Performance Material: Uses AEROREADY / HEAT.RDY fabric with structured mesh — made from 100% recycled polyester.",
]
const away = [
  "🖤 Black Base: The base color is black, offering a sleek and bold appearance.",
  "🟥🟩 Pan-African Tribute: Features red and green Pan-African stripes — a celebration of Arsenal’s African heritage.",
  "🤝 Design Partner: Created in collaboration with Labrum London, known for cultural and community-focused fashion.",
  "✨ Modern Details: White zig-zag sleeve design with matching black shorts and socks.",
  "🌍 Cultural Message: Emphasizes Arsenal’s global diversity and roots in African football communities."
];
const third = [
  "🌊 Aqua Blue Fade: Starts with an aqua blue base and fades into light purple — fresh and eye-catching.",
  "🟪 Navy Accents: Features navy sleeve trim and a bold navy cannon crest for contrast.",
  "👕 Modern Cut: Includes a clean crew neck and slim fit design ideal for on-field and casual wear.",
  "🧵 Fabric & Fit: Uses breathable performance material like the other kits, perfect for all conditions.",
  "📅 Release: Scheduled for August 2024 just before the Premier League season begins."
];




function fact(T)
{

const randomIndex = Math.floor(Math.random() * home.length);
const randomMessage = home[randomIndex];
const randomMessage1 = away[randomIndex];
const randomMessage2 = third[randomIndex];
switch(T){
case "home":
    {
    let a1= document.getElementById("hi");
    a1.textContent=randomMessage;

    }break;
    case "away":
    {
    let a1= document.getElementById("hi2");
    a1.textContent=randomMessage1;

    }break;
    case "third":
    {
    let a1= document.getElementById("hi3");
    a1.textContent=randomMessage2;

    }break;









}


}