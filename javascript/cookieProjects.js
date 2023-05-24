// Build the set-cookie string:
cookie_string = "home=1; path=/; expires=Thu, 14 Dec 2023 12:00:00 UTC;";
// Create or update the cookie:
document.cookie = cookie_string;
console.log(document.cookie);
console.log(listCookies());