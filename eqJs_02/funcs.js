function tellFortune (kids, partner, location, jobTitle) {
    console.log(`You will be a ${jobTitle} in ${location}, married to ${partner} with ${kids} kids.`);
}

tellFortune(25, 'Mango', 'Mar\'a\'Lago', 'Hamburger Maker');
tellFortune(166, 'Jamiella', 'Nej York', 'Soft developer of networks');

function calcCircle (radius) {
    let circumference = radius * Math.PI * 2;
    let area = (circumference*circumference) / (4*Math.PI);
    console.log(`The circle with a radius of ${radius}, has a circumference of ${circumference.toFixed(2)}, 
                 and area of ${area.toFixed(2)}`);
}

calcCircle(5);
calcCircle(4);
