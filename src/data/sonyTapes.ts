import { CassetteTape } from "./manufacturers";

// Parse type from description string
const parseType = (desc: string): "I" | "II" | "III" | "IV" => {
  if (desc.includes("Type 4") || desc.includes("IEC4")) return "IV";
  if (desc.includes("Type 3") || desc.includes("IEC3")) return "III";
  if (desc.includes("Type 2") || desc.includes("IEC2")) return "II";
  return "I";
};

export interface SonyTape extends CassetteTape {
  duration?: string;
  externalImage?: string;
}

export const sonyTapes: SonyTape[] = [
  // A-La series
  { id: "sony-a-la-0", name: "A-La", type: "I", years: "", duration: "46 мин.", image: "/images/sony/Sony_A-La_0.jpg", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20A-La/0/cassettes_1_0.jpg" },
  { id: "sony-a-la-1", name: "A-La", type: "I", years: "", duration: "46 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20A-La/0/cassettes_1_0.jpg" },
  { id: "sony-a-la-2", name: "A-La", type: "I", years: "", duration: "46 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20A-La/0/cassettes_1_0.jpg" },
  { id: "sony-a-la-3", name: "A-La", type: "I", years: "", duration: "46 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20A-La/1/cassettes_1_0.jpg" },
  { id: "sony-a-la-4", name: "A-La", type: "I", years: "", duration: "46 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20A-La/2/cassettes_1_0.jpg" },
  { id: "sony-a-la-5", name: "A-La", type: "I", years: "", duration: "46 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20A-La/3/cassettes_1_0.jpg" },
  { id: "sony-a-la-6", name: "A-La", type: "I", years: "", duration: "46 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20A-La/4/cassettes_1_0.jpg" },
  
  // AHF series
  { id: "sony-ahf-7", name: "AHF", type: "I", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20AHF/0/cassettes_1_0.jpg" },
  { id: "sony-ahf-8", name: "AHF", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20AHF/1/cassettes_1_0.jpg" },
  
  // BHF series
  { id: "sony-bhf-9", name: "BHF", type: "I", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20BHF/0/cassettes_1_0.jpg" },
  { id: "sony-bhf-10", name: "BHF", type: "I", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20BHF/1/cassettes_1_0.jpg" },
  
  // C-1 Head Cleaners
  { id: "sony-c-1c-11", name: "C-1C (Head Cleaner)", type: "I", years: "", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20C-1C/0/cassettes_1_0.jpg" },
  { id: "sony-c-1kd-12", name: "C-1KD (Head Cleaner)", type: "I", years: "", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20C-1KD/0/cassettes_1_0.jpg" },
  { id: "sony-c-1kw-13", name: "C-1KW (Head Cleaner)", type: "I", years: "", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20C-1KW/0/cassettes_1_0.jpg" },
  
  // C series
  { id: "sony-c-14", name: "C", type: "I", years: "", duration: "30 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20C/0/cassettes_1_0.jpg" },
  { id: "sony-c-15", name: "C", type: "I", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20C/1/cassettes_1_0.jpg" },
  { id: "sony-c-16", name: "C", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20C/10/cassettes_1_0.jpg" },
  { id: "sony-c-17", name: "C", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20C/11/cassettes_1_0.jpg" },
  { id: "sony-c-18", name: "C", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20C/12/cassettes_1_0.jpg" },
  { id: "sony-c-19", name: "C", type: "I", years: "", duration: "120 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20C/13/cassettes_1_0.jpg" },
  { id: "sony-c-20", name: "C", type: "I", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20C/2/cassettes_1_0.jpg" },
  { id: "sony-c-21", name: "C", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20C/3/cassettes_1_0.jpg" },
  { id: "sony-c-22", name: "C", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20C/4/cassettes_1_0.jpg" },
  { id: "sony-c-23", name: "C", type: "I", years: "", duration: "120 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20C/5/cassettes_1_0.jpg" },
  { id: "sony-c-24", name: "C", type: "I", years: "", duration: "30 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20C/6/cassettes_1_0.jpg" },
  { id: "sony-c-25", name: "C", type: "I", years: "", duration: "45 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20C/7/cassettes_1_0.jpg" },
  { id: "sony-c-26", name: "C", type: "I", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20C/8/cassettes_1_0.jpg" },
  { id: "sony-c-27", name: "C", type: "I", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20C/9/cassettes_1_0.jpg" },
  
  // CBS
  { id: "sony-cbs-28", name: "CBS", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CBS/0/cassettes_1_0.jpg" },
  
  // CD Alpha
  { id: "sony-cd-alpha-29", name: "CD Alpha", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CD%20Alpha/0/cassettes_1_0.jpg" },
  
  // CD-IT Pro
  { id: "sony-cd-it-pro-30", name: "CD-IT Pro", type: "II", years: "", duration: "100 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CD-IT%20Pro/0/cassettes_1_0.jpg" },
  { id: "sony-cd-it-pro-31", name: "CD-IT Pro", type: "II", years: "", duration: "74 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CD-IT%20Pro/1/cassettes_1_0.jpg" },
  
  // CD-IT
  { id: "sony-cd-it-32", name: "CD-IT", type: "II", years: "", duration: "100 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CD-IT/0/cassettes_1_0.jpg" },
  { id: "sony-cd-it-33", name: "CD-IT", type: "II", years: "", duration: "74 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CD-IT/1/cassettes_1_0.jpg" },
  
  // CDIT 1
  { id: "sony-cdit-1-34", name: "CDIT 1", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIT%201/0/cassettes_1_0.jpg" },
  { id: "sony-cdit-1-35", name: "CDIT 1", type: "I", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIT%201/1/cassettes_1_0.jpg" },
  { id: "sony-cdit-1-36", name: "CDIT 1", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIT%201/2/cassettes_1_0.jpg" },
  
  // CDIT 2
  { id: "sony-cdit-2-37", name: "CDIT 2", type: "II", years: "", duration: "74 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIT%202/0/cassettes_1_0.jpg" },
  { id: "sony-cdit-2-38", name: "CDIT 2", type: "II", years: "", duration: "74 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIT%202/1/cassettes_1_0.jpg" },
  { id: "sony-cdit-2-39", name: "CDIT 2", type: "II", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIT%202/2/cassettes_1_0.jpg" },
  { id: "sony-cdit-2-40", name: "CDIT 2", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIT%202/3/cassettes_1_0.jpg" },
  { id: "sony-cdit-2-41", name: "CDIT 2", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIT%202/4/cassettes_1_0.jpg" },
  { id: "sony-cdit-2-42", name: "CDIT 2", type: "II", years: "", duration: "74 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIT%202/5/cassettes_1_0.jpg" },
  
  // CDIT 4
  { id: "sony-cdit-4-43", name: "CDIT 4", type: "IV", years: "", duration: "100 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIT%204/0/cassettes_1_0.jpg" },
  { id: "sony-cdit-4-44", name: "CDIT 4", type: "IV", years: "", duration: "74 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIT%204/1/cassettes_1_0.jpg" },
  { id: "sony-cdit-4-45", name: "CDIT 4", type: "IV", years: "", duration: "54 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIT%204/2/cassettes_1_0.jpg" },
  { id: "sony-cdit-4-46", name: "CDIT 4", type: "IV", years: "", duration: "94 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIT%204/3/cassettes_1_0.jpg" },
  
  // CDIX 1
  { id: "sony-cdix-1-47", name: "CDIX 1", type: "I", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIX%201/0/cassettes_1_0.jpg" },
  { id: "sony-cdix-1-48", name: "CDIX 1", type: "I", years: "", duration: "150 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIX%201/1/cassettes_1_0.jpg" },
  { id: "sony-cdix-1-49", name: "CDIX 1", type: "I", years: "", duration: "150 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIX%201/2/cassettes_1_0.jpg" },
  
  // CDIX 2
  { id: "sony-cdix-2-50", name: "CDIX 2", type: "II", years: "", duration: "74 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIX%202/0/cassettes_1_0.jpg" },
  { id: "sony-cdix-2-51", name: "CDIX 2", type: "II", years: "", duration: "74 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIX%202/1/cassettes_1_0.jpg" },
  { id: "sony-cdix-2-52", name: "CDIX 2", type: "II", years: "", duration: "50 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIX%202/2/cassettes_1_0.jpg" },
  { id: "sony-cdix-2-53", name: "CDIX 2", type: "II", years: "", duration: "74 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIX%202/3/cassettes_1_0.jpg" },
  { id: "sony-cdix-2-54", name: "CDIX 2", type: "II", years: "", duration: "54 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIX%202/4/cassettes_1_0.jpg" },
  { id: "sony-cdix-2-55", name: "CDIX 2", type: "II", years: "", duration: "74 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIX%202/5/cassettes_1_0.jpg" },
  { id: "sony-cdix-2-56", name: "CDIX 2", type: "II", years: "", duration: "40 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIX%202/6/cassettes_1_0.jpg" },
  { id: "sony-cdix-2-57", name: "CDIX 2", type: "II", years: "", duration: "54 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIX%202/7/cassettes_1_0.jpg" },
  
  // CDIX 4
  { id: "sony-cdix-4-58", name: "CDIX 4", type: "IV", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIX%204/0/cassettes_1_0.jpg" },
  { id: "sony-cdix-4-59", name: "CDIX 4", type: "IV", years: "", duration: "46 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIX%204/1/cassettes_1_0.jpg" },
  { id: "sony-cdix-4-60", name: "CDIX 4", type: "IV", years: "", duration: "54 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CDIX%204/2/cassettes_1_0.jpg" },
  
  // CHF
  { id: "sony-chf-61", name: "CHF", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CHF/0/cassettes_1_0.jpg" },
  
  // CR / CRO
  { id: "sony-cr-62", name: "CR", type: "II", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CR/0/cassettes_1_0.jpg" },
  { id: "sony-cro-63", name: "CRO", type: "II", years: "", duration: "92 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20CRO/0/cassettes_1_0.jpg" },
  
  // Chiara UX
  { id: "sony-chiara-ux-64", name: "Chiara UX", type: "II", years: "", duration: "70 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Chiara%20UX/0/cassettes_1_0.jpg" },
  { id: "sony-chiara-ux-65", name: "Chiara UX", type: "II", years: "", duration: "50 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Chiara%20UX/1/cassettes_1_0.jpg" },
  
  // Chrome
  { id: "sony-chrome-66", name: "Chrome", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Chrome/0/cassettes_1_0.jpg" },
  
  // Classic
  { id: "sony-classic-67", name: "Classic", type: "I", years: "", duration: "74 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Classic/0/cassettes_1_0.jpg" },
  
  // DC
  { id: "sony-dc-68", name: "DC", type: "I", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20DC/0/cassettes_1_0.jpg" },
  { id: "sony-dc-69", name: "DC", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20DC/1/cassettes_1_0.jpg" },
  { id: "sony-dc-70", name: "DC", type: "I", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20DC/2/cassettes_1_0.jpg" },
  
  // Demonstration tapes
  { id: "sony-demo-csj-31", name: "Demonstration Magazine Tape CSJ-31", type: "I", years: "", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Demonstration%20Magazine%20Tape%20CSJ-31/0/cassettes_1_0.jpg" },
  { id: "sony-demo-tape-72", name: "Demonstration Tape", type: "I", years: "", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Demonstration%20Tape/0/cassettes_1_0.jpg" },
  
  // Dictation
  { id: "sony-dictation-73", name: "Dictation Cassette", type: "I", years: "", duration: "10 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Dictation%20Cassette/0/cassettes_1_0.jpg" },
  
  // Do
  { id: "sony-do-74", name: "Do", type: "II", years: "", duration: "46 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Do/0/cassettes_1_0.jpg" },
  
  // Driving Power Meter
  { id: "sony-dpm-tw-2412", name: "Driving Power Meter TW-2412", type: "I", years: "", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Driving%20Power%20Meter%20TW-2412/0/cassettes_1_0.jpg" },
  { id: "sony-dpm-tw-2413", name: "Driving Power Meter TW-2413", type: "I", years: "", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Driving%20Power%20Meter%20TW-2413/0/cassettes_1_0.jpg" },
  
  // Duad (Type III)
  { id: "sony-duad-77", name: "Duad", type: "III", years: "", duration: "30 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Duad/0/cassettes_1_0.jpg" },
  { id: "sony-duad-78", name: "Duad", type: "III", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Duad/1/cassettes_1_0.jpg" },
  { id: "sony-duad-79", name: "Duad", type: "III", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Duad/2/cassettes_1_0.jpg" },
  
  // EF
  { id: "sony-ef-80", name: "EF", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20EF/0/cassettes_1_0.jpg" },
  { id: "sony-ef-81", name: "EF", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20EF/1/cassettes_1_0.jpg" },
  { id: "sony-ef-82", name: "EF", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20EF/2/cassettes_1_0.jpg" },
  { id: "sony-ef-83", name: "EF", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20EF/3/cassettes_1_0.jpg" },
  
  // ES-II
  { id: "sony-es-ii-84", name: "ES-II", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20ES-II/0/cassettes_1_0.jpg" },
  { id: "sony-es-ii-85", name: "ES-II", type: "II", years: "", duration: "74 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20ES-II/1/cassettes_1_0.jpg" },
  { id: "sony-es-ii-86", name: "ES-II", type: "II", years: "", duration: "54 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20ES-II/2/cassettes_1_0.jpg" },
  
  // ES-IV
  { id: "sony-es-iv-87", name: "ES-IV", type: "IV", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20ES-IV/0/cassettes_1_0.jpg" },
  { id: "sony-es-iv-88", name: "ES-IV", type: "IV", years: "", duration: "100 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20ES-IV/1/cassettes_1_0.jpg" },
  
  // Esprit
  { id: "sony-esprit-i-89", name: "Esprit-I", type: "I", years: "", duration: "100 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Esprit-I/0/cassettes_1_0.jpg" },
  { id: "sony-esprit-ii-90", name: "Esprit-II", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Esprit-II/0/cassettes_1_0.jpg" },
  { id: "sony-esprit-iv-91", name: "Esprit-IV", type: "IV", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Esprit-IV/0/cassettes_1_0.jpg" },
  
  // FN
  { id: "sony-fn-92", name: "FN", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20FN/0/cassettes_1_0.jpg" },
  { id: "sony-fn-93", name: "FN", type: "I", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20FN/1/cassettes_1_0.jpg" },
  
  // FX I
  { id: "sony-fx-i-94", name: "FX I", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20FX%20I/0/cassettes_1_0.jpg" },
  { id: "sony-fx-i-95", name: "FX I", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20FX%20I/1/cassettes_1_0.jpg" },
  
  // FX II
  { id: "sony-fx-ii-96", name: "FX II", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20FX%20II/0/cassettes_1_0.jpg" },
  { id: "sony-fx-ii-97", name: "FX II", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20FX%20II/1/cassettes_1_0.jpg" },
  
  // FX
  { id: "sony-fx-98", name: "FX", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20FX/0/cassettes_1_0.jpg" },
  { id: "sony-fx-99", name: "FX", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20FX/1/cassettes_1_0.jpg" },
  
  // FeCr (Type III)
  { id: "sony-fecr-100", name: "FeCr", type: "III", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20FeCr/0/cassettes_1_0.jpg" },
  { id: "sony-fecr-101", name: "FeCr", type: "III", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20FeCr/1/cassettes_1_0.jpg" },
  
  // Firma
  { id: "sony-firma-102", name: "Firma", type: "I", years: "", duration: "70 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Firma/0/cassettes_1_0.jpg" },
  { id: "sony-firma-103", name: "Firma", type: "I", years: "", duration: "70 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Firma/1/cassettes_1_0.jpg" },
  
  // G-UP / GF-X / GIG-2
  { id: "sony-g-up-104", name: "G-UP", type: "II", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20G-UP/0/cassettes_1_0.jpg" },
  { id: "sony-gf-x-105", name: "GF-X", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20GF-X/0/cassettes_1_0.jpg" },
  { id: "sony-gig-2-106", name: "GIG-2", type: "II", years: "", duration: "120 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20GIG-2/0/cassettes_1_0.jpg" },
  { id: "sony-gig-2-107", name: "GIG-2", type: "II", years: "", duration: "46 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20GIG-2/1/cassettes_1_0.jpg" },
  { id: "sony-gig-2-108", name: "GIG-2", type: "II", years: "", duration: "80 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20GIG-2/2/cassettes_1_0.jpg" },
  
  // HD-F
  { id: "sony-hd-f-109", name: "HD-F", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HD-F/0/cassettes_1_0.jpg" },
  
  // HF-ES
  { id: "sony-hf-es-110", name: "HF-ES", type: "I", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF-ES/0/cassettes_1_0.jpg" },
  { id: "sony-hf-es-111", name: "HF-ES", type: "I", years: "", duration: "46 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF-ES/1/cassettes_1_0.jpg" },
  { id: "sony-hf-es-112", name: "HF-ES", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF-ES/2/cassettes_1_0.jpg" },
  { id: "sony-hf-es-113", name: "HF-ES", type: "I", years: "", duration: "54 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF-ES/3/cassettes_1_0.jpg" },
  
  // HF-Pro
  { id: "sony-hf-pro-114", name: "HF-Pro", type: "I", years: "", duration: "74 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF-Pro/0/cassettes_1_0.jpg" },
  { id: "sony-hf-pro-115", name: "HF-Pro", type: "I", years: "", duration: "46 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF-Pro/1/cassettes_1_0.jpg" },
  
  // HF-S
  { id: "sony-hf-s-116", name: "HF-S", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF-S/0/cassettes_1_0.jpg" },
  { id: "sony-hf-s-117", name: "HF-S", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF-S/1/cassettes_1_0.jpg" },
  { id: "sony-hf-s-118", name: "HF-S", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF-S/2/cassettes_1_0.jpg" },
  { id: "sony-hf-s-119", name: "HF-S", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF-S/3/cassettes_1_0.jpg" },
  { id: "sony-hf-s-120", name: "HF-S", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF-S/4/cassettes_1_0.jpg" },
  
  // HF-X
  { id: "sony-hf-x-121", name: "HF-X", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF-X/0/cassettes_1_0.jpg" },
  
  // HF (many variants)
  { id: "sony-hf-122", name: "HF", type: "I", years: "", duration: "46 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF/0/cassettes_1_0.jpg" },
  { id: "sony-hf-123", name: "HF", type: "I", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF/1/cassettes_1_0.jpg" },
  { id: "sony-hf-124", name: "HF", type: "I", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF/10/cassettes_1_0.jpg" },
  { id: "sony-hf-125", name: "HF", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF/12/cassettes_1_0.jpg" },
  { id: "sony-hf-126", name: "HF", type: "I", years: "", duration: "46 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF/13/cassettes_1_0.jpg" },
  { id: "sony-hf-127", name: "HF", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF/14/cassettes_1_0.jpg" },
  { id: "sony-hf-128", name: "HF", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF/15/cassettes_1_0.jpg" },
  { id: "sony-hf-129", name: "HF", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF/16/cassettes_1_0.jpg" },
  { id: "sony-hf-130", name: "HF", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF/17/cassettes_1_0.jpg" },
  { id: "sony-hf-131", name: "HF", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF/18/cassettes_1_0.jpg" },
  { id: "sony-hf-132", name: "HF", type: "I", years: "", duration: "10 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF/19/cassettes_1_0.jpg" },
  { id: "sony-hf-133", name: "HF", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF/2/cassettes_1_0.jpg" },
  { id: "sony-hf-134", name: "HF", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF/20/cassettes_1_0.jpg" },
  { id: "sony-hf-135", name: "HF", type: "I", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF/21/cassettes_1_0.jpg" },
  { id: "sony-hf-136", name: "HF", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF/22/cassettes_1_0.jpg" },
  { id: "sony-hf-137", name: "HF", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF/23/cassettes_1_0.jpg" },
  { id: "sony-hf-138", name: "HF", type: "I", years: "", duration: "120 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF/24/cassettes_1_0.jpg" },
  { id: "sony-hf-139", name: "HF", type: "I", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF/25/cassettes_1_0.jpg" },
  { id: "sony-hf-140", name: "HF", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF/3/cassettes_1_0.jpg" },
  { id: "sony-hf-141", name: "HF", type: "I", years: "", duration: "120 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF/4/cassettes_1_0.jpg" },
  { id: "sony-hf-143", name: "HF", type: "I", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF/6/cassettes_1_0.jpg" },
  { id: "sony-hf-144", name: "HF", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF/7/cassettes_1_0.jpg" },
  { id: "sony-hf-145", name: "HF", type: "I", years: "", duration: "120 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF/8/cassettes_1_0.jpg" },
  { id: "sony-hf-146", name: "HF", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HF/9/cassettes_1_0.jpg" },
  
  // HFII / HFX / Hi-Fi
  { id: "sony-hfii-147", name: "HFII", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HFII/0/cassettes_1_0.jpg" },
  { id: "sony-hfx-148", name: "HFX", type: "I", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20HFX/0/cassettes_1_0.jpg" },
  { id: "sony-hi-fi-149", name: "Hi-Fi", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Hi-Fi/0/cassettes_1_0.jpg" },
  { id: "sony-hip-pop-150", name: "Hip Pop", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Hip%20Pop/0/cassettes_1_0.jpg" },
  
  // JHF / LNX
  { id: "sony-jhf-151", name: "JHF", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20JHF/0/cassettes_1_0.jpg" },
  { id: "sony-lnx-152", name: "LNX", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20LNX/0/cassettes_1_0.jpg" },
  
  // Magazine Tape
  { id: "sony-mag-153", name: "Magazine Tape", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Magazine%20Tape/0/cassettes_1_0.jpg" },
  { id: "sony-mag-154", name: "Magazine Tape", type: "I", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Magazine%20Tape/1/cassettes_1_0.jpg" },
  { id: "sony-mag-155", name: "Magazine Tape", type: "I", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Magazine%20Tape/2/cassettes_1_0.jpg" },
  { id: "sony-mag-156", name: "Magazine Tape", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Magazine%20Tape/3/cassettes_1_0.jpg" },
  
  // Metal ES
  { id: "sony-metal-es-158", name: "Metal ES", type: "IV", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Metal%20ES/0/cassettes_1_0.jpg" },
  { id: "sony-metal-es-159", name: "Metal ES", type: "IV", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Metal%20ES/1/cassettes_1_0.jpg" },
  { id: "sony-metal-es-160", name: "Metal ES", type: "IV", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Metal%20ES/2/cassettes_1_0.jpg" },
  
  // Metal Master
  { id: "sony-metal-master-161", name: "Metal Master", type: "IV", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Metal%20Master/0/cassettes_1_0.jpg" },
  { id: "sony-metal-master-162", name: "Metal Master", type: "IV", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Metal%20Master/1/cassettes_1_0.jpg" },
  
  // Metal SR / Select / Turbo
  { id: "sony-metal-sr-163", name: "Metal SR", type: "IV", years: "", duration: "100 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Metal%20SR/0/cassettes_1_0.jpg" },
  { id: "sony-metal-select-164", name: "Metal Select", type: "IV", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Metal%20Select/0/cassettes_1_0.jpg" },
  { id: "sony-metal-turbo-165", name: "Metal Turbo", type: "IV", years: "", duration: "54 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Metal%20Turbo/0/cassettes_1_0.jpg" },
  
  // Metal X / XR
  { id: "sony-metal-x-166", name: "Metal X", type: "IV", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Metal%20X/0/cassettes_1_0.jpg" },
  { id: "sony-metal-xr-167", name: "Metal XR", type: "IV", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Metal%20XR/0/cassettes_1_0.jpg" },
  { id: "sony-metal-xr-168", name: "Metal XR", type: "IV", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Metal%20XR/1/cassettes_1_0.jpg" },
  { id: "sony-metal-xr-169", name: "Metal XR", type: "IV", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Metal%20XR/2/cassettes_1_0.jpg" },
  { id: "sony-metal-xr-170", name: "Metal XR", type: "IV", years: "", duration: "46 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Metal%20XR/3/cassettes_1_0.jpg" },
  { id: "sony-metal-xr-171", name: "Metal XR", type: "IV", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Metal%20XR/4/cassettes_1_0.jpg" },
  { id: "sony-metal-xr-172", name: "Metal XR", type: "IV", years: "", duration: "80 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Metal%20XR/5/cassettes_1_0.jpg" },
  
  // Metal-S / Metallic
  { id: "sony-metal-s-173", name: "Metal-S", type: "IV", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Metal-S/0/cassettes_1_0.jpg" },
  { id: "sony-metallic-174", name: "Metallic", type: "IV", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Metallic/0/cassettes_1_0.jpg" },
  { id: "sony-metallic-175", name: "Metallic", type: "IV", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Metallic/1/cassettes_1_0.jpg" },
  
  // Mirror / Nota / SOM
  { id: "sony-mirror-176", name: "Mirror Cassette MC-112C", type: "I", years: "", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Mirror%20Cassette%20MC-112C/0/cassettes_1_0.jpg" },
  { id: "sony-nota-177", name: "Nota", type: "I", years: "", duration: "54 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Nota/0/cassettes_1_0.jpg" },
  { id: "sony-nota-178", name: "Nota", type: "I", years: "", duration: "74 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Nota/1/cassettes_1_0.jpg" },
  { id: "sony-som-179", name: "SOM", type: "I", years: "", duration: "15 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20SOM/0/cassettes_1_0.jpg" },
  
  // Stamina / Super CDIT 2
  { id: "sony-stamina-180", name: "Stamina XII", type: "II", years: "", duration: "54 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Stamina%20XII/0/cassettes_1_0.jpg" },
  { id: "sony-super-cdit-181", name: "Super CDIT 2", type: "II", years: "", duration: "74 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Super%20CDIT%202/0/cassettes_1_0.jpg" },
  
  // Super EF
  { id: "sony-super-ef-182", name: "Super EF", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Super%20EF/0/cassettes_1_0.jpg" },
  { id: "sony-super-ef-183", name: "Super EF", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Super%20EF/1/cassettes_1_0.jpg" },
  { id: "sony-super-ef-184", name: "Super EF", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Super%20EF/2/cassettes_1_0.jpg" },
  { id: "sony-super-ef-185", name: "Super EF", type: "I", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Super%20EF/3/cassettes_1_0.jpg" },
  { id: "sony-super-ef-186", name: "Super EF", type: "I", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Super%20EF/4/cassettes_1_0.jpg" },
  
  // Super Metal Master
  { id: "sony-super-metal-master-187", name: "Super Metal Master", type: "IV", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Super%20Metal%20Master/0/cassettes_1_0.jpg" },
  
  // Test Tapes
  { id: "sony-test-188", name: "Test Tape P-4-A063J", type: "I", years: "", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Test%20Tape%20P-4-A063J/0/cassettes_1_0.jpg" },
  { id: "sony-test-189", name: "Test Tape P-4-A100", type: "I", years: "", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Test%20Tape%20P-4-A100/0/cassettes_1_0.jpg" },
  { id: "sony-test-190", name: "Test Tape P-4-D400", type: "I", years: "", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Test%20Tape%20P-4-D400/0/cassettes_1_0.jpg" },
  { id: "sony-test-191", name: "Test Tape P-4-L300", type: "I", years: "", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Test%20Tape%20P-4-L300/0/cassettes_1_0.jpg" },
  { id: "sony-torque-192", name: "Torque Meter TW-2131", type: "I", years: "", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Torque%20Meter%20TW-2131/0/cassettes_1_0.jpg" },
  
  // UCX-S
  { id: "sony-ucx-s-193", name: "UCX-S", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UCX-S/0/cassettes_1_0.jpg" },
  { id: "sony-ucx-s-194", name: "UCX-S", type: "II", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UCX-S/1/cassettes_1_0.jpg" },
  
  // UCX
  { id: "sony-ucx-195", name: "UCX", type: "II", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UCX/0/cassettes_1_0.jpg" },
  { id: "sony-ucx-196", name: "UCX", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UCX/1/cassettes_1_0.jpg" },
  
  // UX-ES
  { id: "sony-ux-es-197", name: "UX-ES", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX-ES/0/cassettes_1_0.jpg" },
  { id: "sony-ux-es-198", name: "UX-ES", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX-ES/1/cassettes_1_0.jpg" },
  { id: "sony-ux-es-199", name: "UX-ES", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX-ES/2/cassettes_1_0.jpg" },
  
  // UX-Master
  { id: "sony-ux-master-200", name: "UX-Master", type: "II", years: "", duration: "46 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX-Master/0/cassettes_1_0.jpg" },
  
  // UX-PRO
  { id: "sony-ux-pro-201", name: "UX-PRO", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX-PRO/0/cassettes_1_0.jpg" },
  { id: "sony-ux-pro-202", name: "UX-PRO", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX-PRO/1/cassettes_1_0.jpg" },
  { id: "sony-ux-pro-203", name: "UX-PRO", type: "II", years: "", duration: "46 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX-PRO/2/cassettes_1_0.jpg" },
  { id: "sony-ux-pro-204", name: "UX-PRO", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX-PRO/3/cassettes_1_0.jpg" },
  { id: "sony-ux-pro-205", name: "UX-PRO", type: "II", years: "", duration: "74 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX-PRO/4/cassettes_1_0.jpg" },
  { id: "sony-ux-pro-206", name: "UX-PRO", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX-PRO/5/cassettes_1_0.jpg" },
  { id: "sony-ux-pro-207", name: "UX-PRO", type: "II", years: "", duration: "46 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX-PRO/6/cassettes_1_0.jpg" },
  { id: "sony-ux-pro-208", name: "UX-PRO", type: "II", years: "", duration: "50 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX-PRO/7/cassettes_1_0.jpg" },
  { id: "sony-ux-pro-209", name: "UX-PRO", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX-PRO/8/cassettes_1_0.jpg" },
  
  // UX-S
  { id: "sony-ux-s-210", name: "UX-S", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX-S/0/cassettes_1_0.jpg" },
  { id: "sony-ux-s-211", name: "UX-S", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX-S/1/cassettes_1_0.jpg" },
  { id: "sony-ux-s-212", name: "UX-S", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX-S/2/cassettes_1_0.jpg" },
  { id: "sony-ux-s-213", name: "UX-S", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX-S/3/cassettes_1_0.jpg" },
  { id: "sony-ux-s-214", name: "UX-S", type: "II", years: "", duration: "100 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX-S/4/cassettes_1_0.jpg" },
  { id: "sony-ux-s-215", name: "UX-S", type: "II", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX-S/5/cassettes_1_0.jpg" },
  { id: "sony-ux-s-216", name: "UX-S", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX-S/6/cassettes_1_0.jpg" },
  { id: "sony-ux-s-217", name: "UX-S", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX-S/7/cassettes_1_0.jpg" },
  { id: "sony-ux-s-218", name: "UX-S", type: "II", years: "", duration: "60 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX-S/8/cassettes_1_0.jpg" },
  
  // UX-TURBO
  { id: "sony-ux-turbo-219", name: "UX-TURBO", type: "II", years: "", duration: "100 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX-TURBO/0/cassettes_1_0.jpg" },
  
  // UX
  { id: "sony-ux-220", name: "UX", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX/0/cassettes_1_0.jpg" },
  { id: "sony-ux-221", name: "UX", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX/1/cassettes_1_0.jpg" },
  { id: "sony-ux-222", name: "UX", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX/2/cassettes_1_0.jpg" },
  { id: "sony-ux-223", name: "UX", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX/3/cassettes_1_0.jpg" },
  { id: "sony-ux-224", name: "UX", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX/4/cassettes_1_0.jpg" },
  { id: "sony-ux-225", name: "UX", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX/5/cassettes_1_0.jpg" },
  { id: "sony-ux-226", name: "UX", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX/6/cassettes_1_0.jpg" },
  { id: "sony-ux-227", name: "UX", type: "II", years: "", duration: "90 мин.", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX/7/cassettes_1_0.jpg" },
  { id: "sony-ux-228", name: "UX", type: "II", years: "", duration: "90 мин.", image: "/images/sony/Sony_UX.jpg", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20UX/8/cassettes_1_0.jpg" },
  
  // Walkman
  { id: "sony-walkman-229", name: "Walkman", type: "I", years: "", duration: "100 мин.", image: "/images/sony/Sony_Walkman_2.jpg", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Walkman/0/cassettes_1_0.jpg" },
  { id: "sony-walkman-230", name: "Walkman", type: "II", years: "", duration: "90 мин.", image: "/images/sony/Sony_Walkman_1.jpg", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Walkman/1/cassettes_1_0.jpg" },
  
  // What's Up
  { id: "sony-whats-up-231", name: "What's Up", type: "I", years: "", duration: "46 мин.", image: "/images/sony/Sony_Whats_Up_5.jpg", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Whats%20Up/0/cassettes_1_0.jpg" },
  { id: "sony-whats-up-232", name: "What's Up", type: "I", years: "", duration: "46 мин.", image: "/images/sony/Sony_Whats_Up_4.jpg", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Whats%20Up/1/cassettes_1_0.jpg" },
  { id: "sony-whats-up-233", name: "What's Up", type: "I", years: "", duration: "46 мин.", image: "/images/sony/Sony_Whats_Up_3.jpg", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Whats%20Up/2/cassettes_1_0.jpg" },
  { id: "sony-whats-up-234", name: "What's Up", type: "I", years: "", duration: "46 мин.", image: "/images/sony/Sony_Whats_Up_2.jpg", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Whats%20Up/3/cassettes_1_0.jpg" },
  { id: "sony-whats-up-235", name: "What's Up", type: "I", years: "", duration: "46 мин.", image: "/images/sony/Sony_Whats_Up_1.jpg", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Whats%20Up/4/cassettes_1_0.jpg" },
  
  // X1
  { id: "sony-x1-236", name: "X1", type: "I", years: "", duration: "90 мин.", image: "/images/sony/Sony_X1.jpg", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20X1/0/cassettes_1_0.jpg" },
  
  // XS II
  { id: "sony-xs-ii-237", name: "XS II", type: "II", years: "", duration: "90 мин.", image: "/images/sony/Sony_XS_II.jpg", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20XS%20II/0/cassettes_1_0.jpg" },
  
  // Xtune 2
  { id: "sony-xtune-2-238", name: "Xtune 2", type: "II", years: "", duration: "64 мин.", image: "/images/sony/Sony_Xtune_2.jpg", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20Xtune%202/0/cassettes_1_0.jpg" },
  
  // ZX
  { id: "sony-zx-239", name: "ZX", type: "I", years: "", duration: "90 мин.", image: "/images/sony/Sony_ZX.jpg", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20ZX/0/cassettes_1_0.jpg" },
  
  // Demonstration cassettes (uploaded locally)
  { id: "sony-demo-cd-814-240", name: "Demonstration Cassette CD-814", type: "I", years: "", image: "/images/sony/Sony_demonstration_cassette_CD-814.jpg", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20demonstration%20cassette%20CD-814/0/cassettes_1_0.jpg" },
  { id: "sony-demo-cd-102-241", name: "Demonstration Cassette DM CD-102", type: "I", years: "1970", image: "/images/sony/Sony_demonstration_cassette_DM_CD-102.jpg", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20demonstration%20cassette%20DM%20CD-102/0/cassettes_1_0.jpg" },
  { id: "sony-demo-cd-501-242", name: "Demonstration Cassette DM CD-501", type: "I", years: "1970", image: "/images/sony/Sony_demonstration_cassette_DM_CD-501.jpg", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20demonstration%20cassette%20DM%20CD-501/0/cassettes_1_0.jpg" },
  { id: "sony-demo-cd-802-243", name: "Demonstration Cassette DM CD-802", type: "I", years: "1972", image: "/images/sony/Sony_demonstration_cassette_DM_CD-802.jpg", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20demonstration%20cassette%20DM%20CD-802/0/cassettes_1_0.jpg" },
  { id: "sony-demo-cd-803-244", name: "Demonstration Cassette DM CD-803", type: "I", years: "1974", image: "/images/sony/Sony_demonstration_cassette_DM_CD-803.jpg", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20demonstration%20cassette%20DM%20CD-803/0/cassettes_1_0.jpg" },
  { id: "sony-demo-cd-806-245", name: "Demonstration Cassette DM CD-806", type: "I", years: "1977", image: "/images/sony/Sony_demonstration_cassette_DM_CD-806.jpg", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20demonstration%20cassette%20DM%20CD-806/0/cassettes_1_0.jpg" },
  { id: "sony-demo-yeks-63-246", name: "Demonstration Cassette YEKS-63", type: "I", years: "", image: "/images/sony/Sony_demonstration_cassette_YEKS-63.jpg", externalImage: "https://c-90.org/FOR_PROGRAMMER/tapes/Sony/Sony%20demonstration%20cassette%20YEKS-63/0/cassettes_1_0.jpg" },
];

// Group tapes by model name for display
export const getSonyTapesByModel = () => {
  const grouped: { [key: string]: SonyTape[] } = {};
  sonyTapes.forEach(tape => {
    if (!grouped[tape.name]) {
      grouped[tape.name] = [];
    }
    grouped[tape.name].push(tape);
  });
  return grouped;
};
