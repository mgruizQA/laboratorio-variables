const estilo = "font-weight:bold; background-color:green; font-size:14px";

interface grupoMusical {
  nombreGrupo: string;
  añoFundacion: number;
  activo: boolean;
  generoMusical: string;
}

const grupoMusicalA: grupoMusical = {
  nombreGrupo: "The Beatles",
  añoFundacion: 1960,
  activo: true,
  generoMusical: "Pop Rock",
};

const grupoMusicalB: grupoMusical = {
  nombreGrupo: "Queen",
  añoFundacion: 1970,
  activo: false,
  generoMusical: "Rock",
};

const grupoMusicalC: grupoMusical = {
  nombreGrupo: "AC/DC",
  añoFundacion: 1973,
  activo: true,
  generoMusical: "Hard Rock",
};

const grupoMusicalD: grupoMusical = {
  nombreGrupo: "Ludwig van Beethoven ",
  añoFundacion: 1770,
  activo: false,
  generoMusical: "Clásica",
};

const grupoMusicalE: grupoMusical = {
  nombreGrupo: "The Rolling Stones",
  añoFundacion: 1962,
  activo: true,
  generoMusical: "Rock",
};

//grupomusicalA
console.log(`%c${grupoMusicalA.nombreGrupo}`, estilo);
console.log(`Año:${grupoMusicalA.añoFundacion}
Activo:${grupoMusicalA.activo}
Genero Musical:${grupoMusicalA.generoMusical}

`);

//grupomusicalB
console.log(`%c${grupoMusicalB.nombreGrupo}`, estilo);
console.log(`Año:${grupoMusicalB.añoFundacion}
Activo:${grupoMusicalB.activo}
Genero Musical:${grupoMusicalB.generoMusical}

`);

//grupomusicalC
console.log(`%c${grupoMusicalC.nombreGrupo}`, estilo);
console.log(`Año:${grupoMusicalC.añoFundacion}
Activo:${grupoMusicalC.activo}
Genero Musical:${grupoMusicalC.generoMusical}

`);

//grupomusicalD
console.log(`%c${grupoMusicalD.nombreGrupo}`, estilo);
console.log(`Año: ${grupoMusicalD.añoFundacion}
Activo: ${grupoMusicalD.activo}
Genero Musical: ${grupoMusicalD.generoMusical}

`);

//grupomusicalE
console.log(`%c${grupoMusicalE.nombreGrupo}`, estilo);
console.log(`Año: ${grupoMusicalE.añoFundacion}
Activo: ${grupoMusicalE.activo}
Genero Musical: ${grupoMusicalE.generoMusical}
`);
