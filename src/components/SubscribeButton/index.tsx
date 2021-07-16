import { useSession, signIn } from "next-auth/client";
import { api } from "../../services/api";
import { getStripeJS } from "../../services/stripe-js";
import styles from "./styles.module.scss";

export function SubscribeButton() {
  const [session] = useSession();

  async function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }

    try {
      const response = await api.post("/subscribe");

      const { sessionId } = response.data;
      const stripe = await getStripeJS();

      await stripe.redirectToCheckout({ sessionId: sessionId });
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Assine Agora
    </button>
  );
}
