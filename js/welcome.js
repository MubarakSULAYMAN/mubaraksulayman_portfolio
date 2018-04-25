var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow == 1 || hourNow < 12)
{
    greeting = 'Good Morning <i class="fas fa-coffee dawn"></i> and Welcome, I am ';
}
else if (hourNow == 12 || hourNow < 18)
{
    greeting = 'Good Afternoon <i class="fas fa-sun noon"></i> and Welcome, I am ';
}
else if (hourNow == 18 || hourNow < 21)
{
    greeting = 'Good Evening <i class="fas fa-moon dusk"></i> and Welcome, I am ';
}
else
    {
        greeting = 'Welcome, I am ';
    }
document.write(greeting);