/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { GetStaticProps } from "next";
import { SubscribeButton } from "../components/SubscribeButton";
import styles from "./home.module.scss";
import { stripe } from "../services/stripe";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title> Home | G News </title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 👏 Oi, seja bem vindo!</span>
          <h1>
            Tudo sobre o nosso <span>Mundo</span>
          </h1>
          <p>
            Tenha acesso a todas as publicações <br />
            <span> por {product.amount}/mês</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl Codding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1J8BT5Hx7RDh6ETMQ098Ykod");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price.unit_amount / 100),
  };
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
