import { CardPostContainer } from "./styles";

export function CardPost(props: any) {

  return (
    <CardPostContainer>
      <div className="headContent">
        <h2>{props.textTitle}</h2>

        <time title="Publicado em 06/09/2022 às 19:53hrs" dateTime="'2022-06-07T15:28:41.479Z'">{props.createdAt}</time>
      </div>

      <p>
        {props.textContent}
      </p>

    </CardPostContainer>
  )
}