import type { CollectionEntry } from 'astro:content';

export const interviewQuestionPageSize = 10;

export type InterviewQuestionPost = CollectionEntry<'interviewQuestions'>;

export function getInterviewQuestionCreatedTime(post: InterviewQuestionPost) {
  return (post.data.importedAt ?? post.data.publishDate).valueOf();
}

export function sortInterviewQuestionPosts(posts: InterviewQuestionPost[]) {
  return [...posts].sort((a, b) => getInterviewQuestionCreatedTime(b) - getInterviewQuestionCreatedTime(a) || a.id.localeCompare(b.id));
}
