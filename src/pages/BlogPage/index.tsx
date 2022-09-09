import { ProfileCard } from "./components/ProfileCard";
import { CardPost } from "./components/CardPost";
import { SearchForm } from "./components/SearchForm";
import { MainContent, PageContainer } from "./styles";
import { useContext } from "react";
import { IssuesContext } from "../../contexts/IssuesContext";

export function BlogPage() {
  
  const { issues } = useContext(IssuesContext);

  return (
    <PageContainer>

      <ProfileCard />

      <MainContent>
        <SearchForm />

        <div className="PostsCards">
          {issues.map(issue => {
            return (
              <CardPost textTitle={issue.title} textContent={issue.body} createdAt={issue.created_at}/>
            )
          })}
        </div>

      </MainContent>

    </PageContainer>
  )
}