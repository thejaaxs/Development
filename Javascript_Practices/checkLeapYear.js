let year = 2018;

if (year % 400 == 0 && year % 100 != 0 || year % 4 == 0) console.log(year + " is a Leap Year !");
else console.log(year + " is not a Leap Year !");