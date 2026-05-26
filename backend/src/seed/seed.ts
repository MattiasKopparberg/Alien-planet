import mysql from "mysql2/promise";
import "dotenv/config";

const dbInitStatements = [
  "DROP DATABASE IF EXISTS alienplanets",
  "CREATE DATABASE alienplanets",
  "USE alienplanets",
  "CREATE TABLE planets (planet_id int PRIMARY KEY AUTO_INCREMENT, name varchar(25) NOT NULL, surface_area float, avg_temp float)",
  "INSERT INTO planets (name, surface_area, avg_temp) VALUES ('Hoth', 250, -60), ('Venus', 460.2, 464), ('Arrakis', 300, 58), ('Pandora', 95, 18), ('Proxima-b', 120, -39), ('Gliese-581g', 180, -12), ('Mercury', 74.8, 167), ('Earth', 510.1, 15), ('Mars', 144.8, -65), ('Jupiter', 61420, -110), ('Saturn', 42700, -140), ('Uranus', 8083, -195), ('Neptune', 7618, -200), ('Kepler-22b', 900, 22), ('LV-426', 110, -45);",
  "CREATE TABLE aliens (alien_id INT PRIMARY KEY AUTO_INCREMENT, species VARCHAR(45) NOT NULL, aggression ENUM('hostile', 'neutral', 'friendly')DEFAULT 'neutral', habitat ENUM('water', 'surface', 'airborne'), planet_id int, CONSTRAINT fk_planet FOREIGN KEY(planet_id) REFERENCES planets(planet_id));",
  "INSERT INTO aliens (species, aggression, habitat, planet_id) VALUES ('Zoltan Energy-Being', 'friendly', 'airborne', 8), ('Europan Aqua-Fiend', 'hostile', 'water', 11), ('Martian Microbe', 'friendly', 'surface', 9), ('Gliese Ice-Crawler', 'neutral', 'surface', 6), ('Cyberman', 'hostile', 'surface', 11),('Na vi', 'friendly', 'surface', 4), ('ET', 'friendly', 'surface', 8), ('Xenomorph', 'hostile', 'surface', 15), ('Proxima Depth-Dweller', 'neutral', 'water', 5), ('Grey', 'neutral', 'surface', 8), ('Yautja', 'hostile', 'surface', 3), ('Klingon Warrior', 'hostile', 'surface', 3), ('Wampa', 'hostile', 'surface', 1), ('Tauntaun', 'friendly', 'surface', 1), ('Keplerian Glider', 'friendly', 'airborne', 14), ('Mercurial Silicon-Mite', 'neutral', 'surface', 7), ('Venusian Acid-Skiff', 'neutral', 'airborne', 2), ('Titanium Aero-Whale', 'friendly', 'airborne', 11), ('Uranian Vapor-Drifter', 'neutral', 'airborne', 12), ('Neptunian Abyssal', 'hostile', 'water', 13);",
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
    console.log(
      `Executed: ${statement.slice(0, 75)} ${statement.length > 75 && "..."}`,
    );
  }

  console.log("Database seeded!");
} catch (err) {
  console.error("Seed failed:", err);
} finally {
  if (connection) connection.release();
  process.exit(0);
}
