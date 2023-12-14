let periodicTable = [
    {
        "symbol": "H",
        "name": "Hydrogen",
        "amu": 1.00797
    },
    {
        "symbol": "He",
        "name": "Helium",
        "amu": 4.0026
    },
    {
        "symbol": "Li",
        "name": "Lithium",
        "amu": 6.941
    },
    {
        "symbol": "Be",
        "name": "Beryllium",
        "amu": 9.01218
    },
    {
        "symbol": "B",
        "name": "Boron",
        "amu": 10.81
    },
    {
        "symbol": "C",
        "name": "Carbon",
        "amu": 12.011
    },
    {
        "symbol": "N",
        "name": "Nitrogen",
        "amu": 14.0067
    },
    {
        "symbol": "O",
        "name": "Oxygen",
        "amu": 15.9994
    },
    {
        "symbol": "F",
        "name": "Fluorine",
        "amu": 18.998403
    },
    {
        "symbol": "Ne",
        "name": "Neon",
        "amu": 20.179
    },
    {
        "symbol": "Na",
        "name": "Sodium",
        "amu": 22.98977
    },
    {
        "symbol": "Mg",
        "name": "Magnesium",
        "amu": 24.305
    },
    {
        "symbol": "Al",
        "name": "Aluminum",
        "amu": 26.98154
    },
    {
        "symbol": "Si",
        "name": "Silicon",
        "amu": 28.0855
    },
    {
        "symbol": "P",
        "name": "Phosphorus",
        "amu": 30.97376
    },
    {
        "symbol": "S",
        "name": "Sulfur",
        "amu": 32.06
    },
    {
        "symbol": "Cl",
        "name": "Chlorine",
        "amu": 35.453
    },
    {
        "symbol": "Ar",
        "name": "Argon",
        "amu": 39.948
    },
    {
        "symbol": "K",
        "name": "Potassium",
        "amu": 39.0983
    },
    {
        "symbol": "Ca",
        "name": "Calcium",
        "amu": 40.08
    },
    {
        "symbol": "Sc",
        "name": "Scandium",
        "amu": 44.9559
    },
    {
        "symbol": "Ti",
        "name": "Titanium",
        "amu": 47.9
    },
    {
        "symbol": "V",
        "name": "Vanadium",
        "amu": 50.9415
    },
    {
        "symbol": "Cr",
        "name": "Chromium",
        "amu": 51.996
    },
    {
        "symbol": "Mn",
        "name": "Manganese",
        "amu": 54.938
    },
    {
        "symbol": "Fe",
        "name": "Iron",
        "amu": 55.847
    },
    {
        "symbol": "Co",
        "name": "Cobalt",
        "amu": 58.9332
    },
    {
        "symbol": "Ni",
        "name": "Nickel",
        "amu": 58.7
    },
    {
        "symbol": "Cu",
        "name": "Copper",
        "amu": 63.546
    },
    {
        "symbol": "Zn",
        "name": "Zinc",
        "amu": 65.38
    },
    {
        "symbol": "Ga",
        "name": "Gallium",
        "amu": 69.72
    },
    {
        "symbol": "Ge",
        "name": "Germanium",
        "amu": 72.59
    },
    {
        "symbol": "As",
        "name": "Arsenic",
        "amu": 74.9216
    },
    {
        "symbol": "Se",
        "name": "Selenium",
        "amu": 78.96
    },
    {
        "symbol": "Br",
        "name": "Bromine",
        "amu": 79.904
    },
    {
        "symbol": "Kr",
        "name": "Krypton",
        "amu": 83.8
    },
    {
        "symbol": "Rb",
        "name": "Rubidium",
        "amu": 85.4678
    },
    {
        "symbol": "Sr",
        "name": "Strontium",
        "amu": 87.62
    },
    {
        "symbol": "Y",
        "name": "Yttrium",
        "amu": 88.9059
    },
    {
        "symbol": "Zr",
        "name": "Zirconium",
        "amu": 91.22
    },
    {
        "symbol": "Nb",
        "name": "Niobium",
        "amu": 92.9064
    },
    {
        "symbol": "Mo",
        "name": "Molybdenum",
        "amu": 95.94
    },
    {
        "symbol": "Tc",
        "name": "Technetium",
        "amu": 98
    },
    {
        "symbol": "Ru",
        "name": "Ruthenium",
        "amu": 101.07
    },
    {
        "symbol": "Rh",
        "name": "Rhodium",
        "amu": 102.9055
    },
    {
        "symbol": "Pd",
        "name": "Palladium",
        "amu": 106.4
    },
    {
        "symbol": "Ag",
        "name": "Silver",
        "amu": 107.868
    },
    {
        "symbol": "Cd",
        "name": "Cadmium",
        "amu": 112.41
    },
    {
        "symbol": "In",
        "name": "Indium",
        "amu": 114.82
    },
    {
        "symbol": "Sn",
        "name": "Tin",
        "amu": 118.69
    },
    {
        "symbol": "Sb",
        "name": "Antimony",
        "amu": 121.75
    },
    {
        "symbol": "Te",
        "name": "Tellurium",
        "amu": 127.6
    },
    {
        "symbol": "I",
        "name": "Iodine",
        "amu": 126.9045
    },
    {
        "symbol": "Xe",
        "name": "Xenon",
        "amu": 131.29
    },
    {
        "symbol": "Cs",
        "name": "Cesium",
        "amu": 132.9054
    },
    {
        "symbol": "Ba",
        "name": "Barium",
        "amu": 137.33
    },
    {
        "symbol": "La",
        "name": "Lanthanum",
        "amu": 138.9055
    },
    {
        "symbol": "Ce",
        "name": "Cerium",
        "amu": 140.12
    },
    {
        "symbol": "Pr",
        "name": "Praseodymium",
        "amu": 140.9077
    },
    {
        "symbol": "Nd",
        "name": "Neodymium",
        "amu": 144.24
    },
    {
        "symbol": "Pm",
        "name": "Promethium",
        "amu": 144.913
    },
    {
        "symbol": "Sm",
        "name": "Samarium",
        "amu": 150.4
    },
    {
        "symbol": "Eu",
        "name": "Europium",
        "amu": 151.96
    },
    {
        "symbol": "Gd",
        "name": "Gadolinium",
        "amu": 157.25
    },
    {
        "symbol": "Tb",
        "name": "Terbium",
        "amu": 158.9254
    },
    {
        "symbol": "Dy",
        "name": "Dysprosium",
        "amu": 162.5
    },
    {
        "symbol": "Ho",
        "name": "Holmium",
        "amu": 164.9304
    },
    {
        "symbol": "Er",
        "name": "Erbium",
        "amu": 167.26
    },
    {
        "symbol": "Tm",
        "name": "Thulium",
        "amu": 168.9342
    },
    {
        "symbol": "Yb",
        "name": "Ytterbium",
        "amu": 173.04
    },
    {
        "symbol": "Lu",
        "name": "Lutetium",
        "amu": 174.967
    },
    {
        "symbol": "Hf",
        "name": "Hafnium",
        "amu": 178.49
    },
    {
        "symbol": "Ta",
        "name": "Tantalum",
        "amu": 180.9479
    },
    {
        "symbol": "W",
        "name": "Tungsten",
        "amu": 183.85
    },
    {
        "symbol": "Re",
        "name": "Rhenium",
        "amu": 186.207
    },
    {
        "symbol": "Os",
        "name": "Osmium",
        "amu": 190.2
    },
    {
        "symbol": "Ir",
        "name": "Iridium",
        "amu": 192.22
    },
    {
        "symbol": "Pt",
        "name": "Platinum",
        "amu": 195.09
    },
    {
        "symbol": "Au",
        "name": "Gold",
        "amu": 196.9665
    },
    {
        "symbol": "Hg",
        "name": "Mercury",
        "amu": 200.59
    },
    {
        "symbol": "Tl",
        "name": "Thallium",
        "amu": 204.37
    },
    {
        "symbol": "Pb",
        "name": "Lead",
        "amu": 207
    },
    {
        "symbol": "Bi",
        "name": "Bismuth",
        "amu": 208.9804
    },
    {
        "symbol": "Po",
        "name": "Polonium",
        "amu": 208.982
    },
    {
        "symbol": "At",
        "name": "Astatine",
        "amu": 209.987
    },
    {
        "symbol": "Rn",
        "name": "Radon",
        "amu": 222.0176
    },
    {
        "symbol": "Fr",
        "name": "Francium",
        "amu": 223.01973
    },
    {
        "symbol": "Ra",
        "name": "Radium",
        "amu": 226.0254
    },
    {
        "symbol": "Ac",
        "name": "Actinium",
        "amu": 227.0278
    },
    {
        "symbol": "Th",
        "name": "Thorium",
        "amu": 232.0381
    },
    {
        "symbol": "Pa",
        "name": "Protactinium",
        "amu": 231.0359
    },
    {
        "symbol": "U",
        "name": "Uranium",
        "amu": 238.029
    },
    {
        "symbol": "Np",
        "name": "Neptunium",
        "amu": 237.0482
    },
    {
        "symbol": "Pu",
        "name": "Plutonium",
        "amu": 242.064
    },
    {
        "symbol": "Am",
        "name": "Americium",
        "amu": 243.06
    },
    {
        "symbol": "Cm",
        "name": "Curium",
        "amu": 247.07
    },
    {
        "symbol": "Bk",
        "name": "Berkelium",
        "amu": 247.07
    },
    {
        "symbol": "Cf",
        "name": "Californium",
        "amu": 251.08
    },
    {
        "symbol": "Es",
        "name": "Einsteinium",
        "amu": 252.083
    },
    {
        "symbol": "Fm",
        "name": "Fermium",
        "amu": 257.095
    },
    {
        "symbol": "Md",
        "name": "Mendelevium",
        "amu": 258.098
    },
    {
        "symbol": "No",
        "name": "Nobelium",
        "amu": 259.101
    },
    {
        "symbol": "Lr",
        "name": "Lawrencium",
        "amu": 266.120
    },
    {
        "symbol": "Rf",
        "name": "Rutherfordium",
        "amu": 267.122
    },
    {
        "symbol": "Db",
        "name": "Dubnium",
        "amu": 268.126
    },
    {
        "symbol": "Sg",
        "name": "Seaborgium",
        "amu": 269.128
    },
    {
        "symbol": "Bh",
        "name": "Bohrium",
        "amu": 270.133
    },
    {
        "symbol": "Hs",
        "name": "Hassium",
        "amu": 269.1336
    },
    {
        "symbol": "Mt",
        "name": "Meitnerium",
        "amu": 277.154
    },
    {
        "symbol": "Ds",
        "name": "Darmstadtium",
        "amu": 269.166
    },
    {
        "symbol": "Rg",
        "name": "Roentgenium",
        "amu": 272.169
    },
    {
        "symbol": "Cn",
        "name": "Copernicium",
        "amu": 286.179
    },
    {
        "symbol": "Nh",
        "name": "Nihonium",
        "amu": 286.182
    },
    {
        "symbol": "Fl",
        "name": "Flerovium",
        "amu": 290.192
    },
    {
        "symbol": "Mc",
        "name": "Moscovium",
        "amu": 290.196
    },
    {
        "symbol": "Lv",
        "name": "Livermorium",
        "amu": 293.205
    },
    {
        "symbol": "Ts",
        "name": "Tennessine",
        "amu": 294.211
    },
    {
        "symbol": "Og",
        "name": "Oganesson",
        "amu": 295.216
    }
];

class Atom {
    constructor(particle, number) {
        if (!particle) throw new Error('empty particle supplied');
        if (typeof particle !== "string") throw new Error(`expected string, got ${typeof particle}`);
        this.particle = particle;
        this.number = isNaN(number) ? 1 : parseInt(number);
    }
    className() { return "Atom"; }
    clone() {
        return new Atom(this.particle, this.number);
    }
    simplify() { return this.clone(); }
    count() {
        return {[this.particle]: this.number};
    }
    getAtomData() {
        let particle = periodicTable.find(data => data.symbol === this.particle);
        if (!particle) throw new Error(`unknown symbol ${this.particle}`);
        return particle;
    }
    getAtomicMass() {
        return this.getAtomData().amu * this.number;
    }

    // This function is just so the parser doesn't return an error
    getMolarMass() {
        return this.getAtomicMass();
    }
}