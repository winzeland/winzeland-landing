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

export const JoinWaitlistMini: React.FC = () => {
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
    <div className="w-4/5 my-12 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row space-x-2 justify-center">
          <div className="flex flex-col w-1/2">
            <label className="font-light mb-2">First name:</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Jonh"
              className="p-3 rounded-lg font-light text-black"
              onBlur={() =>
                logEvent('input_blur_name', { event_category: 'Waitlist' })
              }
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="font-light mb-2">Email address:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="welcome@winzeland.com"
              className="p-3 rounded-lg font-light text-black"
              onBlur={() =>
                logEvent('input_blur_email', { event_category: 'Waitlist' })
              }
            />
          </div>
        </div>
        <div className="flex flex-row space-x-2 justify-center">
            <button
              type="submit"
              disabled={loading || !email.length || !name.length}
              className={classNames(
                'w-80 mt-4 rounded-lg p-3 bg-green-900 cursor-pointer text-white duration-300 hover:bg-opacity-75',
                (!email.length || !name.length) &&
                  'cursor-not-allowed opacity-25',
                loading && 'cursor-loading opacity-25',
              )}
            >
              Join WaitList
            </button>
          </div>
        {loading && (
          <div className="text-xs text-gray-500 text-center mt-3">
            Submitting...
          </div>
        )}
        {error && (
          <div className="text-xs text-red-500 text-center mt-3">{error}</div>
        )}
        {success && (
          <div className="text-xs text-green-500 text-center mt-3">
            Submitted. Please check your inbox and confirm email to verify
            subscription!
          </div>
        )}
      </form>
    </div>
  );
};
