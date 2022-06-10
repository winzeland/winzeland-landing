import classNames from 'classnames';
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { useAnalytics } from 'hooks/useAnalytics';
import { useIsMounted } from 'hooks/useIsMounted';
import { addUserToWaitlist } from 'utils/helpers';

export const JoinWaitlist: React.FC = () => {
  const isMounted = useIsMounted();
  const { logEvent } = useAnalytics();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  const handleNameChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      setName(event.currentTarget.value),
    [],
  );

  const handleEmailChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      setEmail(event.currentTarget.value),
    [],
  );

  useEffect(() => {
    prefinery('recordFormImpression');
  }, []);

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event && event.preventDefault();
      setError(undefined);
      setLoading(true);
      logEvent('submit', { event_category: 'Waitlist' });

      addUserToWaitlist(name, email)
        .then(() => {
          logEvent('success', { event_category: 'Waitlist' });
          if (isMounted()) {
            setEmail('');
            setError(undefined);
            setSuccess(true);
          }
        })
        .catch(_error => {
          logEvent('failed', { event_category: 'Waitlist' });
          if (isMounted()) {
            setError((_error as Error).message);
            setSuccess(false);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [email, name, isMounted, logEvent],
  );

  return (
    <section className="w-full my-8">
      <div className="w-full max-w-xl mx-auto p-10 bg-gray-200 rounded-lg">
        <form onSubmit={handleSubmit}>
          <h3 className="mb-5 text-md">
            Join our waitlist for initial Winzer sale!
          </h3>
          <div className="flex flex-col space-y-2">
            <label className="font-light">First name:</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Jonh"
              className="p-3 rounded-lg font-light"
              onBlur={() =>
                logEvent('input_blur_name', { event_category: 'Waitlist' })
              }
            />
            <label className="font-light mt-3">Email address:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="welcome@winzeland.com"
              className="p-3 rounded-lg font-light"
              onBlur={() =>
                logEvent('input_blur_email', { event_category: 'Waitlist' })
              }
            />
            {loading && (
              <div className="text-xs text-gray-500">Submitting...</div>
            )}
            {error && <div className="text-xs text-red-500">{error}</div>}
            {success && (
              <div className="text-xs text-green-500">
                Submitted. Please check your inbox and confirm email to verify
                subscription!
              </div>
            )}
          </div>
          <div className="mt-5 flex flex-col items-center gap-4 md:flex-row-reverse md:justify-between">
            <button
              type="submit"
              disabled={loading || !email.length || !name.length}
              className={classNames(
                'w-48 rounded-lg p-3 bg-green-900 cursor-pointer text-white duration-300 hover:bg-opacity-75',
                (!email.length || !name.length) &&
                  'cursor-not-allowed opacity-25',
                loading && 'cursor-loading opacity-25',
              )}
            >
              Join Waitlist
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
