import type { NewsArticle } from './types';

const articles: NewsArticle[] = [
  {
    id: 'tech-1',
    title: 'The Quantum Leap in Computing: Are We There Yet?',
    source: 'Tech Tomorrow',
    category: 'Technology',
    imageUrl: 'https://picsum.photos/seed/tech1/600/400',
    imageHint: 'technology future',
    originalUrl: '#',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    content: `Quantum computing, once a realm of science fiction, is inching closer to reality. Companies like Google, IBM, and Rigetti are in a fierce race to build fault-tolerant quantum computers. These machines promise to solve problems currently intractable for even the most powerful supercomputers, with applications ranging from drug discovery and materials science to financial modeling and cryptography. A key challenge is overcoming 'quantum decoherence,' where quantum bits, or qubits, lose their quantum properties due to environmental noise. Recent breakthroughs in error correction codes and qubit stability suggest we are on the cusp of a new computational era. However, experts caution that widespread, practical quantum computers are still likely a decade away, but the foundational work being done today is paving the way for a technological revolution that will reshape our world in unimaginable ways. The potential to simulate complex molecular interactions could lead to the rapid development of new medicines and materials, while optimization problems in logistics and finance could be solved in minutes rather than days.`,
  },
  {
    id: 'sports-1',
    title: 'Underdog Victory: The Biggest Upset in Championship History',
    source: 'Sports Central',
    category: 'Sports',
    imageUrl: 'https://picsum.photos/seed/sports1/600/400',
    imageHint: 'basketball player',
    originalUrl: '#',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
    content: `In a stunning turn of events, the Greenville Griffins have clinched the national championship, defeating the five-time reigning champions, the Bay City Titans, in a nail-biting final. The game, which went into double overtime, will be remembered as one of the greatest upsets in the sport's history. The Griffins, who entered the tournament as the 16th seed, showcased incredible resilience and teamwork throughout their improbable run. Star player Maya Rodriguez, who scored a career-high 45 points, was named the tournament's Most Valuable Player. "Nobody believed in us," a tearful Rodriguez said after the game. "This is for our city, for our fans, for every kid who was ever told they weren't good enough. We did it." The victory marks the first-ever championship for the Griffins and a dramatic end to the Titans' dynasty. The coach's innovative defensive strategy, focusing on a high-press and quick transitions, proved to be the key in neutralizing the Titans' famed offense.`,
  },
  {
    id: 'politics-1',
    title: 'Global Leaders Convene for Summit on Climate Change',
    source: 'World News Network',
    category: 'Politics',
    imageUrl: 'https://picsum.photos/seed/politics1/600/400',
    imageHint: 'government building',
    originalUrl: '#',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    content: `Leaders from 195 nations have gathered in Geneva for the annual Global Climate Summit, aiming to negotiate more aggressive targets for reducing carbon emissions. The summit comes on the heels of a stark report from the Intergovernmental Panel on Climate Change (IPCC), which warned that the window to limit global warming to 1.5°C is "rapidly closing." Key points of contention include the financing of green energy transitions in developing countries and the phasing out of fossil fuels. Activists have descended on the city, demanding immediate and decisive action. "Pledges and promises are no longer enough," said climate activist Greta Thunberg at a rally. "We need binding commitments and real change now." The negotiations are expected to be tense, with significant pressure on major economies to lead the way in adopting sustainable policies and providing financial support to more vulnerable nations facing the brunt of climate impacts like rising sea levels and extreme weather events.`,
  },
  {
    id: 'tech-2',
    title: 'AI in Healthcare: A Revolution in Diagnostics and Treatment',
    source: 'Future Health',
    category: 'Technology',
    imageUrl: 'https://picsum.photos/seed/tech2/600/400',
    imageHint: 'holographic interface',
    originalUrl: '#',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(),
    content: `Artificial intelligence is no longer just a buzzword in the medical community; it's a transformative tool being actively deployed in hospitals and research labs worldwide. AI algorithms are now outperforming human experts in detecting cancers from medical scans, predicting patient outcomes, and personalizing treatment plans. By analyzing vast datasets of medical records, genetic information, and lifestyle factors, machine learning models can identify patterns that are invisible to the human eye. This is leading to earlier diagnoses, more effective treatments, and a shift towards preventative medicine. For example, an AI system recently developed at Stanford University can identify signs of diabetic retinopathy, a leading cause of blindness, with over 95% accuracy from retinal photographs. While ethical considerations around data privacy and algorithmic bias remain, the potential for AI to improve patient care and reduce healthcare costs is immense, heralding a new era of data-driven medicine.`,
  },
  {
    id: 'sports-2',
    title: 'The Rise of Esports: From Niche Hobby to Global Phenomenon',
    source: 'Gaming Insider',
    category: 'Sports',
    imageUrl: 'https://picsum.photos/seed/sports2/600/400',
    imageHint: 'soccer celebration',
    originalUrl: '#',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    content: `Competitive video gaming, or esports, has exploded into a billion-dollar industry with a global audience that rivals traditional sports. Packed stadiums, multi-million dollar prize pools, and professional athletes with rigorous training schedules are now the norm. Games like League of Legends, Counter-Strike, and Dota 2 attract tens of millions of viewers for their world championship events. The International Olympic Committee is even considering including esports in future Olympic Games. This rapid growth is fueled by the accessibility of streaming platforms like Twitch and YouTube, which allow fans to watch their favorite players compete from anywhere in the world. Universities are now offering esports scholarships, and a complex ecosystem of teams, leagues, and sponsors has emerged. While some traditionalists remain skeptical, the cultural and economic impact of esports is undeniable, and it represents a fundamental shift in how we define sport and entertainment in the 21st century.`,
  },
  {
    id: 'politics-2',
    title: 'New Trade Agreement Signed to Boost Economic Cooperation',
    source: 'The Global Times',
    category: 'Politics',
    imageUrl: 'https://picsum.photos/seed/politics2/600/400',
    imageHint: 'protest rally',
    originalUrl: '#',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
    content: `A landmark trade agreement, the Trans-Oceanic Partnership (TOP), was signed today by a coalition of twelve nations, aiming to reduce tariffs and foster greater economic integration. The deal, which has been in negotiation for over five years, covers nearly 40% of the global economy. Proponents argue that it will lower consumer prices, create jobs, and stimulate innovation by opening up markets. "This is a historic day for free and fair trade," said the lead negotiator. "By working together, we can build a more prosperous future for all our citizens." However, the agreement has faced criticism from labor unions and environmental groups, who are concerned about potential job losses in domestic manufacturing and the weakening of environmental regulations. The final text includes chapters on digital trade, intellectual property rights, and environmental standards, but critics argue that the enforcement mechanisms are too weak. The agreement now faces the challenge of ratification by the legislatures of each member country.`,
  },
];

export async function getArticles(category: string): Promise<NewsArticle[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (category.toLowerCase() === 'all') {
    return articles;
  }
  return articles.filter(
    (article) => article.category.toLowerCase() === category.toLowerCase()
  );
}
