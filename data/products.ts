export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  grade?: string;
  apiRating?: string;
  description: string;
  applications: string[];
  features: string[];
  benefits: string[];
  standards: string[];
  specifications?: { label: string; value: string }[];
  packaging: string[];
  itemCode?: string;
  minimumOrder?: string;
  image: string;
  relatedProducts: string[];
}

export const categories = [
  { id: "motorcycle-oils", name: "Motorcycle Oils", description: "High-performance 4-stroke engine oils engineered for motorcycles and scooters." },
  { id: "engine-oils", name: "Engine Oils", description: "Premium multigrade engine oils for passenger vehicles and commercial applications." },
  { id: "commercial-vehicle-oils", name: "Commercial Vehicle Oils", description: "Heavy-duty diesel engine oils for trucks, buses, and fleet operations." },
  { id: "gear-oils", name: "Gear Oils", description: "Extreme pressure gear lubricants for transmissions and differentials." },
  { id: "hydraulic-oils", name: "Hydraulic Oils", description: "Anti-wear hydraulic fluids for industrial machinery and equipment." },
  { id: "transmission-fluids", name: "Transmission Fluids", description: "Automatic transmission fluids for smooth gear shifting and component protection." },
  { id: "specialty-products", name: "Specialty Products", description: "Fork oils, engine flushes, and treatment additives for specific applications." },
  { id: "lubricant-additives", name: "Lubricant Additives", description: "Advanced additive packages for engine oils, gear oils, and industrial lubricants." },
];

export const products: Product[] = [
  // MOTORCYCLE ENGINE OILS
  {
    id: "accord-4t-20w40",
    slug: "accord-4t-20w40",
    name: "Accord 4T 20W-40",
    category: "motorcycle-oils",
    subcategory: "Motorcycle Engine Oil",
    grade: "20W-40",
    apiRating: "API SN",
    description: "A premium multigrade 4-stroke motorcycle engine oil blended from highly refined base stocks with a balanced additive package. Formulated to meet lubrication requirements of modern motorcycles and scooters operating with wet clutch systems.",
    applications: [
      "Modern passenger cars",
      "Naturally aspirated diesel engines operating under severe conditions",
      "Supercharged diesel engines",
      "Vehicles encountering continuous start-stop operation",
      "4-stroke motorcycles and scooters with wet clutch systems"
    ],
    features: [
      "Shear stable viscosity index improver",
      "Metallic detergent dispersant",
      "Anti-oxidant protection",
      "Red and yellow colour formulation",
      "All-season suitability"
    ],
    benefits: [
      "Enables easy low temperature starting",
      "Minimizes fuel and oil consumption",
      "Provides maximum protection against rust and corrosion",
      "Good high and low temperature performance",
      "Minimizes wear of engine parts",
      "Ensures system cleanliness by holding contaminants in finely dispersed state"
    ],
    standards: [
      "API SN/CI4",
      "US MIL-L-2104B",
      "E-PL 1/E-DL 1 of IS:13656-1993"
    ],
    packaging: ["900ML", "1LTR"],
    itemCode: "20W40",
    minimumOrder: "1000 Liter",
    image: "/images/2_Motorcycle_Engine_Close_up_On_Black.png",
    relatedProducts: ["active-4t-20w40", "super-4t-20w40", "dynamic-4t-20w40"]
  },
  {
    id: "active-4t-20w40",
    slug: "active-4t-20w40",
    name: "Active 4T 20W-40",
    category: "motorcycle-oils",
    subcategory: "Motorcycle Engine Oil",
    grade: "20W-40",
    apiRating: "API SN/CI4",
    description: "Bariyan's Super Multigrade Oil blended from highly refined base stocks with a balanced additive package containing shear stable VI improver, metallic detergent dispersant, and anti-oxidant. Formulated for gasoline and diesel engines.",
    applications: [
      "Modern passenger cars",
      "Naturally aspirated diesel engines under severe conditions",
      "Supercharged diesel engines",
      "Vehicles with continuous start-stop operation"
    ],
    features: [
      "Highly refined base stocks",
      "Balanced additive package",
      "Shear stable VI improver",
      "Metallic detergent dispersant",
      "Anti-oxidant protection"
    ],
    benefits: [
      "Easy low temperature starting",
      "Minimized fuel and oil consumption",
      "Maximum protection against rust and corrosion",
      "Good high and low temperature performance",
      "Minimized wear of engine parts",
      "System cleanliness through fine dispersion of contaminants"
    ],
    standards: [
      "API SN/CI4",
      "US MIL-L-2104B",
      "E-PL 1/E-DL 1 of IS:13656-1993"
    ],
    packaging: ["900ML", "1LTR"],
    itemCode: "20W40",
    minimumOrder: "1000 Liter",
    image: "/images/2_Motorcycle_Oil_Change_All_You_Need.png",
    relatedProducts: ["accord-4t-20w40", "super-4t-20w40", "dynamic-4t-20w40"]
  },
  {
    id: "super-4t-20w40",
    slug: "super-4t-20w40",
    name: "Super 4T SAE API 20W-40",
    category: "motorcycle-oils",
    subcategory: "Motorcycle Engine Oil",
    grade: "20W-40",
    apiRating: "API SN/CI4",
    description: "Super Multigrade Oil formulated from highly refined base stocks with a balanced additive system. Designed for both gasoline and diesel engine lubrication requirements with all-season performance.",
    applications: [
      "Modern passenger cars",
      "Naturally aspirated diesel engines under severe conditions",
      "Supercharged diesel engines",
      "Continuous start-stop vehicles"
    ],
    features: [
      "Highly refined base stocks",
      "Shear stable VI improver",
      "Metallic detergent dispersant",
      "Anti-oxidant formulation",
      "Red and yellow colour"
    ],
    benefits: [
      "Easy low temperature starting",
      "Reduced fuel and oil consumption",
      "Maximum rust and corrosion protection",
      "Consistent high and low temperature performance",
      "Reduced engine part wear",
      "Maintains system cleanliness"
    ],
    standards: [
      "API SN/CI4",
      "US MIL-L-2104B",
      "E-PL 1/E-DL 1 of IS:13656-1993"
    ],
    packaging: ["900ML", "1LTR"],
    itemCode: "20W40",
    minimumOrder: "1000 Liter",
    image: "/images/2_Motorcycle_Engine_Close_up_On_Black.png",
    relatedProducts: ["accord-4t-20w40", "active-4t-20w40", "dynamic-4t-20w40"]
  },
  {
    id: "dynamic-4t-20w40",
    slug: "dynamic-4t-20w40",
    name: "Dynamic 4T 20W-40 API SN",
    category: "motorcycle-oils",
    subcategory: "Motorcycle Engine Oil",
    grade: "20W-40",
    apiRating: "API SN",
    description: "Dynamic 4T is a high-performance multigrade engine oil engineered for 4-stroke motorcycles. Blended with highly refined base stocks and advanced additives for superior engine protection and performance.",
    applications: [
      "Modern passenger cars",
      "Naturally aspirated diesel engines under severe conditions",
      "Supercharged diesel engines",
      "Continuous start-stop operation vehicles"
    ],
    features: [
      "Shear stable viscosity index improver",
      "Metallic detergent dispersant",
      "Anti-oxidant protection",
      "All-season formulation",
      "Red and yellow colour"
    ],
    benefits: [
      "Easy low temperature starting",
      "Minimized fuel and oil consumption",
      "Maximum protection against rust and corrosion",
      "Good temperature performance range",
      "Minimized engine part wear",
      "System cleanliness maintenance"
    ],
    standards: [
      "API SN/CI4",
      "US MIL-L-2104B",
      "E-PL 1/E-DL 1 of IS:13656-1993"
    ],
    packaging: ["900ML", "1LTR"],
    itemCode: "20W40",
    minimumOrder: "1000 Liter",
    image: "/images/2_Motorcycle_Oil_Change_All_You_Need.png",
    relatedProducts: ["accord-4t-20w40", "active-4t-20w40", "super-4t-20w40"]
  },
  {
    id: "cadillac-4t-10w30",
    slug: "cadillac-4t-10w30",
    name: "Cadillac 4T API SN 10W-30",
    category: "motorcycle-oils",
    subcategory: "Motorcycle Engine Oil",
    grade: "10W-30",
    apiRating: "API SN",
    description: "Cadillac 4T is blended with structurally modified base stock and a synergistic additive system for outstanding detergency, dispersancy, anti-wear and antioxidant properties. Features high viscosity index and low temperature flow properties.",
    applications: [
      "On-road high performance 4-stroke motorcycles",
      "Scooters with wet clutch systems",
      "High speed, high temperature operation"
    ],
    features: [
      "Structurally modified base stock",
      "Synergistic additive system",
      "Outstanding detergency and dispersancy",
      "Anti-wear and antioxidant properties",
      "High viscosity index",
      "Low temperature flow properties"
    ],
    benefits: [
      "Inherent low temperature pumpability",
      "Excellent evaporation control in high speed operation",
      "Highly shear stable viscosity index modifiers",
      "Enhanced lubrication for maximum power and acceleration",
      "Optimized wet-clutch performance",
      "Excellent low temperature flow characteristics",
      "Potential improvement in fuel economy",
      "Enhanced oil life and longer drain intervals"
    ],
    standards: ["API SN"],
    packaging: ["900ML", "1LTR"],
    image: "/images/2_Motorcycle_Engine_Close_up_On_Black.png",
    relatedProducts: ["accord-4t-20w40", "dynamic-4t-20w40", "bolt-ci4-15w40"]
  },

  // COMMERCIAL VEHICLE / DIESEL ENGINE OILS
  {
    id: "bolt-ci4-15w40",
    slug: "bolt-ci4-15w40",
    name: "Bolt CI4+ SAE 15W-40",
    category: "commercial-vehicle-oils",
    subcategory: "Commercial Vehicle Engine Oil",
    grade: "15W-40",
    apiRating: "API CI4+",
    description: "A premium quality, API certified commercial multipurpose diesel engine oil. Designed for the most severe performance requirements of modern, highly rated turbocharged diesel engines in over-the-road transport fleet applications and off-highway operations.",
    applications: [
      "New generation commercial diesel vehicles",
      "American and European design engines (Caterpillar, Cummins)",
      "Heavy duty on-highway equipment",
      "Off-highway equipment"
    ],
    features: [
      "Premium quality API certified formulation",
      "Turbocharged diesel engine protection",
      "Excellent shear stability",
      "High temperature deposit control",
      "Oil degradation resistance",
      "Corrosion resistance"
    ],
    benefits: [
      "Reduced engine scuffing and bore polishing",
      "High engine cleanliness",
      "Maximum protection from wear and deposits",
      "Suitable for mixed fleet operation",
      "Improved control of oil consumption",
      "Easier cold starting",
      "Excellent all-weather performance",
      "Catalytic converter compatible"
    ],
    standards: ["API CI4+"],
    packaging: ["1LTR", "5LTR", "20LTR", "210LTR"],
    image: "/images/4_177_Modern_Heavy_Duty_Truck_Diesel.png",
    relatedProducts: ["cadillac-4t-10w30", "accord-4t-20w40", "hydraulic-oil"]
  },

  // SPECIALTY PRODUCTS
  {
    id: "fork-oil",
    slug: "fork-oil",
    name: "Fork Oil",
    category: "specialty-products",
    subcategory: "Suspension Oil",
    description: "Premium fork oil processed using high quality chemical compounds for motorcycle suspension systems. Suitable for all standard and cartridge type fork suspensions on street and off-road motorcycles, ATVs, and high performance applications.",
    applications: [
      "Standard motorcycle fork suspensions",
      "Cartridge type fork suspensions",
      "Street motorcycles",
      "Off-road motorcycles",
      "ATVs",
      "High performance suspension systems"
    ],
    features: [
      "Superior anti-wear chemistry",
      "Friction modifiers for reduced stiction",
      "Viscosity stability under heat",
      "Anti-foam properties",
      "Direct replacement for OEM fill"
    ],
    benefits: [
      "Greatly reduced stiction for responsive handling",
      "Extended suspension tube and slider life",
      "More responsive and reliable performance",
      "Minimum friction for better handling",
      "Long lasting consistent performance even as suspension heats up",
      "Eliminates foaming and air entrainment for consistent damping"
    ],
    standards: [],
    packaging: ["500ML", "1LTR"],
    image: "/images/5_Motorbike_Fork_Oil_Ultimate_Guide.png",
    relatedProducts: ["gear-ep-90", "hydraulic-oil", "atf"]
  },
  {
    id: "gear-ep-90",
    slug: "gear-ep-90",
    name: "Gear EP 90",
    category: "gear-oils",
    subcategory: "Automotive Gear Oil",
    grade: "EP 90",
    apiRating: "API GL-5",
    description: "Automotive extreme pressure gear oils blended from specially selected high viscosity index base stocks with additives that impart extreme pressure, anti-rust, anti-corrosion and anti-oxidation characteristics.",
    applications: [
      "Hypoid differential units under severe conditions",
      "Mechanical transmissions",
      "Drive axles requiring extreme pressure gear oils",
      "Commercial fleet mechanical transmissions"
    ],
    features: [
      "High viscosity index base stocks",
      "Extreme pressure additives",
      "Anti-rust protection",
      "Anti-corrosion properties",
      "Anti-oxidation characteristics"
    ],
    benefits: [
      "Exceptional chemical and thermal stability up to 150°C",
      "Excellent extreme pressure property for maximum protection",
      "Protection against low speed-high torque wear",
      "Protection against high speed-shock induced scoring",
      "Guards against rust and corrosion"
    ],
    standards: [
      "API Service GL5",
      "US Military MIL-L-2105D",
      "UK Defense CS 3000B"
    ],
    packaging: ["1LTR", "5LTR", "20LTR", "210LTR"],
    image: "/images/7_Close_up_of_a_drop_of_lubricant_oil.png",
    relatedProducts: ["fork-oil", "hydraulic-oil", "bolt-ci4-15w40"]
  },
  {
    id: "hydraulic-oil",
    slug: "hydraulic-oil",
    name: "Hydraulic Oil",
    category: "hydraulic-oils",
    subcategory: "Industrial Hydraulic Oil",
    description: "Anti-wear hydraulic and circulation oils specially formulated for efficient lubrication of a wide variety of industrial equipment. Blended from highly refined base stocks with carefully selected antioxidant, anti-wear, anti-rust and anti-foam additives.",
    applications: [
      "Hydraulic systems and hydraulic pumps",
      "Circulation systems",
      "Splash, bath and ring oiling systems",
      "Bearings of industrial machinery",
      "Chain drives",
      "Compressor crankcase lubrication"
    ],
    features: [
      "Highly refined base stocks",
      "Antioxidant additives",
      "Anti-wear protection",
      "Anti-rust properties",
      "Anti-foam formulation"
    ],
    benefits: [
      "Good wear protection prolonging service life",
      "High film strength minimizing friction and wear",
      "Rust protection reducing corrosion incidence",
      "Excellent resistance to oxidation",
      "Reduced tendency to foam minimizing noisy operation"
    ],
    standards: [
      "IS:10522:1983 (Reaffirmed 1993)",
      "Vickers V 104C Vane Pump Test"
    ],
    packaging: ["1LTR", "5LTR", "20LTR", "210LTR"],
    image: "/images/8_Hydraulic_Machinery_Components_Showcasing.png",
    relatedProducts: ["gear-ep-90", "atf", "fork-oil"]
  },
  {
    id: "atf",
    slug: "atf",
    name: "Automatic Transmission Fluid",
    category: "transmission-fluids",
    subcategory: "Automatic Transmission Fluid",
    description: "Premium automatic transmission fluid used in hydraulic and power steering systems. Processed using high quality chemical compounds for excellent thermal and oxidative stability.",
    applications: [
      "Automatic transmissions",
      "Hydraulic systems",
      "Power steering systems",
      "Ford transmissions (1983 to 1996)",
      "GM transmissions (before 2005)",
      "Allison C4 applications"
    ],
    features: [
      "Good friction durability performance",
      "Good oxidative stability",
      "Improved wear protection",
      "Excellent thermal stability",
      "Compatible with seals"
    ],
    benefits: [
      "Excellent thermal and oxidative stability",
      "Extended component life through cleanliness",
      "Reduced oil thickening maintaining transmission efficiency",
      "Good low temperature fluidity for quality gear shifts",
      "Protection against rust and corrosion",
      "Seal compatibility preventing leaks"
    ],
    standards: [
      "Ford (1983 to 1996)",
      "GM (before 2005)",
      "Allison C4",
      "TES 389"
    ],
    specifications: [
      { label: "Density at 15°C", value: "0.859" },
      { label: "Colour", value: "Red" },
      { label: "Kinematic Viscosity @ 40°C", value: "35 cSt" },
      { label: "Kinematic Viscosity @ 100°C", value: "7.2 cSt" },
      { label: "Viscosity Index", value: "172" },
      { label: "Pour Point", value: "-46°C" },
      { label: "Flash Point (COC)", value: "216°C" }
    ],
    packaging: ["500ML", "1LTR", "5LTR"],
    image: "/images/5_Motorbike_Fork_Oil_Ultimate_Guide.png",
    relatedProducts: ["hydraulic-oil", "gear-ep-90", "fork-oil"]
  },
  {
    id: "engine-oil-booster",
    slug: "engine-oil-booster",
    name: "Engine Oil Booster",
    category: "specialty-products",
    subcategory: "Engine Treatment",
    description: "An advanced multi-functional synthetic formula that treats metal surfaces and fortifies motor oil. Compatible with petroleum, mineral, and synthetic motor oils. Perfect for new or older vehicles.",
    applications: [
      "All gasoline and diesel engines",
      "New vehicles",
      "Older vehicles",
      "Petroleum, mineral, and synthetic oil systems"
    ],
    features: [
      "Advanced multi-functional synthetic formula",
      "Metal surface treatment",
      "Motor oil fortification",
      "Compatible with all oil types",
      "Will not void new vehicle warranty"
    ],
    benefits: [
      "Increases horsepower",
      "Improves acceleration and performance",
      "Protects during engine startup",
      "Extends engine life",
      "Protects against thermal breakdown"
    ],
    standards: [],
    packaging: ["50ML", "100ML", "250ML"],
    itemCode: "G100",
    image: "/images/1_Golden_motor_oil_pouring_from_purple.png",
    relatedProducts: ["engine-oil-flush", "bolt-ci4-15w40", "accord-4t-20w40"]
  },
  {
    id: "engine-oil-flush",
    slug: "engine-oil-flush",
    name: "Engine Oil Flush",
    category: "specialty-products",
    subcategory: "Engine Cleaner",
    description: "High quality engine oil flush ideal as a supplement for engine treatment. Processed using finest quality inputs and advanced technology to clean engine internals before oil change.",
    applications: [
      "Gasoline engines",
      "Diesel engines",
      "Pre-oil change cleaning",
      "Engine maintenance procedures"
    ],
    features: [
      "High quality chemical formulation",
      "Advanced processing technology",
      "Engine internal cleaning action"
    ],
    benefits: [
      "Increases horsepower",
      "Extends engine life",
      "Protects against thermal breakdown",
      "Removes sludge and deposits"
    ],
    standards: [],
    packaging: ["50ML", "100ML", "250ML"],
    itemCode: "G200",
    minimumOrder: "1000 x 50ml",
    image: "/images/1_Golden_motor_oil_pouring_from_purple.png",
    relatedProducts: ["engine-oil-booster", "bolt-ci4-15w40", "accord-4t-20w40"]
  },

  // LUBRICANT ADDITIVES
  {
    id: "vii-white-pot1220",
    slug: "vii-white-pot1220",
    name: "Viscosity Index Improver (White) POT 1220",
    category: "lubricant-additives",
    subcategory: "Viscosity Index Improver",
    description: "An oil concentrate of an olefin copolymer recommended primarily as a viscosity index improver for crankcase lubricants. Exhibits outstanding shear stability characteristics with excellent filterability.",
    applications: [
      "Low SSI hydraulic oil",
      "Automotive multigrade gear oils",
      "Shock absorber oils",
      "Crankcase lubricants with various SAE grades",
      "SAE 15W-50 crankcase oils"
    ],
    features: [
      "Olefin copolymer concentrate",
      "Excellent shear stability",
      "Good filterability",
      "All hydrocarbon material",
      "Viscosity stability"
    ],
    benefits: [
      "Outstanding shear stability (7% viscosity loss @ 100°C)",
      "Comparable piston cleanliness to PIB type VI improvers",
      "Lower Octane Requirements Increase (ORI)",
      "Behaves same as base oil component",
      "Excellent performance in MS Sequence engine tests"
    ],
    standards: [],
    specifications: [
      { label: "Viscosity @ 100°C", value: "2200 cSt (min)" },
      { label: "Flash Point", value: "220°C (min)" },
      { label: "Density @ 15°C", value: "0.88 gm/cc" },
      { label: "Colour (ASTM)", value: "< 0.5" },
      { label: "Shear Loss (DIN 51382, 30 passes)", value: "3%" },
      { label: "Shear Stability Index (max)", value: "36" },
      { label: "Thickening in SN500 @ 5% @ 100°C", value: "10.6 (min)" },
      { label: "Viscosity Index Boost @ 5% in 20W-40", value: "15 units" }
    ],
    packaging: ["20Kg Bucket"],
    itemCode: "POT 1220",
    image: "/images/3_79_760_Engine_Pistons_Royalty_Free.png",
    relatedProducts: ["corrosion-inhibitor-pot9110", "engine-oil-additive-pot3220", "atf-additive-pot6110"]
  },
  {
    id: "corrosion-inhibitor-pot9220",
    slug: "corrosion-inhibitor-pot9220",
    name: "Corrosion Inhibitor for Emulsifier POT 9220",
    category: "lubricant-additives",
    subcategory: "Corrosion Inhibitor",
    description: "A versatile ashless rust inhibitor for use in R&O, hydraulic oils, turbine oils and circulating oils. Functions as a corrosion inhibitor for emulsifier systems with excellent ferrous corrosion inhibition.",
    applications: [
      "Semi synthetic water mix metalworking fluids",
      "Synthetic water mix cutting fluids",
      "High water based hydraulic fluids",
      "Synthetic cleaning fluids",
      "Post treatment of systems"
    ],
    features: [
      "Secondary amine free",
      "Ultra low foaming tendency",
      "Compatible with hard water",
      "Readily soluble in water, glycols and polyglycols",
      "Ashless formulation"
    ],
    benefits: [
      "Excellent ferrous corrosion inhibition",
      "Enhanced oxidation stability",
      "Water separation capability",
      "Compatible with hard water",
      "Ultra low foaming tendency",
      "Fluid residue formation control"
    ],
    standards: [],
    specifications: [
      { label: "Appearance", value: "Pale Yellow Fluid" },
      { label: "Specific Gravity @ 20°C", value: "1.05" },
      { label: "Total Alkalinity (%wt. KOH)", value: "45" },
      { label: "pH @ 1%", value: "10.4" },
      { label: "IP287 Corrosion Test", value: "1%" }
    ],
    packaging: ["20Kg Bucket"],
    itemCode: "POT 9220",
    minimumOrder: "50 Liter",
    image: "/images/5_What_is_Machinery_Lubrication_AT.png",
    relatedProducts: ["corrosion-inhibitor-pot9110", "vii-white-pot1220", "antiwear-pot9120"]
  },
  {
    id: "corrosion-inhibitor-pot9110",
    slug: "corrosion-inhibitor-pot9110",
    name: "Corrosion Inhibitor POT 9110",
    category: "lubricant-additives",
    subcategory: "Corrosion Inhibitor",
    description: "A carboxy-imidazoline mixture that functions as a versatile ashless rust inhibitor for use in R&O, hydraulic oils, turbine oils, circulating oils, and a wide range of other industrial lubricants and greases.",
    applications: [
      "R&O oils",
      "Hydraulic oils",
      "Turbine oils",
      "Circulating oils",
      "Industrial lubricants",
      "Industrial greases"
    ],
    features: [
      "Carboxy-imidazoline mixture",
      "Ashless rust inhibitor",
      "Versatile application range",
      "Multifunctional formulation"
    ],
    benefits: [
      "Excellent rust protection",
      "Water separation capability",
      "Enhanced oxidation stability",
      "Useful in many different lubricant applications"
    ],
    standards: [],
    packaging: ["20Kg Bucket"],
    itemCode: "POT 9110",
    minimumOrder: "50 Kilogram",
    image: "/images/5_What_is_Machinery_Lubrication_AT.png",
    relatedProducts: ["corrosion-inhibitor-pot9220", "vii-white-pot1220", "antiwear-pot9120"]
  },
  {
    id: "engine-oil-additive-pot3220",
    slug: "engine-oil-additive-pot3220",
    name: "Engine Oil Additive DI Package POT 3220",
    category: "lubricant-additives",
    subcategory: "Engine Oil Additive Package",
    description: "A quality engine oil additive processed using approved chemical compounds for formulating heavy duty diesel engine and gasoline lubricants meeting multi-grade and mono-grade performance requirements.",
    applications: [
      "Heavy duty diesel engine lubricants",
      "Gasoline lubricants",
      "Multi-grade formulations",
      "Mono-grade formulations"
    ],
    features: [
      "Friction modifiers for deposit control",
      "Oil oxidation resistance",
      "Dispersants and antioxidants",
      "Quality approved chemical compounds"
    ],
    benefits: [
      "Excellent deposit control",
      "Oxidation resistance",
      "Suitable for heavy duty applications",
      "Multi-grade and mono-grade capability"
    ],
    standards: ["API SC/CC to SM/CI4"],
    packaging: ["20Kg Bucket"],
    itemCode: "POT 3220",
    minimumOrder: "1 Liter",
    image: "/images/3_79_760_Engine_Pistons_Royalty_Free.png",
    relatedProducts: ["multipurpose-additive", "passenger-additive-pot3250", "cng-additive-pot3330"]
  },
  {
    id: "atf-additive-pot6110",
    slug: "atf-additive-pot6110",
    name: "Automatic Transmission Fluid Additive POT 6110",
    category: "lubricant-additives",
    subcategory: "Transmission Fluid Additive",
    description: "A superior quality automatic transmission fluid additive processed using high quality chemical compounds. Suitable for most power shift transmissions with excellent protection against viscosity breakdown.",
    applications: [
      "Power shift transmissions",
      "Automatic transmission fluids",
      "Hydraulic systems"
    ],
    features: [
      "Excellent viscosity breakdown protection",
      "Extended transmission life formulation",
      "Oil thickening control",
      "High quality chemical compounds"
    ],
    benefits: [
      "Extended transmission life",
      "Reduced oil thickening",
      "Maintains transmission efficiency",
      "Excellent viscosity stability"
    ],
    standards: [],
    packaging: ["20Kg Bucket"],
    itemCode: "POT 6110",
    image: "/images/5_Motorbike_Fork_Oil_Ultimate_Guide.png",
    relatedProducts: ["engine-oil-additive-pot3220", "gear-additive-ep-pot4230", "vii-white-pot1220"]
  },
  {
    id: "heavy-duty-additive-pot3260",
    slug: "heavy-duty-additive-pot3260",
    name: "Heavy Duty Vehicle Engine Oil Additive POT 3260",
    category: "lubricant-additives",
    subcategory: "Heavy Duty Engine Oil Additive",
    description: "A comprehensive heavy duty vehicle engine oil additive tested against various quality parameters. Recommended for use at 2 to 6% by weight in suitable base stocks.",
    applications: [
      "Heavy duty diesel engines",
      "Commercial vehicle lubricants",
      "Fleet operations"
    ],
    features: [
      "Free from impurities",
      "Wear and rust control",
      "Superior rust protection",
      "High level of purity"
    ],
    benefits: [
      "Effective wear control",
      "Superior rust protection",
      "High purity formulation",
      "Reliable performance in all engine types"
    ],
    standards: [],
    packaging: ["20Kg Bucket"],
    itemCode: "POT 3260",
    image: "/images/4_177_Modern_Heavy_Duty_Truck_Diesel.png",
    relatedProducts: ["engine-oil-additive-pot3220", "multipurpose-additive", "ht-additive-pot3270"]
  },
  {
    id: "4stroke-additive-pot3240",
    slug: "4stroke-additive-pot3240",
    name: "4-Stroke Engine Oil Additive POT 3240",
    category: "lubricant-additives",
    subcategory: "4-Stroke Engine Oil Additive",
    description: "Designed to meet requirements for an economical and scalable additive system. Features anti-oxidants and excellent deposit control for 4-stroke engine lubricants.",
    applications: [
      "4-stroke gasoline engines",
      "Motorcycle engine oils",
      "Passenger vehicle engine oils"
    ],
    features: [
      "Non-dispersant V.I. improver",
      "Anti-oxidants",
      "Excellent deposit control",
      "Enhanced shelf life"
    ],
    benefits: [
      "Economical additive system",
      "Scalable formulation",
      "Excellent deposit control",
      "Enhanced shelf life"
    ],
    standards: [],
    specifications: [
      { label: "SAE Viscosity Grades Supported", value: "15W-40, 20W-40, 20W-50, 10W, 20W, 30W, 30, 40, 50" }
    ],
    packaging: ["20Kg Bucket"],
    itemCode: "POT 3240",
    image: "/images/2_Motorcycle_Engine_Close_up_On_Black.png",
    relatedProducts: ["engine-oil-additive-pot3220", "passenger-additive-pot3250", "multipurpose-additive"]
  },
  {
    id: "multipurpose-additive",
    slug: "multipurpose-additive",
    name: "Multipurpose Engine Oil Additive",
    category: "lubricant-additives",
    subcategory: "Multipurpose Engine Oil Additive",
    description: "A comprehensive multipurpose engine oil additive especially suitable for heavy duty diesel engines running on freeway. Processed using best quality chemical compounds and sophisticated technology.",
    applications: [
      "Heavy duty diesel engines",
      "Freeway operations",
      "Commercial fleet applications"
    ],
    features: [
      "High-temperature detergency",
      "Oxygen, rust and abrasion resistance",
      "Density (20°C): 0.990-1.02 kg/m³",
      "Comprehensive additive package"
    ],
    benefits: [
      "High temperature detergency",
      "Oxygen resistance",
      "Rust and abrasion resistance",
      "Suitable for heavy duty freeway operations"
    ],
    standards: [],
    specifications: [
      { label: "Density (20°C)", value: "0.990-1.02 kg/m³" },
      { label: "Kinematical Viscosity (100°C)", value: "90-135 mm²/s" },
      { label: "Flash Point (Opening)", value: "165°C (min)" },
      { label: "Base Number", value: "135 mgKOH/g (min)" },
      { label: "Mechanical Impurities", value: "0.20%" },
      { label: "Water", value: "0.20% (max)" },
      { label: "Phosphorus (P)", value: "0.68 wt% (min)" },
      { label: "Sulphur (S)", value: "1.96 wt% (min)" },
      { label: "Calcium (Ca)", value: "2.9 wt% (min)" },
      { label: "Zinc (Zn)", value: "0.84 wt% (min)" },
      { label: "Nitrogen (N)", value: "0.46 wt% (min)" }
    ],
    packaging: ["20Kg Bucket"],
    minimumOrder: "200 Kilogram",
    image: "/images/4_177_Modern_Heavy_Duty_Truck_Diesel.png",
    relatedProducts: ["engine-oil-additive-pot3220", "heavy-duty-additive-pot3260", "ht-additive-pot3270"]
  },
  {
    id: "passenger-additive-pot3250",
    slug: "passenger-additive-pot3250",
    name: "Passenger Vehicle Engine Oil Additive POT 3250",
    category: "lubricant-additives",
    subcategory: "Passenger Vehicle Additive",
    description: "New additive technology designed to meet ILSAC GF-5 and API SN industry requirements. Designed for the manufacture of all ILSAC and non-ILSAC viscosity grades in a wide range of industry base stocks.",
    applications: [
      "Passenger vehicle engine oils",
      "ILSAC GF-5 formulations",
      "API SN licensed products",
      "Multi-grade and mono-grade engine oils"
    ],
    features: [
      "Meets ILSAC GF-5 requirements",
      "API SN and API SN Resource Conserving compatible",
      "Contains pour point depressant (PPD)",
      "Wide base stock compatibility"
    ],
    benefits: [
      "Robust technology exceeding ILSAC GF-5 demands",
      "Covers API SN license requirements",
      "No supplemental PPD needed",
      "Approved against API specification with no modifications"
    ],
    standards: ["ILSAC GF-5", "API SN", "API SN Resource Conserving"],
    specifications: [
      { label: "Recommended Dosage", value: "10.1% wt." },
      { label: "Max Handling Temp", value: "70°C" },
      { label: "Shelf Life @ 50°C", value: "3 months" },
      { label: "Shelf Life @ Ambient (10-40°C)", value: "36 months" }
    ],
    packaging: ["20Kg Bucket"],
    itemCode: "POT 3250",
    image: "/images/8_220_232_Car_Engine_View_Royalty_Free.png",
    relatedProducts: ["cng-additive-pot3330", "4stroke-additive-pot3240", "engine-oil-additive-pot3220"]
  },
  {
    id: "cng-additive-pot3330",
    slug: "cng-additive-pot3330",
    name: "CNG Engine Oil Additive POT 3330",
    category: "lubricant-additives",
    subcategory: "CNG Engine Oil Additive",
    description: "Used to formulate crankcase oils suitable for gasoline and diesel engines. Multifunctional additives with outstanding thermal oxidation stability characteristics for CNG and gasoline engine applications.",
    applications: [
      "Modern high performance Indian cars (Maruti, Daewoo, Mitsubishi, Hyundai, Premier 118NE)",
      "Four stroke petrol engines",
      "Four stroke diesel engines under medium conditions",
      "Stationary diesel engines on HSD or LDO",
      "CNG engine oils with gasoline capability"
    ],
    features: [
      "Outstanding thermal oxidation stability",
      "Multifunctional additive package",
      "Suitable for CNG and gasoline engines",
      "Rationalizable to higher and lower performance levels"
    ],
    benefits: [
      "Exceeds API CC engine test requirements",
      "Suitable for single and multi viscosity formulations",
      "Compatible with mineral oil base stocks",
      "Broad API service category coverage"
    ],
    standards: ["API CC", "API CD", "API SC", "EDL1", "EPL1", "MIL-B", "EDL2", "MIL-C", "EDL3"],
    specifications: [
      { label: "Specific Gravity @ 15.6°C (ASTM D-1298)", value: "1.041" },
      { label: "Viscosity @ 100°C", value: "175 cSt" },
      { label: "Total Base Number (ASTM D-2896)", value: "130 mg KOH/g" }
    ],
    packaging: ["20Kg Bucket"],
    itemCode: "POT 3330",
    image: "/images/8_220_232_Car_Engine_View_Royalty_Free.png",
    relatedProducts: ["passenger-additive-pot3250", "4stroke-additive-pot3240", "engine-oil-additive-pot3220"]
  },
  {
    id: "utto-additive-pot3280",
    slug: "utto-additive-pot3280",
    name: "Universal Tractor Transmission Oil Additive POT 3280",
    category: "lubricant-additives",
    subcategory: "UTTO Additive",
    description: "Advanced additive package for Universal Tractor Transmission Oil (UTTO) applications. Designed for farm tractors, combines, and non-farm equipment with wet brakes, hydraulics, and transmissions.",
    applications: [
      "Farm tractors and combines",
      "Bulldozers and road graders",
      "Front end loaders",
      "Forestry equipment",
      "Buses and trucks with power shift transmissions",
      "Mining equipment with hydraulics",
      "Lift trucks (warehouse to steel mill size)"
    ],
    features: [
      "Superior friction performance eliminating brake chatter",
      "Excellent shift performance in power shift transmissions",
      "Superior anti-wear properties",
      "Better copper protection",
      "Variety of viscosity modifiers"
    ],
    benefits: [
      "Eliminates wet brake screeching noise",
      "Excellent shift performance",
      "Reduces operator fatigue",
      "Protects final drive gears",
      "Prevents corrosion in axial piston hydraulic pumps",
      "Enhanced equipment productivity"
    ],
    standards: [],
    packaging: ["20Kg Bucket"],
    itemCode: "POT 3280",
    image: "/images/6_25_Types_of_Heavy_Construction_Equipment.png",
    relatedProducts: ["gear-additive-auto-pot4220", "hydraulic-oil", "atf-additive-pot6110"]
  },
  {
    id: "2stroke-additive-pot3320",
    slug: "2stroke-additive-pot3320",
    name: "Two Stroke Engine Oil Additive POT 3320",
    category: "lubricant-additives",
    subcategory: "2-Stroke Oil Additive",
    description: "A two-cycle gasoline engine oil additive acclaimed for precise pH value. Used in processing lubricants for two-stroke cycle gasoline engines with excellent high temperature performance.",
    applications: [
      "Air-cooled engines",
      "Boating Industry Association TC-W applications",
      "High output air-cooled two-stroke engines",
      "High temperature applications"
    ],
    features: [
      "Precise pH value",
      "5.7% by weight dilution recommended",
      "No pour depressant required",
      "High temperature performance"
    ],
    benefits: [
      "Recommended for high temperature air-cooled engines",
      "Compatible with manufacturer recommended fuel-to-oil ratios",
      "No additional pour depressant needed",
      "Excellent lubrication for two-stroke engines"
    ],
    standards: ["TC-W"],
    packaging: ["20Kg Bucket"],
    itemCode: "POT 3320",
    image: "/images/2_Motorcycle_Engine_Close_up_On_Black.png",
    relatedProducts: ["4stroke-additive-pot3240", "engine-oil-additive-pot3220", "passenger-additive-pot3250"]
  },
  {
    id: "ht-additive-pot3270",
    slug: "ht-additive-pot3270",
    name: "HT Engine Oil Additive POT 3270",
    category: "lubricant-additives",
    subcategory: "High Temperature Engine Oil Additive",
    description: "Designed to deliver excellent performance in both passenger car and heavy duty API core requirements. Broad specification coverage from API SB/CB to API SL/CF-4 with proven performance across a wide range of base oils.",
    applications: [
      "Passenger car engine oils",
      "Heavy duty diesel engine oils",
      "Broad viscosity grade formulations",
      "Gasoline and diesel blended fleet operations"
    ],
    features: [
      "Broad specification coverage (API SB/CB to API SL/CF-4)",
      "Broadest viscosity grade coverage including SAE 10W-40",
      "Proven performance in wide range of base oils",
      "Excellent gasoline and diesel balance",
      "All data demonstrated by engine testing"
    ],
    benefits: [
      "Licensed API claims supported by engine testing",
      "Flexible logistics with 2 core packages or 1 core + booster approach",
      "TBN booster available for optimized API CF performance",
      "JASO 4T clutch friction performance boosters available"
    ],
    standards: ["API SB/CB to API SL/CF-4", "JASO 4T"],
    packaging: ["20Kg Bucket"],
    itemCode: "POT 3270",
    image: "/images/4_177_Modern_Heavy_Duty_Truck_Diesel.png",
    relatedProducts: ["engine-oil-additive-pot3220", "multipurpose-additive", "heavy-duty-additive-pot3260"]
  },
  {
    id: "railroad-additive-pot3290",
    slug: "railroad-additive-pot3290",
    name: "Railroad Engine Oil Additive POT 3290",
    category: "lubricant-additives",
    subcategory: "Railroad Engine Oil Additive",
    description: "Generation 3 railroad engine oil additive package approved by railway departments. Prepared from high quality detergent, dispersant, antioxidant, corrosion inhibitor, and antiwear components.",
    applications: [
      "Railroad locomotive engines",
      "Powerful locomotive engines under severe conditions",
      "Railway engine crankcase lubrication"
    ],
    features: [
      "Generation 3 railroad additive technology",
      "High quality detergent and dispersant components",
      "Antioxidant and corrosion inhibitor blend",
      "Antiwear agent formulation"
    ],
    benefits: [
      "Fine detergency and dispersion properties",
      "Antiwear and antioxidant performance",
      "Prevents deposit and lacquer film formation",
      "Fulfills railway engine requirements in harsh conditions",
      "Long-term safeguard for locomotive engines"
    ],
    standards: [],
    packaging: ["20Kg Bucket"],
    itemCode: "POT 3290",
    image: "/images/1_Fleet_Commercial_Trucks_Parked_On.png",
    relatedProducts: ["ht-additive-pot3270", "turbine-additive-pot3300", "multipurpose-additive"]
  },
  {
    id: "turbine-additive-pot3300",
    slug: "turbine-additive-pot3300",
    name: "Turbine Oil Additive POT 3300",
    category: "lubricant-additives",
    subcategory: "Turbine Oil Additive",
    description: "Ashless rust and oxidation additive for demanding high temperature gas, steam and combined cycle turbine oil applications. Contains a groundbreaking patented antioxidant system for extended oxidation life.",
    applications: [
      "High temperature gas turbines",
      "Steam turbines",
      "Combined cycle turbines",
      "Group I, II and III base stock formulations"
    ],
    features: [
      "Ashless formulation",
      "Patented antioxidant system",
      "Extended oxidation life in Group II and III base stocks",
      "Unique stay-clean technology",
      "Excellent water separation"
    ],
    benefits: [
      "Unsurpassed control of sludge, varnish and deposits",
      "Increased reliability of valves, filters and bearings",
      "Reduced unplanned downtime and maintenance",
      "Excellent water separation throughout service life",
      "Advanced filterability even with trace contaminants"
    ],
    standards: [],
    specifications: [
      { label: "Appearance", value: "Clear Amber to Dark Brown Liquid" },
      { label: "Viscosity @ 40°C", value: "44 cSt" },
      { label: "Flash Point (PMCC)", value: "100°C" },
      { label: "Max Storage Temp", value: "40°C" },
      { label: "Recommended Blending Temp", value: "65°C" },
      { label: "Max Skin Temp (Agitated)", value: "121°C" },
      { label: "Shelf Life", value: "12 months at ambient temperature" },
      { label: "Recommended Treat Rate", value: "0.7-0.8% in suitable base stocks" }
    ],
    packaging: ["20Kg Bucket"],
    itemCode: "POT 3300",
    image: "/images/5_What_is_Machinery_Lubrication_AT.png",
    relatedProducts: ["railroad-additive-pot3290", "corrosion-inhibitor-pot9110", "hydraulic-oil"]
  },
  {
    id: "gear-additive-ep-pot4230",
    slug: "gear-additive-ep-pot4230",
    name: "Gear Oil Additive EP POT 4230",
    category: "lubricant-additives",
    subcategory: "Gear Oil EP Additive",
    description: "Heavy duty gear oil additive for enclosed gear drives with splash and circulatory type lubrication systems under heavy shock load conditions. Treated at 1.5% weight in suitable base stocks.",
    applications: [
      "Heavy duty enclosed gear drives",
      "Splash lubrication systems",
      "Circulatory lubrication systems",
      "Heavy shock load conditions"
    ],
    features: [
      "Operating temperature up to 160°C",
      "Treated at 1.5% weight (1.4% volume)",
      "Thermally stable formulation",
      "High film strength",
      "Advanced water separation"
    ],
    benefits: [
      "Minimal degradation and long service life",
      "Exceptional EP performance against premature failure",
      "Excellent antifoam and demulsibility",
      "Non-corrosive to yellow metals",
      "Suitable for Group I-IV base stocks"
    ],
    standards: [],
    packaging: ["20Kg Bucket"],
    itemCode: "POT 4230",
    image: "/images/7_Close_up_of_a_drop_of_lubricant_oil.png",
    relatedProducts: ["gear-additive-industrial-pot4210", "gear-additive-auto-pot4220", "gear-ep-90"]
  },
  {
    id: "gear-additive-industrial-pot4210",
    slug: "gear-additive-industrial-pot4210",
    name: "Industrial Gear Oil Additive POT 4210",
    category: "lubricant-additives",
    subcategory: "Industrial Gear Oil Additive",
    description: "Designed for the formulation of premium quality industrial gear oils. Provides clean-gear performance under high temperature and oxidation conditions with excellent phosphorus retention.",
    applications: [
      "Premium industrial gear oils",
      "Conventional mineral oil formulations",
      "Synthetic formulations (with ester fluid)",
      "Enclosed industrial gear drives"
    ],
    features: [
      "Clean-gear performance under high temperature",
      "Excellent phosphorus retention",
      "Low chlorine content",
      "Recommended at 1.3-2.0% wt. in mineral oils"
    ],
    benefits: [
      "Extended wear protection through phosphorus retention",
      "Low chlorine content in blended oils",
      "Clean performance under oxidation",
      "Flexible treat rates for different base stocks"
    ],
    standards: [],
    specifications: [
      { label: "Appearance", value: "Clear Amber Liquid" },
      { label: "Density @ 15°C", value: "1.025 g/ml" },
      { label: "Density", value: "8.55 lbs/gal" },
      { label: "Specific Gravity @ 15.6/15.6°C", value: "1.027" },
      { label: "Flash Point (PMCC)", value: "82°C (min)" },
      { label: "Kinematic Viscosity @ 100°C", value: "15 mm²/s" }
    ],
    packaging: ["20Kg Bucket"],
    itemCode: "POT 4210",
    image: "/images/7_Close_up_of_a_drop_of_lubricant_oil.png",
    relatedProducts: ["gear-additive-ep-pot4230", "gear-additive-auto-pot4220", "gear-ep-90"]
  },
  {
    id: "gear-additive-auto-pot4220",
    slug: "gear-additive-auto-pot4220",
    name: "Automobile Gear Oil Additive POT 4220",
    category: "lubricant-additives",
    subcategory: "Automotive Gear Oil Additive",
    description: "Premium automotive gear oil additive for light-duty and heavy-duty axles, and heavy-duty non-synchronized manual transmissions. Can be used with limited slip additive for excellent limited slip capability.",
    applications: [
      "Automotive light-duty axles",
      "Automotive heavy-duty axles",
      "Heavy-duty non-synchronized manual transmissions",
      "Non-limited slip differential top-off service",
      "SUVs and light duty trucks"
    ],
    features: [
      "Excellent handling and pumpability",
      "Exceptional seal compatibility",
      "Good EP protection",
      "Superior copper corrosion protection",
      "Strong foam suppression",
      "Soluble in Group I and Group II base stocks"
    ],
    benefits: [
      "Unsurpassed frictional durability reducing vibration potential",
      "Limited slip capability for high horsepower vehicles",
      "Excellent thermal and oxidation stability",
      "Superior storage stability",
      "Excellent handling and pumpability"
    ],
    standards: [],
    specifications: [
      { label: "Appearance", value: "Clear Light Amber Liquid" },
      { label: "Specific Gravity @ 15.6/15.6°C", value: "1.022" },
      { label: "Density", value: "8.51 lbs/gal" },
      { label: "Viscosity @ 100°C", value: "13 cSt" },
      { label: "Flash Point (PMCC)", value: "85°C (min)" }
    ],
    packaging: ["20Kg Bucket"],
    itemCode: "POT 4220",
    image: "/images/7_Close_up_of_a_drop_of_lubricant_oil.png",
    relatedProducts: ["gear-additive-ep-pot4230", "gear-additive-industrial-pot4210", "gear-ep-90"]
  },
  {
    id: "straight-cutting-additive",
    slug: "straight-cutting-additive",
    name: "Straight Cutting Oil Additive",
    category: "lubricant-additives",
    subcategory: "Cutting Oil Additive",
    description: "Premium grade straight cutting oil additive exclusively formulated using optimum grade chemicals and latest technology. Provides excellent lubrication for metalworking applications.",
    applications: [
      "Straight cutting operations",
      "Metalworking applications",
      "Machining processes"
    ],
    features: [
      "Optimum quality formulation",
      "Hygienically packed",
      "Excellent lubrication properties"
    ],
    benefits: [
      "Superior cutting performance",
      "Extended tool life",
      "Excellent surface finish"
    ],
    standards: [],
    packaging: ["20Kg Bucket"],
    itemCode: "neat cutting",
    image: "/images/5_What_is_Machinery_Lubrication_AT.png",
    relatedProducts: ["cutting-additive-pot9180", "antiwear-pot9120", "gear-additive-ep-pot4230"]
  },
  {
    id: "cutting-additive-pot9180",
    slug: "cutting-additive-pot9180",
    name: "Cutting Oil Additive POT 9180",
    category: "lubricant-additives",
    subcategory: "Cutting Oil Additive",
    description: "Premium grade cutting oil additive widely appreciated for high purity and long shelf life. Formulated using best chemicals and modern technology for metalworking fluid applications.",
    applications: [
      "Metal cutting operations",
      "Machining processes",
      "Metalworking fluid formulations"
    ],
    features: [
      "Free from dust",
      "Precise chemical properties",
      "Superior quality formulation"
    ],
    benefits: [
      "High purity for consistent performance",
      "Long shelf life",
      "Reliable metalworking performance"
    ],
    standards: [],
    packaging: ["20Kg Bucket"],
    itemCode: "POT 9180",
    image: "/images/5_What_is_Machinery_Lubrication_AT.png",
    relatedProducts: ["straight-cutting-additive", "antiwear-pot9120", "gear-additive-ep-pot4230"]
  },
  {
    id: "antiwear-pot9120",
    slug: "antiwear-pot9120",
    name: "Antiwear Additive POT 9120",
    category: "lubricant-additives",
    subcategory: "Antiwear Additive",
    description: "Superior quality metal-free antiwear additive suitable as an alternative to chlorinated paraffin for use in metalworking applications. Provides excellent surface finish and high viscosity index.",
    applications: [
      "Metalworking fluid formulations",
      "Cutting oil applications",
      "Industrial lubricant formulations",
      "Alternative to chlorinated paraffin"
    ],
    features: [
      "Metal-free antiwear chemistry",
      "High viscosity index",
      "Alternative to chlorinated paraffin",
      "Long shelf life"
    ],
    benefits: [
      "Enhanced surface finish of work piece",
      "High viscosity index for temperature stability",
      "Effective wear reduction",
      "Environmentally preferable alternative to chlorinated compounds"
    ],
    standards: [],
    packaging: ["20Kg Bucket"],
    itemCode: "POT 9120",
    image: "/images/7_Close_up_of_a_drop_of_lubricant_oil.png",
    relatedProducts: ["cutting-additive-pot9180", "straight-cutting-additive", "gear-additive-ep-pot4230"]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.category === categoryId);
}

export function getRelatedProducts(slugs: string[]): Product[] {
  return products.filter((p) => slugs.includes(p.slug));
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.subcategory.toLowerCase().includes(q) ||
      (p.grade && p.grade.toLowerCase().includes(q)) ||
      (p.apiRating && p.apiRating.toLowerCase().includes(q)) ||
      p.description.toLowerCase().includes(q) ||
      p.applications.some((a) => a.toLowerCase().includes(q))
  );
}
