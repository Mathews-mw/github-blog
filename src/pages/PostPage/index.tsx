import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'
import rehypeSanitize from 'rehype-sanitize'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {dracula} from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { TitlePostCard } from "./components/TitlePostCard";

import { PagePostContainer, PostContent } from "./styles";

export function PostPage() {
  
  const markdownContet = `
  <strong>Programming languages all have built-in data structures, but these often differ from one language to another</strong>. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

  [Dynamic typing](exemple.com)
  
  JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
  `
  
  const markdownCode = `Here is some JavaScript code:
  ~~~js
  let foo = 42;   // foo is now a number
  foo = ‘bar’;    // foo is now a string
  foo = true;     // foo is now a boolean
  ~~~
  `
  return (
    <PagePostContainer>
      <TitlePostCard />
      <PostContent>

        <ReactMarkdown children={markdownContet} components={{blockquote: 'blockquote', h1: 'h3', strong: 'strong'}} rehypePlugins={[rehypeRaw, rehypeSanitize]} remarkPlugins={[remarkGfm]}/>

        <br />

        <ReactMarkdown
          children={markdownCode}
          components={{
            code({ node, inline, className, children, style, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={dracula}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        />

      </PostContent>
      
    </PagePostContainer>
  )
}