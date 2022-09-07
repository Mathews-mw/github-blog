import { CardPostContainer } from "./styles";

export function CardPost() {
  return (
    <CardPostContainer>
      <div className="headContent">
        <h2>JavaScript data types and data structures</h2>

        <time title="Publicado em 06/09/2022 às 19:53hrs" dateTime="'2022-06-07T15:28:41.479Z'">Há 1 dia</time>
      </div>

      <p>
        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

        Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

        let foo = 42; // foo is now a number
        foo = 'bar'; // foo is now a string
        foo = true; // foo is now a boolean
      </p>

    </CardPostContainer>
  )
}