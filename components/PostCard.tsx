import Link from 'next/link'
import React from 'react'

interface PostCardProps {
    readonly href: string
    readonly title: string
}

export default function PostCard({ href, title }: PostCardProps) {
    return (
        // <div>
        // {/* <ul> */}
        <li>
            <Link href={href}>{title}</Link>
        </li>
        // <li>
        // <Link href='/blog/articles-title-2'>article 2</Link>
        // </li>
        // </ul>
        // </div>
    )
}
