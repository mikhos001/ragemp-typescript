import spawnPointsData from './spawn_points.json'; // Убедитесь, что путь к файлу правильный

interface SpawnPoint {
    x: number;
    y: number;
    z: number;
}

// Загружаем точки спавна из JSON-файла
const spawnPoints: SpawnPoint[] = spawnPointsData.SpawnPoints; // Предполагаем, что SpawnPoints это массив в JSON

mp.events.add('playerDeath', (player: PlayerMp) => {
    if (spawnPoints && spawnPoints.length > 0) {
        const randomSpawnPoint = spawnPoints[Math.floor(Math.random() * spawnPoints.length)];
        player.spawn(randomSpawnPoint);
    } else {
        console.error('No spawn points available.');
    }
    player.health = 100;
    player.armour = 20;
});