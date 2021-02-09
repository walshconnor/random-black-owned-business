let blackOwned = ['Black Magic Sweets', 'Boon Boona Coffee', 'City Teriyaki', 'Emerald City Fish & Chips', 'Jerk Shack', 'June Baby', 'Metier Brewing Company', 'Moe Vegan', 'My Lil Sweet Little Cakes', 'Organic Matters LLC', 'Plum Bistro', "Sami's Cornerstore - Jackson General", "Seattle's Chicken Express", 'That Brown Girl Cooks!', 'Umami Kushi', 'Where Ya At Matt?']

const randomBusiness = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}

console.log(randomBusiness(blackOwned));