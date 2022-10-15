module.exports = {
  // @doc https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
  reactStrictMode: true,
  /**
   * Webpack 5 Adoption
   * @doc https://nextjs.org/docs/messages/webpack5
   */
  future: {
    webpack5: true,
    strictPostcssConfiguration: true
  }
};
