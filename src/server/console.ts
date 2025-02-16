mp.events.addCommand('hp', (player) => {
    player.health = 100;
    player.notify('Health restored!');
});

mp.events.addCommand('armor', (player) => {
    player.armour = 50;
    player.notify('Armor restored!');
});

mp.events.addCommand('kill', (player) => {
    player.health = 0;
    player.notify('You are dead!');
});

mp.events.addCommand('pos', (player) => {
    player.notify(`Position: ${player.position}`);
});