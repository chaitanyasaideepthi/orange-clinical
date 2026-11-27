
// BLOOD TESTS
const bloodTests = [
  { name: "Complete Blood Count (CBC)", parameters: 24, time: "6 hours", oldPrice: 900, price: 699 },
  { name: "Blood Group & Rh Typing", time: "6 hours", oldPrice: 500, price: 350 },
  { name: "Hemoglobin Test", parameters: 1, time: "6 hours", oldPrice: 400, price: 299 },
  { name: "ESR Test", parameters: 1, time: "6 hours", oldPrice: 500, price: 349 },
  { name: "Peripheral Smear", time: "12 hours", oldPrice: 700, price: 550 },
  { name: "Platelet Count", parameters: 1, time: "6 hours", oldPrice: 400, price: 299 },
  { name: "Reticulocyte Count", parameters: 1, time: "12 hours", oldPrice: 600, price: 450 },
  { name: "Absolute Eosinophil Count", parameters: 1, time: "6 hours", oldPrice: 450, price: 350 },
  { name: "Complete Hemogram", parameters: 28, time: "6 hours", oldPrice: 1000, price: 799 },
  { name: "D-Dimer Test", parameters: 1, time: "12 hours", oldPrice: 1800, price: 1400 },
  { name: "Prothrombin Time (PT)", parameters: 2, time: "6 hours", oldPrice: 700, price: 550 },
  { name: "APTT Test", parameters: 1, time: "6 hours", oldPrice: 700, price: 550 },
];

// VITAMIN TESTS
const vitaminTests = [
  { name: "Vitamin B12", time: "6 hours", oldPrice: 1400, price: 990 },
  { name: "Vitamin D, Total", time: "6 hours", oldPrice: 1500, price: 990 },
  { name: "Iron Profile", parameters: 4, time: "6 hours", oldPrice: 2070, price: 1800 },
  { name: "Ferritin", parameters: 1, time: "12 hours", oldPrice: 1260, price: 990 },
  { name: "Magnesium (MG)", parameters: 1, time: "12 hours", oldPrice: 730, price: 640 },
  { name: "Vitamin D Gold (Vit D2, Vit D3 & Vit D Total)", parameters: 3, time: "Thu, 3 Dec", oldPrice: 3631, price: 2725 },
  { name: "Folic Acid (Vitamin B9)", parameters: 1, time: "Sat, 28 Nov", oldPrice: 900, price: 750 },
  { name: "Zinc", parameters: 1, time: "Thu, 2 Dec", oldPrice: 2599, price: 2300 },
  { name: "Vitamin B Complex Profile", parameters: 5, time: "Sat, 5 Dec", oldPrice: 8764, price: 8470 },
];

// HEART TESTS
const heartTests = [
  { name: "ECG Test", time: "6 hours", oldPrice: 800, price: 599 },
  { name: "Lipid Profile", parameters: 8, time: "6 hours", oldPrice: 1200, price: 899 },
  { name: "Troponin I", parameters: 1, time: "6 hours", oldPrice: 1500, price: 1199 },
  { name: "Troponin T", parameters: 1, time: "6 hours", oldPrice: 1500, price: 1200 },
  { name: "CPK Test", parameters: 1, time: "6 hours", oldPrice: 900, price: 699 },
  { name: "CK-MB Test", parameters: 1, time: "6 hours", oldPrice: 1000, price: 799 },
  { name: "Homocysteine Test", parameters: 1, time: "12 hours", oldPrice: 1800, price: 1399 },
  { name: "NT-proBNP Test", parameters: 1, time: "12 hours", oldPrice: 2500, price: 1999 },
  { name: "Apolipoprotein A1", parameters: 1, time: "12 hours", oldPrice: 1200, price: 950 },
  { name: "Apolipoprotein B", parameters: 1, time: "12 hours", oldPrice: 1300, price: 999 },
  { name: "Lipoprotein (a)", parameters: 1, time: "12 hours", oldPrice: 1500, price: 1199 },
  { name: "High Sensitivity CRP", parameters: 1, time: "6 hours", oldPrice: 1200, price: 899 },
  { name: "Calcium Test", parameters: 1, time: "6 hours", oldPrice: 500, price: 399 },
  { name: "Electrolytes Test", parameters: 3, time: "6 hours", oldPrice: 900, price: 699 },
  { name: "Magnesium Test", parameters: 1, time: "6 hours", oldPrice: 730, price: 640 },
];

// THYROID TESTS
const thyroidTests = [
  { name: "Thyroid Profile Total (T3, T4, TSH)", parameters: 3, time: "6 hours", oldPrice: 900, price: 699 },
  { name: "TSH Ultra Sensitive", parameters: 1, time: "6 hours", oldPrice: 500, price: 350 },
  { name: "T3 Total", parameters: 1, time: "6 hours", oldPrice: 450, price: 350 },
  { name: "T4 Total", parameters: 1, time: "6 hours", oldPrice: 450, price: 350 },
  { name: "Free T3", parameters: 1, time: "6 hours", oldPrice: 600, price: 450 },
  { name: "Free T4", parameters: 1, time: "6 hours", oldPrice: 600, price: 450 },
  { name: "Anti TPO Antibody", parameters: 1, time: "12 hours", oldPrice: 1500, price: 1199 },
  { name: "Thyroglobulin Antibody", parameters: 1, time: "12 hours", oldPrice: 1600, price: 1299 },
  { name: "Thyroid Profile Free", parameters: 3, time: "6 hours", oldPrice: 1200, price: 950 },
];

// LIVER TESTS
const liverTests = [
  { name: "Liver Function Test (LFT)", parameters: 12, time: "6 hours", oldPrice: 1200, price: 899 },
  { name: "Bilirubin Total", parameters: 1, time: "6 hours", oldPrice: 500, price: 399 },
  { name: "Bilirubin Direct", parameters: 1, time: "6 hours", oldPrice: 500, price: 399 },
  { name: "SGOT (AST)", parameters: 1, time: "6 hours", oldPrice: 600, price: 450 },
  { name: "SGPT (ALT)", parameters: 1, time: "6 hours", oldPrice: 600, price: 450 },
  { name: "Alkaline Phosphatase", parameters: 1, time: "6 hours", oldPrice: 600, price: 450 },
  { name: "GGT Test", parameters: 1, time: "6 hours", oldPrice: 700, price: 550 },
  { name: "Total Protein", parameters: 1, time: "6 hours", oldPrice: 500, price: 399 },
  { name: "Albumin Test", parameters: 1, time: "6 hours", oldPrice: 500, price: 399 },
  { name: "Globulin Test", parameters: 1, time: "6 hours", oldPrice: 500, price: 399 },
  { name: "A/G Ratio", parameters: 1, time: "6 hours", oldPrice: 500, price: 399 },
  { name: "Ammonia Test", parameters: 1, time: "12 hours", oldPrice: 1500, price: 1199 },
];

// INFLAMMATION TESTS
const inflammationTests = [
  { name: "C-Reactive Protein (CRP)", parameters: 1, time: "6 hours", oldPrice: 800, price: 599 },
  { name: "High Sensitivity CRP (hs-CRP)", parameters: 1, time: "6 hours", oldPrice: 1200, price: 899 },
  { name: "ESR (Erythrocyte Sedimentation Rate)", parameters: 1, time: "6 hours", oldPrice: 500, price: 349 },
  { name: "Complete Blood Count (CBC)", parameters: 24, time: "8 hours", oldPrice: 900, price: 699 },
  { name: "Rheumatoid Factor (RF)", parameters: 1, time: "8 hours", oldPrice: 700, price: 499 },
  { name: "Anti-CCP Antibody", parameters: 1, time: "24 hours", oldPrice: 1800, price: 1399 },
  { name: "Uric Acid Test", parameters: 1, time: "6 hours", oldPrice: 600, price: 399 },
  { name: "Ferritin Test", parameters: 1, time: "8 hours", oldPrice: 1000, price: 749 },
  { name: "Antinuclear Antibody (ANA)", parameters: 1, time: "24 hours", oldPrice: 1500, price: 1199 },
  { name: "Anti-DsDNA Antibody", parameters: 1, time: "24 hours", oldPrice: 1800, price: 1450 },
  { name: "Complement C3", parameters: 1, time: "24 hours", oldPrice: 950, price: 750 },
  { name: "Complement C4", parameters: 1, time: "24 hours", oldPrice: 950, price: 750 },
  { name: "Procalcitonin (PCT)", parameters: 1, time: "12 hours", oldPrice: 2200, price: 1799 },
  { name: "Interleukin-6 (IL-6)", parameters: 1, time: "24 hours", oldPrice: 2500, price: 1999 },
  { name: "ASO (Anti-Streptolysin O) Test", parameters: 1, time: "12 hours", oldPrice: 850, price: 650 },
];

// GUT TESTS
const gutTests = [
  { name: "Stool Complete Analysis", parameters: 11, time: "6 hours", oldPrice: 428, price: 300 },
  { name: "Stool Occult Blood", time: "6 hours", oldPrice: 213, price: 150 },
  { name: "Stool Culture", time: "Mon, 30 Nov", oldPrice: 1300, price: 1050 },
  { name: "Helicobacter pylori (H. pylori) Antigen, Stool", time: "Sat, 28 Nov", oldPrice: 3915, price: 3200 },
  { name: "Fecal Calprotectin, Quantitative", time: "Tue, 1 Dec", oldPrice: 5958, price: 3680 },
  { name: "Tissue Transglutaminase Antibody IgA", time: "Mon, 30 Nov", oldPrice: 1458, price: 1309 },
  { name: "Amylase", parameters: 1, time: "6 hours", oldPrice: 506, price: 450 },
  { name: "Lipase", parameters: 1, time: "6 hours", oldPrice: 793, price: 650 },
  { name: "Gut Microbiome Test", parameters: 1, time: "Fri, 1 Jan", oldPrice: 15000, price: 9999 },
];

// NUTRITION TESTS
const nutritionTests = [
  { name: "Iron Profile", parameters: 4, time: "6 hours", oldPrice: 2070, price: 1800 },
  { name: "Calcium Test", parameters: 1, time: "6 hours", oldPrice: 500, price: 399 },
  { name: "Zinc Test", parameters: 1, time: "12 hours", oldPrice: 2599, price: 2300 },
  { name: "Magnesium Test", parameters: 1, time: "12 hours", oldPrice: 730, price: 640 },
  { name: "Vitamin B12", time: "6 hours", oldPrice: 1400, price: 990 },
  { name: "Vitamin D, Total", time: "6 hours", oldPrice: 1500, price: 990 },
  { name: "Folic Acid (Vitamin B9)", parameters: 1, time: "12 hours", oldPrice: 900, price: 750 },
  { name: "Total Protein", parameters: 1, time: "6 hours", oldPrice: 500, price: 399 },
];

// RECOVERY TESTS
const recoveryTests = [
  { name: "Creatine Phosphokinase (CPK) - Total", time: "Sat, 28 Nov", oldPrice: 553, price: 380 },
  { name: "Lactate Dehydrogenase (LDH)", parameters: 1, time: "12 hours", oldPrice: 487, price: 350 },
  { name: "Myoglobin Level", time: "Wed, 02 Dec", oldPrice: 5414, price: 2550 },
  { name: "Electrolytes", parameters: 3, time: "6 hours", oldPrice: 670, price: 590 },
  { name: "Magnesium (Mg)", parameters: 1, time: "12 hours", oldPrice: 730, price: 640 },
  { name: "Potassium", time: "6 hours", oldPrice: 440, price: 390 },
  { name: "Calcium", parameters: 1, time: "6 hours", oldPrice: 360, price: 320 },
  { name: "Kidney Function Test with Electrolytes", parameters: 11, time: "6 hours", oldPrice: 1770, price: 1100 },
  { name: "Uric Acid", parameters: 1, time: "6 hours", oldPrice: 340, price: 240 },
  { name: "C-Reactive Protein (CRP)", time: "6 hours", oldPrice: 600, price: 530 },
  { name: "High Sensitive C-Reactive Protein (HSCRP)", parameters: 1, time: "12 hours", oldPrice: 996, price: 800 },
  { name: "Cortisol - AM", parameters: 1, time: "Sat, 28 Nov", oldPrice: 980, price: 680 },
];

// HORMONAL TESTS
const hormonalTests = [
  { name: "TSH", time: "6 hours", oldPrice: 390, price: 330 },
  { name: "Prolactin", parameters: 1, time: "12 hours", oldPrice: 820, price: 720 },
  { name: "Testosterone Total", parameters: 1, time: "12 hours", oldPrice: 970, price: 720 },
  { name: "Cortisol AM", parameters: 1, time: "Sat, 28 Nov", oldPrice: 980, price: 680 },
  { name: "AMH", parameters: 1, time: "12 hours", oldPrice: 3220, price: 1980 },
  { name: "FSH", parameters: 1, time: "12 hours", oldPrice: 615, price: 550 },
  { name: "Estradiol (E2)", parameters: 1, time: "12 hours", oldPrice: 1329, price: 1000 },
  { name: "Testosterone Free", parameters: 1, time: "Mon, 30 Nov", oldPrice: 2430, price: 1750 },
  { name: "LH", parameters: 1, time: "12 hours", oldPrice: 613, price: 530 },
  { name: "LH:FSH Ratio", parameters: 2, time: "12 hours", oldPrice: 1080, price: 800 },
  { name: "Progesterone", time: "12 hours", oldPrice: 675, price: 600 },
  { name: "DHEAS", time: "Sat, 28 Nov", oldPrice: 1186, price: 1000 },
];

// EXPORT ALL TEST DATA
export const testData = {
  Blood: bloodTests,
  Vitamins: vitaminTests,
  Heart: heartTests,
  Thyroid: thyroidTests,
  Liver: liverTests,
  Inflammation: inflammationTests,
  Gut: gutTests,
  Nutrition: nutritionTests,
  Recovery: recoveryTests,
  Hormonal: hormonalTests,
};
