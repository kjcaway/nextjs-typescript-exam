import Layout from '../components/Layout'
import { getSortedPostsData } from '../lib/posts'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <p>This is index.</p>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }: any) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
