function generateNumbers() {

  let num1 = Math.round(Math.random() * 20);
  let num2 = Math.round(Math.random() * 20);
  let num3 = Math.round(Math.random() * 20);

  let biggestNumber = Math.max(num1, num2, num3);

  let letter = String.fromCharCode(97 + num1);

  let totalMins = num2 * num3;
  let hours = Math.floor(totalMins / 60);
  let minutes = totalMins % 60;

  let output = `Once upon a time, there were three friends named Sarah, David, and Emily. They were trying to decide how to spend their weekend, and each suggested a different option.<br><br>`;
  output += `Sarah wanted to go to a theme park, David wanted to go to an art museum, and Emily wanted to go on a hike.<br><br>`;
  output += `After generating three random numbers, they determined that the biggest number (${biggestNumber}) represented the theme park option, which was the most exciting choice.<br><br>`;
  output += `The ${num1}th letter in the English alphabet (${letter}) represented the art museum option, which had a unique aspect that intrigued them.<br><br>`;
  output += `Finally, they calculated the hr-min breakdown of (${num2}*${num3}) mins for the hike option, which revealed that it would require ${hours} hours and ${minutes} minutes.<br><br>`;
  output += `In the end, they decided to go to the theme park, but also planned to visit the art museum as a secondary activity. The hike option would have to wait for another day.<br><br>`;
  output += `The end.`;

  document.getElementById("output").innerHTML = output;
}
