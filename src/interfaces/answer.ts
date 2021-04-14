export interface Ans {
  column_match: string;
  q_ans: string;
  q_id: string | number;
}

interface Location {
  accuracy: number;
  lat: number;
  lon: number;
}

export interface Answers {
  ans: Ans[];
  end_time: string;
  local_id: number;
  location: Location;
  start_time: string;
  survey_id: string | number;
}
