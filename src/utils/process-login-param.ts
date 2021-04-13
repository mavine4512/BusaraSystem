export function ProcessLoginParam(
  username: string,
  password: string,
  client_id: string | undefined,
  client_secret: string | undefined,
  grant_type: string | undefined
) {
  return `username=${username}&password=${password}&client_id=${client_id}&client_secret=${client_secret}&grant_type=${grant_type}`;
}
