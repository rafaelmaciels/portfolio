// src/lib/github.ts

export interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  stargazers_count: number;
  pushed_at: string;
  topics: string[];
  fork: boolean;
}

export async function getRepos(): Promise<Repo[]> {
  const username = "rafaelmaciels";

  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) throw new Error("Falha ao buscar repositórios");

    const repos: Repo[] = await res.json();

    const filtered = repos
      .filter((repo) => !repo.fork && repo.description)
      .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
      .slice(0, 6);

    return filtered;
  } catch (error) {
    console.error(error);
    return [];
  }
}
