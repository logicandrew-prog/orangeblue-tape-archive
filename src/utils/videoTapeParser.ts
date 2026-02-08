export interface ParsedVideoTape {
  id: string;
  name: string;
  image?: string;
  size?: string;
}

export async function fetchVideoTapesFromFolder(folder: string): Promise<ParsedVideoTape[]> {
  try {
    const response = await fetch(`/Videocassette/${folder}/описания.txt`);
    if (!response.ok) return [];
    const text = await response.text();

    const tapes: ParsedVideoTape[] = [];
    // Split by separator lines (10+ dashes)
    const blocks = text.split(/\n-{10,}\n/);

    for (const block of blocks) {
      const lines = block.trim().split('\n').map(l => l.trim()).filter(Boolean);
      if (lines.length < 2) continue;

      // Parse file name
      const fileLine = lines.find(l => l.startsWith('Файл:'));
      const sizeLine = lines.find(l => l.startsWith('Размер:'));
      
      if (!fileLine) continue;

      const fileName = fileLine.replace('Файл:', '').trim();
      const size = sizeLine?.replace('Размер:', '').trim();
      
      // Extract name from filename (remove extension and manufacturer prefix)
      const baseName = fileName.replace(/\.[^.]+$/, '').replace(/^[^_]+_/, '');
      const displayName = baseName.replace(/_/g, ' ').replace(/-/g, ' ');

      tapes.push({
        id: `${folder}-${tapes.length}`,
        name: displayName || fileName,
        image: `/Videocassette/${folder}/images/${fileName}`,
        size,
      });
    }

    return tapes;
  } catch {
    return [];
  }
}
