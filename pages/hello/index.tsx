import React from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Layout from '../../components/Layout'

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/hello`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

function index({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <Layout title="Hello"><p>{data.name}</p></Layout>
}

export default index
