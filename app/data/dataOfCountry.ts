export type LanguageType = {
  id: string;
  name: string;
  country: string;
  flag: string;
  nativeName?: string;
};

export const languages: LanguageType[] = [
  {
    id: "en",
    name: "English",
    country: "United States",
    flag: "🇺🇸",
    nativeName: "English",
  },
  {
    id: "gb",
    name: "English",
    country: "United Kingdom",
    flag: "🇬🇧",
    nativeName: "English",
  },
  {
    id: "es",
    name: "Spanish",
    country: "Spain",
    flag: "🇪🇸",
    nativeName: "Español",
  },
  {
    id: "fr",
    name: "French",
    country: "France",
    flag: "🇫🇷",
    nativeName: "Français",
  },
  {
    id: "de",
    name: "German",
    country: "Germany",
    flag: "🇩🇪",
    nativeName: "Deutsch",
  },
  {
    id: "it",
    name: "Italian",
    country: "Italy",
    flag: "🇮🇹",
    nativeName: "Italiano",
  },
  {
    id: "pt",
    name: "Portuguese",
    country: "Brazil",
    flag: "🇧🇷",
    nativeName: "Português",
  },
  {
    id: "ja",
    name: "Japanese",
    country: "Japan",
    flag: "🇯🇵",
    nativeName: "日本語",
  },
  {
    id: "ko",
    name: "Korean",
    country: "South Korea",
    flag: "🇰🇷",
    nativeName: "한국어",
  },
  {
    id: "zh",
    name: "Chinese",
    country: "China",
    flag: "🇨🇳",
    nativeName: "中文",
  },
];
