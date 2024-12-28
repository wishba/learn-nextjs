import Image from 'next/image'
import PostCard from '../../components/PostCard'
import { getAllPost } from '../../lib/post'

export default async function BlogPage() {
    const posts = await getAllPost()

    return (
        <div className='p-8 font-[family-name:var(--font-geist-sans)]'>
            <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
                <ul>
                    {posts.map((post) => (
                        <PostCard
                            key={`/blog/${post.slug}`}
                            href={`/blog/${post.slug}`}
                            title={post.title}
                        />
                    ))}
                </ul>
                <div className='flex gap-4 items-center flex-col sm:flex-row'>
                    <a
                        className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
                        href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Image
                            className='dark:invert'
                            src='https://nextjs.org/icons/vercel.svg'
                            alt='Vercel logomark'
                            width={20}
                            height={20}
                        />
                        Deploy now
                    </a>
                    <a
                        className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44'
                        href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Read our docs
                    </a>
                </div>
            </main>
            <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
                {/* <footer className='absolute bottom-0'> */}
                <a
                    className='flex items-center gap-2 hover:underline hover:underline-offset-4'
                    href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Image
                        aria-hidden
                        src='https://nextjs.org/icons/file.svg'
                        alt='File icon'
                        width={16}
                        height={16}
                    />
                    Learn
                </a>
                <a
                    className='flex items-center gap-2 hover:underline hover:underline-offset-4'
                    href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Image
                        aria-hidden
                        src='https://nextjs.org/icons/window.svg'
                        alt='Window icon'
                        width={16}
                        height={16}
                    />
                    Examples
                </a>
                <a
                    className='flex items-center gap-2 hover:underline hover:underline-offset-4'
                    href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Image
                        aria-hidden
                        src='https://nextjs.org/icons/globe.svg'
                        alt='Globe icon'
                        width={16}
                        height={16}
                    />
                    Go to nextjs.org →
                </a>
            </footer>
        </div>
    )
}
