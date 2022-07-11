import React from 'react'
import Link from 'next/link'
import { Header } from '../components/utils/Header'

function success() {
  return (
    <>
        <Header login="false" />
        <div className="container pt-3">
            <h2>Thanks for your buy!</h2>
            <div className="mt-2 mb-1">
                <span className="ml-1 mt-1 mb-2 d-block">
                Access to the course
                <Link href="/videos">
                    <a style={{ cursor: "pointer" }}>
                    {" "}
                    <u>here</u>
                    </a>
                </Link>
                </span>
            </div>
        </div>
    </>
  )
}

export default success