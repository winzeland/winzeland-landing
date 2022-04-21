import classNames from 'classnames';
import { useAnalytics } from 'hooks/useAnalytics';
import { useIsMounted } from 'hooks/useIsMounted';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';

export const Subscribe: React.FC = () => {
  const isMounted = useIsMounted();
  const { logEvent } = useAnalytics();

  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      setEmail(event.currentTarget.value),
    [],
  );
  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event && event.preventDefault();
      setError(undefined);
      setLoading(true);
      logEvent('submit', { event_category: 'Subscription' });

      fetch('/api/subscribe', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
        .then(
          response =>
            response.json() as Promise<{ status: boolean; error?: string }>,
        )
        .then(({ status, error: _error }) => {
          if (isMounted()) {
            if (status) {
              logEvent('success', { event_category: 'Subscription' });
              setEmail('');
              setError(undefined);
              setSuccess(true);
            } else {
              logEvent('failed', { event_category: 'Subscription' });
              setError(_error);
              setSuccess(false);
            }
          }
        })
        .catch(() => {
          if (isMounted()) {
            logEvent('failed', { event_category: 'Subscription' });
            setError('Something went wrong.');
            setSuccess(false);
          }
        })
        .finally(() => {
          if (isMounted()) {
            setLoading(false);
          }
        });
    },
    [email, isMounted, logEvent],
  );

  return (
    <section className="w-full my-8">
      <div className="w-full max-w-2xl mx-auto p-10 bg-gray-200 rounded-lg">
        <form onSubmit={handleSubmit}>
          <h2 className="mb-5 text-md">
            Subscribe to be whitelisted for early access
          </h2>
          <div className="flex flex-col space-y-2">
            <label className="font-light">Email address:</label>
            <input
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="welcome@yonder.network"
              className="p-3 rounded-lg font-light"
              onBlur={() =>
                logEvent('input_blur', { event_category: 'Subscription' })
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
          <div className="mt-5 text-center">
            <button
              type="submit"
              disabled={loading || !email.length}
              className={classNames(
                'rounded-lg p-3 bg-red-400 cursor-pointer text-white',
                !email.length && 'cursor-not-allowed opacity-25',
                loading && 'cursor-loading opacity-25',
              )}
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
