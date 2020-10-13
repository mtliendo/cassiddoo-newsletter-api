import {
  CASSIDOO_NEWSLETTER_JSON,
  scrapeInterviewQuestionFromNewsletter,
} from "../../../../api_utils/scraper";
import { newsletterDataTypes } from "./newsletterData";
import Cors from 'cors'
import initMiddleware from '../../../../api_utils/initMiddleware'

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async (req, res) => {
  await cors(req, res)

  res.statusCode = 200;
  const QuestionID = req.query.questionID;

  const res_1 = await fetch(CASSIDOO_NEWSLETTER_JSON);
  const newsletters = await res_1.json();
  const foundNewsletter = newsletters.find(
    (item) => item.secondary_id === Number(QuestionID)
  );
  if (foundNewsletter) {
    return scrapeInterviewQuestionFromNewsletter(foundNewsletter).then(
      (interviewQuestion) => {
        res.statusCode = 200;
        res.json({ interviewQuestion });
      }
    );
  } else {
    res.statusCode = 404;
    res.json({ error: "Out of range" });
  }
};
