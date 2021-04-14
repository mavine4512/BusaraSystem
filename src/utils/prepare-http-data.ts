import { Ans, Answers, Question, Survey, SurveyForm } from '../interfaces';
import { otherAirtime, otherCash } from '../constants';

function getQuestionId(questions: Question[], column: string): number {
  const question = questions.filter(function getQuestion(query) {
    return query.column_match === column;
  })[0];

  return question?.id ?? 0;
}

function prepareResponse(column: string, answer: string, survey: Survey): Ans {
  return {
    column_match: column,
    q_ans: answer,
    q_id: getQuestionId(survey.forms[0].pages[0].sections[0].questions, column),
  };
}

export function preparedHttpData(data: SurveyForm, survey: Survey): Answers[] {
  const answers: Answers[] = [];
  const currentTime = new Date();
  const cash: string[] = [];
  const airtime: string[] = [];
  const ans: Ans[] = [];
  const {
    full_name,
    phone_number,
    gender,
    airtime_image,
    cash_image,
    ...rest
  } = data;

  const other = { ...rest } as any;

  Object.keys(rest).forEach((item) => {
    if (otherAirtime.includes(item) && other[item]) {
      airtime.push(item);
    }

    if (otherCash.includes(item) && other[item]) {
      cash.push(item);
    }
  });

  ans.push(prepareResponse('full_name', full_name, survey));
  ans.push(prepareResponse('phone_number', phone_number, survey));
  ans.push(prepareResponse('gender', gender, survey));
  ans.push(prepareResponse('airtime_image', JSON.stringify(airtime), survey));
  ans.push(prepareResponse('cash_image', JSON.stringify(cash), survey));

  const answer = {
    ans,
    end_time: currentTime.toISOString(),
    local_id: 0,
    location: {
      accuracy: 0,
      lat: 0,
      lon: 0,
    },
    start_time: currentTime.toISOString(),
    survey_id: survey.forms[0].id,
  };

  answers.push(answer);

  return answers;
}
