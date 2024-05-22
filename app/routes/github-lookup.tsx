import { ActionFunctionArgs, json } from '@remix-run/node';
import { fetchGitHubInfo } from '~/utils/github'; // Hypothetical utility function

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const playerOne = formData.get('playerOne');
  const playerTwo = formData.get('playerTwo');

  return json({ playerOne, playerTwo });
}
export async function loader() {
  // You might not need to fetch any data here initially
  return null; // Or return some prefetched data if desired
}
