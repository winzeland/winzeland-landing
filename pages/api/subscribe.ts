import type { NextApiRequest, NextApiResponse } from 'next';
// @ts-ignore
import client from '@mailchimp/mailchimp_marketing';
import { assertIsError } from 'utils/errors';

type Data = {
  status: boolean;
  error?: string;
};

const formatErrorMessage = (error: string) => {
  switch (error) {
    case 'Member Exists':
      return 'You have already subscribed.';
    default:
      return error;
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    client.setConfig({
      apiKey: process.env.MAILCHIMP_API_KEY,
      server: process.env.MAILCHIMP_SERVER,
    });

    await client.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
      email_address: req.body.email,
      status: 'pending',
    });

    res.status(200).json({ status: true });
  } catch (error) {
    assertIsError(error);
    const body = (error as any)?.response?.body;
    console.error(body || error);
    res.status(400).json({
      status: false,
      error: formatErrorMessage(body?.title) || 'Something went wrong.',
    });
  }
}
