export interface ParsedTape {
  id: string;
  name: string;
  type: "I" | "II" | "III" | "IV";
  duration?: string;
  image?: string;
}

function parseType(desc: string): "I" | "II" | "III" | "IV" {
  if (desc.includes('Type 4') || desc.includes('IEC4')) return 'IV';
  if (desc.includes('Type 3') || desc.includes('IEC3')) return 'III';
  if (desc.includes('Type 2') || desc.includes('IEC2')) return 'II';
  return 'I';
}

function parseDuration(line: string): string {
  const match = line.match(/\/(.+?)\s*мин/);
  if (match) {
    const dur = match[1].trim();
    if (dur === '???' || dur === '??' || dur === '?') return '??';
    return dur;
  }
  return '??';
}

export async function fetchTapesFromFolder(folder: string): Promise<ParsedTape[]> {
  try {
    const response = await fetch(`/${folder}/descriptions.txt`);
    if (!response.ok) return [];
    const text = await response.text();

    const tapes: ParsedTape[] = [];
    // Split by separator lines (10+ dashes)
    const blocks = text.split(/\n-{10,}\n/);

    for (const block of blocks) {
      const lines = block.trim().split('\n').map(l => l.trim()).filter(Boolean);
      if (lines.length < 2) continue;

      // Parse name from === Name ===
      const nameMatch = lines[0]?.match(/^===\s*(.+?)\s*===$/);
      if (!nameMatch) continue;

      const name = nameMatch[1];
      const descLine = lines.find(l => l.startsWith('Описание:'));
      const durLine = lines.find(l => l.startsWith('/'));
      const imgLine = lines.find(l => l.startsWith('Изображение:'));

      const type = descLine ? parseType(descLine) : 'I';
      const duration = durLine ? parseDuration(durLine) : '??';
      const imageFile = imgLine?.replace('Изображение:', '').trim();

      tapes.push({
        id: `${folder}-${tapes.length}`,
        name,
        type,
        duration,
        image: imageFile ? `/${folder}/images/${imageFile}` : undefined,
      });
    }

    return tapes;
  } catch {
    return [];
  }
}

// Mapping from manufacturer ID to public folder name
export const manufacturerFolders: Record<string, string> = {
  agfa: 'Agfa',
  aiwa: 'Aiwa',
  akai: 'Akai',
  basf: 'Basf_Emtec',
  denon: 'Denon_Columbia',
  goldstar: 'Gold_Star_LG',
  grundig: 'Grundig',
  maxell: 'Hitachi_Lo-D_Maxell',
  jvc: 'JVC_Victor',
  kenwood: 'Kenwood',
  memorex: 'Memorex',
  nakamichi: 'Nakamichi',
  panasonic: 'Panasonic_National',
  philips: 'Philips_Siera_Norelco',
  pioneer: 'Pioneer',
  sanyo: 'Sanyo',
  scotch: 'Scotch_3M',
  sharp: 'Sharp',
  skc: 'SKC_Smat',
  sony: 'Sony_cassettes',
  tdk: 'TDK',
  teac: 'Teac',
  technics: 'Technics',
  toshiba: 'Toshiba_Aurex',
};
