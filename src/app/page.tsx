import { Button } from '@/components/ui/button';
import Link from 'next/link';

const languages = [
  { name: 'English', native: 'English' },
  { name: 'Hindi', native: 'हिंदी' },
  { name: 'Gujarati', native: 'ગુજરાતી' },
  { name: 'Kannada', native: 'ಕನ್ನಡ' },
  { name: 'Tamil', native: 'தமிழ்' },
  { name: 'Telugu', native: 'తెలుగు' },
  { name: 'Bengali', native: 'বাংলা' },
  { name: 'Oriya', native: 'ଓଡ଼ିଆ' },
  { name: 'Marathi', native: 'मराठी' },
];

export default function LanguageSelector() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-6">
          <div className="absolute -left-5 -top-2 h-16 w-16 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">A</span>
          </div>
          <div className="relative z-10 ml-5 h-16 w-16 rounded-lg border-2 border-muted-foreground bg-card flex items-center justify-center">
            <span className="text-foreground text-4xl font-bold" style={{ fontFamily: "'Noto Sans', sans-serif" }}>अ</span>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-foreground">Select Language</h1>

        <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-md">
          {languages.map((lang) => (
            <Link href="/personalize" key={lang.name} passHref>
              <Button
                variant="outline"
                className="h-20 w-full flex flex-col items-center justify-center rounded-xl bg-card hover:bg-accent hover:text-accent-foreground"
              >
                <span className="text-2xl" style={{ fontFamily: "'Noto Sans', sans-serif" }}>{lang.native}</span>
                <span className="text-sm text-muted-foreground">{lang.name}</span>
              </Button>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Button variant="link" className="text-muted-foreground">
            Language not available?
          </Button>
        </div>
      </div>
    </div>
  );
}
