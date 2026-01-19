export interface CassetteTape {
  id: string;
  name: string;
  type: "I" | "II" | "III" | "IV";
  years: string;
  image?: string;
  description?: string;
}

export interface Manufacturer {
  id: string;
  name: string;
  fullName: string;
  country: string;
  logo?: string;
  description: string;
  founded?: string;
  image: string;
  tapes: CassetteTape[];
}

// Using reliable image sources from Wikimedia Commons and other stable sources
export const manufacturers: Manufacturer[] = [
  {
    id: "agfa",
    name: "AGFA",
    fullName: "AGFA-Gevaert",
    country: "Германия",
    founded: "1867",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Agfa_logo.svg",
    description: "AGFA — немецкий производитель фотоматериалов и магнитных лент. Компания производила качественные аудиокассеты с 1960-х до начала 1990-х годов. Особенно известны серии Superferro, Stereochrom и металлические кассеты.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Agfa_Ferrocolor_HD_90_cassette.jpg/640px-Agfa_Ferrocolor_HD_90_cassette.jpg",
    tapes: [
      { id: "agfa-fe-i", name: "FE I", type: "I", years: "1982-1985" },
      { id: "agfa-superferro", name: "Superferro HDX", type: "I", years: "1985-1990" },
      { id: "agfa-stereochrom", name: "Stereochrom", type: "II", years: "1980-1985" },
      { id: "agfa-superchrom", name: "Superchrom HDX", type: "II", years: "1985-1990" },
      { id: "agfa-mp", name: "Metal-S", type: "IV", years: "1982-1988" },
      { id: "agfa-lnx", name: "LNX", type: "I", years: "1975-1980" },
      { id: "agfa-sfe", name: "SFe I", type: "I", years: "1990-1995" },
      { id: "agfa-hdc", name: "HD Chrome", type: "II", years: "1988-1993" },
    ],
  },
  {
    id: "basf",
    name: "BASF",
    fullName: "BASF SE",
    country: "Германия",
    founded: "1865",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/72/BASF-Logo_bw.svg",
    description: "BASF — крупнейший в мире химический концерн, один из пионеров магнитной записи. Именно BASF произвела первую ленту для прототипа кассеты Philips в 1963 году. Известные серии: Ferro Extra, Chrome Super, Metal Maxima.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/BASF_Ferro_Extra_I_90_cassette.jpg/640px-BASF_Ferro_Extra_I_90_cassette.jpg",
    tapes: [
      { id: "basf-lh-ei", name: "LH extra I", type: "I", years: "1982-1988" },
      { id: "basf-ferro-extra", name: "Ferro Extra I", type: "I", years: "1988-1995" },
      { id: "basf-ferro-super", name: "Ferro Super I", type: "I", years: "1991-1996" },
      { id: "basf-chrome-super", name: "Chrome Super II", type: "II", years: "1988-1995" },
      { id: "basf-chrome-maxima", name: "Chrome Maxima II", type: "II", years: "1991-1997" },
      { id: "basf-metal-maxima", name: "Metal Maxima IV", type: "IV", years: "1991-1997" },
      { id: "basf-reference", name: "Reference Maxima", type: "II", years: "1995-1998" },
      { id: "basf-ce-ii", name: "CE II", type: "II", years: "1985-1990" },
    ],
  },
  {
    id: "denon",
    name: "DENON",
    fullName: "Denon / Columbia",
    country: "Япония",
    founded: "1910",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Denon_Logo.svg",
    description: "DENON (Nippon Columbia) — японский производитель аудиотехники премиум-класса. Кассеты Denon отличались высоким качеством ленты и точностью изготовления корпуса. Серии DX, HD входят в число лучших.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Denon_DX1_90_cassette.jpg/640px-Denon_DX1_90_cassette.jpg",
    tapes: [
      { id: "denon-dx1", name: "DX1", type: "I", years: "1983-1990" },
      { id: "denon-dx3", name: "DX3", type: "I", years: "1985-1990" },
      { id: "denon-dx4", name: "DX4", type: "I", years: "1986-1991" },
      { id: "denon-dx7", name: "DX7", type: "I", years: "1988-1992" },
      { id: "denon-hd6", name: "HD6", type: "II", years: "1988-1992" },
      { id: "denon-hd7", name: "HD7", type: "II", years: "1989-1993" },
      { id: "denon-hd8", name: "HD8", type: "II", years: "1990-1995" },
      { id: "denon-hdm", name: "HD-M", type: "IV", years: "1988-1992" },
    ],
  },
  {
    id: "maxell",
    name: "MAXELL",
    fullName: "Maxell (Hitachi Maxell)",
    country: "Япония",
    founded: "1961",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Maxell_logo.svg",
    description: "Maxell — японский производитель магнитных носителей, часть Hitachi. Легендарные серии UD, XL II, XL II-S и Metal Vertex считаются эталоном качества аудиозаписи.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Maxell_UR_90_cassette.jpg/640px-Maxell_UR_90_cassette.jpg",
    tapes: [
      { id: "maxell-ur", name: "UR", type: "I", years: "1988-2020" },
      { id: "maxell-ud", name: "UD", type: "I", years: "1978-1988" },
      { id: "maxell-udi", name: "UD I", type: "I", years: "1988-1996" },
      { id: "maxell-xlii", name: "XL II", type: "II", years: "1979-2000" },
      { id: "maxell-xliis", name: "XL II-S", type: "II", years: "1983-1998" },
      { id: "maxell-mx", name: "MX", type: "IV", years: "1983-1995" },
      { id: "maxell-mxs", name: "MX-S", type: "IV", years: "1988-1995" },
      { id: "maxell-vertex", name: "Metal Vertex", type: "IV", years: "1990-1995" },
    ],
  },
  {
    id: "nakamichi",
    name: "Nakamichi",
    fullName: "Nakamichi Corporation",
    country: "Япония",
    founded: "1948",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Nakamichi_Logo.svg",
    description: "Nakamichi — легендарный японский производитель Hi-Fi аудиотехники, особенно кассетных дек. Собственные кассеты Nakamichi производились в небольших количествах и отличались исключительным качеством.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Compact_Cassette_-_TDK_SA90_%28cropped%29.jpg/640px-Compact_Cassette_-_TDK_SA90_%28cropped%29.jpg",
    tapes: [
      { id: "nak-sx", name: "SX", type: "I", years: "1982-1990" },
      { id: "nak-sxii", name: "SX II", type: "II", years: "1984-1991" },
      { id: "nak-exii", name: "EX II", type: "II", years: "1985-1992" },
      { id: "nak-zx", name: "ZX", type: "IV", years: "1983-1990" },
      { id: "nak-zx-master", name: "ZX Master", type: "IV", years: "1986-1992" },
    ],
  },
  {
    id: "sony",
    name: "SONY",
    fullName: "Sony Corporation",
    country: "Япония",
    founded: "1946",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Sony_logo.svg",
    description: "Sony — один из крупнейших производителей бытовой электроники и носителей информации. Кассеты Sony HF, UX, ES и Metal Master славятся надёжностью и качеством звучания. Sony также изобрела формат Metal.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Sony_HF_90_Cassette.jpg/640px-Sony_HF_90_Cassette.jpg",
    tapes: [
      { id: "sony-demo-yeks-63", name: "Demonstration Cassette YEKS-63", type: "I", years: "1980-е", image: "/images/sony/Sony_demonstration_cassette_YEKS-63.jpg" },
      { id: "sony-demo-cd-814", name: "Demonstration Cassette CD-814", type: "I", years: "1990-е", image: "/images/sony/Sony_demonstration_cassette_CD-814.jpg" },
      { id: "sony-demo-cd-806", name: "Demonstration Cassette DM CD-806", type: "I", years: "1977", image: "/images/sony/Sony_demonstration_cassette_DM_CD-806.jpg" },
      { id: "sony-demo-cd-803", name: "Demonstration Cassette DM CD-803", type: "I", years: "1974", image: "/images/sony/Sony_demonstration_cassette_DM_CD-803.jpg" },
      { id: "sony-demo-cd-802", name: "Demonstration Cassette DM CD-802", type: "I", years: "1972", image: "/images/sony/Sony_demonstration_cassette_DM_CD-802.jpg" },
      { id: "sony-demo-cd-501", name: "Demonstration Cassette DM CD-501", type: "I", years: "1970", image: "/images/sony/Sony_demonstration_cassette_DM_CD-501.jpg" },
      { id: "sony-demo-cd-102", name: "Demonstration Cassette DM CD-102", type: "I", years: "1970", image: "/images/sony/Sony_demonstration_cassette_DM_CD-102.jpg" },
      { id: "sony-zx", name: "ZX", type: "IV", years: "1979-1982", image: "/images/sony/Sony_ZX.jpg" },
      { id: "sony-xtune-2", name: "Xtune 2", type: "II", years: "2000-е", image: "/images/sony/Sony_Xtune_2.jpg" },
      { id: "sony-xs-ii", name: "XS II", type: "II", years: "1980-е", image: "/images/sony/Sony_XS_II.jpg" },
      { id: "sony-hf", name: "HF", type: "I", years: "1985-2010" },
      { id: "sony-hf-s", name: "HF-S", type: "I", years: "1988-1998" },
      { id: "sony-hf-pro", name: "HF-Pro", type: "I", years: "1990-1996" },
      { id: "sony-ux", name: "UX", type: "II", years: "1988-1998" },
      { id: "sony-ux-s", name: "UX-S", type: "II", years: "1988-1998" },
      { id: "sony-ux-pro", name: "UX-Pro", type: "II", years: "1990-1997" },
      { id: "sony-ux-es", name: "UX-ES", type: "II", years: "1992-1997" },
      { id: "sony-metal-es", name: "Metal-ES", type: "IV", years: "1988-1995" },
      { id: "sony-metal-sr", name: "Metal-SR", type: "IV", years: "1989-1994" },
      { id: "sony-metal-master", name: "Metal Master", type: "IV", years: "1990-1997" },
    ],
  },
  {
    id: "tdk",
    name: "TDK",
    fullName: "TDK Corporation",
    country: "Япония",
    founded: "1935",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/TDK-Logo.svg",
    description: "TDK — японский производитель электронных компонентов и магнитных носителей. Кассеты TDK D, SA, SA-X и MA являются иконами индустрии. Серия SA (Super Avilyn) стала эталоном для Type II.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Compact_Cassette_-_TDK_SA90_%28cropped%29.jpg/640px-Compact_Cassette_-_TDK_SA90_%28cropped%29.jpg",
    tapes: [
      { id: "tdk-d", name: "D", type: "I", years: "1975-2010" },
      { id: "tdk-d-c", name: "D-C", type: "I", years: "1982-1990" },
      { id: "tdk-ad", name: "AD", type: "I", years: "1983-2000" },
      { id: "tdk-ad-s", name: "AD-S", type: "I", years: "1986-1995" },
      { id: "tdk-ar", name: "AR", type: "I", years: "1988-1998" },
      { id: "tdk-ar-x", name: "AR-X", type: "I", years: "1990-1997" },
      { id: "tdk-sa", name: "SA", type: "II", years: "1975-2000" },
      { id: "tdk-sa-x", name: "SA-X", type: "II", years: "1983-1998" },
      { id: "tdk-sa-xs", name: "SA-XS", type: "II", years: "1990-1997" },
      { id: "tdk-ma", name: "MA", type: "IV", years: "1979-2000" },
      { id: "tdk-ma-x", name: "MA-X", type: "IV", years: "1986-1995" },
      { id: "tdk-ma-xg", name: "MA-XG", type: "IV", years: "1990-1997" },
    ],
  },
  {
    id: "goldstar",
    name: "Gold Star / LG",
    fullName: "Gold Star (LG Electronics)",
    country: "Южная Корея",
    founded: "1958",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/LG_logo_%282023%29.svg",
    description: "Gold Star (ныне LG) — южнокорейский производитель электроники. Кассеты Gold Star предлагали хорошее соотношение цены и качества. После ребрендинга в LG производство кассет было прекращено.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Compact_audio_cassette_1.jpg/640px-Compact_audio_cassette_1.jpg",
    tapes: [
      { id: "gs-hd", name: "HD", type: "I", years: "1985-1995" },
      { id: "gs-gx", name: "GX", type: "I", years: "1988-1993" },
      { id: "gs-hi-fi", name: "Hi-Fi", type: "I", years: "1986-1992" },
      { id: "gs-ucx", name: "UCX", type: "II", years: "1988-1995" },
      { id: "gs-ucx-s", name: "UCX-S", type: "II", years: "1990-1995" },
      { id: "gs-metal", name: "Metal", type: "IV", years: "1990-1995" },
    ],
  },
];

export const getManufacturerById = (id: string): Manufacturer | undefined => {
  return manufacturers.find((m) => m.id === id);
};
