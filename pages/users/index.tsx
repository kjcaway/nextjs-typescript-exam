import React from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'

function index() {
  return (
    <Layout title="Users">
      <nav>
        <Link href="/users">
          <a>Users</a>
        </Link>{' '}
        |{' '}
        <Link href="/users/posts">
          <a>Posts</a>
        </Link>{' '}
      </nav>
      <p>This is Users Page.</p>
    </Layout>
  )
}

export default index
