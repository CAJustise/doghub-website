import React, { useState, useEffect, useMemo } from 'react';
import {
  ShoppingBag,
  Menu,
  X,
  Clock,
  ChevronRight,
  ArrowLeft,
  Check,
  Plus,
  Trash2,
  ChevronDown,
  MapPin,
  ExternalLink,
  Minus,
} from 'lucide-react';
import sullyMascot from './assets/sully-mascot.png';
import emptyBagSully from './assets/empty-bag-sully.png';
import hubHallImage from './assets/hubhall.jpg';
import southStationImage from './assets/south-station.jpg';
import backBayStationImage from './assets/back-bay-station.png';
import faneuilHallMarketplaceImage from './assets/faneuil-hall-marketplace.jpeg';
import classicTeeImage from './assets/classic-tee.png';
import baseballCapImage from './assets/baseball-cap.png';
import tumblerImage from './assets/tumbler.png';

// --- DATA CONSTANTS ---
const dogItems = [
  {
    id: 1,
    name: 'THE MASSHOLE',
    price: 9,
    desc: 'Polish Dog. Spicy mustard, chopped onions, sauerkraut.',
    bun: 'Split-top, side-toasted.',
    heat: true,
  },
  {
    id: 2,
    name: 'THE RUSTY',
    price: 10,
    desc: '12" Stretch Dog. Chili, mustard, chopped onions.',
    bun: 'Split-top, heavy toast.',
    heat: true,
  },
  {
    id: 3,
    name: 'THE BULLDOG',
    price: 11,
    desc: '12" Stretch Dog. Chili, mustard, cheddar, slaw.',
    bun: 'Split-top, side-toasted.',
    heat: true,
  },
  {
    id: 4,
    name: 'THE WINDY',
    price: 9,
    desc: '9" Standard Dog. Mustard, relish, chopped onions, tomatoes, pickle spear, sport peppers, celery salt.',
    bun: 'Steamed poppy seed.',
    heat: false,
  },
  {
    id: 5,
    name: 'THE BOARDER',
    price: 11,
    desc: 'Spicy Polish Dog. Bacon, grilled onions, chopped tomatoes, jalapeño relish, spicy creme.',
    bun: 'Split-top, side-toasted.',
    heat: true,
  },
  {
    id: 6,
    name: 'THE BOXER',
    price: 9,
    desc: '9" Standard Dog. Sautéed onions & peppers, nacho cheese.',
    bun: 'Split-top, side-toasted.',
    heat: true,
  },
  {
    id: 7,
    name: '12" HAND BATTERED CORN DOG',
    price: 7,
    desc: 'Fresh honey batter. Fried to order. Crisp. Massive.',
    bun: 'On a Stick.',
    heat: true,
  },
  {
    id: 99,
    name: 'THE LYNNER (BASIC)',
    price: 7,
    desc: 'Your choice of dog & bun. Up to 5 toppings included.',
    bun: 'Choice of bun.',
    heat: false,
    isCustom: true,
  },
];

const sidesList = [
  { id: 501, name: 'Beer Battered Onion Rings', price: 6, desc: 'Thick cut. Heavy crunch.' },
  { id: 502, name: 'Crinkle Cut Fries', price: 5, desc: 'Salty. Golden.' },
  { id: 503, name: 'Chili Cheese Fries', price: 8, desc: 'Smothered. Fork required.' },
  {
    id: 504,
    name: 'Hub Fries',
    price: 9,
    desc: 'Bacon, shredded cheese, grilled onions, jalapeño relish, spicy creme.',
  },
];

const drinksList = {
  soda: [
    { id: 601, name: 'Boylan Root Beer', price: 3 },
    { id: 602, name: 'Boylan Black Cherry', price: 3 },
    { id: 603, name: 'Boylan Orange', price: 3 },
    { id: 604, name: 'Boylan Birch Beer', price: 3 },
    { id: 605, name: 'Vernors Ginger Ale', price: 3 },
    { id: 606, name: 'Moxie', price: 3 },
  ],
  water: [
    { id: 620, name: 'Bottled Water (Still)', price: 2 },
    { id: 621, name: 'Bottled Water (Sparkling)', price: 2 },
  ],
  beer: [
    { id: 650, name: 'Harpoon IPA', price: 7 },
    { id: 651, name: 'Sam Adams Boston Lager', price: 7 },
    { id: 652, name: 'Downeast Original Cider', price: 7 },
  ],
};

const breakfastSluts = [
  {
    id: 201,
    name: 'THE BIG DIG',
    price: 8,
    desc: 'Creamy mashed potatoes, soft-coddled egg, brown butter, chives, cracked black pepper & flaky salt.',
  },
  {
    id: 202,
    name: 'THE BACON HILL',
    price: 9,
    desc: 'Bacon infused creamy mashed potatoes, soft-coddled egg, crispy chopped bacon, bacon fat-enriched cream, chives.',
  },
  {
    id: 203,
    name: 'THE FEN-YOLK',
    price: 9,
    desc: 'Hash brown mash, soft-coddled egg, breakfast sausage crumble, cheddar, scallions.',
  },
  {
    id: 204,
    name: 'THE NORTH EGG',
    price: 8,
    desc: 'Polenta, soft-coddled egg, parmesan, olive oil, chili flakes.',
  },
  {
    id: 205,
    name: 'THE YARD',
    price: 9,
    desc: 'Mushroom duxelles, soft-coddled egg, goat cheese, thyme, toasted breadcrumbs.',
  },
  {
    id: 206,
    name: 'THE BACK BAY SLUT',
    price: 10,
    desc: 'Brioche bread pudding, soft-coddled egg, crème fraîche, dill, lemon zest, cracked white pepper.',
  },
];

const breakfastHandJobs = [
  {
    id: 301,
    name: 'THE BPD',
    price: 8,
    desc: 'Hardwood smoked bacon, over medium egg, cheddar cheese, spicy mayo.',
  },
  {
    id: 302,
    name: 'THE CLUKAH-LYNN',
    price: 8,
    desc: 'Chicken sausage, over medium egg, cheddar cheese, honey mustard.',
  },
  {
    id: 303,
    name: 'THE ESSEX',
    price: 7,
    desc: 'Soft scrambled eggs, chives, cheddar cheese, caramelized onions, spicy mayo.',
  },
];

const breakfastBevs = [
  { id: 401, name: 'Coffee (Regular)', price: 3 },
  { id: 402, name: 'Coffee (Decaf)', price: 3 },
  { id: 403, name: 'Cold Brew (Bottled)', price: 4 },
  { id: 404, name: 'Minute Maid Orange Juice', price: 4 },
  { id: 405, name: 'Bottled Water', price: 2 },
];

const locations = [
  {
    id: 'causeway',
    area: 'THE HUB ON CAUSEWAY',
    address: '80 Causeway St, Boston, MA 02114',
    hours: 'Daily: 5am - Midnight',
    status: 'OPEN NOW',
    image: hubHallImage,
    latitude: 42.3662,
    longitude: -71.0621,
    schedule: {
      default: { open: '05:00', close: '24:00' },
    },
  },
  {
    id: 'south-station',
    area: 'SOUTH STATION',
    address: '2 South Station, Boston, MA 02110',
    hours: 'Daily: 5am - Midnight',
    status: 'OPEN NOW',
    image: southStationImage,
    latitude: 42.352271,
    longitude: -71.055242,
    schedule: {
      default: { open: '05:00', close: '24:00' },
    },
  },
  {
    id: 'back-bay',
    area: 'BACK BAY STATION',
    address: '145 Dartmouth Street, Boston, MA 02116',
    hours: 'Daily: 5am - Midnight',
    status: 'OPEN NOW',
    image: backBayStationImage,
    latitude: 42.34735,
    longitude: -71.075727,
    schedule: {
      default: { open: '05:00', close: '24:00' },
    },
  },
  {
    id: 'faneuil-hall',
    area: 'FANEUIL HALL MARKETPLACE',
    address: '4 S Market St, Boston, MA 02109',
    hours: 'Mon - Sat: 10a - 9p | Sunday: 11a - 7p',
    status: 'OPEN NOW',
    image: faneuilHallMarketplaceImage,
    latitude: 42.36012,
    longitude: -71.05677,
    schedule: {
      mon: { open: '10:00', close: '21:00' },
      tue: { open: '10:00', close: '21:00' },
      wed: { open: '10:00', close: '21:00' },
      thu: { open: '10:00', close: '21:00' },
      fri: { open: '10:00', close: '21:00' },
      sat: { open: '10:00', close: '21:00' },
      sun: { open: '11:00', close: '19:00' },
    },
  },
];

const breakfastItemIds = new Set([
  ...breakfastSluts.map((item) => item.id),
  ...breakfastHandJobs.map((item) => item.id),
  ...breakfastBevs.map((item) => item.id),
]);

const getDirectionsLink = (address) => {
  const encodedAddress = encodeURIComponent(address);

  if (typeof navigator !== 'undefined') {
    const ua = navigator.userAgent || '';

    if (/android/i.test(ua)) {
      return `geo:0,0?q=${encodedAddress}`;
    }

    if (/iPhone|iPad|iPod|Macintosh/i.test(ua)) {
      return `maps://?q=${encodedAddress}`;
    }
  }

  return `https://www.openstreetmap.org/search?query=${encodedAddress}`;
};

const easternTimeFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/New_York',
  weekday: 'short',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

const weekdayShortToKey = {
  Sun: 'sun',
  Mon: 'mon',
  Tue: 'tue',
  Wed: 'wed',
  Thu: 'thu',
  Fri: 'fri',
  Sat: 'sat',
};

const getEasternTimeParts = (date) => {
  const parts = easternTimeFormatter.formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return {
    weekday: weekdayShortToKey[values.weekday],
    hour: Number(values.hour),
    minute: Number(values.minute),
  };
};

const toMinutes = (timeText) => {
  const [hour, minute] = timeText.split(':').map(Number);
  return hour * 60 + minute;
};

const isWithinHoursWindow = (minutes, openMinutes, closeMinutes) => {
  if (closeMinutes > openMinutes) return minutes >= openMinutes && minutes < closeMinutes;
  if (closeMinutes < openMinutes) return minutes >= openMinutes || minutes < closeMinutes;
  return true;
};

const isLocationOpenAt = (location, date) => {
  const etParts = getEasternTimeParts(date);
  const dayWindow = location.schedule?.[etParts.weekday] || location.schedule?.default;
  if (!dayWindow) return false;

  const openMinutes = toMinutes(dayWindow.open);
  const closeMinutes = toMinutes(dayWindow.close);
  const currentMinutes = etParts.hour * 60 + etParts.minute;

  return isWithinHoursWindow(currentMinutes, openMinutes, closeMinutes);
};

const isBreakfastAvailableAt = (date) => {
  const { hour, minute } = getEasternTimeParts(date);
  const minutes = hour * 60 + minute;
  return minutes >= 5 * 60 && minutes < 11 * 60;
};

const formatDateTimeLocal = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hour}:${minute}`;
};

const formatDateInput = (date) => formatDateTimeLocal(date).slice(0, 10);

const formatTimeInput = (date) => formatDateTimeLocal(date).slice(11, 16);

const formatTimeLabel = (timeValue) => {
  const [hourText, minuteText] = timeValue.split(':');
  const hour = Number(hourText);
  const suffix = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${hour12}:${minuteText} ${suffix}`;
};

const buildOrderAheadDateOptions = (currentDate, latestDate) => {
  const currentDateValue = formatDateInput(currentDate);
  const latestDateValue = formatDateInput(latestDate);
  const options = [{ value: currentDateValue, label: 'Today' }];
  if (latestDateValue !== currentDateValue) {
    options.push({ value: latestDateValue, label: 'Tomorrow' });
  }
  return options;
};

const combineDateAndTime = (dateValue, timeValue) => {
  const [year, month, day] = dateValue.split('-').map(Number);
  const [hour, minute] = timeValue.split(':').map(Number);
  if (
    Number.isNaN(year) ||
    Number.isNaN(month) ||
    Number.isNaN(day) ||
    Number.isNaN(hour) ||
    Number.isNaN(minute)
  ) {
    return null;
  }
  return new Date(year, month - 1, day, hour, minute);
};

const roundUpToQuarterHour = (date) => {
  const rounded = new Date(date);
  rounded.setSeconds(0, 0);
  const minutes = rounded.getMinutes();
  const remainder = minutes % 15;
  if (remainder !== 0) rounded.setMinutes(minutes + (15 - remainder));
  return rounded;
};

const quarterHourTimeOptions = Array.from({ length: 96 }, (_, index) => {
  const hour = String(Math.floor(index / 4)).padStart(2, '0');
  const minute = String((index % 4) * 15).padStart(2, '0');
  return `${hour}:${minute}`;
});

const normalizeToMinute = (date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes());

const toRadians = (degrees) => (degrees * Math.PI) / 180;

const calculateDistanceMiles = (a, b) => {
  const earthRadiusMiles = 3958.8;
  const dLat = toRadians(b.latitude - a.latitude);
  const dLon = toRadians(b.longitude - a.longitude);
  const lat1 = toRadians(a.latitude);
  const lat2 = toRadians(b.latitude);

  const haversine =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);

  return 2 * earthRadiusMiles * Math.asin(Math.sqrt(haversine));
};

const getClosestLocation = (latitude, longitude) =>
  locations.reduce((closest, location) => {
    const distance = calculateDistanceMiles({ latitude, longitude }, location);
    if (!closest || distance < closest.distance) {
      return { location, distance };
    }
    return closest;
  }, null)?.location ?? null;

const merch = [
  {
    id: 801,
    item: 'CLASSIC TEE',
    price: 25,
    desc: 'Premium cotton tee with bold Sully front print. Soft feel, everyday fit.',
    image: classicTeeImage,
  },
  {
    id: 802,
    item: 'BASEBALL CAP',
    price: 20,
    desc: "'47 adjustable Baseball Cap.",
    image: baseballCapImage,
    imageAspect: 'wide',
  },
  {
    id: 803,
    item: '20oz TUMBLER',
    price: 12,
    desc: 'To put liquid in, like a cup, only this has a lid! made of genuine plastic!!',
    image: tumblerImage,
    imageAspect: 'wide',
  },
];

const customizationData = {
  dogs: [
    { id: 'standard', name: '9" Standard Dog', price: 0 },
    { id: 'stretch', name: '12" Stretch Dog', price: 2 },
    { id: 'polish_spicy', name: 'Polish Sausage (Spicy)', price: 1 },
    { id: 'polish_mild', name: 'Polish Sausage (Mild)', price: 1 },
  ],
  buns: [
    { id: 'split', name: 'Grilled Top Split', sub: 'Default' },
    { id: 'potato', name: 'Steamed Side Split', sub: "Martin's Potato Roll" },
  ],
  toppings: {
    veg: [
      { name: 'Onions (Raw Chopped)', price: 0 },
      { name: 'Onions (Sautéed)', price: 0 },
      { name: 'Tomatoes (Chopped)', price: 0 },
      { name: 'Mixed Sautéed Peppers', price: 0 },
      { name: 'Jalapeño Peppers', price: 0 },
      { name: 'Sport Peppers', price: 0 },
      { name: 'Pickle Spear', price: 0 },
    ],
    other: [
      { name: 'Sauerkraut', price: 0 },
      { name: 'Coleslaw', price: 0 },
      { name: 'Crispy Onions', price: 0 },
    ],
    protein: [
      { name: 'Chili', price: 1 },
      { name: 'Bacon (Chopped)', price: 1 },
    ],
    cheese: [
      { name: 'Nacho Cheese', price: 1 },
      { name: 'Shredded Cheddar', price: 1 },
    ],
    condiments: [
      { name: 'Mustard', price: 0 },
      { name: 'Spicy Mustard', price: 0 },
      { name: 'Mayo', price: 0 },
      { name: 'Spicy Creme', price: 0 },
      { name: 'Relish', price: 0 },
      { name: 'Jalapeño Relish', price: 0 },
      { name: 'Ketchup', price: 0 },
      { name: 'Celery Salt', price: 0 },
    ],
  },
};

// --- SUB-COMPONENTS ---

const Logo = ({ onNavigate }) => (
  <button
    type="button"
    className="flex items-center gap-2 bg-transparent border-0 p-0 select-none leading-none cursor-pointer"
    onClick={() => onNavigate('home')}
    aria-label="Go to DogHub home"
  >
    <span
      className="bg-amber-500 text-black font-black text-3xl md:text-4xl px-2.5 pb-1 rounded-xl"
      style={{ letterSpacing: '-0.045em' }}
    >
      Dog
    </span>
    <span className="text-zinc-200 font-black text-3xl md:text-4xl tracking-tight">Hub</span>
  </button>
);

const Nav = ({ activeTab, onNavigate, isMenuOpen, setIsMenuOpen, scrolled, cartCount }) => (
  <nav
    className={`fixed top-0 w-full z-50 transition-all duration-200 ${
      scrolled
        ? 'bg-zinc-950 border-b border-zinc-800'
        : 'bg-zinc-950/90 backdrop-blur-md'
    }`}
  >
    <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
      <Logo onNavigate={onNavigate} />

      <div className="hidden md:flex gap-8 font-bold text-sm tracking-widest text-zinc-400">
        <div className="relative group">
          <button
            onClick={() => onNavigate('menu', 'breakfast')}
            className={`hover:text-amber-500 transition-colors flex items-center gap-1 ${
              activeTab === 'menu' ? 'text-white' : ''
            }`}
          >
            MENU <ChevronDown size={14} />
          </button>
          <div className="absolute top-full left-0 pt-4 hidden group-hover:block">
            <div className="bg-zinc-950 border border-zinc-800 p-2 min-w-[200px] shadow-2xl flex flex-col gap-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate('menu', 'breakfast');
                }}
                className="text-left px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-900 uppercase font-bold tracking-wider text-xs transition-colors"
              >
                Breakfast
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate('menu', 'dogs');
                }}
                className="text-left px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-900 uppercase font-bold tracking-wider text-xs transition-colors"
              >
                Hot Dogs
              </button>
            </div>
          </div>
        </div>

        {['LOCATIONS', 'ABOUT', 'MERCH', 'INVESTORS'].map((item) => (
          <button
            key={item}
            onClick={() => onNavigate(item.toLowerCase())}
            className={`hover:text-amber-500 transition-colors ${
              activeTab === item.toLowerCase() ? 'text-white' : ''
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => onNavigate('cart')}
          className="relative text-white hover:text-amber-500 transition-colors p-2"
        >
          <ShoppingBag size={24} />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-amber-500 text-black font-black text-xs w-5 h-5 flex items-center justify-center rounded-full transform translate-x-1 -translate-y-1">
              {cartCount}
            </span>
          )}
        </button>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </div>

    {isMenuOpen && (
      <div className="md:hidden absolute top-16 left-0 w-full bg-zinc-950 border-b border-zinc-800 p-4 flex flex-col gap-4">
        <button
          onClick={() => onNavigate('menu', 'breakfast')}
          className="text-left text-xl font-bold text-white py-2 border-b border-zinc-900"
        >
          MENU: BREAKFAST
        </button>
        <button
          onClick={() => onNavigate('menu', 'dogs')}
          className="text-left text-xl font-bold text-white py-2 border-b border-zinc-900"
        >
          MENU: DOGS
        </button>

        {['LOCATIONS', 'ABOUT', 'MERCH', 'INVESTORS'].map((item) => (
          <button
            key={item}
            onClick={() => onNavigate(item.toLowerCase())}
            className="text-left text-xl font-bold text-white py-2 border-b border-zinc-900"
          >
            {item}
          </button>
        ))}
      </div>
    )}
  </nav>
);

const Hero = ({ onNavigate }) => (
  <div className="pt-32 pb-16 px-4 bg-zinc-950 text-white border-b border-zinc-800">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
        STEAMED.
        <br />
        <span className="text-amber-500">CHARRED.</span>
        <br />
        PERFECTED.
      </h1>
      <div className="text-xl text-zinc-400 max-w-lg font-medium leading-relaxed mb-8">
        <p className="mb-4">Not a novelty stand. Not a chain. Not your childhood memory.</p>
        <p>This is the hot dog you wish you grew up with, executed right, every time.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => onNavigate('menu', 'dogs')}
          className="bg-white text-black font-black text-lg px-8 py-4 uppercase tracking-wide hover:bg-zinc-200 transition-colors text-center"
        >
          View Menu
        </button>
        <button
          onClick={() => onNavigate('locations')}
          className="border-2 border-zinc-700 text-white font-bold text-lg px-8 py-4 uppercase tracking-wide hover:border-white transition-colors text-center"
        >
          Locations
        </button>
      </div>
    </div>
  </div>
);

const MethodSection = () => (
  <div className="bg-amber-500 text-black py-12 px-4 border-b border-black">
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      <div>
        <p className="font-black text-3xl leading-none mb-6 tracking-tighter">
          Boiled dogs died gray.
          <br />
          Roller dogs never had a chance.
        </p>
        <p className="text-xl leading-relaxed font-bold">
          We steam for juice, then sear every dog over high heat. The casing snaps. The char
          bites back. This is what a hot dog should be.
        </p>
      </div>
      <div className="bg-black text-white p-6">
        <h3 className="font-black text-xl mb-4 uppercase text-amber-500">Our Buns</h3>
        <div className="space-y-4">
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="font-bold">Split-Top</span>
            <span className="text-zinc-400">Butter-toasted. Golden. Crisp.</span>
          </div>
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="font-bold">Potato Roll</span>
            <span className="text-zinc-400">Steamed. Soft. Exactly right.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const BreakfastLexiconSection = () => (
  <div className="mb-8 grid md:grid-cols-2 gap-6">
    <div className="bg-zinc-900 border border-zinc-800 p-6">
      <p className="text-2xl font-black tracking-tight mb-2">slut | \ slət</p>
      <p className="text-zinc-400 uppercase tracking-widest text-xs font-bold mb-4">adjective</p>
      <p className="text-zinc-200 leading-relaxed mb-3">
        1. Unapologetically rich, gloriously messy, and intentionally excessive.
      </p>
      <p className="text-zinc-200 leading-relaxed">
        2. Pure culinary indulgence built to satisfy visceral cravings.
      </p>
    </div>

    <div className="bg-zinc-900 border border-zinc-800 p-6">
      <p className="text-2xl font-black tracking-tight mb-2">hand job | \ ˈhand-ˌjäb</p>
      <p className="text-zinc-400 uppercase tracking-widest text-xs font-bold mb-4">noun</p>
      <p className="text-zinc-200 leading-relaxed mb-3">
        1. A one-handed, zero-utensil masterpiece.
      </p>
      <p className="text-zinc-200 leading-relaxed">
        2. Portable perfection engineered to grab, hold, and devour on the move.
      </p>
    </div>
  </div>
);

const LynnerCustomizer = ({ onNavigate, addToCart }) => {
  const [selectedDog, setSelectedDog] = useState(null);
  const [selectedBun, setSelectedBun] = useState(null);
  const [selectedToppings, setSelectedToppings] = useState([]);

  const toggleTopping = (toppingName, price) => {
    if (selectedToppings.some((t) => t.name === toppingName)) {
      setSelectedToppings(selectedToppings.filter((t) => t.name !== toppingName));
    } else {
      setSelectedToppings([...selectedToppings, { name: toppingName, price }]);
    }
  };

  const totalPrice = useMemo(() => {
    let total = 7;
    if (selectedDog) total += selectedDog.price;
    selectedToppings.forEach((t) => {
      total += t.price;
    });
    return total;
  }, [selectedDog, selectedToppings]);

  const handleAddToOrder = () => {
    addToCart({
      id: 99,
      name: 'The Lynner',
      desc: `${selectedDog.name}, ${selectedBun.name}, ${selectedToppings
        .map((t) => t.name)
        .join(', ')}`,
      price: totalPrice,
      isCustom: true,
    });
    onNavigate('menu', 'dogs');
  };

  return (
    <div className="py-24 px-4 bg-zinc-950 min-h-screen text-white">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => onNavigate('menu', 'dogs')}
          className="text-zinc-500 hover:text-white mb-6 flex items-center font-bold tracking-widest uppercase text-sm"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Menu
        </button>

        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-2 uppercase text-amber-500">
          Build The Lynner
        </h2>
        <p className="text-zinc-400 text-xl font-medium mb-12 border-b border-zinc-800 pb-8">
          Start at $7. Upgrade the dog. Pile on the rest.
        </p>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-black uppercase mb-6 flex items-center">
              1. How Do You Like Your Wiener?{' '}
              <span className="text-zinc-600 text-sm ml-4 font-bold tracking-wide">REQUIRED</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {customizationData.dogs.map((dog) => (
                <button
                  key={dog.id}
                  onClick={() => setSelectedDog(dog)}
                  className={`p-4 border-2 text-left font-bold uppercase tracking-wide transition-all ${
                    selectedDog?.id === dog.id
                      ? 'border-amber-500 bg-amber-500/10 text-white'
                      : 'border-zinc-800 text-zinc-500 hover:border-zinc-600'
                  }`}
                >
                  <div className="flex justify-between items-center w-full">
                    <span>{dog.name}</span>
                    <div className="flex items-center gap-2">
                      {dog.price > 0 && <span className="text-amber-500 text-sm">+${dog.price}</span>}
                      {selectedDog?.id === dog.id && <Check size={20} className="text-amber-500" />}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black uppercase mb-6 flex items-center">
              2. How About Those Buns?{' '}
              <span className="text-zinc-600 text-sm ml-4 font-bold tracking-wide">REQUIRED</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {customizationData.buns.map((bun) => (
                <button
                  key={bun.id}
                  onClick={() => setSelectedBun(bun)}
                  className={`p-4 border-2 text-left font-bold uppercase tracking-wide transition-all ${
                    selectedBun?.id === bun.id
                      ? 'border-amber-500 bg-amber-500/10 text-white'
                      : 'border-zinc-800 text-zinc-500 hover:border-zinc-600'
                  }`}
                >
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <div>{bun.name}</div>
                      <div className="text-xs text-zinc-500 normal-case font-medium mt-1">
                        {bun.sub}
                      </div>
                    </div>
                    {selectedBun?.id === bun.id && <Check size={20} className="text-amber-500" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black uppercase mb-6 flex items-center">3. How Do You Like It?</h3>

            <div className="mb-6 grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-amber-500 font-bold uppercase text-sm tracking-widest mb-3 border-b border-zinc-800 pb-1">
                  Proteins (+$1)
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {customizationData.toppings.protein.map((t) => (
                    <button
                      key={t.name}
                      onClick={() => toggleTopping(t.name, t.price)}
                      className={`p-3 border text-sm font-bold uppercase tracking-wide transition-all flex justify-between ${
                        selectedToppings.some((sel) => sel.name === t.name)
                          ? 'border-amber-500 bg-amber-500 text-black'
                          : 'border-zinc-800 text-zinc-400 hover:border-zinc-600'
                      }`}
                    >
                      <span>{t.name}</span>
                      <span>+$1</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-amber-500 font-bold uppercase text-sm tracking-widest mb-3 border-b border-zinc-800 pb-1">
                  Cheese (+$1)
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {customizationData.toppings.cheese.map((t) => (
                    <button
                      key={t.name}
                      onClick={() => toggleTopping(t.name, t.price)}
                      className={`p-3 border text-sm font-bold uppercase tracking-wide transition-all flex justify-between ${
                        selectedToppings.some((sel) => sel.name === t.name)
                          ? 'border-amber-500 bg-amber-500 text-black'
                          : 'border-zinc-800 text-zinc-400 hover:border-zinc-600'
                      }`}
                    >
                      <span>{t.name}</span>
                      <span>+$1</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-amber-500 font-bold uppercase text-sm tracking-widest mb-3 border-b border-zinc-800 pb-1">
                Vegetables
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {customizationData.toppings.veg.map((t) => (
                  <button
                    key={t.name}
                    onClick={() => toggleTopping(t.name, t.price)}
                    className={`p-3 border text-sm font-bold uppercase tracking-wide transition-all ${
                      selectedToppings.some((sel) => sel.name === t.name)
                        ? 'border-amber-500 bg-amber-500 text-black'
                        : 'border-zinc-800 text-zinc-400 hover:border-zinc-600'
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6 grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-amber-500 font-bold uppercase text-sm tracking-widest mb-3 border-b border-zinc-800 pb-1">
                  Crunch & Slaw
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {customizationData.toppings.other.map((t) => (
                    <button
                      key={t.name}
                      onClick={() => toggleTopping(t.name, t.price)}
                      className={`p-3 border text-sm font-bold uppercase tracking-wide transition-all ${
                        selectedToppings.some((sel) => sel.name === t.name)
                          ? 'border-amber-500 bg-amber-500 text-black'
                          : 'border-zinc-800 text-zinc-400 hover:border-zinc-600'
                      }`}
                    >
                      {t.name}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-amber-500 font-bold uppercase text-sm tracking-widest mb-3 border-b border-zinc-800 pb-1">
                  Condiments
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {customizationData.toppings.condiments.map((t) => (
                    <button
                      key={t.name}
                      onClick={() => toggleTopping(t.name, t.price)}
                      className={`p-3 border text-sm font-bold uppercase tracking-wide transition-all ${
                        selectedToppings.some((sel) => sel.name === t.name)
                          ? 'border-amber-500 bg-amber-500 text-black'
                          : 'border-zinc-800 text-zinc-400 hover:border-zinc-600'
                      }`}
                    >
                      {t.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 sticky bottom-0 bg-zinc-950 pb-8 shadow-[0_-20px_40px_rgba(0,0,0,0.8)]">
          <div className="flex justify-between items-center mb-4">
            <span className="text-zinc-400 font-bold uppercase">Total</span>
            <span className="text-4xl font-black text-white">${totalPrice.toFixed(2)}</span>
          </div>
          <button
            onClick={handleAddToOrder}
            className="w-full bg-white text-black font-black text-xl py-4 uppercase tracking-wide hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!selectedDog || !selectedBun}
          >
            Add To Bag
          </button>
        </div>
      </div>
    </div>
  );
};

const CartView = ({
  cart,
  onRemove,
  onIncrementItem,
  onDecrementItem,
  onNavigate,
  selectedLocation,
  isOrderAheadEnabled,
  onToggleOrderAhead,
  pickupDateValue,
  pickupTimeValue,
  pickupDateOptions,
  pickupTimeOptions,
  onPickupDateChange,
  onPickupTimeSlotChange,
  pickupTimeError,
}) => {
  const cartTotal = cart.reduce(
    (acc, item) => acc + item.price * (item.isCustom ? 1 : item.qty || 1),
    0
  );

  return (
    <div className="py-24 px-4 bg-zinc-950 min-h-screen text-white">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => onNavigate('menu', 'dogs')}
          className="text-zinc-500 hover:text-white mb-6 flex items-center font-bold tracking-widest uppercase text-sm"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Menu
        </button>

        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 uppercase text-white border-b-8 border-amber-500 pb-2 inline-block">
          Your Order
        </h2>

        <div className="mb-8 border border-zinc-800 bg-zinc-900 p-4 flex items-center justify-between gap-4">
          <div className="w-full">
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Pickup Location</p>
            <p className="text-white font-black text-sm md:text-base mt-1">
              {selectedLocation ? selectedLocation.area : 'Not selected yet'}
            </p>
            <div className="mt-4">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={onToggleOrderAhead}
                  className={`px-3 py-1 text-xs font-black uppercase tracking-widest border transition-colors ${
                    isOrderAheadEnabled
                      ? 'bg-amber-500 text-black border-amber-500 hover:bg-amber-400'
                      : 'bg-zinc-950 text-zinc-300 border-zinc-700 hover:border-amber-500 hover:text-white'
                  }`}
                >
                  {isOrderAheadEnabled ? 'Order Ahead On' : 'Order Ahead'}
                </button>
                <p className="text-zinc-500 text-xs">
                  {isOrderAheadEnabled ? 'Choose a pickup time up to 24 hours ahead.' : 'Pickup now selected.'}
                </p>
              </div>
              {isOrderAheadEnabled && (
                <div className="mt-3">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">
                        Date
                      </label>
                      <select
                        value={pickupDateValue}
                        onChange={(event) => onPickupDateChange(event.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-700 text-white px-3 py-2 focus:outline-none focus:border-amber-500"
                      >
                        {pickupDateOptions.map((dateOption) => (
                          <option key={dateOption.value} value={dateOption.value}>
                            {dateOption.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">
                        Time
                      </label>
                      <select
                        value={pickupTimeValue}
                        onChange={(event) => onPickupTimeSlotChange(event.target.value)}
                        disabled={pickupTimeOptions.length === 0}
                        className="w-full bg-zinc-950 border border-zinc-700 text-white px-3 py-2 focus:outline-none focus:border-amber-500"
                      >
                        {pickupTimeOptions.length === 0 ? (
                          <option value={pickupTimeValue}>No times available</option>
                        ) : (
                          pickupTimeOptions.map((timeValue) => (
                            <option key={timeValue} value={timeValue}>
                              {formatTimeLabel(timeValue)}
                            </option>
                          ))
                        )}
                      </select>
                    </div>
                  </div>
                </div>
              )}
              {pickupTimeError && <p className="text-red-400 text-xs mt-2">{pickupTimeError}</p>}
            </div>
          </div>
          <button
            onClick={() => onNavigate('locations')}
            className="text-amber-500 hover:text-amber-400 text-xs md:text-sm font-black uppercase tracking-widest pt-1"
          >
            Change
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-zinc-900 border border-zinc-800">
            <img
              src={emptyBagSully}
              alt="DogHub empty bag mascot"
              className="w-40 h-40 mx-auto mb-6 drop-shadow-xl hover:scale-110 transition-transform rounded-xl"
            />
            <p className="text-zinc-500 text-xl font-bold uppercase tracking-tight">Your bag is empty.</p>
            <p className="text-zinc-600 mb-8">Fix that immediately.</p>
            <button
              onClick={() => onNavigate('menu', 'dogs')}
              className="bg-white text-black font-black uppercase px-8 py-3 hover:bg-amber-500 transition-colors"
            >
              Start Order
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.cartId}
                  className="bg-zinc-900 p-6 border border-zinc-800 flex justify-between items-start group hover:border-zinc-700 transition-colors"
                >
                  <div className="flex-1 pr-4">
                    <h3 className="font-black text-xl uppercase tracking-tight mb-1 flex items-center gap-2">
                      {item.name || item.item}
                      {!item.isCustom && (
                        <span className="text-xs font-bold tracking-widest text-zinc-500">
                          x{item.qty || 1}
                        </span>
                      )}
                    </h3>
                    {item.desc && <p className="text-zinc-400 text-sm font-medium">{item.desc}</p>}
                  </div>
                  {item.isCustom ? (
                    <div className="flex flex-col items-end gap-3">
                      <span className="font-black text-lg">${item.price.toFixed(2)}</span>
                      <button
                        onClick={() => onRemove(item.cartId)}
                        className="text-zinc-600 hover:text-red-500 transition-colors p-1"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-end gap-3">
                      <span className="font-black text-lg">
                        ${(item.price * (item.qty || 1)).toFixed(2)}
                      </span>
                      <div className="flex items-center bg-zinc-800 rounded text-white">
                        <button
                          onClick={() => onDecrementItem(item.id)}
                          className="p-2 hover:text-amber-500"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-black text-amber-500 text-sm w-5 text-center">
                          {item.qty || 1}
                        </span>
                        <button
                          onClick={() => onIncrementItem(item)}
                          className="p-2 hover:text-amber-500"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="border-t border-zinc-800 pt-8 mt-8">
              <div className="flex justify-between items-center mb-2 text-zinc-400 font-bold uppercase text-sm tracking-widest">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-6 text-zinc-400 font-bold uppercase text-sm tracking-widest">
                <span>Tax (7%)</span>
                <span>${(cartTotal * 0.07).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-8 pt-4 border-t border-zinc-800">
                <span className="text-2xl font-black uppercase text-white">Total</span>
                <span className="text-3xl font-black text-amber-500">${(cartTotal * 1.07).toFixed(2)}</span>
              </div>

              <button className="w-full bg-white text-black font-black text-xl py-4 uppercase tracking-wide hover:bg-zinc-200 transition-colors mb-4 flex items-center justify-center gap-2 rounded-sm">
                <span className="text-2xl pb-1"></span> Pay
              </button>

              <button className="w-full bg-amber-500 text-black font-black text-xl py-5 uppercase tracking-wide hover:bg-amber-400 transition-colors shadow-lg shadow-amber-900/20">
                Pay Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const MenuList = ({
  onNavigate,
  cart,
  addToCart,
  removeOneFromCart,
  activeCategory,
  setActiveCategory,
  selectedLocation,
  isOrderAheadEnabled,
  onToggleOrderAhead,
  pickupDateValue,
  pickupTimeValue,
  pickupDateOptions,
  pickupTimeOptions,
  onPickupDateChange,
  onPickupTimeSlotChange,
  pickupTimeError,
  isBreakfastAvailableForPickup,
}) => {
  const isItemAddDisabled = (item) =>
    Boolean(pickupTimeError) || (breakfastItemIds.has(item.id) && !isBreakfastAvailableForPickup);

  const getDisabledLabel = (item) => {
    if (breakfastItemIds.has(item.id) && !isBreakfastAvailableForPickup) return 'UNAVAILABLE';
    if (pickupTimeError) return 'CHECK PICKUP';
    return null;
  };

  const ItemCard = ({ item }) => {
    const qtyInCart = cart.reduce(
      (acc, c) => (c.id === item.id && !c.isCustom ? acc + (c.qty || 1) : acc),
      0
    );
    const customCount = item.isCustom ? cart.filter((c) => c.id === item.id && c.isCustom).length : 0;
    const addDisabled = isItemAddDisabled(item);
    const disabledLabel = getDisabledLabel(item);

    return (
      <div
        className={`p-6 bg-zinc-900 border ${
          item.isCustom ? 'border-dashed border-zinc-600' : 'border-zinc-800'
        } hover:border-amber-500 transition-colors group relative flex flex-col justify-between h-full`}
      >
        {item.isCustom && customCount > 0 && (
          <div className="absolute top-4 right-4 bg-amber-500 text-black font-black text-xs w-6 h-6 flex items-center justify-center rounded-full">
            {customCount}
          </div>
        )}

        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-amber-500 transition-colors">
              {item.name}
            </h3>
            <span className="text-xl font-bold text-zinc-400 shrink-0 ml-2">${item.price}</span>
          </div>
          <p className="text-zinc-300 font-medium mb-3 text-lg leading-snug">{item.desc}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 border-t border-zinc-800 pt-4 gap-4">
          <div className="flex items-center gap-2 text-zinc-500 text-sm font-bold uppercase tracking-wider">
            {item.bun && <span className="bg-zinc-800 px-2 py-1">{item.bun}</span>}
            {item.heat && !item.isCustom && (
              <span className="flex items-center text-amber-500 text-xs font-black bg-amber-500/10 px-2 py-1 rounded">
                CHAR FINISH
              </span>
            )}
          </div>

          <div className="w-full sm:w-auto">
            {item.isCustom ? (
              <button
                onClick={() => onNavigate('customizer')}
                className="w-full bg-white text-black hover:bg-amber-500 font-black uppercase text-sm px-4 py-3 tracking-wide flex justify-center items-center transition-colors"
              >
                BUILD <Plus size={16} className="ml-1" />
              </button>
            ) : qtyInCart > 0 ? (
              <div className="flex items-center justify-between bg-zinc-800 text-white w-full sm:w-auto">
                <button onClick={() => removeOneFromCart(item.id)} className="p-3 hover:text-amber-500">
                  <Minus size={18} />
                </button>
                <span className="font-black text-amber-500 px-2">{qtyInCart}</span>
                <button
                  onClick={() => addToCart(item)}
                  disabled={addDisabled}
                  className="p-3 hover:text-amber-500 disabled:text-zinc-600 disabled:hover:text-zinc-600 disabled:cursor-not-allowed"
                >
                  <Plus size={18} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => addToCart(item)}
                disabled={addDisabled}
                className="w-full bg-white text-black hover:bg-amber-500 font-black uppercase text-sm px-4 py-3 tracking-wide flex justify-center items-center transition-colors disabled:bg-zinc-800 disabled:text-zinc-400 disabled:cursor-not-allowed"
              >
                {disabledLabel ? (
                  disabledLabel
                ) : (
                  <>
                    ADD <Plus size={16} className="ml-1" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const CompactRow = ({ item }) => {
    const qtyInCart = cart.reduce(
      (acc, c) => (c.id === item.id && !c.isCustom ? acc + (c.qty || 1) : acc),
      0
    );
    const addDisabled = isItemAddDisabled(item);
    const disabledLabel = getDisabledLabel(item);

    return (
      <div className="bg-zinc-900 p-4 border border-zinc-800 flex justify-between items-center group">
        <div>
          <h4 className="font-black text-lg text-white uppercase">{item.name}</h4>
          {item.desc && <p className="text-zinc-400 text-sm mt-1">{item.desc}</p>}
        </div>
        <div className="flex items-center gap-3">
          <span className="font-bold text-zinc-400 mr-2">${item.price}</span>
          {qtyInCart > 0 ? (
            <div className="flex items-center bg-zinc-800 rounded text-white">
              <button onClick={() => removeOneFromCart(item.id)} className="p-2 hover:text-amber-500">
                <Minus size={14} />
              </button>
              <span className="font-black text-amber-500 text-sm w-4 text-center">{qtyInCart}</span>
              <button
                onClick={() => addToCart(item)}
                disabled={addDisabled}
                className="p-2 hover:text-amber-500 disabled:text-zinc-600 disabled:hover:text-zinc-600 disabled:cursor-not-allowed"
              >
                <Plus size={14} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => addToCart(item)}
              disabled={addDisabled}
              className="bg-white text-black hover:bg-amber-500 p-2 transition-colors disabled:bg-zinc-800 disabled:text-zinc-400 disabled:cursor-not-allowed disabled:hover:bg-zinc-800"
            >
              {disabledLabel ? <span className="px-1 text-[10px] font-black tracking-wider">{disabledLabel}</span> : <Plus size={16} />}
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="py-16 px-4 bg-zinc-950 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 border border-zinc-800 bg-zinc-900 px-4 py-3 flex items-start justify-between gap-3">
          <div className="w-full">
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Ordering For</p>
            <p className="text-white font-black text-sm md:text-base mt-1">
              {selectedLocation ? selectedLocation.area : 'Choose location on first add'}
            </p>
            <div className="mt-4">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={onToggleOrderAhead}
                  className={`px-3 py-1 text-xs font-black uppercase tracking-widest border transition-colors ${
                    isOrderAheadEnabled
                      ? 'bg-amber-500 text-black border-amber-500 hover:bg-amber-400'
                      : 'bg-zinc-950 text-zinc-300 border-zinc-700 hover:border-amber-500 hover:text-white'
                  }`}
                >
                  {isOrderAheadEnabled ? 'Order Ahead On' : 'Order Ahead'}
                </button>
                <p className="text-zinc-500 text-xs">
                  {isOrderAheadEnabled ? 'Choose a pickup time up to 24 hours ahead.' : 'Pickup now selected.'}
                </p>
              </div>
              {isOrderAheadEnabled && (
                <div className="mt-3">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">
                        Date
                      </label>
                      <select
                        value={pickupDateValue}
                        onChange={(event) => onPickupDateChange(event.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-700 text-white px-3 py-2 focus:outline-none focus:border-amber-500"
                      >
                        {pickupDateOptions.map((dateOption) => (
                          <option key={dateOption.value} value={dateOption.value}>
                            {dateOption.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">
                        Time
                      </label>
                      <select
                        value={pickupTimeValue}
                        onChange={(event) => onPickupTimeSlotChange(event.target.value)}
                        disabled={pickupTimeOptions.length === 0}
                        className="w-full bg-zinc-950 border border-zinc-700 text-white px-3 py-2 focus:outline-none focus:border-amber-500"
                      >
                        {pickupTimeOptions.length === 0 ? (
                          <option value={pickupTimeValue}>No times available</option>
                        ) : (
                          pickupTimeOptions.map((timeValue) => (
                            <option key={timeValue} value={timeValue}>
                              {formatTimeLabel(timeValue)}
                            </option>
                          ))
                        )}
                      </select>
                    </div>
                  </div>
                </div>
              )}
              <p className="text-zinc-500 text-xs mt-2">Breakfast availability uses Eastern Time (5a - 11a).</p>
              {pickupTimeError && <p className="text-red-400 text-xs mt-2">{pickupTimeError}</p>}
              {activeCategory === 'breakfast' && !isBreakfastAvailableForPickup && (
                <p className="text-amber-500 text-xs mt-2 font-bold uppercase tracking-wider">
                  Ordering is not available for breakfast at the selected pickup time (5a - 11a Eastern Time).
                </p>
              )}
            </div>
          </div>
          <button
            onClick={() => onNavigate('locations')}
            className="text-amber-500 hover:text-amber-400 text-xs md:text-sm font-black uppercase tracking-widest shrink-0 pt-1"
          >
            Set Location
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-10 border-b border-zinc-800 pb-4">
          <button
            onClick={() => setActiveCategory('breakfast')}
            className={`text-base md:text-xl font-black uppercase tracking-tighter transition-colors ${
              activeCategory === 'breakfast' ? 'text-white' : 'text-zinc-600 hover:text-zinc-400'
            }`}
          >
            Sluts & Hand Jobs
          </button>

          <div className="h-4 w-1 bg-amber-500 transform -skew-x-12" />

          <button
            onClick={() => setActiveCategory('dogs')}
            className={`text-base md:text-xl font-black uppercase tracking-tighter transition-colors ${
              activeCategory === 'dogs' ? 'text-white' : 'text-zinc-600 hover:text-zinc-400'
            }`}
          >
            Wickedly Long Wieners
          </button>
        </div>

        {activeCategory === 'dogs' ? (
          <>
            <h2 className="text-xl text-amber-500 font-black tracking-widest uppercase mb-8">Served All Day</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {dogItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>

            <div className="mt-16">
              <h2 className="text-xl text-amber-500 font-black tracking-widest uppercase mb-6 border-b border-zinc-800 pb-4">
                Sides & Drinks
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">Fried Stuff</h3>
                  <div className="space-y-4">
                    {sidesList.map((item) => (
                      <CompactRow key={item.id} item={item} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">Beverages</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-2">
                        Sodas (Boylan/Local)
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {drinksList.soda.map((item) => (
                          <CompactRow key={item.id} item={item} />
                        ))}
                      </div>
                    </div>
                    <div className="border-t border-zinc-800 pt-4">
                      <h4 className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-2">Water</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {drinksList.water.map((item) => (
                          <CompactRow key={item.id} item={item} />
                        ))}
                      </div>
                    </div>
                    <div className="border-t border-zinc-800 pt-4">
                      <h4 className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-2">
                        Beer & Cider
                      </h4>
                      <div className="space-y-2">
                        {drinksList.beer.map((item) => (
                          <CompactRow key={item.id} item={item} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <BreakfastLexiconSection />
            <h2 className="text-xl text-white font-black tracking-widest uppercase mb-8">
              Morning Shift (5am - 11am)
            </h2>

            <div className="mb-12">
              <div className="mb-6 border-b border-zinc-800 pb-2">
                <h3 className="text-3xl font-black text-amber-500 uppercase tracking-tighter mb-1">OUR SLUTS</h3>
                <p className="text-zinc-500 font-bold uppercase text-sm tracking-wide">
                  Soft-coddled eggs. Served in a cup. Fork-required.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {breakfastSluts.map((item) => (
                  <ItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            <div>
              <div className="mb-6 border-b border-zinc-800 pb-2">
                <h3 className="text-3xl font-black text-amber-500 uppercase tracking-tighter mb-1">HAND JOBS</h3>
                <p className="text-zinc-500 font-bold uppercase text-sm tracking-wide">
                  Served on a warm brioche bun. Grab in your hand, enjoy.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {breakfastHandJobs.map((item) => (
                  <ItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl text-amber-500 font-black tracking-widest uppercase mb-6 border-b border-zinc-800 pb-4">
                Morning Beverages
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {breakfastBevs.map((item) => (
                  <CompactRow key={item.id} item={item} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const LocationsList = ({
  selectedLocationId,
  onOrderHere,
  onUseClosestLocation,
  isResolvingClosestLocation,
}) => (
  <div className="pt-32 pb-16 px-4 bg-zinc-950">
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h2 className="text-4xl font-black text-white tracking-tighter uppercase border-l-8 border-amber-500 pl-4">
          Find Us
        </h2>
        <button
          onClick={onUseClosestLocation}
          className="bg-zinc-900 border border-zinc-700 text-white font-black uppercase tracking-wide px-5 py-3 hover:border-amber-500 hover:text-amber-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isResolvingClosestLocation}
        >
          {isResolvingClosestLocation ? 'Finding Closest...' : 'Use My Location (Closest)'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {locations.map((loc) => {
          const directionsLink = getDirectionsLink(loc.address);
          const isWebLink = directionsLink.startsWith('http');
          const isSelected = selectedLocationId === loc.id;

          return (
            <div
              key={loc.id}
              className={`bg-zinc-900 border ${
                isSelected ? 'border-amber-500' : 'border-zinc-800'
              } flex flex-col justify-between overflow-hidden group`}
            >
              <div className="h-64 bg-zinc-800 relative overflow-hidden">
                <img
                  src={loc.image}
                  alt={loc.area}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-3xl font-black text-white mb-1 shadow-black drop-shadow-lg">{loc.area}</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-500 font-bold text-sm tracking-widest">{loc.status}</span>
                    {isSelected && <span className="text-amber-500 text-xs font-black tracking-widest">ORDERING HERE</span>}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <p className="text-xl text-zinc-300 font-medium mb-4">{loc.address}</p>
                  <div className="flex items-center text-zinc-500 font-mono text-sm border-t border-zinc-800 pt-4">
                    <Clock size={16} className="mr-2" />
                    {loc.hours}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={directionsLink}
                    target={isWebLink ? '_blank' : undefined}
                    rel={isWebLink ? 'noopener noreferrer' : undefined}
                    className="bg-white text-black font-black uppercase tracking-wide py-4 flex items-center justify-center gap-2 hover:bg-amber-500 transition-colors"
                  >
                    <MapPin size={18} /> Directions <ExternalLink size={14} className="ml-1 opacity-50" />
                  </a>
                  <button
                    onClick={() => onOrderHere(loc.id)}
                    className="bg-amber-500 text-black font-black uppercase tracking-wide py-4 hover:bg-amber-400 transition-colors"
                  >
                    Order Here
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

const AboutSection = () => (
  <div className="pt-32 pb-16 px-4 bg-zinc-950">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="text-white">
          <h2 className="text-4xl font-black tracking-tighter mb-8 uppercase border-l-8 border-amber-500 pl-4">
            COMING HOME AGAIN
          </h2>
          <div className="prose prose-invert prose-lg">
            <p className="text-xl leading-relaxed font-medium text-zinc-300 mb-6">
              Born in Boston. Forged in California. Back home after 30 years in the industry to set
              the standard.
            </p>
            <p className="text-zinc-400 mb-6">
              I've spent four decades watching restaurants overcomplicate simple food. The hot dog
              doesn't need to be reinvented. What needed fixing was the execution. So we fixed it.
            </p>
            <p className="text-zinc-400 mb-6">
              DogHub is what happens when you strip away the excuses and focus entirely on
              technique. Our menu respects the regions that built the culture. Chicago dogs get the
              full build. New York gets the snap. We brought the absolute best of it back to the
              Hub. We don't do "twists" unless they actually make it better.
            </p>
            <div className="mt-12 border-t border-zinc-800 pt-8">
              <h3 className="font-bold text-amber-500 uppercase tracking-widest text-sm mb-2">
                The Standard
              </h3>
              <p className="text-3xl font-black mb-6">FAST. HOT. CHARRED. CORRECT.</p>
              <p className="text-zinc-400 font-medium text-lg leading-relaxed">
                Every dog steamed, then seared. Every bun toasted or steamed to spec. Every topping
                fresh, never from a jar that's been open for three days.
                <br />
                <br />
                This isn't complicated. It's just rarely done right.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-500 text-black p-8 md:p-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]">
          <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 border-b-4 border-black pb-4">
            Our Sourcing
          </h3>
          <div className="space-y-8">
            <div>
              <h4 className="font-black text-xl uppercase mb-1">Vienna Beef</h4>
              <p className="font-bold text-lg leading-tight opacity-90">
                Natural casing franks. Chicago's choice since 1893.
              </p>
            </div>
            <div>
              <h4 className="font-black text-xl uppercase mb-1">Wardynski</h4>
              <p className="font-bold text-lg leading-tight opacity-90">Polish sausage. Buffalo's best.</p>
            </div>
            <div>
              <h4 className="font-black text-xl uppercase mb-1">Martin's</h4>
              <p className="font-bold text-lg leading-tight opacity-90">Potato rolls. The right bun.</p>
            </div>
            <div>
              <h4 className="font-black text-xl uppercase mb-1">Organic Proteins</h4>
              <p className="font-bold text-lg leading-tight opacity-90">
                Free-range chicken and eggs for all breakfast builds.
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t-4 border-black">
            <p className="font-black text-2xl uppercase tracking-tighter">
              No shortcuts.
              <br />
              No substitutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MerchSection = ({ addToCart }) => {
  const teeItem = merch.find((item) => item.id === 801);
  const accessoryItems = merch.filter((item) => item.id !== 801);

  const renderSquareImage = (item) =>
    item.image ? (
      <img
        src={item.image}
        alt={item.item}
        className="w-full aspect-square object-cover bg-zinc-800 mb-4 border border-zinc-800"
      />
    ) : (
      <div className="aspect-square bg-zinc-800 mb-4 flex items-center justify-center text-zinc-600 font-black text-2xl uppercase tracking-tighter group-hover:bg-zinc-700 transition-colors">
        [ {item.item} IMG ]
      </div>
    );

  const renderWideImage = (item) =>
    item.image ? (
      <img
        src={item.image}
        alt={item.item}
        className="w-full aspect-video object-contain mb-4"
      />
    ) : (
      <div className="w-full aspect-video bg-zinc-800 mb-4 flex items-center justify-center text-zinc-600 font-black text-2xl uppercase tracking-tighter group-hover:bg-zinc-700 transition-colors">
        [ {item.item} IMG ]
      </div>
    );

  return (
    <div className="pt-32 pb-16 px-4 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black text-white tracking-tighter mb-8 uppercase border-l-8 border-amber-500 pl-4">
          Merch
        </h2>
        <div className="text-zinc-400 mb-8 max-w-2xl space-y-2">
          <p>Show Sully your love, eat him then wear him!</p>
          <p>We'd love to see our Weiners on your Back, on your head and in your hand!!</p>
        </div>

        {teeItem && (
          <div className="max-w-md mx-auto mb-8">
            <div className="bg-zinc-900 border border-zinc-800 p-6 flex flex-col group">
              {renderSquareImage(teeItem)}
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-white font-black text-xl">{teeItem.item}</h3>
                <span className="text-amber-500 font-bold">${teeItem.price}</span>
              </div>
              <p className="text-zinc-400 text-sm">{teeItem.desc}</p>
              <button
                onClick={() => addToCart(teeItem)}
                className="mt-6 w-full py-3 border border-zinc-600 text-white font-bold uppercase text-sm hover:bg-white hover:text-black transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accessoryItems.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900 border border-zinc-800 p-4 md:p-5 flex flex-col group"
            >
              {renderWideImage(item)}
              <div className="flex flex-col">
                <div className="flex justify-between items-baseline mb-2 gap-2">
                  <h3 className="text-white font-black text-xl">{item.item}</h3>
                  <span className="text-amber-500 font-bold shrink-0">${item.price}</span>
                </div>
                <p className="text-zinc-400 text-sm">{item.desc}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="mt-6 w-full py-3 border border-zinc-600 text-white font-bold uppercase text-sm hover:bg-white hover:text-black transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const InvestorsSection = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="pt-32 pb-16 px-4 bg-zinc-950 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-2 uppercase border-l-8 border-amber-500 pl-4">
          DOGHUB
        </h2>
        <p className="text-amber-500 text-xl font-black tracking-tight mb-8">Steamed. Charred. Perfected.</p>

        <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-8 mb-10 space-y-4">
          <p className="text-zinc-200 text-lg leading-relaxed">
            DogHub is a fast-casual hot dog concept built for high-traffic urban environments.
            Designed around commuter speed, mobile ordering, and operational simplicity, DogHub
            delivers classic regional hot dogs executed correctly and served fast.
          </p>
          <p className="text-zinc-300 text-lg font-bold leading-relaxed">
            This is not novelty food.
            <br />
            It is the hot dog done right.
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-zinc-900 border border-zinc-800 p-6 md:p-8">
            <h3 className="text-xl font-black tracking-widest text-amber-500 uppercase mb-4">
              THE LEXICON: CALCULATED PROVOCATION
            </h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Our brand language is engineered to be sticky, highly viral, and immediately
              understood by our core demographic. We do not use these terms just for shock value.
              They are calculated definitions for our product standards.
            </p>

            <h4 className="text-zinc-100 font-black uppercase tracking-wide mb-2">
              Slut / "Slutty" (Culinary Standard)
            </h4>
            <p className="text-zinc-300 leading-relaxed mb-5">
              In the restaurant industry this term is used to describe food that is intentionally
              excessive, unapologetically decadent, and gloriously messy. This is high-impact
              comfort food built on rich, gooey, heavy ingredients. It is anti-diet food. It
              promises pure indulgence and drives repeat business because it taps directly into
              visceral, late-night cravings.
            </p>

            <h4 className="text-zinc-100 font-black uppercase tracking-wide mb-2">
              "Hand Job" (The Operational Standard)
            </h4>
            <p className="text-zinc-300 leading-relaxed">
              In the restaurant industry this term is used to describe flawless, single-handed
              eating. These menu items require zero utensils, zero table space, and zero friction.
              It is peak grab-and-go efficiency packaged in an unforgettable brand statement. It
              guarantees the customer gets immediate, portable gratification on the move.
            </p>
          </section>

          <section className="bg-zinc-900 border border-zinc-800 p-6 md:p-8">
            <h3 className="text-xl font-black tracking-widest text-amber-500 uppercase mb-4">THE OPPORTUNITY</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Transit hubs and arena districts generate massive foot traffic but surprisingly limited
              fast, savory food options outside of national chains.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">DogHub is built specifically for these environments.</p>
            <p className="text-zinc-300 leading-relaxed mb-3">The concept targets three daily demand windows:</p>
            <ul className="list-disc list-inside text-zinc-200 space-y-1 mb-4">
              <li>Morning commuters</li>
              <li>Lunch traffic</li>
              <li>Late-night event crowds</li>
            </ul>
            <p className="text-zinc-300 leading-relaxed">
              The menu is designed for speed, consistency, and strong margins while maintaining the
              quality expectations of modern fast-casual dining.
            </p>
          </section>

          <section className="bg-zinc-900 border border-zinc-800 p-6 md:p-8">
            <h3 className="text-xl font-black tracking-widest text-amber-500 uppercase mb-4">THE PRODUCT</h3>
            <p className="text-zinc-300 leading-relaxed mb-3">
              DogHub focuses on classic regional hot dogs executed correctly.
            </p>
            <ul className="list-disc list-inside text-zinc-200 space-y-1 mb-4">
              <li>Chicago dogs with natural casing snap</li>
              <li>New York builds with mustard and sauerkraut</li>
              <li>Polish sausages and specialty dogs</li>
              <li>Hand-battered corn dogs and high-margin sides</li>
            </ul>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Breakfast expands the concept with soft-coddled egg cups and fast breakfast sandwiches
              designed for commuter ordering.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              The menu is intentionally tight. Most items share core ingredients, allowing fast
              assembly and consistent quality even during rush periods.
            </p>
          </section>

          <section className="bg-zinc-900 border border-zinc-800 p-6 md:p-8">
            <h3 className="text-xl font-black tracking-widest text-amber-500 uppercase mb-4">THE MODEL</h3>
            <p className="text-zinc-300 leading-relaxed mb-3">DogHub is designed for throughput.</p>
            <ul className="list-disc list-inside text-zinc-200 space-y-1 mb-4">
              <li>Small footprint locations (800-1,200 sq ft)</li>
              <li>Mobile ordering and kiosk-first service</li>
              <li>Minimal menu complexity</li>
              <li>Assembly-line production</li>
            </ul>
            <p className="text-zinc-300 leading-relaxed">
              Orders can be placed from mobile devices while commuting and picked up immediately on
              arrival, reducing ordering congestion and maximizing peak-hour capacity. This model
              prioritizes speed, efficiency, and strong unit economics.
            </p>
          </section>

          <section className="bg-zinc-900 border border-zinc-800 p-6 md:p-8">
            <h3 className="text-xl font-black tracking-widest text-amber-500 uppercase mb-4">
              UNIT ECONOMICS (TARGET)
            </h3>
            <ul className="list-disc list-inside text-zinc-200 space-y-1">
              <li>Average check: $13-$16</li>
              <li>Peak capacity: 120-180 transactions per hour</li>
              <li>Primary traffic: commuter rush, lunch, post-event late night</li>
            </ul>
            <p className="text-zinc-300 leading-relaxed mt-4">
              Hot dogs offer strong food cost control and limited ingredient complexity, creating a
              model that scales efficiently in dense urban markets.
            </p>
          </section>

          <section className="bg-zinc-900 border border-zinc-800 p-6 md:p-8">
            <h3 className="text-xl font-black tracking-widest text-amber-500 uppercase mb-4">
              LOCATION STRATEGY
            </h3>
            <p className="text-zinc-300 leading-relaxed mb-3">
              DogHub is designed for pedestrian-heavy environments.
            </p>
            <ul className="list-disc list-inside text-zinc-200 space-y-1 mb-4">
              <li>Transit stations</li>
              <li>Arena districts</li>
              <li>Dense downtown corridors</li>
            </ul>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Initial launch targets Boston, with a focus on locations such as Hub Hall near North
              Station.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              The brand is intentionally positioned as a small regional concept with disciplined
              growth. Target footprint: 2-4 total locations.
            </p>
          </section>

          <section className="bg-zinc-900 border border-zinc-800 p-6 md:p-8">
            <h3 className="text-xl font-black tracking-widest text-amber-500 uppercase mb-4">THE TEAM</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              DogHub is led by operators with hands-on experience launching and opening multiple
              fast-casual restaurant locations across California markets, including high-volume urban
              environments.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              The concept is built by operators who understand speed, kitchen workflow, and
              real-world restaurant economics.
            </p>
            <p className="text-zinc-100 font-bold uppercase tracking-wide">Execution, not theory.</p>
          </section>

          <section className="bg-zinc-900 border border-zinc-800 p-6 md:p-8">
            <h3 className="text-xl font-black tracking-widest text-amber-500 uppercase mb-4">INVESTMENT</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              DogHub is currently seeking partners for its first flagship location.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Interested investors can request the full business plan, financial model, and expansion
              roadmap.
            </p>
            <a
              href="#request-investor-deck"
              className="inline-flex items-center bg-white text-black font-black uppercase tracking-wide px-6 py-3 hover:bg-amber-500 transition-colors"
            >
              Request Investor Deck
            </a>
          </section>

          <section className="bg-zinc-900 border border-zinc-800 p-6 md:p-8">
            <h3 className="text-xl font-black tracking-widest text-amber-500 uppercase mb-4">WHY NOW</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Fast-casual dining has shifted toward speed, mobile ordering, and limited menus that
              execute consistently under heavy traffic. At the same time, dense urban corridors and
              transit hubs continue to see strong daily foot traffic from commuters, office workers,
              and event crowds.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Hot dogs remain one of the highest-margin and most operationally simple categories in
              food service, yet few modern concepts have built the category around mobile ordering,
              rush-hour throughput, and disciplined menu design.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              DogHub combines a classic American product with a service model designed for today's
              consumer behavior: order on mobile, pick up quickly, and move on. The result is a
              concept built specifically for the environments where time matters most.
            </p>
          </section>

          <section className="bg-zinc-900 border border-zinc-800 p-6 md:p-8">
            <h3 className="text-xl font-black tracking-widest text-amber-500 uppercase mb-4">
              UNIT ECONOMICS (ILLUSTRATIVE)
            </h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Typical DogHub locations are designed to operate in small, efficient footprints with a
              limited menu and high production speed.
            </p>
            <ul className="list-disc list-inside text-zinc-200 space-y-1 mb-4">
              <li>Target footprint: 800-1,200 sq ft</li>
              <li>Average check: $13-$16</li>
              <li>Peak throughput: 120-180 transactions per hour</li>
              <li>Menu design: shared ingredients and rapid assembly</li>
            </ul>
            <p className="text-zinc-300 leading-relaxed mb-3">
              Daily demand is driven by three primary windows:
            </p>
            <ul className="list-disc list-inside text-zinc-200 space-y-1 mb-4">
              <li>Morning commuter traffic</li>
              <li>Lunch rush</li>
              <li>Post-event and late-night crowds</li>
            </ul>
            <p className="text-zinc-300 leading-relaxed">
              The limited ingredient set and simple assembly process allow DogHub to maintain strong
              food cost control while serving high transaction volume during peak periods.
            </p>
          </section>

          <section className="bg-zinc-900 border border-zinc-800 p-6 md:p-8">
            <h3 className="text-xl font-black tracking-widest text-amber-500 uppercase mb-4">
              INVESTMENT OPPORTUNITY
            </h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              DogHub is currently raising capital for its flagship Boston location and initial brand
              launch.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              The first location will establish the operating model, brand presence, and proof of
              concept in a dense, high-traffic environment.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              The long-term strategy is disciplined regional growth, targeting two to four total
              locations in high-foot-traffic urban corridors.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Investors will receive access to the full DogHub business plan, financial projections,
              and development roadmap.
            </p>
          </section>
        </div>

        <section
          id="request-investor-deck"
          className="mt-10 bg-black border border-zinc-800 p-6 md:p-8 scroll-mt-24"
        >
          <p className="text-zinc-400 mb-4">
            To request the full investment package, complete the form below.
          </p>
          <h3 className="text-2xl font-black tracking-tight uppercase mb-6">REQUEST THE INVESTOR DECK</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="investor-name" className="block text-zinc-300 text-sm font-bold uppercase tracking-wider mb-2">
                Name
              </label>
              <input
                id="investor-name"
                name="name"
                type="text"
                required
                className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-3 focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label htmlFor="investor-email" className="block text-zinc-300 text-sm font-bold uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                id="investor-email"
                name="email"
                type="email"
                required
                className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-3 focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label htmlFor="investor-phone" className="block text-zinc-300 text-sm font-bold uppercase tracking-wider mb-2">
                Phone (optional)
              </label>
              <input
                id="investor-phone"
                name="phone"
                type="tel"
                className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-3 focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label htmlFor="investment-range" className="block text-zinc-300 text-sm font-bold uppercase tracking-wider mb-2">
                Investment Interest Range
              </label>
              <input
                id="investment-range"
                name="investmentRange"
                type="text"
                required
                className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-3 focus:outline-none focus:border-amber-500"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto bg-amber-500 text-black font-black uppercase tracking-wide px-8 py-3 hover:bg-amber-400 transition-colors"
            >
              Submit
            </button>
            <p className="text-zinc-400 text-sm pt-1">
              Qualified investors will receive the full DogHub investment deck and financial model.
            </p>
          </form>
        </section>
      </div>
    </div>
  );
};

const LocationPickerModal = ({
  isOpen,
  locationsList,
  pendingItemName,
  onClose,
  onChooseLocation,
  onUseClosestLocation,
  isResolvingClosestLocation,
  errorMessage,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm px-4 py-8 overflow-y-auto">
      <div className="max-w-xl mx-auto bg-zinc-950 border border-zinc-800 p-6 md:p-8 text-white relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
          aria-label="Close location picker"
        >
          <X size={20} />
        </button>

        <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">Choose Pickup Location</h3>
        <p className="text-zinc-400 mb-6">
          {pendingItemName
            ? `Select a location to add "${pendingItemName}" to your bag.`
            : 'Select a location to start your order.'}
        </p>

        <button
          onClick={onUseClosestLocation}
          disabled={isResolvingClosestLocation}
          className="w-full mb-4 bg-zinc-900 border border-zinc-700 text-white font-black uppercase tracking-wide py-3 hover:border-amber-500 hover:text-amber-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isResolvingClosestLocation ? 'Finding Closest...' : 'Use My Location (Closest)'}
        </button>

        {errorMessage && <p className="text-red-400 text-sm mb-4">{errorMessage}</p>}

        <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1">
          {locationsList.map((location) => (
            <button
              key={location.id}
              onClick={() => onChooseLocation(location.id)}
              className="w-full text-left border border-zinc-800 bg-zinc-900 p-4 hover:border-amber-500 transition-colors"
            >
              <div className="font-black uppercase tracking-wide text-white mb-1">{location.area}</div>
              <div className="text-zinc-400 text-sm mb-2">{location.address}</div>
              <div className="text-zinc-500 text-xs uppercase tracking-wider">{location.hours}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-zinc-950 border-t border-zinc-900">
    <div className="bg-black text-zinc-500 py-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center text-center leading-tight">
            <span className="text-zinc-400 text-sm font-bold tracking-widest uppercase">
              TAG US ON SOCIAL MEDIA
            </span>
            <span className="text-amber-500 text-2xl font-black tracking-widest uppercase">
              #DOGHUB
            </span>
          </div>
        </div>
        <div className="border-t border-zinc-900 pt-12 text-center flex flex-col items-center relative">
          <img
            src={sullyMascot}
            alt="DogHub mascot"
            className="w-[7.5rem] h-[7.5rem] mb-6 drop-shadow-[0_0_15px_rgba(245,158,11,0.15)] rounded-xl"
          />
          <p className="text-white font-black text-xl md:text-3xl uppercase tracking-tighter mb-6 hover:text-amber-500 transition-colors cursor-default">
            We'd love to see our wieners in your mouth
          </p>
          <div className="text-xs">© {new Date().getFullYear()} DogHub Operations.</div>
        </div>
      </div>
    </div>
  </footer>
);

const StickyCart = ({ cartTotal, cartCount, onNavigate, activeTab }) => {
  if (cartCount === 0 || activeTab === 'cart') return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-amber-500 text-black p-4 z-50 shadow-2xl animate-slide-up flex justify-between items-center border-t-4 border-black">
      <div className="flex flex-col">
        <span className="text-xs font-black uppercase tracking-widest opacity-80">Your Order</span>
        <span className="text-2xl font-black">${cartTotal.toFixed(2)}</span>
      </div>
      <button
        onClick={() => onNavigate('cart')}
        className="bg-black text-white font-black uppercase tracking-wide px-8 py-3 hover:bg-zinc-800 transition-colors flex items-center gap-2 rounded"
      >
        Checkout <ChevronRight size={18} />
      </button>
    </div>
  );
};

const DogHub = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cart, setCart] = useState([]);
  const [menuSubTab, setMenuSubTab] = useState('breakfast');
  const [selectedLocationId, setSelectedLocationId] = useState(null);
  const [isLocationPickerOpen, setIsLocationPickerOpen] = useState(false);
  const [pendingCartItem, setPendingCartItem] = useState(null);
  const [isResolvingClosestLocation, setIsResolvingClosestLocation] = useState(false);
  const [locationPickerError, setLocationPickerError] = useState('');
  const [isOrderAheadEnabled, setIsOrderAheadEnabled] = useState(false);
  const [pickupAt, setPickupAt] = useState(() => normalizeToMinute(new Date()));
  const [currentTimeMs, setCurrentTimeMs] = useState(() => Date.now());

  const selectedLocation = locations.find((location) => location.id === selectedLocationId) || null;
  const currentTime = normalizeToMinute(new Date(currentTimeMs));
  const normalizedPickupAt = normalizeToMinute(pickupAt);
  const latestPickupTime = new Date(currentTime.getTime() + 24 * 60 * 60 * 1000);
  const effectivePickupAt = isOrderAheadEnabled ? normalizedPickupAt : currentTime;
  const pickupDateOptions = buildOrderAheadDateOptions(currentTime, latestPickupTime);
  const pickupDateValue = formatDateInput(normalizedPickupAt);
  const resolvedPickupDateValue = pickupDateOptions.some((dateOption) => dateOption.value === pickupDateValue)
    ? pickupDateValue
    : pickupDateOptions[0]?.value || pickupDateValue;
  const pickupTimeValue = formatTimeInput(normalizedPickupAt);
  const getAvailableQuarterHoursForDate = (dateValue) =>
    quarterHourTimeOptions.filter((timeValue) => {
      const candidateDateTime = combineDateAndTime(dateValue, timeValue);
      return Boolean(
        candidateDateTime && candidateDateTime >= currentTime && candidateDateTime <= latestPickupTime
      );
    });
  const pickupTimeOptions = getAvailableQuarterHoursForDate(resolvedPickupDateValue);
  const pickupOutOfRangeError =
    isOrderAheadEnabled
      ? normalizedPickupAt < currentTime
        ? 'Pickup time cannot be in the past.'
        : normalizedPickupAt > latestPickupTime
          ? 'Pickup time must be within 24 hours.'
          : ''
      : '';
  const locationClosedAtPickupError =
    selectedLocation && !isLocationOpenAt(selectedLocation, effectivePickupAt)
      ? `${selectedLocation.area} is closed ${isOrderAheadEnabled ? 'at the selected pickup time' : 'right now'}.`
      : '';
  const pickupTimeError = pickupOutOfRangeError || locationClosedAtPickupError;
  const isBreakfastAvailableForPickup = isBreakfastAvailableAt(effectivePickupAt);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => setCurrentTimeMs(Date.now()), 60000);
    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!isOrderAheadEnabled || pickupDateOptions.length === 0) return;

    const isSelectedDateAvailable = pickupDateOptions.some((dateOption) => dateOption.value === pickupDateValue);
    const nextDateValue = isSelectedDateAvailable ? pickupDateValue : pickupDateOptions[0].value;
    const availableTimes = getAvailableQuarterHoursForDate(nextDateValue);
    if (availableTimes.length === 0) return;

    const nextTimeValue =
      isSelectedDateAvailable && availableTimes.includes(pickupTimeValue) ? pickupTimeValue : availableTimes[0];
    const nextPickupAt = combineDateAndTime(nextDateValue, nextTimeValue);
    if (!nextPickupAt) return;

    const normalizedNextPickupAt = normalizeToMinute(nextPickupAt);
    if (normalizedNextPickupAt.getTime() === normalizedPickupAt.getTime()) return;
    setPickupAt(normalizedNextPickupAt);
  }, [isOrderAheadEnabled, pickupDateOptions, pickupDateValue, pickupTimeValue, currentTimeMs]);

  const navigate = (tab, subTab = null) => {
    setActiveTab(tab);
    if (subTab && tab === 'menu') setMenuSubTab(subTab);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const addItemToCart = (item) => {
    const normalizedName = item.name || item.item || 'ITEM';
    const normalizedDesc = item.desc || item.description || '';
    const normalizedItem = { ...item, name: normalizedName, desc: normalizedDesc };

    setCart((prevCart) => {
      if (normalizedItem.isCustom) {
        return [...prevCart, { ...normalizedItem, cartId: Date.now() + Math.random() }];
      }

      const existingIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === normalizedItem.id && !cartItem.isCustom
      );

      if (existingIndex === -1) {
        return [...prevCart, { ...normalizedItem, qty: 1, cartId: Date.now() + Math.random() }];
      }

      return prevCart.map((cartItem, index) =>
        index === existingIndex ? { ...cartItem, qty: (cartItem.qty || 1) + 1 } : cartItem
      );
    });
  };

  const closeLocationPicker = () => {
    setIsLocationPickerOpen(false);
    setPendingCartItem(null);
    setLocationPickerError('');
  };

  const handlePickupDateChange = (dateValue) => {
    if (!dateValue) return;
    setIsOrderAheadEnabled(true);
    const availableTimes = getAvailableQuarterHoursForDate(dateValue);
    const nextTimeValue = availableTimes.includes(pickupTimeValue)
      ? pickupTimeValue
      : availableTimes[0] || pickupTimeValue;
    const nextPickupAt = combineDateAndTime(dateValue, nextTimeValue);
    if (!nextPickupAt) return;
    setPickupAt(normalizeToMinute(nextPickupAt));
  };

  const handlePickupTimeSlotChange = (timeValue) => {
    if (!timeValue) return;
    setIsOrderAheadEnabled(true);
    const nextPickupAt = combineDateAndTime(resolvedPickupDateValue, timeValue);
    if (!nextPickupAt) return;
    setPickupAt(normalizeToMinute(nextPickupAt));
  };

  const handleToggleOrderAhead = () => {
    setIsOrderAheadEnabled((prevEnabled) => {
      const nextEnabled = !prevEnabled;
      if (nextEnabled) {
        const suggestedPickupAt = normalizeToMinute(
          roundUpToQuarterHour(new Date(currentTime.getTime() + 15 * 60 * 1000))
        );
        setPickupAt((prevPickupAt) => {
          const normalizedPrevPickupAt = normalizeToMinute(prevPickupAt);
          const prevDateValue = formatDateInput(normalizedPrevPickupAt);
          const prevTimeValue = formatTimeInput(normalizedPrevPickupAt);
          const prevOptions = getAvailableQuarterHoursForDate(prevDateValue);
          const isPrevValid = prevOptions.includes(prevTimeValue);
          if (!isPrevValid) {
            return suggestedPickupAt;
          }
          return normalizedPrevPickupAt;
        });
      }
      return nextEnabled;
    });
  };

  const handleLocationSelected = (locationId, options = {}) => {
    const { navigateToMenu = false } = options;
    const chosenLocation = locations.find((location) => location.id === locationId);
    const chosenLocationIsOpen = chosenLocation ? isLocationOpenAt(chosenLocation, effectivePickupAt) : false;
    const canApplyPendingItem = pendingCartItem ? chosenLocationIsOpen && !pickupOutOfRangeError : true;

    setSelectedLocationId(locationId);
    setIsLocationPickerOpen(false);
    setLocationPickerError('');

    setPendingCartItem((pendingItem) => {
      if (pendingItem && canApplyPendingItem) addItemToCart(pendingItem);
      return null;
    });

    if (pendingCartItem && !canApplyPendingItem) {
      setIsLocationPickerOpen(true);
      if (pickupOutOfRangeError) {
        setLocationPickerError(pickupOutOfRangeError);
      } else if (chosenLocation) {
        setLocationPickerError(
          `${chosenLocation.area} is closed ${isOrderAheadEnabled ? 'at the selected pickup time' : 'right now'}.`
        );
      }
      return;
    }

    if (navigateToMenu) navigate('menu', 'dogs');
  };

  const handleUseClosestLocation = () => {
    if (typeof navigator === 'undefined' || !navigator.geolocation) {
      setLocationPickerError('Location services are unavailable. Please choose a location manually.');
      return;
    }

    setIsResolvingClosestLocation(true);
    setLocationPickerError('');

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const nearestLocation = getClosestLocation(coords.latitude, coords.longitude);
        setIsResolvingClosestLocation(false);

        if (!nearestLocation) {
          setLocationPickerError('No nearby location found. Please choose a location manually.');
          return;
        }

        handleLocationSelected(nearestLocation.id);
      },
      () => {
        setIsResolvingClosestLocation(false);
        setLocationPickerError('Could not detect your location. Please choose a location manually.');
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 }
    );
  };

  const addToCart = (item) => {
    if (breakfastItemIds.has(item.id) && !isBreakfastAvailableForPickup) return;

    if (pickupOutOfRangeError) {
      setLocationPickerError(pickupOutOfRangeError);
      setIsLocationPickerOpen(true);
      return;
    }

    if (selectedLocation && !isLocationOpenAt(selectedLocation, effectivePickupAt)) {
      setLocationPickerError(
        `${selectedLocation.area} is closed ${isOrderAheadEnabled ? 'at the selected pickup time' : 'right now'}.`
      );
      setIsLocationPickerOpen(true);
      return;
    }

    if (selectedLocationId) {
      addItemToCart(item);
      return;
    }

    setPendingCartItem(item);
    setLocationPickerError('');
    setIsLocationPickerOpen(true);
  };

  const removeOneFromCart = (itemId) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === itemId && !item.isCustom);
      if (itemIndex === -1) return prevCart;

      const item = prevCart[itemIndex];
      const currentQty = item.qty || 1;

      if (currentQty <= 1) {
        return prevCart.filter((_, index) => index !== itemIndex);
      }

      return prevCart.map((cartItem, index) =>
        index === itemIndex ? { ...cartItem, qty: currentQty - 1 } : cartItem
      );
    });
  };

  const removeFromCart = (cartId) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartId !== cartId));
  };

  const cartTotal = cart.reduce(
    (acc, item) => acc + item.price * (item.isCustom ? 1 : item.qty || 1),
    0
  );
  const cartCount = cart.reduce((acc, item) => acc + (item.isCustom ? 1 : item.qty || 1), 0);
  const showStickyCart = cartCount > 0 && activeTab !== 'cart';

  const renderContent = () => {
    switch (activeTab) {
      case 'menu':
        return (
          <MenuList
            onNavigate={navigate}
            cart={cart}
            addToCart={addToCart}
            removeOneFromCart={removeOneFromCart}
            activeCategory={menuSubTab}
            setActiveCategory={setMenuSubTab}
            selectedLocation={selectedLocation}
            isOrderAheadEnabled={isOrderAheadEnabled}
            onToggleOrderAhead={handleToggleOrderAhead}
            pickupDateValue={resolvedPickupDateValue}
            pickupTimeValue={pickupTimeValue}
            pickupDateOptions={pickupDateOptions}
            pickupTimeOptions={pickupTimeOptions}
            onPickupDateChange={handlePickupDateChange}
            onPickupTimeSlotChange={handlePickupTimeSlotChange}
            pickupTimeError={pickupTimeError}
            isBreakfastAvailableForPickup={isBreakfastAvailableForPickup}
          />
        );
      case 'locations':
        return (
          <LocationsList
            selectedLocationId={selectedLocationId}
            onOrderHere={(locationId) => handleLocationSelected(locationId, { navigateToMenu: true })}
            onUseClosestLocation={handleUseClosestLocation}
            isResolvingClosestLocation={isResolvingClosestLocation}
          />
        );
      case 'about':
        return <AboutSection />;
      case 'merch':
        return <MerchSection addToCart={addToCart} />;
      case 'investors':
        return <InvestorsSection />;
      case 'customizer':
        return <LynnerCustomizer onNavigate={navigate} addToCart={addToCart} />;
      case 'cart':
        return (
          <CartView
            cart={cart}
            onRemove={removeFromCart}
            onIncrementItem={addToCart}
            onDecrementItem={removeOneFromCart}
            onNavigate={navigate}
            selectedLocation={selectedLocation}
            isOrderAheadEnabled={isOrderAheadEnabled}
            onToggleOrderAhead={handleToggleOrderAhead}
            pickupDateValue={resolvedPickupDateValue}
            pickupTimeValue={pickupTimeValue}
            pickupDateOptions={pickupDateOptions}
            pickupTimeOptions={pickupTimeOptions}
            onPickupDateChange={handlePickupDateChange}
            onPickupTimeSlotChange={handlePickupTimeSlotChange}
            pickupTimeError={pickupTimeError}
          />
        );
      default:
        return (
          <>
            <Hero onNavigate={navigate} />
            <MethodSection />
          </>
        );
    }
  };

  return (
    <div
      className={`bg-zinc-950 min-h-screen font-sans selection:bg-amber-500 selection:text-black ${
        showStickyCart ? 'pb-24' : ''
      }`}
    >
      <Nav
        activeTab={activeTab}
        onNavigate={navigate}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrolled={scrolled}
        cartCount={cartCount}
      />
      {renderContent()}
      <LocationPickerModal
        isOpen={isLocationPickerOpen}
        locationsList={locations}
        pendingItemName={pendingCartItem?.name || pendingCartItem?.item}
        onClose={closeLocationPicker}
        onChooseLocation={(locationId) => handleLocationSelected(locationId)}
        onUseClosestLocation={handleUseClosestLocation}
        isResolvingClosestLocation={isResolvingClosestLocation}
        errorMessage={locationPickerError}
      />
      <Footer />
      <StickyCart cartTotal={cartTotal} cartCount={cartCount} onNavigate={navigate} activeTab={activeTab} />
    </div>
  );
};

export default DogHub;
