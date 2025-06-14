// PFTG Spiral Periodic Table Data + Layout

const elements = [
  {
    "symbol": "H",
    "name": "H",
    "number": 1,
    "zone": "Core",
    "color": "#00ffff",
    "desc": "Core \u2013 Primordial scalar anchor"
  },
  {
    "symbol": "He",
    "name": "He",
    "number": 2,
    "zone": "Zone 1",
    "color": "#00ffaa",
    "desc": "Zone 1 \u2013 First pressure shell"
  },
  {
    "symbol": "Li",
    "name": "Li",
    "number": 3,
    "zone": "Zone 1",
    "color": "#00ffaa",
    "desc": "Zone 1 \u2013 First pressure shell"
  },
  {
    "symbol": "Be",
    "name": "Be",
    "number": 4,
    "zone": "Zone 1",
    "color": "#00ffaa",
    "desc": "Zone 1 \u2013 First pressure shell"
  },
  {
    "symbol": "B",
    "name": "B",
    "number": 5,
    "zone": "Zone 1",
    "color": "#00ffaa",
    "desc": "Zone 1 \u2013 First pressure shell"
  },
  {
    "symbol": "C",
    "name": "C",
    "number": 6,
    "zone": "Zone 1",
    "color": "#00ffaa",
    "desc": "Zone 1 \u2013 First pressure shell"
  },
  {
    "symbol": "N",
    "name": "N",
    "number": 7,
    "zone": "Zone 1",
    "color": "#00ffaa",
    "desc": "Zone 1 \u2013 First pressure shell"
  },
  {
    "symbol": "O",
    "name": "O",
    "number": 8,
    "zone": "Zone 1",
    "color": "#00ffaa",
    "desc": "Zone 1 \u2013 First pressure shell"
  },
  {
    "symbol": "F",
    "name": "F",
    "number": 9,
    "zone": "Zone 1",
    "color": "#00ffaa",
    "desc": "Zone 1 \u2013 First pressure shell"
  },
  {
    "symbol": "Ne",
    "name": "Ne",
    "number": 10,
    "zone": "Zone 1",
    "color": "#00ffaa",
    "desc": "Zone 1 \u2013 First pressure shell"
  },
  {
    "symbol": "Na",
    "name": "Na",
    "number": 11,
    "zone": "Zone 2",
    "color": "#aaff00",
    "desc": "Zone 2 \u2013 Stable field shell"
  },
  {
    "symbol": "Mg",
    "name": "Mg",
    "number": 12,
    "zone": "Zone 2",
    "color": "#aaff00",
    "desc": "Zone 2 \u2013 Stable field shell"
  },
  {
    "symbol": "Al",
    "name": "Al",
    "number": 13,
    "zone": "Zone 2",
    "color": "#aaff00",
    "desc": "Zone 2 \u2013 Stable field shell"
  },
  {
    "symbol": "Si",
    "name": "Si",
    "number": 14,
    "zone": "Zone 2",
    "color": "#aaff00",
    "desc": "Zone 2 \u2013 Stable field shell"
  },
  {
    "symbol": "P",
    "name": "P",
    "number": 15,
    "zone": "Zone 2",
    "color": "#aaff00",
    "desc": "Zone 2 \u2013 Stable field shell"
  },
  {
    "symbol": "S",
    "name": "S",
    "number": 16,
    "zone": "Zone 2",
    "color": "#aaff00",
    "desc": "Zone 2 \u2013 Stable field shell"
  },
  {
    "symbol": "Cl",
    "name": "Cl",
    "number": 17,
    "zone": "Zone 2",
    "color": "#aaff00",
    "desc": "Zone 2 \u2013 Stable field shell"
  },
  {
    "symbol": "Ar",
    "name": "Ar",
    "number": 18,
    "zone": "Zone 2",
    "color": "#aaff00",
    "desc": "Zone 2 \u2013 Stable field shell"
  },
  {
    "symbol": "K",
    "name": "K",
    "number": 19,
    "zone": "Zone 3",
    "color": "#ffaa00",
    "desc": "Zone 3 \u2013 Field compression anchor"
  },
  {
    "symbol": "Ca",
    "name": "Ca",
    "number": 20,
    "zone": "Zone 3",
    "color": "#ffaa00",
    "desc": "Zone 3 \u2013 Field compression anchor"
  },
  {
    "symbol": "Sc",
    "name": "Sc",
    "number": 21,
    "zone": "Zone 3",
    "color": "#ffaa00",
    "desc": "Zone 3 \u2013 Field compression anchor"
  },
  {
    "symbol": "Ti",
    "name": "Ti",
    "number": 22,
    "zone": "Zone 3",
    "color": "#ffaa00",
    "desc": "Zone 3 \u2013 Field compression anchor"
  },
  {
    "symbol": "V",
    "name": "V",
    "number": 23,
    "zone": "Zone 3",
    "color": "#ffaa00",
    "desc": "Zone 3 \u2013 Field compression anchor"
  },
  {
    "symbol": "Cr",
    "name": "Cr",
    "number": 24,
    "zone": "Zone 3",
    "color": "#ffaa00",
    "desc": "Zone 3 \u2013 Field compression anchor"
  },
  {
    "symbol": "Mn",
    "name": "Mn",
    "number": 25,
    "zone": "Zone 3",
    "color": "#ffaa00",
    "desc": "Zone 3 \u2013 Field compression anchor"
  },
  {
    "symbol": "Fe",
    "name": "Fe",
    "number": 26,
    "zone": "Zone 3",
    "color": "#ffaa00",
    "desc": "Zone 3 \u2013 Field compression anchor"
  },
  {
    "symbol": "Co",
    "name": "Co",
    "number": 27,
    "zone": "Zone 3",
    "color": "#ffaa00",
    "desc": "Zone 3 \u2013 Field compression anchor"
  },
  {
    "symbol": "Ni",
    "name": "Ni",
    "number": 28,
    "zone": "Zone 3",
    "color": "#ffaa00",
    "desc": "Zone 3 \u2013 Field compression anchor"
  },
  {
    "symbol": "Cu",
    "name": "Cu",
    "number": 29,
    "zone": "Zone 3",
    "color": "#ffaa00",
    "desc": "Zone 3 \u2013 Field compression anchor"
  },
  {
    "symbol": "Zn",
    "name": "Zn",
    "number": 30,
    "zone": "Zone 3",
    "color": "#ffaa00",
    "desc": "Zone 3 \u2013 Field compression anchor"
  },
  {
    "symbol": "Ga",
    "name": "Ga",
    "number": 31,
    "zone": "Zone 4",
    "color": "#ff70aa",
    "desc": "Zone 4 \u2013 Transition & resonance zone"
  },
  {
    "symbol": "Ge",
    "name": "Ge",
    "number": 32,
    "zone": "Zone 4",
    "color": "#ff70aa",
    "desc": "Zone 4 \u2013 Transition & resonance zone"
  },
  {
    "symbol": "As",
    "name": "As",
    "number": 33,
    "zone": "Zone 4",
    "color": "#ff70aa",
    "desc": "Zone 4 \u2013 Transition & resonance zone"
  },
  {
    "symbol": "Se",
    "name": "Se",
    "number": 34,
    "zone": "Zone 4",
    "color": "#ff70aa",
    "desc": "Zone 4 \u2013 Transition & resonance zone"
  },
  {
    "symbol": "Br",
    "name": "Br",
    "number": 35,
    "zone": "Zone 4",
    "color": "#ff70aa",
    "desc": "Zone 4 \u2013 Transition & resonance zone"
  },
  {
    "symbol": "Kr",
    "name": "Kr",
    "number": 36,
    "zone": "Zone 4",
    "color": "#ff70aa",
    "desc": "Zone 4 \u2013 Transition & resonance zone"
  },
  {
    "symbol": "Rb",
    "name": "Rb",
    "number": 37,
    "zone": "Zone 4",
    "color": "#ff70aa",
    "desc": "Zone 4 \u2013 Transition & resonance zone"
  },
  {
    "symbol": "Sr",
    "name": "Sr",
    "number": 38,
    "zone": "Zone 4",
    "color": "#ff70aa",
    "desc": "Zone 4 \u2013 Transition & resonance zone"
  },
  {
    "symbol": "Y",
    "name": "Y",
    "number": 39,
    "zone": "Zone 4",
    "color": "#ff70aa",
    "desc": "Zone 4 \u2013 Transition & resonance zone"
  },
  {
    "symbol": "Zr",
    "name": "Zr",
    "number": 40,
    "zone": "Zone 4",
    "color": "#ff70aa",
    "desc": "Zone 4 \u2013 Transition & resonance zone"
  },
  {
    "symbol": "Nb",
    "name": "Nb",
    "number": 41,
    "zone": "Zone 4",
    "color": "#ff70aa",
    "desc": "Zone 4 \u2013 Transition & resonance zone"
  },
  {
    "symbol": "Mo",
    "name": "Mo",
    "number": 42,
    "zone": "Zone 4",
    "color": "#ff70aa",
    "desc": "Zone 4 \u2013 Transition & resonance zone"
  },
  {
    "symbol": "Tc",
    "name": "Tc",
    "number": 43,
    "zone": "Zone 4",
    "color": "#ff70aa",
    "desc": "Zone 4 \u2013 Transition & resonance zone"
  },
  {
    "symbol": "Ru",
    "name": "Ru",
    "number": 44,
    "zone": "Zone 4",
    "color": "#ff70aa",
    "desc": "Zone 4 \u2013 Transition & resonance zone"
  },
  {
    "symbol": "Rh",
    "name": "Rh",
    "number": 45,
    "zone": "Zone 4",
    "color": "#ff70aa",
    "desc": "Zone 4 \u2013 Transition & resonance zone"
  },
  {
    "symbol": "Pd",
    "name": "Pd",
    "number": 46,
    "zone": "Zone 4",
    "color": "#ff70aa",
    "desc": "Zone 4 \u2013 Transition & resonance zone"
  },
  {
    "symbol": "Ag",
    "name": "Ag",
    "number": 47,
    "zone": "Zone 4",
    "color": "#ff70aa",
    "desc": "Zone 4 \u2013 Transition & resonance zone"
  },
  {
    "symbol": "Cd",
    "name": "Cd",
    "number": 48,
    "zone": "Zone 4",
    "color": "#ff70aa",
    "desc": "Zone 4 \u2013 Transition & resonance zone"
  },
  {
    "symbol": "In",
    "name": "In",
    "number": 49,
    "zone": "Zone 4",
    "color": "#ff70aa",
    "desc": "Zone 4 \u2013 Transition & resonance zone"
  },
  {
    "symbol": "Sn",
    "name": "Sn",
    "number": 50,
    "zone": "Zone 4",
    "color": "#ff70aa",
    "desc": "Zone 4 \u2013 Transition & resonance zone"
  },
  {
    "symbol": "Sb",
    "name": "Sb",
    "number": 51,
    "zone": "Zone 4",
    "color": "#ff70aa",
    "desc": "Zone 4 \u2013 Transition & resonance zone"
  },
  {
    "symbol": "Te",
    "name": "Te",
    "number": 52,
    "zone": "Zone 4",
    "color": "#ff70aa",
    "desc": "Zone 4 \u2013 Transition & resonance zone"
  },
  {
    "symbol": "I",
    "name": "I",
    "number": 53,
    "zone": "Zone 4",
    "color": "#ff70aa",
    "desc": "Zone 4 \u2013 Transition & resonance zone"
  },
  {
    "symbol": "Xe",
    "name": "Xe",
    "number": 54,
    "zone": "Zone 4",
    "color": "#ff70aa",
    "desc": "Zone 4 \u2013 Transition & resonance zone"
  },
  {
    "symbol": "Cs",
    "name": "Cs",
    "number": 55,
    "zone": "Zone 4",
    "color": "#ff70aa",
    "desc": "Zone 4 \u2013 Transition & resonance zone"
  },
  {
    "symbol": "Ba",
    "name": "Ba",
    "number": 56,
    "zone": "Zone 4",
    "color": "#ff70aa",
    "desc": "Zone 4 \u2013 Transition & resonance zone"
  },
  {
    "symbol": "La",
    "name": "La",
    "number": 57,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Ce",
    "name": "Ce",
    "number": 58,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Pr",
    "name": "Pr",
    "number": 59,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Nd",
    "name": "Nd",
    "number": 60,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Pm",
    "name": "Pm",
    "number": 61,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Sm",
    "name": "Sm",
    "number": 62,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Eu",
    "name": "Eu",
    "number": 63,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Gd",
    "name": "Gd",
    "number": 64,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Tb",
    "name": "Tb",
    "number": 65,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Dy",
    "name": "Dy",
    "number": 66,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Ho",
    "name": "Ho",
    "number": 67,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Er",
    "name": "Er",
    "number": 68,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Tm",
    "name": "Tm",
    "number": 69,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Yb",
    "name": "Yb",
    "number": 70,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Lu",
    "name": "Lu",
    "number": 71,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Hf",
    "name": "Hf",
    "number": 72,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Ta",
    "name": "Ta",
    "number": 73,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "W",
    "name": "W",
    "number": 74,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Re",
    "name": "Re",
    "number": 75,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Os",
    "name": "Os",
    "number": 76,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Ir",
    "name": "Ir",
    "number": 77,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Pt",
    "name": "Pt",
    "number": 78,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Au",
    "name": "Au",
    "number": 79,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Hg",
    "name": "Hg",
    "number": 80,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Tl",
    "name": "Tl",
    "number": 81,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Pb",
    "name": "Pb",
    "number": 82,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Bi",
    "name": "Bi",
    "number": 83,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Po",
    "name": "Po",
    "number": 84,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "At",
    "name": "At",
    "number": 85,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Rn",
    "name": "Rn",
    "number": 86,
    "zone": "Zone 5",
    "color": "#ff0070",
    "desc": "Zone 5 \u2013 High field distortion zone"
  },
  {
    "symbol": "Fr",
    "name": "Fr",
    "number": 87,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Ra",
    "name": "Ra",
    "number": 88,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Ac",
    "name": "Ac",
    "number": 89,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Th",
    "name": "Th",
    "number": 90,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Pa",
    "name": "Pa",
    "number": 91,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "U",
    "name": "U",
    "number": 92,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Np",
    "name": "Np",
    "number": 93,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Pu",
    "name": "Pu",
    "number": 94,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Am",
    "name": "Am",
    "number": 95,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Cm",
    "name": "Cm",
    "number": 96,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Bk",
    "name": "Bk",
    "number": 97,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Cf",
    "name": "Cf",
    "number": 98,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Es",
    "name": "Es",
    "number": 99,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Fm",
    "name": "Fm",
    "number": 100,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Md",
    "name": "Md",
    "number": 101,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "No",
    "name": "No",
    "number": 102,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Lr",
    "name": "Lr",
    "number": 103,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Rf",
    "name": "Rf",
    "number": 104,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Db",
    "name": "Db",
    "number": 105,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Sg",
    "name": "Sg",
    "number": 106,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Bh",
    "name": "Bh",
    "number": 107,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Hs",
    "name": "Hs",
    "number": 108,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Mt",
    "name": "Mt",
    "number": 109,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Ds",
    "name": "Ds",
    "number": 110,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Rg",
    "name": "Rg",
    "number": 111,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Cn",
    "name": "Cn",
    "number": 112,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Nh",
    "name": "Nh",
    "number": 113,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Fl",
    "name": "Fl",
    "number": 114,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Mc",
    "name": "Mc",
    "number": 115,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Lv",
    "name": "Lv",
    "number": 116,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Ts",
    "name": "Ts",
    "number": 117,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  },
  {
    "symbol": "Og",
    "name": "Og",
    "number": 118,
    "zone": "Zone 6",
    "color": "#8800ff",
    "desc": "Zone 6 \u2013 Outer instability fringe"
  }
];

// TODO: Add spiral layout and interactivity logic here (in next code step)

