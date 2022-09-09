import React, { createContext, useState } from "react";
import { api } from "../libs/axios";

interface Issues {
  number: string,
  title: string,
  htmlUrl: string,
  comments: string,
  created_at: string,
  body: string,
}

interface IssuesContextTypes {
  fetchIssues: (query: string) => Promise<void>
  issues: Issues[]
}

export const IssuesContext = createContext({} as IssuesContextTypes)

export function IssuesContextProvider({ children }: { children: React.ReactNode }) {

  const [issues, setIssues] = useState<Issues[]>([]);

  async function fetchIssues(query: string) {
    const response = await api.get('/search/issues', {
      params: {
        q: query,
      }
    });
    const data = await response.data.items;

    setIssues(data);
    console.log(issues)
  }

  return (
    <IssuesContext.Provider value={{ fetchIssues, issues }}>
      {children}
    </IssuesContext.Provider>
  )
}