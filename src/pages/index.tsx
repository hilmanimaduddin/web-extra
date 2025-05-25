import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import WhyChooseUs from "@/components/whyChooseUs";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>WebDevSolutions - Jasa Pembuatan Website Profesional</title>
        <meta
          name="description"
          content="Jasa pembuatan website profesional dengan teknologi terbaru"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
