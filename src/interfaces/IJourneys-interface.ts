export interface IJourneyDataBase {
  utm_source: string;
  utm_campaign: string;
  utm_medium: string;
  utm_content: string;
  sessionId: string;
  createdAt: string;
}

export interface IJourneyReturn {
  id: string
  utmSources: string[];
  firstTP: string;
  lastTP: string;
  startedAt: string;
  endedAt: string;
}
