import {
  ActionGetResponse,
  ActionPostRequest,
  ActionPostResponse,
} from '@solana/actions';

export async function GET(request: Request) {
  const response: ActionGetResponse = {
    icon: 'https://solana-asset-recovery.vercel.app/solandy-logo.png',
    description: 'My blink',
    title: 'Blink',
    label: 'Click me',
    error: {
      message: 'This blink is not implemented yet!',
    },
  };
  return Response.json(response);
}

export async function POST(request: Request) {
  const postRequest: ActionPostRequest = await request.json();
  const userPubkey = postRequest.account;
  console.log(userPubkey);
  const response: ActionPostResponse = {
    transaction: '',
    message: 'hello ' + userPubkey,
  };

  return Response.json(response);
}
