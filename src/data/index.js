export const SCHEMES = [
  {
    id: 1,
    title: 'PM Matsya Sampada Yojana',
    titleTa: 'பிரதமர் மத்ஸ்ய சம்பதா யோஜனா',
    desc: 'Subsidies for boats, nets, cold storage & fish processing infrastructure',
    descTa: 'படகுகள், வலைகள், குளிர் சேமிப்பு மானியம்',
    amount: 'Up to ₹3 Lakh',
    category: 'Central Govt',
    badge: 'badge-blue',
    link: 'https://pmmsy.dof.gov.in/',
    docs: ['Aadhaar card', 'Fishing license', 'Bank passbook', 'Passport photo'],
    deadline: 'Open',
    how: 'Apply at nearest fisheries department or online at pmmsy.dof.gov.in'
  },
  {
    id: 2,
    title: 'CMFRAY Insurance',
    titleTa: 'CMFRAY காப்பீடு',
    desc: 'Accident insurance ₹5 lakh for fishermen & ₹3 lakh for boat damage',
    descTa: '₹5 லட்சம் விபத்து காப்பீடு',
    amount: '₹5 Lakh cover',
    category: 'TN State',
    badge: 'badge-green',
    link: 'https://tn.gov.in/fisheries',
    docs: ['Aadhaar card', 'Fishing license', 'Bank account'],
    deadline: 'Annual renewal',
    how: 'Visit your district Fisheries Officer or nearest Fishermen Co-operative Society'
  },
  {
    id: 3,
    title: 'Fishing Ban Compensation',
    titleTa: 'மீன்பிடி தடை இழப்பீடு',
    desc: '₹8,000 compensation during annual 61-day fishing ban period (Apr 15 – Jun 14)',
    descTa: '61 நாள் தடை காலத்தில் ₹8,000 இழப்பீடு',
    amount: '₹8,000',
    category: 'TN State',
    badge: 'badge-amber',
    link: 'https://tn.gov.in/fisheries',
    docs: ['Fishing license', 'Bank account', 'Aadhaar'],
    deadline: 'Apply by Apr 20',
    how: 'Apply at District Fisheries Office before the ban period begins'
  },
  {
    id: 4,
    title: 'Boat Engine Subsidy',
    titleTa: 'படகு இயந்திர மானியம்',
    desc: '50% subsidy on outboard motors for mechanized fishing boats',
    descTa: 'படகு இயந்திரத்தில் 50% மானியம்',
    amount: '50% subsidy',
    category: 'TN Fisheries',
    badge: 'badge-blue',
    link: 'https://tn.gov.in/fisheries',
    docs: ['Boat registration', 'Fishing license', 'Aadhaar', 'Bank passbook'],
    deadline: 'Open',
    how: 'Apply at Tamil Nadu Fisheries Department district office'
  },
  {
    id: 5,
    title: 'Kisan Credit Card',
    titleTa: 'கிசான் கிரெடிட் கார்டு',
    desc: 'Working capital loans up to ₹2 lakh at subsidized interest for fishermen',
    descTa: '₹2 லட்சம் வரை கடன் வசதி',
    amount: 'Up to ₹2 Lakh',
    category: 'Bank of India',
    badge: 'badge-teal',
    link: 'https://www.bankofindia.co.in',
    docs: ['Aadhaar', 'PAN card', 'Fishing license', 'Land/boat document'],
    deadline: 'Open',
    how: 'Visit nearest nationalized bank branch with required documents'
  },
  {
    id: 6,
    title: 'Free Fishing License',
    titleTa: 'இலவச மீன்பிடி உரிமம்',
    desc: 'Annual fishing license renewal is free for traditional fishermen in Tamil Nadu',
    descTa: 'ஆண்டு உரிம புதுப்பிப்பு இலவசம்',
    amount: 'Free',
    category: 'TN Online',
    badge: 'badge-green',
    link: 'https://fisheries.tn.gov.in',
    docs: ['Aadhaar card', 'Previous license', 'Passport photo'],
    deadline: 'Before March 31',
    how: 'Renew online at fisheries.tn.gov.in or visit nearest fisheries office'
  },
  {
    id: 7,
    title: 'Housing Scheme (PMAY)',
    titleTa: 'வீட்டு மானியம் (PMAY)',
    desc: 'Pradhan Mantri Awas Yojana – Gramin for fishermen families below poverty line',
    descTa: 'வறுமை கோட்டின் கீழ் உள்ள குடும்பங்களுக்கு வீடு',
    amount: '₹1.2 Lakh subsidy',
    category: 'Central Govt',
    badge: 'badge-purple',
    link: 'https://pmayg.nic.in',
    docs: ['Aadhaar', 'Income certificate', 'BPL card', 'Land document'],
    deadline: 'Open',
    how: 'Apply through local Gram Panchayat or online at pmayg.nic.in'
  },
  {
    id: 8,
    title: 'Fishermen Children Scholarship',
    titleTa: 'மீனவர் குழந்தைகளுக்கு உதவித்தொகை',
    desc: 'Annual scholarship ₹3,000–₹10,000 for children of fishermen studying in schools & colleges',
    descTa: 'பள்ளி மற்றும் கல்லூரி மாணவர்களுக்கு ₹10,000 வரை',
    amount: 'Up to ₹10,000/yr',
    category: 'TN State',
    badge: 'badge-amber',
    link: 'https://tn.gov.in/fisheries',
    docs: ['Fishing license (parent)', 'School TC', 'Aadhaar', 'Mark sheet'],
    deadline: 'Sep 30 annually',
    how: 'Apply at District Fisheries Office with school documents'
  }
]

export const FISH_PRICES = [
  { id: 1, name: 'Seer Fish', nameTa: 'வஞ்சரம்', eng: 'Vanjaram', price: 680, prev: 607, unit: 'kg', grade: 'Premium' },
  { id: 2, name: 'Tiger Prawn', nameTa: 'இறால்', eng: 'Eral', price: 480, prev: 457, unit: 'kg', grade: 'Export' },
  { id: 3, name: 'Pomfret', nameTa: 'வாவல்', eng: 'Vavval', price: 560, prev: 518, unit: 'kg', grade: 'Popular' },
  { id: 4, name: 'Tuna', nameTa: 'சூரை', eng: 'Soorai', price: 320, prev: 330, unit: 'kg', grade: 'Fresh' },
  { id: 5, name: 'Squid', nameTa: 'கணவாய்', eng: 'Kanavai', price: 220, prev: 222, unit: 'kg', grade: 'Export' },
  { id: 6, name: 'Crab', nameTa: 'நண்டு', eng: 'Nandu', price: 390, prev: 375, unit: 'kg', grade: 'Large' },
  { id: 7, name: 'Red Snapper', nameTa: 'சங்கரா', eng: 'Sankara', price: 450, prev: 420, unit: 'kg', grade: 'Premium' },
  { id: 8, name: 'Sardine', nameTa: 'மத்தி', eng: 'Mathi', price: 80, prev: 85, unit: 'kg', grade: 'Common' },
  { id: 9, name: 'Mackerel', nameTa: 'அயலை', eng: 'Ayalai', price: 140, prev: 130, unit: 'kg', grade: 'Common' },
  { id: 10, name: 'Lobster', nameTa: 'இரால் (பெரிய)', eng: 'Lobster', price: 1200, prev: 1150, unit: 'kg', grade: 'Export' }
]

export const NEWS = [
  {
    id: 1,
    title: 'Annual fishing ban: Apr 15 – Jun 14, 2025. Compensation ₹8,000 per fisher — apply now.',
    titleTa: 'மீன்பிடி தடை: ஏப். 15 – ஜூன் 14. ₹8,000 இழப்பீடு விண்ணப்பிக்கவும்.',
    source: 'TN Fisheries Dept',
    time: '2 hours ago',
    accent: '#F59E0B',
    urgent: true
  },
  {
    id: 2,
    title: 'PM Matsya Sampada Yojana applications open for 2025–26 cycle. New boats eligible.',
    titleTa: 'PM மத்ஸ்ய யோஜனா 2025–26 விண்ணப்பங்கள் தொடங்கின.',
    source: 'Govt of India',
    time: 'Yesterday',
    accent: 'var(--ocean-mid)',
    urgent: false
  },
  {
    id: 3,
    title: 'Kasimedu harbor: Seer fish (Vanjaram) prices up 12% this week due to high demand.',
    titleTa: 'வஞ்சரம் விலை இந்த வாரம் 12% அதிகரித்தது.',
    source: 'Market update',
    time: '5 hours ago',
    accent: 'var(--safe)',
    urgent: false
  },
  {
    id: 4,
    title: 'Cyclone monitoring: IMD reports no current threats to Bay of Bengal coastline.',
    titleTa: 'IMD: தமிழ்நாடு கடலில் தற்போது புயல் அபாயம் இல்லை.',
    source: 'IMD Weather',
    time: '1 hour ago',
    accent: 'var(--wave)',
    urgent: false
  },
  {
    id: 5,
    title: 'Free fishing net distribution camp at Kasimedu Harbor on April 10. Bring your license.',
    titleTa: 'ஏப்ரல் 10 — கசிமேட்டில் இலவச வலை விநியோகம். உரிமம் கொண்டு வாருங்கள்.',
    source: 'Kadalvazhi NGO',
    time: '3 hours ago',
    accent: 'var(--ocean)',
    urgent: false
  }
]

export const TRAINING = [
  {
    id: 1,
    title: 'Deep Sea Fishing Techniques',
    titleTa: 'ஆழ்கடல் மீன்பிடி நுட்பங்கள்',
    duration: '5 days',
    location: 'Kasimedu Training Centre',
    date: 'April 20, 2025',
    free: true,
    seats: 24
  },
  {
    id: 2,
    title: 'Boat Safety & Navigation',
    titleTa: 'படகு பாதுகாப்பு மற்றும் வழிசெலுத்தல்',
    duration: '3 days',
    location: 'Marina Fishermen Centre',
    date: 'May 2, 2025',
    free: true,
    seats: 18
  },
  {
    id: 3,
    title: 'Fish Preservation & Cold Chain',
    titleTa: 'மீன் பாதுகாப்பு முறைகள்',
    duration: '2 days',
    location: 'Nochikuppam Community Hall',
    date: 'May 15, 2025',
    free: true,
    seats: 30
  },
  {
    id: 4,
    title: 'Digital Financial Literacy',
    titleTa: 'டிஜிட்டல் நிதி கல்வியறிவு',
    duration: '1 day',
    location: 'Royapuram Fisheries Office',
    date: 'April 28, 2025',
    free: true,
    seats: 40
  }
]

export const HOSPITALS = [
  { id: 1, name: 'Rajiv Gandhi Govt General Hospital', distance: '3.2 km', phone: '044-25305000', emergency: true },
  { id: 2, name: 'Kilpauk Medical College Hospital', distance: '5.8 km', phone: '044-26421100', emergency: true },
  { id: 3, name: 'ESI Hospital, Kasimedu', distance: '1.1 km', phone: '044-25952355', emergency: false },
  { id: 4, name: 'Stanley Medical College Hospital', distance: '4.5 km', phone: '044-25281201', emergency: true }
]
