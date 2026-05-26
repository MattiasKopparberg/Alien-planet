import mysql from "mysql2/promise";
import "dotenv/config";

const dbInitStatements = [
  "DROP DATABASE IF EXISTS alienplanets",
  "CREATE DATABASE alienplanets",
  "USE alienplanets",

  "CREATE TABLE planets (planet_id int PRIMARY KEY AUTO_INCREMENT, name varchar(25) NOT NULL, surface_area float, avg_temp float, descr VARCHAR(300))",

  "INSERT INTO planets (name, surface_area, avg_temp, descr) VALUES ('Hoth', 250, -60, 'A frozen planet covered in ice and snow. Temperatures drop so low that survival without shelter is measured in minutes. Large predators roam the tundra.'), ('Venus', 460.2, 464, 'A volcanic planet with a thick toxic atmosphere. The surface is split by lava cracks and the heat is strong enough to melt most metals.'), ('Arrakis', 300, 58, 'A desert planet of endless dunes and extreme heat. Water is the most valuable resource and giant sandworms patrol the deep desert.'), ('Pandora', 95, 18, 'A dense jungle planet with bioluminescent flora and fauna. The ecosystem is deeply interconnected and the native population lives in balance with the land.'), ('Proxima-b', 120, -39, 'A cold ocean world orbiting the nearest star to our sun. Its dark waters hide creatures adapted to high pressure and near total darkness.'), ('Gliese-581g', 180, -12, 'An exoplanet with a crystalline surface and unusual rock formations. One side faces its star in permanent daylight while the other is locked in frozen darkness.'), ('Mercury', 74.8, 167, 'The smallest planet in our solar system. It has no atmosphere, a cratered surface and swings between extreme heat and extreme cold with every orbit.'), ('Earth', 510.1, 15, 'A planet with vast oceans, diverse climates and a wide range of life forms. It is the origin point of human civilization and countless other species.'), ('Mars', 144.8, -65, 'A cold red planet with ancient volcanoes and dried riverbeds. Dust storms can cover the entire surface for months at a time.'), ('Jupiter', 61420, -110, 'The largest planet in our solar system. A gas giant with storms large enough to swallow entire planets, including a permanent storm that has lasted for centuries.'), ('Saturn', 42700, -140, 'A gas giant known for its wide ring system made of ice and rock. The rings stretch thousands of kilometers out from the planet.'), ('Uranus', 8083, -195, 'An ice giant that orbits the sun on its side. Its atmosphere is made up of hydrogen, helium and methane, giving it a pale blue-green color.'), ('Neptune', 7618, -200, 'The furthest planet from our sun. An ice giant with the fastest recorded winds in the solar system and constant large-scale storm activity.'), ('Kepler-22b', 900, 22, 'A super-Earth exoplanet with wide oceans and a mild climate. It is one of the most studied candidates for potential habitability outside our solar system.'), ('LV-426', 110, -45, 'A barren rock covered in toxic storms and volcanic ash. It gained notoriety as the site of humanitys first and most deadly extraterrestrial encounter.');",

  "CREATE TABLE aliens (alien_id INT PRIMARY KEY AUTO_INCREMENT, species VARCHAR(45) NOT NULL, aggression ENUM('hostile', 'neutral', 'friendly') DEFAULT 'neutral', habitat ENUM('water', 'surface', 'airborne'), planet_id int, descr VARCHAR(300), CONSTRAINT fk_planet FOREIGN KEY(planet_id) REFERENCES planets(planet_id))",

  "INSERT INTO aliens (species, aggression, habitat, planet_id, descr) VALUES ('Zoltan Energy-Being', 'friendly', 'airborne', 8, 'A being of pure energy that drifts through the upper atmosphere. It communicates through pulses of light and has never been observed to cause harm.'), ('Europan Aqua-Fiend', 'hostile', 'water', 11, 'A deep water predator with tentacles and razor sharp teeth. It hunts in total darkness and has destroyed several unmanned research probes.'), ('Martian Microbe', 'friendly', 'surface', 9, 'A microscopic organism found in the soil beneath the Martian surface. It forms large colonies that glow faintly under ultraviolet light.'), ('Gliese Ice-Crawler', 'neutral', 'surface', 6, 'A slow moving creature that crawls across the frozen surface of Gliese-581g. Its thick crystalline shell protects it from extreme cold and radiation.'), ('Cyberman', 'hostile', 'surface', 11, 'A humanoid organism that has replaced most of its biology with mechanical parts. It operates as part of a collective and shows no regard for organic life.'), ('Na vi', 'friendly', 'surface', 4, 'A tall blue-skinned humanoid native to Pandora. They live in deep connection with their planet and are skilled hunters and spiritual leaders.'), ('ET', 'friendly', 'surface', 8, 'A small gentle alien with a long neck and large eyes. It was stranded on Earth and showed a remarkable ability to learn, heal and connect with humans.'), ('Xenomorph', 'hostile', 'surface', 15, 'A heavily armored predator with dreadlock-like appendages and sharp tusks. It is one of the most feared hunters in the galaxy, tracking prey across any terrain with ruthless efficiency.'), ('Proxima Depth-Dweller', 'neutral', 'water', 5, 'A hard-shelled creature with compound eyes and an insectoid exoskeleton. It thrives in the high pressure environment of Proxima-b and uses its reinforced shell as protection against the crushing depths.'), ('Grey', 'neutral', 'surface', 8, 'A slender grey humanoid with large black eyes and no visible mouth. Reported across Earth for centuries, its origins and intentions remain unknown.'), ('Yautja', 'hostile', 'surface', 3, 'A warrior species that travels the galaxy in search of dangerous prey. They are highly intelligent, use advanced technology and follow a strict code of honor in combat.'), ('Klingon Warrior', 'hostile', 'surface', 3, 'A proud and aggressive humanoid species with a culture built around combat and honor. They are feared across the galaxy for their ferocity in battle.'), ('Wampa', 'hostile', 'surface', 1, 'A large predatory creature native to Hoth. It uses the blizzard conditions to ambush prey and drags its kills back to an ice cave for storage.'), ('Tauntaun', 'friendly', 'surface', 1, 'A reptilian creature native to Hoth with thick fur and strong legs. It has been domesticated and is used as a mount in the harsh frozen terrain.'), ('Keplerian Glider', 'friendly', 'airborne', 14, 'A wide-winged creature that rides thermal currents across the skies of Kepler-22b. It feeds on airborne plankton and poses no threat to other species.'), ('Mercurial Silicon-Mite', 'neutral', 'surface', 7,'A tiny creature with a silicon-based exoskeleton that allows it to survive the extreme temperature swings on Mercury. It feeds on mineral deposits in crater walls.'), ('Venusian Acid-Skiff', 'neutral', 'airborne', 2, 'A flat membrane-like creature that floats through the acid clouds of Venus. Its body is resistant to sulfuric acid and it feeds on chemical reactions in the atmosphere.'), ('Titanium Aero-Whale', 'friendly', 'airborne', 11, 'A massive creature that drifts through the upper atmosphere of Saturn. Despite its enormous size it feeds only on gas particles and is entirely passive.'), ('Uranian Vapor-Drifter', 'neutral', 'airborne', 12, 'A translucent gaseous organism that blends into the methane clouds of Uranus. It has no solid form and absorbs energy directly from the planets magnetic field.'), ('Neptunian Abyssal', 'hostile', 'water', 13, 'A massive predator adapted to the crushing pressure of Neptunes deep atmosphere. It generates electric charges to stun prey and has no known natural enemies.');",
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
