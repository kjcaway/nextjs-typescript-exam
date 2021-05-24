import { useRouter } from 'next/dist/client/router'
import React from 'react'
import Layout from '../../components/Layout'

function User() {
  const router = useRouter()
  const { userId } = router.query

  return <Layout>My Id is {userId}</Layout>
}

export default User
