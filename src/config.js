const API_ENDPOINTS_BASE_URL = "https://api.iextrading.com/1.0/";

export const getStockQuoteBySymbolApi = symbol =>
  `${API_ENDPOINTS_BASE_URL}/stock/${symbol}/quote`;

export const getChartBySymbolAndRangeApi = (symbol, range) =>
  `${API_ENDPOINTS_BASE_URL}/stock/${symbol}/chart/${range}`;
