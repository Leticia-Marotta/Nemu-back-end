import type { IJourneyDataBase, IJourneyReturn } from "../interfaces/IJourneys-interface";

export default function journeyService(events: IJourneyDataBase[]) {
  const journeyById = events.reduce<Record<string, IJourneyDataBase[]>>(
    (prev, curr) => {
      if (!prev[curr.sessionId]) prev[curr.sessionId] = [];
      prev[curr.sessionId].push(curr);
      return prev;
    },
    {},
  );

  const journeyReturn: IJourneyReturn[] = Object.values(journeyById).map((itens) => {
    const sorted = itens.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    );
    
    const firstTP = sorted[0];
    const lastTP = sorted[sorted.length - 1];

    const uniqueSource: string[] = [];
    sorted.slice(1, -1).filter((item) => {
      if (!uniqueSource.includes(item.utm_source)) {
        uniqueSource.push(item.utm_source);
      }
    });

    return {
      id: firstTP.sessionId,
      utmSources: uniqueSource,
      firstTP: firstTP.utm_source,
      lastTP: lastTP.utm_source,
      startedAt: firstTP.createdAt,
      endedAt: firstTP.createdAt,
    };
  });

  return journeyReturn;
}
