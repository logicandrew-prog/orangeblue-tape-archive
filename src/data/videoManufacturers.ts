export interface VideoManufacturer {
  id: string;
  name: string;
  fullName: string;
  country: string;
  logo?: string;
  description: string;
  folder: string;
}

export const videoManufacturers: VideoManufacturer[] = [
  {
    id: "agfa-video",
    name: "AGFA",
    fullName: "AGFA-Gevaert",
    country: "Германия",
    logo: "/Logos/Agfa.jpeg",
    description: "AGFA — немецкий производитель видеокассет VHS и Video 2000.",
    folder: "AGFA",
  },
  {
    id: "akai-video",
    name: "Akai",
    fullName: "Akai Electric Co., Ltd.",
    country: "Япония",
    logo: "/Logos/Akai-logo.png",
    description: "Akai — японский производитель видеотехники и видеокассет.",
    folder: "AKAI",
  },
  {
    id: "basf-video",
    name: "BASF",
    fullName: "BASF SE / Emtec",
    country: "Германия",
    logo: "/Logos/BASF.jpg",
    description: "BASF — производитель качественных видеокассет VHS и Video 2000.",
    folder: "BASF",
  },
  {
    id: "fuji-video",
    name: "Fuji",
    fullName: "Fujifilm Corporation",
    country: "Япония",
    logo: "/Logos/fuji-logo.png",
    description: "Fuji — производитель видеокассет VHS, S-VHS, Hi8 и других форматов.",
    folder: "FUJI",
  },
  {
    id: "goldstar-video",
    name: "Gold Star",
    fullName: "Gold Star (LG Electronics)",
    country: "Южная Корея",
    logo: "/Logos/Gold_star.png",
    description: "Gold Star — южнокорейский производитель бюджетных видеокассет.",
    folder: "GoldStar",
  },
  {
    id: "jvc-video",
    name: "JVC",
    fullName: "Victor Company of Japan",
    country: "Япония",
    logo: "/Logos/JVC-Logo.png",
    description: "JVC — изобретатель формата VHS, производитель премиальных видеокассет.",
    folder: "JVC",
  },
  {
    id: "lg-video",
    name: "LG",
    fullName: "LG Electronics",
    country: "Южная Корея",
    logo: "/Logos/Gold_star.png",
    description: "LG — современные видеокассеты южнокорейского производителя.",
    folder: "LG",
  },
  {
    id: "panasonic-video",
    name: "Panasonic",
    fullName: "Panasonic Corporation",
    country: "Япония",
    logo: "/Logos/panasonic.png",
    description: "Panasonic — японский гигант, производитель видеокассет всех форматов.",
    folder: "Panasonic",
  },
  {
    id: "skc-video",
    name: "SKC",
    fullName: "SKC Co., Ltd.",
    country: "Южная Корея",
    logo: "/Logos/skc-logo.png",
    description: "SKC — южнокорейский производитель видеокассет с хорошим соотношением цены и качества.",
    folder: "SKC",
  },
  {
    id: "hi8",
    name: "Hi-8",
    fullName: "Hi8 Format",
    country: "Международный",
    description: "Коллекция кассет формата Hi8 различных производителей.",
    folder: "Hi-8",
  },
  {
    id: "minidv",
    name: "MiniDV",
    fullName: "MiniDV Format",
    country: "Международный",
    description: "Коллекция кассет формата MiniDV различных производителей.",
    folder: "MiniDV",
  },
  {
    id: "video8",
    name: "Video8",
    fullName: "Video8 Format",
    country: "Международный",
    description: "Коллекция кассет формата Video8 различных производителей.",
    folder: "Video8",
  },
  {
    id: "video2000",
    name: "Video 2000",
    fullName: "Video 2000 / V2000",
    country: "Европа",
    description: "Коллекция кассет формата Video 2000 (Philips/Grundig).",
    folder: "Video2000",
  },
  {
    id: "vhs-pro",
    name: "VHS/S-VHS Pro",
    fullName: "Professional VHS & S-VHS",
    country: "Международный",
    description: "Профессиональные видеокассеты VHS и S-VHS.",
    folder: "VHS_SVHS_PRO",
  },
  {
    id: "sony-video",
    name: "Sony",
    fullName: "Sony Corporation",
    country: "Япония",
    logo: "/Logos/Sony.jpeg",
    description: "Sony — один из крупнейших производителей видеокассет VHS, Betamax, Video8 и Hi8.",
    folder: "Sony",
  },
  {
    id: "tdk-video",
    name: "TDK",
    fullName: "TDK Corporation",
    country: "Япония",
    logo: "/Logos/TDK.jpg",
    description: "TDK — японский производитель высококачественных видеокассет VHS и S-VHS.",
    folder: "TDK",
  },
  {
    id: "vhs-c",
    name: "VHS-C",
    fullName: "VHS-Compact",
    country: "Международный",
    description: "Коллекция компактных видеокассет формата VHS-C различных производителей.",
    folder: "VHS-C",
  },
];

export const getVideoManufacturerById = (id: string): VideoManufacturer | undefined => {
  return videoManufacturers.find((m) => m.id === id);
};
