import { ProfileCard } from "../../components/ProfileCard";
import { CardPost } from "./components/CardPost";
import { SearchForm } from "./components/SearchForm";
import { MainContent, PageContainer } from "./styles";

export function BlogPage() {
  return (
    <PageContainer>

      <ProfileCard />

      <MainContent>
        <SearchForm />

        <div className="PostsCards">
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />       
        </div>

      </MainContent>

    </PageContainer>
  )
}