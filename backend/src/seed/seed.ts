import mysql from "mysql2/promise";
import "dotenv/config";

const dbInitStatements = [
  "DROP DATABASE IF EXISTS alienplanets",
  "CREATE DATABASE alienplanets",
  "USE alienplanets",
  "CREATE TABLE planets (planet_id int PRIMARY KEY AUTO_INCREMENT, name varchar(25) NOT NULL, image_url varchar(50), surface_area float, avg_temp float)",
  "INSERT INTO planets (name, surface_area, avg_temp) VALUES ('Mercury', 74.8, 167), ('Venus', 460.2, 464), ('Earth', 510.1, 15), ('Mars', 144.8, -65), ('Jupiter', 61420, -110), ('Saturn', 42700, -140), ('Uranus', 8083, -195), ('Neptune', 7618, -200), ('Kepler-22b', 900, 22), ('Proxima-b', 120, -39), ('Gliese-581g', 180, -12), ('Pandora', 95, 18),('LV-426', 110, -45), ('Arrakis', 300, 58), ('Hoth', 250, -60)",
  "CREATE TABLE aliens (alien_id INT PRIMARY KEY AUTO_INCREMENT, species VARCHAR(45) NOT NULL, aggression ENUM('hostile', 'neutral', 'friendly')DEFAULT 'neutral', habitat ENUM('water', 'surface', 'airborne'), planet_id int, CONSTRAINT fk_planet FOREIGN KEY(planet_id) REFERENCES planets(planet_id));",
  "INSERT INTO aliens (species, aggression, habitat, planet_id) VALUES ('Xenomorph', 'hostile', 'surface', 13),('Yautja', 'hostile', 'surface', 12),('Na vi', 'friendly', 'surface', 12),('Fremen', 'neutral', 'surface', 14),('Wampa', 'hostile', 'surface', 15),('Tauntaun', 'friendly', 'surface', 15),('Cyberman', 'hostile', 'surface', 5),('Keplerian Glider', 'friendly', 'airborne', 9),('Proxima Depth-Dweller', 'neutral', 'water', 10),('Gliese Ice-Crawler', 'neutral', 'surface', 11),('Mercurial Silicon-Mite', 'neutral', 'surface', 1),('Venusian Acid-Skiff', 'neutral', 'airborne', 2), ('Martian Microbe', 'friendly', 'surface', 4),('Europan Aqua-Fiend', 'hostile', 'water', 5),('Titanium Aero-Whale', 'friendly', 'airborne', 6),('Uranian Vapor-Drifter', 'neutral', 'airborne', 7),('Neptunian Abyssal', 'hostile', 'water', 8),('Zoltan Energy-Being', 'friendly', 'airborne', 3), ('Klingon Warrior', 'hostile', 'surface', 14), ('Commander Keen', 'friendly', 'surface', 3)",
];

console.log("Seed script running");

const adminDb = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "",
  password: process.env.DB_PASSWORD || "",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const connection = await adminDb.getConnection();

try {

  console.log("Resetting database...");

  await connection.query("DROP DATABASE IF EXISTS alienplanets");
  await connection.query("CREATE DATABASE alienplanets");
  await connection.query("USE alienplanets");

  console.log("Database created");

  for (const statement of dbInitStatements) {
    await connection.query(statement);
    console.log("Executed:", statement.slice(0, 60));
  }

  console.log("Database seeded!");
} catch (err) {
  console.error("Seed failed:", err);
} finally {
  if (connection) connection.release();
  process.exit(0);
}

