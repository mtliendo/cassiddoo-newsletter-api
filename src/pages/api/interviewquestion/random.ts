import { newsletterDataTypes } from "../../../../api_utils/newsletterData";
import {
  scrapeInterviewQuestionFromNewsletter,
  CASSIDOO_NEWSLETTER_JSON,
} from "../../../../api_utils/scraper";
import Cors from 'cors'
import initMiddleware from '../../../../api_utils/initMiddleware'

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// const NEWSLETTER_ARCHIVE = 'https://buttondown.email/cassidoo/archive/'

export default async (req, res) => {
  await cors(req, res)
  const res_1 = await fetch(CASSIDOO_NEWSLETTER_JSON);
  const newsletters = await res_1.json();
  const randomIndex = Math.floor(Math.random() * (newsletters.length - 1));
  const newsletter = newsletters[randomIndex];
  const interviewQuestion = await scrapeInterviewQuestionFromNewsletter(newsletter);
  res.statusCode = 200;
  res.json({ interviewQuestion, id: newsletter.secondary_id });
};
