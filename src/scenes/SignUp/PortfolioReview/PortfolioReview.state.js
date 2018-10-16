export const STORE_RECOMMENDED_PORTFOLIO =
  "matisa/scenes/PortfolioReview/storeRecommendedPortfolio";

export default (state = null, action = {}) => {
  switch (action.type) {
    case STORE_RECOMMENDED_PORTFOLIO:
      return action.data;
    default:
      return state;
  }
};
