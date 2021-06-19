import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import Container from '@/components/Container';
// import Subscribe from '@/components/Subscribe';
import ViewCounter from '@/components/ViewCounter';
import BlogSeo from '@/components/BlogSeo';

const editUrl = (slug) =>
  `https://github.com/aminsource/hoomanamini/tree/master/data/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://hoomanamini.ir/blog/${slug}`
  )}`;

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container>
      <BlogSeo
        url={`https://manakit.ir/blog/${frontMatter.slug}`}
        {...frontMatter}
      />
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full px-8">
        <h1 className="text-1xl md:text-2xl tracking-tight mb-4 text-black dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
          <div className="flex items-center">
            {/* <Image
              alt="هومن امینی"
              height={24}
              width={24}
              src="/avatar.jpg"
              className="rounded-full"
            /> */}
            {/* <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {frontMatter.by}
              {'هومن امینی / '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </p> */}
          </div>
          {/* <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {frontMatter.readingTime.text}
            {` • `}
            <ViewCounter slug={frontMatter.slug} />
          </p> */}
        </div>
        <div className="prose dark:prose-dark max-w-none w-full">
          {children}
        </div>
        {/* <div className="mt-8">
          <Subscribe />
        </div> */}
        <div className="text-sm text-blue-600 dark:text-gray-300 mt-5">
          {/* <a
            href={discussUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'در توییتر بحث کنید'}
          </a>
          {` • `} */}
          <a
            href={editUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'در گیت هاب ویرایش کنید'}
          </a>
        </div>
      </article>
    </Container>
  );
}
