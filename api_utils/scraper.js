const cheerio = require("cheerio");

const scrapeInterviewQuestionFromNewsletter = (foundNewsletter) => {
  return fetch(foundNewsletter.absolute_url)
    .then((res) => res.text())
    .then((siteHTML) => {
      const $ = cheerio.load(siteHTML, { xmlMode: true });
      const interviewQuestion = $("strong", "noscript").text();
      return interviewQuestion;
    });
};

const ALL_CASSIDOO_NEWSLETTER_JSON =
  "https://buttondown.email/api/emails/public-emails/?newsletter__username=cassidoo";

module.exports = {
  scrapeInterviewQuestionFromNewsletter,
  CASSIDOO_NEWSLETTER_JSON: ALL_CASSIDOO_NEWSLETTER_JSON,
};
