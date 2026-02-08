export interface PrintedCatalog {
  title: string;
  year: string;
  type: 'audio' | 'video' | 'pdf';
  image?: string;
  pdfUrl?: string;
  description?: string;
}

export const printedCatalogs: PrintedCatalog[] = [
  {
    title: "Cassette 1978",
    year: "1978",
    type: "audio",
    image: "/Catalogs/Cassette 1978 audio.png",
    description: "Каталог аудиокассет 1978 года",
  },
  {
    title: "Cassette 1981",
    year: "1981",
    type: "audio",
    image: "/Catalogs/Cassette 1981 audio.png",
    description: "Каталог аудиокассет 1981 года",
  },
  {
    title: "Cassette 1982-1983",
    year: "1982-1983",
    type: "audio",
    image: "/Catalogs/Cassette 1982-1983 audio.png",
    description: "Каталог аудиокассет 1982-1983 годов",
  },
  {
    title: "Cassette 1984",
    year: "1984",
    type: "audio",
    image: "/Catalogs/Cassette 1984 audio.png",
    description: "Каталог аудиокассет 1984 года",
  },
  {
    title: "Cassette 1987",
    year: "1987",
    type: "audio",
    image: "/Catalogs/Cassette 1987 audio.png",
    description: "Каталог аудиокассет 1987 года",
  },
  {
    title: "Cassette 1989-1990",
    year: "1989-1990",
    type: "audio",
    image: "/Catalogs/Cassette 1989-1990.png",
    description: "Каталог аудиокассет 1989-1990 годов",
  },
  {
    title: "Cassette 1991",
    year: "1991",
    type: "audio",
    image: "/Catalogs/Cassette 1991 audio.png",
    description: "Каталог аудиокассет 1991 года",
  },
  {
    title: "Cassette 1991-1992",
    year: "1991-1992",
    type: "audio",
    image: "/Catalogs/Cassette 1991-1992 audio.png",
    description: "Каталог аудиокассет 1991-1992 годов",
  },
  {
    title: "Cassette 1993",
    year: "1993",
    type: "audio",
    image: "/Catalogs/Cassette 1993 audio.png",
    description: "Каталог аудиокассет 1993 года",
  },
  {
    title: "Video Cassette 1991",
    year: "1991",
    type: "video",
    image: "/Catalogs/Cassette 1991 video.png",
    description: "Каталог видеокассет 1991 года",
  },
  {
    title: "Video Cassette 1991-1992",
    year: "1991-1992",
    type: "video",
    image: "/Catalogs/Cassette 1991-1992 video.png",
    description: "Каталог видеокассет 1991-1992 годов",
  },
  {
    title: "Video Cassette 1993",
    year: "1993",
    type: "video",
    image: "/Catalogs/Cassette 1993 video.png",
    description: "Каталог видеокассет 1993 года",
  },
  {
    title: "TDK 1987",
    year: "1987",
    type: "pdf",
    pdfUrl: "/Catalogs/Tdk_1987.pdf",
    description: "Каталог TDK 1987 года в формате PDF",
  },
  {
    title: "TDK Endless Cassettes",
    year: "",
    type: "pdf",
    pdfUrl: "/Catalogs/Tdk_endlcass.pdf",
    description: "Каталог бесконечных кассет TDK",
  },
];
