import Head from 'next/head'
import Link from "next/link";
import Hero from "@/components/Hero";
import Seo from "@/components/Seo";
import META from "@/const/META";

export default function Home() {
  return (
    <>
      <Seo meta={META.INDEX}/>
      <Hero/>
      <main>

      </main>
    </>
  )
}
