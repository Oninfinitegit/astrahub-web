"use client";
import { useState } from "react";

export function WaitlistModal() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [response, setResponse] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  async function joinWaitlist() {
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <label
        htmlFor="my-modal-4"
        className="btn btn-sm px-10 max-w-xs bg-blue-500"
      >
        join wait list
      </label>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer text-black">
        <label className="modal-box relative" htmlFor="">
          {response ? (
            <>
              <h3>{response.message}</h3>
              <div className="modal-action">
                <label htmlFor="my-modal-4" className="btn">
                  Yay!
                </label>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-xl font-bold">Join our wait list!</h3>
              <p className="py-4">
                Astrahub will be lunched soon. please join our wait list to be
                the first one to hear about Astrahub.
              </p>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  placeholder="sample@email.com"
                  className="input input-bordered w-full "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <button
                  className="btn bg-blue-500 w-full text-white border-0"
                  onClick={() => joinWaitlist()}
                >
                  {isLoading ? (
                    <div
                      className="w-8 h-8 rounded-full animate-spin
                border-y-2 border-solid border-white border-t-transparent shadow-md"
                    />
                  ) : (
                    <>Continue</>
                  )}
                </button>
              </div>
            </>
          )}
        </label>
      </label>
    </>
  );
}
