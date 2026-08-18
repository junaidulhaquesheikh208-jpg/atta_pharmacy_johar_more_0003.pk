"use strict";
const WHATSAPP_NUMBER = '923262927018';
const GRADIENTS = [
    'linear-gradient(135deg, #0e9f6e, #065f46)',
    'linear-gradient(135deg, #f59e0b, #d97706)',
    'linear-gradient(135deg, #38bdf8, #2563eb)',
    'linear-gradient(135deg, #f472b6, #db2777)',
    'linear-gradient(135deg, #a78bfa, #7c3aed)',
    'linear-gradient(135deg, #34d399, #0e9f6e)',
    'linear-gradient(135deg, #fb923c, #ea580c)',
    'linear-gradient(135deg, #22d3ee, #0891b2)',
];
const PRODUCTS = [
    { id: 'leflox-250', title: 'Leflox 250mg', desc: 'Leflox 250mg (Levofloxacin) — genuine antibiotic medicine, fresh stock.', tag: 'Medicine', image: 'images/leflox_250.jfif', price: 350 },
    { id: 'leflox-500', title: 'Leflox 500mg', desc: 'Leflox 500mg (Levofloxacin) — genuine antibiotic medicine, fresh stock.', tag: 'Medicine', image: 'images/leflox_500.jfif', price: 600 },
    { id: 'ascard-plus', title: 'Ascard Plus', desc: 'Ascard Plus (Aspirin 75mg + Clopidogrel 75mg) — genuine blood thinner medicine, fresh stock.', tag: 'Medicine', image: 'images/ascard-plus-600x600-1.jpg', price: 380 },
    { id: 'dictrin-5', title: 'Dictrin Tab 5mg (10s)', desc: 'Dictrin Tablet 5mg — 10 tablets strip, genuine medicine with quality assurance.', tag: 'Medicine', image: 'images/dictrin-tab-5mg-10s.jpg', price: 300 },
    { id: 'velosef-250', title: 'Velosef Cap 250mg', desc: 'Velosef Capsule 250mg — genuine antibiotic medicine, fresh stock.', tag: 'Medicine', image: 'images/velosef-cap-250mg-3x4.jpg', price: 350 },
    { id: 'werdex-30', title: 'Werdex 30mg Capsule', desc: 'Werdex 30mg Capsule — genuine medicine, fresh stock with quality assurance.', tag: 'Medicine', image: 'images/Werdex 30mg Capsule.webp', price: 420 },
    { id: 'werdex-60', title: 'Werdex 60mg Capsule', desc: 'Werdex 60mg Capsule — genuine medicine, fresh stock with quality assurance.', tag: 'Medicine', image: 'images/werdex_60.jfif', price: 550 },
    { id: 'velosef-500', title: 'Velosef 500mg', desc: 'Velosef 500mg — genuine antibiotic medicine, fresh stock.', tag: 'Medicine', image: 'images/velosef_500.webp', price: 600 },
    { id: 'ascard-75', title: 'Ascard 75mg', desc: 'Ascard 75mg (Aspirin) — genuine blood thinner medicine, fresh stock.', tag: 'Medicine', image: 'images/ascard_75.jfif', price: 250 },
    { id: 'brufen-600', title: 'Brufen 600mg', desc: 'Brufen 600mg (Ibuprofen) — genuine pain relief medicine, fresh stock.', tag: 'Medicine', image: 'images/brufen_600.jfif', price: 320 },
    { id: 'brufen-duo', title: 'Brufen Duo', desc: 'Brufen Duo — genuine pain relief medicine, fresh stock.', tag: 'Medicine', image: 'images/brufen_duo.jfif', price: 400 },
    { id: 'duphaston', title: 'Duphaston', desc: 'Duphaston (Dydrogesterone) — genuine medicine, fresh stock with quality assurance.', tag: 'Medicine', image: 'images/duphaston.jfif', price: 850 },
    { id: 'duphaston-syrup', title: 'Duphaston Syrup', desc: 'Duphaston Syrup — genuine medicine, fresh stock with quality assurance.', tag: 'Medicine', image: 'images/duphaston_syrup.jfif', price: 450 },
    { id: 'ethrocyin-250', title: 'Ethrocyin 250mg', desc: 'Ethrocyin 250mg (Erythromycin) — genuine antibiotic medicine, fresh stock.', tag: 'Medicine', image: 'images/ethrocyin_250.png', price: 350 },
    { id: 'ethrocyin-500', title: 'Ethrocyin 500mg', desc: 'Ethrocyin 500mg (Erythromycin) — genuine antibiotic medicine, fresh stock.', tag: 'Medicine', image: 'images/ethrocyin_500.jfif', price: 600 },
    { id: 'softin-f-120', title: "Softin F 120mg Tablet (10s)", desc: "Softin F 120mg (Flurbiprofen) — genuine pain relief medicine, fresh stock.", tag: 'Medicine', image: "images/Softin F 120mg Tablet 10's.webp", price: 200 },
    { id: 'softin-l-10', title: 'Softin L 10mg Tablet (10s)', desc: 'Softin L 10mg (Loratadine) — genuine antihistamine medicine, fresh stock.', tag: 'Medicine', image: 'images/SOFTIN-TABLET-LORATADINE-10mg-PACK-OF-10-COATED-TABLETS.webp', price: 150 },
    { id: 'softin-l-10-alt', title: 'Softin L 10mg Tablet (Alt)', desc: 'Softin L 10mg (Loratadine) — genuine antihistamine medicine, fresh stock.', tag: 'Medicine', image: 'images/SOFTIN-TABLET-LORATADINE-10mg-PACK-OF-10-COATED_0001-TABLETS.webp', price: 150 },
    { id: 'syngab-25', title: 'Syngab 25mg', desc: 'Syngab 25mg (Pregabalin) — genuine medicine, fresh stock.', tag: 'Medicine', image: 'images/syngab_25mg.jpg', price: 220 },
    { id: 'syngab-50', title: 'Syngab 50mg Capsule', desc: 'Syngab 50mg Capsule (Pregabalin) — genuine medicine, fresh stock.', tag: 'Medicine', image: 'images/Syngab-50mg-Cap.jpg', price: 380 },
    { id: 'syngab-75', title: 'Syngab 75mg Capsules', desc: 'Syngab 75mg Capsules (Pregabalin) — genuine medicine, fresh stock.', tag: 'Medicine', image: 'images/Syngab 75mg Capsules.webp', price: 480 },
    { id: 'syngab-100', title: 'Syngab 100mg', desc: 'Syngab 100mg (Pregabalin) — genuine medicine, fresh stock.', tag: 'Medicine', image: 'images/syngab_100mg.jpg', price: 650 },
    { id: 'provas-n-forte', title: 'Provas N Forte Tablets (20s)', desc: 'Provas N Forte Tablets — 20 tablets strip, genuine medicine with quality assurance.', tag: 'Medicine', image: 'images/tablets provas n forte 20s.webp', price: 500 },
    { id: 'provas-n', title: 'Provas N', desc: 'Provas N — genuine medicine, fresh stock with quality assurance.', tag: 'Medicine', image: 'images/Provas_N.jfif', price: 380 },
    { id: 'provas-n-forte-20s', title: 'Provas N Forte (20s)', desc: 'Provas N Forte Tablets 20s — genuine medicine, fresh stock.', tag: 'Medicine', image: 'images/PROVAS_N_FORTE_(20S)__1.webp', price: 500 },
    { id: 'xobix-7.5', title: 'Xobix 7.5mg Tablet', desc: 'Xobix 7.5mg Tablet (Meloxicam) — genuine medicine, fresh stock.', tag: 'Medicine', image: 'images/Xobix-7.5mg-Tab.jpg', price: 300 },
    { id: 'xobix-15', title: 'Xobix 15mg Tablet', desc: 'Xobix 15mg Tablet (Meloxicam) — genuine medicine, fresh stock.', tag: 'Medicine', image: 'images/Xobix-15mg-Tab.jpg', price: 350 },
    { id: 'alkeris-100', title: 'Alkeris 100mg Tab', desc: 'Alkeris 100mg Tablet — genuine medicine, fresh stock with quality assurance.', tag: 'Medicine', image: 'images/Alkeris-100mg-Tab-300x300.jpg', price: 200 },
    { id: 'alkeris-sr', title: 'Alkeris SR Aceclofenac 200mg (30ct)', desc: 'Alkeris SR Aceclofenac 200mg Tablets 30ct (Sami Pharma) — genuine medicine, fresh stock.', tag: 'Medicine', image: 'images/Alkeris-SR_Aceclofenac_200mg_30Ct-SamiPharma.webp', price: 500 },
    { id: 'myteka-powder', title: 'Myteka Powder Sachet 4mg (14s)', desc: 'Myteka Powder Sachet 4mg — 14 sachets, genuine medicine with quality assurance.', tag: 'Medicine', image: 'images/myteka-powder-sachet-4mg-14-sasthmapowder-497.jpg', price: 300 },
    { id: 'myteka-sachets', title: 'Myteka Sachets 4mg', desc: 'Myteka Sachets 4mg — genuine medicine, fresh stock with quality assurance.', tag: 'Medicine', image: 'images/myteka-sachets-4mg-84613__3.webp', price: 280 },
    { id: 'myteka-sachets-v2', title: 'Myteka Sachets 4mg (Alt)', desc: 'Myteka Sachets 4mg — genuine medicine, fresh stock with quality assurance.', tag: 'Medicine', image: 'images/myteka-sachets-4mg-84613_0001__3.webp', price: 280 },
    { id: 'peridone-tabs', title: 'Peridone Tablets', desc: 'Peridone Tablets — genuine medicine, fresh stock with quality assurance.', tag: 'Medicine', image: 'images/Peridone_tablets.jfif', price: 180 },
    { id: 'peridone-susp', title: 'Peridone Suspension', desc: 'Peridone Suspension — genuine medicine, fresh stock with quality assurance.', tag: 'Medicine', image: 'images/Peridone_suspension.jfif', price: 250 },
    { id: 'teph-20', title: 'Teph 20mg', desc: 'Teph 20mg — genuine medicine, fresh stock with quality assurance.', tag: 'Medicine', image: 'images/Teph_20.jfif', price: 200 },
    { id: 'teph-40', title: 'Teph 40mg', desc: 'Teph 40mg — genuine medicine, fresh stock with quality assurance.', tag: 'Medicine', image: 'images/Teph_40.jfif', price: 300 },
    { id: 'teph-inj-40', title: 'Teph Injection 40mg', desc: 'Teph Injection 40mg — genuine medicine, fresh stock with quality assurance.', tag: 'Medicine', image: 'images/TEPH_INJ_40MG__1.webp', price: 450 },
    { id: 'teph-insta-sachets', title: 'Teph Insta 40mg Sachets', desc: 'Teph Insta 40mg Sachets — genuine medicine, fresh stock with quality assurance.', tag: 'Medicine', image: 'images/TEPH_INSTA_40MG_SACHETS__1.webp', price: 380 },
    { id: 'tephinsta-sachet', title: 'TephInsta Omeprazole Sachet 20mg (10ct)', desc: 'TephInsta Omeprazole Sodium Bicarbonate 20mg Sachet 10ct (Sami Pharma) — genuine medicine, fresh stock.', tag: 'Medicine', image: 'images/TEpHInsta_Omeprazole_SodiumBicarbonate_20mgSachet_10Ct-SamiPharma.webp', price: 350 },
    { id: 'tercica-family', title: 'Tercica Family', desc: 'Tercica Family pack — genuine medicine, fresh stock with quality assurance.', tag: 'Medicine', image: 'images/Tercica-Family.jpg', price: 400 },
    { id: 'tercica-120ml', title: 'Tercica Suspension 120ml', desc: 'Tercica 120ml Suspension — genuine medicine, fresh stock with quality assurance.', tag: 'Medicine', image: 'images/Tercica120MlSuspension_1200x.webp', price: 350 },
    { id: 'tercica-90ml', title: 'Tercica Suspension 90ml', desc: 'Tercica 90ml Suspension — genuine medicine, fresh stock with quality assurance.', tag: 'Medicine', image: 'images/Tercica90MlSuspension_1024x1024.webp', price: 300 },
    { id: 'recada-sachet', title: 'Recada 10mg Sachet', desc: 'Recada 10mg Sachet — genuine medicine, fresh stock with quality assurance.', tag: 'Medicine', image: 'images/Recada10mgSachet_606x.webp', price: 320 },
    { id: 'recada-sachet-v1', title: 'Recada 10mg Sachet (Pack)', desc: 'Recada 10mg Sachet pack — genuine medicine, fresh stock with quality assurance.', tag: 'Medicine', image: 'images/Recada10mgSachet_0001_606x.webp', price: 320 },
    { id: 'recada-sachet-v2', title: 'Recada 10mg Sachet (Alt)', desc: 'Recada 10mg Sachet — genuine medicine, fresh stock with quality assurance.', tag: 'Medicine', image: 'images/Recada10mgSachet_0002_606x.webp', price: 320 },
    { id: 'recada-sachet-v3', title: 'Recada 10mg Sachet (View)', desc: 'Recada 10mg Sachet — genuine medicine, fresh stock with quality assurance.', tag: 'Medicine', image: 'images/Recada10mgSachet_0003_606x.webp', price: 320 },
    { id: 'prescription', title: 'Prescription Medicines', desc: 'Genuine prescription & non-prescription medicines with quality assurance.', tag: 'Genuine', emoji: '💊' },
    { id: 'cosmetics', title: 'Cosmetics & Personal Care', desc: 'Cosmetic and personal care items from trusted brands.', tag: 'Personal Care', emoji: '🧴' },
    { id: 'beverages', title: 'Beverages & Essentials', desc: 'Beverage and daily essential products for your home.', tag: 'Daily Essentials', emoji: '🥤' },
    { id: 'bona-papa', title: 'Bona Papa Pampers', desc: 'Bona Papa Pampers & baby wipes — soft, safe and absorbent.', tag: 'Baby Care', image: 'images/bona_papa_0001.webp', price: 450 },
    { id: 'bona-papa-stock', title: 'Bona Papa Pampers (Stock)', desc: 'Bona Papa Pampers fresh stock — soft, safe and absorbent.', tag: 'Baby Care', image: 'images/bona_papa_stock_0001.webp', price: 450 },
    { id: 'leo-pampers', title: 'Leo Pampers', desc: 'Premium Leo Pampers for total comfort and protection.', tag: 'Baby Care', emoji: '✨' },
    { id: 'baby-care', title: 'Baby Care Essentials', desc: 'Complete baby care range including wipes, lotion and more.', tag: 'Baby Care', emoji: '🍼' },
    { id: 'healthcare', title: 'General Healthcare', desc: 'General healthcare products at wholesale prices.', tag: 'Healthcare', emoji: '🧺' },
    { id: 'wholesale', title: 'Wholesale & Bulk Orders', desc: 'Special offers for retailers and customers with bulk discounts.', tag: 'Wholesale', emoji: '🚚' },
];
const WHY_ITEMS = [
    { icon: '✔', title: '100% Genuine & Fresh', desc: 'Every product is genuine, fresh and quality checked.' },
    { icon: '✔', title: 'Wholesale Prices', desc: 'Bulk order discounts and best market rates.' },
    { icon: '✔', title: 'Special Offers', desc: 'Exclusive deals for retailers and customers.' },
    { icon: '✔', title: 'Fast Delivery', desc: 'Fast & reliable home delivery across Karachi.' },
    { icon: '✔', title: 'Friendly Service', desc: 'Friendly and professional customer service.' },
];
const CATEGORIES = ['Medicines', 'Baby Care', 'Cosmetics', 'Beverages', 'Delivery'];
const POSTS = [
    {
        id: 1,
        title: 'Bona Papa Pampers Stock',
        category: 'Baby Care',
        emoji: '👶',
        gradient: GRADIENTS[0],
        height: 330,
        description: 'Fresh stock of Bona Papa Pampers & baby wipes, ready for delivery across Karachi.',
        likes: 124,
        comments: 18,
        image: 'images/bona_papa_stock_0001.webp',
        price: 450,
    },
    {
        id: 2,
        title: 'Leflox 250mg — Fresh Stock',
        category: 'Medicines',
        emoji: '💊',
        gradient: GRADIENTS[2],
        height: 240,
        description: 'Fresh shipment of genuine Leflox 250mg (Levofloxacin) with full quality assurance.',
        likes: 96,
        comments: 11,
        image: 'images/leflox_250.jfif',
        price: 350,
    },
    {
        id: 3,
        title: 'Cosmetic Care Collection',
        category: 'Cosmetics',
        emoji: '💄',
        gradient: GRADIENTS[3],
        height: 300,
        description: 'Premium cosmetics and personal care items from trusted brands at wholesale rates.',
        likes: 201,
        comments: 27,
    },
    {
        id: 4,
        title: 'Beverage Essentials',
        category: 'Beverages',
        emoji: '🥤',
        gradient: GRADIENTS[1],
        height: 220,
        description: 'Beverage and daily essentials now available at extra percentage savings.',
        likes: 78,
        comments: 9,
    },
    {
        id: 5,
        title: 'Home Delivery Across Karachi',
        category: 'Delivery',
        emoji: '🚚',
        gradient: GRADIENTS[4],
        height: 350,
        description: 'Fast and reliable home delivery across all areas of Karachi, Pakistan.',
        likes: 315,
        comments: 42,
    },
    {
        id: 6,
        title: 'Leo Pampers Comfort',
        category: 'Baby Care',
        emoji: '✨',
        gradient: GRADIENTS[5],
        height: 260,
        description: 'Leo Pampers — premium comfort and all-day protection for your little one.',
        likes: 154,
        comments: 21,
        image: 'images/bona_papa_0001.webp',
        price: 450,
    },
    {
        id: 7,
        title: 'Pharmacy Shelves Restock',
        category: 'Medicines',
        emoji: '🏪',
        gradient: GRADIENTS[6],
        height: 290,
        description: 'Our shelves are fully restocked with fresh, quality-checked healthcare products.',
        likes: 88,
        comments: 7,
    },
    {
        id: 8,
        title: 'Personal Care Essentials',
        category: 'Cosmetics',
        emoji: '🧴',
        gradient: GRADIENTS[7],
        height: 230,
        description: 'From lotions to sanitizers — everyday personal care at the best prices.',
        likes: 67,
        comments: 5,
    },
    {
        id: 9,
        title: 'Juice & Drinks For Home',
        category: 'Beverages',
        emoji: '🧃',
        gradient: GRADIENTS[2],
        height: 270,
        description: 'Healthy beverages and drinks for the whole family, delivered to your door.',
        likes: 112,
        comments: 14,
    },
    {
        id: 10,
        title: 'Baby Wipes Bulk Order',
        category: 'Baby Care',
        emoji: '🧻',
        gradient: GRADIENTS[0],
        height: 250,
        description: 'Bulk orders for baby wipes with special wholesale discounts for retailers.',
        likes: 143,
        comments: 19,
    },
    {
        id: 11,
        title: 'Leflox 500mg — Wholesale Deals',
        category: 'Medicines',
        emoji: '📦',
        gradient: GRADIENTS[5],
        height: 320,
        description: 'Extra percentage savings on genuine Leflox 500mg (Levofloxacin) for bulk orders.',
        likes: 175,
        comments: 23,
        image: 'images/leflox_500.jfif',
        price: 600,
    },
    {
        id: 12,
        title: 'On The Road – Karachi',
        category: 'Delivery',
        emoji: '🛵',
        gradient: GRADIENTS[1],
        height: 240,
        description: 'Our delivery team out on the road, serving customers all over Karachi.',
        likes: 256,
        comments: 31,
    },
    {
        id: 13,
        title: 'Ascard Plus – Fresh Stock',
        category: 'Medicines',
        emoji: '💊',
        gradient: GRADIENTS[2],
        height: 280,
        description: 'Fresh stock of genuine Ascard Plus (Aspirin + Clopidogrel) with quality assurance.',
        likes: 89,
        comments: 8,
        image: 'images/ascard-plus-600x600-1.jpg',
        price: 380,
    },
    {
        id: 14,
        title: 'Dictrin Tab 5mg (10s)',
        category: 'Medicines',
        emoji: '💊',
        gradient: GRADIENTS[4],
        height: 250,
        description: 'Genuine Dictrin Tablet 5mg, 10 tablet strip, fresh stock.',
        likes: 71,
        comments: 6,
        image: 'images/dictrin-tab-5mg-10s.jpg',
        price: 300,
    },
    {
        id: 15,
        title: 'Velosef Cap 250mg',
        category: 'Medicines',
        emoji: '💊',
        gradient: GRADIENTS[6],
        height: 300,
        description: 'Genuine Velosef Capsule 250mg — fresh antibiotic stock.',
        likes: 96,
        comments: 10,
        image: 'images/velosef-cap-250mg-3x4.jpg',
        price: 350,
    },
    {
        id: 16,
        title: 'Werdex 30mg Capsule',
        category: 'Medicines',
        emoji: '💊',
        gradient: GRADIENTS[3],
        height: 260,
        description: 'Genuine Werdex 30mg Capsule — fresh stock with quality assurance.',
        likes: 84,
        comments: 7,
        image: 'images/Werdex 30mg Capsule.webp',
        price: 420,
    },
    {
        id: 17,
        title: 'Fresh Medicine Stock',
        category: 'Medicines',
        emoji: '📦',
        gradient: GRADIENTS[5],
        height: 270,
        description: 'Freshly stocked genuine medicines, ready for order and delivery.',
        likes: 63,
        comments: 5,
        image: 'images/ethrocyin_500.jfif',
        price: 600,
    },
    {
        id: 18,
        title: 'Prescription Medicine',
        category: 'Medicines',
        emoji: '📋',
        gradient: GRADIENTS[7],
        height: 250,
        description: 'Genuine prescription medicine in fresh stock. Order on WhatsApp.',
        likes: 57,
        comments: 4,
        image: 'images/ethrocyin_250.png',
        price: 350,
    },
    {
        id: 19,
        title: 'Healthcare Product',
        category: 'Medicines',
        emoji: '🧺',
        gradient: GRADIENTS[0],
        height: 290,
        description: 'Quality healthcare product, fresh stock available at wholesale rates.',
        likes: 49,
        comments: 3,
        image: 'images/tablets provas n forte 20s.webp',
        price: 500,
    },
    {
        id: 20,
        title: 'Werdex 60mg Capsule',
        category: 'Medicines',
        emoji: '💊',
        gradient: GRADIENTS[2],
        height: 260,
        description: 'Genuine Werdex 60mg Capsule — fresh stock with quality assurance.',
        likes: 77,
        comments: 9,
        image: 'images/werdex_60.jfif',
        price: 550,
    },
    {
        id: 21,
        title: 'Velosef 500mg',
        category: 'Medicines',
        emoji: '💊',
        gradient: GRADIENTS[4],
        height: 270,
        description: 'Genuine Velosef 500mg — fresh antibiotic stock.',
        likes: 82,
        comments: 8,
        image: 'images/velosef_500.webp',
        price: 600,
    },
    {
        id: 22,
        title: 'Ascard 75mg',
        category: 'Medicines',
        emoji: '💊',
        gradient: GRADIENTS[6],
        height: 250,
        description: 'Genuine Ascard 75mg (Aspirin) — fresh stock with quality assurance.',
        likes: 61,
        comments: 5,
        image: 'images/ascard_75.jfif',
        price: 250,
    },
    {
        id: 23,
        title: 'Brufen 600mg',
        category: 'Medicines',
        emoji: '💊',
        gradient: GRADIENTS[1],
        height: 280,
        description: 'Genuine Brufen 600mg (Ibuprofen) — fresh pain relief stock.',
        likes: 74,
        comments: 7,
        image: 'images/brufen_600.jfif',
        price: 320,
    },
    {
        id: 24,
        title: 'Brufen Duo',
        category: 'Medicines',
        emoji: '💊',
        gradient: GRADIENTS[3],
        height: 240,
        description: 'Genuine Brufen Duo — fresh stock, effective pain relief.',
        likes: 66,
        comments: 6,
        image: 'images/brufen_duo.jfif',
        price: 400,
    },
    {
        id: 25,
        title: 'Duphaston',
        category: 'Medicines',
        emoji: '💊',
        gradient: GRADIENTS[5],
        height: 290,
        description: 'Genuine Duphaston (Dydrogesterone) — fresh stock with quality assurance.',
        likes: 93,
        comments: 11,
        image: 'images/duphaston.jfif',
        price: 850,
    },
    {
        id: 26,
        title: 'Duphaston Syrup',
        category: 'Medicines',
        emoji: '🍯',
        gradient: GRADIENTS[0],
        height: 250,
        description: 'Genuine Duphaston Syrup — fresh stock with quality assurance.',
        likes: 58,
        comments: 4,
        image: 'images/duphaston_syrup.jfif',
        price: 450,
    },
    {
        id: 27,
        title: 'Syngab 25mg',
        category: 'Medicines',
        emoji: '💊',
        gradient: GRADIENTS[7],
        height: 240,
        description: 'Genuine Syngab 25mg (Pregabalin) — fresh stock with quality assurance.',
        likes: 54,
        comments: 3,
        image: 'images/syngab_25mg.jpg',
        price: 220,
    },
    {
        id: 28,
        title: 'Syngab 50mg Capsule',
        category: 'Medicines',
        emoji: '💊',
        gradient: GRADIENTS[2],
        height: 260,
        description: 'Genuine Syngab 50mg Capsule (Pregabalin) — fresh stock.',
        likes: 69,
        comments: 6,
        image: 'images/Syngab-50mg-Cap.jpg',
        price: 380,
    },
    {
        id: 29,
        title: 'Syngab 75mg Capsules',
        category: 'Medicines',
        emoji: '💊',
        gradient: GRADIENTS[4],
        height: 270,
        description: 'Genuine Syngab 75mg Capsules (Pregabalin) — fresh stock.',
        likes: 76,
        comments: 8,
        image: 'images/Syngab 75mg Capsules.webp',
        price: 480,
    },
    {
        id: 30,
        title: 'Syngab 100mg',
        category: 'Medicines',
        emoji: '💊',
        gradient: GRADIENTS[6],
        height: 255,
        description: 'Genuine Syngab 100mg (Pregabalin) — fresh stock with quality assurance.',
        likes: 71,
        comments: 7,
        image: 'images/syngab_100mg.jpg',
        price: 650,
    },
    {
        id: 31,
        title: 'Bona Papa Pampers',
        category: 'Baby Care',
        emoji: '👶',
        gradient: GRADIENTS[0],
        height: 300,
        description: 'Bona Papa Pampers & baby wipes — soft, safe and absorbent.',
        likes: 168,
        comments: 22,
        image: 'images/bona_papa_0001.webp',
        price: 450,
    },
    {
        id: 32,
        title: 'Provas N',
        category: 'Medicines',
        emoji: '💊',
        gradient: GRADIENTS[3],
        height: 250,
        description: 'Genuine Provas N — fresh stock with quality assurance.',
        likes: 62,
        comments: 5,
        image: 'images/Provas_N.jfif',
        price: 380,
    },
    {
        id: 33,
        title: 'Provas N Forte (20s)',
        category: 'Medicines',
        emoji: '💊',
        gradient: GRADIENTS[5],
        height: 270,
        description: 'Genuine Provas N Forte Tablets 20s — fresh stock.',
        likes: 70,
        comments: 7,
        image: 'images/PROVAS_N_FORTE_(20S)__1.webp',
        price: 500,
    },
    {
        id: 34,
        title: 'Xobix 7.5mg Tablet',
        category: 'Medicines',
        emoji: '💊',
        gradient: GRADIENTS[1],
        height: 255,
        description: 'Genuine Xobix 7.5mg Tablet (Meloxicam) — fresh stock.',
        likes: 59,
        comments: 4,
        image: 'images/Xobix-7.5mg-Tab.jpg',
        price: 300,
    },
    {
        id: 35,
        title: 'Xobix 15mg Tablet',
        category: 'Medicines',
        emoji: '💊',
        gradient: GRADIENTS[7],
        height: 260,
        description: 'Genuine Xobix 15mg Tablet (Meloxicam) — fresh stock.',
        likes: 55,
        comments: 4,
        image: 'images/Xobix-15mg-Tab.jpg',
        price: 350,
    },
    {
        id: 36,
        title: 'Softin F 120mg Tablet (10s)',
        category: 'Medicines',
        emoji: '💊',
        gradient: GRADIENTS[6],
        height: 270,
        description: 'Genuine Softin F 120mg (Flurbiprofen) — fresh pain relief stock.',
        likes: 52,
        comments: 4,
        image: "images/Softin F 120mg Tablet 10's.webp",
        price: 200,
    },
    {
        id: 37,
        title: 'Softin L 10mg Tablets',
        category: 'Medicines',
        emoji: '💊',
        gradient: GRADIENTS[3],
        height: 250,
        description: 'Genuine Softin L 10mg (Loratadine) — fresh antihistamine stock.',
        likes: 48,
        comments: 3,
        image: 'images/SOFTIN-TABLET-LORATADINE-10mg-PACK-OF-10-COATED-TABLETS.webp',
        price: 150,
    },
];
function el(tag, className) {
    const node = document.createElement(tag);
    if (className)
        node.className = className;
    return node;
}
function setInnerHTML(node, html) {
    node.innerHTML = html;
}
function formatPrice(n) {
    return 'Rs. ' + n.toLocaleString('en-PK');
}
function waLink(title) {
    const msg = title
        ? `*Atta Pharmacy*\n\nHi! I would like to order: ${title}\nPlease share price and availability.`
        : `*Atta Pharmacy*\n\nHi! I would like to place an order. Please contact me.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
let cart = loadCart();
function loadCart() {
    try {
        const raw = localStorage.getItem('atta-cart');
        return raw ? JSON.parse(raw) : [];
    }
    catch {
        return [];
    }
}
function saveCart() {
    localStorage.setItem('atta-cart', JSON.stringify(cart));
}
function cartCount() {
    return cart.reduce((s, l) => s + l.qty, 0);
}
function cartTotal() {
    return cart.reduce((s, l) => s + l.price * l.qty, 0);
}
function addToCart(line, source) {
    const existing = cart.find((l) => l.id === line.id);
    if (existing)
        existing.qty += 1;
    else
        cart.push({ ...line, qty: 1 });
    saveCart();
    renderCart();
    bumpBadge();
    flyToCart(source);
    showToast(`<strong>${line.title}</strong> added to cart`);
}
function changeQty(id, delta) {
    const line = cart.find((l) => l.id === id);
    if (!line)
        return;
    line.qty += delta;
    if (line.qty <= 0)
        cart = cart.filter((l) => l.id !== id);
    saveCart();
    renderCart();
}
function removeLine(id) {
    cart = cart.filter((l) => l.id !== id);
    saveCart();
    renderCart();
}
function renderCart() {
    const badge = document.getElementById('cartBadge');
    if (badge)
        badge.textContent = String(cartCount());
    const totalEl = document.getElementById('cartTotal');
    if (totalEl)
        totalEl.textContent = formatPrice(cartTotal());
    const list = document.getElementById('cartItems');
    if (!list)
        return;
    if (cart.length === 0) {
        list.innerHTML = `<p class="cart-empty">Your cart is empty.<br>Add products to place an order.</p>`;
        return;
    }
    list.innerHTML = cart
        .map((l) => `
    <div class="cart-item">
      ${l.image ? `<img src="${l.image}" alt="${l.title}" loading="lazy" />` : `<span class="cart-ico">💊</span>`}
      <div class="cart-info">
        <strong>${l.title}</strong>
        <span class="cart-price">${formatPrice(l.price)}</span>
        <div class="cart-qty">
          <button class="qty-btn" data-action="dec" data-id="${l.id}" aria-label="Decrease">−</button>
          <span>${l.qty}</span>
          <button class="qty-btn" data-action="inc" data-id="${l.id}" aria-label="Increase">+</button>
        </div>
      </div>
      <button class="cart-remove" data-action="remove" data-id="${l.id}" aria-label="Remove">✕</button>
    </div>`)
        .join('');
}
function checkoutWhatsApp() {
    if (cart.length === 0)
        return;
    const lines = cart.map((l) => `• ${l.title} × ${l.qty} — ${formatPrice(l.price * l.qty)}`);
    const msg = `*New Order — Atta Pharmacy*\n\n` +
        lines.join('\n') +
        `\n\n*Total: ${formatPrice(cartTotal())}*\n\nPlease confirm my order. Thank you!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}
function openCart() {
    document.getElementById('cartOverlay')?.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeCart() {
    document.getElementById('cartOverlay')?.classList.remove('open');
    document.body.style.overflow = '';
}
function renderProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid)
        return;
    PRODUCTS.forEach((p, i) => {
        const card = el('div', 'product-card reveal');
        card.style.setProperty('--d', `${(i % 4) * 70}ms`);
        const media = p.image
            ? `<img src="${p.image}" alt="${p.title}" loading="lazy" class="product-img" />`
            : `<div class="product-ico">${p.emoji}</div>`;
        const price = p.price ? `<span class="price">${formatPrice(p.price)}</span>` : '';
        const action = p.price
            ? `<button class="btn btn-cart" data-add="${p.id}">Add to Cart</button>`
            : `<a class="btn btn-cart btn-wa" href="${waLink(p.title)}" target="_blank" rel="noopener">Order on WhatsApp</a>`;
        card.innerHTML = `
      <div class="product-media">${media}</div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="product-foot">
        <span class="tag">${p.tag}</span>
        ${price}
      </div>
      ${action}
    `;
        grid.appendChild(card);
    });
}
function renderWhy() {
    const grid = document.getElementById('whyGrid');
    if (!grid)
        return;
    WHY_ITEMS.forEach((w, i) => {
        const item = el('div', 'why-item reveal');
        item.style.transitionDelay = `${(i % 3) * 90}ms`;
        item.innerHTML = `
      <span class="why-check">${w.icon}</span>
      <div><strong>${w.title}</strong><span>${w.desc}</span></div>
    `;
        grid.appendChild(item);
    });
}
function createCard(post) {
    const card = el('article', 'gcard reveal');
    card.dataset.category = post.category;
    card.dataset.id = String(post.id);
    card.style.transitionDelay = `${(post.id % 4) * 80}ms`;
    const media = post.image
        ? `<img src="${post.image}" alt="${post.title}" loading="lazy" class="gcard-img" />`
        : `<span class="gcard-emoji" aria-hidden="true">${post.emoji}</span>`;
    const addBtn = post.price
        ? `<button class="btn btn-cart btn-sm" data-add="g${post.id}" data-title="${post.title}" data-price="${post.price}" data-image="${post.image || ''}">Add to Cart</button>`
        : '';
    card.style.background = post.gradient;
    card.innerHTML = `
    <div class="gcard-media" style="background:${post.gradient};min-height:${post.height}px;">
      <span class="gcard-badge">${post.category}</span>
      ${media}
    </div>
    <div class="gcard-body">
      <h3>${post.title}</h3>
      <p>${post.description}</p>
      <div class="gcard-meta">
        <span>❤ ${post.likes}</span>
        <span>💬 ${post.comments}</span>
        ${post.price ? `<span class="gcard-price">${formatPrice(post.price)}</span>` : ''}
      </div>
      ${addBtn}
    </div>
  `;
    card.addEventListener('click', (e) => {
        if (e.target.closest('button'))
            return;
        openLightbox(post);
    });
    return card;
}
function renderGallery(posts) {
    const grid = document.getElementById('galleryGrid');
    if (!grid)
        return;
    grid.innerHTML = '';
    posts.forEach((p) => grid.appendChild(createCard(p)));
}
function renderFilters() {
    const bar = document.getElementById('filterBar');
    if (!bar)
        return;
    const allBtn = el('button', 'filter-btn active');
    allBtn.textContent = 'All';
    allBtn.dataset.filter = 'All';
    allBtn.addEventListener('click', () => applyFilter('All'));
    bar.appendChild(allBtn);
    CATEGORIES.forEach((c) => {
        const btn = el('button', 'filter-btn');
        btn.textContent = c;
        btn.dataset.filter = c;
        btn.addEventListener('click', () => applyFilter(c));
        bar.appendChild(btn);
    });
}
let activeFilter = 'All';
function applyFilter(filter) {
    activeFilter = filter;
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach((b) => b.classList.toggle('active', b.dataset.filter === filter));
    const cards = Array.from(document.querySelectorAll('.gcard'));
    cards.forEach((card) => {
        const show = filter === 'All' || card.dataset.category === filter;
        card.classList.toggle('hidden', !show);
    });
}
function openLightbox(post) {
    const lb = document.getElementById('lightbox');
    if (!lb)
        return;
    lb.classList.add('open');
    const media = document.getElementById('lbMedia');
    const title = document.getElementById('lbTitle');
    const body = document.getElementById('lbBody');
    if (media) {
        media.style.background = post.gradient;
        if (post.image) {
            media.innerHTML = `<img src="${post.image}" alt="${post.title}" class="lb-img" />`;
        }
        else {
            setInnerHTML(media, post.emoji);
        }
    }
    if (title)
        title.textContent = post.title;
    if (body)
        body.innerHTML = `
      <p>${post.description}</p>
      <div class="gcard-meta" style="margin-top:14px;padding-top:12px;border-top:1px solid rgba(18,35,59,0.08);">
        <span>🏷 ${post.category}</span>
        <span>❤ ${post.likes} likes</span>
        <span>💬 ${post.comments} comments</span>
        ${post.price ? `<span class="gcard-price">${formatPrice(post.price)}</span>` : ''}
      </div>
      ${post.price ? `<button class="btn btn-primary btn-block" data-add="g${post.id}" data-title="${post.title}" data-price="${post.price}" data-image="${post.image || ''}">Add to Cart — ${formatPrice(post.price)}</button>` : ''}
      <a class="btn btn-outline btn-block wa-order" href="${waLink(post.title)}" target="_blank" rel="noopener">Order via WhatsApp</a>
    `;
}
function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (lb)
        lb.classList.remove('open');
}
function initNavbar() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    toggle?.addEventListener('click', () => links?.classList.toggle('open'));
    document.querySelectorAll('.nav-links a').forEach((a) => a.addEventListener('click', () => links?.classList.remove('open')));
    window.addEventListener('scroll', () => {
        document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 10);
    });
}
function highlightActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-links a');
    const onScroll = () => {
        let current = '';
        sections.forEach((s) => {
            if (window.scrollY >= s.offsetTop - 120)
                current = s.id;
        });
        links.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === `#${current}`));
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
}
function initForm() {
    const form = document.getElementById('contactForm');
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = form.querySelectorAll('input, textarea');
        const name = inputs[0]?.value || '';
        const phone = inputs[1]?.value || '';
        const message = inputs[2]?.value || '';
        const msg = `*New Message — Atta Pharmacy*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Message:* ${message}`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
        const note = document.getElementById('formNote');
        if (note) {
            note.hidden = false;
            setTimeout(() => {
                note.hidden = true;
                form.reset();
            }, 3500);
        }
    });
}
function initCartEvents() {
    document.getElementById('cartBtn')?.addEventListener('click', openCart);
    document.getElementById('cartClose')?.addEventListener('click', closeCart);
    document.getElementById('cartOverlay')?.addEventListener('click', (e) => {
        if (e.target.id === 'cartOverlay')
            closeCart();
    });
    document.getElementById('cartClear')?.addEventListener('click', () => {
        cart = [];
        saveCart();
        renderCart();
    });
    document.getElementById('cartCheckout')?.addEventListener('click', checkoutWhatsApp);
    document.addEventListener('click', (e) => {
        const target = e.target;
        const addBtn = target.closest('[data-add]');
        if (addBtn) {
            e.preventDefault();
            addToCart({
                id: addBtn.dataset.add,
                title: addBtn.dataset.title || addBtn.dataset.add,
                price: Number(addBtn.dataset.price || 0),
                image: addBtn.dataset.image || undefined,
            }, addBtn);
            return;
        }
        const qtyBtn = target.closest('.qty-btn');
        if (qtyBtn) {
            changeQty(qtyBtn.dataset.id, qtyBtn.dataset.action === 'inc' ? 1 : -1);
            return;
        }
        const removeBtn = target.closest('.cart-remove');
        if (removeBtn) {
            removeLine(removeBtn.dataset.id);
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCart();
            closeLightbox();
        }
    });
}
function initLightboxClose() {
    const lb = document.getElementById('lightbox');
    lb?.addEventListener('click', (e) => {
        if (e.target.id === 'lightbox' || e.target.classList.contains('lightbox-close')) {
            closeLightbox();
        }
    });
}
function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader)
        return;
    window.addEventListener('load', () => {
        preloader.classList.add('done');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 600);
    });
    setTimeout(() => {
        preloader.classList.add('done');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 600);
    }, 2500);
}
function observeReveal() {
    const items = document.querySelectorAll('.reveal:not(.in-view)');
    if (!('IntersectionObserver' in window)) {
        items.forEach((i) => i.classList.add('in-view'));
        return;
    }
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach((i) => io.observe(i));
}
function showToast(html) {
    const wrap = document.getElementById('toastWrap');
    if (!wrap)
        return;
    const toast = el('div', 'toast');
    toast.innerHTML = html;
    wrap.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2600);
}
function bumpBadge() {
    const badge = document.getElementById('cartBadge');
    if (!badge)
        return;
    badge.classList.remove('bump');
    void badge.offsetWidth;
    badge.classList.add('bump');
}
function flyToCart(source) {
    const cartBtn = document.getElementById('cartBtn');
    if (!cartBtn || !source)
        return;
    const from = source.getBoundingClientRect();
    const to = cartBtn.getBoundingClientRect();
    const dot = el('div', 'fly-dot');
    document.body.appendChild(dot);
    dot.style.left = `${from.left + from.width / 2}px`;
    dot.style.top = `${from.top + from.height / 2}px`;
    requestAnimationFrame(() => {
        dot.style.transform = `translate(${to.left - from.left}px, ${to.top - from.top}px) scale(0.3)`;
        dot.style.opacity = '0';
    });
    setTimeout(() => dot.remove(), 700);
}
function initTilt() {
    if (window.matchMedia('(hover: none)').matches)
        return;
    document.querySelectorAll('.product-card, .gcard, .why-item').forEach((card) => {
        card.addEventListener('mousemove', (e) => {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            card.style.transform = `perspective(800px) rotateY(${x * 7}deg) rotateX(${y * -7}deg) translateY(-4px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}
function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length)
        return;
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting)
                return;
            const node = entry.target;
            const target = Number(node.dataset.count);
            const duration = 1400;
            const start = performance.now();
            const step = (now) => {
                const t = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - t, 3);
                node.textContent = String(Math.round(target * eased));
                if (t < 1)
                    requestAnimationFrame(step);
                else
                    node.textContent = String(target);
            };
            requestAnimationFrame(step);
            io.unobserve(node);
        });
    }, { threshold: 0.6 });
    counters.forEach((c) => io.observe(c));
}
function initScrollExtras() {
    const bar = document.getElementById('scrollBar');
    const top = document.getElementById('backTop');
    const onScroll = () => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
        if (bar)
            bar.style.width = `${pct}%`;
        if (top)
            top.classList.toggle('show', window.scrollY > 500);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    top?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    onScroll();
}
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderWhy();
    renderFilters();
    renderGallery(POSTS);
    renderCart();
    initNavbar();
    highlightActiveLink();
    initForm();
    initCartEvents();
    initLightboxClose();
    initPreloader();
    initTilt();
    initCounters();
    initScrollExtras();
    observeReveal();
    const year = document.getElementById('year');
    if (year)
        year.textContent = String(new Date().getFullYear());
});
