import pathToRegexp from 'path-to-regexp';
import { useParams } from 'react-router-dom';

export function RouterPathText() {
  const params = useParams();
  console.log(pathToRegexp);
  return <h1 className="m-auto">{JSON.stringify(params)}</h1>;
}
